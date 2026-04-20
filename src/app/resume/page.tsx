"use client";

import { useState } from "react";
import { TerminalCommand } from "@/components/TerminalCommand";

const summary =
  "Versatile Systems and QA Engineer with a background in IT infrastructure, automation, and system reliability. Experienced in managing Linux and Windows servers, virtualized environments, and enterprise network configurations. Skilled in test automation, hardware validation, and A/V systems integration across broadcast, enterprise, and healthcare environments. Passionate about building efficient, well-documented solutions that bridge software, hardware, and network operations.";

const skills = [
  "Python",
  "C++",
  "Selenium",
  "Bash",
  "Windows Server",
  "Arch Linux",
  "Debian",
  "RHEL",
  "VMware ESXi",
  "Proxmox",
  "MariaDB",
  "PostgreSQL",
  "Nmap",
  "SSH",
  "Telnet",
  "RS232",
  "Wireshark",
  "Git",
  "Zephyr Scale",
  "JIRA",
  "Postman",
  "Confluence",
  "NetSuite",
  "Zendesk",
  "Slack",
  "Active Directory",
  "Microsoft Azure",
  "Ubiquiti",
  "Cisco Switches",
  "AVoIP",
  "HDBaseT",
  "HDMI/SDI",
  "Control Systems",
  "PXE",
];

const experience = [
  {
    title: "Owner / IT Systems Engineer",
    company: "Aystra Technologies llc",
    location: "",
    dates: "Jul 2025 — Current",
    bullets: [
      "Rebuilt a failed Windows Server environment for a dental practice, restoring Eaglesoft and full operations from validated backups within 48 hours",
      "Configured and validated backup and recovery processes to support data integrity and rapid system restoration",
      "Managed on-premise IT infrastructure for healthcare offices, including Active Directory, Group Policy, DNS/DHCP, and Ubiquiti UniFi network deployments",
      "Engineered and maintained Proxmox VE (ZFS) environments, running LXC containers and VMs for both production and lab workloads",
      "Deployed full-stack applications and infrastructure (Next.js, Node.js, Nginx, SSL, Cloudflare) with automated system hardening and repeatable provisioning scripts",
      "Designed scalable infrastructure and observability pipelines using Terraform, Ansible, K3s/Kubernetes, Docker, Prometheus, Grafana, and a self-hosted data platform (PostgreSQL, JupyterHub, Superset)",
    ],
  },
  {
    title: "QA Engineer",
    company: "Atlona",
    location: "",
    dates: "Sep 2022 — Jul 2025",
    bullets: [
      "Developed automated test frameworks using Python and Selenium, reducing test cycle time by 17%",
      "Performed functional, regression, and UX testing on NPI hardware and WebGUI systems across Agile and Waterfall environments",
      "Authored and managed test cases, plans, and defect tracking in JIRA / Zephyr Scale, delivering clear, actionable reporting",
      "Partnered with R&D teams to reproduce, document, and resolve software, firmware, and hardware defects",
      "Built and maintained test environments, including firmware deployment, network configuration, and hardware provisioning",
      "Led end-to-end system validation and QA processes (AVoIP, video matrix systems), including calibration, signal verification, and reliability testing",
      "Configured and maintained AVoIP networks, matrix switchers, and control systems for enterprise and broadcast clients.",
      "Implemented firmware updates and performed system imaging and network addressing for field deployment environments",
      "Performed hands-on QC and calibration for HDBaseT, AVoIP, and HDMI switching products",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Blackmagic Design",
    location: "",
    dates: "Nov 2020 — Sep 2022",
    bullets: [
      "Supported enterprise clients (FOX, NFL, Universal Studios) with system integration, network diagnostics, and hardware-level troubleshooting.",
      "Provided advanced support via CLI, remote access (SSH, Telnet), and firmware-level analysis for broadcast and post-production systems.",
      "Diagnosed network and software issues across Windows, macOS, and Linux environments, escalating systemic issues to engineering for patching.",
      "Conducted system imaging, hardware repairs, and system validation testing with standard turnaround compliance.",
      "Provided advanced technical support to enterprise clients (e.g., major broadcasters and studios) across networking, CLI troubleshooting, and broadcast hardware systems",
      "Diagnosed, tested, and repaired professional video equipment in a lab environment, maintaining a 4–8 day turnaround",
      "Delivered phone and email support, guiding customers through complex troubleshooting with clear communication and critical thinking",
      "Collaborated with system integrators to deploy and configure production studios, including networking, security, and access control",
      "Specialized in camera and desktop video hardware, supporting high-impact production environments",
      "Escalated and coordinated critical, production-blocking issues with PMs and engineering teams to drive resolution",
    ],
  },
  {
    title: "Enterprise Support Technician",
    company: "Facebook – Milestone Technologies Contract",
    location: "",
    dates: "Aug 2019 — Nov 2020",
    bullets: [
      "Delivered enterprise IT support in a high-SLA environment, meeting 2-day service targets and 30-minute executive deployment requirements",
      "Performed system imaging, device provisioning, and lifecycle management for laptops and mobile devices, ensuring standardized configurations",
      "Executed onsite deployments and deskside support, including workstation setup, troubleshooting, and rapid incident resolution in live user environments",
      "Maintained asset inventory accuracy through structured data entry and validation within enterprise management systems",
      "Managed user access and device permissions using internal tooling, supporting secure and efficient endpoint operations",
    ],
  },
];

{
  /*const additional =
  "Designed and deployed IT infrastructures for small businesses, including Windows and Linux servers, network topology setup, Active Directory integration, and data backup systems for dental and healthcare environments. Installed and configured professional A/V systems, including networked control hardware, video routing, and small-office server setups. Provided on-site support and training for client installations.";
*/
}
const ACCENT = "var(--color-accent-teal)";
const ACCENT_BG = "var(--color-accent-teal-bg)";
const ACCENT_BORDER = "var(--color-accent-teal-border)";

const earlierSections = [
  {
    id: "construction",
    label: "HVAC & Construction",
    dates: "2016 — 2019",
    accent: "var(--color-accent-amber)",
    accentBg: "var(--color-accent-amber-bg)",
    accentBorder: "var(--color-accent-amber-border)",
    description:
      "(2016-2017) Lion's Heating & Cooling - Digital Systems Programmer, (2017-2019) CHP Construction - Carpenter",
    bullets: [
      "This is where I developed most of my work ethic. Time is money and sometimes there's no replacement for real physical labor.",
      "Sustained a fast-paced environment by staying ahead of tasks and resolving unplanned obstacles in quick succession.",
      "Made decisions related to performance, scheduling, delivery, logistics and quality control.",
      "Performed in all operations of general construction, such as Electrical, HVAC, Mechanical, Carpentry.",
      "Learned and assisted with calibrations, troubleshooting, and installation of digital HVAC systems.",
      "Assisted with general labor such as demolition, installation, and maintenance of ductwork and HVAC components.",
    ],
  },
  {
    id: "first",
    label: "The Home Depot",
    dates: "2016",
    accent: "var(--color-accent-coral)",
    accentBg: "var(--color-accent-coral-bg)",
    accentBorder: "var(--color-accent-coral-border)",
    description: "Electrical Associate",
    bullets: [
      "Maintained the electrical department and assisted customers with questions or concerns.",
      "Learned to operate all machinery and equipment in the Home Depot.",
      "This was the first building block of my professional foundation.",
    ],
  },
];

function EarlierExperience() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const EA = "var(--color-accent-purple)";
  const EA_BG = "var(--color-accent-amber-bg)";
  const EA_BORDER = "var(--color-accent-amber-border)";

  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  return (
    <div className="mb-8">
      <h2
        className="mb-4 text-xs font-medium uppercase tracking-widest"
        style={{ color: EA }}
      >
        Earlier experience
      </h2>
      <p className="mb-4 text-xs text-[var(--color-text-muted)]">
        Before tech — where it started.
      </p>
      <div className="flex flex-col gap-3">
        {earlierSections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className="cursor-pointer overflow-hidden rounded-xl border bg-[var(--color-bg-card)] transition-all"
              style={{
                borderColor: isOpen
                  ? section.accentBorder
                  : "var(--color-border-subtle)",
              }}
              onClick={() => toggle(section.id)}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: section.accentBg }}
                  >
                    <div
                      className="h-3 w-3 rounded-sm border-2"
                      style={{ borderColor: section.accent }}
                    />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: section.accent }}
                  >
                    {section.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                    {section.dates}
                  </span>
                  <span
                    className="text-xs transition-transform"
                    style={{
                      color: section.accent,
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>

              {isOpen && (
                <div
                  className="border-t px-4 pb-4 pt-3"
                  style={{ borderColor: section.accentBorder }}
                >
                  <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-body)]">
                    {section.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {section.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-body)]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ background: section.accent }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <TerminalCommand command="cat resume.md" />

      {/* Header */}
      <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-heading)]">
            Alexander N. Bufete
          </h1>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
            <span>abufete@pm.me</span>
            <span>(510) 993-4306</span>
            <a
              href="https://linkedin.com/in/abufete"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-blue)] hover:underline"
            >
              linkedin.com/in/abufete
            </a>
          </div>
        </div>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 self-start rounded-lg border border-white/15 px-4 py-2 text-sm text-[var(--color-text-heading)] transition-colors hover:border-white/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Summary */}
      <div
        className="mb-8 mt-6 rounded-xl p-5"
        style={{
          background: "var(--color-bg-card)",
          borderLeft: `3px solid ${ACCENT}`,
        }}
      >
        <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
          {summary}
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          style={{ color: ACCENT }}
        >
          Skills
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded px-2.5 py-1 font-[var(--font-mono)] text-[10px]"
              style={{
                background: ACCENT_BG,
                color: ACCENT,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2
          className="mb-6 text-xs font-medium uppercase tracking-widest"
          style={{ color: ACCENT }}
        >
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="rounded-xl border bg-[var(--color-bg-card)] p-5"
              style={{
                borderColor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`,
              }}
            >
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-sm font-semibold text-[var(--color-text-heading)]">
                  {exp.title}
                </h3>
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                  {exp.dates}
                </span>
              </div>
              <p className="mb-3 text-xs" style={{ color: ACCENT }}>
                {exp.company}
              </p>
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-body)]"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: ACCENT }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional experience */}
      {/*      <div className="mb-8">
        <h2
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          style={{ color: ACCENT }}
        >
          Additional Experience
        </h2>
        <p className="text-xs leading-relaxed text-[var(--color-text-body)]">
          {additional}
        </p>
      </div>
*/}
      {/* Earlier experience (expandable, amber) */}
      <EarlierExperience />

      {/* CTA */}
      <div className="flex gap-3 border-t border-[var(--color-border-subtle)] pt-6">
        <a
          href="/contact"
          className="rounded-lg px-6 py-2.5 text-sm font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          Get in touch
        </a>
        <a
          href="/book"
          className="rounded-lg border border-white/15 px-6 py-2.5 text-sm text-[var(--color-text-heading)] transition-colors hover:border-white/30"
        >
          Book a consultation
        </a>
      </div>
    </section>
  );
}
