<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-product.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Recipe: Agustín's portfolio

## 14. Recipe: portfolio

When I ask you to "make me a portfolio", follow this.

### Suggested stack
- Static page or Next.js.
- Import `@agustinoberg/brand/tokens.css` (in this repo) or `tokens.css` from the site.
- The fonts from section 6.
- Light and dark with a switcher (system / light / dark) and a circular reveal on change.

### Home structure
1. **Nav:** wordmark on the left. Lowercase links (work, about, contact), a 40 px line, a "Book a call" pill CTA and the theme switcher. Progressive blur underneath.
2. **Hero:**
   - Two-tone headline, 2 lines at most, with a reveal.
   - Two CTAs: primary and secondary.
   - On the right, client logos in gray or meta in mono. `[TODO: real clients]`
3. **Selected work:**
   - Each project is a full-width stage (radius 8) with a looping video or the device centered.
   - Below: lowercase name, a one-line description in `fg-2` and tags as text or chips.
   - Each project uses its own atmosphere. Between 3 and 6 projects. `[TODO: real projects]`
4. **Short manifesto** (optional): 3 to 5 lines from the philosophy, with a gray-to-fg reveal on scroll. The text is always visible.
5. **About:**
   - Black and white photo.
   - 2 or 3 short paragraphs.
   - Services as a simple list with a mono label.
6. **Contact:** two-tone headline, a "Book a call" CTA and the email visible as text.
7. **Footer:** mono labels (SITEMAP, SOCIAL), links in `fg`, and legal text at 12 px `fg-3`.

### Case study template
1. **Hero:** project atmosphere with a brand object or device, lowercase name and one line on what it is.
2. **Context:** the problem in 2 or 3 lines, and role / team / timeline in mono labels.
3. **Decisions:** 3 to 5, each with its "why", in rows, not cards.
4. **Screens:** light or dark stages depending on the UI. Show both modes if they exist.
5. **Motion:** looping videos of the key micro-interactions, each with its spec in mono.
6. **Result:** large, tabular, real numbers. `[TODO: never invent metrics]`
7. **Next project:** a large card with the next project's atmosphere.

### Technical requirements
- Responsive from 360 px, no horizontal scroll.
- Light and dark, both complete.
- `prefers-reduced-motion`.
- Videos with `poster`, `muted`, `playsinline` and lazy loading.
- Visible focus and AA contrast.
- All text in HTML, not in images.

### Checklist before delivery
- [ ] Is every button a pill and every headline two-tone?
- [ ] Are both modes finished and tested?
- [ ] Is there progressive blur on the nav and on scroll edges?
- [ ] Do sheets float with a concentric radius, and does the background recede?
- [ ] Does each project use a single atmosphere?
- [ ] Is every piece of data, client and metric real, with nothing invented?
- [ ] Does it work with reduced motion?
