"use client";

import { useState, useEffect } from "react";
import { runScrambleCycle } from "../useScramble";

export function ScrambleText({
  text,
  intervalMin = 3000,
  intervalMax = 7000,
  initialDelay = 3000,
}: {
  text: string;
  intervalMin?: number;
  intervalMax?: number;
  initialDelay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const runScramble = () => {
      interval = runScrambleCycle(text, setDisplay, () => {
        const range = intervalMax - intervalMin;
        timeout = window.setTimeout(
          runScramble,
          intervalMin + Math.random() * range
        );
      });
    };

    timeout = window.setTimeout(runScramble, initialDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, intervalMin, intervalMax, initialDelay]);

  return <>{display}</>;
}
