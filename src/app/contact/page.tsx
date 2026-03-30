import { TerminalCommand } from "@/components/TerminalCommand";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Alex — Infrastructure Engineer",
  description:
    "Get in touch for infrastructure projects, server provisioning, and network engineering.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <TerminalCommand command="./contact.sh" />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-heading)]">
            Let&apos;s build something.
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-body)]">
            Have a project in mind? Need infrastructure expertise? Send me a
            message or book a consultation — I&apos;ll get back to you within 24
            hours.
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                email:
              </span>
              <a
                href="mailto:alex@abufete.systems"
                className="text-sm text-[var(--color-accent-blue)] hover:underline"
              >
                alex@abufete.systems
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                github:
              </span>
              <a
                href="https://github.com/AlexBufete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-accent-blue)] hover:underline"
              >
                github.com/AlexBufete
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                linkedin:
              </span>
              <a
                href="https://linkedin.com/in/abufete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-accent-blue)] hover:underline"
              >
                linkedin.com/in/abufete
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
