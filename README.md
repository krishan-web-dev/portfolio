# Udaya Krishantha Portfolio

Next.js portfolio with public project pages and email-approved access to private case-study material.

## Local development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and configure the values described below. Never expose the Supabase secret key, Turnstile secret, owner passphrase, token pepper, or Resend key through a `NEXT_PUBLIC_` variable.

## Private portfolio setup

### 1. Supabase

1. Create a Supabase project.
2. Run `supabase/migrations/202610270001_portfolio_access.sql` in the SQL editor or with the Supabase CLI.
3. Set `SUPABASE_URL` and a server-only `SUPABASE_SECRET_KEY`. The key must be able to use the `service_role`; do not use it in browser code.
4. The migration creates a non-public `portfolio-private` Storage bucket. Upload restricted images and documents there, never under `public/`.
5. Protected files are served through `/api/portfolio-access/assets/<path>` only after server-side session validation.

The existing non-public screenshots have been moved to the local, git-ignored `private-assets/projects` staging directory. Upload that directory to the private bucket while preserving the `projects/<project-slug>/<filename>` object paths. Only the six explicitly featured project directories remain under `public/projects`.

The migration enables RLS, removes access for `anon` and `authenticated`, and exposes the atomic functions only to `service_role`. To revoke access immediately, set `revoked_at = now()` on the relevant row in `portfolio_sessions`.

### 2. Cloudflare Turnstile

1. Create a Turnstile widget for the production hostname.
2. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and server-only `TURNSTILE_SECRET_KEY`.
3. Add `localhost` or use Cloudflare's documented test keys for local testing.

Turnstile is verified server-side before a request is recorded. Database-backed per-IP limiting allows five submissions per 15-minute window, and pending duplicate email submissions within 24 hours return the same public success response without sending another notification.

### 3. Resend

1. Verify a sending domain in Resend for production.
2. Set `RESEND_API_KEY`, `PORTFOLIO_OWNER_EMAIL`, and `PORTFOLIO_FROM_EMAIL`.
3. The from address must belong to the verified domain.

Owner emails contain approval and rejection links. GET only renders a confirmation page; the owner passphrase and a same-origin POST are required to make a decision. Approved visitors receive a one-time link that expires after 48 hours.

### 4. Secrets and URL

Set `NEXT_PUBLIC_SITE_URL` to the exact canonical deployment origin, without a trailing slash. Generate separate high-entropy values for `PORTFOLIO_OWNER_PASSPHRASE` and `PORTFOLIO_TOKEN_PEPPER`, for example with a password manager or `openssl rand -base64 48`.

The owner passphrase is checked only on the server using constant-time digest comparison. Access and session token values are never stored; only SHA-256 hashes are persisted. The session cookie is HttpOnly, SameSite=Strict, Secure in production, and expires after seven days.

### 5. Vercel

Add every `.env.example` variable to the Vercel project settings for Production and the desired Preview environments. Set `NEXT_PUBLIC_SITE_URL` independently for any preview environment used in email-flow testing, then redeploy.

## Private content

Server-only copy lives in `lib/private-case-studies.ts`. Keep it server-only and render it only after `getPortfolioSession()` succeeds. Do not import protected data into Client Components. Store restricted assets in the private Supabase bucket and reference the authenticated asset route.

## Verification

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

For end-to-end testing, use a non-production Supabase project and Resend recipient. Verify valid/invalid submissions, duplicate suppression, approval and rejection confirmation, GET scanner safety, expired/used tokens, concurrent redemption, seven-day expiry, session revocation, unauthorised private API/assets, and provider failure behavior.
