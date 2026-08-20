/* The real kit files, imported as text at build time (Vite ?raw) —
   the code shown on the page can never drift from the code in the repo. */

import GlitchRevealSrc from "../kit/effects/GlitchReveal.tsx?raw";
import DecodeTextSrc from "../kit/effects/DecodeText.tsx?raw";
import DecodeToScrambleSrc from "../kit/effects/DecodeToScramble.tsx?raw";
import ScrambleTextSrc from "../kit/effects/ScrambleText.tsx?raw";
import TypewriterRevealSrc from "../kit/effects/TypewriterReveal.tsx?raw";
import PacManRevealSrc from "../kit/effects/PacManReveal.tsx?raw";
import ProgressRevealSrc from "../kit/effects/ProgressReveal.tsx?raw";
import SlideRevealSrc from "../kit/effects/SlideReveal.tsx?raw";
import UseScrambleSrc from "../kit/useScramble.ts?raw";

import GlyphCanvasSrc from "../kit/canvas/GlyphCanvas.tsx?raw";
import AnimNodeSrc from "../kit/canvas/AnimNode.ts?raw";
import DrawingSrc from "../kit/canvas/drawing.ts?raw";
import FormationsSrc from "../kit/canvas/formations.ts?raw";
import WavesSrc from "../kit/canvas/waves.ts?raw";

import TerminalWindowSrc from "../kit/chrome/TerminalWindow.tsx?raw";
import TerminalLineSrc from "../kit/chrome/TerminalLine.tsx?raw";
import CursorSrc from "../kit/chrome/Cursor.tsx?raw";
import CornerAccentSrc from "../kit/chrome/CornerAccent.tsx?raw";
import ThinkingDotsSrc from "../kit/chrome/ThinkingDots.tsx?raw";

import TokensSrc from "../kit/tokens.ts?raw";
import GlyphsSrc from "../kit/glyphs.ts?raw";
import StylesSrc from "../kit/styles.css?raw";

export const SRC: Record<string, { file: string; code: string }> = {
  GlitchReveal: { file: "effects/GlitchReveal.tsx", code: GlitchRevealSrc },
  DecodeText: { file: "effects/DecodeText.tsx", code: DecodeTextSrc },
  DecodeToScramble: { file: "effects/DecodeToScramble.tsx", code: DecodeToScrambleSrc },
  ScrambleText: { file: "effects/ScrambleText.tsx", code: ScrambleTextSrc },
  TypewriterReveal: { file: "effects/TypewriterReveal.tsx", code: TypewriterRevealSrc },
  PacManReveal: { file: "effects/PacManReveal.tsx", code: PacManRevealSrc },
  ProgressReveal: { file: "effects/ProgressReveal.tsx", code: ProgressRevealSrc },
  SlideReveal: { file: "effects/SlideReveal.tsx", code: SlideRevealSrc },
  useScramble: { file: "useScramble.ts", code: UseScrambleSrc },
  GlyphCanvas: { file: "canvas/GlyphCanvas.tsx", code: GlyphCanvasSrc },
  AnimNode: { file: "canvas/AnimNode.ts", code: AnimNodeSrc },
  drawing: { file: "canvas/drawing.ts", code: DrawingSrc },
  formations: { file: "canvas/formations.ts", code: FormationsSrc },
  waves: { file: "canvas/waves.ts", code: WavesSrc },
  TerminalWindow: { file: "chrome/TerminalWindow.tsx", code: TerminalWindowSrc },
  TerminalLine: { file: "chrome/TerminalLine.tsx", code: TerminalLineSrc },
  Cursor: { file: "chrome/Cursor.tsx", code: CursorSrc },
  CornerAccent: { file: "chrome/CornerAccent.tsx", code: CornerAccentSrc },
  ThinkingDots: { file: "chrome/ThinkingDots.tsx", code: ThinkingDotsSrc },
  tokens: { file: "tokens.ts", code: TokensSrc },
  glyphs: { file: "glyphs.ts", code: GlyphsSrc },
  styles: { file: "styles.css", code: StylesSrc },
};
