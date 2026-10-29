---
name: agustinoberg-design
description: Agustín Oberg's design language, exactly. Monochrome, product-first visuals with two-tone headlines, big tabular numbers, pill buttons, floating concentric glass sheets, progressive and edge blur, blur-swap state changes, a precise motion vocabulary and light and dark mode as equals. The rules fix the hand, not the layout - every project writes its own direction so no two look alike. Use it whenever something must look, move or read like Agustín Oberg designed it, such as a screen, component, website, design system, deck or Dribbble shot, or when the user says "my design", "my style", "mi diseño", "mi marca", "mis guías de diseño" or "agustin oberg". It ships tokens for the web (CSS) and React Native, code for every signature pattern and a visual pre-flight. To build a whole product or app, also load agustinoberg-product.
license: MIT
metadata:
  author: agustín oberg
  version: 1.1.0
---

# Agustín Oberg · design language

People don't read interfaces, they feel them. This skill is the exact definition of how Agustín Oberg designs:
- **Frame:** a quiet monochrome frame where the product is the hero.
- **Depth:** made of light and blur, not lines.
- **Motion:** it explains where things come from and where they go.
- **Modes:** light and dark designed together.
- **Detail:** the small stuff (a 6 px blur, a 0.97 press, 280 ms instead of 420) is the product.

This skill answers **what it looks, moves and sounds like**. To build a whole product (flows, navigation, states, verification), load the `agustinoberg-product` skill as well. When a product comes with its own design references, those lead the visuals and this skill provides "Agustín's touch": a few portable signature details, defined in agustinoberg-product.

Values live in:
- `assets/tokens.css` (web);
- `assets/react-native/theme.ts` (React Native);
- `assets/tokens.json` (everything else).

## Same hand, different work

The laws fix the hand: tokens, type, shape, depth, both modes, motion and voice. They don't fix a layout. Composition, section rhythm, where the scale lives, density, color story, imagery, navigation shape, motion temperament and the signature moment are decided per project, from its content. The design site and the default recipes are one instance of the language, not its template. If a new piece looks like a previous one with other words, it failed. The full rules are in section 4, "Range", of `references/philosophy-and-decisions.md`.

## How to use it

1. Read `references/philosophy-and-decisions.md` once per task. It has the identity, the philosophy, every decision with its reason, the if/then rules and the range (fixed vs. free).
2. Read only the other references the task needs (table at the end).
3. **Write the direction before any layout,** in three lines:
   - *Idea:* one sentence about this content the design must express.
   - *Choices:* one pick per free axis, each with a reason from the content.
   - *Signature moment:* the one detail people will remember.
   If the lines would fit any project, rewrite them. For a site, a home or a key screen, sketch 2 or 3 directions that differ on at least 3 axes and pick one, or ask. Show the direction to the user in one short block.
4. **Pick the color story** (spec section 6): the lead hue and the color dial.
   - *Lead hue:* one atmosphere (forest, ember, tide, rouge, iris, flame, or a new one made with the same recipe). Its `glow` is the accent.
   - *Dial:* 0 mono, 1 accent, 2 atmosphere, 3 surface. Choose it from the content and the brand's temperament. Mono is a choice, never the safe default.
   - *Always:* content (photos, 3D objects, avatars, maps) in full color, and categories in the data colors.
   - *Agustín's personal brand* (his site, portfolio, shots): the chrome is mono, and every project shown inside it carries its full color.
5. **Use the tokens for every value.** Never hardcode a color, radius, blur, duration or easing that exists as a token.
6. **Apply the laws below,** then pick the signature details that serve the direction: one leads, a few support it. Never all of them.
7. **Run the visual pre-flight** in `references/review-checklist.md` and look at the result in both modes before calling it done.
8. **Missing content:** if real content is missing (projects, copy, metrics, bio, photos), ask or use visible `[TODO: …]` placeholders. Never invent facts about Agustín or his clients.

## Language laws

Breaking one is a finding to fix, not a style preference.

1. **One family.** Inter Display for everything: 600 for headings, 400–500 for text, negative tracking on large sizes. Geist Mono only for 11 px uppercase labels (+6%).
2. **Small, two-tone statement headlines.** In a hero, a section opener or an empty state, line one in `fg` states and line two in `fg-2` explains. Same size and weight, two lines maximum. Web ≤ 48 px (except display); mobile 22–28. Card, row and block titles are one tone.
3. **The number is the hero.** The key number on a screen (time, money, score) is its biggest element: 600, tabular-nums, −4.5% tracking. Format it like a product: 1.4M, $4.99, 38k.
4. **Both modes, own values.**
   - Light: `bg` #F4F4F4, cards #FFFFFF with a soft shadow.
   - Dark: `bg` #000000, cards #111111 with a 1 px inner top light and no big shadows.
   - Never invert automatically. Never a mid-grey "soft" dark.
5. **Quiet frame, one lead hue, colorful content.** The primary button is `fg` on `bg` and inverts per mode. A product has one lead hue, and its dial decides how much it covers: from one kind of element per screen (dial 1) to whole surfaces (dial 3). Content and data colors are always allowed and never count as a second hue. The personal brand's chrome is mono; its projects are not.
6. **Shape lock:** 8 for stages, 16 for thumbs and inputs, 24 for cards, 32 for sheets, and a pill for every button, chip, toggle and segmented control. Nested surfaces are concentric: inner radius = outer radius − inset. Corners are continuous (squircle) wherever the platform allows.
7. **Depth with light, not lines.** Separate layers with blur, transparency and soft light, never with borders around everything or cards inside cards. Floating surfaces sit off the edge (inset 12) and use glass when an image is behind them.
8. **Quiet frame.** Neutral stages, generous air, the content centered on what matters. One icon family (1.8 stroke, round caps); emoji only as content, never in chrome.
9. **Words are design.**
   - Short, active, concrete.
   - One label per intent ("Book" everywhere, never "Book" / "Reserve" / "Get it").
   - Buttons say exactly what happens.
   - Normal capitalization. Names are written the way their owners write them ("Agustín Oberg", "TraiNow"); nav links, buttons and tabs start with a capital ("Work", "Book a call"); everything else is sentence case. Only mono labels are uppercase. Never lowercase things for style.
   - Flows use `→`.

## Motion vocabulary

These are the values. Where motion goes in a product is decided by the frequency gate in `agustinoberg-product`. In short: signature motion goes on occasional moments, and high-frequency interactions stay native.

| token | value | use |
|---|---|---|
| `ease-out` | `cubic-bezier(.22, 1, .36, 1)` | default: entering, reacting, reveals |
| `ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` | travel, morphs, exits |
| `ease-spring` | `cubic-bezier(.34, 1.56, .64, 1)` | small confirmations only |
| finger-driven (native) | spring `{ duration: 400, dampingRatio: 1 }`, sheets `{ duration: 300, dampingRatio: 0.85 }` | anything a finger moves; pass the release velocity in |
| durations | 120 press · 240 chips, color, blur swap · 280 close · 420 open and morph · 600 numbers · 800 headline reveal | closing is always faster than opening |
| stagger | 120 ms lines · 50 ms list items (max 6) · 30 ms words · 40 ms digits | |
| press | scale 0.97 on buttons and cards · highlight on list rows · opacity on bar buttons | lands on press-in |
| entrances | from scale 0.95–0.96 plus a fade, never from scale 0 | exits leave the way they came |
| haptics | selection on a change · light on press or snap · success or error on outcomes | one per action, never on scroll |

Text never starts invisible and never moves while it's being read. Under reduced motion, there's no travel, scale or blur: use 120 ms crossfades, stop loops and keep haptics.

## Signature details

These are what make it recognizably his. Specs are in `references/micro-and-motion.md`; code is in the implementation references.

| detail | where | essentials |
|---|---|---|
| Progressive blur | scroll edges, nav, tab bar | 4 stacked layers blurred 1/2/4/8 px, masks 100/75/50/25%, ~72 px band |
| Edge blur | maps, photos, camera | sharp center, 10 px blur toward the edges (radial mask) |
| Floating glass sheet | sheets over imagery | blur 32, saturate 160%, inset 10–12, concentric radius, 1 px inner top light |
| Background recedes | a sheet or modal opens | behind: blur 10, scale 0.96, opacity 0.6 |
| Blur swap | a state changes in place | out: opacity 0, blur 6, scale 0.96; in: the reverse; 240 ms |
| Words arrive | AI replies, confirmations | per word: opacity 0.15→1, blur 4→0, y 4→0; 30 ms stagger |
| Shimmer | text loading states | gradient sweep, 2.2 s linear loop |
| Layered depth | product and hero screens | huge blurred word behind, sharp object in front, contact shadow below |
| Number roll | a value changes | digits roll with 1.5 px blur while moving; 600 ms, 40 ms per digit |
| Button → check | an action with a result | label blurs out, pill shrinks to a 52 px circle, check springs in, success haptic |
| Island pill | live activity | pill grows to a card: width, height and radius together, 420 ms |
| Elastic toggle | switches (web; the native iOS Switch already does it) | thumb stretches 28→36 px while pressed |
| Live dot | live, pending, recording | pulse ring scale 1→2.6, fading out, 1.6 s |

Hard limits:
- Outside glass, blur never exceeds 10 px.
- No micro-animation lasts longer than 420 ms.
- The only loops are shimmer and live dots, and only while that state lasts.

## Never

- Purple-to-blue gradients, mesh-gradient heroes, heavy glassmorphism (blur > 40, thick white borders), neon glows.
- Perspective mockups, hands holding phones, emoji as UI icons, three icon families.
- Square or barely rounded buttons. Borders around everything. Cards inside cards.
- Big shadows in dark mode, or a mid-grey dark background.
- Two lead hues in one product, or a colored chrome in Agustín's personal brand.
- Everything grey by default, content desaturated to look "on brand", or data colors used as decoration.
- Centered-everything layouts with giant hero type.
- The same skeleton in every project (sticky label column, two-tone hero with two buttons, full-width stages) just because it's the default. Start from the direction.
- Lowercase names, nav links or titles as a style.
- A serif word injected into a sans headline. The only serif allowed is one optional uppercase eyebrow line for a brand or collection name.
- Agency copy ("innovative solutions", "seamless experiences") or lorem ipsum.
- Invented projects, clients, metrics or quotes.
- Copying logos, names, copy or pieces from the reference designers (Dominik Tyka, Figura). Take the judgment, never the work.

## Which reference to read

| file | load when |
|---|---|
| `references/philosophy-and-decisions.md` | always, once per task (includes the range: what's fixed and what each project decides) |
| `references/foundations.md` | colors, the color dial, content and data color, light/dark, atmospheres, type scale, radii, spacing, layout |
| `references/components.md` | buttons, chips, sheets, toggles, toasts, segmented |
| `references/micro-and-motion.md` | blur effects, micro-animations, timing, screen transitions |
| `references/imagery-and-voice.md` | shots, mockups, brand objects, copy and tone |
| `references/implementation-web.md` | writing web code (HTML/CSS/JS, React, Next.js) |
| `references/implementation-react-native.md` | writing React Native / Expo code |
| `references/review-checklist.md` | the visual pre-flight before you call anything done |
| `references/brand.es.md` | the user writes in Spanish (Spanish translation of the spec; English wins on conflict) |

## Other platforms

Map `assets/tokens.json` one to one:
- **SwiftUI:**
  - Glass → `.ultraThinMaterial` / `.regularMaterial`.
  - `ease-out` → `.timingCurve(0.22, 1, 0.36, 1, duration: 0.42)`.
  - Finger-driven → `.spring(response: 0.35, dampingFraction: 0.85)`.
  - Concentric radius → `ContainerRelativeShape`.
- **Flutter / Compose:** use the same numbers. Blur through `BackdropFilter` / `Modifier.blur`.

If a pattern can't be built on the platform, keep its intent (depth, continuity, origin) with the closest native tool and say so.

## When the user asks for something that breaks a law

The user's explicit request wins. Do it, say which law it departs from, and keep every other law intact.
