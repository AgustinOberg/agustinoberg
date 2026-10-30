<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Philosophy, decisions and rules

## 0. Identity

- **Who:** Agustín Oberg, product designer. Mobile first, with a focus on motion and systems. `[TODO: confirm role, seniority, location and client type]`
- **Positioning (draft):** "Product design and motion for teams that ship."
- **In one line:** a quiet frame around content full of life (photos, people, places, objects and color), with depth made of light and blur, and precise motion that explains.
- **Source references:** the work of Dominik Tyka (dribbble.com/dominikt), the studio Figura (figura.digital) and Revmp Studio (revmp.studio), whose finish taught me uniform series, three-screen flows, a soft dark and a human hand. Take the judgment, never the pieces: do not reuse their logos, project names, copy, illustrations or images.
- **Name on screen:** "Agustín Oberg", capitalized like any proper name, Inter Display 650, tracking −3.5%. Temporary monogram: "ao" in a 28 px rounded square (radius 9), inverted (fg on bg). `[TODO: final logo]`

---

## 1. Philosophy

People don't read interfaces. They feel them.

1. **The detail is the product.** Two apps with the same features don't feel the same. The difference lives in 200 ms, in a 6 px blur, in a button that shrinks when you tap it. Most of the time goes there.
2. **Quiet frame, loud content.** Neutral backgrounds and restrained chrome, so the content can be loud: photos, people, places, objects and color. The quieter the frame, the louder the product. A quiet frame around an empty screen is just a grey screen.
3. **Depth with light, not lines.** Layers separate through blur, transparency and soft shadows. Borders and boxes divide. Blur creates order without cutting the image.
4. **Motion explains.** Animate to show where something comes from and where it goes. If an animation doesn't answer a question, remove it.
5. **One color leads each story, and content brings the rest.** The frame lives in black, white and grays so color can be loud where it means something. Each project picks one lead hue and commits to it, sometimes as a sharp accent and sometimes as whole surfaces. Photos, objects, people and data bring their own color on top.
6. **Light and dark from day one.** Both modes are designed in parallel. Nothing is inverted automatically.
7. **Words are design too.** Short copy, active voice, zero jargon. If a button needs an explanation, the button is wrong.
8. **Alive, not sterile.** Every screen shows something from the real world: a photo, a face, a place, an object or data in color. If a screen could belong to any app, it isn't finished.

---

## 2. Decisions and why

| decision | why | rule |
|---|---|---|
| Buttons are always pills | They read as tappable, fit under the thumb and echo the curve of the phone. | radius 999 · height 40 or 52 |
| Small two-tone headlines | Confidence doesn't need size. Gray builds the hierarchy and leaves large sizes for numbers. | line 1 `fg`, line 2 `fg-2`, same size and weight |
| Huge numbers | Time, money and scores are what people came to see. | 600 · tabular-nums · tracking −4.5% |
| A single sans for the hand | Inter Display has optical sizing and tabular figures, and it looks like SF Pro. A product can still speak in its own voice. | Inter Display in my brand and by default · products pick a type voice (section 7) |
| Geist Mono only where it's technical | It marks specs, metadata and my brand's section labels without competing. In a consumer product it reads cold. | 11 px · uppercase · +6% · never as a product's section header |
| Pure black in dark | On OLED, black disappears, the device blends in and glows gain contrast. | `bg` #000 |
| Soft white text in dark | Pure white on pure black glares on large screens. A touch below white keeps the contrast without the vibration. | `fg` #FAFAFA in dark |
| Tonal stage in dark | A light panel on black cuts the page in two. A stage one step above the background holds light and dark UI alike. | `stage` #111111 in dark |
| Light gray in light | Pure white is tiring and doesn't let cards separate. | `bg` #F4F4F4, cards #FFF |
| Blur instead of borders | Glass shows the context and separates without cutting. | blur 20 · saturate 180% · 1 px inner light |
| Floating, concentric sheets | Set off the edge, it reads as a layer. Concentric, it looks like hardware. | inset 12 · radius = outer − inset |
| Ease-out by default | It responds instantly and slows down like a real object. | `cubic-bezier(.22,1,.36,1)` |
| Close faster than open | Whoever closes has already decided. | open 420 ms · close 280 ms |
| One lead hue per project | A sustained color is remembered. | pick 1 of 6 atmospheres or make one with the same recipe · never two leads |
| Color dial, not a color ban | Some products whisper and some shout. Mono with one sharp accent and a screen flooded with the hue are both mine. | dial 0–3 per project (section 6) |
| Content brings its own color | Photos, 3D objects, avatars and data are what people came for. A quiet frame lets them glow. | content and data colors don't count against the lead hue |
| Content first, chrome last | Photos, faces, places and objects make a screen specific and alive. Without them, any app looks like every app. | at least one source of life per screen (section 4) |
| Companion tones | One lead hue alone looks sterile. The product's world (the sea, the food, the track) brings a few softer tones around it. | 2–4 tones from the content · never on buttons or chrome (section 6) |
| Uniform series | A gallery looks finished when every tile matches. Only the screens change. | tiles 6:5 · gap 24 · one stage, one device, one scale |
| Three-screen flows | One screen is a picture; three are a story: where you are, what you open, what happens. | 2–3 devices per tile, left to right |
| Heavy things move slowly | A chip snaps; a stage arrives. Speed that matches size reads as physical. | stages and images rise 32 px in 800 ms |
| Front-facing mockups, no hands | Perspective and hands make the screen smaller. | device ≤ 60% of the height |

---

## 3. If/then rules (apply without thinking)

- **If you design a button:** pill. Primary = `fg` background and `bg` text (it inverts per mode). Secondary = `btn-2`. Over an image or atmosphere = glass. Height 40 (normal) or 52 (main action on the screen). Text 14/600 or 16/600.
- **If you design a statement headline** (a hero, a section opener, an empty state): two lines max. The first in `fg` (it states), the second in `fg-2` (it explains). The order can flip when the second line is the punchline: a grey setup, then the answer in `fg`. Weight 600 and negative tracking. No more than 48 px on web unless it is display. On mobile, 22–28. Titles of cards, rows and small blocks are one tone.
- **If you write more than three lines of copy** (a manifesto, an intro, a story): two-tone paragraphs. The narrative in `fg-2`, the turning points in `fg`, about one line in four. Centered copy keeps a 40–50 character measure.
- **If you title a section inside a product:** sentence case, 17–22 / 600, in `fg` ("Upcoming trips", "For you"). Never a mono label.
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
- **If you start a project:** pick its lead hue (one atmosphere), its color dial (0–3) and 2–4 companion tones from its world. Mono is a choice, not the default.
- **If you start a screen:** decide what brings it to life before the layout: which photo, face, place, object or colored data carries it (section 4, "Life").
- **If you have no real images:** ask for them. If you must move on, use real stock photography marked `[TODO: replace]`, or draw the domain's objects in one illustration style. Never grey boxes or flat gradients standing in for photos.
- **If a photo leads the screen** (a profile, a place, an album): tint the background with the photo's dominant color.
- **If there are photos, 3D objects, avatars or illustrations:** let them be in full color. Don't desaturate content to match the frame.
- **If there are options** (plans, tiers, sizes): the lead hue paints only the recommended one. The others stay neutral.
- **If something is earned** (a streak, a badge, a milestone): show it as an object in full color on a soft glow, in a sheet over the receding screen, with one primary action and a quiet "Later".
- **If a profile or summary has several numbers:** a stat trio. Three values side by side, the label above in `fg-2`, hairlines between.
- **If you present work** (a gallery, a case study, a portfolio): a uniform series of stages, each telling a three-screen flow (section 12).
- **If something large enters on scroll** (a stage, an image, a gallery tile): it rises by mass, slower and further than small things (section 10).
- **If data has categories** (metrics, chart series, tags, map layers): give each category its data color, the same one everywhere in the product.
- **If you design my personal brand's chrome** (nav, type, buttons of my site): mono. The projects shown inside it carry their full color.
- **If you're torn between adding and removing chrome:** remove. **If a screen feels empty:** add content (a photo, a face, an object), never more chrome.
- **If you write a name, a nav link or a title:** normal capitalization. Proper names as their owners write them (Agustín Oberg, TraiNow), nav and buttons in title or sentence case (Work, About, Book a call), copy in sentence case. Only mono labels are uppercase.
- **If a layout looks like one you've already made in this language:** change it (section 4).

---

## 4. Range and life: same hand, different work

The rules above define how my work feels. They don't define a layout. If two projects in my style look like the same template with different words, the language failed. The goal is a family resemblance: you recognize the hand, not the page. What makes each project different, and alive, is its content.

### Fixed: the hand
These carry across every project. The tokens are fixed in my house style and are the starting kit for a product without an identity yet; when a client brings its own brand, its identity replaces the tokens it defines, and the craft and the touch stay (section 14).
- The tokens: mono scale, semantic colors, radius scale, spacing base, blur limits, curves and durations. Inter Display and Geist Mono in my own brand; in products, the type voice is a free axis.
- Pill buttons, concentric radii, depth with light instead of lines, and two-tone statement headlines.
- Light and dark, each with its own values.
- The motion vocabulary, the micro-blurs and their limits.
- The voice rules, and nothing invented.

### Free: the work
Each project decides these from its own content. The options are examples, not a menu to go through in order.

| axis | range |
|---|---|
| composition | editorial single column · asymmetric split · full-bleed stages · index or grid · one screen that behaves like an app · long narrative scroll · one object centered on a stage |
| section rhythm | mono label in a side column · label above the content · numbered chapters · no labels, only space |
| where the scale lives | a huge number · a huge image or object · a giant blurred word behind (layered depth) · nothing big, everything precise |
| density | one idea per viewport ↔ dense index, tables and specs |
| color story | the lead hue (one of six, or a new one with the same recipe), the dial (0 mono · 1 accent · 2 atmosphere · 3 surface) and 2–4 companion tones from the content (section 6) |
| source of life | photography · people · places and maps · objects and collectibles · illustration · colored data (see "Life" below) |
| type voice | my sans (Inter Display) · the platform's font (SF Pro, SF Pro Rounded, Roboto Flex) · a display face from the content, for titles only (section 7) |
| imagery | device on a stage · full-bleed photo with edge blur · brand object · type only · data and diagrams |
| navigation | top bar · floating pill · side index · none (a single page) |
| motion temperament | still and exact · one hero moment · reveals told by scroll (within section 11's limits) |
| signature moment | the one detail people will remember. One leads; two to five support it. |

### Defaults are one answer, not the answer
The layout and nav in section 8, the mobile recipe in section 14 and the portfolio in section 15 are good defaults. Use them only when the content gives no reason to do something else, and ask what the content wants first.

### Direction before pixels
Before any layout, write the direction in three lines:
1. **Idea:** one sentence about this content that the design must express. Example: "a train timetable: precise, rhythmic, all about time".
2. **Choices:** one pick per free axis, each with a reason that comes from the content.
3. **Signature moment:** the one thing people will remember.

If the three lines would fit any project, they are not a direction. Rewrite them. For larger pieces (a site, a home, a key screen), sketch two or three directions that differ on at least three axes, then pick one, or let me pick.

- **The competitor test.** Before the idea, list 8–12 facts that belong only to this product: what its name means, its place, its numbers, its rituals, the things it prints or hands out. Build the idea from them. Then put the nearest competitor's name in the sentence: if it still works, the idea belongs to the category, not to the product. Rewrite it.
- **Name the default you refuse.** Write down what every product in the category does (and its predictable opposite, which is just a second default), and say which one you are not doing and why.
- **Save it.** In a project with files, write the direction to `DESIGN.md` (or the project's design doc) before the first screen, so every later screen reads the same contract.

### Don't repeat yourself
- My design site (sticky label column on the left, two-tone headline with two buttons in the hero) is one instance of the language, not its template.
- If you know other work in this language (the design site, the portfolio, earlier screens in the project or the conversation), change at least three free axes.
- The same kind of content doesn't mean the same layout. Two portfolios can share no structure at all.

### The test
- Cover the name: can you still tell which project it is? It must be distinct.
- Look at the details: can you tell who designed it? It must be the same hand.
- Would someone screenshot it to send to a friend? It must be alive.

All three answers have to be yes.

### Life
A quiet frame only works if what's inside it is loud. Without real content, this language collapses into grey cards, mono labels and one tinted gradient: a screen that looks made by AI and that nobody wants to use. Life isn't decoration. It's the content the product is about, shown generously.

**Sources of life.** Every screen uses at least one. Homes, explore screens, heroes and empty states use two or more.
- **Photography:** places, food, products and people. Large and rounded (radius 20–28) or full bleed with edge blur. Never stamp-sized.
- **People:** real faces in avatars, stacked avatars on anything shared, names next to actions. A product with people in it feels used.
- **Places:** maps in full color (water, parks, streets) with photo pins.
- **Objects:** 3D or illustrated things that belong to the domain, like a ticket, a medal, a plant or a record. Tilted −6° to 6°, with a contact shadow. Collectibles look best in a loose grid.
- **Colored data:** rings, bars, streaks and calendars in data colors.
- **Illustration:** one style per product, in its companion tones.

**Companion tones.** Next to the lead hue, take 2–4 tones from the product's world. A Lisbon guide gets azulejo blue, terracotta and sand; a running app, track orange, grass and sky. They fill illustrations, object backgrounds, image placeholders, tags and category tiles. They're softer than the lead (pastel in light, deep in dark), never on buttons or chrome, and they don't count as a second lead hue.

**Photo-tinted surfaces.** When a photo leads a screen, its dominant color tints what's around it: in dark, the color at 25–35% over black (or the photo itself, blurred at 40 px under a 60% black scrim); in light, a 10–15% wash over `bg`. The screen takes the mood of its content. Class `.tinted` with `--tint`.

**Density.** Above the fold, a home or explore screen shows at least three photos, faces or objects. Text-only lists belong in settings, receipts and logs.

**No real assets yet.** Ask for them first. If you must move on, use real stock photography (Unsplash, Pexels) and mark each one `[TODO: replace]`, or draw the domain's objects in one illustration style. Never grey boxes, never flat gradients standing in for photos, never initials where a face should be in a social product.

**Tells that a design was made by AI.** Fix every one you find:
- A screen with no photo, face, object, map or colored data: only cards, icons and text.
- Mono uppercase labels as section headers in a consumer product ("UP NEXT", "YOUR TRIPS").
- A giant "Home" title as the first thing on the home screen.
- A grid of equal icon tiles (Activity · Place · Expense · Memory) as the main content.
- One lavender or blue gradient card as the only color on the screen.
- Everything in white cards on grey, all with the same weight.
- A setup checklist ("Getting ready · 1 of 6") where the product's content should be.
- Title Case Everywhere, agency copy, and copy that explains instead of doing.
- The first "tasteful" palette that comes to mind (cream, an editorial serif, terracotta, warm light). It's today's AI default: use it only when the content asks for it, and say why.
- Signature details used by habit. Mono labels, big-number heroes, glass and floating pills are on other studios' tell lists when nothing in the content calls for them. Every touch detail needs a reason from the content.

---

## 16. Never

- Generic purple-blue gradients, overdone glassmorphism (blur above 40 or thick white borders).
- Screens with no photo, face, place, object or colored data. Grey boxes or flat gradients standing in for photos.
- Mono uppercase labels as section headers in a consumer product, a giant "Home" title, or a grid of equal icon tiles as the main content.
- Perspective mockups, hands holding the phone, emoji as UI icons.
- Square buttons or buttons with small radii.
- Two lead hues in the same project. Content and data colors are not lead hues.
- Data colors used as decoration, or content desaturated to look "on brand".
- Defaulting to mono because it feels safe. Mono is a dial setting you choose for a reason.
- Large shadows in dark.
- Everything inside cards.
- The same layout in every project. If it looks like the design site with other words, start again from the direction.
- Lowercase names, nav links or titles as a style, or Title Case Everywhere.
- A gallery where tiles change size, device, scale or stage from one to the next.
- Agency copy, lorem ipsum, or invented projects, clients and metrics.
- Copying logos, names, copy, illustrations or pieces from Dominik Tyka, Figura or Revmp Studio.

---

## 17. Pending

- [ ] Real role, positioning and copy.
- [ ] Final logo and monogram.
- [ ] Real projects for the portfolio.
- [ ] Figma shot templates for the three setups.
- [ ] Final domain, to use absolute URLs in `llms.txt`.
- [ ] My own handwriting as a font, to replace Caveat in the hand accent.
- [ ] Raw screenshots of TraiNow, Mi Huerta and LockBox, so every project in the portfolio series shows real screens.
