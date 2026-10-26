import "server-only";

import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export function createSecureToken(bytes = 32) {
  return randomBytes(bytes).toString("base64url");
}

export function hashToken(token: string) {
  return createHash("sha256").update(token, "utf8").digest("hex");
}

export function hashPrivateValue(value: string) {
  const pepper = process.env.PORTFOLIO_TOKEN_PEPPER;
  if (!pepper) throw new Error("PORTFOLIO_TOKEN_PEPPER is not configured");

  return createHmac("sha256", pepper).update(value, "utf8").digest("hex");
}

export function secretsMatch(candidate: string, expected: string) {
  const candidateDigest = createHash("sha256").update(candidate, "utf8").digest();
  const expectedDigest = createHash("sha256").update(expected, "utf8").digest();

  return timingSafeEqual(candidateDigest, expectedDigest);
}
