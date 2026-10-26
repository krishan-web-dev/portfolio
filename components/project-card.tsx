import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import { TechBadge } from "@/components/tech-badge";
import type { Project, ProjectTier } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  variant?: ProjectTier;
};

const contributionLabels = {
  built: "Built",
  revamped: "Revamped",
  contributed: "Contributed",
  maintained: "Maintained",
  unknown: "",
} satisfies Record<Project["contribution"], string>;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <path d="M5 15 15 5m-7 0h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ProjectCard({ project, variant = project.projectTier }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const industry = project.industry[0];
  const platform = project.platforms[0];
  const contribution = contributionLabels[project.contribution];

  if (variant === "historical") {
    return (
      <Link
        href={href}
        aria-label={`View ${project.name} project`}
        className="group flex min-h-52 flex-col rounded-2xl border border-line bg-surface/55 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-surface focus-visible:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-md border border-line bg-white/[0.025] px-2 py-1 text-[0.62rem] font-semibold tracking-[0.12em] text-muted uppercase">
            Historical project
          </span>
          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line text-muted transition group-hover:border-accent/40 group-hover:text-accent-soft motion-reduce:transition-none">
            <ArrowIcon />
          </span>
        </div>

        <div className="mt-7">
          <h3 className="text-lg font-semibold tracking-[-0.025em] text-primary">
            {project.name}
          </h3>
          {industry || platform ? (
            <p className="mt-2 text-xs text-secondary">
              {[industry, platform].filter(Boolean).join(" · ")}
            </p>
          ) : (
            <p className="mt-2 text-xs text-muted">Earlier client work</p>
          )}
        </div>

        <span className="mt-auto pt-7 text-xs font-semibold tracking-[0.12em] text-secondary uppercase transition group-hover:text-accent-soft motion-reduce:transition-none">
          View project
        </span>
      </Link>
    );
  }

  const isFeatured = variant === "featured";
  const technologies = project.technologies.confirmed.slice(0, isFeatured ? 4 : 3);

  return (
    <Link
      href={href}
      aria-label={`View ${project.name} project`}
      className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/75 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-surface hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)] focus-visible:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="overflow-hidden border-b border-line bg-surface-muted">
        <div className="transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none">
          <ProjectVisual
            image={project.images.cover}
            alt={`${project.name} website preview`}
            ratio={isFeatured ? "hero" : "landscape"}
          />
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${isFeatured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.66rem] font-semibold tracking-[0.12em] uppercase">
          {industry ? <span className="text-accent-soft">{industry}</span> : null}
          {industry && platform ? <span className="size-1 rounded-full bg-line-strong" /> : null}
          {platform ? <span className="text-muted">{platform}</span> : null}
        </div>

        <div className={`${industry || platform ? "mt-4" : ""} flex items-start justify-between gap-4`}>
          <h3
            className={`${isFeatured ? "text-2xl sm:text-[1.7rem]" : "text-xl"} font-semibold tracking-[-0.035em] text-primary`}
          >
            {project.name}
          </h3>
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] text-secondary transition group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white motion-reduce:transition-none">
            <ArrowIcon />
          </span>
        </div>

        <p className={`mt-3 text-sm text-secondary ${isFeatured ? "leading-6 sm:text-[0.95rem]" : "leading-6"}`}>
          {project.summary}
        </p>

        {isFeatured && (project.role || contribution) ? (
          <dl className="mt-5 grid gap-3 border-y border-line py-4 text-xs sm:grid-cols-2">
            {project.role ? (
              <div>
                <dt className="text-muted">Role</dt>
                <dd className="mt-1 font-medium text-secondary">{project.role}</dd>
              </div>
            ) : null}
            {contribution ? (
              <div>
                <dt className="text-muted">Contribution</dt>
                <dd className="mt-1 font-medium text-secondary">{contribution}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {technologies.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        ) : null}

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold tracking-[0.12em] text-secondary uppercase transition group-hover:text-accent-soft motion-reduce:transition-none">
          {isFeatured ? "View case study" : "View project"}
        </span>
      </div>
    </Link>
  );
}
