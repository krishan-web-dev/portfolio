import { NextResponse } from "next/server";

import { getPortfolioSession } from "@/lib/portfolio-access";
import { privatePortfolioOverview } from "@/lib/private-case-studies";

const headers = { "Cache-Control": "private, no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow" };

export async function GET() {
  const session = await getPortfolioSession();
  if (!session) return NextResponse.json({ error: "Not found" }, { status: 404, headers });
  return NextResponse.json(privatePortfolioOverview, { headers });
}
