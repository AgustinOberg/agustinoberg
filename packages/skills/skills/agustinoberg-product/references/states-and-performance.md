# States and perceived performance

Shipping only the happy path is the default failure mode. Every screen has a full state cycle, and every state is designed in Agustín's language, not left to the defaults.

## 1. The state cycle

| state | how it looks in this design language |
|---|---|
| **Loading, known shape** | Skeletons that match the final layout exactly, on `surface-2` with radius from the shape lock. Text that's being produced uses the shimmer. |
| **Loading, unknown shape** | Progressive reveal: show what you have and stagger the rest in (50 ms, max 6). Never a full-screen spinner for a partial update. |
| **Empty** | A soft atmosphere, a two-tone headline that says what goes here and one action that fills it ("Add your first trip"). Never just "No data". |
| **Error** | Inline, next to what failed. Say what happened and how to fix it ("Couldn't load prices. Check your connection and try again." plus Retry). Never a dead end. |
| **Offline** | A quiet banner or a live dot in warning. Queue actions and show them as pending. Never fail silently. |
| **Long content** | Test titles at 2× length and lists at 200 items. Truncate or wrap on purpose. Numbers never wrap. |
| **Success** | The button morphs into a check, words arrive and the success haptic fires. Big successes may use the full atmosphere once. |
| **Live / in progress** | Island pill or live dot, kept as long as the state lasts. |

Force each state once while verifying: mock the network, empty the data, kill the connection.

## 2. Optimistic by default

- Taps show their result immediately and reconcile in the background.
- If the server disagrees, roll back with a visible message, never silently.
- Pending items look pending: `fg-3` text, a live dot in warning, or a shimmer on the label.

## 3. State architecture (React / React Native)

- **Server state:** TanStack Query or the project's equivalent, for caching, retries and optimistic updates. Never `useEffect` + `fetch`.
- **Client state:** a small atomic store (Zustand or Jotai). Avoid broad "app state" contexts that re-render everything.
- **Ephemeral UI state** (open or closed, focus, scroll) stays local to the component.
- **Typing surfaces:** uncontrolled inputs for high-frequency typing.
- **Persisting small client state:** MMKV on native when latency shows, `localStorage` with try/catch on the web.

## 4. Perceived performance

- **Prefetch on press-in,** not when the navigation completes.
- **Lists:** virtualize every list that can grow (FlashList on native), with stable keys.
- **Images:** right-sized sources, `expo-image` with a blurhash or thumbhash placeholder, and `recyclingKey` in lists. On the web: `loading="lazy"`, `width` and `height`, and modern formats.
- **Video loops** (shots, portfolio): `muted`, `playsinline`, `poster`, lazy-loaded, and paused when off screen.
- **Fonts:** preload Inter Display and Geist Mono and use `font-display: swap`. Don't flash a fallback on the hero headline.
- **Blur costs GPU.** Keep blur layers few and small. Prefer one progressive blur per edge, test on the slowest supported device and fall back to a translucent fill if frames drop.
- **Measure, then optimize.** 60 fps through the hero flow, measured on a release build. On the web: Core Web Vitals (LCP < 2.5 s, CLS < 0.1, INP < 200 ms).

## 5. Copy for states

Follow agustinoberg-design's voice: short, active and concrete, with one label per intent.

| state | do | don't |
|---|---|---|
| empty | "No trips yet. Plan your first one." + "Plan a trip" | "Nothing here!" |
| error | "Couldn't book. Your card was declined. Try another card." | "Oops, something went wrong" |
| loading text | "Finding flights" (with shimmer) | "Loading..." |
| success | "Booked. Code K7Q2" | "Success!" |
