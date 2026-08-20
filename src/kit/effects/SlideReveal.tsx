"use client";

import { useState, useEffect } from "react";

export function SlideReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;
  return (
    <span
      style={{
        display: "inline-block",
        animation: "slideInLeft 0.4s ease both",
      }}
    >
      {text}
    </span>
  );
}
