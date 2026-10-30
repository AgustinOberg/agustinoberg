# Agustín Oberg · design language v3.0

> **For AI:** this guide is the source of truth for how I design, for any project in my style (apps, sites, portfolios, presentations or shots), not only my brand. English is the primary language: a Spanish translation lives in `brand.es.md`, and if the two ever differ, this file wins. Read it fully before you design. The rules define the hand, not one layout: section 4, "Range and life", says what stays fixed, what every project decides for itself and what keeps a screen from looking empty or made by AI. Read its "Life" part before the first screen. For someone else's product, follow section 14, "Work like a studio": the client's identity leads, and my craft and touch go on top; my own look (the house style) is only for my brand or when asked. For my portfolio, section 15, "Recipe: portfolio". The exact values are in `tokens.json` and ready to use in `tokens.css`. If anything here conflicts with another source, this guide wins. If you are missing real content (projects, copy, metrics, images), **ask before you invent anything** and use placeholders marked `[TODO]`.

On the site (https://agustinoberg-design.pages.dev for now; later https://design.agustinoberg.com):
- `brand.md`: this file (English, primary). `brand.es.md`: the Spanish translation.
- `tokens.css` and `tokens.json`: every value, per mode.
- `llms.txt`: index for models. `llms-full.txt`: the spec and the tokens in a single file.
- `/` and `/es/`: the visual guide with interactive demos, in English and Spanish.

In the repo: `packages/brand/` (spec and tokens, package `@agustinoberg/brand`), `apps/design/` (the site) and `packages/skills/` (the agent skills).

---

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

## 5. Light and dark

Both modes are first class. By default, follow the system. The person can choose system, light or dark. On web: `data-theme="light|dark"` on `<html>`. With no attribute, it follows `prefers-color-scheme`. To force one part: class `.theme-light` or `.theme-dark`.

| aspect | light | dark |
|---|---|---|
| background (`bg`) | #F4F4F4 | #000000 |
| cards (`surface-1`) | #FFFFFF + soft shadow | #111111 + 1 px inner light |
| inside cards (`surface-2`) | #F0F0F0 | #1F1F1F |
| opaque sheet (`sheet-bg`) | #FFFFFF | #1F1F1F |
| text (`fg` / `fg-2` / `fg-3`) | #0A0A0A / #6B6B6B / #A1A1A1 | #FAFAFA / #8F8F8F / #5C5C5C |
| secondary button (`btn-2`) | #E6E6E6 | #1F1F1F |
| glass (`glass`) | white 68% | white 12% |
| hairline (`line`) | black 7% | white 8% |
| separation | shadow | surface step + hairline |
| atmospheres | pastel with saturated glow | deep with bright glow |
| grain | 5% | 12% |
| photo tint (`.tinted`) | 14% of the photo's color over `bg` | 30% over black |
| device stage (`stage`) | #E8E8E8 | #111111 (tonal: one step above `bg`) |

**Always:**
- Design both modes in parallel.
- Give each token a chosen value per mode.
- Check AA contrast in both.
- In shots, show one mode per shot or cut from light → dark halfway through the loop.

**Never:**
- Mid gray as a dark background.
- Large shadows in dark.
- Leave a mode "for later".
- Use the same glass in both modes.

---

## 6. Color

### Mono scale (same in both modes)
black #000000 · ink-950 #0A0A0A · ink-900 #111111 · ink-800 #1F1F1F · ink-700 #2B2B2B · ink-600 #3D3D3D · ink-500 #5C5C5C · ink-400 #8F8F8F · ink-300 #B8B8B8 · ink-200 #D9D9D9 · ink-150 #E6E6E6 · ink-100 #EDEDED · ink-50 #F4F4F4 · ink-25 #FAFAFA · white #FFFFFF

### Semantic (states only, never decoration)
positive #34C759 · warning #FF9F0A · critical #FF453A

### Atmospheres (one leads each project)
Built as a radial gradient from the top (`a-2` → `a-1` → `a-0`), with a central glow at 38% and grain. Tones 1 and 2 also work as tinted surfaces, and the glow is the accent.

| atmosphere | for | dark (0 / 1 / 2 / glow) | light (0 / 1 / 2 / glow) |
|---|---|---|---|
| forest | sport, outdoor, focus | #07130B / #183021 / #3F7A45 / #8FD68A | #F4F8F3 / #E3EFE0 / #B9DCB3 / #7CC874 |
| ember | time, energy, rest | #0F0A02 / #3D2905 / #B8821A / #FFCF5C | #FBF7EF / #F5E7C8 / #ECCB83 / #E0A730 |
| tide | money, trust, chat | #03081A / #0F2152 / #2F5BD6 / #8FB4FF | #F2F5FC / #DFE7FA / #B3C7F2 / #5B86E8 |
| rouge | social, location, alerts | #14030A / #4A0D24 / #D6245E / #FF8FB4 | #FBF2F5 / #F7DDE6 / #F0B0C6 / #E2557F |
| iris | creativity, AI, talent, night | #0B0719 / #231552 / #6D45E0 / #B9A4FF | #F6F4FD / #E9E3FB / #CBBDF6 / #8C6CF0 |
| flame | intense sport, food, urgency, heat | #140802 / #4A1C08 / #D9531A / #FF9F6B | #FCF5F1 / #F9E3D7 / #F3BC9F / #F2753A |

The hex values for the dark core and the glass come from the CSS of figura.digital, and the soft white and the tonal stage from revmp.studio. The atmosphere values are my own, approximated from the references.

### Color dial (one per project)
The references aren't black and white. Their frames are quiet, but the products inside are full of color: photos, 3D objects, category colors, and sometimes a whole screen in the brand's hue. Each project sets how loud its lead hue is.

| dial | what the lead hue covers | good for |
|---|---|---|
| **0 · mono** | Nothing. Color comes only from content and data. | My personal brand's chrome, tools where the content is already colorful. |
| **1 · accent** | One kind of element per screen: the domain action (Book, Pay), pins or active progress. | Calm, utility and money products. |
| **2 · atmosphere** | The accent, plus the full atmosphere on key moments (onboarding, empty states, big confirmations, heroes) and tinted surfaces (tone 1) for featured cards. | Most consumer products. |
| **3 · surface** | The hue as surface: whole cards, panels, headers or screens in the glow or tone 2, with on-accent text. Mono stays for body text and chrome. | Bold brands, launches, social, sport, games, presentation shots. |

At any dial, the generic primary button stays `fg` on `bg`, and the lead hue is the only brand hue. In CSS, `.accent-{atmosphere}` on a container gives `--accent`, `--accent-1` and `--accent-2`; `.surface--tint` and `.surface--accent` paint a surface. On `.surface--accent`, all text is on-accent (#0A0A0A) and hierarchy comes from size and weight.

**Color picks the recommended option.** When there are options (plans, tiers, sizes), the lead hue paints only the one you recommend, as a soft gradient inside its own ramp (`.surface--featured`). The others stay on `surface-1`. Color says "this one" without a badge. It works at any dial, even 0.

### Companion tones (from the product's world)
A lead hue alone looks sterile; a product's world is never one color. Take 2–4 companion tones from the content: the city, the food, the sport, the material. A Lisbon guide: azulejo blue, terracotta, sand. A running app: track orange, grass, sky. A plant app: leaf, soil, terracotta pot.
- **Where:** illustrations, the backgrounds of objects and collectibles, image placeholders, tags, category tiles and tinted cards.
- **How:** softer than the lead hue. In light, pastel (lightness 85–92%); in dark, deep (lightness 15–25%), with the content on top in full color.
- **Never:** on buttons, nav, tabs or any chrome; never as a second lead. If you can't name the thing in the world a tone comes from, drop it.

### Content color (always allowed)
Photos, video, 3D and brand objects, avatars, illustrations, maps and app icons keep their full color at every dial. They don't count as a second hue. Frame them with mono so they glow; never tint or desaturate them to match.

### Data color (categories only)
When data has categories (health metrics, chart series, tags, map layers, tee colors), each category gets one data color and keeps it everywhere: `--data-forest`, `--data-ember`, `--data-tide`, `--data-rouge`, `--data-iris`, `--data-flame`. The lead hue goes first. In light, they are deeper than the glows so marks reach 3:1; in dark, they are the glows. Use them on dots, icons, bars and small labels, never as big decorative fills. With more than four series, label directly.

---

## 7. Typography

- **Inter Display** (Google Fonts: Inter with the `opsz` axis 14–32) for everything in my brand, and by default.
- **Geist Mono** only for technical labels: specs, metadata and my brand's section labels. Never as a product's section headers.
- **Caveat** (Google Fonts) only for the hand accent below. `[TODO: replace with my own handwriting]`
- **Type voice (products):** a product may speak in its platform's font (SF Pro or SF Pro Rounded on iOS, Roboto Flex on Android) or use one display face that comes from its content, for titles only: rounded for friendly and social, an editorial serif for travel and food, a condensed face for sport. Body text stays a neutral sans. Two-tone headlines, big tabular numbers and the rest of the hand still apply in any voice.

| role | size / weight | tracking | color |
|---|---|---|---|
| display | 56 / 600 (clamp 36–56) | −3% | fg |
| h1 | 40 / 600 | −3% | fg |
| h2 | 28 / 600 | −1.5% to −3% | fg + fg-2 |
| h3 | 22 / 600 | −1.5% | fg |
| section header (product) | 17–22 / 600, sentence case | −1% | fg |
| body | 16 / 400, line height 1.55, ≤ 62 characters (40–50 when centered) | 0 | fg-2 |
| small | 14 / 500 | 0 | fg-2 |
| label | Geist Mono 11 / 400, uppercase | +6% | fg-2 or fg-3 |
| hand | Caveat 20–28 / 500 | 0 | fg or fg-2 |
| numbers | 64–128 / 600, tabular-nums | −4.5% | fg |

Rules:
- Normal capitalization everywhere. Names (people, projects, apps, places) are written the way their owners write them: Agustín Oberg, Mi Huerta, TraiNow. Nav links, buttons and tabs start with a capital (Work, About, Book a call). Headlines, shot titles, posts and copy are in sentence case. Nothing is lowercased for style, and nothing is in Title Case For Style.
- Uppercase is only for mono labels, and the optional serif accent below.
- `→` for flows: `Onboarding → first payment`.
- `®` only if the brand is registered.
- **Two-tone paragraphs:** in longer copy, the narrative sits in `fg-2` and the turning points in `fg` (class `.story` with `.beat`). About one line in four turns white; more than that and nothing stands out.
- **The hand accent:** a handwritten note, like a designer annotating the work: "Before", "After", "Step 1", "this part moves". Caveat 500, in `fg` inside a `btn-2` pill (class `.note`) or loose in `fg-2` next to what it points at, optionally rotated −3°. One or two per page. Never in product chrome, never on buttons, never a paragraph.
- Optional editorial accent: one line in uppercase serif for the name of a brand or collection (seen in the references). One per screen at most, and never on the same screen as the hand accent.

---

## 8. Shape, space and layout

- **Radii:**
  - `r-xs` 8: stage.
  - `r-md` 16: thumbs and inputs.
  - `r-lg` 24: cards.
  - `r-xl` 32: sheets.
  - `r-pill` 999: buttons, chips, toggles and segmented controls.
  - `r-device` 50: iPhone frame at ~270 px wide.
- **Concentric:** inner radius = outer radius − margin. Example: screen 44, sheet 12 from the edge → radius 32.
- **Space (base 4):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 160.
- **Web layout, fixed:**
  - Max width 1280 and gutter 24 (16 on mobile). A layout can go narrower, or full bleed for stages and images.
  - Space between sections from the scale: 96 by default (64 on mobile). Dense layouts can go down to 48; airy ones up to 160.
- **Web layout, default** (one option; the direction decides, see section 4): sections with a mono label in a 200 px sticky left column and the content on the right.
- **Web nav, fixed:** whatever the shape, a nav that stays on screen gets a progressive blur that fades out 36 px below it, links at 14 px with a capital letter, and the theme switcher.
- **Web nav, default** (one option): sticky bar, wordmark on the left, links on the right, and a 40 px line before the last link or CTA. Other shapes: a floating pill, a side index, or no nav on a single page.
- **Cards:** `surface-1`, radius 24, padding 24, `elev-1` + hairline. Use them only where an object needs to be separated. Not everything is a card.
- **Series tiles:** 6:5, `stage` background, radius 8, gap 24 (16 on mobile). Class `.series`.

---

## 9. Components

- **Primary button:** pill, `fg`/`bg`, 600. Hover: 86% mix toward `bg`. Press: scale 0.97.
- **Secondary button:** pill, `btn-2`. Hover: `btn-2-hover`.
- **Glass button:** `glass` + blur 20 + saturate 180% + 1 px inner light. Only over an image or atmosphere.
- **Chip:** 26 px pill, 12/500, `btn-2`. Optional 6 px status dot.
- **Sheet:**
  - Opaque: `sheet-bg`, radius 32, `elev-2` and a 36×5 grabber.
  - Floating over an image: glass, blur 32, saturate 160%, inset 12, concentric radius.
- **Segmented:** `surface-2` pill with an `fg` thumb that travels. Active text is in `bg`.
- **Toggle:** 64×34, 28 thumb that stretches to 36 on press. On = positive.
- **Toast:** `fg`/`bg` pill, bottom center, 1600 ms.
- **Island pill:** black pill, 36 px tall, that grows into a card (radius 32) for live activities.
- **Stage:** `stage` panel, radius 8, device centered.
- **Featured option:** among plans or tiers, the recommended one is `.surface--featured` with on-accent text and an `fg`/`bg` pill. The rest sit on `surface-1`.
- **Stat trio:** three values in a row (`.stat-trio`): label 12/500 in `fg-2` above, value 20–24/600 tabular below, 1 px hairlines between.
- **Photo card:** a photo filling a radius-24 card, the name and place over a soft bottom scrim, and actions as glass pills inside the photo. Stacked avatars when people are involved.
- **Reward sheet:** a floating sheet over the receding screen. The earned object sits centered on a soft glow of the lead hue (optional rays at 6%), with a two-tone title, one primary action ("Share", "Claim") and a quiet secondary ("Later").
- **Note:** the hand accent inside a `btn-2` pill, 44 px tall (`.note`), used as a section label on a page or above before/after tiles.

---

## 10. Micro-blurs and micro-animations

This is the layer that matters most. None of them stands out alone. Together they make the difference.
- Outside of glass, blur never goes above 10 px.
- No micro-animation lasts longer than 420 ms (except loading and live loops). Big things are not micro: headlines reveal in 800 ms and stages rise in 800 ms.

| pattern | where | spec | why |
|---|---|---|---|
| **Progressive blur** | edges of lists, nav, tab bars | 4 layers with 1/2/4/8 px blur and masks at 100/75/50/25% of the height. Height 72 px plus a fade of the background color. Class `.pblur`. | Content leaves gradually, like on iOS. |
| **Edge blur** | maps, photos, camera | Blur 10 px + saturate 110%. Radial mask: sharp up to 40%, full blur at the edge. Class `.edgeblur`. | Depth of field: the eye goes to the center. |
| **Floating glass** | sheets and cards over images | Blur 32, saturate 160%, 55% tint, 1 px inner light and hairline. Inset 10–12 with concentric radius. Class `.float-sheet`. | It reads as a layer and looks like hardware. |
| **Receding background** | when opening a sheet or modal | What is behind: blur 0 → 10, scale 1 → 0.96, opacity 1 → 0.6. 420 ms ease-out to open, 280 to close. | Depth without covering everything in black. |
| **Blur swap** | button and label states | What leaves: opacity → 0, blur → 6, scale → 0.96. What enters does the reverse, at the same time. 240 ms ease-out. Class `.swap`. | The eye reads continuity, not a jump. |
| **Arriving text** | AI responses, confirmations | Per word: opacity 0.15 → 1, blur 4 → 0, y 4 → 0. 420 ms with 30 ms between words. | It feels written live. |
| **Headline reveal** | hero, confirmations | Per line: color fg-3 → fg, y 6 → 0, blur 4 → 0. 800 ms with 120 ms between lines. | It arrives without appearing out of nowhere. |
| **Thinking text** | loading with text | Gradient fg-3 → fg → fg-3, 300% wide, that sweeps across the text in 2.2 s linear, looping. | It says "working" without a spinner. |
| **Layered depth** | product screens, heroes | Giant word in the back (700, opacity 14%, blur 2.5). Sharp object in front. Contact shadow (70% ellipse, blur 4, black at 35%). An optional sticker rotated −4°. | Three planes read as real space. |
| **Growing pill** | calls, timers, live | Width, height and radius together in 420 ms ease-in-out. Content changes with a blur swap in 240 ms, with a 120 ms delay. | It grows from where it already was. |
| **Morphing icon** | add/close, copy | + → × with rotate 45° (240 ms spring). Copy → check with a blur swap, and it returns after 1.4 s. | It confirms without a toast. |
| **Elastic switch** | toggles | The thumb stretches from 28 to 36 on press. It travels in 240 ms spring. | It feels soft under the finger. |
| **Live dot** | live, pending, recording | The ring scales 1 → 2.6 and its opacity goes from 0.55 to 0. 1.6 s ease-out, looping only while the state lasts. | "It's happening" without asking for attention. |
| **Growing underline** | links | 1 px line that grows from left to right in 240 ms ease-out. | Minimal hover feedback. |
| **Rise by mass** | stages, images and gallery tiles entering on scroll | y 32 → 0 and opacity 0 → 1 in 800 ms ease-out. No blur, no bounce, once per element. Class `.rise-in`. | A chip snaps; a stage arrives. Speed that matches size reads as weight. |

---

## 11. Motion

### Principles
1. **Respond instantly:** feedback in under 100 ms.
2. **Enter fast, slow down gently:** ease-out by default. Closing is faster than opening.
3. **Nothing appears out of nowhere:** things enter from where they originate.
4. **One thing at a time:** stagger 120 ms between lines, 50 ms between items (cap of 6) and 30 ms between words.
5. **Text doesn't dance:** it reveals and stays still.
6. **Weight sets the speed:** small things move in 120–240 ms, components in 420, stages and images in 800. The bigger it is, the further and slower it travels, never with a bounce.

### Curves
- `ease-out` `cubic-bezier(.22, 1, .36, 1)`: entrances, responses and reveals.
- `ease-in-out` `cubic-bezier(.65, 0, .35, 1)`: travel, morphs and closing.
- `ease-spring` `cubic-bezier(.34, 1.56, .64, 1)`: small things only.

### Durations
- `dur-1` 120: press and hover.
- `dur-2` 240: chips, toggles, color and blur swaps.
- `dur-exit` 280: close.
- `dur-3` 420: open and morphs.
- `dur-count` 600: numbers.
- `dur-4` 800: headlines.
- `dur-rise` 800: stages and images rising into view (travel `lift-lg` 32 px).

### Catalog
| pattern | spec |
|---|---|
| Tap | scale 1 → 0.97 in 120 ms ease-out. On release, 240 ms spring. Light haptic. |
| Roll a number | Each digit rolls vertically with a 1.5 px blur while it moves. 600 ms ease-out, 40 ms between digits. |
| Change selection | Indicator with translateX in 240 ms ease-in-out. Selection haptic. |
| Confirm | The label leaves with a blur in 120 ms. The button becomes a 52 px circle in 420 ms ease-in-out. The check appears with a spring in 240 ms, with a 420 ms delay. Success haptic. |
| List entrance | opacity 0 → 1, y 12 → 0, blur 2 → 0. 420 ms ease-out, 50 ms between items. |
| Toast | Enters with y 16 → 0 and blur 4 → 0 in 420 ms ease-out. Stays 1600 ms and leaves in 240 ms. |
| Screen change | The new screen enters with x 100% → 0 in 420 ms ease-out. The previous one goes to x −30% with brightness 0.8. Going back is the reverse, in 280 ms. |
| Theme change | Circular reveal with clip-path from the tapped point, 520 ms ease-out. Without support: 420 ms crossfade. |

### Screen transitions
- **push:** 420 ease-out.
- **back:** 280 ease-in-out. With a gesture, it follows the finger.
- **modal:** sheet in 420 ease-out, with the receding background.
- **tab:** crossfade with a 4 px blur in 240 ms.
- **shared element:** position, size and radius together in 420 ease-in-out.

### What is not animated
- Text while it is being read.
- Parallax or hijacked scroll.
- Loops in UI, except loading and live states.
- Bounces on large elements.
- Load animations nobody asked for.

### Reduced motion
- No movement, scale or blur.
- State changes become a 120 ms crossfade.
- Numbers show the final value and loops stop.
- Haptics stay.

### Code
React Native with Reanimated and expo-blur:
```ts
import { Easing, withTiming, withSpring, withDelay } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

export const ease = { out: Easing.bezier(0.22, 1, 0.36, 1), inOut: Easing.bezier(0.65, 0, 0.35, 1) };
export const dur = { press: 120, quick: 240, exit: 280, base: 420, count: 600, reveal: 800 };
export const spring = { damping: 16, stiffness: 260, mass: 1 }; // approx. ease-spring; tune by eye

// press
onPressIn:  scale.value = withTiming(0.97, { duration: dur.press, easing: ease.out });
onPressOut: scale.value = withSpring(1, spring);

// sheet + receding background
sheetY.value = withTiming(0, { duration: dur.base, easing: ease.out });
behindScale.value = withTiming(0.96, { duration: dur.base, easing: ease.out });
// background blur: animated <BlurView intensity={...} />, or Skia <Blur blur={10} />

// item i in a list
opacity.value = withDelay(Math.min(i, 5) * 50, withTiming(1, { duration: dur.base, easing: ease.out }));
```
On web, everything is available as variables in `tokens.css` and as classes (`.pblur`, `.edgeblur`, `.float-sheet`, `.swap`, `.shimmer`, `.reveal`, `.words`, `.stagger`, `.live`, `.link`).

### Video for shots
- **Format:** MP4 H.264, 1600×1200 (Dribbble) or 1920×1080 (site).
- **Frames:** 60 fps, real time.
- **Length:** 6 to 10 s, in a perfect loop.
- **Pacing:** pauses of 600 to 800 ms on each key state.
- **Taps:** no cursor. If needed, a 44 px white circle at 25%.

---

## 12. Image and presentation

Work is shown as a series, and a series looks finished when only the screens change.

- **Uniform series:** every tile in a gallery or case study has the same ratio (6:5 on the web, 4:3 on Dribbble), the same device model and scale, the same stage and the same gap (24, or 16 on mobile). No captions inside the tiles.
- **Three-screen flow:** each tile tells a small story with 2–3 devices, left to right: where you are → what you open → what happens. The third is often a sheet or a reward over the receding screen.
- **The stage:** `stage` (light #E8E8E8, dark #111111). One stage per series, whatever the mode of the UI inside: light and dark screens share it.
- **Before → after:** for a redesign, two tiles side by side with a note above each ("Before", "After"). Only with a real earlier version.
- **Brand object:** a 3D object, glossy or tactile (stone, leather, rubber), with the atmosphere's glow or in mono, grain and a contact shadow. For launches, covers and the close of a page.
- **Format:** 4:3 for Dribbble, 6:5 tiles on the web, 16:9 for video.
- **Device:** front-facing iPhone, no perspective. One device takes at most 60% of the tile height; three take at most 75% of its width. Crop at the edge only on purpose, to get closer to a detail.
- **Icons:** 1.8 stroke, with rounded caps. 3D icons or emoji only as content objects (pins, achievements, collectibles), never as UI icons.

---

## 13. Voice

- **Language:** English for the public brand. Spanish for internal documentation.
- **Style:** short sentences, active voice, concrete verbs. No agency jargon ("innovative solutions", "unique experiences").
- **Examples (draft):**
  - hero: "Product design and motion for teams that ship." / "Screens, systems and the small moments between them."
  - about: "I work in prototypes, not decks." / "You see it moving by the end of week one."
  - shot: `Verdant → round summary`
  - post: `Sheet transitions for a booking flow` (one line, no hashtags, with video)
- **Buttons:** say exactly what happens ("Schedule transfer", not "Continue"). Errors say what happened and how to fix it.

---

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

---

## 15. Recipe: portfolio

When I ask you to "make me a portfolio", follow this. It lists what the portfolio must contain, not how it must look: the order, the composition and the presentation come from the direction (section 4). The layout described is one option.

### Suggested stack
- Static page or Next.js.
- Import `@agustinoberg/brand/tokens.css` (in this repo) or `tokens.css` from the site.
- The fonts from section 7.
- Light and dark with a switcher (system / light / dark) and a circular reveal on change.

### Home content
1. **Nav:** the wordmark, links (Work, About, Contact), a "Book a call" pill CTA and the theme switcher, with progressive blur if it stays on screen. Its shape is free: bar, floating pill or side index.
2. **Hero:**
   - Two-tone headline, 2 lines at most, with a reveal.
   - One or two CTAs.
   - Proof, if there is any: client logos in gray or meta in mono. `[TODO: real clients]`
   - What leads is free: the headline, a project already playing, a big number or a brand object. Something alive sits in the first viewport: real app icons as objects, a project's screens or a photo.
3. **Selected work:**
   - Between 3 and 6 projects, each with its own atmosphere. `[TODO: real projects]`
   - Each one shows its name as the project writes it, a one-line description in `fg-2` and its tags.
   - Shown as a uniform series (section 12): the same tile for every project, each with 2–3 of its real screens telling a flow. Missing screens are a `[TODO]`, never invented UI.
   - The arrangement is free: one tile per row, a grid, an index list with a preview on hover, or one project per screen.
4. **Short manifesto** (optional): 3 to 5 lines from the philosophy, as two-tone paragraphs or with a gray-to-fg reveal on scroll. The text is always visible.
5. **The hand** (optional): one or two notes in the hand accent, as section labels or annotations on the work.
6. **About:**
   - Black and white photo.
   - 2 or 3 short paragraphs.
   - Services as a simple list with a mono label.
7. **Contact:** two-tone headline, a "Book a call" CTA and the email visible as text.
8. **Footer:** mono labels (SITEMAP, SOCIAL), links in `fg`, and legal text at 12 px `fg-3`.

### Case study template
1. **Hero:** project atmosphere with a brand object or device, the project's name and one line on what it is.
2. **Context:** the problem in 2 or 3 lines, and role / team / timeline in mono labels.
3. **Decisions:** 3 to 5, each with its "why", in rows, not cards.
4. **Screens:** a uniform series of stages, each a three-screen flow. Show both modes if they exist.
5. **Before → after** (only with a real earlier version): two tiles side by side, each with a note above it.
6. **Motion:** looping videos of the key micro-interactions, each with its spec in mono.
7. **Result:** large, tabular, real numbers. `[TODO: never invent metrics]`
8. **Next project:** a large card with the next project's atmosphere.

### Technical requirements
- Responsive from 360 px, no horizontal scroll.
- Light and dark, both complete.
- `prefers-reduced-motion`.
- Videos with `poster`, `muted`, `playsinline` and lazy loading.
- Visible focus and AA contrast.
- All text in HTML, not in images.

### Checklist before delivery
- [ ] Is there a written direction, and does the result look like a new piece rather than my design site?
- [ ] Is every button a pill and every statement headline two-tone?
- [ ] Is capitalization normal: "Agustín Oberg", Work / About / Contact, project names as they're written?
- [ ] Are both modes finished and tested?
- [ ] Is there progressive blur on the nav and on scroll edges?
- [ ] Do sheets float with a concentric radius, and does the background recede?
- [ ] Does each project use a single lead atmosphere, shown with its real color, at the dial that fits it?
- [ ] Is the work a uniform series, with real screens wherever they exist and a `[TODO]` wherever they don't?
- [ ] Is there something alive in the first viewport, and at most two hand notes on the page?
- [ ] Is every piece of data, client and metric real, with nothing invented?
- [ ] Does it work with reduced motion?

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
