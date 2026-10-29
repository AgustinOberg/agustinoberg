# agustín oberg · design language v2.0

> **For AI:** this guide is the source of truth for how I design, for any project in my style (apps, sites, portfolios, presentations or shots), not only my brand. English is the primary language: a Spanish translation lives in `brand.es.md`, and if the two ever differ, this file wins. Read it fully before you design. For a product, follow section 13, "Apply it to any project"; for my portfolio, section 14, "Recipe: portfolio". The exact values are in `tokens.json` and ready to use in `tokens.css`. If anything here conflicts with another source, this guide wins. If you are missing real content (projects, copy, metrics, images), **ask before you invent anything** and use placeholders marked `[TODO]`.

On the site (https://agustinoberg-design.pages.dev for now; later https://design.agustinoberg.com):
- `brand.md`: this file (English, primary). `brand.es.md`: the Spanish translation.
- `tokens.css` and `tokens.json`: every value, per mode.
- `llms.txt`: index for models. `llms-full.txt`: the spec and the tokens in a single file.
- `/` and `/es/`: the visual guide with interactive demos, in English and Spanish.

In the repo: `packages/brand/` (spec and tokens, package `@agustinoberg/brand`), `apps/design/` (the site) and `packages/skills/` (the agent skills).

---

## 0. Identity

- **Who:** agustín oberg, product designer. Mobile first, with a focus on motion and systems. `[TODO: confirm role, seniority, location and client type]`
- **Positioning (draft):** "Product design and motion for teams that ship."
- **In one line:** monochrome interfaces where the product is the hero, with depth made of light and blur, and precise motion that explains.
- **Source references:** the work of Dominik Tyka (dribbble.com/dominikt) and the studio Figura (figura.digital). Take the judgment, never the pieces: do not reuse their logos, project names, copy or images.
- **Name on screen:** "agustín oberg", lowercase, Inter Display 650, tracking −3.5%. Temporary monogram: "ao" in a 28 px rounded square (radius 9), inverted (fg on bg). `[TODO: final logo]`

---

## 1. Philosophy

People don't read interfaces. They feel them.

1. **The detail is the product.** Two apps with the same features don't feel the same. The difference lives in 200 ms, in a 6 px blur, in a button that shrinks when you tap it. Most of the time goes there.
2. **Quiet frame, product as the hero.** Neutral backgrounds, restrained type and almost no color around the screen. The quieter the frame, the louder the product.
3. **Depth with light, not lines.** Layers separate through blur, transparency and soft shadows. Borders and boxes divide. Blur creates order without cutting the image.
4. **Motion explains.** Animate to show where something comes from and where it goes. If an animation doesn't answer a question, remove it.
5. **One color per story.** The brand lives in black, white and grays. Each project picks a single color and sticks with it.
6. **Light and dark from day one.** Both modes are designed in parallel. Nothing is inverted automatically.
7. **Words are design too.** Short copy, active voice, zero jargon. If a button needs an explanation, the button is wrong.

---

## 2. Decisions and why

| decision | why | rule |
|---|---|---|
| Buttons are always pills | They read as tappable, fit under the thumb and echo the curve of the phone. | radius 999 · height 40 or 52 |
| Small two-tone headlines | Confidence doesn't need size. Gray builds the hierarchy and leaves large sizes for numbers. | line 1 `fg`, line 2 `fg-2`, same size and weight |
| Huge numbers | Time, money and scores are what people came to see. | 600 · tabular-nums · tracking −4.5% |
| A single sans | Inter Display has optical sizing and tabular figures, and it looks like SF Pro. | Inter Display + Geist Mono only in labels |
| Geist Mono in labels | It marks what is technical and creates order without competing. | 11 px · uppercase · +6% |
| Pure black in dark | On OLED, black disappears, the device blends in and glows gain contrast. | `bg` #000 |
| Light gray in light | Pure white is tiring and doesn't let cards separate. | `bg` #F4F4F4, cards #FFF |
| Blur instead of borders | Glass shows the context and separates without cutting. | blur 20 · saturate 180% · 1 px inner light |
| Floating, concentric sheets | Set off the edge, it reads as a layer. Concentric, it looks like hardware. | inset 12 · radius = outer − inset |
| Ease-out by default | It responds instantly and slows down like a real object. | `cubic-bezier(.22,1,.36,1)` |
| Close faster than open | Whoever closes has already decided. | open 420 ms · close 280 ms |
| One atmosphere per project | A sustained color is remembered. | pick 1 of 4 · never mix |
| Front-facing mockups, no hands | Perspective and hands make the screen smaller. | device ≤ 60% of the height |

---

## 3. If/then rules (apply without thinking)

- **If you design a button:** pill. Primary = `fg` background and `bg` text (it inverts per mode). Secondary = `btn-2`. Over an image or atmosphere = glass. Height 40 (normal) or 52 (main action on the screen). Text 14/600 or 16/600.
- **If you design a headline:** two lines max. The first in `fg` (it states), the second in `fg-2` (it explains). Weight 600 and negative tracking. No more than 48 px on web unless it is display. On mobile, 22–28.
- **If there is an important number:** make it the largest thing on the screen. Tabular-nums. When it changes, it rolls.
- **If something floats over content** (sheet, card, toast): it sits off the edge, has a concentric radius and, if there is an image behind it, uses glass.
- **If there is content behind a sheet:** it recedes. Blur 10 px, scale 0.96, opacity 0.6.
- **If a list or bar scrolls:** progressive blur on the edge, never a hard cut.
- **If there is a map, photo or camera in the background:** edge blur, sharp in the center.
- **If a state changes** (send → sending → sent): blur swap in the same place.
- **If something is loading with text:** shimmer. If something is live: live dot.
- **If you need to confirm an action with a result:** the button turns into the check. No toast.
- **If you need to notify something with no decision:** toast. If there is a decision: sheet.
- **If you separate layers in light mode:** soft shadow. In dark: a surface step and a 1 px light on top.
- **If the project needs color:** pick one atmosphere and use it across the whole project, never in the personal brand.
- **If you're torn between adding and removing:** remove.

---

## 4. Light and dark

Both modes are first class. By default, follow the system. The person can choose system, light or dark. On web: `data-theme="light|dark"` on `<html>`. With no attribute, it follows `prefers-color-scheme`. To force one part: class `.theme-light` or `.theme-dark`.

| aspect | light | dark |
|---|---|---|
| background (`bg`) | #F4F4F4 | #000000 |
| cards (`surface-1`) | #FFFFFF + soft shadow | #111111 + 1 px inner light |
| inside cards (`surface-2`) | #F0F0F0 | #1F1F1F |
| opaque sheet (`sheet-bg`) | #FFFFFF | #1F1F1F |
| text (`fg` / `fg-2` / `fg-3`) | #0A0A0A / #6B6B6B / #A1A1A1 | #FFFFFF / #8F8F8F / #5C5C5C |
| secondary button (`btn-2`) | #E6E6E6 | #1F1F1F |
| glass (`glass`) | white 68% | white 12% |
| hairline (`line`) | black 7% | white 8% |
| separation | shadow | surface step + hairline |
| atmospheres | pastel with saturated glow | deep with bright glow |
| grain | 5% | 12% |
| device stage | #E8E8E8 | #EDEDED (the light stage stays) |

**Always:**
- Design both modes in parallel.
- Give each token a chosen value per mode.
- Check AA contrast in both.
- In shots, show one mode per shot or cut from light → dark halfway through the loop.

**Never:**
- Mid gray as a dark background.
- Large shadows in dark.
- Leave a mode "for later".
- Use the same glass in both modes.

---

## 5. Color

### Mono scale (same in both modes)
black #000000 · ink-950 #0A0A0A · ink-900 #111111 · ink-800 #1F1F1F · ink-700 #2B2B2B · ink-600 #3D3D3D · ink-500 #5C5C5C · ink-400 #8F8F8F · ink-300 #B8B8B8 · ink-200 #D9D9D9 · ink-150 #E6E6E6 · ink-100 #EDEDED · ink-50 #F4F4F4 · white #FFFFFF

### Semantic (states only, never decoration)
positive #34C759 · warning #FF9F0A · critical #FF453A

### Atmospheres (one per project)
Built as a radial gradient from the top (`a-2` → `a-1` → `a-0`), with a central glow at 38% and grain.

| atmosphere | for | dark (0 / 1 / 2 / glow) | light (0 / 1 / 2 / glow) |
|---|---|---|---|
| forest | sport, outdoor, focus | #07130B / #183021 / #3F7A45 / #8FD68A | #F4F8F3 / #E3EFE0 / #B9DCB3 / #7CC874 |
| ember | time, energy, rest | #0F0A02 / #3D2905 / #B8821A / #FFCF5C | #FBF7EF / #F5E7C8 / #ECCB83 / #E0A730 |
| tide | money, trust, chat | #03081A / #0F2152 / #2F5BD6 / #8FB4FF | #F2F5FC / #DFE7FA / #B3C7F2 / #5B86E8 |
| rouge | social, location, alerts | #14030A / #4A0D24 / #D6245E / #FF8FB4 | #FBF2F5 / #F7DDE6 / #F0B0C6 / #E2557F |

The hex values for the dark core and the glass come from the CSS of figura.digital. The atmosphere values are my own, approximated from the references.

---

## 6. Typography

- **Inter Display** (Google Fonts: Inter with the `opsz` axis 14–32) for everything.
- **Geist Mono** only for labels.

| role | size / weight | tracking | color |
|---|---|---|---|
| display | 56 / 600 (clamp 36–56) | −3% | fg |
| h1 | 40 / 600 | −3% | fg |
| h2 | 28 / 600 | −1.5% to −3% | fg + fg-2 |
| h3 | 22 / 600 | −1.5% | fg |
| body | 16 / 400, line height 1.55, ≤ 62 characters | 0 | fg-2 |
| small | 14 / 500 | 0 | fg-2 |
| label | Geist Mono 11 / 400, uppercase | +6% | fg-2 or fg-3 |
| numbers | 64–128 / 600, tabular-nums | −4.5% | fg |

Rules:
- Project names, shot titles and posts in lowercase. Sentence copy in sentence case.
- `→` for flows: `onboarding → first payment`.
- `®` only if the brand is registered.
- Optional editorial accent: one line in uppercase serif for the name of a brand or collection (seen in the references). One per screen at most.

---

## 7. Shape, space and layout

- **Radii:**
  - `r-xs` 8: stage.
  - `r-md` 16: thumbs and inputs.
  - `r-lg` 24: cards.
  - `r-xl` 32: sheets.
  - `r-pill` 999: buttons, chips, toggles and segmented controls.
  - `r-device` 50: iPhone frame at ~270 px wide.
- **Concentric:** inner radius = outer radius − margin. Example: screen 44, sheet 12 from the edge → radius 32.
- **Space (base 4):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 160.
- **Web layout:**
  - Max width 1280 and gutter 24 (16 on mobile).
  - Sections with a mono label in a 200 px left column (sticky) and the content on the right.
  - Space between sections: 96 (64 on mobile).
- **Web nav:**
  - Sticky, with the wordmark on the left and links on the right (lowercase, 14 px).
  - A 40 px line before the last link or CTA, and the theme switcher.
  - Background with a progressive blur that fades out 36 px below the bar.
- **Cards:** `surface-1`, radius 24, padding 24, `elev-1` + hairline. Use them only where an object needs to be separated. Not everything is a card.

---

## 8. Components

- **Primary button:** pill, `fg`/`bg`, 600. Hover: 86% mix toward `bg`. Press: scale 0.97.
- **Secondary button:** pill, `btn-2`. Hover: `btn-2-hover`.
- **Glass button:** `glass` + blur 20 + saturate 180% + 1 px inner light. Only over an image or atmosphere.
- **Chip:** 26 px pill, 12/500, `btn-2`. Optional 6 px status dot.
- **Sheet:**
  - Opaque: `sheet-bg`, radius 32, `elev-2` and a 36×5 grabber.
  - Floating over an image: glass, blur 32, saturate 160%, inset 12, concentric radius.
- **Segmented:** `surface-2` pill with an `fg` thumb that travels. Active text is in `bg`.
- **Toggle:** 64×34, 28 thumb that stretches to 36 on press. On = positive.
- **Toast:** `fg`/`bg` pill, bottom center, 1600 ms.
- **Island pill:** black pill, 36 px tall, that grows into a card (radius 32) for live activities.
- **Stage:** `stage` panel, radius 8, device centered.

---

## 9. Micro-blurs and micro-animations

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

## 10. Motion

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

---

## 11. Image and presentation

Three setups, one per shot:
1. **Light stage:** device centered on #E8E8E8. For light UI and flows.
2. **Black stage:** the screen is the only light. For dark UI.
3. **Brand object:** a shiny 3D object with the atmosphere glow, grain and a contact shadow. For launches and covers.

- **Format:** 4:3 for Dribbble and 16:9 for the site.
- **Device:** front-facing iPhone, no perspective, taking up at most 60% of the height. It is fine to crop it with the edge of the stage to get closer to a detail.
- **Icons:** 1.8 stroke, with rounded caps. 3D icons or emoji only as content objects (pins, achievements), never as UI icons.

---

## 12. Voice

- **Language:** English for the public brand. Spanish for internal documentation.
- **Style:** short sentences, active voice, concrete verbs. No agency jargon ("innovative solutions", "unique experiences").
- **Examples (draft):**
  - hero: "Product design and motion for teams that ship." / "Screens, systems and the small moments between them."
  - about: "I work in prototypes, not decks." / "You see it moving by the end of week one."
  - shot: `verdant → round summary`
  - post: `sheet transitions for a booking flow` (one line, no hashtags, with video)
- **Buttons:** say exactly what happens ("Schedule transfer", not "Continue"). Errors say what happened and how to fix it.

---

## 13. Apply it to any project

This language isn't only for my brand. Use it to design any product in my style: a travel app, a bank, an internal tool. Before you start, separate what carries over from what doesn't.

| | what it includes |
|---|---|
| **Carries over** (without references; with references, only my touch) | Philosophy, decisions, if/then rules, typography, radii, spacing, components, micro-blurs, motion, light and dark, imagery and the quality checklist. |
| **Adapts to the product** | Accent color (one atmosphere), name and logo, copy (in the product's voice, using my writing rules), language, and domain icons and photos. |
| **Only my brand** | The "agustín oberg" wordmark, the "ao" monogram, my positioning, my sample copy and the rule that my personal brand uses no color. |

### With or without references
Before designing, check which design references exist: a Figma file, screenshots, the client's brand or apps the person wants to follow.

| case | visual base | what gets added |
|---|---|---|
| **There are references** | The references lead: typography, colors, radii, icons, illustration and layout. | My touch (below). |
| **Partial references** (for example, only a logo and colors) | The references, for what they define. | My full design language for everything they don't define. |
| **No references** | My full design language. | — |

Even with references, the result has to feel made by me. Not identical to my work, but sharing details with it.

### My touch (the portable signature)
These are the details that go on top of any design without overriding its identity. Pick **3 to 6** that fit; never all of them.

- **Always, because they don't touch the visual identity:**
  - My motion vocabulary: ease-out by default, press 0.97, closing faster than opening, the frequency gate.
  - Micro-blurs: progressive blur on scroll edges and bars, the background receding when a sheet opens, blur swaps on state changes, words arriving.
  - Important numbers as the hero, tabular and big.
  - Haptics as punctuation.
  - My copy rules: short, concrete, one label per intent.
  - Complete light and dark.
- **If the reference doesn't contradict it:** floating sheets with concentric radius, two-tone headlines (in the reference's typeface), layered depth on heroes and the button that turns into a check.
- **Never:** change the reference's colors, typography, logo or radius scale. Don't bring my atmospheres into a brand that already has a palette.

### Accent color in products
- The product picks **one** atmosphere for its theme, or creates a new one with the same recipe: 4 tones per mode, from the deepest to the glow.
- The accent is that atmosphere's `glow`, in both modes. Text on the accent is #0A0A0A. In CSS: put `.accent-forest`, `.accent-ember`, `.accent-tide` or `.accent-rouge` on a container and use the `.btn--accent` button.
- The accent appears on **one kind of element per screen**: the domain action (Book, Claim, Pay), the pins or the active progress. Everything else stays mono. The generic primary button stays `fg` on `bg`.
- The full atmosphere (gradient, glow and grain) goes in onboarding, empty states, big confirmations and presentation shots.

### Recipe: mobile app
Suggested stack: Expo / React Native with Reanimated and expo-blur (or Skia for progressive blur). On the web: import `tokens.css`.

| screen | pattern |
|---|---|
| onboarding | Full atmosphere, brand object with contact shadow, two-tone headline and a single CTA. |
| home / explore | List or map. Map with edge blur and white pins. Floating pills on top, a peeking card at the bottom and a glass tab bar with progressive blur. |
| detail | Hero with layered depth, or a photo with edge blur. Lowercase name and the key fact as a big number. |
| action | Floating concentric sheet with the background receding. Segmented control or calendar inside. |
| confirmation | Button that morphs into a check, arriving text and a success haptic. |
| in progress | Island pill with a live dot (timer, trip, call). |
| loading | Shimmer on the text and skeletons in `surface-2`. No spinners. |
| empty | Soft atmosphere, two-tone headline and one action. |
| settings | Grouped list in cards, elastic toggles and mono labels for the groups. |

Navigation: push to go deeper, sheets for short tasks and tabs with a crossfade. Both modes from day one, with reduced motion respected.

### Example: travel app
- **Atmosphere:** tide (sea, flights, trust). If the product is about nature or the outdoors, forest.
- **Explore:** map with edge blur, white pins with a photo of the place, and destination cards peeking at the bottom with prices.
- **Destination:** full-bleed photo with edge blur, the place name, the price per night as a big number and, at most, one sticker ("NEW") per screen.
- **Book:** floating sheet with dates (segmented control for nights, plus a calendar) and the background receding.
- **Pay:** accent button "Book · $1,240" that morphs into a check. The booking code arrives word by word.
- **Trip in progress:** island pill with a live dot ("Boarding in 0:45").
- **Copy:** short and concrete ("Book", "Change dates"). Place names are capitalized because they're proper nouns.

### Checklist for any project
- [ ] If there were references, do they lead the visuals, with my touch present in 3 to 6 details that don't override them?
- [ ] One atmosphere, with the accent on one kind of element per screen?
- [ ] Two-tone headlines, big numbers and pill buttons?
- [ ] Floating concentric sheets with the background receding?
- [ ] Progressive blur on bars and scroll edges, and edge blur on maps and photos?
- [ ] Does every state change have its micro-animation (press, blur swap, check)?
- [ ] Complete light and dark, AA contrast and reduced motion?
- [ ] Is nothing from my personal brand (wordmark, monogram, my copy) left in the product?
- [ ] Was no fact, name or metric invented without a `[TODO]` mark?

---

## 14. Recipe: portfolio

When I ask you to "make me a portfolio", follow this.

### Suggested stack
- Static page or Next.js.
- Import `@agustinoberg/brand/tokens.css` (in this repo) or `tokens.css` from the site.
- The fonts from section 6.
- Light and dark with a switcher (system / light / dark) and a circular reveal on change.

### Home structure
1. **Nav:** wordmark on the left. Lowercase links (work, about, contact), a 40 px line, a "Book a call" pill CTA and the theme switcher. Progressive blur underneath.
2. **Hero:**
   - Two-tone headline, 2 lines at most, with a reveal.
   - Two CTAs: primary and secondary.
   - On the right, client logos in gray or meta in mono. `[TODO: real clients]`
3. **Selected work:**
   - Each project is a full-width stage (radius 8) with a looping video or the device centered.
   - Below: lowercase name, a one-line description in `fg-2` and tags as text or chips.
   - Each project uses its own atmosphere. Between 3 and 6 projects. `[TODO: real projects]`
4. **Short manifesto** (optional): 3 to 5 lines from the philosophy, with a gray-to-fg reveal on scroll. The text is always visible.
5. **About:**
   - Black and white photo.
   - 2 or 3 short paragraphs.
   - Services as a simple list with a mono label.
6. **Contact:** two-tone headline, a "Book a call" CTA and the email visible as text.
7. **Footer:** mono labels (SITEMAP, SOCIAL), links in `fg`, and legal text at 12 px `fg-3`.

### Case study template
1. **Hero:** project atmosphere with a brand object or device, lowercase name and one line on what it is.
2. **Context:** the problem in 2 or 3 lines, and role / team / timeline in mono labels.
3. **Decisions:** 3 to 5, each with its "why", in rows, not cards.
4. **Screens:** light or dark stages depending on the UI. Show both modes if they exist.
5. **Motion:** looping videos of the key micro-interactions, each with its spec in mono.
6. **Result:** large, tabular, real numbers. `[TODO: never invent metrics]`
7. **Next project:** a large card with the next project's atmosphere.

### Technical requirements
- Responsive from 360 px, no horizontal scroll.
- Light and dark, both complete.
- `prefers-reduced-motion`.
- Videos with `poster`, `muted`, `playsinline` and lazy loading.
- Visible focus and AA contrast.
- All text in HTML, not in images.

### Checklist before delivery
- [ ] Is every button a pill and every headline two-tone?
- [ ] Are both modes finished and tested?
- [ ] Is there progressive blur on the nav and on scroll edges?
- [ ] Do sheets float with a concentric radius, and does the background recede?
- [ ] Does each project use a single atmosphere?
- [ ] Is every piece of data, client and metric real, with nothing invented?
- [ ] Does it work with reduced motion?

---

## 15. Never

- Generic purple-blue gradients, overdone glassmorphism (blur above 40 or thick white borders).
- Perspective mockups, hands holding the phone, emoji as UI icons.
- Square buttons or buttons with small radii.
- Two atmospheres in the same project.
- Large shadows in dark.
- Everything inside cards.
- Agency copy, lorem ipsum, or invented projects, clients and metrics.
- Copying logos, names, copy or pieces from Dominik Tyka or Figura.

---

## 16. Pending

- [ ] Real role, positioning and copy.
- [ ] Final logo and monogram.
- [ ] Real projects for the portfolio.
- [ ] Figma shot templates for the three setups.
- [ ] Final domain, to use absolute URLs in `llms.txt`.
