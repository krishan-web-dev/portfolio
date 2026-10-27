import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { Container } from "@/components/container";

export const metadata: Metadata = { title: "Review Access Request", robots: { index: false, follow: false } };

type DecisionParams = Promise<{ request?: string; token?: string; decision?: string; state?: string }>;

function Notice({ state }: { state: string }) {
  const content: Record<string, { title: string; body: string }> = {
    approved: { title: "Access approved", body: "The visitor has been sent a secure one-time access link." },
    rejected: { title: "Request rejected", body: "The request was rejected. No access link was created." },
    "already-processed": { title: "Already reviewed", body: "This authorisation link has already been used and no further action was taken." },
    "invalid-passphrase": { title: "Passphrase not accepted", body: "No action was taken. Open the newest approval email and try again with the owner passphrase configured for the production deployment." },
    invalid: { title: "Link unavailable", body: "This authorisation link is invalid or has expired. No action was taken." },
    "delivery-failed": { title: "Approved, but email delivery failed", body: "The approval was recorded, but the visitor email could not be delivered. Check the server SMTP diagnostic before taking further action." },
  };
  const message = content[state] || content.invalid;
  return <div className="rounded-2xl border border-line bg-surface/70 p-7"><h1 className="text-3xl font-semibold tracking-[-0.04em] text-primary">{message.title}</h1><p className="mt-4 leading-7 text-secondary">{message.body}</p><Link href="/work" className="mt-7 inline-flex text-sm font-semibold text-accent-soft hover:text-primary">Return to portfolio</Link></div>;
}

async function DecisionContent({ searchParams }: { searchParams: DecisionParams }) {
  const params = await searchParams;
  if (params.state) return <Notice state={params.state} />;

  const valid = params.request && params.token && (params.decision === "approve" || params.decision === "reject");
  if (!valid) return <Notice state="invalid" />;
  const approving = params.decision === "approve";

  return (
    <div className="rounded-2xl border border-line bg-surface/70 p-7 sm:p-9">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">Owner confirmation</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">{approving ? "Approve private access?" : "Reject this request?"}</h1>
      <p className="mt-4 leading-7 text-secondary">Opening this page has not changed the request. Enter your private owner passphrase and submit to confirm.</p>
      <form action="/api/portfolio-access/decision" method="post" className="mt-8">
        <input type="hidden" name="requestId" value={params.request} />
        <input type="hidden" name="token" value={params.token} />
        <input type="hidden" name="decision" value={params.decision} />
        <label className="text-sm font-medium text-primary">Owner approval passphrase
          <input type="password" name="passphrase" required autoComplete="current-password" className="mt-2 min-h-12 w-full rounded-xl border border-line-strong bg-background/70 px-4 text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
        </label>
        <button type="submit" className={`mt-6 min-h-12 rounded-xl px-5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 ${approving ? "bg-accent hover:bg-accent-bright focus-visible:outline-accent" : "bg-red-700 hover:bg-red-600 focus-visible:outline-red-400"}`}>{approving ? "Confirm approval" : "Confirm rejection"}</button>
      </form>
    </div>
  );
}

export default function AccessDecisionPage({ searchParams }: { searchParams: DecisionParams }) {
  return <Container className="py-20"><div className="mx-auto max-w-xl"><Suspense fallback={<p className="text-secondary">Loading confirmation…</p>}><DecisionContent searchParams={searchParams} /></Suspense></div></Container>;
}
