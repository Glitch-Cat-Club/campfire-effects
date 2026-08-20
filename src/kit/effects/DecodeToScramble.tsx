"use client";

import { useState, useEffect } from "react";
import { useScrambleOnce, runScrambleCycle } from "../useScramble";

export function DecodeToScramble({
  text,
  delay = 0,
  tickMs,
  framesPerChar,
  scrambleIntervalMin = 3000,
  scrambleIntervalMax = 7000,
}: {
  text: string;
  delay?: number;
  tickMs?: number;
  framesPerChar?: number;
  scrambleIntervalMin?: number;
  scrambleIntervalMax?: number;
}) {
  const decoded = useScrambleOnce(text, { delay, tickMs, framesPerChar });
  const isDecoded = decoded === text;

  const [display, setDisplay] = useState("");

  /* Phase 2: intermittent scramble flicker after decode completes */
  useEffect(() => {
    if (!isDecoded) return;
    let timeout: number;
    let interval: number;

    const runScramble = () => {
      interval = runScrambleCycle(text, setDisplay, () => {
        const range = scrambleIntervalMax - scrambleIntervalMin;
        timeout = window.setTimeout(
          runScramble,
          scrambleIntervalMin + Math.random() * range
        );
      });
    };

    const range = scrambleIntervalMax - scrambleIntervalMin;
    timeout = window.setTimeout(
      runScramble,
      2000 + Math.random() * range
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isDecoded, text, scrambleIntervalMin, scrambleIntervalMax]);

  if (!isDecoded) return <>{decoded}</>;
  return <>{display || text}</>;
}
