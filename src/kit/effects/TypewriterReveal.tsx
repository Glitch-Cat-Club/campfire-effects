"use client";

import { useState, useEffect } from "react";
import { GOLD } from "../tokens";
import { Cursor } from "../chrome/Cursor";

export function TypewriterReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let c = 0;
    const interval = window.setInterval(() => {
      c++;
      setCount(c);
      if (c >= text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;
  return (
    <>
      {text.slice(0, count)}
      {count < text.length && <Cursor color={GOLD} />}
    </>
  );
}
