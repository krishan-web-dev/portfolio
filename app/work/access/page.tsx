import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { Container } from "@/components/container";

export const metadata: Metadata = { title: "Private Portfolio Access", robots: { index: false, follow: false } };

type AccessParams = Promise<{ token?: string; state?: string }>;

async function AccessContent({ searchParams }: { searchParams: AccessParams }) {
  const { token, state } = await searchParams;
  if (state === "invalid" || !token) {
    return <div className="rounded-2xl border border-line bg-surface/70 p-8"><h1 className="text-3xl font-semibold tracking-[-0.04em] text-primary">This access link is unavailable.</h1><p className="mt-4 leading-7 text-secondary">It may be invalid, expired, or already used. You can submit a new access request if needed.</p><Link href="/work/request-access" className="mt-7 inline-flex text-sm font-semibold text-accent-soft hover:text-primary">Request access</Link></div>;
  }

  return <div className="rounded-2xl border border-accent/25 bg-surface/70 p-8"><p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">Secure invitation</p><h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-primary">Open the private portfolio.</h1><p className="mt-4 leading-7 text-secondary">This link is single-use. Confirming creates a secure seven-day session in this browser.</p><form action="/api/portfolio-access/redeem" method="post" className="mt-7"><input type="hidden" name="token" value={token} /><button type="submit" className="min-h-12 rounded-xl bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Confirm and continue</button></form></div>;
}

export default function AccessPage({ searchParams }: { searchParams: AccessParams }) {
  return <Container className="py-20"><div className="mx-auto max-w-xl"><Suspense fallback={<p className="text-secondary">Checking invitation…</p>}><AccessContent searchParams={searchParams} /></Suspense></div></Container>;
}
