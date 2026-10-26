create extension if not exists pgcrypto;

create table if not exists public.portfolio_access_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 100),
  email text not null check (char_length(email) <= 254),
  email_normalized text not null,
  company text,
  reason text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  approval_token_hash text not null unique,
  approval_token_expires_at timestamptz not null,
  approval_authorization_consumed_at timestamptz,
  decision_at timestamptz,
  owner_notification_status text not null default 'pending' check (owner_notification_status in ('pending', 'sent', 'failed')),
  visitor_notification_status text check (visitor_notification_status in ('pending', 'sent', 'failed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists portfolio_access_requests_email_created_idx
  on public.portfolio_access_requests (email_normalized, created_at desc);
create index if not exists portfolio_access_requests_pending_idx
  on public.portfolio_access_requests (status, approval_token_expires_at)
  where status = 'pending';

create table if not exists public.portfolio_access_links (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null unique references public.portfolio_access_requests(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  redeemed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists portfolio_access_links_active_idx
  on public.portfolio_access_links (token_hash, expires_at)
  where redeemed_at is null;

create table if not exists public.portfolio_sessions (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.portfolio_access_requests(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create index if not exists portfolio_sessions_active_idx
  on public.portfolio_sessions (token_hash, expires_at)
  where revoked_at is null;
create index if not exists portfolio_sessions_request_idx
  on public.portfolio_sessions (request_id);

create table if not exists public.portfolio_rate_limits (
  rate_key text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 1 check (request_count > 0)
);

alter table public.portfolio_access_requests enable row level security;
alter table public.portfolio_access_links enable row level security;
alter table public.portfolio_sessions enable row level security;
alter table public.portfolio_rate_limits enable row level security;

revoke all on public.portfolio_access_requests from anon, authenticated;
revoke all on public.portfolio_access_links from anon, authenticated;
revoke all on public.portfolio_sessions from anon, authenticated;
revoke all on public.portfolio_rate_limits from anon, authenticated;
grant select, insert, update, delete on public.portfolio_access_requests to service_role;
grant select, insert, update, delete on public.portfolio_access_links to service_role;
grant select, insert, update, delete on public.portfolio_sessions to service_role;
grant select, insert, update, delete on public.portfolio_rate_limits to service_role;

create or replace function public.create_portfolio_access_request(
  p_full_name text,
  p_email text,
  p_company text,
  p_reason text,
  p_approval_token_hash text,
  p_approval_expires_at timestamptz,
  p_rate_key text
)
returns table (request_id uuid, should_notify boolean, result text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_rate public.portfolio_rate_limits%rowtype;
  v_existing public.portfolio_access_requests%rowtype;
  v_request_id uuid;
begin
  select * into v_rate
  from public.portfolio_rate_limits
  where rate_key = p_rate_key
  for update;

  if not found then
    insert into public.portfolio_rate_limits (rate_key) values (p_rate_key);
  elsif v_rate.window_started_at < now() - interval '15 minutes' then
    update public.portfolio_rate_limits
      set window_started_at = now(), request_count = 1
      where rate_key = p_rate_key;
  elsif v_rate.request_count >= 5 then
    return query select null::uuid, false, 'rate_limited'::text;
    return;
  else
    update public.portfolio_rate_limits
      set request_count = request_count + 1
      where rate_key = p_rate_key;
  end if;

  select par.* into v_existing
  from public.portfolio_access_requests par
  where par.email_normalized = lower(trim(p_email))
    and par.created_at > now() - interval '24 hours'
    and par.status = 'pending'
  order by par.created_at desc
  limit 1;

  if v_existing.id is not null and v_existing.owner_notification_status = 'failed' then
    update public.portfolio_access_requests
    set approval_token_hash = p_approval_token_hash,
        approval_token_expires_at = p_approval_expires_at,
        owner_notification_status = 'pending',
        updated_at = now()
    where id = v_existing.id;
    return query select v_existing.id, true, 'created'::text;
    return;
  elsif v_existing.id is not null then
    return query select v_existing.id, false, 'duplicate'::text;
    return;
  end if;

  insert into public.portfolio_access_requests (
    full_name, email, email_normalized, company, reason,
    approval_token_hash, approval_token_expires_at
  ) values (
    trim(p_full_name), trim(p_email), lower(trim(p_email)), nullif(trim(p_company), ''),
    nullif(trim(p_reason), ''), p_approval_token_hash, p_approval_expires_at
  ) returning id into v_request_id;

  return query select v_request_id, true, 'created'::text;
end;
$$;

create or replace function public.decide_portfolio_access_request(
  p_request_id uuid,
  p_decision text,
  p_approval_token_hash text,
  p_visitor_token_hash text,
  p_visitor_token_expires_at timestamptz
)
returns table (result text, visitor_email text, visitor_name text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_request public.portfolio_access_requests%rowtype;
begin
  if p_decision not in ('approved', 'rejected') then
    return query select 'invalid'::text, null::text, null::text;
    return;
  end if;

  select * into v_request
  from public.portfolio_access_requests
  where id = p_request_id
  for update;

  if not found
    or v_request.approval_token_hash <> p_approval_token_hash
    or v_request.approval_token_expires_at <= now() then
    return query select 'invalid'::text, null::text, null::text;
    return;
  end if;

  if v_request.status <> 'pending' or v_request.approval_authorization_consumed_at is not null then
    return query select 'already_processed'::text, null::text, null::text;
    return;
  end if;

  if p_decision = 'approved' and (p_visitor_token_hash is null or p_visitor_token_expires_at is null) then
    return query select 'invalid'::text, null::text, null::text;
    return;
  end if;

  update public.portfolio_access_requests
  set status = p_decision,
      decision_at = now(),
      approval_authorization_consumed_at = now(),
      visitor_notification_status = case when p_decision = 'approved' then 'pending' else null end,
      updated_at = now()
  where id = p_request_id;

  if p_decision = 'approved' then
    insert into public.portfolio_access_links (request_id, token_hash, expires_at)
    values (p_request_id, p_visitor_token_hash, p_visitor_token_expires_at);
  end if;

  return query select p_decision, v_request.email, v_request.full_name;
end;
$$;

create or replace function public.redeem_portfolio_access_link(
  p_visitor_token_hash text,
  p_session_token_hash text,
  p_session_expires_at timestamptz
)
returns table (result text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_link public.portfolio_access_links%rowtype;
begin
  select * into v_link
  from public.portfolio_access_links
  where token_hash = p_visitor_token_hash
  for update;

  if not found or v_link.redeemed_at is not null or v_link.expires_at <= now() then
    return query select 'invalid'::text;
    return;
  end if;

  update public.portfolio_access_links set redeemed_at = now() where id = v_link.id;
  insert into public.portfolio_sessions (request_id, token_hash, expires_at)
  values (v_link.request_id, p_session_token_hash, p_session_expires_at);

  return query select 'redeemed'::text;
end;
$$;

create or replace function public.validate_portfolio_session(p_session_token_hash text)
returns table (request_id uuid, visitor_name text, visitor_email text, expires_at timestamptz)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  return query
  with valid_session as (
    update public.portfolio_sessions ps
      set last_seen_at = now()
      where ps.token_hash = p_session_token_hash
        and ps.revoked_at is null
        and ps.expires_at > now()
      returning ps.request_id, ps.expires_at
  )
  select vs.request_id, par.full_name, par.email, vs.expires_at
  from valid_session vs
  join public.portfolio_access_requests par on par.id = vs.request_id
  where par.status = 'approved';
end;
$$;

revoke all on function public.create_portfolio_access_request(text,text,text,text,text,timestamptz,text) from public, anon, authenticated;
revoke all on function public.decide_portfolio_access_request(uuid,text,text,text,timestamptz) from public, anon, authenticated;
revoke all on function public.redeem_portfolio_access_link(text,text,timestamptz) from public, anon, authenticated;
revoke all on function public.validate_portfolio_session(text) from public, anon, authenticated;
grant execute on function public.create_portfolio_access_request(text,text,text,text,text,timestamptz,text) to service_role;
grant execute on function public.decide_portfolio_access_request(uuid,text,text,text,timestamptz) to service_role;
grant execute on function public.redeem_portfolio_access_link(text,text,timestamptz) to service_role;
grant execute on function public.validate_portfolio_session(text) to service_role;

insert into storage.buckets (id, name, public)
values ('portfolio-private', 'portfolio-private', false)
on conflict (id) do update set public = false;
