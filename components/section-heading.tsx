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
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-primary sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
