"use client";

import { useScrambleOnce } from "../useScramble";

export function DecodeText({ text, delay = 0, tickMs, framesPerChar }: {
  text: string;
  delay?: number;
  tickMs?: number;
  framesPerChar?: number;
}) {
  const display = useScrambleOnce(text, { delay, tickMs, framesPerChar });
  return <>{display}</>;
}
