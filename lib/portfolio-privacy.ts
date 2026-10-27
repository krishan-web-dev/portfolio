import "server-only";

// Keep the access system available while allowing the lock to be toggled per environment.
export const portfolioPrivacyEnabled =
  process.env.PORTFOLIO_PRIVACY_ENABLED === "true";
