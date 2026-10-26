import type { Project } from "@/types/project";

/**
 * Project inventory reviewed 26 October 2026.
 * Working shortlist (28): publicly retrievable content or developer-reported availability.
 * This is not a guarantee of HTTP uptime or current design authorship.
 * Screenshot paths are targets, not generated image files.
 * CMS/technologies that are only inferred must NOT be shown as confirmed badges.
 */
export const projects: Project[] = [
  {
    "slug": "matrix",
    "name": "Matrix (Pvt) Ltd",
    "client": "Matrix (Pvt) Ltd",
    "url": "https://matrix-revamp.vercel.app/",
    "originalUrl": "https://slmatrix.com/",
    "path": "/work/matrix",
    "industry": [
      "Industrial Engineering",
      "B2B",
      "Manufacturing"
    ],
    "projectTypes": [
      "Corporate Website",
      "Product Catalogue",
      "Headless Platform"
    ],
    "platforms": [
      "Headless WordPress",
      "WooCommerce"
    ],
    "technologies": {
      "confirmed": [
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
    "tags": [
      "Headless WordPress",
      "WooCommerce",
      "Industrial Engineering",
      "B2B",
      "Manufacturing",
      "Corporate Website",
      "Product Catalogue",
      "Headless Platform",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "ACF",
      "WPGraphQL",
      "GraphQL",
      "Vercel",
      "AI-assisted Contact Forms",
      "Contact Form Development"
    ],
    "role": "Full-Stack Developer",
    "contribution": "revamped",
    "projectTier": "featured",
    "homepageFeatured": true,
    "currentSiteRepresentsMyWork": true,
    "summary": "Headless industrial product catalogue built with Next.js, WordPress, WooCommerce and GraphQL, including AI-assisted contact forms.",
    "description": "Matrix is an industrial and engineering solutions company with multiple divisions and a substantial catalogue of products, services, solutions and projects. This rebuild uses a decoupled Next.js frontend backed by WordPress, WooCommerce, ACF and WPGraphQL. It includes division-aware navigation, catalogue filtering, metadata and structured data, and AI-assisted contact forms.",
    "responsibilities": [
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
      "Vercel deployment",
      "Implemented AI-assisted contact forms"
    ],
    "featured": true,
    "status": "live",
    "verification": "confirmed",
    "verificationNotes": [
      "The current public Matrix site confirms the industrial product and services business structure.",
      "The headless Next.js technology stack relates to the portfolio rebuild project."
    ],
    "images": {
      "cover": "/projects/matrix/cover.webp",
      "desktop": "/projects/matrix/desktop.webp",
      "mobile": "/projects/matrix/mobile.webp"
    },
    "caseStudy": {
      "challenge": "Rework a large industrial company website into a maintainable platform capable of supporting divisions, products, brands, services, solutions and projects.",
      "solution": "Use Next.js as the frontend with WordPress, WooCommerce, ACF and WPGraphQL as the content and catalogue backend.",
      "technicalImplementation": [
        "Next.js App Router",
        "Dynamic contextual routes",
        "GraphQL data layer",
        "WooCommerce product catalogue",
        "ACF flexible page builder",
        "Server-side rendering and caching",
        "SEO metadata",
        "JSON-LD structured data",
        "Vercel deployment",
        "AI-assisted contact forms"
      ]
    },
    "seo": {
      "title": "Matrix (Pvt) Ltd | Web Development Project | Udaya Krishantha",
      "description": "Next.js and WordPress industrial product platform featuring WooCommerce, WPGraphQL, SEO and AI-assisted contact forms."
    }
  },
  {
    "slug": "clotiq",
    "name": "ClotIQ",
    "url": "https://www.clotiq.com/",
    "path": "/work/clotiq",
    "industry": [
      "Healthcare",
      "Medical Technology"
    ],
    "projectTypes": [
      "Healthcare Website",
      "Interactive Website"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": [],
      "inferred": [
        "WordPress",
        "WooCommerce",
        "PHP",
        "JavaScript"
      ]
    },
    "tags": [
      "Healthcare",
      "Medical Technology",
      "Healthcare Website",
      "Interactive Website"
    ],
    "role": "Web Developer",
    "contribution": "unknown",
    "projectTier": "featured",
    "homepageFeatured": true,
    "summary": "Healthcare website supporting a DVT risk questionnaire and portable compression-device ordering.",
    "featured": true,
    "status": "live",
    "verification": "needs-review",
    "verificationNotes": [
      "The live website confirms the DVT risk survey and medical device ordering workflow.",
      "CMS and technology stack should be verified before publishing."
    ],
    "images": {
      "cover": "/projects/clotiq/cover.webp",
      "desktop": "/projects/clotiq/desktop.webp"
    },
    "seo": {
      "title": "ClotIQ | Web Development Project | Udaya Krishantha",
      "description": "Healthcare website supporting a DVT risk questionnaire and portable compression-device ordering."
    },
    "description": "ClotIQ helps patients learn about deep-vein thrombosis risk. Its site presents educational content, a multi-step risk questionnaire and an ordering path for a portable compression device. The precise development stack and individual implementation responsibilities still require confirmation."
  },
  {
    "slug": "attentive",
    "name": "Attentive",
    "url": "https://getattentive.com/",
    "path": "/work/attentive",
    "industry": [
      "Healthcare",
      "Employee Benefits"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": [
        "WordPress"
      ],
      "inferred": [
        "PHP",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "Healthcare",
      "Employee Benefits",
      "Corporate Website"
    ],
    "role": "WordPress Developer",
    "contribution": "built",
    "projectTier": "featured",
    "homepageFeatured": true,
    "summary": "Custom WordPress development for a preventative-care and employee benefits business.",
    "featured": true,
    "status": "live",
    "verification": "partially-confirmed",
    "verificationNotes": [
      "The public website confirms the preventative-care and employee-benefits market.",
      "WordPress and the development role are based on project history."
    ],
    "images": {
      "cover": "/projects/attentive/cover.webp",
      "desktop": "/projects/attentive/desktop.webp"
    },
    "seo": {
      "title": "Attentive | Web Development Project | Udaya Krishantha",
      "description": "Custom WordPress development for a preventative-care and employee benefits business."
    },
    "description": "Attentive presents preventative-care and employee-benefits programmes to distinct audiences: brokers, employers and employees. The website organises these journeys with tailored landing pages, supporting content and clear enquiry paths."
  },
  {
    "slug": "allergy-250k-teens",
    "name": "Allergy 250K Teens",
    "url": "https://allergy250kteens.org.au/",
    "path": "/work/allergy-250k-teens",
    "industry": [
      "Healthcare",
      "Non-Profit",
      "Education"
    ],
    "projectTypes": [
      "Non-Profit",
      "Content Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": [
        "WordPress"
      ],
      "inferred": [
        "PHP",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "Healthcare",
      "Non-Profit",
      "Education",
      "Content Website"
    ],
    "role": "WordPress Developer",
    "contribution": "contributed",
    "projectTier": "featured",
    "homepageFeatured": true,
    "summary": "Youth-focused allergy education and support website serving Australian teens.",
    "featured": true,
    "status": "live",
    "verification": "partially-confirmed",
    "verificationNotes": [
      "Contribution is intentionally represented as team involvement rather than sole development.",
      "Development was a team contribution, not a sole build."
    ],
    "images": {
      "cover": "/projects/allergy-250k-teens/cover.webp",
      "desktop": "/projects/allergy-250k-teens/desktop.webp"
    },
    "seo": {
      "title": "Allergy 250K Teens | Web Development Project | Udaya Krishantha",
      "description": "Youth-focused allergy education and support website serving Australian teens."
    },
    "description": "Allergy 250K Teens provides accessible educational resources for school-aged Australians living with severe allergies. Its content covers managing food allergies, emergency planning, health and wellbeing, peer mentoring, camps and youth activities. Development contribution is presented as team work."
  },
  {
    "slug": "rugby-fives",
    "name": "Rugby Fives",
    "url": "https://www.rugbyfives.com.au/",
    "path": "/work/rugby-fives",
    "industry": [
      "Sports & Recreation",
      "Events"
    ],
    "projectTypes": [
      "Events Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": [
        "WordPress"
      ],
      "inferred": [
        "PHP",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "Sports & Recreation",
      "Events",
      "Events Website"
    ],
    "role": "WordPress Developer",
    "contribution": "built",
    "projectTier": "featured",
    "homepageFeatured": true,
    "summary": "Australian sports and event website covering registrations, events and partnerships.",
    "featured": true,
    "status": "live",
    "verification": "partially-confirmed",
    "verificationNotes": [
      "The current website confirms the sports and event-focused content.",
      "Some visible event content is historical."
    ],
    "images": {
      "cover": "/projects/rugby-fives/cover.webp",
      "desktop": "/projects/rugby-fives/desktop.webp"
    },
    "seo": {
      "title": "Rugby Fives | Web Development Project | Udaya Krishantha",
      "description": "Australian sports and event website covering registrations, events and partnerships."
    },
    "description": "Rugby Fives is an Australian sports and events website promoting rugby activities, team registrations, partner organisations, media and event highlights. The event listings include historical activities and should not be presented as upcoming events."
  },
  {
    "slug": "treecovery-hawaii",
    "name": "Treecovery Hawaii",
    "url": "https://treecoveryhawaii.org/",
    "path": "/work/treecovery-hawaii",
    "industry": [
      "Environmental Conservation",
      "Non-Profit"
    ],
    "projectTypes": [
      "Non-Profit"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Environmental Conservation",
      "Non-Profit"
    ],
    "role": "Full Website Developer",
    "contribution": "built",
    "projectTier": "featured",
    "homepageFeatured": true,
    "currentSiteRepresentsMyWork": true,
    "summary": "Website for a Maui nonprofit replanting trees after the 2023 wildfires.",
    "featured": true,
    "status": "live",
    "verification": "confirmed",
    "images": {
      "cover": "/projects/treecovery-hawaii/cover.webp"
    },
    "seo": {
      "title": "Treecovery Hawaii | Web Development Project | Udaya Krishantha",
      "description": "Website for a Maui nonprofit replanting trees after the 2023 wildfires."
    },
    "description": "Treecovery Hawaii is a nonprofit supporting tree restoration after the August 2023 Maui wildfires. The website explains the mission, tree-growing and distribution programmes, volunteer activity, news coverage and ways to donate or get involved. The developer confirms responsibility for the full website build.",
    "responsibilities": [
      "Full website design and development"
    ],
    "caseStudy": {
      "technicalImplementation": [
        "Non-profit website implementation",
        "Programme and mission content presentation",
        "Contact and support pathways"
      ],
      "outcome": "A public website for Treecovery Hawaii’s wildfire recovery and reforestation mission."
    }
  },
  {
    "slug": "calikites",
    "name": "CaliKites",
    "url": "https://www.calikites.com/",
    "path": "/work/calikites",
    "industry": [
      "eCommerce & Retail",
      "Sports & Recreation"
    ],
    "projectTypes": [
      "eCommerce"
    ],
    "platforms": [
      "Shopify"
    ],
    "technologies": {
      "confirmed": [
        "Shopify"
      ],
      "inferred": [
        "Liquid",
        "JavaScript"
      ]
    },
    "tags": [
      "Shopify",
      "eCommerce & Retail",
      "Sports & Recreation",
      "eCommerce"
    ],
    "contribution": "unknown",
    "projectTier": "featured",
    "homepageFeatured": false,
    "currentSiteRepresentsMyWork": false,
    "summary": "Shopify storefront for kiteboarding equipment, boards and accessories.",
    "featured": true,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/calikites/cover.webp"
    },
    "seo": {
      "title": "CaliKites | Web Development Project | Udaya Krishantha",
      "description": "Shopify storefront for kiteboarding equipment, boards and accessories."
    },
    "description": "CaliKites operates an online store for kiteboarding gear and related water-sports equipment. Its retail experience includes product categories, equipment listings and shopping paths. The original portfolio work was on Shopify; the present design may have evolved since then."
  },
  {
    "slug": "enjoy-the-maui-life",
    "name": "Enjoy the Maui Life",
    "url": "https://enjoythemauilife.com/",
    "path": "/work/enjoy-the-maui-life",
    "industry": [
      "eCommerce & Retail",
      "Lifestyle"
    ],
    "projectTypes": [
      "eCommerce"
    ],
    "platforms": [
      "WordPress",
      "WooCommerce"
    ],
    "technologies": {
      "confirmed": [
        "WordPress",
        "WooCommerce"
      ],
      "inferred": [
        "PHP",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "WooCommerce",
      "eCommerce & Retail",
      "Lifestyle",
      "eCommerce"
    ],
    "role": "WordPress / WooCommerce Developer",
    "contribution": "built",
    "projectTier": "featured",
    "homepageFeatured": false,
    "summary": "WooCommerce apparel and accessories store inspired by Maui lifestyle.",
    "featured": true,
    "status": "live",
    "verification": "partially-confirmed",
    "verificationNotes": [
      "The live website confirms its apparel and eCommerce focus.",
      "Platform details are also supported by project history."
    ],
    "images": {
      "cover": "/api/portfolio-access/assets/projects/enjoy-the-maui-life/cover.webp"
    },
    "seo": {
      "title": "Enjoy the Maui Life | Web Development Project | Udaya Krishantha",
      "description": "WooCommerce apparel and accessories store inspired by Maui lifestyle."
    },
    "description": "Enjoy the Maui Life is a Maui-inspired apparel and accessories shop. The WordPress and WooCommerce site showcases lifestyle products through category browsing and online shopping functionality."
  },
  {
    "slug": "highbury-homes",
    "name": "Highbury Homes",
    "url": "https://highburyhomes.com.au/",
    "path": "/work/highbury-homes",
    "industry": [
      "Construction",
      "Real Estate"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": [],
      "inferred": [
        "WordPress"
      ]
    },
    "tags": [
      "WordPress",
      "Construction",
      "Real Estate",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "featured",
    "homepageFeatured": false,
    "currentSiteRepresentsMyWork": false,
    "summary": "Corporate website for an Australian custom-home builder and sustainable homes specialist.",
    "featured": true,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/highbury-homes/cover.webp"
    },
    "seo": {
      "title": "Highbury Homes | Web Development Project | Udaya Krishantha",
      "description": "Corporate website for an Australian custom-home builder and sustainable homes specialist."
    },
    "description": "Highbury Homes is an Australian builder specialising in custom-designed homes. Its website highlights architectural design and building services, completed homes, project imagery and enquiries. The original portfolio version may differ from the current website."
  },
  {
    "slug": "exway",
    "name": "Exway",
    "url": "https://www.exwayboard.com/",
    "path": "/work/exway",
    "industry": [
      "eCommerce & Retail",
      "Electric Mobility"
    ],
    "projectTypes": [
      "eCommerce",
      "Product Catalogue"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "eCommerce & Retail",
      "Electric Mobility",
      "eCommerce",
      "Product Catalogue"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Electric skateboard eCommerce catalogue featuring boards and riding accessories.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/exway/cover.webp"
    },
    "seo": {
      "title": "Exway | Web Development Project | Udaya Krishantha",
      "description": "Electric skateboard eCommerce catalogue featuring boards and riding accessories."
    },
    "description": "Exway markets electric skateboards, boards and related riding accessories through an online catalogue. The site offers product browsing and customer-facing information for electric mobility customers. The platform used for the developer’s historical contribution has not been independently verified."
  },
  {
    "slug": "last-mile-sf",
    "name": "Last Mile SF",
    "url": "https://www.lastmilesf.com/",
    "path": "/work/last-mile-sf",
    "industry": [
      "eCommerce & Retail",
      "Electric Mobility"
    ],
    "projectTypes": [
      "eCommerce"
    ],
    "platforms": [
      "Shopify"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Shopify",
      "eCommerce & Retail",
      "Electric Mobility",
      "eCommerce"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Online retail catalogue for electric bicycles, scooters, skateboards and other personal mobility vehicles.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/last-mile-sf/cover.webp"
    },
    "seo": {
      "title": "Last Mile SF | Web Development Project | Udaya Krishantha",
      "description": "Online retail catalogue for electric bicycles, scooters, skateboards and other personal mobility vehicles."
    },
    "description": "Last Mile SF is an electric-mobility retailer with online product listings for electric bicycles, scooters, boards and accessories. The website connects online shopping with the company’s retail operations."
  },
  {
    "slug": "goliath-outdoor",
    "name": "Goliath Outdoor",
    "url": "https://www.goliath-outdoor.com/",
    "path": "/work/goliath-outdoor",
    "industry": [
      "Sports & Recreation",
      "Consumer Products"
    ],
    "projectTypes": [
      "Product Catalogue"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": [
        "WordPress"
      ],
      "inferred": [
        "PHP",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "Sports & Recreation",
      "Consumer Products",
      "Product Catalogue"
    ],
    "role": "WordPress Developer",
    "contribution": "built",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Product catalogue for Australian trampoline ranges, warranty and support information.",
    "featured": false,
    "status": "live",
    "verification": "partially-confirmed",
    "verificationNotes": [
      "WordPress is publicly evident from live wp-content assets.",
      "The site includes extensive product specification and warranty information."
    ],
    "images": {
      "cover": "/api/portfolio-access/assets/projects/goliath-outdoor/cover.webp"
    },
    "seo": {
      "title": "Goliath Outdoor | Web Development Project | Udaya Krishantha",
      "description": "Product catalogue for Australian trampoline ranges, warranty and support information."
    },
    "description": "Goliath Outdoor presents trampoline ranges and outdoor recreation products for Australian customers. The website includes product details, specification information, stockists, warranty and support materials."
  },
  {
    "slug": "hearsee-mobility",
    "name": "Hearsee Mobility",
    "url": "https://hearseemobility.org/",
    "path": "/work/hearsee-mobility",
    "industry": [
      "Accessibility",
      "Technology",
      "Non-Profit"
    ],
    "projectTypes": [
      "Non-Profit",
      "Corporate Website"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Accessibility",
      "Technology",
      "Non-Profit",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "currentSiteRepresentsMyWork": false,
    "summary": "Accessibility organisation offering mapped indoor navigation for blind and low-vision users.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/hearsee-mobility/cover.webp"
    },
    "seo": {
      "title": "Hearsee Mobility | Web Development Project | Udaya Krishantha",
      "description": "Accessibility organisation offering mapped indoor navigation for blind and low-vision users."
    },
    "description": "Hearsee develops technology for blind and low-vision navigation. Its current website describes mapped venues, navigation infrastructure, an app, a connected cane and accessible audio guidance. The current presentation may differ from earlier development work.",
    "verificationNotes": [
      "Current website appears redesigned; screenshot may not represent the version developed earlier."
    ]
  },
  {
    "slug": "champ360-marketing",
    "name": "Champ360 Marketing",
    "url": "https://champ360marketing.com/",
    "path": "/work/champ360-marketing",
    "industry": [
      "Marketing",
      "Professional Services"
    ],
    "projectTypes": [
      "Marketing Website"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Marketing",
      "Professional Services",
      "Marketing Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Digital marketing website presenting SEO, advertising and website services.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/champ360-marketing/cover.webp"
    },
    "seo": {
      "title": "Champ360 Marketing | Web Development Project | Udaya Krishantha",
      "description": "Digital marketing website presenting SEO, advertising and website services."
    },
    "description": "Champ360 Marketing presents digital marketing services including SEO, paid advertising, content, analytics and web development. The site serves as a business introduction with service information and contact pathways."
  },
  {
    "slug": "crave-home-staging",
    "name": "Crave Home Staging",
    "url": "https://www.cravehomestaging.com.au/",
    "path": "/work/crave-home-staging",
    "industry": [
      "Real Estate",
      "Professional Services"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Real Estate",
      "Professional Services",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Property styling and home staging website featuring a visual portfolio.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/crave-home-staging/cover.webp"
    },
    "seo": {
      "title": "Crave Home Staging | Web Development Project | Udaya Krishantha",
      "description": "Property styling and home staging website featuring a visual portfolio."
    },
    "description": "Crave Home Staging presents property-styling services through galleries and descriptions of staging work. The Australian business website supports visual discovery and enquiries from property owners and agents."
  },
  {
    "slug": "castaway-hawaii",
    "name": "Castaway Hawaii",
    "url": "https://www.castawayhawaii.com/",
    "path": "/work/castaway-hawaii",
    "industry": [
      "Construction",
      "Professional Services"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Construction",
      "Professional Services",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "currentSiteRepresentsMyWork": false,
    "summary": "Construction company website showcasing commercial and residential project work in Hawaii.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/castaway-hawaii/cover.webp"
    },
    "seo": {
      "title": "Castaway Hawaii | Web Development Project | Udaya Krishantha",
      "description": "Construction company website showcasing commercial and residential project work in Hawaii."
    },
    "description": "Castaway Hawaii is a Hawaii-based construction business. Its website presents services and project information for prospective customers. The present version may be different from the website originally developed.",
    "verificationNotes": [
      "Current website appears redesigned; screenshot may not represent the version developed earlier."
    ]
  },
  {
    "slug": "jawzrsize",
    "name": "JAWZRSIZE",
    "url": "https://jawzrsize.com/",
    "path": "/work/jawzrsize",
    "industry": [
      "eCommerce & Retail",
      "Fitness"
    ],
    "projectTypes": [
      "eCommerce"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "eCommerce & Retail",
      "Fitness",
      "eCommerce"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Consumer fitness product eCommerce website for jaw and facial exercise devices.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/jawzrsize/cover.webp"
    },
    "seo": {
      "title": "JAWZRSIZE | Web Development Project | Udaya Krishantha",
      "description": "Consumer fitness product eCommerce website for jaw and facial exercise devices."
    },
    "description": "JAWZRSIZE is a consumer fitness brand selling jaw and facial-exercise products. The online storefront communicates product benefits, product selections and purchase options."
  },
  {
    "slug": "north-shore-kiteboarding",
    "name": "North Shore Kiteboarding",
    "url": "https://northshorekiteboarding.com/",
    "path": "/work/north-shore-kiteboarding",
    "industry": [
      "Sports & Recreation",
      "Travel & Tourism"
    ],
    "projectTypes": [
      "Service Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Sports & Recreation",
      "Travel & Tourism",
      "Service Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Maui kiteboarding lessons and instructor website with educational content.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/north-shore-kiteboarding/cover.webp"
    },
    "seo": {
      "title": "North Shore Kiteboarding | Web Development Project | Udaya Krishantha",
      "description": "Maui kiteboarding lessons and instructor website with educational content."
    },
    "description": "North Shore Kiteboarding promotes kiteboarding-related instruction and activities in Hawaii. Its website explains services and provides educational and enquiry content for visitors."
  },
  {
    "slug": "hes-hawaii",
    "name": "HES Hawaii",
    "url": "https://www.heshawaii.com/",
    "path": "/work/hes-hawaii",
    "industry": [
      "Construction",
      "Renewable Energy"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Construction",
      "Renewable Energy",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Hawaii electrical and renewable energy services corporate website.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/hes-hawaii/cover.webp"
    },
    "seo": {
      "title": "HES Hawaii | Web Development Project | Udaya Krishantha",
      "description": "Hawaii electrical and renewable energy services corporate website."
    },
    "description": "HES Hawaii provides electrical and related technical services. Its business website introduces service areas, company information and enquiry options for clients in Hawaii."
  },
  {
    "slug": "brigit-and-bernards",
    "name": "Brigit & Bernard’s",
    "url": "https://brigitandbernards.com/",
    "path": "/work/brigit-and-bernards",
    "industry": [
      "Hospitality",
      "Restaurant"
    ],
    "projectTypes": [
      "Restaurant Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Hospitality",
      "Restaurant",
      "Restaurant Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Maui restaurant and catering website with menus and business information.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/brigit-and-bernards/cover.webp"
    },
    "seo": {
      "title": "Brigit & Bernard’s | Web Development Project | Udaya Krishantha",
      "description": "Maui restaurant and catering website with menus and business information."
    },
    "description": "Brigit & Bernard’s is a restaurant and catering business in Hawaii. Its website helps visitors learn about dining, menus, catering and how to get in touch."
  },
  {
    "slug": "evonuk-farms",
    "name": "Evonuk Farms",
    "url": "https://www.evonukfarms.com/",
    "path": "/work/evonuk-farms",
    "industry": [
      "Agriculture"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Agriculture",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "standard",
    "homepageFeatured": false,
    "summary": "Agricultural company website featuring locally grown herbs and produce.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/evonuk-farms/cover.webp"
    },
    "seo": {
      "title": "Evonuk Farms | Web Development Project | Udaya Krishantha",
      "description": "Agricultural company website featuring locally grown herbs and produce."
    },
    "description": "Evonuk Farms is an agricultural producer. The business website communicates its farming focus and information about products or services to potential customers."
  },
  {
    "slug": "average-beach",
    "name": "Average Beach",
    "url": "https://average-beach.ch/",
    "path": "/work/average-beach",
    "industry": [
      "eCommerce & Retail",
      "Lifestyle"
    ],
    "projectTypes": [
      "eCommerce"
    ],
    "platforms": [
      "Shopify"
    ],
    "technologies": {
      "confirmed": [
        "Shopify"
      ],
      "inferred": [
        "Liquid",
        "JavaScript"
      ]
    },
    "tags": [
      "Shopify",
      "eCommerce & Retail",
      "Lifestyle",
      "eCommerce"
    ],
    "contribution": "unknown",
    "projectTier": "historical",
    "homepageFeatured": false,
    "currentSiteRepresentsMyWork": false,
    "summary": "Swiss beachwear and travel accessories eCommerce storefront.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/average-beach/cover.webp"
    },
    "seo": {
      "title": "Average Beach | Web Development Project | Udaya Krishantha",
      "description": "Swiss beachwear and travel accessories eCommerce storefront."
    },
    "description": "Average Beach is a Swiss lifestyle and eCommerce project associated with beach and travel products. Earlier correspondence identifies Shopify work; the current website may not represent the original build."
  },
  {
    "slug": "oli-oli-pizza",
    "name": "Oli Oli Pizza",
    "url": "https://www.oliolipizza.com/",
    "path": "/work/oli-oli-pizza",
    "industry": [
      "Hospitality",
      "Restaurant"
    ],
    "projectTypes": [
      "Restaurant Website"
    ],
    "platforms": [
      "Squarespace"
    ],
    "technologies": {
      "confirmed": [
        "Squarespace"
      ]
    },
    "tags": [
      "Squarespace",
      "Hospitality",
      "Restaurant",
      "Restaurant Website"
    ],
    "contribution": "unknown",
    "projectTier": "historical",
    "homepageFeatured": false,
    "currentSiteRepresentsMyWork": false,
    "summary": "Maui wood-fired pizza and catering website for events and weddings.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/oli-oli-pizza/cover.webp"
    },
    "seo": {
      "title": "Oli Oli Pizza | Web Development Project | Udaya Krishantha",
      "description": "Maui wood-fired pizza and catering website for events and weddings."
    },
    "description": "Oli Oli Pizza is a Maui-based wood-fired pizza and catering business. Its website communicates the dining and events offering with practical information for customers. The historical project was associated with Squarespace."
  },
  {
    "slug": "icdw-hawaii",
    "name": "ICDW Hawaii",
    "url": "https://www.icdwhawaii.com/",
    "path": "/work/icdw-hawaii",
    "industry": [
      "Construction",
      "Commercial Services"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Construction",
      "Commercial Services",
      "Corporate Website"
    ],
    "contribution": "unknown",
    "projectTier": "historical",
    "homepageFeatured": false,
    "summary": "Commercial doors and windows company website with services and project content.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/icdw-hawaii/cover.webp"
    },
    "seo": {
      "title": "ICDW Hawaii | Web Development Project | Udaya Krishantha",
      "description": "Commercial doors and windows company website with services and project content."
    },
    "description": "ICDW Hawaii is associated with commercial doors and windows in Hawaii. The website presents business and service information; its current homepage has indicated temporary business closure, which is not the same as a dead domain.",
    "verificationNotes": [
      "Website content is accessible; business homepage states temporarily closed."
    ]
  },
  {
    "slug": "barbara-liniger",
    "name": "Barbara Liniger",
    "url": "https://barbaraliniger.com/",
    "path": "/work/barbara-liniger",
    "industry": [
      "Healthcare",
      "Wellness",
      "Professional Services"
    ],
    "projectTypes": [
      "Professional Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "WordPress",
      "Healthcare",
      "Wellness",
      "Professional Services",
      "Professional Website"
    ],
    "contribution": "unknown",
    "projectTier": "historical",
    "homepageFeatured": false,
    "summary": "Professional services website covering medical intuition and therapeutic services.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/barbara-liniger/cover.webp"
    },
    "seo": {
      "title": "Barbara Liniger | Web Development Project | Udaya Krishantha",
      "description": "Professional services website covering medical intuition and therapeutic services."
    },
    "description": "Barbara Liniger’s website presents personal and professional wellness-related services. Its content and design may have changed since the original website project."
  },
  {
    "slug": "champa",
    "name": "Champa",
    "url": "https://champa.art/",
    "path": "/work/champa",
    "industry": [
      "Art & Creative",
      "eCommerce & Retail"
    ],
    "projectTypes": [
      "eCommerce",
      "Portfolio Website"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Art & Creative",
      "eCommerce & Retail",
      "eCommerce",
      "Portfolio Website"
    ],
    "contribution": "unknown",
    "projectTier": "historical",
    "homepageFeatured": false,
    "summary": "Artist portfolio and online store for original artwork.",
    "featured": false,
    "status": "live",
    "verification": "needs-review",
    "images": {
      "cover": "/api/portfolio-access/assets/projects/champa/cover.webp"
    },
    "seo": {
      "title": "Champa | Web Development Project | Udaya Krishantha",
      "description": "Artist portfolio and online store for original artwork."
    },
    "description": "Champa is an art and creative brand website featuring artist work. The current site is part of the portfolio’s historical client-work collection; platform and implementation specifics remain unverified."
  },
  {
    "slug": "connors-security",
    "name": "Connors Security",
    "url": "https://www.connorssecurity.com.au/",
    "path": "/work/connors-security",
    "industry": [
      "Security Services",
      "Professional Services"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [
      "WordPress"
    ],
    "technologies": {
      "confirmed": [],
      "inferred": [
        "WordPress"
      ]
    },
    "tags": [
      "WordPress",
      "Security Services",
      "Professional Services",
      "Corporate Website"
    ],
    "role": "Full Website Developer",
    "contribution": "built",
    "projectTier": "historical",
    "homepageFeatured": false,
    "summary": "Australian security services website, built in full by Udaya Krishantha.",
    "featured": false,
    "status": "live",
    "verification": "confirmed",
    "verificationNotes": [
      "Developer confirms full website creation and current working domain. Independent HTTP verification is inconclusive."
    ],
    "images": {
      "cover": "/api/portfolio-access/assets/projects/connors-security/cover.webp"
    },
    "seo": {
      "title": "Connors Security | Web Development Project | Udaya Krishantha",
      "description": "Australian security services website, built in full by Udaya Krishantha."
    },
    "description": "Connors Security is an Australian security-services business. The developer confirms creating the full website and confirms the domain is working. Current design and technical stack should be represented according to the historical build, not guessed from the live site.",
    "responsibilities": [
      "Full website design and development"
    ]
  },
  {
    "slug": "apollo-re-investors",
    "name": "Apollo RE Investors",
    "url": "http://apolloreinvestors.com/",
    "path": "/work/apollo-re-investors",
    "industry": [
      "Real Estate",
      "Investment"
    ],
    "projectTypes": [
      "Corporate Website"
    ],
    "platforms": [],
    "technologies": {
      "confirmed": []
    },
    "tags": [
      "Real Estate",
      "Investment",
      "Corporate Website"
    ],
    "role": "Full Website Developer",
    "contribution": "built",
    "projectTier": "historical",
    "homepageFeatured": false,
    "summary": "Real estate investment company website, built in full by Udaya Krishantha.",
    "featured": false,
    "status": "live",
    "verification": "confirmed",
    "verificationNotes": [
      "Developer confirms full website creation and current working domain. Independent HTTP verification is inconclusive."
    ],
    "images": {
      "cover": "/api/portfolio-access/assets/projects/apollo-re-investors/cover.webp"
    },
    "seo": {
      "title": "Apollo RE Investors | Web Development Project | Udaya Krishantha",
      "description": "Real estate investment company website, built in full by Udaya Krishantha."
    },
    "description": "Apollo RE Investors is a real-estate investment business website. The developer confirms designing and developing the full site and that the domain works. The precise content-management platform has not yet been established.",
    "responsibilities": [
      "Full website design and development"
    ]
  }
];

/** Six explicitly chosen homepage projects, in the requested order. */
export const homepageProjects: Project[] = projects.filter((project) => project.homepageFeatured);
/** Additional exports retained for existing page integrations. */
export const featuredProjects: Project[] = projects.filter((project) => project.projectTier === "featured");
export const standardProjects: Project[] = projects.filter((project) => project.projectTier === "standard");
export const historicalProjects: Project[] = projects.filter((project) => project.projectTier === "historical");
export const projectCount = projects.length;

export const getHomepageProjects = (): Project[] => homepageProjects;
export const getFeaturedProjects = (): Project[] => featuredProjects;
export const getStandardProjects = (): Project[] => standardProjects;
export const getHistoricalProjects = (): Project[] => historicalProjects;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByPlatform(platform: string): Project[] {
  const normalized = platform.trim().toLowerCase();
  return projects.filter((project) =>
    project.platforms.some((item) => item.toLowerCase() === normalized),
  );
}

export function getProjectsByIndustry(industry: string): Project[] {
  const normalized = industry.trim().toLowerCase();
  return projects.filter((project) =>
    project.industry.some((item) => item.toLowerCase() === normalized),
  );
}

export function getProjectsByTechnology(technology: string): Project[] {
  const normalized = technology.trim().toLowerCase();
  return projects.filter((project) =>
    project.technologies.confirmed.some((item) => item.toLowerCase() === normalized),
  );
}

export function getProjectsByTag(tag: string): Project[] {
  const normalized = tag.trim().toLowerCase();
  return projects.filter((project) =>
    project.tags.some((item) => item.toLowerCase() === normalized),
  );
}
