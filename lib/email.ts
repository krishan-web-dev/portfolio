import "server-only";

import { getEmailConfig, sendEmail } from "@/lib/email-transport";

type RequestEmail = {
  requestId: string;
  approvalToken: string;
  fullName: string;
  email: string;
  company: string;
  reason: string;
  requestedAt: Date;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

export async function sendOwnerRequestEmail(input: RequestEmail) {
  const { owner, siteUrl } = getEmailConfig();
  const base = `${siteUrl}/work/access-decision`;
  const common = `request=${encodeURIComponent(input.requestId)}&token=${encodeURIComponent(input.approvalToken)}`;
  const approveUrl = `${base}?${common}&decision=approve`;
  const rejectUrl = `${base}?${common}&decision=reject`;
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 16px 8px 0;color:#64748b;vertical-align:top">${label}</td><td style="padding:8px 0;color:#0f172a">${escapeHtml(value || "—")}</td></tr>`;

  await sendEmail({
    to: owner,
    subject: `New Portfolio Access Request — ${input.fullName}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0f172a"><h1 style="font-size:24px">New portfolio access request</h1><table style="border-collapse:collapse;width:100%">${row("Name", input.fullName)}${row("Email", input.email)}${row("Company", input.company)}${row("Message", input.reason)}${row("Requested", input.requestedAt.toISOString())}</table><p style="margin:28px 0 12px"><a href="${approveUrl}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:700">Approve Access</a> <a href="${rejectUrl}" style="display:inline-block;border:1px solid #cbd5e1;color:#334155;padding:11px 18px;border-radius:8px;text-decoration:none;font-weight:700">Reject Request</a></p><p style="color:#64748b;font-size:13px;line-height:1.5">Each link opens a confirmation page. No decision is made until you enter your private passphrase and submit the form.</p></div>`,
    text: `New portfolio access request\n\nName: ${input.fullName}\nEmail: ${input.email}\nCompany: ${input.company || "—"}\nMessage: ${input.reason || "—"}\nRequested: ${input.requestedAt.toISOString()}\n\nApprove: ${approveUrl}\nReject: ${rejectUrl}\n\nOpening a link does not make a decision.`,
  });
}

export async function sendVisitorAccessEmail(input: {
  name: string;
  email: string;
  visitorToken: string;
}) {
  const { siteUrl } = getEmailConfig();
  const accessUrl = `${siteUrl}/work/access?token=${encodeURIComponent(input.visitorToken)}`;

  await sendEmail({
    to: input.email,
    subject: "Your private portfolio access is approved",
    html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0f172a"><h1 style="font-size:24px">Your access is approved</h1><p>Hi ${escapeHtml(input.name)},</p><p>Your request to view the private portfolio has been approved. The secure link below expires in 48 hours and can be used once.</p><p style="margin:28px 0"><a href="${accessUrl}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:700">Open private portfolio</a></p><p style="color:#64748b;font-size:13px;line-height:1.5">Opening the link shows a confirmation screen; access is activated only after you confirm.</p></div>`,
    text: `Hi ${input.name},\n\nYour private portfolio access is approved. This one-time link expires in 48 hours:\n${accessUrl}`,
  });
}
