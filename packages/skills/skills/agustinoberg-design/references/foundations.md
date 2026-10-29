<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Foundations: modes, color, type, shape

## 4. Light and dark

Both modes are first class. By default, follow the system. The person can choose system, light or dark. On web: `data-theme="light|dark"` on `<html>`. With no attribute, it follows `prefers-color-scheme`. To force one part: class `.theme-light` or `.theme-dark`.

| aspect | light | dark |
|---|---|---|
| background (`bg`) | #F4F4F4 | #000000 |
| cards (`surface-1`) | #FFFFFF + soft shadow | #111111 + 1 px inner light |
| inside cards (`surface-2`) | #F0F0F0 | #1F1F1F |
| opaque sheet (`sheet-bg`) | #FFFFFF | #1F1F1F |
| text (`fg` / `fg-2` / `fg-3`) | #0A0A0A / #6B6B6B / #A1A1A1 | #FFFFFF / #8F8F8F / #5C5C5C |
| secondary button (`btn-2`) | #E6E6E6 | #1F1F1F |
| glass (`glass`) | white 68% | white 12% |
| hairline (`line`) | black 7% | white 8% |
| separation | shadow | surface step + hairline |
| atmospheres | pastel with saturated glow | deep with bright glow |
| grain | 5% | 12% |
| device stage | #E8E8E8 | #EDEDED (the light stage stays) |

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

## 5. Color

### Mono scale (same in both modes)
black #000000 · ink-950 #0A0A0A · ink-900 #111111 · ink-800 #1F1F1F · ink-700 #2B2B2B · ink-600 #3D3D3D · ink-500 #5C5C5C · ink-400 #8F8F8F · ink-300 #B8B8B8 · ink-200 #D9D9D9 · ink-150 #E6E6E6 · ink-100 #EDEDED · ink-50 #F4F4F4 · white #FFFFFF

### Semantic (states only, never decoration)
positive #34C759 · warning #FF9F0A · critical #FF453A

### Atmospheres (one per project)
Built as a radial gradient from the top (`a-2` → `a-1` → `a-0`), with a central glow at 38% and grain.

| atmosphere | for | dark (0 / 1 / 2 / glow) | light (0 / 1 / 2 / glow) |
|---|---|---|---|
| forest | sport, outdoor, focus | #07130B / #183021 / #3F7A45 / #8FD68A | #F4F8F3 / #E3EFE0 / #B9DCB3 / #7CC874 |
| ember | time, energy, rest | #0F0A02 / #3D2905 / #B8821A / #FFCF5C | #FBF7EF / #F5E7C8 / #ECCB83 / #E0A730 |
| tide | money, trust, chat | #03081A / #0F2152 / #2F5BD6 / #8FB4FF | #F2F5FC / #DFE7FA / #B3C7F2 / #5B86E8 |
| rouge | social, location, alerts | #14030A / #4A0D24 / #D6245E / #FF8FB4 | #FBF2F5 / #F7DDE6 / #F0B0C6 / #E2557F |

The hex values for the dark core and the glass come from the CSS of figura.digital. The atmosphere values are my own, approximated from the references.

---

## 6. Typography

- **Inter Display** (Google Fonts: Inter with the `opsz` axis 14–32) for everything.
- **Geist Mono** only for labels.

| role | size / weight | tracking | color |
|---|---|---|---|
| display | 56 / 600 (clamp 36–56) | −3% | fg |
| h1 | 40 / 600 | −3% | fg |
| h2 | 28 / 600 | −1.5% to −3% | fg + fg-2 |
| h3 | 22 / 600 | −1.5% | fg |
| body | 16 / 400, line height 1.55, ≤ 62 characters | 0 | fg-2 |
| small | 14 / 500 | 0 | fg-2 |
| label | Geist Mono 11 / 400, uppercase | +6% | fg-2 or fg-3 |
| numbers | 64–128 / 600, tabular-nums | −4.5% | fg |

Rules:
- Project names, shot titles and posts in lowercase. Sentence copy in sentence case.
- `→` for flows: `onboarding → first payment`.
- `®` only if the brand is registered.
- Optional editorial accent: one line in uppercase serif for the name of a brand or collection (seen in the references). One per screen at most.

---

## 7. Shape, space and layout

- **Radii:**
  - `r-xs` 8: stage.
  - `r-md` 16: thumbs and inputs.
  - `r-lg` 24: cards.
  - `r-xl` 32: sheets.
  - `r-pill` 999: buttons, chips, toggles and segmented controls.
  - `r-device` 50: iPhone frame at ~270 px wide.
- **Concentric:** inner radius = outer radius − margin. Example: screen 44, sheet 12 from the edge → radius 32.
- **Space (base 4):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 160.
- **Web layout:**
  - Max width 1280 and gutter 24 (16 on mobile).
  - Sections with a mono label in a 200 px left column (sticky) and the content on the right.
  - Space between sections: 96 (64 on mobile).
- **Web nav:**
  - Sticky, with the wordmark on the left and links on the right (lowercase, 14 px).
  - A 40 px line before the last link or CTA, and the theme switcher.
  - Background with a progressive blur that fades out 36 px below the bar.
- **Cards:** `surface-1`, radius 24, padding 24, `elev-1` + hairline. Use them only where an object needs to be separated. Not everything is a card.
