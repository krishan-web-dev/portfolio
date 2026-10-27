import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  download?: boolean | string;
  target?: "_blank" | "_self";
  rel?: string;
};

const styles = {
  primary:
    "border-accent bg-accent text-white shadow-[0_12px_32px_rgba(37,99,235,0.22)] hover:-translate-y-0.5 hover:border-accent-bright hover:bg-accent-bright",
  secondary:
    "border-line-strong bg-surface-raised/70 text-primary hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-raised",
  text: "border-transparent bg-transparent px-0 text-primary hover:text-accent-soft",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  download,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
