"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-lg border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-heading)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-teal)]/40 focus:outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-lg border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-heading)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-teal)]/40 focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        required
        rows={4}
        className="resize-y rounded-lg border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-heading)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-teal)]/40 focus:outline-none"
      />
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex-1 rounded-lg bg-[var(--color-accent-teal)] py-3 text-sm font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <a
          href="/book"
          className="flex flex-1 items-center justify-center rounded-lg border border-white/15 py-3 text-sm text-[var(--color-text-heading)] transition-colors hover:border-white/30"
        >
          Book a consultation
        </a>
      </div>
      {status === "sent" && (
        <p className="text-center text-xs text-[var(--color-accent-teal)]">
          Message sent — I&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-xs text-red-400">
          Something went wrong. Try again or email me directly from your email
          client.
        </p>
      )}
    </form>
  );
}
