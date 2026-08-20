import { SHAPE_TYPES } from "./glyphs";

export type ShapeType = (typeof SHAPE_TYPES)[number];

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  char: string;
}

export type WaveType = "horizontal" | "vertical" | "diagonal" | "radial" | "snake";

export interface GlyphWave {
  type: WaveType;
  startTime: number;
  duration: number;
  direction: 1 | -1;
  originCol: number;
  originRow: number;
  minCol: number;
  maxCol: number;
  minRow: number;
  maxRow: number;
}
