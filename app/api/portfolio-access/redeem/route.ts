import { NextResponse } from "next/server";
import { z } from "zod";

import { isSameOrigin, redeemVisitorToken, setPortfolioSessionCookie } from "@/lib/portfolio-access";

const schema = z.object({ token: z.string().min(32).max(200) });

export async function POST(request: Request) {
  const invalid = () => NextResponse.redirect(new URL("/work/access?state=invalid", request.url), 303);
  if (!isSameOrigin(request)) return invalid();
  const parsed = schema.safeParse(Object.fromEntries(await request.formData()));
  if (!parsed.success) return invalid();

  try {
    const result = await redeemVisitorToken(parsed.data.token);
    if (result.result !== "redeemed") return invalid();
    await setPortfolioSessionCookie(result.sessionToken, result.expiresAt);
    return NextResponse.redirect(new URL("/work/private", request.url), 303);
  } catch {
    return invalid();
  }
}
