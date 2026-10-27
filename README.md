# Udaya Krishantha Portfolio

Next.js portfolio with public project pages and email-approved access to private case-study material.

## Local development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and configure the values described below. Never expose the Supabase secret key, Turnstile secret, owner passphrase, token pepper, or Brevo SMTP key through a `NEXT_PUBLIC_` variable.

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

### 3. Brevo SMTP

1. In Brevo, create and verify `krishanthananayakkara@gmail.com` as a sender. Brevo may rewrite the visible sender according to its sender-verification and deliverability rules; the application does not depend on the rewritten value.
2. Open Brevo's SMTP settings and copy the exact SMTP login. Depending on the account, it may differ from the Brevo account email.
3. Generate a Brevo SMTP key. Do not use a Brevo API key or account password.
4. Configure `SMTP_HOST=smtp-relay.brevo.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, `SMTP_USER`, and server-only `SMTP_PASSWORD`.
5. Set `PORTFOLIO_OWNER_EMAIL` and `PORTFOLIO_FROM_EMAIL` to `krishanthananayakkara@gmail.com`.

The Nodemailer transport requires STARTTLS on port 587, requires TLS 1.2 or newer, rejects invalid certificates, and applies connection, greeting, and socket timeouts. SMTP failures write only sanitized error metadata to server logs; credentials, tokens, approval URLs, and message contents are not logged. A send is marked successful only after SMTP accepts its recipient.

To avoid duplicate approval links, delivery is retried once only for failures that are known to occur before message submission: DNS resolution, connection, EHLO, or STARTTLS. Authentication, sender/recipient rejection, DATA, and ambiguous post-submission failures are never retried automatically.

To verify SMTP from the local development environment and send one test message to the configured owner:

```bash
pnpm test:smtp
```

The command is CLI-only—there is no public test endpoint—and it refuses to run when `NODE_ENV=production`.

Owner emails contain approval and rejection links. GET only renders a confirmation page; the owner passphrase and a same-origin POST are required to make a decision. Approved visitors receive a one-time link that expires after 48 hours.

### 4. Secrets and URL

Set `NEXT_PUBLIC_SITE_URL` to the exact canonical deployment origin, without a trailing slash. Generate separate high-entropy values for `PORTFOLIO_OWNER_PASSPHRASE` and `PORTFOLIO_TOKEN_PEPPER`, for example with a password manager or `openssl rand -base64 48`.

The owner passphrase is checked only on the server using constant-time digest comparison. Access and session token values are never stored; only SHA-256 hashes are persisted. The session cookie is HttpOnly, SameSite=Strict, Secure in production, and expires after seven days.

### 5. Vercel

Add every `.env.example` variable to the Vercel project settings for Production and the desired Preview environments. Set production `NEXT_PUBLIC_SITE_URL` to `https://udaya-krishantha.vercel.app`, then redeploy. Do not copy `.env.local` into the deployment or expose `SMTP_PASSWORD` to browser code.

The email route handlers use Next.js's default Node.js runtime and await Nodemailer's `sendMail()` before returning from the serverless request. With Cache Components enabled, Next.js does not support an explicit `runtime` export, so the routes intentionally rely on the documented Node.js default. Vercel permits outbound SMTP connections on port 587; port 25 is the blocked SMTP port.

## Private content

Server-only copy lives in `lib/private-case-studies.ts`. Keep it server-only and render it only after `getPortfolioSession()` succeeds. Do not import protected data into Client Components. Store restricted assets in the private Supabase bucket and reference the authenticated asset route.

## Verification

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

For end-to-end testing, use a non-production Supabase project and a verified Brevo sender. Verify valid/invalid submissions, duplicate suppression, approval and rejection confirmation, GET scanner safety, expired/used tokens, concurrent redemption, seven-day expiry, session revocation, unauthorised private API/assets, and SMTP/database failure behavior.
