import nodemailer, { type SendMailOptions, type Transporter } from "nodemailer";

export type EmailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  owner: string;
  from: string;
  siteUrl: string;
};

let transporter: Transporter | undefined;

export function getEmailConfig(): EmailConfig {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const secureValue = process.env.SMTP_SECURE;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const owner = process.env.PORTFOLIO_OWNER_EMAIL;
  const from = process.env.PORTFOLIO_FROM_EMAIL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (secureValue !== "true" && secureValue !== "false") ||
    !user ||
    !password ||
    !owner ||
    !from ||
    !siteUrl
  ) {
    throw new Error("SMTP email is not configured");
  }

  return {
    host,
    port,
    secure: secureValue === "true",
    user,
    password,
    owner,
    from,
    siteUrl: siteUrl.replace(/\/$/, ""),
  };
}

function getTransporter() {
  if (transporter) return transporter;

  const config = getEmailConfig();
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: !config.secure,
    auth: { user: config.user, pass: config.password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    tls: {
      minVersion: "TLSv1.2",
      rejectUnauthorized: true,
      servername: config.host,
    },
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  return transporter;
}

function logSmtpFailure(operation: string, error: unknown) {
  const diagnostic = error as {
    name?: unknown;
    code?: unknown;
    command?: unknown;
    responseCode?: unknown;
  };

  console.error(`[portfolio-email] ${operation} failed`, {
    name: typeof diagnostic?.name === "string" ? diagnostic.name : "Error",
    code: typeof diagnostic?.code === "string" ? diagnostic.code : undefined,
    command: typeof diagnostic?.command === "string" ? diagnostic.command : undefined,
    responseCode:
      typeof diagnostic?.responseCode === "number" ? diagnostic.responseCode : undefined,
  });
}

export async function sendEmail(message: Omit<SendMailOptions, "from">) {
  const { from, owner } = getEmailConfig();

  try {
    const send = () =>
      getTransporter().sendMail({
        ...message,
        from: { name: "Udaya Krishantha Portfolio", address: from },
        replyTo: owner,
      });

    let info;
    try {
      info = await send();
    } catch (error) {
      if (!isSafeToRetry(error)) throw error;
      console.warn("[portfolio-email] Retrying SMTP before message submission", {
        code: getErrorString(error, "code"),
        command: getErrorString(error, "command"),
      });
      info = await send();
    }

    const accepted = Array.isArray(info.accepted) ? info.accepted.length : 0;
    const rejected = Array.isArray(info.rejected) ? info.rejected.length : 0;
    if (accepted < 1 || rejected > 0) {
      throw Object.assign(new Error("SMTP recipient was rejected"), {
        code: "ERECIPIENT",
        responseCode: info.responseCode,
      });
    }

    return info;
  } catch (error) {
    logSmtpFailure("SMTP delivery", error);
    throw new Error("SMTP email delivery failed", { cause: error });
  }
}

function getErrorString(error: unknown, key: "code" | "command") {
  const value = (error as Record<string, unknown> | null)?.[key];
  return typeof value === "string" ? value : undefined;
}

function isSafeToRetry(error: unknown) {
  const code = getErrorString(error, "code");
  const command = getErrorString(error, "command");

  if (code === "EDNS") return true;
  return (
    ["ECONNECTION", "ETIMEDOUT", "ESOCKET"].includes(code || "") &&
    ["CONN", "EHLO", "STARTTLS"].includes(command || "")
  );
}

export async function verifySmtpConnection() {
  try {
    await getTransporter().verify();
  } catch (error) {
    logSmtpFailure("SMTP verification", error);
    throw new Error("SMTP connection verification failed", { cause: error });
  }
}

export async function sendSmtpTestEmail() {
  const { owner, siteUrl } = getEmailConfig();
  const info = await sendEmail({
    to: owner,
    subject: "Portfolio Brevo SMTP test",
    text: `Brevo SMTP is configured correctly for ${siteUrl}.`,
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#0f172a"><h1 style="font-size:22px">Brevo SMTP is working</h1><p>The private portfolio email transport is configured correctly.</p><p style="color:#64748b;font-size:13px">This message was sent by the development-only SMTP test command.</p></div>`,
  });
  return { accepted: Array.isArray(info.accepted) && info.accepted.length > 0 };
}
