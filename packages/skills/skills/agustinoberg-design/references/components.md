<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Components

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
