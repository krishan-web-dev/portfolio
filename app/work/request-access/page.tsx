import type { Metadata } from "next";
import Link from "next/link";

import { AccessRequestForm } from "@/components/access-request-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Request Private Portfolio Access",
  description: "Request secure access to private case studies and restricted portfolio material.",
  robots: { index: false, follow: false },
};

export default function RequestAccessPage() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/work" className="text-sm font-semibold text-accent-soft hover:text-primary">← Back to public work</Link>
        <p className="mt-10 text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">Private portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-balance text-primary sm:text-5xl">Request access to private case studies.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">Share a few details below. Every request is reviewed personally, and approved visitors receive a secure, one-time email link.</p>
        <div className="mt-10">
          <AccessRequestForm siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} />
        </div>
        <p className="mt-5 text-sm leading-6 text-muted">Your information is used only to review and respond to this portfolio-access request.</p>
      </div>
    </Container>
  );
}
