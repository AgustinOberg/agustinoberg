<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-product.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Apply the design language to any product

## 14. Apply it to any project

This language isn't only for my brand. Use it to design any product in my style: a travel app, a bank, an internal tool. Before you start, separate what carries over from what doesn't.

| | what it includes |
|---|---|
| **Carries over** (without references; with references, only my touch) | Philosophy, decisions, if/then rules, typography, radii, spacing, components, micro-blurs, motion, light and dark, imagery and the quality checklist. |
| **Adapts to the product** | Lead hue (one atmosphere) and color dial, name and logo, copy (in the product's voice, using my writing rules), language, and domain icons and photos. |
| **Only my brand** | The "Agustín Oberg" wordmark, the "ao" monogram, my positioning, my sample copy and the rule that my personal brand's chrome is mono (the projects inside it keep their color). |

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

### Color in products
- The product picks **one** lead atmosphere for its theme (forest, ember, tide, rouge, iris or flame), or creates a new one with the same recipe: 4 tones per mode, from the deepest to the glow.
- The accent is that atmosphere's `glow`, in both modes. Text on the accent is #0A0A0A. In CSS: put `.accent-{atmosphere}` on a container and use `.btn--accent`, `.surface--tint` or `.surface--accent`.
- The product picks its **color dial** (section 6). Dial 1 keeps the accent on one kind of element per screen. Dial 2 adds the full atmosphere on key moments and tinted cards. Dial 3 paints whole surfaces in the hue. Choose it from the content and the brand's temperament, not by habit.
- Content (photos, objects, avatars, maps) is in full color at any dial, and categories use the data colors.
- The generic primary button stays `fg` on `bg`.

### Direction first
Write the direction from section 4 before the first screen: the idea, a pick on each free axis and the signature moment. The recipe below says which patterns each kind of screen uses. Composition, density, scale and imagery come from the direction, so two products built with this recipe shouldn't look alike.

### Recipe: mobile app
Suggested stack: Expo / React Native with Reanimated and expo-blur (or Skia for progressive blur). On the web: import `tokens.css`.

| screen | default pattern |
|---|---|
| onboarding | Full atmosphere, brand object with contact shadow, two-tone headline and a single CTA. |
| home / explore | List or map. Map with edge blur and white pins. Floating pills on top, a peeking card at the bottom and a glass tab bar with progressive blur. |
| detail | Hero with layered depth, or a photo with edge blur. The name, and the key fact as a big number. |
| action | Floating concentric sheet with the background receding. Segmented control or calendar inside. |
| confirmation | Button that morphs into a check, arriving text and a success haptic. |
| in progress | Island pill with a live dot (timer, trip, call). |
| loading | Shimmer on the text and skeletons in `surface-2`. No spinners. |
| empty | Soft atmosphere, two-tone headline and one action. |
| settings | Grouped list in cards, elastic toggles and mono labels for the groups. |

Navigation: push to go deeper, sheets for short tasks and tabs with a crossfade. Both modes from day one, with reduced motion respected.

### Example: travel app
- **Atmosphere:** tide (sea, flights, trust). If the product is about nature or the outdoors, forest. Dial 2: the destination photos bring most of the color, and tide leads the booking action, the empty states and the confirmation.
- **Explore:** map with edge blur, white pins with a photo of the place, and destination cards peeking at the bottom with prices.
- **Destination:** full-bleed photo with edge blur, the place name, the price per night as a big number and, at most, one sticker ("NEW") per screen.
- **Book:** floating sheet with dates (segmented control for nights, plus a calendar) and the background receding.
- **Pay:** accent button "Book · $1,240" that morphs into a check. The booking code arrives word by word.
- **Trip in progress:** island pill with a live dot ("Boarding in 0:45").
- **Copy:** short and concrete ("Book", "Change dates"). Place names are capitalized because they're proper nouns.

### Checklist for any project
- [ ] Is there a written direction (idea, free axes, signature moment) that only fits this project?
- [ ] Does it look like itself, and not like my design site or another project in this language?
- [ ] If there were references, do they lead the visuals, with my touch present in 3 to 6 details that don't override them?
- [ ] One lead atmosphere, with a color dial chosen on purpose and applied consistently?
- [ ] Content in full color, and every data category with one data color everywhere?
- [ ] Two-tone statement headlines, big numbers and pill buttons?
- [ ] Normal capitalization: names as their owners write them, nav and buttons starting with a capital?
- [ ] Floating concentric sheets with the background receding?
- [ ] Progressive blur on bars and scroll edges, and edge blur on maps and photos?
- [ ] Does every state change have its micro-animation (press, blur swap, check)?
- [ ] Complete light and dark, AA contrast and reduced motion?
- [ ] Is nothing from my personal brand (wordmark, monogram, my copy) left in the product?
- [ ] Was no fact, name or metric invented without a `[TODO]` mark?
