"use client";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The selected theme still applies for this page when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle grid size-10 shrink-0 place-items-center rounded-lg border border-line-strong bg-surface-raised/70 text-primary transition hover:border-accent/50 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
    >
      <svg
        className="theme-toggle__sun size-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        className="theme-toggle__moon size-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
      </svg>
    </button>
  );
}
