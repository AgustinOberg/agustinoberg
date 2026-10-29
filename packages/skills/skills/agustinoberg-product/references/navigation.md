# Navigation grammar

A screenshot can't show navigation, but people feel it within ten seconds. Before building any screen, answer three questions and write the answers down:
- What is this screen (push, modal, sheet, overlay or replace)?
- Must the user be able to come back to the previous one?
- What does back do from here, with the chevron, the iOS edge swipe, Android back or the browser back?

## 1. Push vs replace

| situation | use |
|---|---|
| Going deeper into content the user will want to return from (list → detail) | push |
| Moving past a state the world has moved on from (onboarding done, signed in, purchase completed) | replace |
| Finishing a flow and landing somewhere specific | dismiss to that route (`router.dismissTo(href)` in Expo Router) |

Back undoes **navigation**, never **events**. Going back from a receipt doesn't un-pay.

## 2. Presentation is meaning

| what it is | presentation | how it looks in this design language |
|---|---|---|
| A short interruption: picker, filters, item options, quick confirm | sheet (iOS `formSheet` with detents, drag to dismiss) | floating concentric sheet; the background recedes |
| A self-contained task with steps: compose, checkout, edit profile | modal with its own stack, Cancel and Done | opaque sheet surface, radius 32 |
| Immersive content: a player, a story, a full-screen photo | full-screen modal with an explicit Close | black stage; close is a glass circle |
| Something floating over a still-visible screen: a confirm card, coach mark, lightbox | transparent overlay | glass card, inset 12 |
| Destructive confirm | native action sheet or alert | native |
| Actions on an item | native context menu | native |
| Share, web links, photo picking | the system controller | native, never a rebuilt route |

- A sheet that grows a second step was a modal all along.
- If a link could open it, it's a route, not a component state.

## 3. One-way doors

These leave the stack, so back can never re-enter the old state:
- Finished onboarding, including Skip.
- Sign-in on an app that's gated from the start.
- A completed purchase or a paid paywall.
- A finished session (a workout, a booking flow).

Guard them (`Stack.Protected` or a redirect) and land with `replace`. On Android, back from home exits the app; it never shows Login.

**Keep the user's place.** Sign-in demanded by one action (save, follow, book) is a modal over the current screen that completes that action where it was tapped. A paywall opened from a feature dismisses back onto the feature, now unlocked. Never reset to the tab root from there.

## 4. When back is blocked

Only in two cases:
1. An irreversible request is in flight: seconds long, with visible progress.
2. There's unsaved work in a modal: ask before discarding.

Transient in-screen state (selection mode, an expanded search, an open in-screen sheet) consumes the first back, then back leaves. Anything else that traps back is a defect.

## 5. Tabs

- Tabs are peers: crossfade, never slide.
- Each tab keeps its own stack. Re-tapping the active tab pops to its root and scrolls to the top.
- Full-attention screens (composer, player, checkout) live in the root stack, above the tabs.
- The tab bar is glass with a progressive blur over the content behind it.

## 6. Deep links and cold start

- Deep links land with a real stack underneath (`initialRouteName` or an anchor), so back goes somewhere sensible.
- Cold start lands by state. Hold the splash until the session is resolved: never flash Login before Home.

## 7. Web equivalents

- A real URL for every page and every modal that could be linked or shared.
- Browser back closes modals and sheets that changed the URL. Escape closes overlays.
- Keep scroll position when coming back to a list.
- Language and theme switches keep the user on the same section.

## 8. Writing the map

Before you build, write one line per screen:

```
explore      tab root · back: exits tab stack · —
destination  push from explore · back: explore · —
dates        sheet over destination · drag or back: dismiss · —
checkout     modal (own stack) · back: cancel with confirm if card entered · —
confirmed    replace checkout · back: trip list (can't re-pay) · one-way door
trip live    island pill + push from trips · back: trips · —
```

Put this map in your report.
