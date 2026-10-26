import "server-only";

type SupabaseError = { message?: string };

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) throw new Error("Supabase is not configured");
  return { url: url.replace(/\/$/, ""), secretKey };
}

function headers(secretKey: string) {
  const requestHeaders: Record<string, string> = {
    apikey: secretKey,
    "Content-Type": "application/json",
  };
  // Legacy service-role keys are JWTs. New sb_secret_* keys must not be sent as bearer tokens.
  if (!secretKey.startsWith("sb_secret_")) {
    requestHeaders.Authorization = `Bearer ${secretKey}`;
  }
  return requestHeaders;
}

async function assertResponse(response: Response) {
  if (response.ok) return;
  const body = (await response.json().catch(() => ({}))) as SupabaseError;
  throw new Error(body.message || `Supabase request failed (${response.status})`);
}

export async function supabaseRpc<T>(name: string, parameters: Record<string, unknown>) {
  const { url, secretKey } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: headers(secretKey),
    body: JSON.stringify(parameters),
    cache: "no-store",
  });

  await assertResponse(response);
  return (await response.json()) as T;
}

export async function updateAccessRequest(
  requestId: string,
  values: Record<string, unknown>,
) {
  const { url, secretKey } = getSupabaseConfig();
  const response = await fetch(
    `${url}/rest/v1/portfolio_access_requests?id=eq.${encodeURIComponent(requestId)}`,
    {
      method: "PATCH",
      headers: { ...headers(secretKey), Prefer: "return=minimal" },
      body: JSON.stringify(values),
      cache: "no-store",
    },
  );
  await assertResponse(response);
}

export async function fetchPrivateObject(path: string) {
  const { url, secretKey } = getSupabaseConfig();
  const bucket = process.env.SUPABASE_PRIVATE_BUCKET || "portfolio-private";
  const safePath = path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return fetch(`${url}/storage/v1/object/${encodeURIComponent(bucket)}/${safePath}`, {
    headers: headers(secretKey),
    cache: "no-store",
  });
}
