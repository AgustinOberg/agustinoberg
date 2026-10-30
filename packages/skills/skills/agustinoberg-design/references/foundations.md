<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Foundations: modes, color, type, shape

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
