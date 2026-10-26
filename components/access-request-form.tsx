"use client";

import { useCallback, useState, type FormEvent } from "react";

import { TurnstileWidget } from "@/components/turnstile-widget";

type FieldErrors = Partial<Record<"fullName" | "email" | "company" | "reason" | "turnstileToken", string>>;

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-line-strong bg-background/70 px-4 text-sm text-primary outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20";

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="mt-2 text-sm text-red-300">{message}</p> : null;
}

export function AccessRequestForm({ siteKey }: { siteKey: string }) {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleToken = useCallback((token: string) => setTurnstileToken(token), []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});
    setFormError("");
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/portfolio-access/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          email: form.get("email"),
          company: form.get("company"),
          reason: form.get("reason"),
          turnstileToken,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string[]>;
      };

      if (!response.ok || !result.ok) {
        if (result.fieldErrors) {
          setErrors(
            Object.fromEntries(
              Object.entries(result.fieldErrors).map(([key, messages]) => [key, messages[0]]),
            ) as FieldErrors,
          );
        }
        setFormError(result.error || "We couldn't submit your request. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setFormError("We couldn't submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent-soft uppercase">Request received</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-primary">Thank you for your interest.</h2>
        <p className="mt-3 leading-7 text-secondary">
          Your access request has been received. If approved, you&apos;ll receive a secure link by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-line bg-surface/70 p-6 shadow-2xl shadow-black/10 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-primary">
          Full name <span className="text-accent-soft">*</span>
          <input name="fullName" autoComplete="name" required maxLength={100} className={fieldClass} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
          <ErrorMessage id="fullName-error" message={errors.fullName} />
        </label>
        <label className="text-sm font-medium text-primary">
          Email address <span className="text-accent-soft">*</span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} aria-describedby={errors.email ? "email-error" : undefined} />
          <ErrorMessage id="email-error" message={errors.email} />
        </label>
        <label className="text-sm font-medium text-primary sm:col-span-2">
          Company <span className="font-normal text-muted">(optional)</span>
          <input name="company" autoComplete="organization" maxLength={120} className={fieldClass} aria-describedby={errors.company ? "company-error" : undefined} />
          <ErrorMessage id="company-error" message={errors.company} />
        </label>
        <label className="text-sm font-medium text-primary sm:col-span-2">
          Reason for requesting access <span className="font-normal text-muted">(optional)</span>
          <textarea name="reason" rows={5} maxLength={1500} className={`${fieldClass} py-3`} aria-describedby={errors.reason ? "reason-error" : undefined} />
          <ErrorMessage id="reason-error" message={errors.reason} />
        </label>
      </div>

      <div className="mt-6">
        {siteKey ? <TurnstileWidget siteKey={siteKey} onToken={handleToken} /> : <p className="text-sm text-red-300">Security verification is not configured.</p>}
        <ErrorMessage id="turnstile-error" message={errors.turnstileToken} />
      </div>

      {formError ? <p role="alert" className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{formError}</p> : null}
      <button type="submit" disabled={submitting || !siteKey} className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-accent bg-accent px-5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(37,99,235,0.22)] transition hover:bg-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {submitting ? "Submitting…" : "Request access"}
      </button>
    </form>
  );
}
