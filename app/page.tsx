import Link from "next/link";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
import { getHomepageProjects, projects } from "@/data/projects";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "PHP",
  "Laravel",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "GraphQL",
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: String(projects.length), label: "Web projects" },
  { value: "NZ", label: "Based in New Zealand" },
  { value: "Open", label: "To opportunities" },
];

const expertise = [
  {
    title: "Frontend engineering",
    number: "01",
    description: "Fast, accessible interfaces built for real products and long-term growth.",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend systems",
    number: "02",
    description: "Practical application architecture, integrations and dependable APIs.",
    items: ["PHP", "Laravel", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    title: "CMS and commerce",
    number: "03",
    description: "Flexible content and commerce platforms that teams can operate confidently.",
    items: ["WordPress", "WooCommerce", "Shopify", "ACF", "Headless WordPress"],
  },
  {
    title: "Infrastructure",
    number: "04",
    description: "Production delivery, hosting and the operational details behind stable releases.",
    items: ["Git", "Linux", "VPS", "cPanel / WHM", "Vercel", "DNS / SSL"],
  },
];

const experience = [
  {
    company: "Honu Web Design",
    role: "Senior Web Developer / Full-Stack Developer",
    period: "2014 - Present",
    current: true,
  },
  {
    company: "Champsoft Pvt Ltd",
    role: "Senior UI Designer & Full-Stack Developer",
    period: "2023 - 2024",
    current: false,
  },
  {
    company: "Digital Art Solutions",
    role: "Full-Stack Web Developer",
    period: "2022",
    current: false,
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      {diagonal ? (
        <path d="M5 15 15 5m-7 0h7v7" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <path d="M10 3v10m0 0 4-4m-4 4L6 9M4 16h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  const featuredProjects = getHomepageProjects();
  const matrixProject = projects[0];

  return (
    <>
      <section id="top" className="relative scroll-mt-20 overflow-hidden border-b border-line">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative pt-20 pb-12 sm:pt-24 lg:pt-28 lg:pb-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-[0.7rem] font-semibold tracking-[0.12em] text-secondary uppercase">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                New Zealand / Open to opportunities
              </div>

              <h1 className="mt-7 max-w-[12ch] text-[clamp(3.4rem,6.7vw,6.7rem)] leading-[0.91] font-semibold tracking-[-0.068em] text-balance text-primary">
                Building high-performance{" "}
                <span className="text-accent-soft">web experiences.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                Senior Full-Stack Web Developer with 10+ years of experience building
                production websites, eCommerce platforms and web applications with
                Next.js, React, PHP, Laravel, WordPress and WooCommerce.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#work">
                  View selected work
                  <ArrowIcon />
                </Button>
                <Button href="/cv" variant="secondary">
                  Download CV
                  <DownloadIcon />
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[39rem] lg:justify-self-end">
              <div className="absolute -inset-10 bg-accent/[0.08] blur-[90px]" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-[#0a1422] shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
                <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-white px-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-slate-400" />
                    <span className="size-2 rounded-full bg-slate-300" />
                    <span className="size-2 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-slate-600 uppercase">
                    Featured project
                  </span>
                </div>
                <div className="group relative isolate">
                  <ProjectVisual
                    image={matrixProject.images.cover}
                    alt={`${matrixProject.name} website preview`}
                    priority
                    ratio="banner"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(7,17,31,0.18)_62%,rgba(7,17,31,0.86)_100%)] transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none"
                    aria-hidden="true"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 transition duration-300 group-hover:translate-y-2 group-hover:opacity-0 group-focus-within:translate-y-2 group-focus-within:opacity-0 sm:p-6 motion-reduce:transform-none motion-reduce:transition-none">
                    <div className="flex w-fit flex-wrap items-center gap-2">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.13em] text-white uppercase backdrop-blur-sm">
                        <span className="size-1.5 rounded-full bg-accent-soft" />
                        Featured project
                      </span>
                      {matrixProject.industry[0] ? (
                        <span className="w-fit text-[0.65rem] font-semibold tracking-[0.12em] text-white/80 uppercase [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]">
                          {matrixProject.industry[0]}
                        </span>
                      ) : null}
                    </div>

                    <h2 className="mt-2.5 w-fit max-w-[18rem] rounded-lg border border-white/15 bg-background/45 px-3 py-2 text-base font-semibold tracking-[-0.025em] text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-md sm:max-w-lg sm:text-lg">
                      {matrixProject.name}
                    </h2>

                    <div className="mt-3 flex w-fit flex-wrap gap-2" aria-label="Project technologies">
                      {matrixProject.technologies.confirmed.slice(0, 3).map((item) => (
                        <TechBadge key={item}>{item}</TechBadge>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/work/${matrixProject.slug}`}
                    aria-label={`View ${matrixProject.name} case study`}
                    className="absolute inset-0 z-20 grid place-items-center bg-background/75 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent motion-reduce:transition-none"
                  >
                    <span className="inline-flex items-center gap-3 text-white">
                      <span className="text-xs font-semibold tracking-[0.12em] uppercase">
                        View case study
                      </span>
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/[0.06] text-white transition group-hover:border-accent/40 group-hover:bg-accent motion-reduce:transition-none">
                        <ArrowIcon diagonal />
                      </span>
                    </span>
                    <span className="absolute inset-x-0 bottom-0 mx-auto max-w-xl px-6 pb-6 text-center text-sm leading-6 text-white/80 sm:pb-8">
                      {matrixProject.summary}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 border-y border-line lg:mt-20 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-5 sm:py-6 lg:px-6 ${index % 2 === 0 ? "border-r border-line" : ""} ${index === 0 ? "lg:pl-0" : ""} ${index < 2 ? "border-b border-line lg:border-b-0" : ""} ${index > 0 ? "lg:border-l lg:border-line" : ""} ${index === 2 ? "border-r border-line lg:border-r-0" : ""}`}
              >
                <dt className="text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-line bg-surface/25 py-5" aria-label="Technology stack">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="shrink-0 text-[0.65rem] font-semibold tracking-[0.16em] text-muted uppercase">Core stack</p>
          <div className="hidden h-4 w-px bg-line sm:block" />
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-secondary lg:flex-1 lg:justify-between">
            {technologies.map((technology) => (
              <li key={technology} className="transition hover:text-primary motion-reduce:transition-none">
                {technology}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="work" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built for real-world use."
              description={`Six selected projects from ${projects.length} websites and web projects delivered across more than 10 years.`}
            />
            <Button href="/work" variant="text" className="self-start sm:self-auto">
              View all projects <ArrowIcon />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/25 py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Expertise"
                title="Engineering across the full stack."
                description="From product interface to production infrastructure, with an emphasis on clear decisions and maintainable delivery."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((group) => (
                <article
                  key={group.title}
                  className="group rounded-2xl border border-line bg-background/45 p-6 transition hover:border-white/20 hover:bg-background/75 sm:p-7 motion-reduce:transition-none"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-lg border border-line bg-white/[0.03] font-mono text-xs text-accent-soft">
                      {group.number}
                    </span>
                    <span className="mt-2 h-px w-8 bg-line transition-all group-hover:w-12 group-hover:bg-accent motion-reduce:transition-none" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-primary">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechBadge key={item}>{item}</TechBadge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="experience" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Experience"
              title="A decade of shipping for the web."
              description="Hands-on engineering experience across client services, product delivery and interface design."
            />
            <Button href="/experience" variant="text" className="mt-7">
              Full experience <ArrowIcon />
            </Button>
          </div>

          <ol className="space-y-4">
            {experience.map((item, index) => (
              <li
                key={`${item.company}-${item.period}`}
                className="group grid gap-5 rounded-2xl border border-line bg-surface/55 p-6 transition hover:border-white/20 hover:bg-surface sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:p-7 motion-reduce:transition-none"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-line bg-white/[0.03] font-mono text-xs text-muted">
                  0{index + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-primary">{item.company}</h3>
                    {item.current ? (
                      <span className="rounded-md border border-emerald-400/20 bg-emerald-400/[0.07] px-2 py-1 text-[0.62rem] font-semibold tracking-[0.08em] text-emerald-300 uppercase">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-secondary">{item.role}</p>
                </div>
                <p className="text-xs font-medium text-muted sm:pt-1 sm:text-right">{item.period}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="about" className="scroll-mt-20 border-y border-line bg-surface/25 py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <article className="rounded-2xl border border-line bg-background/50 p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent" />
                <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">About</p>
              </div>
              <p className="mt-7 max-w-4xl text-3xl leading-[1.18] font-medium tracking-[-0.045em] text-primary sm:text-4xl lg:text-[2.75rem]">
                Building production websites and applications for international clients,
                from WordPress and PHP through to modern React, Next.js and headless architectures.
              </p>
              <Button href="/about" variant="text" className="mt-8">
                More about me <ArrowIcon />
              </Button>
            </article>

            <article className="flex flex-col rounded-2xl border border-line bg-accent p-7 text-white sm:p-9">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-blue-100 uppercase">What I value</p>
              <ul className="mt-8 space-y-1">
                {["Robust architecture", "Thoughtful interfaces", "Maintainable delivery"].map((item, index) => (
                  <li key={item} className="flex items-center gap-4 border-b border-white/15 py-4 first:pt-0 last:border-0">
                    <span className="font-mono text-xs text-blue-200">0{index + 1}</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <p className="text-5xl font-semibold tracking-[-0.06em]">10+</p>
                <p className="mt-2 text-sm text-blue-100">Years building for production</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="cta-panel relative overflow-hidden rounded-2xl border border-line-strong bg-surface px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">Open to senior opportunities</p>
                <h2 className="mt-5 text-4xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance text-primary sm:text-5xl lg:text-6xl">
                  Let&apos;s build something that performs.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-secondary">
                  Open to senior full-stack, PHP, WordPress, React and Next.js opportunities in New Zealand and remote roles.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Contact me <ArrowIcon diagonal />
                </Button>
                <Button href="/cv" variant="secondary">View CV</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
