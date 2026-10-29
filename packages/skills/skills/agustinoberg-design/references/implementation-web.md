# Web implementation

Copy `assets/tokens.css` into the project and load it before your own styles. It already contains:
- every token, for light and dark;
- the base components: `.headline`, `.label`, `.num`, `.btn` (`--primary`, `--secondary`, `--glass`, `--accent`, `--lg`), `.chip`, `.glass`, `.sheet`, `.stage` and `.atmos--*`;
- color: `.accent-{forest|ember|tide|rouge|iris|flame}` on a container (sets `--accent`, `--accent-1`, `--accent-2`), `.surface--tint` and `.surface--accent` for the color dial, and `--data-{hue}` for categories in charts, metrics and tags;
- the micro layer: `.pblur`, `.edgeblur`, `.float-sheet`, `.swap`, `.shimmer`, `.reveal`, `.words`, `.stagger`, `.live`, `.link`, `.depth-text` and `.contact-shadow`;
- the reduced-motion rules.

The snippets below show how to wire those classes up, plus the few patterns that need a little JS. They work in plain HTML. In React, Next.js, Svelte or Vue, keep the same classes and swap the DOM calls for state.

## 1. Setup

```html
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..800&family=Geist+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="/tokens.css">
  <script>
    // Apply a saved theme before first paint (no flash). No attribute = follow the OS.
    try { const t = localStorage.getItem("theme"); if (t === "light" || t === "dark") document.documentElement.dataset.theme = t; } catch (_) {}
  </script>
</head>
```

```css
body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-text);
  font-size: var(--text-base);
  line-height: 1.55;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
}
```

Force a mode on a subtree with `class="theme-light"` or `class="theme-dark"`. This is useful for previews and for device mockups that show the other mode.

## 2. Theme switch with circular reveal

Three states: system, light, dark. The new theme is revealed in a circle from the point you tapped.

```js
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)");

function setMode(mode) { // "auto" | "light" | "dark"
  if (mode === "auto") delete root.dataset.theme; else root.dataset.theme = mode;
  try { localStorage.setItem("theme", mode); } catch (_) {}
}

function switchTheme(mode, x, y) {
  if (!document.startViewTransition || reduce.matches) return setMode(mode);
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(() => setMode(mode)).ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  });
}
```

```css
::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
```

## 3. Sticky nav with progressive blur

The bar's blur fades out 36 px below it, so content dissolves instead of being cut off.

```css
.nav { position: sticky; top: 0; z-index: 20; }
.nav::before {
  content: ""; position: absolute; inset: 0 0 -36px 0; z-index: -1; pointer-events: none;
  background: linear-gradient(to bottom, color-mix(in srgb, var(--bg) 82%, transparent) 40%, transparent);
  backdrop-filter: blur(var(--blur-nav)) saturate(var(--glass-saturate));
  -webkit-backdrop-filter: blur(var(--blur-nav)) saturate(var(--glass-saturate));
  mask-image: linear-gradient(to bottom, #000 55%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, #000 55%, transparent);
}
```

Default nav layout (one option; the spec's section 4, "Range", lets each project pick another shape, such as a floating pill or a side index):
- Wordmark on the left.
- Links (14 px, starting with a capital: Work, About) on the right.
- A 40 px hairline (`width: 40px; height: 1px; background: var(--fg-3)`) before the last link or the CTA pill.

## 4. Progressive blur on a scroll container

Put the overlays inside a positioned wrapper, as siblings of the scroller. The fifth `<i>` is a color fade toward `--pblur-tint` (it defaults to `--bg`).

```html
<div style="position: relative">
  <div class="list" style="overflow-y: auto; max-height: 400px">…</div>
  <div class="pblur pblur--top" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
  <div class="pblur pblur--bottom" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
</div>
```

On a card, set `--pblur-tint: var(--surface-1)` on the `.pblur` elements so the fade matches the card.

## 5. Edge blur over a map or photo

```html
<div style="position: relative; overflow: hidden">
  <img src="map.jpg" alt="" style="width: 100%; display: block">
  <div class="edgeblur" aria-hidden="true"></div>
  <!-- pins, pills and cards go above with z-index ≥ 2 -->
</div>
```

## 6. Floating sheet + background that recedes

```html
<div class="screen" style="--r-outer: 44px">
  <div class="behind">…page content…</div>
  <div class="sheet-host">
    <div class="float-sheet" style="--inset: 12px">…</div>
  </div>
</div>
```

```css
.behind { transition: filter var(--dur-exit) var(--ease-in-out), transform var(--dur-exit) var(--ease-in-out), opacity var(--dur-exit) var(--ease-in-out); transform-origin: 50% 0; }
.sheet-host .float-sheet { transform: translateY(calc(100% + 24px)); transition: transform var(--dur-exit) var(--ease-in-out); }
.screen.open .behind { filter: blur(var(--blur-behind)); transform: scale(0.96); opacity: 0.6; transition-duration: var(--dur-3); transition-timing-function: var(--ease-out); }
.screen.open .float-sheet { transform: none; transition-duration: var(--dur-3); transition-timing-function: var(--ease-out); }
```

Toggle the `open` class on `.screen`.
- Opening uses 420 ms ease-out; closing uses 280 ms ease-in-out (the base rule).
- Use `.sheet` instead of `.float-sheet` when there's no image behind it (opaque, radius 32).

## 7. Blur swap (state changes in place)

```html
<button class="btn btn--primary btn--lg" id="send">
  <span class="swap">
    <span data-on>Send $1,240</span>
    <span><span class="shimmer">Sending…</span></span>
    <span>✓ Sent</span>
  </span>
</button>
```

```js
const setSwap = (swap, i) => [...swap.children].forEach((c, n) => c.toggleAttribute("data-on", n === i));
// idle → busy → done
setSwap(swapEl, 1); /* await work */ setSwap(swapEl, 2);
```

Use the same pattern for icon swaps such as copy → check: swap back after 1.4 s.

## 8. Words arriving (AI replies, confirmations)

```js
function wordsIn(el) {
  const text = el.textContent;
  el.classList.remove("words");
  el.innerHTML = text.split(" ").map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(" ");
  void el.offsetWidth;
  el.classList.add("words");
}
```

For a streamed response, append each new word as `<span class="w" style="--i:0">` so it animates on its own as it arrives.

## 9. Headline reveal

```html
<h1 class="headline reveal"><span>Statement in fg.</span><span class="muted">Explanation in fg-2.</span></h1>
```

## 10. Number roll

```css
.roll { display: flex; font-variant-numeric: tabular-nums; line-height: 1; }
.roll .col { display: inline-block; height: 1em; overflow: hidden; }
.roll .strip { display: flex; flex-direction: column; transition: transform var(--dur-count) var(--ease-out), filter var(--dur-count) var(--ease-out); }
.roll .strip.moving { filter: blur(1.5px); }
.roll .strip span, .roll .sym { display: block; height: 1em; }
```

```js
function roll(el, value) {
  el.setAttribute("aria-label", value);
  el.innerHTML = [...value].map((ch) => /\d/.test(ch)
    ? `<span class="col"><span class="strip" data-d="${ch}">${[..."0123456789"].map((d) => `<span>${d}</span>`).join("")}</span></span>`
    : `<span class="sym">${ch}</span>`).join("");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.querySelectorAll(".strip").forEach((s, i) => {
      s.style.transitionDelay = `${i * 40}ms`;
      s.classList.add("moving");
      s.style.transform = `translateY(-${s.dataset.d}em)`;
      setTimeout(() => s.classList.remove("moving"), 360 + i * 40);
    });
  }));
}
```

## 11. Button → check

```css
.morph { position: relative; width: 220px; height: 52px; border: 0; border-radius: var(--r-pill); background: var(--fg); color: var(--bg); font: 600 16px/1 var(--font-text); transition: width var(--dur-3) var(--ease-in-out), background-color var(--dur-2) var(--ease-out); }
.morph .lbl { transition: opacity var(--dur-1) var(--ease-out), filter var(--dur-1) var(--ease-out); }
.morph svg { position: absolute; inset: 0; margin: auto; width: 24px; height: 24px; transform: scale(.6); opacity: 0; transition: transform var(--dur-2) var(--ease-spring), opacity var(--dur-1) linear; }
.morph path { fill: none; stroke: #000; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 24; stroke-dashoffset: 24; transition: stroke-dashoffset var(--dur-2) var(--ease-out); }
.morph.done { width: 52px; background: var(--positive); }
.morph.done .lbl { opacity: 0; filter: blur(var(--blur-text)); }
.morph.done svg { transform: scale(1); opacity: 1; transition-delay: var(--dur-3); }
.morph.done path { stroke-dashoffset: 0; transition-delay: var(--dur-3); }
```

```html
<button class="morph"><span class="lbl">Pay $1,240</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></button>
```

## 12. Island pill (live activity)

```css
.isl { position: relative; overflow: hidden; width: 150px; height: 36px; border-radius: 18px; background: #000; color: #fff; border: 0;
  transition: width var(--dur-3) var(--ease-in-out), height var(--dur-3) var(--ease-in-out), border-radius var(--dur-3) var(--ease-in-out); }
.isl.open { width: min(300px, 80vw); height: 120px; border-radius: 32px; }
/* Inside, put a .swap with the compact and the expanded content; give the expanded one a 120 ms delay. */
```

## 13. Elastic toggle

```css
.tgl { position: relative; width: 64px; height: 34px; border: 0; border-radius: var(--r-pill); background: var(--surface-3); transition: background-color var(--dur-2) var(--ease-out); }
.tgl::after { content: ""; position: absolute; top: 3px; left: 3px; width: 28px; height: 28px; border-radius: var(--r-pill); background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.2); transition: width var(--dur-2) var(--ease-spring), left var(--dur-2) var(--ease-spring); }
.tgl:active::after { width: 36px; }
.tgl[aria-checked="true"] { background: var(--positive); }
.tgl[aria-checked="true"]::after { left: calc(100% - 31px); }
.tgl[aria-checked="true"]:active::after { left: calc(100% - 39px); }
```

Use `<button role="switch" aria-checked="false">` and flip `aria-checked` on click.

## 14. Segmented control with a traveling thumb

```css
.seg { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); padding: 4px; border-radius: var(--r-pill); background: var(--surface-2); }
.seg .thumb { position: absolute; inset: 4px auto 4px 4px; width: calc((100% - 8px) / 3); border-radius: var(--r-pill); background: var(--fg); transform: translateX(calc(var(--idx, 0) * 100%)); transition: transform var(--dur-2) var(--ease-in-out); }
.seg button { position: relative; border: 0; background: none; height: 36px; font: 600 14px var(--font-text); color: var(--fg-2); transition: color var(--dur-2) var(--ease-out); }
.seg button[aria-pressed="true"] { color: var(--bg); }
```

Set `--idx` on `.seg` when the selection changes.

## 15. Toast

```css
.toast { position: fixed; left: 50%; bottom: calc(24px + env(safe-area-inset-bottom)); translate: -50% 0; padding: 10px 16px; border-radius: var(--r-pill); background: var(--fg); color: var(--bg); font: 600 14px var(--font-text);
  opacity: 0; transform: translateY(16px); filter: blur(var(--blur-text)); pointer-events: none;
  transition: opacity var(--dur-2) var(--ease-in-out), transform var(--dur-2) var(--ease-in-out), filter var(--dur-2) var(--ease-in-out); }
.toast.show { opacity: 1; transform: none; filter: blur(0); transition-duration: var(--dur-3); transition-timing-function: var(--ease-out); }
```

Show it for 1600 ms. A toast never asks for a decision: use a sheet for that.

## 16. Lists that arrive

```html
<div class="stagger"><div style="--i:0">…</div><div style="--i:1">…</div><div style="--i:2">…</div></div>
```

Only use it for content that arrives after an action, never on first paint of text people are reading.

## 17. Product accent

```html
<main class="accent-tide">
  <button class="btn btn--accent btn--lg">Book · $1,240</button>
</main>
```

Use the accent on one kind of element per screen. Primary actions that are not the domain action stay `btn--primary`.

## 18. Device mockups for presentations

- Device: `width: min(270px, 100%); aspect-ratio: 9 / 19.2; border-radius: 50px; padding: 9px; background: linear-gradient(145deg, #2a2a2a, #050505 40%, #1c1c1c)`.
- Screen: `border-radius: 41px; overflow: hidden`.
- Stage: `.stage` (radius 8, `--stage` color). Center the device and leave a lot of air around it.

## 19. Checks before you ship

- Test both modes, and the no-attribute "auto" state.
- No horizontal scroll at 360 px.
- `prefers-reduced-motion` flattens everything. `tokens.css` handles CSS; in JS, check `matchMedia("(prefers-reduced-motion: reduce)")` before starting view transitions or timers.
- Keyboard focus is visible: `:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }`.
