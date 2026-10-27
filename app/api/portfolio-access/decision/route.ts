import { NextResponse } from "next/server";
import { z } from "zod";

import { sendVisitorAccessEmail } from "@/lib/email";
import { decideAccessRequest, isSameOrigin, verifyOwnerPassphrase } from "@/lib/portfolio-access";
import { updateAccessRequest } from "@/lib/supabase";

const schema = z.object({
  requestId: z.string().uuid(),
  token: z.string().min(32).max(200),
  decision: z.enum(["approve", "reject"]),
  passphrase: z.string().min(1).max(500),
});

function resultRedirect(request: Request, state: string) {
  return NextResponse.redirect(new URL(`/work/access-decision?state=${state}`, request.url), 303);
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return resultRedirect(request, "invalid");
  const form = await request.formData();
  const parsed = schema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return resultRedirect(request, "invalid");
  if (!verifyOwnerPassphrase(parsed.data.passphrase)) {
    return resultRedirect(request, "invalid-passphrase");
  }

  try {
    const decision = await decideAccessRequest(parsed.data);
    if (decision.result === "already_processed") return resultRedirect(request, "already-processed");
    if (decision.result === "invalid") return resultRedirect(request, "invalid");
    if (decision.result === "rejected") return resultRedirect(request, "rejected");

    if (!decision.visitorToken || !decision.visitor_email || !decision.visitor_name) return resultRedirect(request, "invalid");
    try {
      await sendVisitorAccessEmail({ name: decision.visitor_name, email: decision.visitor_email, visitorToken: decision.visitorToken });
      await updateAccessRequest(parsed.data.requestId, { visitor_notification_status: "sent", updated_at: new Date().toISOString() });
      return resultRedirect(request, "approved");
    } catch {
      await updateAccessRequest(parsed.data.requestId, { visitor_notification_status: "failed", updated_at: new Date().toISOString() }).catch(() => undefined);
      return resultRedirect(request, "delivery-failed");
    }
  } catch {
    return resultRedirect(request, "invalid");
  }
}
