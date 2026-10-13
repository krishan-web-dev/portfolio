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

export type VerificationLevel =
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

    summary: string;
    description?: string;

    responsibilities?: string[];

    featured: boolean;
    status: ProjectStatus;

    verification: VerificationLevel;

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