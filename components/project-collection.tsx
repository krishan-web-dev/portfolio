"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectContribution, ProjectTier } from "@/types/project";

const platformOptions = [
  "All",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "Squarespace",
  "Headless WordPress",
  "Custom",
] as const;

const industryOptions = [
  "All",
  "eCommerce & Retail",
  "Healthcare",
  "Industrial",
  "Construction",
  "Real Estate",
  "Hospitality",
  "Travel & Tourism",
  "Sports & Recreation",
  "Marketing",
  "Technology",
  "Non-Profit",
  "Education",
  "Lifestyle",
  "Professional Services",
] as const;

const contributionOptions = [
  { label: "All", value: "all" },
  { label: "Built", value: "built" },
  { label: "Revamped", value: "revamped" },
  { label: "Contributed", value: "contributed" },
  { label: "Maintained", value: "maintained" },
] as const;

type PlatformFilter = (typeof platformOptions)[number];
type IndustryFilter = (typeof industryOptions)[number];
type ContributionFilter = "all" | Exclude<ProjectContribution, "unknown">;

const industryTerms: Record<Exclude<IndustryFilter, "All">, string[]> = {
  "eCommerce & Retail": ["ecommerce", "retail", "fashion", "consumer products"],
  Healthcare: ["healthcare", "medical", "wellbeing", "employee benefits"],
  Industrial: ["industrial", "manufacturing"],
  Construction: ["construction"],
  "Real Estate": ["real estate", "property"],
  Hospitality: ["hospitality", "restaurant", "food"],
  "Travel & Tourism": ["travel", "tourism"],
  "Sports & Recreation": ["sports", "outdoor recreation", "recreation"],
  Marketing: ["marketing", "advertising"],
  Technology: ["technology", "software"],
  "Non-Profit": ["non-profit", "nonprofit", "charity"],
  Education: ["education", "training"],
  Lifestyle: ["lifestyle"],
  "Professional Services": ["professional services", "consulting"],
};

const tierContent: Record<
  ProjectTier,
  { eyebrow: string; title: string; description: string; gridClassName: string }
> = {
  featured: {
    eyebrow: "Featured work",
    title: "Selected projects with deeper technical context.",
    description:
      "Larger builds and standout engagements, presented with the strongest visual and project detail.",
    gridClassName: "md:grid-cols-2",
  },
  standard: {
    eyebrow: "More projects",
    title: "More websites delivered for clients.",
    description:
      "A broader selection of production websites, commerce experiences and client platforms.",
    gridClassName: "sm:grid-cols-2 xl:grid-cols-3",
  },
  historical: {
    eyebrow: "Earlier client work",
    title: "More than a decade of website delivery.",
    description:
      "A selection of websites and client projects completed throughout my earlier development career.",
    gridClassName: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  },
};

function includesNormalized(value: string, query: string) {
  return value.toLocaleLowerCase().includes(query);
}

function matchesIndustry(project: Project, selectedIndustry: IndustryFilter) {
  if (selectedIndustry === "All") return true;

  const projectIndustries = project.industry.map((industry) => industry.toLocaleLowerCase());

  return industryTerms[selectedIndustry].some((term) =>
    projectIndustries.some((industry) => industry.includes(term)),
  );
}

function matchesSearch(project: Project, query: string) {
  if (!query) return true;

  const searchableValues = [
    project.name,
    project.client,
    project.summary,
    project.role,
    ...project.industry,
    ...project.projectTypes,
    ...project.platforms,
    ...project.technologies.confirmed,
    ...(project.technologies.inferred ?? []),
  ].filter((value): value is string => Boolean(value));

  return searchableValues.some((value) => includesNormalized(value, query));
}

function ProjectSection({ projects, tier }: { projects: Project[]; tier: ProjectTier }) {
  if (projects.length === 0) return null;

  const content = tierContent[tier];

  return (
    <section aria-labelledby={`${tier}-projects-heading`}>
      <div className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">
          {content.eyebrow} · {projects.length}
        </p>
        <h2
          id={`${tier}-projects-heading`}
          className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-balance text-primary sm:text-4xl"
        >
          {content.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-secondary">{content.description}</p>
      </div>

      <div className={`mt-9 grid gap-5 ${content.gridClassName}`}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant={tier} />
        ))}
      </div>
    </section>
  );
}

export function ProjectCollection({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState<PlatformFilter>("All");
  const [industry, setIndustry] = useState<IndustryFilter>("All");
  const [contribution, setContribution] = useState<ContributionFilter>("all");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return projects.filter((project) => {
      const platformMatches =
        platform === "All" || project.platforms.some((item) => item === platform);
      const contributionMatches =
        contribution === "all" || project.contribution === contribution;

      return (
        platformMatches &&
        contributionMatches &&
        matchesIndustry(project, industry) &&
        matchesSearch(project, normalizedQuery)
      );
    });
  }, [contribution, industry, platform, projects, query]);

  const groupedProjects = {
    featured: filteredProjects.filter((project) => project.projectTier === "featured"),
    standard: filteredProjects.filter((project) => project.projectTier === "standard"),
    historical: filteredProjects.filter((project) => project.projectTier === "historical"),
  };

  const hasActiveFilters =
    query.length > 0 || platform !== "All" || industry !== "All" || contribution !== "all";

  function clearFilters() {
    setQuery("");
    setPlatform("All");
    setIndustry("All");
    setContribution("all");
  }

  return (
    <div>
      <div className="rounded-2xl border border-line bg-surface/60 p-4 sm:p-5 lg:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.75fr))]">
          <label className="min-w-0">
            <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.12em] text-muted uppercase">
              Search projects and technology
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try Next.js, PHP, Shopify…"
              className="min-h-12 w-full min-w-0 rounded-xl border border-line-strong bg-background/70 px-4 text-sm text-primary outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 motion-reduce:transition-none"
            />
          </label>

          <label className="min-w-0">
            <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.12em] text-muted uppercase">
              Platform
            </span>
            <select
              value={platform}
              onChange={(event) => setPlatform(event.target.value as PlatformFilter)}
              className="min-h-12 w-full min-w-0 rounded-xl border border-line-strong bg-background/70 px-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 motion-reduce:transition-none"
            >
              {platformOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="min-w-0">
            <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.12em] text-muted uppercase">
              Industry
            </span>
            <select
              value={industry}
              onChange={(event) => setIndustry(event.target.value as IndustryFilter)}
              className="min-h-12 w-full min-w-0 rounded-xl border border-line-strong bg-background/70 px-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 motion-reduce:transition-none"
            >
              {industryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="min-w-0">
            <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.12em] text-muted uppercase">
              Contribution
            </span>
            <select
              value={contribution}
              onChange={(event) => setContribution(event.target.value as ContributionFilter)}
              className="min-h-12 w-full min-w-0 rounded-xl border border-line-strong bg-background/70 px-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 motion-reduce:transition-none"
            >
              {contributionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <p className="text-sm text-secondary" aria-live="polite">
            Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of{" "}
            {projects.length} projects across all tiers
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-lg px-3 py-2 text-xs font-semibold tracking-[0.1em] text-accent-soft uppercase transition hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
          <ProjectSection projects={groupedProjects.featured} tier="featured" />
          <ProjectSection projects={groupedProjects.standard} tier="standard" />
          <ProjectSection projects={groupedProjects.historical} tier="historical" />
        </div>
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed border-line-strong bg-surface/35 px-6 py-16 text-center">
          <p className="text-lg font-semibold text-primary">No projects match these filters.</p>
          <p className="mt-2 text-sm text-secondary">Try a broader search or clear the filters.</p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-xl border border-accent/50 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent-soft transition hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
