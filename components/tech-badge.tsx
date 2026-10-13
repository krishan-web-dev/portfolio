export function TechBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/[0.025] px-2.5 py-1 text-[0.72rem] font-medium text-secondary">
      {children}
    </span>
  );
}
