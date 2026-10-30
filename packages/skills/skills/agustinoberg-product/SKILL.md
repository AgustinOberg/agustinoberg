---
name: agustinoberg-product
description: Agustín Oberg's design studio, building a product end to end (mobile app, web app, website, landing page or his own portfolio). It works like a design agency, not a stamp - brief and discovery, research on real products, 2-3 directions built from the product, the client's choice, design, a studio critique and delivery. The client's brand leads; the studio adds its craft (life, every state, both modes, motion, verification) and 3-6 signature touches; Agustín's own house style only for his brand or when asked. It also covers navigation grammar, native fidelity, the motion frequency gate, perceived performance, product recipes (mobile app, travel app example, portfolio) and a definition of done. Loads agustinoberg-design. Use it when the user asks to build, design or improve an app, product, site, flow or screen set with Agustín's guidelines, for example "hacé una app de viajes con mis guías", "haceme el portfolio", "build the onboarding" or "make this flow feel native".
license: MIT
metadata:
  author: agustín oberg
  version: 2.0.0
---

# Agustín Oberg · the studio method

What you ship will sit next to the best products in the world, and people will compare them within seconds. Agustín works like a design studio: a client doesn't hire a studio to get the studio's brand painted on their product. They hire it for outside eyes, taste trained on many products, a process that turns a vague need into a clear direction, and a finish their own team doesn't have time for. The result looks like **the client's product, made with Agustín's hands.** You recognize the studio by its quality and a few signature details, never by a house look.

This skill is the method. Load `agustinoberg-design` either way: it holds the craft, the touch and the house style. If it isn't installed, ask the user to install it (`npx skills add AgustinOberg/agustinoberg --skill agustinoberg-design`). Don't improvise a visual language, and don't paste the house style onto every product either.

## Three layers

| layer | what it is | when |
|---|---|---|
| **Craft** | The quality bar: life (real content), every state, both modes with their own values, the motion vocabulary and the frequency gate, micro-blurs, depth with light, copy rules, accessibility, verification. | Every project. Invisible: people only feel it. |
| **Touch** | 3 to 6 visible signature details that fit: pill buttons, two-tone headlines in the product's typeface, the number as hero, floating concentric sheets, the button that turns into a check, photo-tinted surfaces, the reward sheet, the stat trio, layered depth. | Every project, picked on purpose; never all of them. |
| **House style** | Agustín's own look: mono chrome and its exact values, Inter Display and Geist Mono, the six atmospheres as they are, the hand accent, his presentation stages, his wordmark and copy. | His own brand; a client who asks for "his style"; or when it wins as one of the proposed directions. Never by default. |

The full definition is in `references/apply-to-product.md` (spec section 14, "Work like a studio").

## The visual base

| case | identity | what the studio adds |
|---|---|---|
| **The client has a brand or references** (Figma, screenshots, guidelines, apps to follow) | Theirs leads: typography, colors, radii, icons, illustration, layout and density. | Craft, and 3–6 touch details that don't override it. |
| **Partial** (for example, only a logo and colors) | Theirs, for what it defines. Extend it into a full identity in the same spirit: type voice, companion tones, shape, imagery. | Craft and touch. |
| **Nothing yet** | Propose 2–3 directions built from the product (workflow step 4); the chosen one becomes its identity. agustinoberg-design's tokens are the starting kit (radius scale, spacing, motion, blur limits, the atmosphere recipe); the direction decides the rest. | Craft and touch. |
| **Agustín's own brand, or "make it in your style"** | The house style, fully. | Everything. |

**Never:** change a client's colors, typography, logo or radius scale, or bring Agustín's atmospheres, mono chrome or fonts into a brand that already has its own.

## The prime directive: study before you draw

Design references set the look. Research sets the structure. Never design a screen type from imagination when you can study how great products solved it.

1. **Study the category and the screen type.** If the Appllama MCP is connected, pull 10–30 real screens of each type you're building (onboarding, explore, detail, checkout, settings…). The `appllama-usage` skill has the research playbooks. If it isn't connected, rely on what you know of the top apps in the category, and say so.
2. **Extract the pattern, not the pixels:**
   - the layout skeleton and the information hierarchy;
   - where the primary action sits;
   - what is a push, a sheet or a modal;
   - how progress, empty and error states are shown;
   - what the copy calls things.
3. **Rebuild it on the chosen identity.** Use the proven skeleton, in the product's identity with Agustín's craft and touch (or in his house style, when that's the base). Never copy a researched product 1:1, and never copy the work of the designers who inspired Agustín's language.

## Workflow

1. **Brief and discovery.** Find out, and ask about whatever isn't clear:
   - what the product is, who it's for, and the problem it solves;
   - the goal and how success is measured;
   - the platform (Expo / React Native, web, or both) and the flows in scope;
   - what already exists: brand, logo, colors, type, an app, real content and assets;
   - products the client admires or dislikes, and why;
   - whether it's Agustín's own brand (his portfolio or site) or someone else's product.
   Ask a few sharp questions at once instead of many in a row. Whatever the brief leaves open is the studio's to propose. Never invent facts, clients, metrics or quotes; use visible `[TODO: …]` placeholders.
2. **Choose the visual base** (table above). Load `agustinoberg-design` and read its philosophy-and-decisions reference.
3. **Research** each screen type and the category (prime directive). Note what users expect and where every competitor looks the same: that's where the product can stand out.
4. **Propose directions.** For a product without an identity, or for a site, a home or a key screen, write 2–3 directions that differ on at least 3 free axes (spec section 4). Show each as a short board:
   - *Name* and *idea*, in one sentence built from facts only this product has. Run the competitor test (spec section 4): put the nearest competitor's name in the sentence; if it still works, rewrite it.
   - *The default it refuses:* what every product in the category does, and why this one doesn't.
   - *Palette:* lead hue (an atmosphere or a new one from the brand or domain), dial and 2–4 companion tones with where each comes from.
   - *Type voice,* *shape character* and *source of life* (photography, people, places, objects, illustration, colored data).
   - *Motion temperament* and *signature moment*.
   - *Why it fits,* and one key screen.
   At most one direction is the house style, and only when it fits. Recommend one and say why, then let the user choose or mix. If they want speed, pick it yourself and say which and why. Save the chosen direction to `DESIGN.md` (or the project's design doc) before the first screen: palette per mode, type voice, shape, sources of life, touch details and the refused default. With client references, the directions cover only what the references leave open (often composition and the signature moment); also pick the 3 to 6 touch details and note why each fits.
5. **Gather the life** (spec section 4, "Life"; `references/apply-to-product.md`, "Gather the life first"). Before any screen, list the photos, people, places, objects and colored data the product will show. Ask the user for real assets. If there are none, pick real stock photography (Unsplash, Pexels) that fits and mark each one `[TODO: replace]` in code, or define one illustration style for the domain's objects. Never ship grey boxes, flat gradients or initials where photos and faces belong. This is the step that keeps the result from looking AI-made: skipping it is how products come out bland.
6. **Pick the recipe:**
   - A product: `references/apply-to-product.md`. Use the mobile recipe's screen patterns. The recipe says which patterns a screen uses; the direction decides how the screen is composed and how it looks. The travel app is a worked example, not a template.
   - Agustín's portfolio: `references/portfolio.md`. It lists what the portfolio must contain; the direction decides how it looks.
7. **Map the flows.** For every screen, write down three things before you build it, using `references/navigation.md`:
   - what it is (push, modal, sheet, overlay or replace);
   - what back does from it;
   - whether it's behind a one-way door.
8. **Design and build** key screens first, then the flows, around the content and on the chosen identity, following the fidelity laws below. Write the copy (headlines, buttons, empty states) before the markup. Set the identity up as tokens (palette per mode, type voice, radii) before the second screen.
9. **Build every state** with `references/states-and-performance.md`: loading, empty, error, long content, offline and success. Feed worst-case content through each screen once: a long hyphenated surname, a long email, "1 members", zero items, a missing photo.
10. **Place motion** with the frequency gate. Take the values from agustinoberg-design.
11. **Studio critique** before showing anything:
   - the craft bar: agustinoberg-design's visual counts (its `review-checklist.md`) for everything the identity doesn't define;
   - the identity's own rules, when it's a client's brand;
   - the touch: 3 to 6 details present, none of them fighting the identity;
   - the AI tells (spec section 4) and the screenshot test;
   - the product counts below;
   - **the score** (agustinoberg-design's `review-checklist.md`, section 8): design 40%, usability 30%, originality 20%, content 10%, with caps. Ship at 8 or more; otherwise fix the top three problems and score again, three rounds at most. When you can, run this critique in a fresh subagent that gets only the brief, the direction and screenshots of both modes, and answers ship, fix or rebuild. A critique done in the same thread says so in its first line.
12. **Run the verification loop** in `references/verification.md`. Fix, relaunch, look again.
13. **Deliver, briefly:**
    - the visual base, the direction chosen (and the ones not chosen, in one line each), the touch details used, the palette with its companion tones, and the type voice;
    - the sources of life per screen, and which images are stock or `[TODO: replace]`;
    - the reference patterns you adopted;
    - the navigation map;
    - the states covered;
    - any rule you broke on purpose, and why;
    - every `[TODO]` left.

## Platform baseline

Override these only if the project already differs.

- **Mobile:**
  - Expo with Expo Router, React Native and TypeScript.
  - `react-native-reanimated` and `react-native-gesture-handler` for motion.
  - `expo-blur` (or Skia) for blur, `expo-haptics`, `expo-image`.
  - `@shopify/flash-list` for any list that can grow, and `react-native-safe-area-context`.
- **Web:**
  - Static HTML or Vite for sites. Next.js (App Router) for apps.
  - agustinoberg-design's `tokens.css` imported first.
  - Real HTML text, never text baked into images.

## Fidelity laws

Breaking one is a finding, not a preference.

1. **Both modes, day one.** Every screen is finished in light and in dark before it counts as done. Resolve theme colors to strings before passing them to animated styles.
2. **Native controls first.** On iOS and Android, use the native Switch, SegmentedControl, date picker, context menu, share sheet and photo picker. Rebuild a control only on the web, with agustinoberg-design's code.
3. **Continuous corners.** `borderCurve: "continuous"` on every rounded rectangle in React Native.
4. **Safe areas are design.** Content scrolls under the status bar and the Dynamic Island with a progressive blur, never a hard cut. Bottom CTAs clear the home indicator. Use insets, never hardcoded notch numbers.
5. **The navigator owns titles and back.** Use the native stack's title and large-title behavior, and the native back gesture.
6. **Lists are virtualized,** with stable keys. Images are right-sized, with placeholders.
7. **Accessible by default.**
   - Tap targets ≥ 44 pt and AA contrast in both modes.
   - Dynamic Type at XL (or browser zoom at 200%) doesn't break the layout.
   - Visible keyboard focus on the web, and reduced motion respected.
8. **Numbers and dates like a product.** Format 1.4M, $4.99 and 38k. Localize dates. Make data people might copy selectable.

## Navigation laws

The summary is below; the full grammar is in `references/navigation.md`.

1. **Push goes deeper; replace moves on.** Back undoes navigation, never events.
2. **Presentation is meaning:**
   - a short interruption (picker, filters, options) is a sheet;
   - a self-contained multi-step task is a modal with its own Cancel and Done;
   - something that floats over a visible screen is an overlay;
   - share, web and photo picking use the system controller.
3. **One-way doors leave the stack.** Finished onboarding, sign-in on a gated app, a completed purchase: land with `replace`, so back can never re-enter them. Keep the user's place when sign-in or a paywall is triggered by a single action.
4. **Tabs are peers.** No slide between tabs. Each tab keeps its own stack, and re-tapping the active tab pops to its root.

## Where motion goes: the frequency gate

The values come from agustinoberg-design. This decides **where** they go.

| how often | motion |
|---|---|
| 100+ times a day (tab switch, scroll, back, keyboard) | the platform default and nothing else |
| tens a day (press, row select, toggle) | near-imperceptible feedback, under 150 ms |
| occasional (sheets, confirmations, toasts, state changes) | agustinoberg-design's signature patterns |
| rare (first launch, a big success) | delight is allowed |

- **Name the purpose** in one word (feedback, continuity, state, origin or delight), or don't build it.
- **Finger-driven motion is a spring with the release velocity.**
- **Everything else is a timing curve.**
- Passing the gate with zero new animation is a success.

## Product pre-flight

Count these alongside agustinoberg-design's visual pre-flight. A failed count is a fix.

| count | must be |
|---|---|
| screens without a source of life (photo, face, place, object or colored data) | 0 |
| AI tells (mono section headers, giant "Home" title, icon-tile grid as content, a lone gradient card, grey photo boxes) | 0 |
| screens without a defined loading, empty and error state | 0 |
| screens whose navigation type and back behavior weren't decided | 0 |
| one-way doors you can go back through | 0 |
| custom-built controls on native where a native one exists | 0 |
| animations on 100+-a-day interactions beyond the platform default | 0 |
| finger-driven animations on fixed timing instead of a velocity spring | 0 |
| tap targets under 44 pt | 0 |
| lists that can grow but aren't virtualized | 0 |
| full-screen spinners for partial updates | 0 |
| invented content without `[TODO]` | 0 |
| screens or sections whose composition was copied from the default recipe, the design site or another project without a reason from the direction | 0 |
| with a client identity: overrides of its colors, typography, logo or radius scale | 0 |
| house-style elements (mono chrome, Inter + Geist Mono, the six atmospheres as is, the hand accent) on someone else's product without being asked or chosen | 0 |
| Agustín's touch details present | 3 to 6 |

## Definition of done, per screen

- [ ] Studied real screens of this type and can name the pattern adopted.
- [ ] The screen is built around real content (or stock marked `[TODO: replace]`), and passes the screenshot test: someone would send it to a friend.
- [ ] Built from a written direction that only fits this product; it doesn't look like the design site or a previous project.
- [ ] Navigation decided: what it is, what back does, and one-way doors can't be re-entered.
- [ ] The visual base is respected: the product's identity is intact (the client's, or the chosen direction's), 3 to 6 touch details are present, and the craft passes agustinoberg-design's visual pre-flight.
- [ ] Light and dark verified on the running app.
- [ ] Safe areas, the Dynamic Island and the home indicator verified (native); 390 px and 1440 px verified (web).
- [ ] Loading, empty, error, long content and offline designed and forced once each.
- [ ] Motion recorded end to end and scrubbed frame by frame: no flashes, no wrong-theme frames, no jumps. Reduced motion verified.
- [ ] Tap targets, contrast and Dynamic Type or zoom pass.
- [ ] No invented content. Every gap is a visible `[TODO]`.

## References

| file | load when |
|---|---|
| `references/apply-to-product.md` | any product: the studio model (why, the three layers, the process), the visual base, Agustín's touch, lead hue, color dial and companion tones, gathering the life, mobile recipe, screen patterns, travel app example, checklist |
| `references/portfolio.md` | Agustín's portfolio or personal site |
| `references/navigation.md` | mapping flows: push, replace, modal, sheet, overlay, one-way doors, tabs, deep links |
| `references/states-and-performance.md` | loading, empty, error, offline, optimistic updates, perceived performance, state architecture |
| `references/verification.md` | the verification loop, the motion recording pass, device matrix and per-screen checklist |
