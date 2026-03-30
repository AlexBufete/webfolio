export function SectionDivider({ color = "teal" }: { color?: "teal" | "blue" | "purple" | "amber" }) {
  const colors = {
    teal: "rgba(93, 202, 165, 0.3)",
    blue: "rgba(133, 183, 235, 0.3)",
    purple: "rgba(175, 169, 236, 0.3)",
    amber: "rgba(250, 199, 117, 0.3)",
  };

  return (
    <div
      className="h-px"
      style={{
        background: `linear-gradient(90deg, transparent, ${colors[color]}, transparent)`,
      }}
    />
  );
}
