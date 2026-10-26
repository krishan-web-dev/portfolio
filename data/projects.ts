import type { Project } from "@/types/project";



const verifiedProjects = [

  {

    slug: "matrix",

    name: "Matrix (Pvt) Ltd",

    client: "Matrix (Pvt) Ltd",



    url: "https://matrix-revamp.vercel.app/",



    industry: [

      "Industrial Engineering",

      "Manufacturing",

      "B2B"

    ],



    projectTypes: [

      "Corporate",

      "Product Catalogue",

      "Headless Platform"

    ],



    platforms: [

      "Headless WordPress",

      "WooCommerce"

    ],



    technologies: {

      confirmed: [

        "Next.js",

        "TypeScript",

        "Tailwind CSS",

        "WordPress",

        "WooCommerce",

        "ACF",

        "WPGraphQL",

        "GraphQL",

        "Vercel"

      ]

    },



    role: "Full-Stack Developer",

    contribution: "revamped",

    projectTier: "featured",

    currentSiteRepresentsMyWork: true,



    summary:

      "A modern headless corporate and industrial product catalogue platform built with Next.js, WordPress, WooCommerce and GraphQL.",



    description:

      "A large-scale rebuild of the Matrix corporate website and product catalogue, covering multiple industrial divisions, products, services, solutions and projects.",



    responsibilities: [

      "Next.js frontend architecture",

      "Dynamic division and product routing",

      "WordPress and WooCommerce integration",

      "WPGraphQL data integration",

      "ACF flexible content integration",

      "Product catalogue architecture",

      "Filtering and taxonomy handling",

      "SEO metadata",

      "Structured data",

      "Caching and performance optimisation",

      "Vercel deployment"

    ],



    featured: true,

    status: "live",



    verification: "confirmed",



    verificationNotes: [

      "The current public Matrix site confirms the industrial product and services business structure.",

      "The headless Next.js technology stack relates to the portfolio rebuild project."

    ],



    images: {

      cover: "/projects/matrix/cover.webp",

      desktop: "/projects/matrix/desktop.webp",

      mobile: "/projects/matrix/mobile.webp"

    },



    caseStudy: {

      challenge:

        "Rework a large industrial company website into a maintainable platform capable of supporting divisions, products, brands, services, solutions and projects.",



      solution:

        "Use Next.js as the frontend with WordPress, WooCommerce, ACF and WPGraphQL as the content and catalogue backend.",



      technicalImplementation: [

        "Next.js App Router",

        "Dynamic contextual routes",

        "GraphQL data layer",

        "WooCommerce product catalogue",

        "ACF flexible page builder",

        "Server-side rendering and caching",

        "SEO metadata",

        "JSON-LD structured data",

        "Vercel deployment"

      ]

    },



    seo: {

      title:

        "Matrix Industrial Platform Case Study | Udaya Krishantha",

      description:

        "Headless industrial product catalogue built with Next.js, TypeScript, WordPress, WooCommerce and GraphQL."

    }

  },



  {

    slug: "attentive",

    name: "Attentive",



    url: "https://getattentive.com/",



    industry: [

      "Healthcare",

      "Employee Benefits",

      "Wellbeing"

    ],



    projectTypes: [

      "Corporate",

      "Healthcare",

      "Marketing"

    ],



    platforms: [

      "WordPress"

    ],



    technologies: {

      confirmed: [

        "WordPress",

        "PHP",

        "JavaScript",

        "HTML",

        "CSS"

      ]

    },



    role: "WordPress Developer",

    contribution: "built",

    projectTier: "featured",

    currentSiteRepresentsMyWork: true,



    summary:

      "Custom WordPress development for a preventative-care and employee benefits platform serving employers, brokers and employees.",



    featured: true,

    status: "live",



    verification: "partially-confirmed",



    verificationNotes: [

      "The public website confirms the preventative-care and employee-benefits market.",

      "WordPress and the development role are based on project history."

    ],



    images: {

      cover: "/projects/attentive/cover.webp",

      desktop: "/projects/attentive/desktop.webp"

    },



    seo: {

      title:

        "Attentive WordPress Project | Udaya Krishantha",

      description:

        "Custom WordPress development for a preventative-care and employee-benefits platform."

    }

  },



  {

    slug: "clotiq",

    name: "ClotIQ",



    url: "https://www.clotiq.com/",



    industry: [

      "Healthcare",

      "Medical",

      "Patient Education"

    ],



    projectTypes: [

      "Healthcare",

      "eCommerce",

      "Interactive Website"

    ],



    platforms: [],



    technologies: {

      confirmed: [],

      inferred: [

        "WordPress",

        "WooCommerce",

        "PHP",

        "JavaScript"

      ]

    },



    role: "Web Developer",

    contribution: "unknown",

    projectTier: "featured",

    currentSiteRepresentsMyWork: true,



    summary:

      "A healthcare platform that helps patients assess DVT risk and provides a streamlined process for ordering a portable compression device.",



    featured: true,

    status: "live",



    verification: "needs-review",



    verificationNotes: [

      "The live website confirms the DVT risk survey and medical device ordering workflow.",

      "CMS and technology stack should be verified before publishing."

    ],



    images: {

      cover: "/projects/clotiq/cover.webp",

      desktop: "/projects/clotiq/desktop.webp"

    },



    seo: {

      title:

        "ClotIQ Healthcare Web Project | Udaya Krishantha",

      description:

        "Healthcare web experience combining DVT education, risk assessment and medical device ordering."

    }

  },



  {

    slug: "rugby-fives",

    name: "Rugby Fives",



    url: "https://www.rugbyfives.com.au/",



    industry: [

      "Sports",

      "Events",

      "Entertainment"

    ],



    projectTypes: [

      "Sports",

      "Events",

      "Marketing"

    ],



    platforms: [

      "WordPress"

    ],



    technologies: {

      confirmed: [

        "WordPress",

        "PHP",

        "JavaScript",

        "HTML",

        "CSS"

      ]

    },



    role: "WordPress Developer",

    contribution: "built",

    projectTier: "featured",

    currentSiteRepresentsMyWork: true,



    summary:

      "A WordPress event platform for Rugby Fives Australia featuring registrations, event promotion, galleries and partner content.",



    featured: true,

    status: "live",



    verification: "partially-confirmed",



    verificationNotes: [

      "The current website confirms the sports and event-focused content.",

      "Some visible event content is historical."

    ],



    images: {

      cover: "/projects/rugby-fives/cover.webp",

      desktop: "/projects/rugby-fives/desktop.webp",

      mobile: "/projects/rugby-fives/mobile.webp"

    },



    seo: {

      title:

        "Rugby Fives WordPress Project | Udaya Krishantha",

      description:

        "WordPress event and sports website development for Rugby Fives Australia."

    }

  },



  {

    slug: "allergy-250k-teens",

    name: "Allergy 250K Teens",



    url: "https://allergy250kteens.org.au/",



    industry: [

      "Healthcare",

      "Youth Education",

      "Non-Profit"

    ],



    projectTypes: [

      "Non-Profit",

      "Healthcare",

      "Education"

    ],



    platforms: [

      "WordPress"

    ],



    technologies: {

      confirmed: [

        "WordPress",

        "PHP",

        "JavaScript",

        "HTML",

        "CSS"

      ]

    },



    role: "WordPress Developer",

    contribution: "contributed",

    projectTier: "featured",

    currentSiteRepresentsMyWork: true,



    summary:

      "A youth-focused healthcare and education platform providing resources and support for teenagers living with allergies and related conditions.",



    featured: true,

    status: "live",



    verification: "partially-confirmed",



    verificationNotes: [

      "Contribution is intentionally represented as team involvement rather than sole development."

    ],



    images: {

      cover: "/projects/allergy-250k-teens/cover.webp",

      desktop: "/projects/allergy-250k-teens/desktop.webp"

    },



    seo: {

      title:

        "Allergy 250K Teens Project | Udaya Krishantha",

      description:

        "WordPress development contribution for an Australian youth allergy education and support platform."

    }

  },



  {

    slug: "enjoy-the-maui-life",

    name: "Enjoy the Maui Life",



    url: "https://enjoythemauilife.com/",



    industry: [

      "Fashion",

      "Lifestyle",

      "Retail"

    ],



    projectTypes: [

      "eCommerce",

      "Lifestyle",

      "Retail"

    ],



    platforms: [

      "WordPress",

      "WooCommerce"

    ],



    technologies: {

      confirmed: [

        "WordPress",

        "WooCommerce",

        "PHP",

        "JavaScript",

        "HTML",

        "CSS"

      ]

    },



    role: "WordPress / WooCommerce Developer",

    contribution: "built",

    projectTier: "featured",

    currentSiteRepresentsMyWork: true,



    summary:

      "A lifestyle eCommerce website for Maui-inspired apparel and accessories, built with WordPress and WooCommerce.",



    featured: true,

    status: "live",



    verification: "partially-confirmed",



    verificationNotes: [

      "The live website confirms its apparel and eCommerce focus.",

      "Platform details are also supported by project history."

    ],



    images: {

      cover: "/projects/enjoy-the-maui-life/cover.webp",

      desktop: "/projects/enjoy-the-maui-life/desktop.webp"

    },



    seo: {

      title:

        "Enjoy the Maui Life WooCommerce Project | Udaya Krishantha",

      description:

        "WordPress and WooCommerce development for a Maui lifestyle and apparel eCommerce brand."

    }

  },



  {

    slug: "vibes-of-aloha",

    name: "Vibes of Aloha",



    url: "https://www.vibesofaloha.com/",



    industry: [

      "Lifestyle",

      "Fashion",

      "Retail"

    ],



    projectTypes: [

      "eCommerce",

      "Lifestyle"

    ],



    platforms: [

      "WordPress",

      "WooCommerce"

    ],



    technologies: {

      confirmed: [

        "WordPress",

        "WooCommerce"

      ],

      inferred: [

        "PHP",

        "JavaScript",

        "HTML",

        "CSS"

      ]

    },



    role: "WordPress / WooCommerce Developer",

    contribution: "built",

    projectTier: "standard",

    currentSiteRepresentsMyWork: false,



    summary:

      "A lifestyle and eCommerce website developed for the Vibes of Aloha brand.",



    featured: false,

    status: "unknown",



    verification: "needs-review",



    verificationNotes: [

      "Live-site accessibility and current design should be checked before using screenshots.",

      "Technology details should be verified during the deeper audit."

    ],



    images: {

      cover: "/images/project-placeholders.png"

    },



    seo: {

      title:

        "Vibes of Aloha eCommerce Project | Udaya Krishantha",

      description:

        "WordPress and WooCommerce development for the Vibes of Aloha lifestyle brand."

    }

  },



  {

    slug: "goliath-outdoor",

    name: "Goliath Outdoor",



    url: "https://www.goliath-outdoor.com/",



    industry: [

      "Outdoor Recreation",

      "Consumer Products",

      "Retail"

    ],



    projectTypes: [

      "Product Catalogue",

      "Corporate",

      "Retail"

    ],



    platforms: [

      "WordPress"

    ],



    technologies: {

      confirmed: [

        "WordPress"

      ],

      inferred: [

        "PHP",

        "JavaScript",

        "HTML",

        "CSS"

      ]

    },



    role: "WordPress Developer",

    contribution: "built",

    projectTier: "standard",

    currentSiteRepresentsMyWork: true,



    summary:

      "A consumer product website showcasing Goliath Outdoor trampoline ranges, product specifications, warranties and support information.",



    featured: false,

    status: "live",



    verification: "partially-confirmed",



    verificationNotes: [

      "WordPress is publicly evident from live wp-content assets.",

      "The site includes extensive product specification and warranty information."

    ],



    images: {

      cover: "/projects/goliath-outdoor/cover.webp",

      desktop: "/projects/goliath-outdoor/desktop.webp"

    },



    seo: {

      title:

        "Goliath Outdoor WordPress Project | Udaya Krishantha",

      description:

        "WordPress product catalogue development for an Australian outdoor recreation brand."

    }

  }

] satisfies Project[];

type UndocumentedProject = {
  slug: string;
  name: string;
  projectTier: Project["projectTier"];
};

const placeholderImage = "/images/project-placeholders.png";

function createUndocumentedProject({
  slug,
  name,
  projectTier,
}: UndocumentedProject): Project {
  const isHistorical = projectTier === "historical";

  return {
    slug,
    name,
    industry: [],
    projectTypes: [],
    platforms: [],
    technologies: {
      confirmed: [],
    },
    contribution: "unknown",
    projectTier,
    currentSiteRepresentsMyWork: isHistorical ? false : undefined,
    summary: isHistorical
      ? "An earlier client website project retained as part of more than a decade of development work."
      : "A client website project from Udaya's development portfolio.",
    featured: projectTier === "featured",
    status: "unknown",
    verification: "needs-review",
    images: {
      cover: placeholderImage,
    },
    seo: {
      title: `${name} Web Project | Udaya Krishantha`,
      description: `Portfolio record for the ${name} website project.`,
    },
  };
}

const undocumentedProjects = [
  { slug: "calikites", name: "CaliKites", projectTier: "featured" },
  { slug: "highbury-homes", name: "Highbury Homes", projectTier: "featured" },
  { slug: "exway", name: "Exway", projectTier: "standard" },
  { slug: "last-mile-sf", name: "Last Mile SF", projectTier: "standard" },
  { slug: "hearsee-mobility", name: "HearSee Mobility", projectTier: "standard" },
  { slug: "champ360-marketing", name: "Champ360 Marketing", projectTier: "standard" },
  { slug: "crave-home-staging", name: "Crave Home Staging", projectTier: "standard" },
  { slug: "castaway-hawaii", name: "Castaway Hawaii", projectTier: "standard" },
  {
    slug: "ocean-defender-adventures",
    name: "Ocean Defender Adventures",
    projectTier: "standard",
  },
  { slug: "jawzrsize", name: "Jawzrsize", projectTier: "standard" },
  {
    slug: "north-shore-kiteboarding",
    name: "North Shore Kiteboarding",
    projectTier: "standard",
  },
  { slug: "hes-hawaii", name: "HES Hawaii", projectTier: "standard" },
  {
    slug: "brigit-and-bernards",
    name: "Brigit and Bernard's",
    projectTier: "standard",
  },
  { slug: "evonuk-farms", name: "Evonuk Farms", projectTier: "standard" },
  { slug: "average-beach", name: "Average Beach", projectTier: "historical" },
  { slug: "oli-oli-pizza", name: "Oli Oli Pizza", projectTier: "historical" },
  { slug: "icdw-hawaii", name: "ICDW Hawaii", projectTier: "historical" },
  { slug: "amanda-savona", name: "Amanda Savona", projectTier: "historical" },
  { slug: "oyster-co-sg", name: "Oyster Co SG", projectTier: "historical" },
  {
    slug: "ppc-ads-management",
    name: "PPC Ads Management",
    projectTier: "historical",
  },
  { slug: "barbara-liniger", name: "Barbara Liniger", projectTier: "historical" },
  { slug: "connors-security", name: "Connors Security", projectTier: "historical" },
  { slug: "central-perk", name: "Central Perk", projectTier: "historical" },
  { slug: "angel-devlin", name: "Angel Devlin", projectTier: "historical" },
  { slug: "be-the-effect", name: "Be the Effect", projectTier: "historical" },
  { slug: "gilgamesh", name: "Gilgamesh", projectTier: "historical" },
  { slug: "makai-boards", name: "Makai Boards", projectTier: "historical" },
  {
    slug: "etech-global-trends",
    name: "ETech Global Trends",
    projectTier: "historical",
  },
  { slug: "remax-south", name: "RE/MAX South", projectTier: "historical" },
  { slug: "the-event-suite", name: "The Event Suite", projectTier: "historical" },
  { slug: "moana-institute", name: "Moana Institute", projectTier: "historical" },
  {
    slug: "sarentos-on-the-beach",
    name: "Sarento's on the Beach",
    projectTier: "historical",
  },
  { slug: "visit-maui-blog", name: "Visit Maui Blog", projectTier: "historical" },
  {
    slug: "lanka-travel-planner",
    name: "Lanka Travel Planner",
    projectTier: "historical",
  },
  {
    slug: "apollo-re-investors",
    name: "Apollo RE Investors",
    projectTier: "historical",
  },
  { slug: "champa", name: "Champa", projectTier: "historical" },
] satisfies UndocumentedProject[];

const projectOrder = [
  "matrix",
  "clotiq",
  "attentive",
  "allergy-250k-teens",
  "rugby-fives",
  "calikites",
  "enjoy-the-maui-life",
  "highbury-homes",
  "exway",
  "last-mile-sf",
  "goliath-outdoor",
  "hearsee-mobility",
  "champ360-marketing",
  "crave-home-staging",
  "castaway-hawaii",
  "ocean-defender-adventures",
  "vibes-of-aloha",
  "jawzrsize",
  "north-shore-kiteboarding",
  "hes-hawaii",
  "brigit-and-bernards",
  "evonuk-farms",
  "average-beach",
  "oli-oli-pizza",
  "icdw-hawaii",
  "amanda-savona",
  "oyster-co-sg",
  "ppc-ads-management",
  "barbara-liniger",
  "connors-security",
  "central-perk",
  "angel-devlin",
  "be-the-effect",
  "gilgamesh",
  "makai-boards",
  "etech-global-trends",
  "remax-south",
  "the-event-suite",
  "moana-institute",
  "sarentos-on-the-beach",
  "visit-maui-blog",
  "lanka-travel-planner",
  "apollo-re-investors",
  "champa",
] as const;

const projectRecords = [
  ...verifiedProjects,
  ...undocumentedProjects.map(createUndocumentedProject),
];

export const projects: Project[] = projectOrder.map((slug) => {
  const project = projectRecords.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Missing project record for ${slug}`);
  }

  return project;
});

const homepageProjectOrder = [
  "matrix",
  "clotiq",
  "attentive",
  "allergy-250k-teens",
  "calikites",
  "rugby-fives",
] as const;

export function getFeaturedProjects() {
  return projects.filter((project) => project.projectTier === "featured");
}

export function getStandardProjects() {
  return projects.filter((project) => project.projectTier === "standard");
}

export function getHistoricalProjects() {
  return projects.filter((project) => project.projectTier === "historical");
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByPlatform(platform: string) {
  const normalizedPlatform = platform.toLocaleLowerCase();

  return projects.filter((project) =>
    project.platforms.some(
      (projectPlatform) => projectPlatform.toLocaleLowerCase() === normalizedPlatform,
    ),
  );
}

export function getHomepageProjects() {
  return homepageProjectOrder
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}
