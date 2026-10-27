import { Container } from "@/components/container";

const footerItems = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/udaya-krishantha-nanayakkara/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/krishan-web-dev",
    external: true,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01017f394ae9849f10?viewMode=1",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:krishannanayakkara@gmail.com",
    external: false,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-surface-raised/60 text-xs font-bold text-primary">
            UK.
          </span>
          <div>
            <p className="font-medium text-primary">Udaya Krishantha Nanayakkara</p>
            <p className="mt-0.5 text-xs text-muted">Copyright. All rights reserved.</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Social links">
          {footerItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-secondary transition hover:text-primary focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
