<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-product.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Apply the design language to any product

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
