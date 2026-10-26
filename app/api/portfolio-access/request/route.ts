import { NextResponse } from "next/server";
import { z } from "zod";

import { sendOwnerRequestEmail } from "@/lib/email";
import { createAccessRequest, getClientIp, isSameOrigin, requestAccessSchema, verifyTurnstile } from "@/lib/portfolio-access";
import { updateAccessRequest } from "@/lib/supabase";

const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return NextResponse.json({ error: "Request could not be verified." }, { status: 403, headers: noStoreHeaders });

  const parsed = requestAccessSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the highlighted fields.", fieldErrors: z.flattenError(parsed.error).fieldErrors }, { status: 400, headers: noStoreHeaders });
  }

  const ip = getClientIp(request);
  if (!(await verifyTurnstile(parsed.data.turnstileToken, ip))) {
    return NextResponse.json({ error: "Security verification failed. Please try again." }, { status: 400, headers: noStoreHeaders });
  }

  try {
    const created = await createAccessRequest(parsed.data, ip);
    if (created.should_notify && created.request_id) {
      try {
        await sendOwnerRequestEmail({
          requestId: created.request_id,
          approvalToken: created.approvalToken,
          fullName: parsed.data.fullName,
          email: parsed.data.email,
          company: parsed.data.company,
          reason: parsed.data.reason,
          requestedAt: new Date(),
        });
        await updateAccessRequest(created.request_id, { owner_notification_status: "sent", updated_at: new Date().toISOString() });
      } catch {
        await updateAccessRequest(created.request_id, { owner_notification_status: "failed", updated_at: new Date().toISOString() }).catch(() => undefined);
        return NextResponse.json({ error: "We couldn't submit your request. Please try again shortly." }, { status: 503, headers: noStoreHeaders });
      }
    }

    return NextResponse.json({ ok: true }, { status: 202, headers: noStoreHeaders });
  } catch {
    return NextResponse.json({ error: "We couldn't submit your request. Please try again shortly." }, { status: 503, headers: noStoreHeaders });
  }
}
