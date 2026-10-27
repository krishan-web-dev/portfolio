import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { ProjectVisual } from "@/components/project-visual";
import { TechBadge } from "@/components/tech-badge";
import { getProjectBySlug, projects } from "@/data/projects";

const contributionLabels = {
  built: "Built",
  revamped: "Revamped",
  contributed: "Contributed",
  maintained: "Maintained",
  unknown: "",
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { robots: { index: false, follow: false } };

  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const contribution = contributionLabels[project.contribution];
  const primaryImage = project.images.desktop ?? project.images.cover;
  const technologies = Array.from(
    new Set([...project.technologies.confirmed, ...(project.technologies.inferred ?? [])]),
  );
  const hasProjectFacts =
    project.industry.length > 0 ||
    project.platforms.length > 0 ||
    Boolean(project.role) ||
    Boolean(contribution);

  return (
    <>
      <section id="top" className="border-b border-line">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-secondary uppercase transition hover:text-accent-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
          >
            <span aria-hidden="true">←</span> All projects
          </Link>

          <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">
                {project.projectTier === "historical" ? "Earlier client work" : `${project.projectTier} project`}
              </p>
              <h1 className="mt-5 text-5xl leading-[0.96] font-semibold tracking-[-0.06em] text-balance text-primary sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                {project.summary}
              </p>
            </div>

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-5 text-sm font-semibold text-accent-soft transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none"
              >
                Visit current website <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 lg:py-20">
        {project.currentSiteRepresentsMyWork === false ? (
          <div className="mb-8 rounded-xl border border-amber-300/15 bg-amber-300/[0.04] px-4 py-3 text-sm leading-6 text-secondary">
            This case study highlights the development work delivered during my involvement with
            the project.
          </div>
        ) : null}

        <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
          <ProjectVisual image={primaryImage} alt={`${project.name} website preview`} ratio="hero" priority />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {hasProjectFacts ? (
              <dl className="divide-y divide-line rounded-2xl border border-line bg-surface/55 px-5">
                {project.industry.length > 0 ? (
                  <div className="py-4">
                    <dt className="text-xs text-muted">Industry</dt>
                    <dd className="mt-1 text-sm font-medium text-primary">{project.industry.join(" · ")}</dd>
                  </div>
                ) : null}
                {project.platforms.length > 0 ? (
                  <div className="py-4">
                    <dt className="text-xs text-muted">Platform</dt>
                    <dd className="mt-1 text-sm font-medium text-primary">{project.platforms.join(" · ")}</dd>
                  </div>
                ) : null}
                {project.role ? (
                  <div className="py-4">
                    <dt className="text-xs text-muted">Role</dt>
                    <dd className="mt-1 text-sm font-medium text-primary">{project.role}</dd>
                  </div>
                ) : null}
                {contribution ? (
                  <div className="py-4">
                    <dt className="text-xs text-muted">Contribution</dt>
                    <dd className="mt-1 text-sm font-medium text-primary">{contribution}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
          </aside>

          <div className="min-w-0">
            {project.description ? (
              <section>
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-soft uppercase">Overview</p>
                <p className="mt-4 text-lg leading-8 text-secondary">{project.description}</p>
              </section>
            ) : null}

            {technologies.length > 0 ? (
              <section className={project.description ? "mt-10" : ""}>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-primary">Technology</h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Tools and platforms used across this project.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <TechBadge key={technology}>{technology}</TechBadge>
                  ))}
                </div>
              </section>
            ) : null}

            {project.responsibilities?.length ? (
              <section className="mt-10">
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-primary">Responsibilities</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="rounded-xl border border-line bg-surface/45 px-4 py-3 text-sm leading-6 text-secondary"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.caseStudy ? (
              <section className="mt-10 border-t border-line pt-10">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary">Case study</h2>
                <div className="mt-7 space-y-8">
                  {project.caseStudy.challenge ? (
                    <div>
                      <h3 className="text-sm font-semibold text-primary">Challenge</h3>
                      <p className="mt-2 leading-7 text-secondary">{project.caseStudy.challenge}</p>
                    </div>
                  ) : null}
                  {project.caseStudy.solution ? (
                    <div>
                      <h3 className="text-sm font-semibold text-primary">Solution</h3>
                      <p className="mt-2 leading-7 text-secondary">{project.caseStudy.solution}</p>
                    </div>
                  ) : null}
                  {project.caseStudy.technicalImplementation?.length ? (
                    <div>
                      <h3 className="text-sm font-semibold text-primary">Technical implementation</h3>
                      <ul className="mt-3 grid gap-2 text-sm text-secondary sm:grid-cols-2">
                        {project.caseStudy.technicalImplementation.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </Container>
    </>
  );
}
