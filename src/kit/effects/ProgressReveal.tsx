"use client";

import { useState, useEffect } from "react";
import { GOLD } from "../tokens";

export function ProgressReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const barLen = 12;

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const run = () => {
      let p = 0;
      interval = window.setInterval(() => {
        p++;
        setProgress(p);
        if (p >= barLen) {
          clearInterval(interval);
          window.setTimeout(() => setShowText(true), 250);
        }
      }, 65);
    };

    if (delay > 0) {
      timeout = window.setTimeout(run, delay);
    } else {
      run();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [delay, barLen]);

  if (showText) return <>{text}</>;
  return (
    <>
      <span style={{ color: GOLD }}>
        {"▓".repeat(progress)}
      </span>
      <span style={{ color: "#222" }}>
        {"░".repeat(Math.max(0, barLen - progress))}
      </span>
    </>
  );
}
