import type { ShapeType } from "../types";

export function drawShape(
  ctx: CanvasRenderingContext2D,
  type: ShapeType,
  x: number,
  y: number,
  size: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();

  const s = size;
  switch (type) {
    case "curly":
      ctx.moveTo(-s * 0.3, -s);
      ctx.quadraticCurveTo(-s * 0.7, -s * 0.5, -s * 0.3, 0);
      ctx.quadraticCurveTo(-s * 0.7, s * 0.5, -s * 0.3, s);
      ctx.moveTo(s * 0.3, -s);
      ctx.quadraticCurveTo(s * 0.7, -s * 0.5, s * 0.3, 0);
      ctx.quadraticCurveTo(s * 0.7, s * 0.5, s * 0.3, s);
      break;
    case "angle":
      ctx.moveTo(-s * 0.1, -s);
      ctx.lineTo(-s * 0.7, 0);
      ctx.lineTo(-s * 0.1, s);
      ctx.moveTo(s * 0.1, -s);
      ctx.lineTo(s * 0.7, 0);
      ctx.lineTo(s * 0.1, s);
      break;
    case "hash":
      ctx.moveTo(-s * 0.5, -s * 0.35);
      ctx.lineTo(s * 0.5, -s * 0.35);
      ctx.moveTo(-s * 0.5, s * 0.35);
      ctx.lineTo(s * 0.5, s * 0.35);
      ctx.moveTo(-s * 0.2, -s * 0.7);
      ctx.lineTo(-s * 0.2, s * 0.7);
      ctx.moveTo(s * 0.2, -s * 0.7);
      ctx.lineTo(s * 0.2, s * 0.7);
      break;
    case "lambda":
      ctx.moveTo(-s * 0.4, -s);
      ctx.lineTo(0, 0);
      ctx.lineTo(s * 0.4, s);
      ctx.moveTo(0, 0);
      ctx.lineTo(-s * 0.4, s);
      break;
    case "node":
      ctx.arc(0, 0, s * 0.35, 0, Math.PI * 2);
      ctx.moveTo(0, -s * 0.35);
      ctx.lineTo(0, -s);
      ctx.moveTo(s * 0.3, s * 0.18);
      ctx.lineTo(s * 0.8, s * 0.5);
      ctx.moveTo(-s * 0.3, s * 0.18);
      ctx.lineTo(-s * 0.8, s * 0.5);
      break;
    case "slash":
      ctx.moveTo(s * 0.35, -s);
      ctx.lineTo(-s * 0.35, s);
      break;
    case "semicolon":
      ctx.arc(0, -s * 0.3, s * 0.15, 0, Math.PI * 2);
      ctx.moveTo(s * 0.1, s * 0.1);
      ctx.quadraticCurveTo(0, s * 0.5, -s * 0.15, s * 0.8);
      break;
  }

  ctx.stroke();
  ctx.restore();
}
