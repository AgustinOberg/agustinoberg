<!-- Generated from packages/brand/brand.md by packages/skills/scripts/sync/agustinoberg-product.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Recipe: Agustín's portfolio

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
   - What leads is free: the headline, a project already playing, a big number or a brand object.
3. **Selected work:**
   - Between 3 and 6 projects, each with its own atmosphere. `[TODO: real projects]`
   - Each one shows its name as the project writes it, a one-line description in `fg-2` and its tags.
   - The presentation is free: full-width stages with video, a grid, an index list with a preview on hover, or one project per screen.
4. **Short manifesto** (optional): 3 to 5 lines from the philosophy, with a gray-to-fg reveal on scroll. The text is always visible.
5. **About:**
   - Black and white photo.
   - 2 or 3 short paragraphs.
   - Services as a simple list with a mono label.
6. **Contact:** two-tone headline, a "Book a call" CTA and the email visible as text.
7. **Footer:** mono labels (SITEMAP, SOCIAL), links in `fg`, and legal text at 12 px `fg-3`.

### Case study template
1. **Hero:** project atmosphere with a brand object or device, the project's name and one line on what it is.
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
- [ ] Is there a written direction, and does the result look like a new piece rather than my design site?
- [ ] Is every button a pill and every statement headline two-tone?
- [ ] Is capitalization normal: "Agustín Oberg", Work / About / Contact, project names as they're written?
- [ ] Are both modes finished and tested?
- [ ] Is there progressive blur on the nav and on scroll edges?
- [ ] Do sheets float with a concentric radius, and does the background recede?
- [ ] Does each project use a single atmosphere?
- [ ] Is every piece of data, client and metric real, with nothing invented?
- [ ] Does it work with reduced motion?
