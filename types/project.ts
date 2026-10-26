export type ProjectTier =
    | "featured"
    | "standard"
    | "historical";

export type ProjectContribution =
    | "built"
    | "revamped"
    | "contributed"
    | "maintained"
    | "unknown";

export type ProjectStatus =
    | "live"
    | "offline"
    | "redirected"
    | "changed"
    | "unknown";

export type ProjectVerification =
    | "confirmed"
    | "partially-confirmed"
    | "needs-review";

export type Project = {
    slug: string;
    name: string;
    client?: string;
    url?: string;

    industry: string[];
    projectTypes: string[];
    platforms: string[];

    technologies: {
        confirmed: string[];
        inferred?: string[];
    };

    role?: string;
    contribution: ProjectContribution;

    projectTier: ProjectTier;

    /**
     * Important for older projects.
     * false = current live website may no longer represent
     * the version I originally worked on.
     */
    currentSiteRepresentsMyWork?: boolean;

    summary: string;
    description?: string;

    responsibilities?: string[];

    featured: boolean;

    status: ProjectStatus;

    /** Internal publishing metadata. Never render this in public project UI. */
    verification?: ProjectVerification;
    verificationNotes?: string[];

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
