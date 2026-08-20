"use client";

import { GOLD_DIM } from "../tokens";
import { ScrambleText } from "../effects/ScrambleText";
import { useWindowWidth } from "../useWindowWidth";

/**
 * The mac-style terminal frame: traffic lights, scrambling shell label,
 * noise-textured body. Sits in normal page flow by default; pass `style`
 * to position it however your layout needs.
 */
export function TerminalWindow({
  children,
  onReplay,
  showReplay,
  goldBorder,
  headerLabel,
  shellLabel = "~ zsh",
  style,
}: {
  children: React.ReactNode;
  onReplay?: () => void;
  showReplay?: boolean;
  goldBorder?: boolean;
  headerLabel?: string;
  shellLabel?: string;
  style?: React.CSSProperties;
}) {
  const isMobile = useWindowWidth() < 520;
  const borderColor = goldBorder ? GOLD_DIM : "#333";
  const borderBottomColor = goldBorder ? "rgba(200,168,78,0.15)" : "#2a2a2a";
  return (
    <div
      style={{
        width: "min(540px, 100%)",
        margin: "0 auto",
        ...style,
      }}
    >
      <div
        style={{
          background: "#161616",
          borderRadius: "8px 8px 0 0",
          padding: "10px 14px",
          height: 34,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          gap: 7,
          borderTop: `1px solid ${borderColor}`,
          borderLeft: `1px solid ${borderColor}`,
          borderRight: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderBottomColor}`,
          pointerEvents: "auto",
          position: "relative",
          zIndex: 10,
          transition: "border-color 0.4s ease",
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        {showReplay && (
          <span
            onClick={(e) => { e.stopPropagation(); onReplay?.(); }}
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.7)",
              marginLeft: 8,
              letterSpacing: 1,
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLSpanElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.target as HTMLSpanElement).style.color = "rgba(255,255,255,0.7)"; }}
            onTouchStart={(e) => { (e.target as HTMLSpanElement).style.color = "#fff"; }}
            onTouchEnd={(e) => { (e.target as HTMLSpanElement).style.color = "rgba(255,255,255,0.7)"; }}
          >
            {headerLabel ?? (isMobile ? "tap to replay" : "click to replay")}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#555",
            marginLeft: "auto",
            letterSpacing: 1,
          }}
        >
          <ScrambleText
            key={shellLabel}
            text={shellLabel}
            intervalMin={8000}
            intervalMax={15000}
            initialDelay={6000}
          />
        </span>
      </div>
      <div
        style={{
          background: `rgba(10,10,10,0.92) url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          borderRadius: "0 0 8px 8px",
          padding: "clamp(10px, 2vw, 14px) clamp(10px, 2vw, 16px)",
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "clamp(12.5px, 1.5vw, 15px)",
          lineHeight: 1.9,
          borderLeft: `1px solid ${borderColor}`,
          borderRight: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
          minHeight: 80,
          transition: "border-color 0.4s ease",
          overflowWrap: "break-word",
        }}
      >
        {children}
      </div>
    </div>
  );
}
