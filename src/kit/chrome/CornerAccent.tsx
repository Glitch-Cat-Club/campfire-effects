"use client";

import { GOLD } from "../tokens";

export function CornerAccent({
  position,
  color = GOLD,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
}) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: 10,
    height: 10,
  };

  const positionStyles: Record<string, React.CSSProperties> = {
    "top-left": {
      top: -1,
      left: -1,
      borderTop: `2px solid ${color}`,
      borderLeft: `2px solid ${color}`,
    },
    "top-right": {
      top: -1,
      right: -1,
      borderTop: `2px solid ${color}`,
      borderRight: `2px solid ${color}`,
    },
    "bottom-left": {
      bottom: -1,
      left: -1,
      borderBottom: `2px solid ${color}`,
      borderLeft: `2px solid ${color}`,
    },
    "bottom-right": {
      bottom: -1,
      right: -1,
      borderBottom: `2px solid ${color}`,
      borderRight: `2px solid ${color}`,
    },
  };

  return <div style={{ ...base, ...positionStyles[position] }} />;
}
