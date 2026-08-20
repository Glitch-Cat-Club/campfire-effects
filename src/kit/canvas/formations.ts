/* ─── Campfire Shape Geometry ─── */
export function getCampfirePoint(
  id: number,
  total: number,
  cx: number,
  cy: number,
  s: number = 1
): { x: number; y: number } {
  const norm = id / total;

  /* Flame body — top half of nodes */
  if (norm < 0.5) {
    const fn = norm * 2;
    const angle = -Math.PI / 2 + (fn - 0.5) * 1.2;
    return {
      x: cx + Math.sin(angle * 3) * fn * 28 * 0.6 * s,
      y: cy - 10 * s - fn * 45 * s,
    };
  }

  /* Left log */
  if (norm < 0.75) {
    const ln = (norm - 0.5) * 4;
    return { x: cx - 30 * s + ln * 60 * s, y: cy + 18 * s + ln * 6 * s };
  }

  /* Right log */
  const ln = (norm - 0.75) * 4;
  return { x: cx + 30 * s - ln * 60 * s, y: cy + 22 * s + ln * 4 * s };
}
