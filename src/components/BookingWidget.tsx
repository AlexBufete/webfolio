"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";

export function BookingWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center gap-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] py-16">
      <p className="text-sm text-[var(--color-text-body)]">
        Choose a time that works for you
      </p>
      <PopupButton
        url="https://calendly.com/abufete"
        rootElement={document.body}
        className="rounded-lg bg-[var(--color-accent-teal)] px-8 py-3 text-sm font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90"
        text="Schedule a consultation"
      />
    </div>
  );
}