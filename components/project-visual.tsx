import Image from "next/image";
import type { CSSProperties } from "react";

type ProjectVisualProps = {
  image: string;
  crop: number;
  alt: string;
  priority?: boolean;
};

export function ProjectVisual({
  image,
  crop,
  alt,
  priority = false,
}: ProjectVisualProps) {
  const column = crop % 3;
  const row = Math.floor(crop / 3);

  return (
    <div className="project-visual relative aspect-square overflow-hidden bg-surface-muted">
      <div
        className="absolute h-[200%] w-[300%]"
        style={
          {
            left: `${column * -100}%`,
            top: `${row * -100}%`,
          } as CSSProperties
        }
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 300vw, (max-width: 1023px) 150vw, 100vw"
          className="object-fill"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
    </div>
  );
}
