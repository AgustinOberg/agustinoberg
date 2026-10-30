# React Native / Expo implementation

Copy `assets/react-native/theme.ts` into the app (for example `src/theme.ts`). It exports:
- `colors.light` and `colors.dark`, `mono`, `semantic`;
- `atmospheres`, `accent()`, `onAccent`, `dataColors` and `dataColor()`;
- `radius`, `concentric()`, `space`;
- `fontSize`, `fontWeight`, `trackingEm`, `tracking()`;
- `blur`, `motion`.

Two fidelity rules apply to everything below:
- Every rounded rectangle gets `borderCurve: "continuous"` (squircle corners).
- Use native controls (Switch, SegmentedControl, date picker, context menu) instead of rebuilding them.

The patterns below use Reanimated, gesture-handler, expo-blur and expo-haptics. They are starting points: check prop names against the versions installed in the project. Tune blur intensities by eye on a real device.

## 1. Setup

```sh
npx expo install react-native-reanimated react-native-gesture-handler expo-blur expo-haptics expo-linear-gradient @react-native-masked-view/masked-view expo-font @expo-google-fonts/inter @react-native-segmented-control/segmented-control
```

- **Text fonts:** load Inter 400, 500 and 600 with `useFonts` from `@expo-google-fonts/inter`.
- **Display font:** for the exact display optical size, bundle the static Inter Display files (from rsms.me/inter) with `expo-font`. If you can't, Inter 600 with −3% tracking is close.
- **Labels:** Geist Mono. Use `@expo-google-fonts/geist-mono` if it is available, or bundle the font files.

```ts
// motion.ts
import { Easing } from "react-native-reanimated";
import { motion } from "./theme";

export const ease = {
  out: Easing.bezier(...motion.easing.out),
  inOut: Easing.bezier(...motion.easing.inOut),
  spring: Easing.bezier(...motion.easing.spring),
};
export const timing = {
  press: { duration: motion.duration.press, easing: ease.out },
  quick: { duration: motion.duration.quick, easing: ease.out },
  open: { duration: motion.duration.base, easing: ease.out },
  close: { duration: motion.duration.exit, easing: ease.inOut },
  morph: { duration: motion.duration.base, easing: ease.inOut },
};
```

## 2. Theme: light and dark as equals

```tsx
import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { colors, type Scheme } from "./theme";

type Mode = "auto" | Scheme;
const ThemeCtx = createContext<{ scheme: Scheme; c: (typeof colors)[Scheme]; mode: Mode; setMode: (m: Mode) => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme() === "dark" ? "dark" : "light";
  const [mode, setMode] = useState<Mode>("auto"); // persist with AsyncStorage if needed
  const scheme: Scheme = mode === "auto" ? system : mode;
  return <ThemeCtx.Provider value={{ scheme, c: colors[scheme], mode, setMode }}>{children}</ThemeCtx.Provider>;
}
export const useTheme = () => useContext(ThemeCtx)!;
```

Per-mode rules to respect in components:
- **Light:** cards on `c.surface1` with a soft shadow (`shadowOpacity: 0.08, shadowRadius: 24, shadowOffset: { width: 0, height: 8 }`).
- **Dark:** cards on `c.surface1` with no shadow. Add a hairline (`borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: "rgba(255,255,255,0.06)"`) for the inner top light.

## 3. Type helpers

```tsx
import { Text } from "react-native";
import { fontSize, trackingEm, tracking } from "./theme";

export function Headline({ statement, explanation, size = fontSize["2xl"] }: { statement: string; explanation: string; size?: number }) {
  const { c } = useTheme();
  const style = { fontFamily: "Inter_600SemiBold", fontSize: size, lineHeight: size * 1.2, letterSpacing: tracking(trackingEm.display, size) };
  return (
    <Text style={[style, { color: c.fg }]}>
      {statement}{"\n"}<Text style={{ color: c.fg2 }}>{explanation}</Text>
    </Text>
  );
}

export const numberStyle = (size: number) => ({
  fontFamily: "Inter_600SemiBold", fontSize: size, letterSpacing: tracking(trackingEm.num, size), fontVariant: ["tabular-nums" as const],
});

export const labelStyle = { fontFamily: "GeistMono_400Regular", fontSize: 11, letterSpacing: tracking(trackingEm.mono, 11), textTransform: "uppercase" as const };
```

## 4. Press (every touchable)

```tsx
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { motion } from "./theme";
import { timing } from "./motion";

const APressable = Animated.createAnimatedComponent(Pressable);

export function PressScale({ children, style, onPress, haptic = true, ...rest }: React.ComponentProps<typeof Pressable>) {
  const s = useSharedValue(1);
  const a = useAnimatedStyle(() => ({ transform: [{ scale: s.value }] }));
  return (
    <APressable
      {...rest}
      onPress={onPress}
      onPressIn={() => { s.value = withTiming(motion.pressScale, timing.press); if (haptic) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); }}
      onPressOut={() => { s.value = withSpring(1, motion.spring); }}
      style={[style as object, a]}
    >
      {children}
    </APressable>
  );
}
```

Press feedback by element:
- **Buttons and cards:** `PressScale` (scale 0.97).
- **List rows:** a background highlight to `c.surface2` on press-in, never scale.
- **Bar buttons:** opacity 0.5 on press-in.

Pill buttons:
- **Size:** height 52 (main) or 40, `borderRadius: radius.pill`, `borderCurve: "continuous"`, horizontal padding 24 / 16, text 16/600 or 14/600.
- **Primary:** `c.fg` background with `c.bg` text.
- **Secondary:** `c.btn2`.
- **Accent:** `accent(atmosphere, scheme)` background with `onAccent` text.

Color dial surfaces: a tinted card is `atmospheres[hue][scheme]["1"]` with `c.fg` text; an accent surface is `accent(hue, scheme)` with `onAccent` for every line, hierarchy by size and weight. Data categories use `dataColor(hue, scheme)` on dots, icons and bars.

## 5. Glass

```tsx
import { BlurView } from "expo-blur";

export function Glass({ children, style, radius: r = 24 }: { children?: React.ReactNode; style?: object; radius?: number }) {
  const { scheme, c } = useTheme();
  return (
    <BlurView intensity={45} tint={scheme === "dark" ? "dark" : "light"} style={[{ borderRadius: r, borderCurve: "continuous", overflow: "hidden" }, style]}>
      <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: c.glass }} />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: StyleSheet.hairlineWidth, backgroundColor: c.glassEdge }} />
      {children}
    </BlurView>
  );
}
```

- **iOS tints:** `systemThinMaterial`, `systemMaterial` and their dark variants match the native materials closely.
- **Android:** real blur needs the experimental blur method described in the expo-blur docs. If it's off, fall back to the `glass` color at a higher opacity.

## 6. Floating sheet + background that recedes

```tsx
import Animated, { interpolate, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { concentric } from "./theme";
import { timing } from "./motion";

const ABlur = Animated.createAnimatedComponent(BlurView);
const SCREEN_RADIUS = 44; // approximate iPhone corner radius; varies by model
const INSET = 12;

export function useSheet() {
  const p = useSharedValue(0); // 0 closed → 1 open
  return {
    p,
    open: () => { p.value = withTiming(1, timing.open); },
    close: () => { p.value = withTiming(0, timing.close); },
  };
}

export function Recede({ p, children }: { p: SharedValue<number>; children: React.ReactNode }) {
  const { scheme } = useTheme();
  const style = useAnimatedStyle(() => ({
    opacity: interpolate(p.value, [0, 1], [1, 0.6]),
    transform: [{ scale: interpolate(p.value, [0, 1], [1, 0.96]) }],
  }));
  const blurProps = useAnimatedProps(() => ({ intensity: interpolate(p.value, [0, 1], [0, 22]) }));
  return (
    <Animated.View style={[{ flex: 1 }, style]}>
      {children}
      <ABlur animatedProps={blurProps} tint={scheme === "dark" ? "dark" : "light"} style={StyleSheet.absoluteFill} pointerEvents="none" />
    </Animated.View>
  );
}

export function FloatingSheet({ p, height, children }: { p: SharedValue<number>; height: number; children: React.ReactNode }) {
  const style = useAnimatedStyle(() => ({ transform: [{ translateY: interpolate(p.value, [0, 1], [height + 24, 0]) }] }));
  return (
    <Animated.View style={[{ position: "absolute", left: INSET, right: INSET, bottom: INSET, height }, style]}>
      <Glass radius={concentric(SCREEN_RADIUS, INSET)} style={{ flex: 1, padding: 24 }}>{children}</Glass>
    </Animated.View>
  );
}
```

Make the sheet follow the finger. Finger-driven motion is a spring with the release velocity, never a fixed timing:

```tsx
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { withSpring } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets"; // Reanimated 4; use runOnJS on Reanimated 3
import { motion } from "./theme";

// dragY: extra offset while dragging (0 = resting). Add it to the sheet's translateY.
const pan = Gesture.Pan()
  .onChange((e) => { dragY.set(Math.max(0, dragY.get() + e.changeY)); })
  .onEnd((e) => {
    const dismiss = dragY.get() > height * 0.3 || e.velocityY > 800;
    dragY.set(withSpring(dismiss ? height + 24 : 0, { ...motion.fingerSpring.sheet, velocity: e.velocityY }));
    if (dismiss) scheduleOnRN(onClose);
  });
// <GestureDetector gesture={pan}><FloatingSheet …/></GestureDetector>
```

- Commit by distance **or** speed, so a fast flick from 10 pt away still dismisses.
- If a new gesture starts mid-spring, it grabs the current value, not the destination.
- Opaque sheet without an image behind it: use `c.sheetBg` instead of `Glass`, with radius 32.

## 7. Progressive blur (scroll edges, tab bar)

```tsx
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

const LAYERS = [ { intensity: 6, reach: 1 }, { intensity: 14, reach: 0.75 }, { intensity: 28, reach: 0.5 }, { intensity: 55, reach: 0.25 } ];

export function ProgressiveBlur({ edge = "top", height = 72 }: { edge?: "top" | "bottom"; height?: number }) {
  const { scheme, c } = useTheme();
  const from = edge === "top" ? 0 : 1;
  return (
    <View pointerEvents="none" style={{ position: "absolute", left: 0, right: 0, [edge]: 0, height }}>
      {LAYERS.map((l, i) => (
        <MaskedView key={i} style={StyleSheet.absoluteFill}
          maskElement={<LinearGradient colors={["#000", "transparent"]} start={{ x: 0, y: from }} end={{ x: 0, y: edge === "top" ? l.reach : 1 - l.reach }} style={StyleSheet.absoluteFill} />}>
          <BlurView intensity={l.intensity} tint={scheme === "dark" ? "dark" : "light"} style={StyleSheet.absoluteFill} />
        </MaskedView>
      ))}
      <LinearGradient colors={[c.bg, "transparent"]} start={{ x: 0, y: from }} end={{ x: 0, y: 1 - from }} style={[StyleSheet.absoluteFill, { opacity: 0.85 }]} />
    </View>
  );
}
```

- **Performance:** four masked blurs are fine for one or two bars. With Skia in the project, a single `BackdropBlur` with a gradient mask is cheaper.
- **Edge blur on a map or photo:** use `ProgressiveBlur` on all four edges (top and bottom with `height`, left and right with a rotated variant), or a Skia `BackdropBlur` clipped by a radial gradient mask.

## 8. Blur swap (state changes in place)

Per-element blur is expensive on native, so the swap keeps the motion (opacity + scale + a small lift) and drops the blur. On iOS you can add an animated `BlurView` overlay (intensity 0 → 12 → 0) for the full effect.

```tsx
import Animated from "react-native-reanimated";
import { ease } from "./motion";

const D = 240;
const enter = () => {
  "worklet";
  return {
    initialValues: { opacity: 0, transform: [{ scale: 0.96 }, { translateY: 2 }] },
    animations: { opacity: withTiming(1, { duration: D, easing: ease.out }), transform: [{ scale: withTiming(1, { duration: D, easing: ease.out }) }, { translateY: withTiming(0, { duration: D, easing: ease.out }) }] },
  };
};
const exit = () => {
  "worklet";
  return {
    initialValues: { opacity: 1, transform: [{ scale: 1 }] },
    animations: { opacity: withTiming(0, { duration: D, easing: ease.out }), transform: [{ scale: withTiming(0.96, { duration: D, easing: ease.out }) }] },
  };
};

// Render the current state with a key so Reanimated runs enter/exit:
<View>
  <Animated.Text key={state} entering={enter} exiting={exit} style={{ position: "absolute" }}>{labels[state]}</Animated.Text>
</View>
```

## 9. Number roll

```tsx
function Digit({ d, index, size }: { d: number; index: number; size: number }) {
  const y = useSharedValue(0);
  useEffect(() => { y.value = withDelay(index * motion.stagger.digit, withTiming(-d * size, { duration: motion.duration.count, easing: ease.out })); }, [d]);
  const a = useAnimatedStyle(() => ({ transform: [{ translateY: y.value }] }));
  return (
    <View style={{ height: size, overflow: "hidden" }}>
      <Animated.View style={a}>{[...Array(10)].map((_, n) => <Text key={n} style={[numberStyle(size), { height: size, lineHeight: size }]}>{n}</Text>)}</Animated.View>
    </View>
  );
}
// Render each character: digits as <Digit>, symbols ("$", ",", ":") as plain Text.
```

## 10. Button → check

Animate the button from full width to a 52 pt circle:
- **Label:** fades out in 120 ms (`timing.press`).
- **Shape:** width goes to 52 in 420 ms (`timing.morph`). Keep `borderRadius` at `radius.pill`.
- **Color:** the background changes to `semantic.positive`.
- **Check:** after 420 ms, `withDelay(420, withSpring(1, motion.spring))` on its scale, from 0.6.
- **Haptic:** `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)`.

## 11. Island pill

Shared values for `width` (150 → 300), `height` (36 → 120) and `borderRadius` (18 → 32), all `withTiming(…, timing.morph)`. Swap the content with the blur-swap pattern, delayed 120 ms. Use it for live activities: a timer, a trip, a call.

## 12. Toggles and segmented controls: use the native ones

The iOS `Switch` already has the elastic thumb, the right timing and the haptic, and a rebuilt one reads as fake instantly. Use React Native's `Switch` with `trackColor={{ true: semantic.positive }}`, and `@react-native-segmented-control/segmented-control` for segmented controls. The elastic toggle and the traveling segmented thumb in `implementation-web.md` are for the web only.

## 13. Lists that arrive

```tsx
<Animated.View entering={FadeInDown.delay(Math.min(i, 5) * motion.stagger.list).duration(motion.duration.base)}>…</Animated.View>
```

`FadeInDown` lifts from below. Keep the lift small (12 pt) and set the easing to `ease.out` if your Reanimated version supports `.easing()` on layout animation builders. If not, write a custom `entering` worklet like the one in section 8.

## 14. Screen transitions (Expo Router / React Navigation)

| transition | how |
|---|---|
| push | native stack default on iOS is close. For custom transitions: 420 ms ease-out in, previous screen to −30% with a dim. |
| modal | `presentation: "formSheet"` or `"modal"` on iOS, or the `FloatingSheet` above for in-screen tasks. |
| tabs | crossfade, no slide (`animation: "fade"` where supported). |

## 15. Life in a native app

### Photos, generously

```tsx
import { Image } from "expo-image";

<Image
  source={{ uri: trip.photo }}            // real asset, or stock marked [TODO: replace]
  placeholder={{ blurhash: trip.blurhash }} // never a grey box
  contentFit="cover"
  transition={motion.duration.quick}
  style={{ width: "100%", aspectRatio: 4 / 5, borderRadius: radius.lg, borderCurve: "continuous" }}
/>
```

### Photo-tinted backdrop

```tsx
// Store the dominant color with the photo (backend or build step). `react-native-image-colors` can compute it once and cache it.
const tint = trip.color; // e.g. "#b0643a"
<View style={{ flex: 1, backgroundColor: scheme === "dark" ? mix(tint, "#000", 0.3) : mix(tint, c.bg, 0.14) }}>
```

`mix(a, b, t)` is a small helper that blends two hex colors; keep it in `theme.ts`.

### Objects that feel physical

```tsx
<View style={{ transform: [{ rotate: "-4deg" }] }}>
  <Image source={badge} style={{ width: 160, height: 160 }} />
  <View style={styles.contactShadow} /> {/* 70% ellipse, 35% black, blurred */}
</View>
```

### Section headers

Sentence case, 17–22 / 600 in `c.fg`, as the native large title or a plain `Text`. Never a mono uppercase label in a consumer product.

## 16. Haptics map

| moment | call |
|---|---|
| press | `impactAsync(Light)` |
| selection change (segmented, toggle, picker) | `selectionAsync()` |
| success (payment, send, save) | `notificationAsync(Success)` |
| error | `notificationAsync(Error)` |

## 17. Reduced motion

```tsx
import { useReducedMotion } from "react-native-reanimated";
const reduce = useReducedMotion();
```

When `reduce` is true:
- No translate, scale or blur. Use 120 ms opacity crossfades.
- Number rolls jump straight to the value.
- Loops (shimmer, live dot) stop.
- Haptics stay.
