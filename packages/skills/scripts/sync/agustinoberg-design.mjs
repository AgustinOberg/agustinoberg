// Regenerates the parts of the agustinoberg-design skill that come from @agustinoberg/brand:
// spec references (split from brand.md, plus the Spanish translation brand.es.md), tokens.css,
// tokens.json and a React Native theme module. Hand-written files are never touched.
// Run through scripts/sync.mjs (`pnpm sync:skills` from the repo root).

import { generatedHeader, readBrand, skillWriter, specSections, writeSections } from "../lib/brand.mjs";

const SKILL = "agustinoberg-design";
const SCRIPT = `${SKILL}.mjs`;
const write = skillWriter(SKILL);

/* ---------- references from the English spec ---------- */

const sections = specSections("brand.md");
const groups = [
  ["references/philosophy-and-decisions.md", "Philosophy, decisions and rules", [0, 1, 2, 3, 4, 16, 17]],
  ["references/foundations.md", "Foundations: modes, color, type, shape", [5, 6, 7, 8]],
  ["references/components.md", "Components", [9]],
  ["references/micro-and-motion.md", "Micro-blurs, micro-animations and motion", [10, 11]],
  ["references/imagery-and-voice.md", "Imagery and voice", [12, 13]],
];
for (const [file, title, ids] of groups) {
  writeSections({ write, sections, file, title, ids, source: "brand.md", script: SCRIPT });
}

write("references/brand.es.md", `${generatedHeader("brand.es.md", SCRIPT)}${readBrand("brand.es.md").trim()}\n`);

/* ---------- tokens ---------- */

const tokensJsonText = readBrand("tokens.json");
write("assets/tokens.css", `/* Generated from packages/brand/tokens.css. Do not edit here. */\n${readBrand("tokens.css")}`);
write("assets/tokens.json", tokensJsonText);

/* ---------- React Native theme ---------- */

const t = JSON.parse(tokensJsonText);
const val = (node) => node.$value;
const px = (v) => Number(String(v).replace("px", ""));
const ms = (v) => Number(String(v).replace("ms", ""));
const mapValues = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !k.startsWith("$")).map(([k, v]) => [k, fn(v, k)]));
const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const camelKeys = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [camel(k), v]));
const json = (v, indent = "") => JSON.stringify(v, null, 2).replace(/\n/g, `\n${indent}`);

const theme = {
  mono: camelKeys(mapValues(t.color.mono, val)),
  semantic: mapValues(t.color.semantic, val),
  light: camelKeys(mapValues(t.color.light, val)),
  dark: camelKeys(mapValues(t.color.dark, val)),
  atmospheres: mapValues(t.color.atmosphere, (a) => ({ light: mapValues(a.light, val), dark: mapValues(a.dark, val) })),
  onAccent: val(t.color.accent["on-accent"]),
  radius: mapValues(t.radius, (v) => px(val(v))),
  space: mapValues(t.space, (v) => px(val(v))),
  fontSize: mapValues(t.font.size, (v) => px(val(v))),
  fontWeight: mapValues(t.font.weight, (v) => String(val(v))),
  trackingEm: mapValues(t.font.tracking, (v) => Number(String(val(v)).replace("em", ""))),
  blur: camelKeys(mapValues(t.blur, (v, k) => (k === "progressive-layers" ? String(val(v)).split(",").map(px) : px(val(v))))),
  motion: {
    easing: camelKeys(mapValues(t.motion.easing, val)),
    duration: mapValues(t.motion.duration, (v) => ms(val(v))),
    stagger: mapValues(t.motion.stagger, (v) => ms(val(v))),
    pressScale: val(t.motion["press-scale"]),
    lift: px(val(t.motion.lift)),
    spring: val(t.motion["reanimated-spring"]),
    fingerSpring: { settle: { duration: 400, dampingRatio: 1 }, sheet: { duration: 300, dampingRatio: 0.85 } },
  },
};

write(
  "assets/react-native/theme.ts",
  `// Generated from packages/brand/tokens.json by packages/skills/scripts/sync/${SCRIPT}. Do not edit here.
// agustín oberg design language — React Native / Expo theme.
// Usage: const c = colors[scheme]; style={{ backgroundColor: c.bg, color: c.fg }}

export const mono = ${json(theme.mono)} as const;

export const semantic = ${json(theme.semantic)} as const;

export const colors = {
  light: ${json(theme.light, "  ")},
  dark: ${json(theme.dark, "  ")},
} as const;

export type Scheme = keyof typeof colors;
export type Palette = (typeof colors)[Scheme];

/** One atmosphere per product. Keys: "0" (deepest) → "2", then "glow". */
export const atmospheres = ${json(theme.atmospheres)} as const;

export type Atmosphere = keyof typeof atmospheres;

/** Product accent = glow of the product's atmosphere in the current mode. One kind of element per screen. */
export const accent = (atmosphere: Atmosphere, scheme: Scheme) => atmospheres[atmosphere][scheme].glow;
export const onAccent = ${JSON.stringify(theme.onAccent)};

export const radius = ${json(theme.radius)} as const;

/** Concentric radius for a surface inset inside another. */
export const concentric = (outerRadius: number, inset: number) => Math.max(outerRadius - inset, 0);

export const space = ${json(theme.space)} as const;

export const fontSize = ${json(theme.fontSize)} as const;

export const fontWeight = ${json(theme.fontWeight)} as const;

/** Letter-spacing in em. React Native needs points: use tracking(). */
export const trackingEm = ${json(theme.trackingEm)} as const;
export const tracking = (em: number, size: number) => em * size;

/** Blur radii in px. expo-blur uses intensity (1–100): start around intensity ≈ blur × 2 and tune by eye. */
export const blur = ${json(theme.blur)} as const;

/**
 * Timing curves are cubic-bezier tuples for Easing.bezier(...).
 * spring: small confirmations. fingerSpring: anything a finger moves (pass the gesture velocity in).
 */
export const motion = ${json(theme.motion)} as const;
`
);
