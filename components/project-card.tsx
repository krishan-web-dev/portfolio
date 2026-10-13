import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { TechBadge } from "@/components/tech-badge";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.externalUrl ?? `/work/${project.slug}`;

  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)] focus-within:border-accent/50 motion-reduce:transform-none motion-reduce:transition-none">
      <div className="overflow-hidden border-b border-line">
        <div className="transition duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none">
          <ProjectVisual
            image={project.image}
            crop={project.imageCrop}
            alt={`Abstract placeholder artwork for ${project.title}`}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.role ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-accent-soft uppercase">
            {project.role}
          </p>
        ) : null}
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-secondary">{project.summary}</p>
        {project.technologies.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        ) : null}
        {project.contribution ? (
          <p className="mt-4 text-xs text-muted">{project.contribution}</p>
        ) : null}
        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
          {...(project.externalUrl
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          View case study
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
