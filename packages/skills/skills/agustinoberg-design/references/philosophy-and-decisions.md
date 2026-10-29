<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Philosophy, decisions and rules

## 0. Identity

- **Who:** Agustín Oberg, product designer. Mobile first, with a focus on motion and systems. `[TODO: confirm role, seniority, location and client type]`
- **Positioning (draft):** "Product design and motion for teams that ship."
- **In one line:** monochrome interfaces where the product is the hero, with depth made of light and blur, and precise motion that explains.
- **Source references:** the work of Dominik Tyka (dribbble.com/dominikt) and the studio Figura (figura.digital). Take the judgment, never the pieces: do not reuse their logos, project names, copy or images.
- **Name on screen:** "Agustín Oberg", capitalized like any proper name, Inter Display 650, tracking −3.5%. Temporary monogram: "ao" in a 28 px rounded square (radius 9), inverted (fg on bg). `[TODO: final logo]`

---

## 1. Philosophy

People don't read interfaces. They feel them.

1. **The detail is the product.** Two apps with the same features don't feel the same. The difference lives in 200 ms, in a 6 px blur, in a button that shrinks when you tap it. Most of the time goes there.
2. **Quiet frame, product as the hero.** Neutral backgrounds, restrained type and almost no color around the screen. The quieter the frame, the louder the product.
3. **Depth with light, not lines.** Layers separate through blur, transparency and soft shadows. Borders and boxes divide. Blur creates order without cutting the image.
4. **Motion explains.** Animate to show where something comes from and where it goes. If an animation doesn't answer a question, remove it.
5. **One color per story.** The brand lives in black, white and grays. Each project picks a single color and sticks with it.
6. **Light and dark from day one.** Both modes are designed in parallel. Nothing is inverted automatically.
7. **Words are design too.** Short copy, active voice, zero jargon. If a button needs an explanation, the button is wrong.

---

## 2. Decisions and why

| decision | why | rule |
|---|---|---|
| Buttons are always pills | They read as tappable, fit under the thumb and echo the curve of the phone. | radius 999 · height 40 or 52 |
| Small two-tone headlines | Confidence doesn't need size. Gray builds the hierarchy and leaves large sizes for numbers. | line 1 `fg`, line 2 `fg-2`, same size and weight |
| Huge numbers | Time, money and scores are what people came to see. | 600 · tabular-nums · tracking −4.5% |
| A single sans | Inter Display has optical sizing and tabular figures, and it looks like SF Pro. | Inter Display + Geist Mono only in labels |
| Geist Mono in labels | It marks what is technical and creates order without competing. | 11 px · uppercase · +6% |
| Pure black in dark | On OLED, black disappears, the device blends in and glows gain contrast. | `bg` #000 |
| Light gray in light | Pure white is tiring and doesn't let cards separate. | `bg` #F4F4F4, cards #FFF |
| Blur instead of borders | Glass shows the context and separates without cutting. | blur 20 · saturate 180% · 1 px inner light |
| Floating, concentric sheets | Set off the edge, it reads as a layer. Concentric, it looks like hardware. | inset 12 · radius = outer − inset |
| Ease-out by default | It responds instantly and slows down like a real object. | `cubic-bezier(.22,1,.36,1)` |
| Close faster than open | Whoever closes has already decided. | open 420 ms · close 280 ms |
| One atmosphere per project | A sustained color is remembered. | pick 1 of 4 or make one with the same recipe · never mix |
| Front-facing mockups, no hands | Perspective and hands make the screen smaller. | device ≤ 60% of the height |

---

## 3. If/then rules (apply without thinking)

- **If you design a button:** pill. Primary = `fg` background and `bg` text (it inverts per mode). Secondary = `btn-2`. Over an image or atmosphere = glass. Height 40 (normal) or 52 (main action on the screen). Text 14/600 or 16/600.
- **If you design a statement headline** (a hero, a section opener, an empty state): two lines max. The first in `fg` (it states), the second in `fg-2` (it explains). Weight 600 and negative tracking. No more than 48 px on web unless it is display. On mobile, 22–28. Titles of cards, rows and small blocks are one tone.
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
- **If the project needs color:** pick one atmosphere and use it across the whole project, never in the personal brand.
- **If you're torn between adding and removing:** remove.
- **If you write a name, a nav link or a title:** normal capitalization. Proper names as their owners write them (Agustín Oberg, TraiNow), nav and buttons in title or sentence case (Work, About, Book a call), copy in sentence case. Only mono labels are uppercase.
- **If a layout looks like one you've already made in this language:** change it (section 4).

---

## 4. Range: same hand, different work

The rules above define how my work feels. They don't define a layout. If two projects in my style look like the same template with different words, the language failed. The goal is a family resemblance: you recognize the hand, not the page.

### Fixed: the hand
These never change between projects.
- The tokens: mono scale, semantic colors, type families, radius scale, spacing base, blur limits, curves and durations.
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
| color story | mono · one existing atmosphere · a new atmosphere made with the same recipe · the atmosphere as a whole surface, or only as the accent |
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

### Don't repeat yourself
- My design site (sticky label column on the left, two-tone headline with two buttons in the hero) is one instance of the language, not its template.
- If you know other work in this language (the design site, the portfolio, earlier screens in the project or the conversation), change at least three free axes.
- The same kind of content doesn't mean the same layout. Two portfolios can share no structure at all.

### The test
- Cover the name: can you still tell which project it is? It must be distinct.
- Look at the details: can you tell who designed it? It must be the same hand.

Both answers have to be yes.

---

## 16. Never

- Generic purple-blue gradients, overdone glassmorphism (blur above 40 or thick white borders).
- Perspective mockups, hands holding the phone, emoji as UI icons.
- Square buttons or buttons with small radii.
- Two atmospheres in the same project.
- Large shadows in dark.
- Everything inside cards.
- The same layout in every project. If it looks like the design site with other words, start again from the direction.
- Lowercase names, nav links or titles as a style.
- Agency copy, lorem ipsum, or invented projects, clients and metrics.
- Copying logos, names, copy or pieces from Dominik Tyka or Figura.

---

## 17. Pending

- [ ] Real role, positioning and copy.
- [ ] Final logo and monogram.
- [ ] Real projects for the portfolio.
- [ ] Figma shot templates for the three setups.
- [ ] Final domain, to use absolute URLs in `llms.txt`.
