"use client";

import { useState, useEffect } from "react";

const GLITCH_CHARS = "▓░▒█!<>{}[]01#$@&*";

export function GlitchReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const run = () => {
      let frame = 0;
      interval = window.setInterval(() => {
        frame++;
        if (frame < 6) {
          setDisplay(
            text
              .split("")
              .map((c) =>
                c === " "
                  ? " "
                  : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              )
              .join("")
          );
        } else if (frame < 12) {
          const resolveChance = (frame - 6) / 6;
          setDisplay(
            text
              .split("")
              .map((c, i) =>
                c === " "
                  ? " "
                  : Math.random() < resolveChance
                    ? text[i]
                    : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              )
              .join("")
          );
        } else {
          clearInterval(interval);
          setDisplay(text);
          setDone(true);
        }
      }, 30);
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
  }, [text, delay]);

  if (done) return <>{text}</>;
  return <>{display}</>;
}
