---
name: agustinoberg-design
description: Agustín Oberg's design language, exactly. A quiet frame around content full of life (real photos, faces, places, objects, companion tones), with two-tone headlines, big tabular numbers, pill buttons, floating concentric glass sheets, progressive and edge blur, blur-swap state changes, a precise motion vocabulary and light and dark mode as equals. The rules fix the hand, not the layout - every project writes its own direction and gathers its own content, so no two look alike and none look AI-made. Use it whenever something must look, move or read like Agustín Oberg designed it, such as a screen, component, website, design system, deck or Dribbble shot, or when the user says "my design", "my style", "mi diseño", "mi marca", "mis guías de diseño" or "agustin oberg". It ships tokens for the web (CSS) and React Native, code for every signature pattern and a visual pre-flight. To build a whole product or app, also load agustinoberg-product.
license: MIT
metadata:
  author: agustín oberg
  version: 2.0.0
---

# Agustín Oberg · design language

People don't read interfaces, they feel them. This skill is the exact definition of how Agustín Oberg designs:
- **Frame:** a quiet frame so the content can be loud. The content is real: photos, faces, places, objects and color. A quiet frame around an empty screen is just a grey screen, and it reads as AI-made.
- **Depth:** made of light and blur, not lines.
- **Motion:** it explains where things come from and where they go.
- **Modes:** light and dark designed together.
- **Detail:** the small stuff (a 6 px blur, a 0.97 press, 280 ms instead of 420) is the product.

This skill answers **what it looks, moves and sounds like**: the craft, the touch and the house style (below). To build a whole product (brief, directions, flows, states, verification), load the `agustinoberg-product` skill as well: it works like a studio, where the client's identity leads and this skill adds the craft and a few signature touches.

Values live in:
- `assets/tokens.css` (web);
- `assets/react-native/theme.ts` (React Native);
- `assets/tokens.json` (everything else).

## Same hand, different work

The laws fix the hand: tokens, shape, depth, both modes, motion and voice. They don't fix a layout. Composition, section rhythm, where the scale lives, density, color story (lead hue, dial, companion tones), source of life, type voice, imagery, navigation shape, motion temperament and the signature moment are decided per project, from its content. The design site and the default recipes are one instance of the language, not its template. If a new piece looks like a previous one with other words, it failed. The full rules are in section 4, "Range and life", of `references/philosophy-and-decisions.md`.

## Three layers: craft, touch, house style

Agustín works like a design studio: a client gets their own product, made with his hands, not his brand painted on it. This skill holds three layers, and they don't all apply everywhere:
- **Craft** (every project, invisible): life, every state, both modes with their own values, the motion vocabulary, micro-blurs, depth with light, copy, accessibility, verification. Laws 7, 8 and 9, the principle of law 4, the motion vocabulary and the hard limits.
- **Touch** (every project, 3–6 visible details that fit): pills, two-tone headlines, the number as hero, concentric floating sheets, progressive and edge blur, blur swaps, button → check, photo tint, stat trio, reward sheet, layered depth. Laws 2, 3 and 6.
- **House style** (Agustín's own brand; a client who asks for "his style"; or when it wins as one of the proposed directions): Inter Display and Geist Mono, the mono chrome and its exact values, the six atmospheres as they are, the hand accent and his presentation stages. Law 1's fonts, law 4's hex values and law 5's palette as written.

For someone else's product, the identity (palette, type voice, shape character, imagery) comes from their brand or from the directions the studio proposes in `agustinoberg-product`. This skill's tokens are then the starting kit, not the answer.

## Why designs come out bland, and how not to

Followed literally, the rules alone produce grey cards, mono labels, one lavender gradient and an icon grid: technically correct, lifeless, obviously AI. The rules are the frame; **the content is the design.** Before any layout, gather what the screen will show (photos, people, places, objects, colored data) and the product's companion tones. Then check the result against the "Tells that a design was made by AI" list in section 4 and the screenshot test: would someone screenshot this to send to a friend?

## How to use it

1. Read `references/philosophy-and-decisions.md` once per task. It has the identity, the philosophy, every decision with its reason, the if/then rules and the range and life (fixed vs. free, and what keeps work from looking AI-made). Then decide which layers apply: craft and touch always; the house style only for Agustín's brand or when asked.
2. Read only the other references the task needs (table at the end).
3. **Write the direction before any layout,** in three lines:
   - *Idea:* one sentence about this content the design must express.
   - *Choices:* one pick per free axis, each with a reason from the content.
   - *Signature moment:* the one detail people will remember.
   Build the idea from facts only this product has, then run the competitor test: put the nearest competitor's name in the sentence; if it still works, rewrite it. Name the category default you refuse. For a site, a home or a key screen, sketch 2 or 3 directions that differ on at least 3 axes and pick one, or ask. Show the direction to the user in one short block, and save it to `DESIGN.md` in a project with files.
4. **Gather the life** (spec section 4, "Life"), before any layout:
   - *Content:* list the photos, people, places, objects and colored data each screen will show. Ask for real assets. If there are none, use real stock photography (Unsplash, Pexels) marked `[TODO: replace]`, or define one illustration style for the domain's objects. Never grey boxes, flat gradients or initials standing in for photos and faces.
   - *Density:* a home or explore screen shows three or more photos, faces or objects above the fold.
5. **Pick the color story** (spec section 6): the lead hue, the color dial and the companion tones.
   - *Lead hue:* one atmosphere (forest, ember, tide, rouge, iris, flame, or a new one made with the same recipe). Its `glow` is the accent.
   - *Dial:* 0 mono, 1 accent, 2 atmosphere, 3 surface. Choose it from the content and the brand's temperament. Mono is a choice, never the safe default.
   - *Companion tones:* 2–4 softer tones from the product's world (Lisbon: azulejo blue, terracotta, sand). Name where each comes from. They fill illustrations, object backgrounds, tags and tiles, never chrome or buttons.
   - *Always:* content (photos, 3D objects, avatars, maps) in full color, screens led by a photo tinted by it, and categories in the data colors.
   - *Agustín's personal brand* (his site, portfolio, shots): the chrome is mono, and every project shown inside it carries its full color.
6. **Use the tokens for every value.** Never hardcode a color, radius, blur, duration or easing that exists as a token.
7. **Apply the laws below,** then pick the signature details that serve the direction: one leads, a few support it. Never all of them.
8. **Run the visual pre-flight** in `references/review-checklist.md`, including the life counts and the AI tells, look at the result in both modes, and score it like a juror who didn't build it (section 8 there). Ship at 8 or more.
9. **Missing content:** if real content is missing (projects, copy, metrics, bio, photos), ask or use visible `[TODO: …]` placeholders. Never invent facts about Agustín or his clients. For a fictional product's demo content, real stock photos marked `[TODO: replace]` are fine; invented facts about real people are not.

## Language laws

Breaking one is a finding to fix, not a style preference. On a product with its own identity, the house-style parts (fonts, exact hex values, the six atmospheres as is) give way to that identity; everything else holds.

1. **One family for the hand, a voice per product.** Inter Display by default and always in Agustín's brand: 600 for headings, 400–500 for text, negative tracking on large sizes. A product may use its platform's font (SF Pro, SF Pro Rounded, Roboto Flex) or one display face from its content for titles. Geist Mono only for 11 px uppercase technical labels (+6%), never as a product's section headers: those are sentence case, 17–22 / 600, in `fg`.
2. **Small, two-tone statement headlines.** In a hero, a section opener or an empty state, line one in `fg` states and line two in `fg-2` explains, or the reverse when line two is the punchline. Same size and weight, two lines maximum. Web ≤ 48 px (except display); mobile 22–28. Card, row and block titles are one tone. Longer copy uses two-tone paragraphs: narrative in `fg-2`, turning points in `fg`.
3. **The number is the hero.** The key number on a screen (time, money, score) is its biggest element: 600, tabular-nums, −4.5% tracking. Format it like a product: 1.4M, $4.99, 38k.
4. **Both modes, own values.**
   - Light: `bg` #F4F4F4, cards #FFFFFF with a soft shadow.
   - Dark: `bg` #000000, text #FAFAFA, cards #111111 with a 1 px inner top light and no big shadows. The stage is tonal (#111111), never a light panel on black.
   - Never invert automatically. Never a mid-grey "soft" dark.
5. **Quiet frame, one lead hue, colorful content.** The primary button is `fg` on `bg` and inverts per mode. A product has one lead hue, and its dial decides how much it covers: from one kind of element per screen (dial 1) to whole surfaces (dial 3). Around it, 2–4 companion tones from the product's world. Content and data colors are always allowed and never count as a second hue. Among options, the hue paints only the recommended one. The personal brand's chrome is mono; its projects are not.
6. **Shape lock:** 8 for stages, 16 for thumbs and inputs, 24 for cards, 32 for sheets, and a pill for every button, chip, toggle and segmented control. Nested surfaces are concentric: inner radius = outer radius − inset. Corners are continuous (squircle) wherever the platform allows.
7. **Depth with light, not lines.** Separate layers with blur, transparency and soft light, never with borders around everything or cards inside cards. Floating surfaces sit off the edge (inset 12) and use glass when an image is behind them.
8. **Life first.** Every screen carries real content: a photo, a face, a place, an object or colored data. Homes and explore screens show three or more above the fold. Photos are large and rounded or full bleed; objects tilt slightly and cast a contact shadow; a screen led by a photo takes its tint. Neutral stages, generous air, one icon family (1.8 stroke, round caps); emoji and 3D only as content, never in chrome. If a screen feels empty, add content, never chrome.
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
| durations | 120 press · 240 chips, color, blur swap · 280 close · 420 open and morph · 600 numbers · 800 headline reveal and stages rising | closing is always faster than opening; weight sets the speed |
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
| Rise by mass | stages, images, gallery tiles on scroll | y 32→0 and fade, 800 ms ease-out, no blur, no bounce, once |
| Photo tint | a screen led by a photo | background takes the photo's color: 14% in light, 30% in dark |
| Reward sheet | streaks, badges, milestones | earned object in full color on a glow, over the receding screen; Share or Later |
| Uniform series | galleries, case studies, portfolios | same 6:5 tile, stage, device and scale; 2–3 screens telling a flow |
| Hand note | one or two per page, never in product chrome | Caveat 500 in a `btn-2` pill or loose, optional −3° |

Hard limits:
- Outside glass, blur never exceeds 10 px.
- No micro-animation lasts longer than 420 ms. Headline reveals and stages rising take 800 ms because they're big, not micro.
- The only loops are shimmer and live dots, and only while that state lasts.

## Never

- Purple-to-blue gradients, mesh-gradient heroes, heavy glassmorphism (blur > 40, thick white borders), neon glows.
- Perspective mockups, hands holding phones, emoji as UI icons, three icon families.
- Square or barely rounded buttons. Borders around everything. Cards inside cards.
- Big shadows in dark mode, or a mid-grey dark background.
- Two lead hues in one product, or a colored chrome in Agustín's personal brand.
- Everything grey by default, content desaturated to look "on brand", or data colors used as decoration.
- **The AI tells:** a screen with no photo, face, place, object or colored data; mono uppercase section headers in a consumer app ("UP NEXT"); a giant "Home" title; a grid of equal icon tiles as the main content; one lavender gradient card as the only color; everything in white cards on grey; a setup checklist where the content should be; grey boxes or flat gradients standing in for photos.
- Companion tones on buttons, nav or tabs, or tones you can't trace to the product's world.
- A gallery whose tiles change size, device, scale or stage from one to the next.
- Centered-everything layouts with giant hero type.
- The same skeleton in every project (sticky label column, two-tone hero with two buttons, full-width stages) just because it's the default. Start from the direction.
- Lowercase names, nav links or titles as a style, or Title Case Everywhere.
- A serif word injected into a sans headline. The only serif allowed is one optional uppercase eyebrow line for a brand or collection name, or a product's chosen display face for its titles.
- More than two hand notes on a page, or the hand accent in product chrome or on buttons.
- Agency copy ("innovative solutions", "seamless experiences") or lorem ipsum.
- Invented projects, clients, metrics or quotes.
- Copying logos, names, copy, illustrations or pieces from the reference designers (Dominik Tyka, Figura, Revmp Studio). Take the judgment, never the work.

## Which reference to read

| file | load when |
|---|---|
| `references/philosophy-and-decisions.md` | always, once per task (includes the range and life: what's fixed, what each project decides, the sources of life and the AI tells) |
| `references/foundations.md` | colors, the color dial, companion tones, the featured option, content and data color, light/dark, atmospheres, type scale and type voice, the hand accent, radii, spacing, layout |
| `references/components.md` | buttons, chips, sheets, toggles, toasts, segmented, featured option, stat trio, photo card, reward sheet, note |
| `references/micro-and-motion.md` | blur effects, micro-animations, timing, screen transitions |
| `references/imagery-and-voice.md` | uniform series, three-screen flows, stages, before → after, brand objects, copy and tone |
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
