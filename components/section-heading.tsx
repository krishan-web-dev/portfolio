type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-balance text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
