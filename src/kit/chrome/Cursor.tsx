"use client";

export function Cursor({ color = "#fff" }: { color?: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: "1.1em",
        background: color,
        marginLeft: 1,
        verticalAlign: "text-bottom",
        animation: "blink 0.8s step-end infinite",
      }}
    />
  );
}
