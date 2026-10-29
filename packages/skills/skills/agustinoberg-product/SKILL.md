---
name: agustinoberg-product
description: How Agustín Oberg builds a product end to end, such as a mobile app, web app, website, landing page or his own portfolio. It covers studying real products before drawing, flows and navigation grammar, native fidelity, every state, where motion goes (the frequency gate), perceived performance, product recipes (mobile app, travel app example, portfolio) and a verification loop with a definition of done. If the user provides design references (Figma, screenshots, a client brand, apps to follow), they lead the visuals and Agustín's touch is layered on top. Without references, every visual decision comes from the agustinoberg-design skill, which must be loaded either way. Use it when the user asks to build, design or improve an app, product, site, flow or screen set in Agustín Oberg's style, for example "hacé una app de viajes con mis guías", "haceme el portfolio", "build the onboarding" or "make this flow feel native".
license: MIT
metadata:
  author: agustín oberg
  version: 1.1.0
---

# Agustín Oberg · building products

What you ship will sit next to the best products in the world, and people will compare them within seconds. This skill is the method Agustín uses to clear that bar:
- study real products;
- decide the flows;
- build every state;
- put motion only where it earns its place;
- verify until you can't find a flaw.

**This skill is the how. The look comes from the references, or from `agustinoberg-design` when there are none.** Load `agustinoberg-design` either way. It's the full language when there are no references, and the source of Agustín's touch when there are. If it isn't installed, ask the user to install it (`npx skills add AgustinOberg/agustinoberg --skill agustinoberg-design`). Don't improvise a visual language.

## Visual base: references first, then Agustín's design

Before anything else, find out which **design references** exist: a Figma file, screenshots, the client's brand guidelines, or apps the user wants to follow. Ask if it isn't clear.

| case | visual base | what gets added |
|---|---|---|
| **There are references** | The references lead: typography, colors, radii, icons, illustration, layout and density. | **Agustín's touch:** 3 to 6 portable signature details that don't override the references. |
| **Partial references** (for example, only a logo and colors) | The references, for what they define. | agustinoberg-design for everything they don't define. |
| **No references** | agustinoberg-design, fully. | — |

Even with references, the product must feel made by Agustín: not identical to his work, but sharing details with it. The touch is defined in `references/apply-to-product.md` ("My touch"). In short:
- **Always available** (invisible to a brand's identity):
  - his motion vocabulary and frequency gate;
  - micro-blurs (progressive blur on edges and bars, the background receding behind sheets, blur swaps on state changes, words arriving);
  - numbers as heroes;
  - haptics as punctuation;
  - his copy rules;
  - complete light and dark.
- **When the reference doesn't contradict it:**
  - floating concentric sheets;
  - two-tone headlines in the reference's typeface;
  - layered depth on heroes;
  - the button that turns into a check.
- **Never:** change the reference's colors, typography, logo or radius scale, or bring Agustín's atmospheres into a brand that already has a palette.

## The prime directive: study before you draw

Design references set the look. Research sets the structure. Never design a screen type from imagination when you can study how great products solved it.

1. **Study the category and the screen type.** If the Appllama MCP is connected, pull 10–30 real screens of each type you're building (onboarding, explore, detail, checkout, settings…). The `appllama-usage` skill has the research playbooks. If it isn't connected, rely on what you know of the top apps in the category, and say so.
2. **Extract the pattern, not the pixels:**
   - the layout skeleton and the information hierarchy;
   - where the primary action sits;
   - what is a push, a sheet or a modal;
   - how progress, empty and error states are shown;
   - what the copy calls things.
3. **Rebuild it on the chosen visual base.** Use the proven skeleton, in the references' look (plus Agustín's touch) or in Agustín's full language. Never copy a researched product 1:1, and never copy the work of the designers who inspired Agustín's language.

## Workflow

1. **Frame the job.**
   - What the product is and who it's for.
   - The platform (Expo / React Native, web, or both).
   - Whether it's Agustín's personal brand (his portfolio or site) or someone else's product.
   - Which flows are in scope.
   Ask for real content you don't have; use visible `[TODO: …]` placeholders otherwise. Never invent facts, clients, metrics or quotes.
2. **Choose the visual base:** references, partial references or none (see above). Load `agustinoberg-design` and read its philosophy-and-decisions reference. If there are references, also pick the 3 to 6 touch details you'll use and note why each fits.
3. **Write the direction** (agustinoberg-design, spec section 4, "Range"): the idea in one sentence, a pick per free axis with its reason, and the signature moment. It must only fit this product. For a site, a home or a key screen, sketch 2 or 3 directions that differ on at least 3 axes and pick one, or ask. With references, the direction covers whatever they leave open (often composition and the signature moment).
4. **Pick the recipe:**
   - A product: `references/apply-to-product.md`. Choose one atmosphere and the accent rule, then use the mobile recipe's screen patterns. The recipe says which patterns a screen uses; the direction decides how the screen is composed. The travel app is a worked example, not a template.
   - Agustín's portfolio: `references/portfolio.md`. It lists what the portfolio must contain; the direction decides how it looks.
5. **Study** each screen type (prime directive).
6. **Map the flows.** For every screen, write down three things before you build it, using `references/navigation.md`:
   - what it is (push, modal, sheet, overlay or replace);
   - what back does from it;
   - whether it's behind a one-way door.
7. **Build the structure** on the visual base and the direction, following the fidelity laws below.
8. **Build every state** with `references/states-and-performance.md`: loading, empty, error, long content, offline and success.
9. **Place motion** with the frequency gate. Take the values from agustinoberg-design.
10. **Run the pre-flight:**
   - agustinoberg-design's visual counts (its `review-checklist.md`), when there are no references;
   - the reference's own rules, when there are;
   - the product counts below, always.
11. **Run the verification loop** in `references/verification.md`. Fix, relaunch, look again.
12. **Report back briefly:**
    - the visual base (references or Agustín's design), the direction, the touch details used, and the recipe and atmosphere;
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
| with references: overrides of the reference's colors, typography, logo or radius scale | 0 |
| with references: Agustín's touch details present | 3 to 6 |

## Definition of done, per screen

- [ ] Studied real screens of this type and can name the pattern adopted.
- [ ] Built from a written direction that only fits this product; it doesn't look like the design site or a previous project.
- [ ] Navigation decided: what it is, what back does, and one-way doors can't be re-entered.
- [ ] The visual base is respected. With references: their identity is intact and 3 to 6 touch details are present. Without them: agustinoberg-design's laws pass and its visual pre-flight is clean.
- [ ] Light and dark verified on the running app.
- [ ] Safe areas, the Dynamic Island and the home indicator verified (native); 390 px and 1440 px verified (web).
- [ ] Loading, empty, error, long content and offline designed and forced once each.
- [ ] Motion recorded end to end and scrubbed frame by frame: no flashes, no wrong-theme frames, no jumps. Reduced motion verified.
- [ ] Tap targets, contrast and Dynamic Type or zoom pass.
- [ ] No invented content. Every gap is a visible `[TODO]`.

## References

| file | load when |
|---|---|
| `references/apply-to-product.md` | any product: references vs. no references, Agustín's touch, accent rule, mobile recipe, screen patterns, travel app example, checklist |
| `references/portfolio.md` | Agustín's portfolio or personal site |
| `references/navigation.md` | mapping flows: push, replace, modal, sheet, overlay, one-way doors, tabs, deep links |
| `references/states-and-performance.md` | loading, empty, error, offline, optimistic updates, perceived performance, state architecture |
| `references/verification.md` | the verification loop, the motion recording pass, device matrix and per-screen checklist |
