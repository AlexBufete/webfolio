import { TerminalCommand } from "./TerminalCommand";

const tools = [
  { name: "Windows Server", detail: "2016 / 2019 / 2022", highlight: true },
  { name: "Linux", detail: "Ubuntu / Arch / RHEL", highlight: true },
  { name: "Networking", detail: "Cisco IOS / Ubiquiti", highlight: true },
  { name: "Virtualization", detail: "Proxmox / VMware ESXi", highlight: true },
  /*{ name: "Certifications", detail: "CCNA, RHCSA, ISTQB", highlight: true },*/
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-12">
      <TerminalCommand command="cat about.md" />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-[var(--color-text-heading)]">
            About
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-body)]">
            Infrastructure engineer with hands-on experience across the full
            stack — from racking hardware to configuring production
            environments. I specialize in building server infrastructure from
            scratch for businesses that need reliable, well-documented systems
            they can depend on.
          </p>
          <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
            Every system I build is designed to be maintainable, documented, and
            production-ready.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            Toolbox
          </h3>
          <div className="flex flex-col gap-2">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between rounded-md bg-[var(--color-bg-card)] px-3 py-2"
              >
                <span className="text-xs text-[var(--color-text-heading)]/80">
                  {t.name}
                </span>
                <span
                  className={`font-[var(--font-mono)] text-[10px] ${
                    t.highlight
                      ? "text-[var(--color-accent-teal)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {t.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
