# Verification loop

A screen doesn't exist until you've seen it running. Budget as many loops as it takes: the goal is "can't find a flaw", not "looks fine".

## 1. The loop

1. **Run it.**
   - Native: the iOS Simulator first (`npx expo start`, then `i`), the Android emulator second. Use a dev build or a release build for performance checks.
   - Web: a real browser through the dev server, never a file preview.
2. **Screenshot and actually look.** Open the image and study it; don't trust your memory of the code. Check:
   - alignment and optical centering;
   - spacing rhythm;
   - truncation;
   - content under the bars;
   - contrast.
3. **Interact.** Tap every control, type overlong text, background and foreground the app, rotate it if supported, double-tap fast.
4. **Record the motion.**
   - Native: `xcrun simctl io booted recordVideo flow.mov`, or the agent's recording tool.
   - Web: the browser's recorder or a GIF tool.
   Record the whole flow, not just the hero transition. Watch it once at full speed for feel, then frame by frame.
5. **Fix, relaunch, look again.** Never batch more than a few fixes between looks.

If a UI testing tool (Maestro, Playwright, an e2e recorder) is available, script the happy path once it's stable so later changes re-verify for free.

## 2. The motion pass (per flow)

Exercise all of it:
- every transition, push and pop, and tab switch;
- every back path (chevron, edge swipe, Android back, browser back), plus an attempt to go back through each one-way door, which must fail;
- every sheet and modal: present, drag, dismiss, and cancel mid-drag;
- the keyboard appearing and dismissing: the layout glides and the focused input stays visible;
- every press, toggle, segmented change, blur swap and number roll.

Hunt for:
- dropped frames: the bar is a sustained 60 fps, measured;
- one-frame flashes: white first paint, wrong-theme frames, a color pop on a surface;
- pops at the start or end of an animation, springs that overshoot into content, elements that reflow after appearing;
- motion that ignores the frequency gate: things animating on every scroll or tab switch.

One glitchy frame means the flow isn't done.

## 3. Matrix

| target | why |
|---|---|
| Latest iPhone Pro (Dynamic Island) | primary native target |
| Small iPhone (SE class, no island) | layout compression, reachability |
| Recent Pixel | Material behaviors, back gesture, font metrics, blur support |
| Web at 390 px | phone layout |
| Web at 1440 px | desktop layout |
| Light, dark and system mode | both themes, plus no flash on load |
| Reduced motion on | spatial motion becomes crossfades |
| Dynamic Type XL or 200% zoom | nothing overlaps or clips |

Run the full checklist on the primary target. On the others, verify layout, safe areas and the hero flow.

## 4. Per-screen checklist

**Layout**
- [ ] Nothing clipped by the island or status bar; scrolled content passes under them with a progressive blur.
- [ ] The bottom CTA clears the home indicator.
- [ ] Optical alignment holds at 2× zoom; spacing stays on the 4 px grid.
- [ ] Long text wraps or truncates by design.

**Design language** (agustinoberg-design)
- [ ] The visual pre-flight counts are all clean.
- [ ] One atmosphere, and the accent on one kind of element.
- [ ] Two-tone headlines, the number as hero, pills, concentric sheets.

**States**
- [ ] Loading, empty, error, offline and success forced once each.

**Interaction**
- [ ] Tap targets ≥ 44 pt, press states visible, haptics on the right moments.
- [ ] Back works everywhere it should, and one-way doors hold.
- [ ] Rapid double taps don't double-navigate or double-submit.

**State integrity**
- [ ] Backgrounding mid-flow and returning keeps the state.
- [ ] After a kill and relaunch, persisted state restores and ephemeral state resets.

**Theme and accessibility**
- [ ] Light and dark screenshots taken and inspected.
- [ ] Secondary text passes contrast in both modes.
- [ ] Reduced motion and large text verified.
