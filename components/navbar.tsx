"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "CV", href: "/doc/Udaya_Krishantha_Nanayakkara.pdf" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ease-out motion-reduce:transition-none ${
          isOpen
            ? "border-line bg-background/98"
            : isScrolled
              ? "border-line-strong bg-background/95"
              : "border-line bg-background/80"
        }`}
      >
        <Container className="relative z-10 flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            onClick={() => setIsOpen(false)}
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-surface-raised/70 text-xs font-bold text-primary transition group-hover:border-accent/60 group-hover:bg-accent/10 motion-reduce:transition-none">
              UK.
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[-0.01em] text-primary">
                Udaya Krishantha
              </span>
              <span className="block truncate text-[0.68rem] text-muted">
                Senior Full-Stack Developer
              </span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-secondary transition after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-primary hover:after:scale-x-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="ml-2 rounded-lg border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-soft transition hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                Let&apos;s talk
              </Link>
            </nav>

            <ThemeToggle />

            <button
              type="button"
              className="grid size-10 place-items-center rounded-lg border border-line-strong bg-surface-raised/70 text-primary transition duration-300 ease-out hover:border-accent/50 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden motion-reduce:transition-none"
              aria-expanded={isOpen}
              aria-controls={menuId}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span className={`absolute left-0 top-0.5 h-px w-5 bg-current transition duration-300 ease-out ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ease-out ${isOpen ? "opacity-0" : ""}`} />
                <span className={`absolute bottom-0.5 left-0 h-px w-5 bg-current transition duration-300 ease-out ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <div
        id={menuId}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 border-t border-line bg-background/98 backdrop-blur-xl transition-[clip-path,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden motion-reduce:transition-none ${
          isOpen
            ? "visible [clip-path:inset(0_0_0_0)]"
            : "invisible pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!isOpen}
      >
        <Container className="flex h-full items-center justify-center py-8">
          <nav
            className={`grid w-full max-w-sm transform-gpu gap-2 text-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }`}
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className="transform-gpu rounded-xl px-4 py-3 text-2xl font-semibold tracking-[-0.02em] text-secondary transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 hover:text-primary focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </>
  );
}
