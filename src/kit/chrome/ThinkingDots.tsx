"use client";

import { useState, useEffect } from "react";
import { GOLD, GREY } from "../tokens";

export function ThinkingDots() {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d % 3) + 1), 500);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
      <span style={{ color: GOLD }}>{">"}</span>
      <span style={{ color: GREY, fontFamily: "inherit", letterSpacing: 2 }}>
        {".".repeat(dots)}
      </span>
    </div>
  );
}
