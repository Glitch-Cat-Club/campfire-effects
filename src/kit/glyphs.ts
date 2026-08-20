/* ─── Canvas Shape Types ─── */
export const SHAPE_TYPES = [
  "curly",
  "angle",
  "hash",
  "lambda",
  "node",
  "slash",
  "semicolon",
] as const;

/* ─── Particle Characters ─── */
export const PARTICLE_CHARS = ["·", "×", "+", "░", "▪", "◦", "»"];

/* ─── Home Glyphs — resting-state icons for a subset of nodes ─── */
export const HOME_GLYPHS = [
  "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ",
  "ᛃ", "ᛈ", "ᛊ", "ᛏ", "ᛒ", "ᛗ", "ᛚ", "ᛟ",
  "☥", "◬", "⊕", "⊗", "⍟",
];

/* ─── Scramble Glyphs — digital noise characters matching text scramble ─── */
export const GRAFFITI_GLYPHS = [
  "!", "<", ">", "-", "_", "\\", "/", "[", "]", "{", "}", "=", "+", "*", "^", "?", "#",
  "▓", "░", "▒", "█", "▄", "▀", "■", "□",
  "0", "1",
  "α", "β", "γ", "δ", "λ", "π", "θ",
  "⟨", "⟩", "¬", "≈", "≠", "±", "∞",
  "カ", "タ", "ナ", "サ",
];

/* ─── Text Scramble Sets — one is picked at random per scramble cycle ─── */
export const SCRAMBLE_SETS = [
  "!<>-_\\/[]{}—=+*^?#",
  "▓░▒█▄▀■□▪▫",
  "01100110101001",
  "αβγδεζηθλμξπ",
  "⟨⟩⌐¬∴∵≈≠±∞",
  "カタナサキミ",
];

/* ─── Node Grid Configuration ─── */
export const NODE_COUNT = 80;
export const GRID_COLS = 10;
export const GRID_ROWS = Math.ceil(NODE_COUNT / GRID_COLS);
