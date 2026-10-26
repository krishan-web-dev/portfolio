import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { Container } from "@/components/container";
import { getPortfolioSession } from "@/lib/portfolio-access";
import { privatePortfolioOverview } from "@/lib/private-case-studies";

export const metadata: Metadata = { title: "Private Case Studies", robots: { index: false, follow: false, nocache: true } };

async function PrivatePortfolio() {
  const session = await getPortfolioSession();
  if (!session) redirect("/work/request-access");

  return <><div className="max-w-3xl"><div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-300" />Secure access active</div><h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-6xl">{privatePortfolioOverview.title}</h1><p className="mt-5 text-lg leading-8 text-secondary">{privatePortfolioOverview.introduction}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{privatePortfolioOverview.sections.map((section) => <section key={section.title} className="rounded-2xl border border-line bg-surface/65 p-6"><div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft" aria-hidden="true">⌁</div><h2 className="text-xl font-semibold text-primary">{section.title}</h2><p className="mt-3 leading-7 text-secondary">{section.description}</p></section>)}</div><p className="mt-10 text-xs text-muted">Session expires {new Date(session.expires_at).toLocaleString("en-NZ", { dateStyle: "medium", timeStyle: "short" })}.</p></>;
}

export default function PrivateWorkPage() {
  return <Container className="py-16 sm:py-20 lg:py-24"><Suspense fallback={<div className="h-48 animate-pulse rounded-2xl bg-surface/60" aria-label="Checking secure access" />}><PrivatePortfolio /></Suspense></Container>;
}
