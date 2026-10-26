import "server-only";

export const privatePortfolioOverview = {
  title: "Private case studies",
  introduction:
    "This secure area is ready for confidential project narratives, restricted screenshots, technical decisions, and supporting documents.",
  sections: [
    {
      title: "Detailed delivery context",
      description:
        "Deeper project constraints, implementation decisions, responsibilities, and outcomes can be published here without exposing them in public page output.",
    },
    {
      title: "Protected supporting material",
      description:
        "Private images and documents should be uploaded to the configured private Supabase Storage bucket and served only through the authenticated asset route.",
    },
  ],
};
