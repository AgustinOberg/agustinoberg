<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Micro-blurs, micro-animations and motion

## 10. Micro-blurs and micro-animations

This is the layer that matters most. None of them stands out alone. Together they make the difference.
- Outside of glass, blur never goes above 10 px.
- No micro-animation lasts longer than 420 ms (except loading and live loops).

| pattern | where | spec | why |
|---|---|---|---|
| **Progressive blur** | edges of lists, nav, tab bars | 4 layers with 1/2/4/8 px blur and masks at 100/75/50/25% of the height. Height 72 px plus a fade of the background color. Class `.pblur`. | Content leaves gradually, like on iOS. |
| **Edge blur** | maps, photos, camera | Blur 10 px + saturate 110%. Radial mask: sharp up to 40%, full blur at the edge. Class `.edgeblur`. | Depth of field: the eye goes to the center. |
| **Floating glass** | sheets and cards over images | Blur 32, saturate 160%, 55% tint, 1 px inner light and hairline. Inset 10–12 with concentric radius. Class `.float-sheet`. | It reads as a layer and looks like hardware. |
| **Receding background** | when opening a sheet or modal | What is behind: blur 0 → 10, scale 1 → 0.96, opacity 1 → 0.6. 420 ms ease-out to open, 280 to close. | Depth without covering everything in black. |
| **Blur swap** | button and label states | What leaves: opacity → 0, blur → 6, scale → 0.96. What enters does the reverse, at the same time. 240 ms ease-out. Class `.swap`. | The eye reads continuity, not a jump. |
| **Arriving text** | AI responses, confirmations | Per word: opacity 0.15 → 1, blur 4 → 0, y 4 → 0. 420 ms with 30 ms between words. | It feels written live. |
| **Headline reveal** | hero, confirmations | Per line: color fg-3 → fg, y 6 → 0, blur 4 → 0. 800 ms with 120 ms between lines. | It arrives without appearing out of nowhere. |
| **Thinking text** | loading with text | Gradient fg-3 → fg → fg-3, 300% wide, that sweeps across the text in 2.2 s linear, looping. | It says "working" without a spinner. |
| **Layered depth** | product screens, heroes | Giant word in the back (700, opacity 14%, blur 2.5). Sharp object in front. Contact shadow (70% ellipse, blur 4, black at 35%). An optional sticker rotated −4°. | Three planes read as real space. |
| **Growing pill** | calls, timers, live | Width, height and radius together in 420 ms ease-in-out. Content changes with a blur swap in 240 ms, with a 120 ms delay. | It grows from where it already was. |
| **Morphing icon** | add/close, copy | + → × with rotate 45° (240 ms spring). Copy → check with a blur swap, and it returns after 1.4 s. | It confirms without a toast. |
| **Elastic switch** | toggles | The thumb stretches from 28 to 36 on press. It travels in 240 ms spring. | It feels soft under the finger. |
| **Live dot** | live, pending, recording | The ring scales 1 → 2.6 and its opacity goes from 0.55 to 0. 1.6 s ease-out, looping only while the state lasts. | "It's happening" without asking for attention. |
| **Growing underline** | links | 1 px line that grows from left to right in 240 ms ease-out. | Minimal hover feedback. |

---

## 11. Motion

### Principles
1. **Respond instantly:** feedback in under 100 ms.
2. **Enter fast, slow down gently:** ease-out by default. Closing is faster than opening.
3. **Nothing appears out of nowhere:** things enter from where they originate.
4. **One thing at a time:** stagger 120 ms between lines, 50 ms between items (cap of 6) and 30 ms between words.
5. **Text doesn't dance:** it reveals and stays still.

### Curves
- `ease-out` `cubic-bezier(.22, 1, .36, 1)`: entrances, responses and reveals.
- `ease-in-out` `cubic-bezier(.65, 0, .35, 1)`: travel, morphs and closing.
- `ease-spring` `cubic-bezier(.34, 1.56, .64, 1)`: small things only.

### Durations
- `dur-1` 120: press and hover.
- `dur-2` 240: chips, toggles, color and blur swaps.
- `dur-exit` 280: close.
- `dur-3` 420: open and morphs.
- `dur-count` 600: numbers.
- `dur-4` 800: headlines.

### Catalog
| pattern | spec |
|---|---|
| Tap | scale 1 → 0.97 in 120 ms ease-out. On release, 240 ms spring. Light haptic. |
| Roll a number | Each digit rolls vertically with a 1.5 px blur while it moves. 600 ms ease-out, 40 ms between digits. |
| Change selection | Indicator with translateX in 240 ms ease-in-out. Selection haptic. |
| Confirm | The label leaves with a blur in 120 ms. The button becomes a 52 px circle in 420 ms ease-in-out. The check appears with a spring in 240 ms, with a 420 ms delay. Success haptic. |
| List entrance | opacity 0 → 1, y 12 → 0, blur 2 → 0. 420 ms ease-out, 50 ms between items. |
| Toast | Enters with y 16 → 0 and blur 4 → 0 in 420 ms ease-out. Stays 1600 ms and leaves in 240 ms. |
| Screen change | The new screen enters with x 100% → 0 in 420 ms ease-out. The previous one goes to x −30% with brightness 0.8. Going back is the reverse, in 280 ms. |
| Theme change | Circular reveal with clip-path from the tapped point, 520 ms ease-out. Without support: 420 ms crossfade. |

### Screen transitions
- **push:** 420 ease-out.
- **back:** 280 ease-in-out. With a gesture, it follows the finger.
- **modal:** sheet in 420 ease-out, with the receding background.
- **tab:** crossfade with a 4 px blur in 240 ms.
- **shared element:** position, size and radius together in 420 ease-in-out.

### What is not animated
- Text while it is being read.
- Parallax or hijacked scroll.
- Loops in UI, except loading and live states.
- Bounces on large elements.
- Load animations nobody asked for.

### Reduced motion
- No movement, scale or blur.
- State changes become a 120 ms crossfade.
- Numbers show the final value and loops stop.
- Haptics stay.

### Code
React Native with Reanimated and expo-blur:
```ts
import { Easing, withTiming, withSpring, withDelay } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

export const ease = { out: Easing.bezier(0.22, 1, 0.36, 1), inOut: Easing.bezier(0.65, 0, 0.35, 1) };
export const dur = { press: 120, quick: 240, exit: 280, base: 420, count: 600, reveal: 800 };
export const spring = { damping: 16, stiffness: 260, mass: 1 }; // approx. ease-spring; tune by eye

// press
onPressIn:  scale.value = withTiming(0.97, { duration: dur.press, easing: ease.out });
onPressOut: scale.value = withSpring(1, spring);

// sheet + receding background
sheetY.value = withTiming(0, { duration: dur.base, easing: ease.out });
behindScale.value = withTiming(0.96, { duration: dur.base, easing: ease.out });
// background blur: animated <BlurView intensity={...} />, or Skia <Blur blur={10} />

// item i in a list
opacity.value = withDelay(Math.min(i, 5) * 50, withTiming(1, { duration: dur.base, easing: ease.out }));
```
On web, everything is available as variables in `tokens.css` and as classes (`.pblur`, `.edgeblur`, `.float-sheet`, `.swap`, `.shimmer`, `.reveal`, `.words`, `.stagger`, `.live`, `.link`).

### Video for shots
- **Format:** MP4 H.264, 1600×1200 (Dribbble) or 1920×1080 (site).
- **Frames:** 60 fps, real time.
- **Length:** 6 to 10 s, in a perfect loop.
- **Pacing:** pauses of 600 to 800 ms on each key state.
- **Taps:** no cursor. If needed, a 44 px white circle at 25%.
