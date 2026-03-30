export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]/70">
          self-hosted on my proxmox infrastructure
        </span>
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]/50">
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
