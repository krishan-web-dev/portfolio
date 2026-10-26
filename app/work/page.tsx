import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { ProjectCollection } from "@/components/project-collection";
import { homepageProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Six selected website and web projects across more than 10 years of development work.",
};

export default function WorkPage() {
  return (
    <>
      <section id="top" className="relative overflow-hidden border-b border-line">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">
                Portfolio · {homepageProjects.length} selected projects
              </p>
            </div>
            <h1 className="mt-6 text-5xl leading-[0.98] font-semibold tracking-[-0.06em] text-balance text-primary sm:text-6xl lg:text-7xl">
              Work built across platforms, industries and years.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              Selected case studies, production websites and earlier client work from more than
              a decade of full-stack web development.
            </p>
          </div>
        </Container>
      </section>

      <Container className="pt-14 sm:pt-16 lg:pt-20">
        <section className="cta-panel relative overflow-hidden rounded-3xl border border-accent/20 bg-surface p-7 sm:p-10 lg:p-12" aria-labelledby="private-access-heading">
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft" aria-hidden="true">⌁</span><p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">By approval</p></div>
            <h2 id="private-access-heading" className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-primary sm:text-4xl">Access Private Case Studies</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">Request secure access to deeper project narratives, implementation decisions, and restricted supporting material shared privately with prospective employers and collaborators.</p>
            <Button href="/work/request-access" className="mt-7">Request access <span aria-hidden="true">→</span></Button>
          </div>
        </section>
      </Container>

      <Container className="py-14 sm:py-16 lg:py-20">
        <ProjectCollection projects={homepageProjects} />
      </Container>
    </>
  );
}
