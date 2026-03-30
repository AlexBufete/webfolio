import { TerminalCommand } from "./TerminalCommand";

const services = [
  {
    title: "Server infrastructure",
    description:
      "Bare-metal server provisioning, OS installation, hardware RAID configuration, and production deployment. Windows Server and Linux environments built from the ground up.",
    tags: ["Windows Server 2019/2022", "Ubuntu Server", "RHEL"],
    color: "teal" as const,
  },
  {
    title: "Network engineering",
    description:
      "Complete network builds including managed switching, VLAN segmentation, inter-VLAN routing, firewall configuration, and documentation. Cisco and Ubiquiti environments.",
    tags: ["Cisco IOS", "Ubiquiti", "VLANs"],
    color: "blue" as const,
  },
  {
    title: "Active Directory & GPO",
    description:
      "Domain controller deployment, OU structure, user/group management, Group Policy configuration, and Windows domain environments for small-to-mid businesses.",
    tags: ["AD DS", "GPO", "DNS/DHCP"],
    color: "purple" as const,
  },
  {
    title: "Virtualization",
    description:
      "Hypervisor deployment and management, VM provisioning, LXC containers, resource allocation, backup strategies, and migration planning across Proxmox and VMware.",
    tags: ["Proxmox 8", "VMware ESXi", "LXC"],
    color: "amber" as const,
  },
];

const colorMap = {
  teal: {
    border: "border-[var(--color-accent-teal-border)]",
    title: "text-[var(--color-accent-teal)]",
    iconBg: "bg-[var(--color-accent-teal-bg)]",
    iconBorder: "border-[var(--color-accent-teal)]",
  },
  blue: {
    border: "border-[var(--color-accent-blue-border)]",
    title: "text-[var(--color-accent-blue)]",
    iconBg: "bg-[var(--color-accent-blue-bg)]",
    iconBorder: "border-[var(--color-accent-blue)]",
  },
  purple: {
    border: "border-[var(--color-accent-purple-border)]",
    title: "text-[var(--color-accent-purple)]",
    iconBg: "bg-[var(--color-accent-purple-bg)]",
    iconBorder: "border-[var(--color-accent-purple)]",
  },
  amber: {
    border: "border-[var(--color-accent-amber-border)]",
    title: "text-[var(--color-accent-amber)]",
    iconBg: "bg-[var(--color-accent-amber-bg)]",
    iconBorder: "border-[var(--color-accent-amber)]",
  },
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-12">
      <TerminalCommand command="cat /etc/services.conf" />
      <div className="grid gap-3 sm:grid-cols-2">
        {services.map((s) => {
          const c = colorMap[s.color];
          return (
            <div
              key={s.title}
              className={`rounded-xl border bg-[var(--color-bg-card)] p-5 transition-colors hover:bg-white/[0.05] ${c.border}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-md ${c.iconBg}`}
                >
                  <div className={`h-3 w-3 rounded-sm border-2 ${c.iconBorder}`} />
                </div>
                <h3 className={`text-sm font-semibold ${c.title}`}>{s.title}</h3>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-body)]">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-white/5 px-2 py-0.5 font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
