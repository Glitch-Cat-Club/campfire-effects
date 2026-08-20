"use client";

import { useState, useEffect } from "react";
import { SCRAMBLE_SETS } from "./glyphs";

/**
 * Shared scramble animation logic.
 * Progressively resolves characters from random glyphs to final text.
 *
 * @param text - Target text to resolve to
 * @param options.delay - Ms before animation starts
 * @param options.framesPerChar - How many frames per character to resolve (default: 2)
 * @param options.tickMs - Ms per animation frame (default: 20)
 */
export function useScrambleOnce(
  text: string,
  options: {
    delay?: number;
    framesPerChar?: number;
    tickMs?: number;
  } = {}
): string {
  const { delay = 0, framesPerChar = 2, tickMs = 20 } = options;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const run = () => {
      let frame = 0;
      const chars =
        SCRAMBLE_SETS[Math.floor(Math.random() * SCRAMBLE_SETS.length)];
      const totalFrames = text.length * framesPerChar;

      interval = window.setInterval(() => {
        frame++;
        const resolved = Math.floor(frame / framesPerChar);

        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < resolved) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, tickMs);
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
  }, [text, delay, framesPerChar, tickMs]);

  return display;
}

/**
 * Runs a scramble animation cycle once, then calls onComplete.
 * Used internally by periodic scramble effects.
 */
export function runScrambleCycle(
  text: string,
  setDisplay: (val: string) => void,
  onComplete: () => void
): number {
  let frame = 0;
  const chars =
    SCRAMBLE_SETS[Math.floor(Math.random() * SCRAMBLE_SETS.length)];
  const framesPerChar = 2 + Math.floor(Math.random() * 2);
  const totalFrames = text.length * framesPerChar;
  const tickMs = 20 + Math.floor(Math.random() * 10);

  const interval = window.setInterval(() => {
    frame++;
    const resolved = Math.floor(frame / framesPerChar);

    setDisplay(
      text
        .split("")
        .map((char, i) => {
          if (char === "_" || char === " ") return char;
          if (i < resolved) return text[i];
          if (Math.random() < 0.5)
            return chars[Math.floor(Math.random() * chars.length)];
          return text[i];
        })
        .join("")
    );

    if (frame >= totalFrames) {
      clearInterval(interval);
      setDisplay(text);
      onComplete();
    }
  }, tickMs);

  return interval;
}
