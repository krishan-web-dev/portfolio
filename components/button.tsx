import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

const styles = {
  primary:
    "border-accent bg-accent text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:border-accent-bright hover:bg-accent-bright",
  secondary:
    "border-line-strong bg-surface/70 text-primary hover:border-accent/60 hover:bg-surface-raised",
  text: "border-transparent bg-transparent px-0 text-primary hover:text-accent-soft",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
