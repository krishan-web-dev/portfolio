import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "matrix",
    name: "Matrix (Pvt) Ltd",
    client: "Matrix (Pvt) Ltd",

    url: "https://slmatrix.com",

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

    url: "https://getattentive.com",

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

    url: "https://www.clotiq.com",

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

    url: "https://www.rugbyfives.com.au",

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

    url: "https://allergy250kteens.org.au",

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

    url: "https://enjoythemauilife.com",

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

    url: "https://www.vibesofaloha.com",

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

    url: "https://www.goliath-outdoor.com",

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
];
