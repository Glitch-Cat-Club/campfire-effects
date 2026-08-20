import { GRID_COLS, GRID_ROWS } from "../glyphs";
import type { GlyphWave, WaveType } from "../types";

export function getWaveDelay(wave: GlyphWave, col: number, row: number): number {
  /* Node outside wave region */
  if (col < wave.minCol || col > wave.maxCol || row < wave.minRow || row > wave.maxRow)
    return -1;
  const cols = wave.maxCol - wave.minCol;
  const rows = wave.maxRow - wave.minRow;
  const lc = col - wave.minCol;
  const lr = row - wave.minRow;
  let progress: number;
  switch (wave.type) {
    case "horizontal":
      progress = cols > 0 ? lc / cols : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    case "vertical":
      progress = rows > 0 ? lr / rows : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    case "diagonal":
      progress = cols + rows > 0 ? (lr + lc) / (rows + cols) : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    case "radial": {
      const dr = row - wave.originRow;
      const dc = col - wave.originCol;
      const dist = Math.sqrt(dr * dr + dc * dc);
      const maxDist = Math.sqrt(rows * rows + cols * cols) || 1;
      progress = Math.min(1, dist / maxDist);
      break;
    }
    case "snake": {
      const localCols = cols + 1;
      const snakeIdx = lr % 2 === 0 ? lr * localCols + lc : lr * localCols + (cols - lc);
      const total = (rows + 1) * localCols - 1;
      progress = total > 0 ? snakeIdx / total : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    }
  }
  return progress * wave.duration;
}

export function spawnWave(): GlyphWave {
  const types: WaveType[] = ["horizontal", "vertical", "diagonal", "radial", "snake"];
  const type = types[Math.floor(Math.random() * types.length)];
  /* Random section of the grid — 3-6 cols, 2-5 rows */
  const spanC = 3 + Math.floor(Math.random() * 4);
  const spanR = 2 + Math.floor(Math.random() * 4);
  const minCol = Math.floor(Math.random() * Math.max(1, GRID_COLS - spanC));
  const minRow = Math.floor(Math.random() * Math.max(1, GRID_ROWS - spanR));
  const maxCol = Math.min(GRID_COLS - 1, minCol + spanC);
  const maxRow = Math.min(GRID_ROWS - 1, minRow + spanR);
  return {
    type,
    startTime: Date.now(),
    duration: 350 + Math.random() * 400,
    direction: Math.random() > 0.5 ? 1 : -1,
    originCol: minCol + Math.floor((maxCol - minCol) / 2),
    originRow: minRow + Math.floor((maxRow - minRow) / 2),
    minCol,
    maxCol,
    minRow,
    maxRow,
  };
}
