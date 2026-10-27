import {
  sendSmtpTestEmail,
  verifySmtpConnection,
} from "../lib/email-transport";

async function main() {
  if (process.env.NODE_ENV === "production") {
    console.error("The SMTP test command is disabled when NODE_ENV=production.");
    process.exitCode = 1;
    return;
  }

  if (!process.env.SMTP_HOST) {
    const loadEnvFile = (
      process as NodeJS.Process & { loadEnvFile?: (path?: string) => void }
    ).loadEnvFile;
    if (!loadEnvFile) throw new Error("This command requires Node.js 20.12 or newer");
    loadEnvFile.call(process, ".env.local");
  }

  await verifySmtpConnection();
  const result = await sendSmtpTestEmail();
  console.log(`SMTP connection verified. Test message accepted: ${result.accepted ? "yes" : "no"}.`);
}

main().catch(() => {
  console.error("SMTP test failed. Review the sanitized diagnostic above and your SMTP settings.");
  process.exitCode = 1;
});
