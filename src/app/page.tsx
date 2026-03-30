import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { SectionDivider } from "@/components/SectionDivider";
import { TerminalCommand } from "@/components/TerminalCommand";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider color="teal" />
      <Services />
      <SectionDivider color="blue" />
      <Projects />
      <SectionDivider color="purple" />
      <About />
      <SectionDivider color="amber" />

      {/* Contact section (inline on homepage) */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-12">
        <TerminalCommand command="./contact.sh" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[var(--color-text-heading)]">
              Let&apos;s build something.
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-body)]">
              Have a project in mind? Need infrastructure expertise? Send me a
              message or book a consultation — I&apos;ll get back to you within
              24 hours.
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
                  href="https://www.linkedin.com/in/abufete"
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
    </>
  );
}
