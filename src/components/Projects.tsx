"use client";
import Image from "next/image";
import { TerminalCommand } from "./TerminalCommand";
import { useLightbox } from "@/components/Lightbox";

interface ProjectImage {
  src: string;
  alt: string;
  placeholder: string; // text shown when no real image exists
}

interface Project {
  number: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
  color: "teal" | "blue" | "purple";
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    number: "01",
    title: "Emergency server recovery",
    status: "48hr SLA",
    description:
      "Dental practice experienced catastrophic server failure during business hours. Recovered critical data, provisioned and configured a replacement server with Windows Server 2019 Essentials, and restored full Eaglesoft operations within 48 hours.",
    tags: ["Windows Server 2019", "Eaglesoft", "Data Recovery"],
    color: "teal",
    images: [
      { src: "/lobby.jpg", alt: "Lobby", placeholder: "lobby" },
      { src: "/server.jpg", alt: "Server", placeholder: "server" },
      {
        src: "/workstation.jpg",
        alt: "Workstation",
        placeholder: "workstation",
      },
      { src: "/room.jpg", alt: "Room", placeholder: "room" },
    ],
  },
  {
    number: "02",
    title: "Proxmox dedicated infrastructure",
    status: "production",
    description:
      "Deployed Proxmox 9 on bare-metal dedicated servers. Architected LXC container strategy with isolated networking, failover IP assignment, and production services. This portfolio runs on this infrastructure.",
    tags: ["Proxmox 9", "LXC", "Nodejs", "Nginx"],
    color: "blue",
    images: [
      { src: "/proxmox.jpg", alt: "Proxmox web UI", placeholder: "proxmox UI" },
      {
        src: "/terminal.jpg",
        alt: "Terminal session",
        placeholder: "terminal session",
      },
      {
        src: "/network.jpg",
        alt: "Network topology",
        placeholder: "network topology",
      },
    ],
  },
  {
    number: "03",
    title: "PXE network imaging pipeline",
    status: "automation",
    description:
      "Built a PXE boot server on Ubuntu 24.04 for automated multi-device imaging via Clonezilla. Configured DHCP options, TFTP boot, and image management for rapid deployment across client hardware.",
    tags: ["Ubuntu 24.04", "Clonezilla", "PXE / TFTP"],
    color: "purple",
    images: [],
  },
];

const colorMap = {
  teal: {
    number: "text-[var(--color-accent-teal)]",
    numberBg: "bg-[var(--color-accent-teal)]/10",
    border: "border-[var(--color-accent-teal)]/12",
    tag: "text-[var(--color-accent-teal)] bg-[var(--color-accent-teal)]/10",
    imgBg: "bg-[var(--color-accent-teal)]",
    imgText: "text-[var(--color-accent-teal)]",
  },
  blue: {
    number: "text-[var(--color-accent-blue)]",
    numberBg: "bg-[var(--color-accent-blue)]/10",
    border: "border-[var(--color-accent-blue)]/12",
    tag: "text-[var(--color-accent-blue)] bg-[var(--color-accent-blue)]/10",
    imgBg: "bg-[var(--color-accent-blue)]",
    imgText: "text-[var(--color-accent-blue)]",
  },
  purple: {
    number: "text-[var(--color-accent-purple)]",
    numberBg: "bg-[var(--color-accent-purple)]/10",
    border: "border-[var(--color-accent-purple)]/12",
    tag: "text-[var(--color-accent-purple)] bg-[var(--color-accent-purple)]/10",
    imgBg: "bg-[var(--color-accent-purple)]",
    imgText: "text-[var(--color-accent-purple)]",
  },
};

export function Projects() {
  const { open } = useLightbox();
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-12">
      <TerminalCommand command="ls -la projects/" />
      <div className="flex flex-col gap-6">
        {projects.map((p) => {
          const c = colorMap[p.color];
          return (
            <article
              key={p.number}
              className={`overflow-hidden rounded-xl border bg-[var(--color-bg-card)] ${c.border}`}
            >
              {/* Image gallery */}
              <div className="flex gap-[3px] overflow-hidden">
                {p.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative flex h-36 flex-1 flex-col items-center justify-center sm:h-44"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(--color-accent-${p.color}) ${8 - i * 2}%, transparent)`,
                    }}
                  >
                    {img.src ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover cursor-pointer"
                        onClick={() => open(img.src, img.alt)}
                      />
                    ) : (
                      <>
                        <div
                          className="mb-2 h-6 w-8 rounded border-2 opacity-25"
                          style={{
                            borderColor: `var(--color-accent-${p.color})`,
                          }}
                        />
                        <span
                          className="font-[var(--font-mono)] text-[9px] opacity-40"
                          style={{
                            color: `var(--color-accent-${p.color})`,
                          }}
                        >
                          {img.placeholder}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span
                    className={`rounded px-2 py-0.5 font-[var(--font-mono)] text-xs ${c.number} ${c.numberBg}`}
                  >
                    {p.number}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-text-heading)]">
                    {p.title}
                  </h3>
                  <span className="ml-auto font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                    {p.status}
                  </span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-body)]">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded px-2 py-0.5 text-[10px] ${c.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
