<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-product.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Work like a studio: apply the design language to any product

## 14. Work like a studio: apply it to any project

I work like a design studio, not like a stamp. Nobody hires a studio to get the studio's brand painted on their product. They hire it for outside eyes, taste trained on many products, a process that turns a vague need into a clear direction, and a finish their own team doesn't have time for. The work must look like the client's product, made with my hands: you recognize the studio by its quality and a few signature details, never by a house look.

### Why a studio, and what it's for
- **Outside eyes:** it sees the product the way a new user does, and says what's confusing.
- **Range:** it has solved this kind of problem in other categories, and brings what works.
- **Process:** it turns opinions into a direction with reasons, so decisions stop being taste fights.
- **Craft:** the last 10% (every state, motion, details, both modes) that makes a product feel trustworthy.
- **Identity:** a product that looks like itself, not like a template and not like the studio.

### Three layers: craft, touch and house style
| layer | what it is | when |
|---|---|---|
| **Craft** | The quality bar: life (real content), every state, both modes with their own values, the motion vocabulary and the frequency gate, micro-blurs, depth with light, copy rules, accessibility and the verification loop. | Every project. It's invisible: people only feel it. |
| **Touch** | 3 to 6 visible signature details that fit the product (list below). | Every project, picked on purpose; never all of them. |
| **House style** | My own look: the mono chrome and its exact values (#F4F4F4, #000, #FAFAFA), Inter Display and Geist Mono, the six atmospheres as they are, the hand accent and my presentation stages. Plus the "Agustín Oberg" wordmark, the "ao" monogram, my positioning and my sample copy. | My own brand; a client who asks for "your style"; or when it wins as one of the proposed directions. Never by default on someone else's product. |

### The process
1. **Brief and discovery.** Who it's for, the problem, the goal and how success is measured, the constraints, and what already exists: brand, logo, colors, type, an app, competitors the client admires or dislikes. Ask; don't assume. Whatever the brief leaves open is the studio's to propose.
2. **Research.** Study the category and its best products (real screens, not memory). Note what users expect, and where every competitor looks the same.
3. **Directions.** Propose 2–3 directions that differ on at least three free axes (section 4). Each one has a name, an idea in one sentence, a palette (lead hue and companion tones), a type voice, a shape character, its source of life and imagery style, a motion temperament, a signature moment and one key screen. Each says why it fits this product. At most one of them is my house style, and only when it fits.
4. **Choose.** The client picks one, or mixes. Recommend one and say why. When the person wants speed, pick it yourself and say which and why.
5. **Design.** Key screens first, then flows, every state and the system (tokens and components). Content first, then layout.
6. **Critique.** Review it the way a studio does before showing it: the craft bar, the touch, the AI tells (section 4) and the screenshot test.
7. **Deliver.** The work, the system and the reasons behind it, plus every `[TODO]` left.

### The visual base
Before designing, check which references exist: a Figma file, screenshots, the client's brand or apps the person wants to follow.

| case | identity | what the studio adds |
|---|---|---|
| **The client has a brand or references** | Theirs leads: typography, colors, radii, icons, illustration and layout. | Craft, and 3–6 touch details that don't override it. |
| **Partial** (for example, only a logo and colors) | Theirs, for what it defines. The studio extends it into a full identity in the same spirit: type voice, companion tones, shape, imagery. | Craft and touch. |
| **Nothing yet** | The studio proposes 2–3 directions built from the product (step 3), and the chosen one becomes its identity. My tokens are the starting kit (radius scale, spacing, motion, blur limits, the atmosphere recipe); the identity decides the rest. | Craft and touch. |
| **My own brand, or "make it in your style"** | My house style. | Everything in this guide. |

Whatever the case, the result has to feel made by my studio: not like my other work, but sharing its care and a few of its details.

### My touch (the portable signature)
These are the details that go on top of any identity without overriding it. The craft ones always apply; from the rest, pick **3 to 6** that fit, never all of them.

- **Craft, always, because they don't touch the visual identity:**
  - My motion vocabulary: ease-out by default, press 0.97, closing faster than opening, the frequency gate.
  - Micro-blurs: progressive blur on scroll edges and bars, the background receding when a sheet opens, blur swaps on state changes, words arriving.
  - Important numbers as the hero, tabular and big.
  - Haptics as punctuation.
  - My copy rules: short, concrete, one label per intent.
  - Complete light and dark.
  - Life: real content first (photos, people, places, objects), shown generously.
- **Touch, when the identity doesn't contradict it:** pill buttons, floating sheets with concentric radius, two-tone headlines (in the product's typeface), layered depth on heroes, the button that turns into a check, photo-tinted surfaces, the reward sheet and the stat trio.
- **Never:** change the client's colors, typography, logo or radius scale. Don't bring my atmospheres, my mono chrome or my fonts into a brand that already has its own.

### Color in products
- The product's palette comes from its brand or its chosen direction. It has **one** lead hue: one of my six atmospheres when it fits (forest, ember, tide, rouge, iris or flame), or, more often for a client, a new one built from the brand or the domain with the same recipe: 4 tones per mode, from the deepest to the glow.
- The accent is that atmosphere's `glow`, in both modes. Text on the accent is #0A0A0A. In CSS: put `.accent-{atmosphere}` on a container and use `.btn--accent`, `.surface--tint` or `.surface--accent`.
- The product picks its **color dial** (section 6). Dial 1 keeps the accent on one kind of element per screen. Dial 2 adds the full atmosphere on key moments and tinted cards. Dial 3 paints whole surfaces in the hue. Choose it from the content and the brand's temperament, not by habit.
- The product names its **2–4 companion tones** and where each one comes from in its world (section 6).
- Content (photos, objects, avatars, maps) is in full color at any dial, screens led by a photo take its tint, and categories use the data colors.
- The generic primary button stays `fg` on `bg`.

### Gather the life first
Before the first screen, list what the product will show: its photos (places, food, products, people), its people (avatars, names), its objects (tickets, medals, plants) and its colored data. Ask the person for real assets. If there are none yet, pick stock photography that fits (`[TODO: replace]` on each) or define one illustration style for the domain's objects. A screen is designed around its content, not filled with it at the end.

### Direction first
Write the direction from section 4 before the first screen: the idea, a pick on each free axis and the signature moment. The recipe below says which patterns each kind of screen uses. Composition, density, scale and imagery come from the direction, so two products built with this recipe shouldn't look alike.

### Recipe: mobile app
Suggested stack: Expo / React Native with Reanimated and expo-blur (or Skia for progressive blur). On the web: import `tokens.css`.

| screen | default pattern |
|---|---|
| onboarding | Full atmosphere, the product's real content or a brand object with contact shadow, two-tone headline and a single CTA. |
| home / explore | Content leads: large photo cards (radius 24) with faces on them, or a full-color map with photo pins and edge blur. Sentence-case section headers, floating pills on top, a peeking card at the bottom and a glass tab bar with progressive blur. |
| detail | A photo with edge blur, or a hero with layered depth, over a background tinted from the photo. The name, the key fact as a big number and a stat trio. |
| profile | The person's photo leads and tints the screen. Stat trio, interests as chips with icons, and their photos or work in a grid. |
| action | Floating concentric sheet with the background receding. Segmented control or calendar inside. |
| confirmation | Button that morphs into a check, arriving text and a success haptic. |
| reward / milestone | Reward sheet: the earned object in full color on a glow, over the receding screen. Share, or Later. |
| in progress | Island pill with a live dot (timer, trip, call). |
| loading | Shimmer on the text and skeletons in `surface-2`. No spinners. |
| empty | An illustrated object or a photo from the domain, two-tone headline and one action. |
| settings | Grouped list in cards, elastic toggles and sentence-case group headers. |

Navigation: push to go deeper, sheets for short tasks and tabs with a crossfade. Both modes from day one, with reduced motion respected.

### Example: travel app
A worked example, not a template. The direction comes first.
- **Idea:** the trip starts before you leave: places and people you can almost touch.
- **Life:** destination photography everywhere, friends' faces on every shared trip, a full-color map, and a ticket stub as the trip's object.
- **Color:** tide leads (sea, flights, trust) at dial 2. If the product is about nature or the outdoors, forest. Companion tones come from each destination: Lisbon gets azulejo blue, terracotta and sand; Kyoto, moss, vermilion and paper. The photos bring the rest.
- **Type voice:** SF Pro on iOS, with an editorial serif only for destination names.
- **Home:** the user's face and a greeting, then "Upcoming trips" as large photo cards with the friends going stacked on each and the days left as the number hero. Below, "Open trips" with a photo, a two-line pitch and the spots left. No mono labels, no icon grid, no setup checklist.
- **Map:** full color, with photo pins and avatar stacks, edge blur, and destination cards peeking at the bottom with prices.
- **Destination:** full-bleed photo with edge blur over a background tinted from it, the place name, the price per night as a big number, a stat trio (nights · friends going · flight time) and, at most, one sticker ("NEW") per screen.
- **Book:** floating sheet with dates (segmented control for nights, plus a calendar) and the background receding.
- **Pay:** accent button "Book · $1,240" that morphs into a check. The booking code arrives word by word.
- **Trip in progress:** island pill with a live dot ("Boarding in 0:45").
- **After the trip:** a reward sheet where the trip's ticket stub tilts in over the receding screen, with the city, the dates and a photo. "Share" or "Later".
- **Copy:** short and concrete ("Book", "Change dates"). Place names are capitalized because they're proper nouns.

### Checklist for any project
- [ ] Is there a written direction (idea, free axes, signature moment) that only fits this project?
- [ ] Does every screen carry a source of life, and do home and explore show three or more photos, faces or objects above the fold?
- [ ] Are there 2–4 companion tones, each traceable to the product's world, and none on chrome?
- [ ] Zero AI tells (section 4, "Life"): no mono section headers, no icon-tile grid as content, no lone gradient card, no grey photo boxes?
- [ ] Would someone screenshot it to send to a friend?
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
