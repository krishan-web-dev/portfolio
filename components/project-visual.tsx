import Image from "next/image";

type ProjectVisualProps = {
  image: string;
  alt: string;
  priority?: boolean;
  ratio?: "square" | "landscape" | "hero";
};

const ratios = {
  square: "aspect-square",
  landscape: "aspect-[16/10]",
  hero: "aspect-[4/3]",
};

export function ProjectVisual({
  image,
  alt,
  priority = false,
  ratio = "square",
}: ProjectVisualProps) {
  return (
    <div className={`project-visual relative overflow-hidden bg-surface-muted ${ratios[ratio]}`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw"
        className="object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-white/[0.015]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />
    </div>
  );
}
