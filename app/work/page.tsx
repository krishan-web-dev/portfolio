import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ProjectCollection } from "@/components/project-collection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: `${projects.length} website and web projects across more than 10 years of development work.`,
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
                Portfolio · {projects.length} projects
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

      <Container className="py-14 sm:py-16 lg:py-20">
        <ProjectCollection projects={projects} />
      </Container>
    </>
  );
}
