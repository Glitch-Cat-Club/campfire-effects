import { useState } from "react";
import { GlyphCanvas } from "../kit/canvas";
import type { Formation } from "../kit/canvas";
import {
  DecodeText,
  DecodeToScramble,
  GlitchReveal,
  PacManReveal,
  ProgressReveal,
  ScrambleText,
  SlideReveal,
  TypewriterReveal,
} from "../kit/effects";
import {
  CornerAccent,
  Cursor,
  TerminalLine,
  TerminalWindow,
  ThinkingDots,
} from "../kit/chrome";
import { GOLD } from "../kit/tokens";
import { useWindowWidth } from "../kit/useWindowWidth";
import { SRC } from "./sources";

const FORMATIONS: Formation[] = ["scatter", "cluster", "ring", "campfire"];

/* Deep links (and self-testing): ?formation=cluster&code=GlitchReveal */
const params = new URLSearchParams(window.location.search);
const urlFormation = params.get("formation");
const INIT_FORMATION: Formation = (FORMATIONS as string[]).includes(
  urlFormation ?? ""
)
  ? (urlFormation as Formation)
  : "scatter";
const urlCode = params.get("code");
const INIT_CODE: CodeSel =
  urlCode && SRC[urlCode] ? { key: urlCode } : null;

type Tab = "effects" | "chrome" | "tokens";
const TABS: Tab[] = ["effects", "chrome", "tokens"];

type CodeSel = {
  key: string;
  usage?: string;
  needs?: string;
} | null;

/* ─── One clinical row: number · name · live demo · [▸] ─── */
function Row({
  n,
  name,
  srcKey,
  usage,
  needs,
  sel,
  onSelect,
  children,
}: {
  n: number;
  name: string;
  srcKey: string;
  usage?: string;
  needs?: string;
  sel: CodeSel;
  onSelect: (s: CodeSel) => void;
  children: React.ReactNode;
}) {
  const open = sel?.key === srcKey;
  return (
    <TerminalLine lineNum={n} marginTop={n === 1 ? 0 : 4}>
      <span className={`fx-name${open ? " lit" : ""}`}>{name}</span>
      <span className="fx-live">{children}</span>
      <button
        type="button"
        className={`arrow-btn${open ? " active" : ""}`}
        title={`show the code for ${name}`}
        onClick={() =>
          onSelect(open ? null : { key: srcKey, usage, needs })
        }
      >
        ▸
      </button>
    </TerminalLine>
  );
}

export function App() {
  const [formation, setFormation] = useState<Formation>(INIT_FORMATION);
  const [waveSignal, setWaveSignal] = useState(0);
  const [tab, setTab] = useState<Tab>("effects");
  const [fxKey, setFxKey] = useState(0);
  const [sel, setSel] = useState<CodeSel>(INIT_CODE);
  const [copied, setCopied] = useState(false);
  const wide = useWindowWidth() >= 980;

  /* Static geometry — the layout never moves, whatever is clicked */
  const grid = { x: 0.79, y: 0.42, size: 0.33 };

  const GLYPH_SEL = {
    key: "GlyphCanvas",
    needs: "the canvas/ folder + glyphs.ts + tokens.ts",
  };
  const toggleGlyphCode = () =>
    pick(sel?.key === "GlyphCanvas" ? null : GLYPH_SEL);

  const pick = (s: CodeSel) => {
    setSel(s);
    setCopied(false);
  };

  /* Tab switches leave the open code window alone — nothing jumps */
  const switchTab = (t: Tab) => setTab(t);

  const copy = () => {
    if (!sel) return;
    navigator.clipboard.writeText(SRC[sel.key].code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <>
      <GlyphCanvas
        formation={formation}
        waveSignal={waveSignal}
        center={wide ? { x: grid.x, y: grid.y } : undefined}
        size={wide ? grid.size : undefined}
      />

      <div className="frame">
        <div className="layout">
          {/* Click the grid itself → its code */}
          {wide && (
            <div
              className="grid-hotzone"
              title="view the grid's code"
              onClick={toggleGlyphCode}
            />
          )}
          {/* ─── Header — what this is, for a developer ─── */}
          <div className="pagehead">
            <h1>
              <DecodeToScramble text="campfire_effects" tickMs={30} />
            </h1>
            <div className="ph-meta">
              react + typescript · zero dependencies · JetBrains Mono ·{" "}
              <span className="gold">MIT</span>
            </div>
            <div className="ph-line">
              the design system from{" "}
              <span className="gold">the_campfire</span>, given away whole.
              click <span className="gold">▸</span> beside any piece → its
              source opens → copy it straight into your project.
            </div>
          </div>

          {/* ─── Process flow: the box → arrow → the code ─── */}
          <div className="flow">
            <TerminalWindow
              goldBorder
              showReplay={tab === "effects"}
              onReplay={() => setFxKey((k) => k + 1)}
              shellLabel="~ campfire"
              style={{ margin: 0, width: "min(500px, 100%)", flexShrink: 0 }}
            >
              <div className="tabs">
                {TABS.map((t) => (
                  <span
                    key={t}
                    className={`tab${tab === t ? " active" : ""}`}
                    onClick={() => switchTab(t)}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {tab === "effects" && (
                <div key={fxKey}>
                  <Row n={1} name="GlitchReveal" srcKey="GlitchReveal" sel={sel} onSelect={pick}
                    usage='<GlitchReveal text="signal acquired" />'>
                    <GlitchReveal text="signal acquired" />
                  </Row>
                  <Row n={2} name="DecodeText" srcKey="DecodeText" sel={sel} onSelect={pick}
                    usage='<DecodeText text="order out of noise" delay={400} />'
                    needs="useScramble.ts + glyphs.ts">
                    <DecodeText text="order out of noise" delay={400} />
                  </Row>
                  <Row n={3} name="DecodeToScramble" srcKey="DecodeToScramble" sel={sel} onSelect={pick}
                    usage='<DecodeToScramble text="never quite settles" />'
                    needs="useScramble.ts + glyphs.ts">
                    <DecodeToScramble text="never quite settles" delay={800} />
                  </Row>
                  <Row n={4} name="ScrambleText" srcKey="ScrambleText" sel={sel} onSelect={pick}
                    usage='<ScrambleText text="stable, mostly" />'
                    needs="useScramble.ts + glyphs.ts">
                    <ScrambleText text="stable, mostly" initialDelay={2600} />
                  </Row>
                  <Row n={5} name="TypewriterReveal" srcKey="TypewriterReveal" sel={sel} onSelect={pick}
                    usage='<TypewriterReveal text="typed with intent" />'
                    needs="Cursor.tsx + tokens.ts">
                    <TypewriterReveal text="typed with intent" delay={1200} />
                  </Row>
                  <Row n={6} name="PacManReveal" srcKey="PacManReveal" sel={sel} onSelect={pick}
                    usage='<PacManReveal text="eats its way across" />'
                    needs="tokens.ts">
                    <PacManReveal text="eats its way across" delay={1700} />
                  </Row>
                  <Row n={7} name="ProgressReveal" srcKey="ProgressReveal" sel={sel} onSelect={pick}
                    usage='<ProgressReveal text="loading, honestly" />'
                    needs="tokens.ts">
                    <ProgressReveal text="loading, honestly" delay={2100} />
                  </Row>
                  <Row n={8} name="SlideReveal" srcKey="SlideReveal" sel={sel} onSelect={pick}
                    usage='<SlideReveal text="arrives from the left" />'>
                    <SlideReveal text="arrives from the left" delay={2500} />
                  </Row>
                  <Row n={9} name="useScramble" srcKey="useScramble" sel={sel} onSelect={pick}>
                    <span className="fx-dim">the scramble engine</span>
                  </Row>
                </div>
              )}

              {tab === "chrome" && (
                <div>
                  <Row n={1} name="TerminalWindow" srcKey="TerminalWindow" sel={sel} onSelect={pick}
                    usage="<TerminalWindow goldBorder>…</TerminalWindow>"
                    needs="ScrambleText + useWindowWidth + tokens.ts">
                    <span className="fx-dim">the frame you're looking at</span>
                  </Row>
                  <Row n={2} name="TerminalLine" srcKey="TerminalLine" sel={sel} onSelect={pick}
                    usage="<TerminalLine lineNum={1}>…</TerminalLine>">
                    <span className="fx-dim">these numbered lines</span>
                  </Row>
                  <Row n={3} name="Cursor" srcKey="Cursor" sel={sel} onSelect={pick}
                    usage='<Cursor color="#C8A84E" />'>
                    <span className="fx-dim">
                      a blinking block <Cursor color={GOLD} />
                    </span>
                  </Row>
                  <Row n={4} name="ThinkingDots" srcKey="ThinkingDots" sel={sel} onSelect={pick}
                    usage="<ThinkingDots />">
                    <ThinkingDots />
                  </Row>
                  <Row n={5} name="CornerAccent" srcKey="CornerAccent" sel={sel} onSelect={pick}
                    usage='<CornerAccent position="top-left" />'>
                    <span className="corner-demo">
                      <CornerAccent position="top-left" />
                      <CornerAccent position="top-right" />
                      <CornerAccent position="bottom-left" />
                      <CornerAccent position="bottom-right" />
                      <span className="fx-dim">gold corners</span>
                    </span>
                  </Row>
                </div>
              )}

              {tab === "tokens" && (
                <div>
                  <Row n={1} name="tokens" srcKey="tokens" sel={sel} onSelect={pick}
                    usage='import { GOLD, EMBER, BG } from "./kit/tokens"'>
                    <span className="tok-chips">
                      <span className="tok-chip" style={{ background: "#C8A84E" }} />
                      <span className="tok-chip" style={{ background: "#D4784A" }} />
                      <span className="tok-chip" style={{ background: "#555" }} />
                      <span className="tok-chip" style={{ background: "#1a1a1a" }} />
                      <span className="fx-dim">gold · ember · greys · black</span>
                    </span>
                  </Row>
                  <Row n={2} name="glyphs" srcKey="glyphs" sel={sel} onSelect={pick}
                    usage='import { SCRAMBLE_SETS } from "./kit/glyphs"'>
                    <span className="fx-dim">▓░▒ αβγ カタナ ᚠᚢᚦ — every alphabet</span>
                  </Row>
                  <Row n={3} name="styles" srcKey="styles" sel={sel} onSelect={pick}
                    usage='import "./kit/styles.css"'>
                    <span className="fx-dim">the keyframes — import once</span>
                  </Row>
                </div>
              )}
            </TerminalWindow>

            {/* The code slot is ALWAYS here — same place, empty or full */}
            <div className={`flow-arrow${sel ? " on" : ""}`}>→</div>
            <TerminalWindow
              shellLabel={sel ? `src/kit/${SRC[sel.key].file}` : "~ source"}
              showReplay={!!sel}
              headerLabel="× close"
              onReplay={() => setSel(null)}
              style={{ margin: 0, width: "min(560px, 100%)", flexShrink: 1 }}
            >
              {sel ? (
                <>
                  {(sel.key === "GlyphCanvas" || sel.usage) && (
                    <div className="usage">
                      {sel.key === "GlyphCanvas"
                        ? `<GlyphCanvas formation="${formation}" />`
                        : sel.usage}
                    </div>
                  )}
                  <div className="code-head">
                    <span>
                      {SRC[sel.key].file}
                      {sel.needs ? <span className="needs"> · needs {sel.needs}</span> : null}
                    </span>
                    <button type="button" className="copy-btn" onClick={copy}>
                      {copied ? "copied ✓" : "copy"}
                    </button>
                  </div>
                  <pre className="code">{SRC[sel.key].code}</pre>
                </>
              ) : (
                <div className="slot-empty">
                  <span className="gold">▸</span> beside any piece opens its
                  code here — copy it straight out.
                </div>
              )}
            </TerminalWindow>
          </div>

          {/* ─── Have fun with glyphs — docked right under the grid ─── */}
          <div
            className={`glyphs-module${wide ? " docked" : ""}`}
            style={
              wide
                ? {
                    left: `${grid.x * 100}%`,
                    top: `calc(${grid.y * 100}vh + ${grid.size * 50}vmin + 24px)`,
                  }
                : undefined
            }
          >
            <CornerAccent position="top-left" />
            <CornerAccent position="bottom-right" />
            <div className="gm-row">
              <span className="gm-name">
                <span className="gold">&gt;</span> have_fun_with_glyphs
              </span>
              {FORMATIONS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`btn${formation === f ? " active" : ""}`}
                  onClick={() => setFormation(f)}
                >
                  {f}
                </button>
              ))}
              <button
                type="button"
                className="btn"
                onClick={() => setWaveSignal((s) => s + 1)}
              >
                ▚ wave
              </button>
              <button
                type="button"
                className={`arrow-btn${sel?.key === "GlyphCanvas" ? " active" : ""}`}
                title="show the code for GlyphCanvas"
                onClick={toggleGlyphCode}
              >
                ▸
              </button>
            </div>
            <div className="gm-hint">
              move your mouse through the grid — it notices
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
