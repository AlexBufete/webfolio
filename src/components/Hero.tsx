import Image from "next/image";
import Link from "next/link";
import { TerminalCommand } from "./TerminalCommand";

const tags = [
  { label: "server-infra", color: "teal" },
  { label: "networking", color: "blue" },
  { label: "windows-server", color: "purple" },
  { label: "linux-admin", color: "coral" },
  { label: "virtualization", color: "amber" },
] as const;

const tagColors = {
  teal: "bg-[var(--color-accent-teal-bg)] text-[var(--color-accent-teal)]",
  blue: "bg-[var(--color-accent-blue-bg)] text-[var(--color-accent-blue)]",
  purple:
    "bg-[var(--color-accent-purple-bg)] text-[var(--color-accent-purple)]",
  coral: "bg-[var(--color-accent-coral-bg)] text-[var(--color-accent-coral)]",
  amber: "bg-[var(--color-accent-amber-bg)] text-[var(--color-accent-amber)]",
};

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12 pt-14">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        {/* Portrait */}
        <div className="relative h-[120px] w-[120px] flex-shrink-0 overflow-hidden rounded-2xl border-2 border-[var(--color-accent-teal-border)]">
          <Image src="/portrait.jpg" alt="Alex" fill className="object-cover" />
        </div>

        {/* Intro */}
        <div className="flex-1">
          <TerminalCommand command="whoami" />
          <h1 className="mb-1 text-4xl font-bold tracking-tight text-[var(--color-text-heading)]">
            Alex
          </h1>
          <p className="mb-4 text-lg text-[var(--color-accent-blue)]">
            Infrastructure Engineer &amp; Systems Architect
          </p>
          <p className="mb-5 max-w-lg text-sm leading-relaxed text-[var(--color-text-body)]">
            I design, deploy, and maintain the server infrastructure and
            networks that businesses depend on. Built from scratch, not from
            templates.
          </p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t.label}
                className={`rounded px-3 py-1 font-[var(--font-mono)] text-[11px] ${tagColors[t.color]}`}
              >
                {t.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <Link
              href="/#projects"
              className="rounded-lg bg-[var(--color-accent-teal)] px-6 py-2.5 text-sm font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90"
            >
              View my work
            </Link>
            <Link
              href="/book"
              className="rounded-lg border border-white/15 px-6 py-2.5 text-sm text-[var(--color-text-heading)] transition-colors hover:border-white/30"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
