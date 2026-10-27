import type { Metadata } from "next";

import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] items-center py-20">
      <section className="w-full rounded-3xl border border-line bg-surface/80 p-8 sm:p-12 lg:p-16">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">
          Error 404
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[0.98] font-semibold tracking-[-0.06em] text-primary sm:text-6xl">
          This page could not be found.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
          The address may be outdated, or the page may have moved. Continue from the homepage or
          browse the selected work.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">Return home</Button>
          <Button href="/work" variant="secondary">
            View work
          </Button>
        </div>
      </section>
    </Container>
  );
}
