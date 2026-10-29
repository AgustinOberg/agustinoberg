# Visual review: does it look, move and read like Agustín?

Run this before calling anything done. For whole products, the `agustinoberg-product` skill adds the product checks (navigation, states, verification on devices).

## 1. Visual pre-flight (mechanical)

Count these. A failed count is a fix, not a judgment call.

| count | must be |
|---|---|
| lead hues | 1 for a product; 0 in the personal brand's chrome |
| data categories that change color between screens, or data colors used as decoration | 0 |
| photos, objects or avatars desaturated or tinted to match the frame | 0 |
| corner radii outside {8, 16, 24, 32, pill, concentric} | 0 |
| buttons, chips, toggles or segmented controls that aren't pills | 0 |
| statement headlines (hero, section opener, empty state) that aren't two-tone, or headlines longer than two lines | 0 |
| names, nav links, buttons or titles lowercased for style | 0 |
| fonts other than Inter Display and Geist Mono (one optional serif eyebrow excepted) | 0 |
| borders used to separate sections, or cards inside cards | 0 |
| blur above 10 px outside glass surfaces | 0 |
| gradients without an atmosphere reason (purple-blue, mesh heroes, glows) | 0 |
| emoji or mixed icon families in UI chrome | 0 |
| labels that say the same intent in different words | 0 |
| animations over 420 ms (except the 600 ms number roll and 800 ms reveal) | 0 |
| infinite loops besides shimmer and live states | 0 |
| big shadows in dark mode | 0 |
| hardcoded values that exist as tokens | 0 |
| invented facts (projects, clients, metrics, quotes) without `[TODO]` | 0 |

## 2. Distinct, not templated

The language fixes the hand, not the layout (spec section 4, "Range").

- [ ] A written direction exists: an idea, a pick per free axis with its reason, and a signature moment. It wouldn't fit another project.
- [ ] Cover the name: you can still tell which project this is.
- [ ] Look at the details: you can tell Agustín designed it.
- [ ] It doesn't reuse the design site's skeleton (sticky label column, two-tone hero with two buttons) or another project's, unless the direction gives a reason. Against known work in this language, at least 3 free axes changed.
- [ ] One signature moment leads. The other signature details support it, and not all of them are used.

## 3. The look

- [ ] The product, or the key content, is the hero. The frame is quiet.
- [ ] Statement headlines are small and two-tone. The key number is the biggest thing on the screen, tabular.
- [ ] Light: #F4F4F4 page, white cards with a soft shadow. Dark: #000 page, #111 cards with a 1 px top light and no big shadows.
- [ ] Neither mode is an automatic inversion of the other. Each token has its own value.
- [ ] Floating surfaces sit off the edge with concentric radii. Glass only goes over imagery or an atmosphere.
- [ ] One lead atmosphere, at the dial the direction chose, applied the same way on every screen. Dial 1: the accent is on one kind of element per screen. Dial 3: whole surfaces carry the hue with on-accent text.
- [ ] It isn't grey by accident. Content is in full color, and if the result feels flat, the dial or the content is wrong.
- [ ] Generous air. Nothing is centered by default when a left-aligned layout reads better.
- [ ] Mono labels are 11 px uppercase, used sparingly.

## 4. The detail layer

- [ ] Scroll edges and sticky bars use progressive blur, never a hard cut.
- [ ] Maps, photos and camera backgrounds use edge blur where UI sits on them.
- [ ] Opening a sheet makes the background recede.
- [ ] State changes in place use a blur swap.
- [ ] Results arrive with intent: words blur in, numbers roll, buttons turn into checks.
- [ ] Presses land on press-in: scale 0.97 on buttons and cards, a highlight on rows.
- [ ] Hard limits hold: blur ≤ 10 px outside glass, micro-animations ≤ 420 ms, loops only for shimmer and live states.

## 5. The voice

- [ ] Copy is short, active and concrete. Buttons say exactly what happens.
- [ ] One label per intent across the whole thing.
- [ ] Capitalization is normal: names as their owners write them, nav and buttons start with a capital, the rest in sentence case. Flows use `→`.
- [ ] No agency words, no lorem ipsum, no invented facts.

## 6. Look at it

Code review alone never finishes visual work.

1. Render it in light and in dark. Web: at 390 px and 1440 px. Native: on a simulator.
2. Screenshot both modes and study the images:
   - alignment and optical centering;
   - the 4 px rhythm;
   - contrast of `fg-2` and `fg-3` text in both modes;
   - nothing clipped.
3. Record the motion and watch it once at full speed and once frame by frame. Look for one-frame flashes, wrong-theme frames and pops.
4. Turn on reduced motion. Everything spatial should become a short crossfade.
5. Fix, then look again. Stop at "can't find a flaw", not at "looks fine".

## 7. Generic AI design, and how to fix it

| symptom | fix |
|---|---|
| Every site has the same skeleton (sticky label column, two-tone hero with two buttons, full-width stages) | Write the direction first and change at least 3 free axes (spec section 4) |
| Giant centered hero headline with a gradient | Small two-tone headline, left-aligned, mono frame |
| Purple-to-blue gradient buttons with a glow | Primary is `fg` on `bg`; the accent is the lead atmosphere's glow, at the chosen dial |
| Everything is a card with a border | Remove the borders; separate with space, surface steps and soft light |
| Glassmorphism on every surface | Glass only over imagery or an atmosphere; opaque surfaces elsewhere |
| Gray-on-gray dark mode | Pure black page, #111 cards, white text, `fg-2` for the second line |
| Same shadows in both modes | Shadows in light only; surface steps and a 1 px light in dark |
| Five accent colors | One lead hue; categories use the data colors, content keeps its own |
| Everything black, white and grey, nothing to look at | Pick a dial on purpose: let content carry color, tint featured cards (dial 2) or paint surfaces (dial 3) |
| Every element animates on load | Frequency gate: animate occasional moments, keep the rest still |
| Bouncy springs on big panels | Springs only for small things or finger-driven motion |
| Emoji as section icons | One line icon family, or no icon |
| "Get started" / "Start now" / "Begin" | Pick one label per intent |
| Lorem ipsum, fake logos, fake metrics | Visible `[TODO: …]` placeholders, or ask |
