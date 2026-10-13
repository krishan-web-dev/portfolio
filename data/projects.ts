export type Project = {
  title: string;
  slug: string;
  image: string;
  imageCrop: number;
  summary: string;
  technologies: string[];
  role?: string;
  contribution?: string;
  externalUrl?: string;
  featured: boolean;
};

const placeholderImage = "/images/project-placeholders.png";

export const projects: Project[] = [
  {
    title: "Matrix (Pvt) Ltd",
    slug: "matrix-pvt-ltd",
    image: placeholderImage,
    imageCrop: 0,
    summary: "A headless product catalogue powered by Next.js and WordPress.",
    technologies: ["Next.js", "WordPress", "WooCommerce", "GraphQL"],
    role: "Headless web platform",
    featured: true,
  },
  {
    title: "Attentive",
    slug: "attentive",
    image: placeholderImage,
    imageCrop: 1,
    summary: "Selected client work. Full case-study details are being prepared.",
    technologies: [],
    role: "Selected project",
    featured: true,
  },
  {
    title: "ClotIQ",
    slug: "clotiq",
    image: placeholderImage,
    imageCrop: 2,
    summary: "Selected client work. Full case-study details are being prepared.",
    technologies: [],
    role: "Selected project",
    featured: true,
  },
  {
    title: "Rugby Fives",
    slug: "rugby-fives",
    image: placeholderImage,
    imageCrop: 3,
    summary: "Selected client work. Full case-study details are being prepared.",
    technologies: [],
    role: "Selected project",
    featured: true,
  },
  {
    title: "Allergy 250K Teens",
    slug: "allergy-250k-teens",
    image: placeholderImage,
    imageCrop: 4,
    summary: "Selected client work. Full case-study details are being prepared.",
    technologies: [],
    role: "Selected project",
    featured: true,
  },
  {
    title: "Enjoy the Maui Life",
    slug: "enjoy-the-maui-life",
    image: placeholderImage,
    imageCrop: 5,
    summary: "Selected client work. Full case-study details are being prepared.",
    technologies: [],
    role: "Selected project",
    featured: true,
  },
];
