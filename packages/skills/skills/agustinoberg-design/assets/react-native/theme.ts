// Generated from packages/brand/tokens.json by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here.
// agustín oberg design language — React Native / Expo theme.
// Usage: const c = colors[scheme]; style={{ backgroundColor: c.bg, color: c.fg }}

export const mono = {
  "black": "#000000",
  "ink950": "#0A0A0A",
  "ink900": "#111111",
  "ink800": "#1F1F1F",
  "ink700": "#2B2B2B",
  "ink600": "#3D3D3D",
  "ink500": "#5C5C5C",
  "ink400": "#8F8F8F",
  "ink300": "#B8B8B8",
  "ink200": "#D9D9D9",
  "ink150": "#E6E6E6",
  "ink100": "#EDEDED",
  "ink50": "#F4F4F4",
  "white": "#FFFFFF"
} as const;

export const semantic = {
  "positive": "#34C759",
  "warning": "#FF9F0A",
  "critical": "#FF453A"
} as const;

export const colors = {
  light: {
    "bg": "#F4F4F4",
    "surface1": "#FFFFFF",
    "surface2": "#F0F0F0",
    "surface3": "#E6E6E6",
    "sheetBg": "#FFFFFF",
    "stage": "#E8E8E8",
    "fg": "#0A0A0A",
    "fg2": "#6B6B6B",
    "fg3": "#A1A1A1",
    "line": "rgba(0,0,0,0.07)",
    "lineStrong": "rgba(0,0,0,0.12)",
    "btn2": "#E6E6E6",
    "btn2Hover": "#D9D9D9",
    "glass": "rgba(255,255,255,0.68)",
    "glassStrong": "rgba(255,255,255,0.86)",
    "glassEdge": "rgba(255,255,255,0.9)",
    "scrim": "rgba(0,0,0,0.18)",
    "atmosFg": "#0A0A0A"
  },
  dark: {
    "bg": "#000000",
    "surface1": "#111111",
    "surface2": "#1F1F1F",
    "surface3": "#2B2B2B",
    "sheetBg": "#1F1F1F",
    "stage": "#EDEDED",
    "fg": "#FFFFFF",
    "fg2": "#8F8F8F",
    "fg3": "#5C5C5C",
    "line": "rgba(255,255,255,0.08)",
    "lineStrong": "rgba(255,255,255,0.14)",
    "btn2": "#1F1F1F",
    "btn2Hover": "#2B2B2B",
    "glass": "rgba(255,255,255,0.12)",
    "glassStrong": "rgba(255,255,255,0.2)",
    "glassEdge": "rgba(255,255,255,0.14)",
    "scrim": "rgba(0,0,0,0.55)",
    "atmosFg": "#FFFFFF"
  },
} as const;

export type Scheme = keyof typeof colors;
export type Palette = (typeof colors)[Scheme];

/** One atmosphere per product. Keys: "0" (deepest) → "2", then "glow". */
export const atmospheres = {
  "forest": {
    "light": {
      "0": "#F4F8F3",
      "1": "#E3EFE0",
      "2": "#B9DCB3",
      "glow": "#7CC874"
    },
    "dark": {
      "0": "#07130B",
      "1": "#183021",
      "2": "#3F7A45",
      "glow": "#8FD68A"
    }
  },
  "ember": {
    "light": {
      "0": "#FBF7EF",
      "1": "#F5E7C8",
      "2": "#ECCB83",
      "glow": "#E0A730"
    },
    "dark": {
      "0": "#0F0A02",
      "1": "#3D2905",
      "2": "#B8821A",
      "glow": "#FFCF5C"
    }
  },
  "tide": {
    "light": {
      "0": "#F2F5FC",
      "1": "#DFE7FA",
      "2": "#B3C7F2",
      "glow": "#5B86E8"
    },
    "dark": {
      "0": "#03081A",
      "1": "#0F2152",
      "2": "#2F5BD6",
      "glow": "#8FB4FF"
    }
  },
  "rouge": {
    "light": {
      "0": "#FBF2F5",
      "1": "#F7DDE6",
      "2": "#F0B0C6",
      "glow": "#E2557F"
    },
    "dark": {
      "0": "#14030A",
      "1": "#4A0D24",
      "2": "#D6245E",
      "glow": "#FF8FB4"
    }
  }
} as const;

export type Atmosphere = keyof typeof atmospheres;

/** Product accent = glow of the product's atmosphere in the current mode. One kind of element per screen. */
export const accent = (atmosphere: Atmosphere, scheme: Scheme) => atmospheres[atmosphere][scheme].glow;
export const onAccent = "#0A0A0A";

export const radius = {
  "xs": 8,
  "md": 16,
  "lg": 24,
  "xl": 32,
  "device": 50,
  "pill": 999
} as const;

/** Concentric radius for a surface inset inside another. */
export const concentric = (outerRadius: number, inset: number) => Math.max(outerRadius - inset, 0);

export const space = {
  "1": 4,
  "2": 8,
  "3": 12,
  "4": 16,
  "5": 24,
  "6": 32,
  "7": 48,
  "8": 64,
  "9": 96,
  "10": 160
} as const;

export const fontSize = {
  "2xs": 11,
  "xs": 12,
  "sm": 14,
  "base": 16,
  "lg": 18,
  "xl": 22,
  "2xl": 28,
  "3xl": 40,
  "4xl": 56,
  "num-min": 64,
  "num-max": 128
} as const;

export const fontWeight = {
  "text": "400",
  "medium": "500",
  "heading": "600",
  "wordmark": "650"
} as const;

/** Letter-spacing in em. React Native needs points: use tracking(). */
export const trackingEm = {
  "display": -0.03,
  "tight": -0.015,
  "num": -0.045,
  "mono": 0.06
} as const;
export const tracking = (em: number, size: number) => em * size;

/** Blur radii in px. expo-blur uses intensity (1–100): start around intensity ≈ blur × 2 and tune by eye. */
export const blur = {
  "text": 4,
  "swap": 6,
  "behind": 10,
  "edge": 10,
  "glass": 20,
  "floatSheet": 32,
  "nav": 24,
  "progressiveLayers": [
    1,
    2,
    4,
    8
  ],
  "progressiveHeight": 72
} as const;

/**
 * Timing curves are cubic-bezier tuples for Easing.bezier(...).
 * spring: small confirmations. fingerSpring: anything a finger moves (pass the gesture velocity in).
 */
export const motion = {
  "easing": {
    "out": [
      0.22,
      1,
      0.36,
      1
    ],
    "inOut": [
      0.65,
      0,
      0.35,
      1
    ],
    "spring": [
      0.34,
      1.56,
      0.64,
      1
    ]
  },
  "duration": {
    "press": 120,
    "quick": 240,
    "exit": 280,
    "base": 420,
    "theme": 520,
    "count": 600,
    "reveal": 800
  },
  "stagger": {
    "text": 120,
    "word": 30,
    "list": 50,
    "digit": 40
  },
  "pressScale": 0.97,
  "lift": 12,
  "spring": {
    "damping": 16,
    "stiffness": 260,
    "mass": 1
  },
  "fingerSpring": {
    "settle": {
      "duration": 400,
      "dampingRatio": 1
    },
    "sheet": {
      "duration": 300,
      "dampingRatio": 0.85
    }
  }
} as const;
