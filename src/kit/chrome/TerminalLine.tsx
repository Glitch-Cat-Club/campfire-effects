"use client";

export function TerminalLine({
  lineNum,
  children,
  marginTop,
}: {
  lineNum: number;
  children: React.ReactNode;
  marginTop?: number;
}) {
  return (
    <div
      className="tl-row"
      style={{ display: "flex", gap: 12, marginTop: marginTop ?? 0 }}
    >
      <span
        style={{
          color: "#333",
          minWidth: 18,
          textAlign: "right",
          userSelect: "none",
        }}
      >
        {lineNum}
      </span>
      {children}
    </div>
  );
}
