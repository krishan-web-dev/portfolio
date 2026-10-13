export function TechBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-white/[0.025] px-2 py-1 text-[0.7rem] font-medium text-secondary">
      {children}
    </span>
  );
}
