"use client";

import { TerminalCommand } from "@/components/TerminalCommand";
import { useState } from "react";

const stackLayers = [
  {
    id: "hardware",
    label: "Hardware",
    command: "lshw --short",
    color: "var(--color-accent-teal)",
    colorBg: "var(--color-accent-teal-bg)",
    colorBorder: "var(--color-accent-teal-border)",
    items: [
      { key: "Provider", value: "OVH Dedicated Server" },
      { key: "Location", value: "Hillsboro, OR" },
      { key: "Storage", value: "2x NVMe SSD (RAID1 + ZFS)" },
      { key: "Connectivity", value: "1Gbps dedicated" },
    ],
  },
  {
    id: "virtualization",
    label: "Virtualization",
    command: "pveversion",
    color: "var(--color-accent-blue)",
    colorBg: "var(--color-accent-blue-bg)",
    colorBorder: "var(--color-accent-blue-border)",
    items: [
      { key: "Hypervisor", value: "Proxmox VE 9.1" },
      { key: "Container", value: "LXC (unprivileged)" },
      { key: "OS", value: "Ubuntu 24.04 LTS" },
      { key: "Storage Pool", value: "ZFS" },
      { key: "Isolation", value: "Dedicated failover IP + vMAC" },
    ],
  },
  {
    id: "application",
    label: "Application",
    command: "node --version && next --version",
    color: "var(--color-accent-purple)",
    colorBg: "var(--color-accent-purple-bg)",
    colorBorder: "var(--color-accent-purple-border)",
    items: [
      { key: "Framework", value: "Next.js 15 (React 19)" },
      { key: "Language", value: "TypeScript" },
      { key: "Styling", value: "Tailwind CSS v4" },
      { key: "Runtime", value: "Node.js 22 LTS" },
      { key: "Process Manager", value: "PM2" },
    ],
  },
  {
    id: "network",
    label: "Network & Security",
    command: "nginx -v && certbot --version",
    color: "var(--color-accent-amber)",
    colorBg: "var(--color-accent-amber-bg)",
    colorBorder: "var(--color-accent-amber-border)",
    items: [
      { key: "Web Server", value: "Nginx (reverse proxy)" },
      { key: "SSL", value: "Let's Encrypt (auto-renewing)" },
      { key: "DNS", value: "Cloudflare" },
      { key: "Firewall", value: "UFW (80/443 only)" },
      { key: "Security Headers", value: "HSTS, X-Frame, X-Content-Type, Referrer-Policy" },
    ],
  },
  {
    id: "services",
    label: "Services & Integrations",
    command: "cat .env.local | grep -v KEY",
    color: "var(--color-accent-coral)",
    colorBg: "var(--color-accent-coral-bg)",
    colorBorder: "var(--color-accent-coral-border)",
    items: [
      { key: "Email Delivery", value: "Resend (transactional)" },
      { key: "Email Routing", value: "Cloudflare Email Routing" },
      { key: "Booking", value: "Calendly (embed)" },
      { key: "Version Control", value: "Git → GitHub (private)" },
      { key: "Deployment", value: "SSH → git pull → npm ci → build → PM2 restart" },
    ],
  },
] as const;

export default function StackPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <TerminalCommand command="neofetch --full" />

      <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-heading)]">
        How this site is built
      </h1>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--color-text-body)]">
        This isn&apos;t a template. It&apos;s not hosted on Squarespace, WordPress, or
        any managed platform. Every layer — from the bare-metal server to the
        application code — is configured, deployed, and maintained by me. Here&apos;s
        the full stack.
      </p>

      {/* Architecture diagram */}
      <div className="mb-10 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] p-5">
        <p className="mb-4 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
          $ traceroute request
        </p>
        <div className="flex flex-col gap-0">
          {[
            { label: "You", sublabel: "Browser", color: "var(--color-text-muted)" },
            { label: "Cloudflare DNS", sublabel: "abufete.systems → failover IP", color: "var(--color-accent-amber)" },
            { label: "OVH Dedicated Server", sublabel: "Proxmox VE 9.1 host", color: "var(--color-accent-teal)" },
            { label: "LXC Container", sublabel: "Ubuntu 24.04 (unprivileged)", color: "var(--color-accent-blue)" },
            { label: "Nginx", sublabel: "SSL termination + reverse proxy", color: "var(--color-accent-amber)" },
            { label: "Node.js + Next.js", sublabel: "Application renders response", color: "var(--color-accent-purple)" },
            { label: "Response", sublabel: "HTML/CSS/JS → You", color: "var(--color-text-muted)" },
          ].map((step, i, arr) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="h-3 w-3 rounded-full border-2 flex-shrink-0"
                  style={{ borderColor: step.color }}
                />
                {i < arr.length - 1 && (
                  <div className="h-8 w-px bg-[var(--color-border-subtle)]" />
                )}
              </div>
              <div className="pb-5">
                <span className="text-sm font-medium" style={{ color: step.color }}>
                  {step.label}
                </span>
                <span className="ml-2 font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)]">
                  {step.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack layers */}
      <div className="flex flex-col gap-3">
        {stackLayers.map((layer) => {
          const isOpen = expanded === layer.id;
          return (
            <div
              key={layer.id}
              className="rounded-xl border bg-[var(--color-bg-card)] overflow-hidden transition-all cursor-pointer"
              style={{ borderColor: isOpen ? layer.colorBorder : "var(--color-border-subtle)" }}
              onClick={() => setExpanded(isOpen ? null : layer.id)}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: layer.colorBg }}
                  >
                    <div
                      className="h-3 w-3 rounded-sm border-2"
                      style={{ borderColor: layer.color }}
                    />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: layer.color }}>
                    {layer.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)] sm:inline">
                    $ {layer.command}
                  </span>
                  <span
                    className="text-xs transition-transform"
                    style={{
                      color: layer.color,
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>

              {isOpen && (
                <div className="border-t px-4 pb-4 pt-3" style={{ borderColor: layer.colorBorder }}>
                  <div className="flex flex-col gap-2">
                    {layer.items.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between rounded-md bg-white/[0.02] px-3 py-2"
                      >
                        <span className="text-xs text-[var(--color-text-body)]">
                          {item.key}
                        </span>
                        <span
                          className="font-[var(--font-mono)] text-[11px]"
                          style={{ color: layer.color }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="mt-8 rounded-xl bg-[var(--color-bg-card)] p-5" style={{ borderLeft: "3px solid var(--color-accent-teal)" }}>
        <p className="text-xs leading-relaxed text-[var(--color-text-body)]">
          Total third-party dependencies for hosting: zero. The only external services
          are Resend for transactional email delivery (because reliable email
          deliverability is genuinely not worth self-hosting) and Calendly for
          scheduling (being replaced with self-hosted Cal.com). Everything else runs
          on hardware I manage.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 flex gap-3">
        <a
          href="/contact"
          className="rounded-lg bg-[var(--color-accent-teal)] px-6 py-2.5 text-sm font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="/resume"
          className="rounded-lg border border-white/15 px-6 py-2.5 text-sm text-[var(--color-text-heading)] transition-colors hover:border-white/30"
        >
          View resume
        </a>
      </div>
    </section>
  );
}
