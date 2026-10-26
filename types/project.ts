export type ProjectTier = "featured" | "standard" | "historical";

export type ProjectContribution =
    | "built"
    | "revamped"
    | "contributed"
    | "maintained"
    | "unknown";

export type ProjectStatus = "live" | "offline" | "redirected" | "changed" | "unknown";
export type ProjectVerification = "confirmed" | "partially-confirmed" | "needs-review";

export type Project = {
    slug: string;
    name: string;
    client?: string;
    /** Current external URL; Matrix uses the Next.js rebuild here. */
    url?: string;
    /** Original client URL, if different from the project being showcased. */
    originalUrl?: string;
    /** Case-study path in this portfolio. */
    path: string;

    industry: string[];
    projectTypes: string[];
    platforms: string[];
    technologies: {
        confirmed: string[];
        inferred?: string[];
    };
    /** Public-facing search/filter tags, excluding inferred technologies. */
    tags: string[];

    role?: string;
    contribution: ProjectContribution;
    projectTier: ProjectTier;
    /** Featured on the homepage; independent of projectTier. */
    homepageFeatured: boolean;
    /** false = today's site may not show the version you developed. */
    currentSiteRepresentsMyWork?: boolean;

    summary: string;
    description?: string;
    responsibilities?: string[];
    /** Kept for compatibility with existing UI that reads project.featured. */
    featured: boolean;
    status: ProjectStatus;
    /** Internal publishing metadata; do not render to recruiters. */
    verification?: ProjectVerification;
    verificationNotes?: string[];

    /** Paths for real site screenshots; file assets must be captured separately. */
    images: {
        cover: string;
        desktop?: string;
        mobile?: string;
    };
    caseStudy?: {
        challenge?: string;
        solution?: string;
        technicalImplementation?: string[];
        outcome?: string;
    };
    seo: {
        title: string;
        description: string;
    };
};
