import { BookingWidget } from "@/components/BookingWidget";
import { TerminalCommand } from "@/components/TerminalCommand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Alex — Infrastructure Engineer",
  description: "Schedule a consultation to discuss your infrastructure needs.",
};

export default function BookPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <TerminalCommand command="./book-consultation.sh" />
      <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-heading)]">
        Book a Consultation
      </h1>
      <p className="mb-8 max-w-lg text-sm leading-relaxed text-[var(--color-text-body)]">
        Pick a time that works for you. I&apos;ll follow up with a confirmation
        and any prep details before our call.
      </p>
      <BookingWidget />
    </section>
  );
}
