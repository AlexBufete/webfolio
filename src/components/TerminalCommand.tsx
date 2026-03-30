export function TerminalCommand({ command }: { command: string }) {
  return (
    <p className="mb-6 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
      $ {command}
    </p>
  );
}
