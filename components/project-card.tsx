import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/project-visual";
import { TechBadge } from "@/components/tech-badge";

export function ProjectCard({ project }: { project: Project }) {
  const href = `/work/${project.slug}`;
  const technologies = project.technologies.confirmed;

  return (
    <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/75 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-surface hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)] focus-within:border-accent/60 motion-reduce:transform-none motion-reduce:transition-none">
      <div className="overflow-hidden border-b border-line bg-surface-muted">
        <div className="transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none">
          <ProjectVisual
            image={project.images.cover}
            alt={`${project.name} website preview`}
            ratio="landscape"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.role ? (
              <p className="mb-2 text-[0.68rem] font-semibold tracking-[0.14em] text-accent-soft uppercase">
                {project.role}
              </p>
            ) : null}
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-primary">
              {project.name}
            </h3>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] text-secondary transition group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white">
            <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
              <path d="M5 15 15 5m-7 0h7v7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-secondary">{project.summary}</p>

        {technologies.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        ) : null}

        {project.contribution ? (
          <p className="mt-4 text-xs text-muted">{project.contribution}</p>
        ) : null}

        <Link
          href={href}
          className="mt-auto pt-6 text-xs font-semibold tracking-[0.12em] text-muted uppercase transition hover:text-accent-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
        >
          View case study
        </Link>
      </div>
    </article>
  );
}
