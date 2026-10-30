# Visual review: does it look, move and read like Agustín?

Run this before calling anything done. For whole products, the `agustinoberg-product` skill adds the product checks (navigation, states, verification on devices).

## 1. Visual pre-flight (mechanical)

Count these. A failed count is a fix, not a judgment call.

| count | must be |
|---|---|
| lead hues | 1 for a product; 0 in the personal brand's chrome |
| screens without a source of life (photo, face, place, object or colored data) | 0 |
| home or explore screens with fewer than 3 photos, faces or objects above the fold | 0 |
| grey boxes, flat gradients or initials standing in for photos and faces | 0 |
| AI tells from spec section 4 (mono section headers in a product, giant "Home" title, icon-tile grid as content, a lone gradient card, a setup checklist as content) | 0 |
| companion tones | 2–4 per product, each traceable to its world; 0 on buttons or chrome |
| options (plans, tiers) where the hue paints more than the recommended one | 0 |
| gallery tiles that differ in ratio, stage, device or scale | 0 |
| hand notes per page | 0–2, none in product chrome |
| data categories that change color between screens, or data colors used as decoration | 0 |
| photos, objects or avatars desaturated or tinted to match the frame | 0 |
| corner radii outside {8, 16, 24, 32, pill, concentric} | 0 |
| buttons, chips, toggles or segmented controls that aren't pills | 0 |
| statement headlines (hero, section opener, empty state) that aren't two-tone, or headlines longer than two lines | 0 |
| names, nav links, buttons or titles lowercased for style | 0 |
| fonts beyond Inter Display, Geist Mono and Caveat (the product's chosen type voice and one optional serif eyebrow excepted) | 0 |
| borders used to separate sections, or cards inside cards | 0 |
| blur above 10 px outside glass surfaces | 0 |
| gradients without an atmosphere reason (purple-blue, mesh heroes, glows) | 0 |
| emoji or mixed icon families in UI chrome | 0 |
| labels that say the same intent in different words | 0 |
| animations over 420 ms (except the 600 ms number roll, the 800 ms headline reveal and the 800 ms rise by mass) | 0 |
| infinite loops besides shimmer and live states | 0 |
| big shadows in dark mode | 0 |
| hardcoded values that exist as tokens | 0 |
| invented facts (projects, clients, metrics, quotes) without `[TODO]` | 0 |

## 2. Distinct, not templated

The language fixes the hand, not the layout (spec section 4, "Range and life").

- [ ] A written direction exists: an idea, a pick per free axis with its reason, and a signature moment. It wouldn't fit another project.
- [ ] Cover the name: you can still tell which project this is.
- [ ] Look at the details: you can tell Agustín designed it.
- [ ] The screenshot test: someone would screenshot it to send to a friend.
- [ ] It doesn't reuse the design site's skeleton (sticky label column, two-tone hero with two buttons) or another project's, unless the direction gives a reason. Against known work in this language, at least 3 free axes changed.
- [ ] One signature moment leads. The other signature details support it, and not all of them are used.

## 3. The look

- [ ] The product, or the key content, is the hero. The frame is quiet and the content is loud: real photos, faces, places, objects or colored data on every screen.
- [ ] Companion tones from the product's world warm the screens around the lead hue, and a screen led by a photo takes its tint.
- [ ] Statement headlines are small and two-tone. The key number is the biggest thing on the screen, tabular.
- [ ] Light: #F4F4F4 page, white cards with a soft shadow. Dark: #000 page, #FAFAFA text, #111 cards with a 1 px top light and no big shadows.
- [ ] Neither mode is an automatic inversion of the other. Each token has its own value.
- [ ] Floating surfaces sit off the edge with concentric radii. Glass only goes over imagery or an atmosphere.
- [ ] One lead atmosphere, at the dial the direction chose, applied the same way on every screen. Dial 1: the accent is on one kind of element per screen. Dial 3: whole surfaces carry the hue with on-accent text.
- [ ] It isn't grey by accident. Content is in full color, and if the result feels flat, the dial or the content is wrong.
- [ ] Generous air. Nothing is centered by default when a left-aligned layout reads better.
- [ ] Mono labels are 11 px uppercase, used sparingly and only where something is technical. Product section headers are sentence case.
- [ ] Presented work is a uniform series: same tile, stage, device and scale, each tile a 2–3 screen flow.

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
| No photos, no faces, no objects: grey cards, icons and text | Gather the life first (spec section 4): real or stock photos marked `[TODO: replace]`, avatars, a full-color map, the domain's objects |
| Mono uppercase section headers ("UP NEXT", "YOUR TRAVELS") in a consumer app | Sentence-case headers, 17–22 / 600, in `fg` |
| A big "Home" title, a setup checklist and a grid of icon tiles | Lead with the content: the next trip's photo with friends on it, the countdown as the number hero |
| One lavender gradient card as the only color | Lead hue at a chosen dial, plus 2–4 companion tones from the product's world, plus the content's own color |
| Every site has the same skeleton (sticky label column, two-tone hero with two buttons, full-width stages) | Write the direction first and change at least 3 free axes (spec section 4) |
| Giant centered hero headline with a gradient | Small two-tone headline, left-aligned, mono frame |
| Purple-to-blue gradient buttons with a glow | Primary is `fg` on `bg`; the accent is the lead atmosphere's glow, at the chosen dial |
| Everything is a card with a border | Remove the borders; separate with space, surface steps and soft light |
| Glassmorphism on every surface | Glass only over imagery or an atmosphere; opaque surfaces elsewhere |
| Gray-on-gray dark mode | Pure black page, #111 cards, #FAFAFA text, `fg-2` for the second line |
| Same shadows in both modes | Shadows in light only; surface steps and a 1 px light in dark |
| Five accent colors | One lead hue; categories use the data colors, content keeps its own |
| Everything black, white and grey, nothing to look at | Add content first (photos, faces, objects), then pick a dial on purpose: tint featured cards (dial 2) or paint surfaces (dial 3) |
| A gallery of mismatched mockups | Uniform series: one 6:5 tile, one stage, one device scale, 2–3 screens per tile |
| Every element animates on load | Frequency gate: animate occasional moments, keep the rest still |
| Bouncy springs on big panels | Springs only for small things or finger-driven motion |
| Emoji as section icons | One line icon family, or no icon |
| "Get started" / "Start now" / "Begin" | Pick one label per intent |
| Lorem ipsum, fake logos, fake metrics | Visible `[TODO: …]` placeholders, or ask |

## 8. Score it like a juror who didn't build it

The counts above are pass or fail. This decides whether it's good. Score each part from 1 to 10, then weight them.

| part | weight | what it asks |
|---|---|---|
| design | 40% | Hierarchy, rhythm, type, color and finish in both modes. Does it look expensive? |
| usability | 30% | Can a new person do the main task without thinking? Are the states and copy clear? |
| originality | 20% | Does the idea come from this product? Would it survive the competitor test? |
| content | 10% | Real photos, faces, places, objects and copy, shown generously. |

Caps override the math:
- Any AI tell from spec section 4 still on screen: the total is at most 6.5.
- A direction that would still work with a competitor's name in it: originality is at most 7.
- Missing a mode or a state: the total is at most 6.

Calibration: very good shipped work scores around 7.5 to 8. If your first score is 9 or more, score it again as the juror who didn't build it. Ship at 8 or more. Below that, fix the top three problems and score again, three rounds at most, then report what's left.

