"use client";

import { useEffect, useRef } from "react";
import { AnimNode } from "./AnimNode";
import { drawShape } from "./drawing";
import { getWaveDelay, spawnWave } from "./waves";
import { NODE_COUNT, GRID_COLS, PARTICLE_CHARS } from "../glyphs";
import { BG } from "../tokens";
import type { Particle, GlyphWave } from "../types";

export type Formation = "scatter" | "cluster" | "ring" | "campfire";

/* Scroll values each formation eases toward — same phase windows AnimNode uses */
const FORMATION_SCROLL: Record<Formation, number> = {
  scatter: 0,
  cluster: 0.3,
  ring: 0.6,
  campfire: 0.85,
};

/**
 * The living glyph grid — 80 code-glyph nodes that drift, cluster, ring up,
 * or form a campfire, with mouse repulsion, heat, cursor-trail particles and
 * glyph-scramble waves. Renders as a full-viewport fixed backdrop.
 *
 * @param formation - Which shape the grid eases toward
 * @param interactive - Mouse/touch repulsion + particles (default true)
 * @param ambientWaves - Periodic scramble waves across the grid (default true)
 * @param waveSignal - Increment this number to fire a wave on demand
 * @param center - Where the grid lives, as viewport fractions (default centre)
 * @param size - Home-grid size as a fraction of the short viewport edge
 * @param formationScale - Multiplies the gather formations (cluster/ring/campfire)
 */
export function GlyphCanvas({
  formation = "scatter",
  interactive = true,
  ambientWaves = true,
  waveSignal = 0,
  center,
  size,
  formationScale = 1,
  style,
}: {
  formation?: Formation;
  interactive?: boolean;
  ambientWaves?: boolean;
  waveSignal?: number;
  center?: { x?: number; y?: number };
  size?: number;
  formationScale?: number;
  style?: React.CSSProperties;
}) {
  const centerX = center?.x ?? 0.5;
  const centerY = center?.y ?? 0.5;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<AnimNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const scrollRef = useRef(FORMATION_SCROLL[formation]);
  const targetScrollRef = useRef(FORMATION_SCROLL[formation]);
  const rafRef = useRef(0);
  const waveRef = useRef<{ wave: GlyphWave | null; triggered: Set<number> }>({
    wave: null,
    triggered: new Set(),
  });
  const layoutRef = useRef({ x: centerX, y: centerY, size, formationScale });
  const resizeFnRef = useRef<(() => void) | null>(null);

  /* ─── Re-home the grid when its centre or size moves ─── */
  useEffect(() => {
    layoutRef.current = { x: centerX, y: centerY, size, formationScale };
    resizeFnRef.current?.();
  }, [centerX, centerY, size, formationScale]);

  /* ─── Formation → scroll target ─── */
  useEffect(() => {
    targetScrollRef.current = FORMATION_SCROLL[formation];
  }, [formation]);

  /* ─── On-demand waves ─── */
  const lastSignal = useRef(waveSignal);
  useEffect(() => {
    if (waveSignal === lastSignal.current) return;
    lastSignal.current = waveSignal;
    waveRef.current = { wave: spawnWave(), triggered: new Set() };
  }, [waveSignal]);

  /* ─── Ambient waves ─── */
  useEffect(() => {
    if (!ambientWaves) return;
    let t: number;
    const loop = () => {
      if (!waveRef.current.wave) {
        waveRef.current = { wave: spawnWave(), triggered: new Set() };
      }
      t = window.setTimeout(loop, 5000 + Math.random() * 5000);
    };
    t = window.setTimeout(loop, 3000 + Math.random() * 4000);
    return () => clearTimeout(t);
  }, [ambientWaves]);

  /* ─── Initialise node grid ─── */
  useEffect(() => {
    const nodes: AnimNode[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = 200 + (i % GRID_COLS) * 50 + (Math.random() - 0.5) * 10;
      const y =
        150 + Math.floor(i / GRID_COLS) * 50 + (Math.random() - 0.5) * 10;
      nodes.push(new AnimNode(x, y, i, NODE_COUNT));
    }
    nodesRef.current = nodes;
  }, []);

  /* ─── Mouse / touch → repulsion + particles ─── */
  useEffect(() => {
    if (!interactive) return;

    const spawnParticles = (x: number, y: number, isTouch: boolean) => {
      const prev = mouseRef.current;
      mouseRef.current = { x, y, active: true };

      const dx = x - prev.x;
      const dy = y - prev.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (isTouch && speed > 2) {
        const verticalRatio = Math.abs(dy) / (Math.abs(dx) + Math.abs(dy));
        if (verticalRatio > 0.7) return;
      }

      if (speed > 3) {
        const count = Math.min(3, Math.floor(speed / 8));
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 3 - dx * 0.08,
            vy: (Math.random() - 0.5) * 3 - dy * 0.08 - Math.random() * 1.5,
            life: 1,
            size: 1.5 + Math.random() * 2,
            char: PARTICLE_CHARS[Math.floor(Math.random() * PARTICLE_CHARS.length)],
          });
        }

        const maxParticles = 80;
        if (particlesRef.current.length > maxParticles) {
          particlesRef.current.splice(0, particlesRef.current.length - maxParticles);
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => spawnParticles(e.clientX, e.clientY, false);
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) spawnParticles(touch.clientX, touch.clientY, true);
    };
    const onEnd = () => {
      mouseRef.current = { ...mouseRef.current, active: false };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseout", onEnd);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseout", onEnd);
      window.removeEventListener("touchend", onEnd);
    };
  }, [interactive]);

  /* ─── Canvas render loop ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cvs = canvas as HTMLCanvasElement;
    const c = ctx as CanvasRenderingContext2D;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const logicalW = window.innerWidth;
      const logicalH = window.innerHeight;
      cvs.width = logicalW * dpr;
      cvs.height = logicalH * dpr;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodes = nodesRef.current;
      const isMobile = logicalW < 640;
      const isNarrow = logicalW < 480;
      const { x: cxf, y: cyf, size: sizeF } = layoutRef.current;
      const gridSize =
        (sizeF ?? (isNarrow ? 0.45 : isMobile ? 0.48 : 0.33)) *
        Math.min(logicalW, logicalH);
      const gridTop =
        logicalH * cyf - gridSize / 2 + (isMobile ? logicalH * 0.06 : 0);
      const gridLeft = logicalW * cxf - gridSize / 2;
      const rows = Math.ceil(nodes.length / GRID_COLS);
      const spacingX = gridSize / (GRID_COLS - 1);
      const spacingY = gridSize / (rows - 1);

      nodes.forEach((n, i) => {
        n.homeX = gridLeft + (i % GRID_COLS) * spacingX;
        n.homeY = gridTop + Math.floor(i / GRID_COLS) * spacingY;
      });
    };

    resize();
    resizeFnRef.current = resize;
    window.addEventListener("resize", resize);

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const w = cvs.width / dpr;
      const h = cvs.height / dpr;

      /* Ease scroll toward the formation target */
      const target = targetScrollRef.current;
      const diff = target - scrollRef.current;
      if (Math.abs(diff) < 0.001) {
        scrollRef.current = target;
      } else {
        scrollRef.current += diff * 0.1;
      }
      const scroll = scrollRef.current;
      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ma = mouseRef.current.active;

      c.fillStyle = BG;
      c.fillRect(0, 0, w, h);

      /* Wave → per-node scramble triggers */
      const wv = waveRef.current;
      if (wv.wave) {
        const now = Date.now();
        const elapsed = now - wv.wave.startTime;
        nodes.forEach((n, i) => {
          if (wv.triggered.has(i)) return;
          const col = i % GRID_COLS;
          const row = Math.floor(i / GRID_COLS);
          const delay = getWaveDelay(wv.wave!, col, row);
          if (delay >= 0 && elapsed >= delay) {
            n.triggerScramble(400 + Math.random() * 300);
            wv.triggered.add(i);
          }
        });
        if (elapsed > wv.wave.duration + 1200) {
          wv.wave = null;
          wv.triggered.clear();
        }
      }

      /* Particles */
      const particles = particlesRef.current;
      const particleFontSize = w < 640 ? 11 : 8;
      c.font = `${particleFontSize}px 'JetBrains Mono', monospace`;
      c.textAlign = "center";
      c.textBaseline = "middle";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.life -= 0.018;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life * 0.7;
        c.fillStyle =
          p.life > 0.5
            ? `rgba(200,168,78,${alpha})`
            : `rgba(255,255,255,${alpha * 0.6})`;
        c.fillText(p.char, p.x, p.y);
      }

      const { x: fcx, y: fcy, formationScale: fs } = layoutRef.current;
      const gridCx = w * fcx;
      const gridCy = h * fcy;

      nodes.forEach((n) =>
        n.update(scroll, w, h, mx, my, ma, gridCx, gridCy, fs)
      );

      /* Connection lines — light up between mouse-heated nodes */
      const maxDist = scroll < 0.5 ? 80 : 80 - scroll * 25;
      const lineT = Date.now() * 0.001;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const bothHot = nodes[i].heat > 0.05 && nodes[j].heat > 0.05;
            if (!bothHot) continue;

            const baseAlpha = (1 - dist / maxDist) * 0.45;
            const hotAlpha = Math.min(nodes[i].heat, nodes[j].heat);

            const phase = (i * 7 + j * 13) * 0.1;
            const breathe = Math.sin(lineT * 0.8 + phase) * 0.3 + 0.7;
            const pulse =
              Math.max(0, Math.sin(lineT * 1.5 + phase * 0.7) - 0.85) * 6.67;

            c.lineWidth = 0.6 + hotAlpha * 0.8 + pulse * 0.4;

            const midX = (nodes[i].x + nodes[j].x) * 0.5;
            const midY = (nodes[i].y + nodes[j].y) * 0.5;
            const perpX = -(nodes[j].y - nodes[i].y) / dist;
            const perpY = (nodes[j].x - nodes[i].x) / dist;
            const bend =
              Math.sin(lineT * 0.6 + phase * 1.3) * 6 +
              Math.sin(lineT * 1.1 + phase * 0.5) * 3;

            const cpx = midX + perpX * bend;
            const cpy = midY + perpY * bend;

            /* Animated gradient — traveling brightness */
            const travelT = ((lineT * 0.5 + phase * 0.3) % 1);
            const dimA = baseAlpha * breathe + hotAlpha * 0.3;
            const brightA = Math.min(1, dimA * 2.5 + hotAlpha * 0.5);
            const grad = c.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            );
            const spread = 0.12;
            grad.addColorStop(0, `rgba(200,168,78,${dimA})`);
            if (travelT - spread > 0)
              grad.addColorStop(travelT - spread, `rgba(200,168,78,${dimA})`);
            grad.addColorStop(Math.min(1, Math.max(0, travelT)), `rgba(200,168,78,${brightA})`);
            if (travelT + spread < 1)
              grad.addColorStop(travelT + spread, `rgba(200,168,78,${dimA})`);
            grad.addColorStop(1, `rgba(200,168,78,${dimA})`);
            c.strokeStyle = grad;

            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.quadraticCurveTo(cpx, cpy, nodes[j].x, nodes[j].y);
            c.stroke();
          }
        }
      }

      /* Shape-to-dot transition */
      const shapeFade = Math.min(1, scroll * 3);
      const rawScale = Math.min(w, h) / 800;
      const nodeScale = rawScale < 0.7 ? rawScale + (0.7 - rawScale) * 0.6 : Math.min(1, rawScale);

      nodes.forEach((n, i) => {
        const isGold = scroll > 0.5 && (i % 4 === 0 || scroll > 0.75);
        const heatGold = n.heat > 0.05;
        const ns = n.size * nodeScale;
        const nr = n.radius * nodeScale;

        if (shapeFade < 1) {
          c.lineWidth = (2.4 + n.heat * 0.8) * nodeScale;
          const sizeBoost = 1 + n.heat * 0.4;

          if (heatGold) {
            c.strokeStyle = `rgba(200,168,78,${(0.7 + n.heat * 0.3) * (1 - shapeFade)})`;
            c.fillStyle = `rgba(200,168,78,${(0.7 + n.heat * 0.3) * (1 - shapeFade)})`;
          } else if (isGold) {
            c.strokeStyle = `rgba(200,168,78,${0.9 * (1 - shapeFade)})`;
            c.fillStyle = `rgba(200,168,78,${0.9 * (1 - shapeFade)})`;
          } else {
            c.strokeStyle = `rgba(255,255,255,${(0.7 + scroll * 0.3) * (1 - shapeFade)})`;
            c.fillStyle = `rgba(255,255,255,${(0.7 + scroll * 0.3) * (1 - shapeFade)})`;
          }

          if (n.glyph) {
            const glyphSize = ns * 1.8 * sizeBoost;
            c.save();
            c.translate(n.x, n.y);
            c.font = `${glyphSize}px "JetBrains Mono", monospace`;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(n.glyph, 0, 0);
            c.restore();
          } else if (n.homeGlyph) {
            const glyphSize = ns * 2.4 * sizeBoost;
            c.save();
            c.translate(n.x, n.y);
            c.fillStyle = heatGold
              ? `rgba(200,168,78,${(0.7 + n.heat * 0.3) * (1 - shapeFade)})`
              : `rgba(255,255,255,${(0.7 + scroll * 0.3) * (1 - shapeFade)})`;
            c.font = `${glyphSize}px "JetBrains Mono", monospace`;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(n.homeGlyph, 0, 0);
            c.restore();
          } else {
            drawShape(
              c,
              n.type,
              n.x,
              n.y,
              ns * (1 - shapeFade * 0.5) * sizeBoost,
              n.rotation
            );
          }
        }

        const dotAlpha = Math.min(1, shapeFade * (0.5 + scroll * 0.5));
        if (dotAlpha > 0.01) {
          if (n.glyph && shapeFade >= 1) {
            const miniSize = scroll < 0.5
              ? ns * 1.4 * (1 + n.heat * 0.4)
              : scroll < 0.75
                ? ns * 1.0 * (1 + n.heat * 0.4)
                : ns * 0.7 * (1 + n.heat * 0.4);
            c.fillStyle =
              isGold || heatGold
                ? `rgba(200,168,78,${Math.min(1, dotAlpha * 1.3 + n.heat * 0.3)})`
                : `rgba(255,255,255,${Math.min(1, dotAlpha * 1.2)})`;
            c.save();
            c.font = `${miniSize}px "JetBrains Mono", monospace`;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(n.glyph, n.x, n.y);
            c.restore();
          } else {
            c.beginPath();
            c.arc(
              n.x,
              n.y,
              nr * (scroll > 0.7 ? 1.3 : 1) * (1 + n.heat * 0.5),
              0,
              Math.PI * 2
            );
            c.fillStyle =
              isGold || heatGold
                ? `rgba(200,168,78,${dotAlpha + n.heat * 0.3})`
                : `rgba(255,255,255,${dotAlpha * 0.8})`;
            c.fill();
          }
        }
      });

      /* Crosshair */
      if (scroll > 0.3 && scroll < 0.85) {
        const crossAlpha =
          scroll < 0.5
            ? (scroll - 0.3) * 5
            : scroll > 0.75
              ? (0.85 - scroll) * 10
              : 1;
        const cx = gridCx;
        const cy = gridCy;
        const crossSize = 20 - scroll * 10;

        c.strokeStyle = `rgba(200,168,78,${crossAlpha * 0.15})`;
        c.lineWidth = 0.5;
        c.beginPath();
        c.moveTo(cx - crossSize, cy);
        c.lineTo(cx + crossSize, cy);
        c.moveTo(cx, cy - crossSize);
        c.lineTo(cx, cy + crossSize);
        c.stroke();
      }

      /* Scan line */
      if (scroll < 0.6) {
        const scanY = (Date.now() * 0.1) % h;
        c.fillStyle = `rgba(200,168,78,${0.02 * (1 - scroll)})`;
        c.fillRect(0, scanY, w, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
