import { SHAPE_TYPES, HOME_GLYPHS, GRAFFITI_GLYPHS } from "../glyphs";
import type { ShapeType } from "../types";
import { getCampfirePoint } from "./formations";

export class AnimNode {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  id: number;
  total: number;
  phase: number;
  speed: number;
  radius: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  type: ShapeType;
  heat: number;
  rippleVx: number;
  rippleVy: number;
  spinBoost: number;
  /* Glyph scramble state */
  glyph: string | null;
  homeGlyph: string | null;
  glyphNextAt: number;
  glyphEndAt: number;
  glyphLastSwap: number;
  glyphSwapInterval: number;
  glyphCooldownUntil: number;
  /* Multiplies the gather formations (cluster/ring/campfire) — set per-frame by update() */
  formationScale: number = 1;

  constructor(x: number, y: number, id: number, total: number) {
    this.homeX = x;
    this.homeY = y;
    this.x = x;
    this.y = y;
    this.id = id;
    this.total = total;
    this.phase = Math.random() * Math.PI * 2;
    this.speed = 0.3 + Math.random() * 0.4;
    this.radius = 1.5 + Math.random() * 1.5;
    this.size = 5 + Math.random() * 3;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.001;
    this.type = SHAPE_TYPES[id % SHAPE_TYPES.length];
    this.heat = 0;
    this.rippleVx = 0;
    this.rippleVy = 0;
    this.spinBoost = 0;
    this.glyph = null;
    this.homeGlyph = Math.random() < 0.4
      ? HOME_GLYPHS[Math.floor(Math.random() * HOME_GLYPHS.length)]
      : null;
    this.glyphNextAt = Date.now() + 2000 + Math.random() * 6000;
    this.glyphEndAt = 0;
    this.glyphLastSwap = 0;
    this.glyphSwapInterval = 40;
    this.glyphCooldownUntil = 0;
  }

  update(
    scroll: number,
    w: number,
    h: number,
    mouseX: number,
    mouseY: number,
    mouseActive: boolean,
    cx: number = w / 2,
    cy: number = h / 2,
    formationScale: number = 1
  ) {
    this.formationScale = formationScale;
    const t = Date.now() * 0.001;

    this.rotation +=
      this.rotSpeed + Math.sin(t * this.speed + this.phase) * 0.003;

    if (scroll < 0.25) {
      this.updateScatteredPhase(t, scroll);
    } else if (scroll < 0.5) {
      this.updateClusterPhase(t, scroll, cx, cy, w, h);
    } else if (scroll < 0.75) {
      this.updateRingPhase(t, scroll, cx, cy, w, h);
    } else {
      this.updateCampfirePhase(t, scroll, cx, cy, w, h);
    }

    this.heat *= 0.93;
    this.spinBoost *= 0.95;
    this.rippleVx *= 0.92;
    this.rippleVy *= 0.92;

    if (mouseActive) {
      this.applyMouseForce(mouseX, mouseY, scroll, w);
    }

    this.x += Math.sin(t * 0.01 + this.phase) * this.rippleVx;
    this.y += Math.cos(t * 0.01 + this.phase) * this.rippleVy;
    this.rotation += this.spinBoost * (this.id % 2 === 0 ? 1 : -1);

    this.applyPhantomForce(t, w, h);

    /* Glyph scramble — rapid cycling when triggered by wave */
    const now = Date.now();
    if (this.glyph) {
      if (now - this.glyphLastSwap > this.glyphSwapInterval) {
        this.glyph =
          GRAFFITI_GLYPHS[Math.floor(Math.random() * GRAFFITI_GLYPHS.length)];
        this.glyphLastSwap = now;
        const remaining = this.glyphEndAt - now;
        if (remaining < 150) this.glyphSwapInterval = 80;
        else if (remaining < 300) this.glyphSwapInterval = 55;
      }
      if (now > this.glyphEndAt) {
        this.glyph = null;
        this.glyphSwapInterval = 40;
        this.glyphCooldownUntil = now + 800;
      }
    }
    /* Clear glyphs when fully settled */
    if (scroll >= 0.9 && this.glyph) {
      this.glyph = null;
    }
  }

  triggerScramble(duration: number) {
    if (this.glyph) return;
    if (Date.now() < this.glyphCooldownUntil) return;
    const now = Date.now();
    this.glyph =
      GRAFFITI_GLYPHS[Math.floor(Math.random() * GRAFFITI_GLYPHS.length)];
    this.glyphLastSwap = now;
    this.glyphSwapInterval = 40;
    this.glyphEndAt = now + duration;
  }

  private updateScatteredPhase(t: number, scroll: number) {
    const drift = Math.max(0.2, scroll * 3);
    const wanderX =
      Math.sin(t * this.speed + this.phase) * 4 * drift +
      Math.sin(t * 0.4 + this.id * 0.7) * 2 +
      Math.cos(t * 0.15 + this.phase * 2) * 2.5;
    const wanderY =
      Math.cos(t * this.speed * 0.7 + this.phase) * 3.5 * drift +
      Math.cos(t * 0.35 + this.id * 0.5) * 2 +
      Math.sin(t * 0.12 + this.phase * 1.5) * 2.5;
    /* Ease toward home so a re-homed grid glides instead of snapping */
    this.x += (this.homeX + wanderX - this.x) * 0.08;
    this.y += (this.homeY + wanderY - this.y) * 0.08;
  }

  private updateClusterPhase(
    t: number, scroll: number, cx: number, cy: number, w: number, h: number
  ) {
    const progress = (scroll - 0.25) * 4;
    const angle = (this.id / this.total) * Math.PI * 2 + t * 0.15;
    const rawDim = Math.min(w, h);
    const isMobile = w < 640;
    const dim = rawDim < 500 ? rawDim * 1.6 : rawDim;
    const clusterRadius =
      (isMobile
        ? dim * 0.16 - progress * dim * 0.02
        : dim * 0.11 - progress * dim * 0.02) * this.formationScale;
    const mobileYOffset = isMobile ? h * 0.06 : 0;
    const targetX =
      cx +
      Math.cos(angle) * clusterRadius +
      Math.sin(t * this.speed + this.phase) * 8 * (1 - progress);
    const targetY =
      cy + mobileYOffset +
      Math.sin(angle) * clusterRadius +
      Math.cos(t * this.speed + this.phase) * 8 * (1 - progress);
    this.x += (targetX - this.x) * 0.06;
    this.y += (targetY - this.y) * 0.06;
  }

  private updateRingPhase(
    t: number, scroll: number, cx: number, cy: number, w: number, h: number
  ) {
    const progress = (scroll - 0.5) * 4;
    const angle = (this.id / this.total) * Math.PI * 2 + t * 0.2;
    const rawDim = Math.min(w, h);
    const isMobile = w < 640;
    const dim = rawDim < 500 ? rawDim * 1.6 : rawDim;
    const ringRadius =
      (isMobile
        ? dim * 0.11 - progress * dim * 0.025
        : dim * 0.07 - progress * dim * 0.025) * this.formationScale;
    const mobileYOffset = isMobile ? h * 0.06 : 0;
    const targetX = cx + Math.cos(angle + progress * 0.5) * ringRadius;
    const targetY = cy + mobileYOffset + Math.sin(angle + progress * 0.5) * ringRadius;
    this.x += (targetX - this.x) * 0.08;
    this.y += (targetY - this.y) * 0.08;
  }

  private updateCampfirePhase(
    t: number, scroll: number, cx: number, cy: number, w: number, h: number
  ) {
    const progress = Math.min(1, (scroll - 0.75) * 4);
    const rawDim = Math.min(w, h);
    const isMobile = w < 640;
    const s =
      ((rawDim < 500 ? rawDim * (isMobile ? 2.2 : 1.6) : rawDim) / 600) *
      this.formationScale;
    const campfire = getCampfirePoint(this.id, this.total, cx, cy + h * 0.12, s);
    const breathe =
      Math.sin(t * 2 + this.phase) * (1.5 - progress * 1.2) * s;
    this.x += (campfire.x + breathe - this.x) * (0.04 + progress * 0.06);
    this.y +=
      (campfire.y + breathe * 0.5 - this.y) * (0.04 + progress * 0.06);
  }

  private applyMouseForce(mouseX: number, mouseY: number, scroll: number, viewportWidth: number) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const earlyBoost = 1 + (1 - Math.min(1, scroll * 2)) * 2;

    const radiusScale = viewportWidth < 640 ? Math.max(0.7, viewportWidth / 1024) : Math.min(1, viewportWidth / 1024);
    const baseRadius = (35 + (1 - Math.min(1, scroll * 2)) * 20) * radiusScale;
    const interactionRadius = Math.max(30, baseRadius);

    if (dist < interactionRadius && dist > 0) {
      const force = (interactionRadius - dist) / interactionRadius;
      const pushX = (dx / dist) * force * 3 * earlyBoost;
      const pushY = (dy / dist) * force * 3 * earlyBoost;
      this.x += pushX;
      this.y += pushY;
      this.rippleVx += pushX * 0.4;
      this.rippleVy += pushY * 0.4;
      this.heat = Math.min(1, this.heat + force * 0.3);
      this.spinBoost = Math.min(0.025, this.spinBoost + force * 0.006);
      if (force > 0.15 && !this.glyph && scroll < 0.9) {
        this.triggerScramble(600 + force * 400);
      }
    }
  }

  private applyPhantomForce(t: number, w: number, h: number) {
    const phantomX =
      w * 0.5 + Math.sin(t * 0.3) * w * 0.3 + Math.cos(t * 0.17) * w * 0.15;
    const phantomY =
      h * 0.5 + Math.cos(t * 0.25) * h * 0.25 + Math.sin(t * 0.13) * h * 0.1;
    const dx = this.x - phantomX;
    const dy = this.y - phantomY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const phantomScale = Math.min(1, w / 1024);
    const phantomRadius = Math.max(25, 60 * phantomScale);

    if (dist < phantomRadius && dist > 0) {
      const force = (phantomRadius - dist) / phantomRadius;
      this.x += (dx / dist) * force * 1.2;
      this.y += (dy / dist) * force * 1.2;
    }
  }
}
