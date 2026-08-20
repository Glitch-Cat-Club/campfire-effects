"use client";

import { useState, useEffect } from "react";
import { GOLD } from "../tokens";

export function PacManReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [pos, setPos] = useState(-1);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let p = -1;
    const interval = window.setInterval(() => {
      p++;
      setPos(p);
      if (p >= text.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;
  if (pos >= text.length) return <>{text}</>;
  return (
    <>
      <span>{text.slice(0, Math.max(0, pos))}</span>
      <span style={{ color: GOLD }}>&#9658;</span>
      <span style={{ color: "#222" }}>
        {"·".repeat(Math.max(0, text.length - pos - 1))}
      </span>
    </>
  );
}
