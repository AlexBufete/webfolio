"use client";

import { useState } from "react";
import { TerminalCommand } from "@/components/TerminalCommand";

const roles = [
  { id: "syseng", label: "Systems Engineer", file: "/resume_syseng.pdf" },
  { id: "qa", label: "QA Engineer", file: "/resume_qa.pdf" },
  { id: "av", label: "A/V & IT Support", file: "/resume_av.pdf" },
] as const;

type RoleId = (typeof roles)[number]["id"];

interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

interface RoleData {
  summary: string;
  skills: string[];
  experience: Experience[];
  additional: string;
}

const data: Record<RoleId, RoleData> = {
  syseng: {
    summary:
      "Versatile Systems Engineer with a background in IT infrastructure, automation, and system reliability. Experienced in managing Linux and Windows servers, virtualized environments, and enterprise network configurations. Adept at diagnosing and optimizing systems for performance, scalability, and security. Passionate about building efficient, automated solutions that bridge software, hardware, and network operations.",
    skills: [
      "Python",
      "C++",
      "Selenium",
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
      "Confluence",
      "Box",
      "NetSuite",
      "Zendesk",
      "Slack",
      "Office Suites",
      "Active Directory",
      "Microsoft Azure",
      "Ubiquiti",
    ],
    experience: [
      {
        title: "Systems Engineer / QA Automation Engineer",
        company: "Atlona",
        location: "San Jose, CA",
        dates: "Jan 2023 — Jul 2025",
        bullets: [
          "Designed, deployed, and maintained test and production server environments running on Linux and Windows Server using VMware ESXi and Proxmox VE.",
          "Automated system validation and device communication workflows using Python, Selenium, and REST APIs, improving system reliability and testing efficiency by 17%.",
          "Integrated systems into Active Directory and managed user access permissions through Azure AD and Group Policy.",
          "Performed network configuration, monitoring, and troubleshooting using Wireshark, Nmap, and SSH across AVoIP devices and internal lab systems.",
          "Collaborated with R&D and IT teams to deploy and secure internal services, including web servers, databases (MariaDB, PostgreSQL), and file management systems.",
          "Managed configuration baselines, documentation, and version control via Git, JIRA, and Confluence.",
        ],
      },
      {
        title: "A/V Systems & Quality Engineer",
        company: "Atlona",
        location: "San Jose, CA",
        dates: "Sep 2022 — Jan 2023",
        bullets: [
          "Configured and maintained enterprise-grade A/V and control systems, ensuring reliable operation of video matrix switchers, AVoIP networks, and control processors.",
          "Implemented firmware updates and performed system imaging and network addressing for QA and field deployment environments.",
          "Worked with cross-functional IT teams to align QA system requirements with network and server infrastructure.",
          "Contributed to the development of standardized processes and deployment procedures for lab and field systems.",
        ],
      },
      {
        title: "Technical Support Engineer",
        company: "Blackmagic Design",
        location: "Fremont, CA",
        dates: "Nov 2020 — Sep 2022",
        bullets: [
          "Supported enterprise clients (FOX, NFL, Universal Studios) with system integration, network diagnostics, and hardware-level troubleshooting.",
          "Provided advanced support via CLI, remote access (SSH, Telnet), and firmware-level analysis for broadcast and post-production systems.",
          "Diagnosed network and software issues across Windows, macOS, and Linux environments, escalating systemic issues to engineering for patching.",
          "Conducted system imaging, hardware repairs, and system validation testing with standard turnaround compliance.",
        ],
      },
    ],
    additional:
      "Designed and deployed IT infrastructures for small businesses, including Windows and Linux servers, network topology setup, Active Directory integration, and data backup systems for dental and office environments.",
  },

  qa: {
    summary:
      "Detail-driven QA Engineer experienced in software and hardware validation across A/V, networking, and embedded systems. Skilled in test automation, regression analysis, and root-cause diagnostics. Adept at bridging cross-functional communication between development, QA, and operations to deliver stable, high-quality products.",
    skills: [
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
      "PXE",
    ],
    experience: [
      {
        title: "QA Engineer",
        company: "Atlona",
        location: "San Jose, CA",
        dates: "Jan 2023 — Jul 2025",
        bullets: [
          "Designed and implemented automated testing using Python and Selenium, improving test cycle time by 17%.",
          "Conducted functional, regression, and UX testing across NPI hardware and WebGUI interfaces under both Agile and Waterfall methodologies.",
          "Authored and maintained test cases, test plans, and defect reports in JIRA / Zephyr Scale, providing actionable insight to stakeholders.",
          "Collaborated with R&D to reproduce, document, and track software and hardware defects through resolution.",
          "Supported test environment setup, including firmware deployment, network configuration, and hardware provisioning.",
          "Led QA reviews for usability and system stability, driving product improvement and user satisfaction.",
        ],
      },
      {
        title: "A/V Quality Engineer",
        company: "Atlona",
        location: "San Jose, CA",
        dates: "Sep 2022 — Jan 2023",
        bullets: [
          "Executed end-to-end validation of video matrix switchers, AVoIP, and control systems, ensuring compliance with design specifications.",
          "Performed product calibration, signal verification, and burn-in testing for reliability.",
          "Contributed to establishing department QA procedures and documentation standards.",
          "Collaborated with firmware and hardware engineers to resolve system-level interoperability issues.",
          "Proactively identified and proposed solutions to improve product quality, services, and processes.",
        ],
      },
      {
        title: "Technical Support Engineer",
        company: "Blackmagic Design",
        location: "Fremont, CA",
        dates: "Nov 2020 — Sep 2022",
        bullets: [
          "Supported enterprise clients (FOX, NFL, Universal Studios) with system integration, network diagnostics, and hardware-level troubleshooting.",
          "Provided advanced support via CLI, remote access (SSH, Telnet), and firmware-level analysis for broadcast and post-production systems.",
          "Diagnosed network and software issues across Windows, macOS, and Linux environments, escalating systemic issues to engineering for patching.",
          "Conducted system imaging, hardware repairs, and system validation testing with standard turnaround compliance.",
        ],
      },
    ],
    additional:
      "Designed and deployed IT infrastructures for small businesses, including Windows & Linux servers, network topology setup, Active Directory integration, and data backup systems for healthcare environments.",
  },

  av: {
    summary:
      "Experienced A/V Systems Engineer skilled in configuration, testing, and technical support of professional-grade audiovisual and control systems. Proven ability to integrate hardware, software, and networking solutions across live production, broadcast, and enterprise environments. Known for problem-solving, clear communication, and ensuring consistent performance under demanding conditions.",
    skills: [
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
      "NetSuite",
      "Zendesk",
      "Slack",
      "AVoIP",
      "HDBaseT",
      "HDMI/SDI",
      "Control Systems",
      "Signal Flow Analysis",
      "Ubiquiti",
      "Cisco Switches",
    ],
    experience: [
      {
        title: "A/V QA Engineer",
        company: "Atlona",
        location: "San Jose, CA",
        dates: "Jan 2023 — Jul 2025",
        bullets: [
          "Configured and maintained AVoIP networks, matrix switchers, and control systems for enterprise and broadcast clients.",
          "Conducted signal flow validation, latency analysis, and interoperability testing across IP-based systems.",
          "Supported firmware deployment and hardware imaging, ensuring proper device configuration and field readiness.",
          "Managed test environments simulating conference, broadcast, and residential installations to validate real-world reliability.",
          "Collaborated with software engineers to refine WebGUI and control interface usability.",
          "Led QA reviews for usability and system stability, driving product improvement and user satisfaction.",
        ],
      },
      {
        title: "A/V Systems Quality Engineer",
        company: "Atlona",
        location: "San Jose, CA",
        dates: "Sep 2022 — Jan 2023",
        bullets: [
          "Executed end-to-end validation of video matrix switchers, AVoIP, and control systems, ensuring compliance with design specifications.",
          "Performed hands-on QC and calibration for HDBaseT, AVoIP, and HDMI switching products.",
          "Conducted firmware updates, system burn-ins, and functional verification to validate compliance with design specs.",
          "Collaborated with firmware and hardware engineers to resolve system-level interoperability issues.",
          "Authored reports and feedback for product management and engineering teams to improve A/V reliability.",
        ],
      },
      {
        title: "Technical Support Engineer",
        company: "Blackmagic Design",
        location: "Fremont, CA",
        dates: "Nov 2020 — Sep 2022",
        bullets: [
          "Supported enterprise clients (FOX, NFL, Universal Studios) with system integration, network diagnostics, and hardware-level troubleshooting.",
          "Troubleshot signal routing, control software, and hardware connectivity across Windows, macOS, and Linux platforms.",
          "Conducted lab-level testing and diagnostics on returned units, performing firmware re-flashing, board swaps, and component-level validation.",
          "Delivered client support via phone and email, ensuring accurate resolution and professional service. Providing on-site support if needed.",
        ],
      },
    ],
    additional:
      "Installed and configured professional A/V systems, including networked control hardware, video routing, and small-office server setups. Provided on-site support and training for client installations.",
  },
};

const roleColors: Record<
  RoleId,
  { accent: string; accentBg: string; border: string }
> = {
  syseng: {
    accent: "var(--color-accent-teal)",
    accentBg: "var(--color-accent-teal-bg)",
    border: "var(--color-accent-teal-border)",
  },
  qa: {
    accent: "var(--color-accent-purple)",
    accentBg: "var(--color-accent-purple-bg)",
    border: "var(--color-accent-purple-border)",
  },
  av: {
    accent: "var(--color-accent-blue)",
    accentBg: "var(--color-accent-blue-bg)",
    border: "var(--color-accent-blue-border)",
  },
};

export default function ResumePage() {
  const [activeRole, setActiveRole] = useState<RoleId>("syseng");
  const role = data[activeRole];
  const colors = roleColors[activeRole];
  const activeRoleMeta = roles.find((r) => r.id === activeRole)!;

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
          href={activeRoleMeta.file}
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

      {/* Role selector */}
      <div className="mb-8 mt-6 flex gap-2">
        {roles.map((r) => {
          const isActive = r.id === activeRole;
          const c = roleColors[r.id];
          return (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className="rounded-lg px-4 py-2 font-[var(--font-mono)] text-xs transition-all"
              style={{
                background: isActive ? c.accentBg : "rgba(255,255,255,0.03)",
                color: isActive ? c.accent : "var(--color-text-muted)",
                border: isActive
                  ? `1px solid ${c.border}`
                  : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      {/* Summary */}
      <div
        className="mb-8 rounded-xl p-5"
        style={{
          background: "var(--color-bg-card)",
          borderLeft: `3px solid ${colors.accent}`,
        }}
      >
        <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
          {role.summary}
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          style={{ color: colors.accent }}
        >
          Skills
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="rounded px-2.5 py-1 font-[var(--font-mono)] text-[10px]"
              style={{
                background: colors.accentBg,
                color: colors.accent,
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
          style={{ color: colors.accent }}
        >
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {role.experience.map((exp, i) => (
            <div
              key={i}
              className="rounded-xl border bg-[var(--color-bg-card)] p-5"
              style={{
                borderColor: `color-mix(in srgb, ${colors.accent} 12%, transparent)`,
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
              <p className="mb-3 text-xs" style={{ color: colors.accent }}>
                {exp.company} — {exp.location}
              </p>
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-body)]"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: colors.accent }}
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
      <div className="mb-8">
        <h2
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          style={{ color: colors.accent }}
        >
          Additional Experience
        </h2>
        <p className="text-xs leading-relaxed text-[var(--color-text-body)]">
          {role.additional}
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-3 border-t border-[var(--color-border-subtle)] pt-6">
        <a
          href="/contact"
          className="rounded-lg px-6 py-2.5 text-sm font-semibold text-[var(--color-bg-primary)] transition-opacity hover:opacity-90"
          style={{ background: colors.accent }}
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
