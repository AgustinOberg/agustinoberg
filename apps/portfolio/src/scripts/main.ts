// agustín oberg — portfolio
// Everything here is enhancement: the page reads complete without JS.

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------- theme: auto / light / dark with a circular reveal ---------- */
type Mode = "auto" | "light" | "dark";
const MODES: Mode[] = ["auto", "light", "dark"];
const themeSwitch = document.getElementById("themeSwitch");

function storedMode(): Mode {
  try {
    const t = localStorage.getItem("ao-theme") as Mode | null;
    return t && MODES.includes(t) ? t : "auto";
  } catch (_) {
    return "auto";
  }
}

function resolvedMode(mode: Mode) {
  if (mode !== "auto") return mode;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function paintSwitch(mode: Mode) {
  if (!themeSwitch) return;
  themeSwitch.querySelectorAll<HTMLButtonElement>("button[data-mode]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
  themeSwitch.style.setProperty("--idx", String(MODES.indexOf(mode)));
}

function setMode(mode: Mode) {
  if (mode === "auto") delete root.dataset.theme;
  else root.dataset.theme = mode;
  try { localStorage.setItem("ao-theme", mode); } catch (_) {}
  paintSwitch(mode);
}

function applyMode(mode: Mode, x: number, y: number) {
  const changes = resolvedMode(mode) !== resolvedMode(storedMode());
  if (!document.startViewTransition || reduceMotion.matches || !changes) {
    setMode(mode);
    return;
  }
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const t = document.startViewTransition(() => setMode(mode));
  t.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  });
}

paintSwitch(storedMode());
themeSwitch?.addEventListener("click", (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-mode]");
  if (!b) return;
  const r = b.getBoundingClientRect();
  applyMode(b.dataset.mode as Mode, r.left + r.width / 2, r.top + r.height / 2);
});

/* ---------- manifesto: each line turns from fg-2 to fg as it scrolls in ---------- */
const lines = document.querySelectorAll<HTMLElement>("[data-line]");
if (!("IntersectionObserver" in window) || reduceMotion.matches) {
  lines.forEach((l) => l.classList.add("on"));
} else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.target.classList.toggle("on", en.isIntersecting)),
    { rootMargin: "-35% 0px -35% 0px" }
  );
  lines.forEach((l) => io.observe(l));
}
