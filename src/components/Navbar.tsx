"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[var(--font-mono)] text-sm text-[var(--color-accent-teal)]"
        >
          alex<span className="text-[var(--color-text-muted)]">@</span>
          <span className="text-[var(--color-accent-blue)]">portfolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/#services"
            className="text-sm text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-heading)]"
          >
            services
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-heading)]"
          >
            projects
          </Link>
          <Link
            href="/#about"
            className="text-sm text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-heading)]"
          >
            about
          </Link>
          <Link
            href="/stack"
            className="text-sm text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-heading)]"
          >
            stack
          </Link>
          <Link
            href="/resume"
            className="text-sm text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-heading)]"
          >
            resume
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-[var(--color-accent-teal)] px-4 py-1.5 text-xs font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90"
          >
            contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-[var(--color-text-body)] transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-[var(--color-text-body)] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-[var(--color-text-body)] transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border-subtle)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#services"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--color-text-body)]"
            >
              services
            </Link>
            <Link
              href="/#projects"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--color-text-body)]"
            >
              projects
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--color-text-body)]"
            >
              about
            </Link>
            <Link
              href="/stack"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--color-text-body)]"
            >
              stack
            </Link>
            <Link
              href="/resume"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--color-text-body)]"
            >
              resume
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--color-accent-teal)]"
            >
              contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
