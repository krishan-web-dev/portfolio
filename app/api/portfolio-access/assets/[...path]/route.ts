import { getPortfolioSession } from "@/lib/portfolio-access";
import { fetchPrivateObject } from "@/lib/supabase";

const responseHeaders = { "Cache-Control": "private, no-store, max-age=0", "X-Content-Type-Options": "nosniff", "X-Robots-Tag": "noindex, nofollow" };

export async function GET(request: Request, context: { params: Promise<{ path: string[] }> }) {
  const session = await getPortfolioSession();
  if (!session) return new Response("Not found", { status: 404, headers: responseHeaders });
  const { path } = await context.params;
  if (!path.length || path.some((segment) => !segment || segment === "." || segment === "..")) return new Response("Not found", { status: 404, headers: responseHeaders });

  const upstream = await fetchPrivateObject(path.join("/"));
  if (!upstream.ok || !upstream.body) return new Response("Not found", { status: 404, headers: responseHeaders });
  const headers = new Headers(responseHeaders);
  headers.set("Content-Type", upstream.headers.get("content-type") || "application/octet-stream");
  const length = upstream.headers.get("content-length");
  if (length) headers.set("Content-Length", length);
  if (new URL(request.url).searchParams.get("download") === "1") {
    const filename = path.at(-1) || "download";
    headers.set("Content-Disposition", `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`);
  }
  return new Response(upstream.body, { status: 200, headers });
}
