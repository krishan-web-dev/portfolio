import "server-only";

import { cookies } from "next/headers";
import { z } from "zod";

import { createSecureToken, hashPrivateValue, hashToken, secretsMatch } from "@/lib/portfolio-tokens";
import { supabaseRpc } from "@/lib/supabase";

export const SESSION_COOKIE_NAME = "portfolio_private_session";
export const requestAccessSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(254),
  company: z.string().trim().max(120).optional().default(""),
  reason: z.string().trim().max(1500).optional().default(""),
  turnstileToken: z.string().min(1, "Complete the security check."),
});

export type AccessRequestInput = z.infer<typeof requestAccessSchema>;

type CreateRequestResult = {
  request_id: string | null;
  should_notify: boolean;
  result: "created" | "duplicate" | "rate_limited";
};

type DecisionResult = {
  result: "approved" | "rejected" | "already_processed" | "invalid";
  visitor_email: string | null;
  visitor_name: string | null;
};

type RedeemResult = { result: "redeemed" | "invalid" };
type SessionResult = {
  request_id: string;
  visitor_name: string;
  visitor_email: string;
  expires_at: string;
};

function firstResult<T>(result: T[] | T): T | undefined {
  return Array.isArray(result) ? result[0] : result;
}

function requiredResult<T>(result: T[] | T): T {
  const value = firstResult(result);
  if (!value) throw new Error("The access service returned an invalid response");
  return value;
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  const allowed = new Set([new URL(request.url).origin]);
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try {
      allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin);
    } catch {
      return false;
    }
  }
  return allowed.has(origin);
}

export async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body, cache: "no-store" },
  );
  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function createAccessRequest(input: AccessRequestInput, ip: string) {
  const approvalToken = createSecureToken();
  const result = await supabaseRpc<CreateRequestResult[]>("create_portfolio_access_request", {
    p_full_name: input.fullName,
    p_email: input.email,
    p_company: input.company || null,
    p_reason: input.reason || null,
    p_approval_token_hash: hashToken(approvalToken),
    p_approval_expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    p_rate_key: hashPrivateValue(ip),
  });

  return { ...requiredResult(result), approvalToken };
}

export function verifyOwnerPassphrase(candidate: string) {
  const expected = process.env.PORTFOLIO_OWNER_PASSPHRASE;
  return Boolean(expected && candidate && secretsMatch(candidate, expected));
}

export async function decideAccessRequest(input: {
  requestId: string;
  token: string;
  decision: "approve" | "reject";
}) {
  const visitorToken = input.decision === "approve" ? createSecureToken() : null;
  const result = await supabaseRpc<DecisionResult[]>("decide_portfolio_access_request", {
    p_request_id: input.requestId,
    p_decision: input.decision === "approve" ? "approved" : "rejected",
    p_approval_token_hash: hashToken(input.token),
    p_visitor_token_hash: visitorToken ? hashToken(visitorToken) : null,
    p_visitor_token_expires_at: visitorToken
      ? new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString()
      : null,
  });

  return { ...requiredResult(result), visitorToken };
}

export async function redeemVisitorToken(token: string) {
  const sessionToken = createSecureToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const result = await supabaseRpc<RedeemResult[]>("redeem_portfolio_access_link", {
    p_visitor_token_hash: hashToken(token),
    p_session_token_hash: hashToken(sessionToken),
    p_session_expires_at: expiresAt.toISOString(),
  });

  return { ...requiredResult(result), sessionToken, expiresAt };
}

export async function setPortfolioSessionCookie(token: string, expiresAt: Date) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });
}

export async function getPortfolioSession() {
  const token = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  const result = await supabaseRpc<SessionResult[]>("validate_portfolio_session", {
    p_session_token_hash: hashToken(token),
  });
  return firstResult(result) || null;
}
