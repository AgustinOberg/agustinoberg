// agustín oberg — design language page
// Everything here is enhancement: the page reads complete without JS.

const root = document.documentElement;
const LANG = root.lang.startsWith("en") ? "en" : "es";
const T = {
  es: { copied: (h) => `Copiado ${h}`, promptCopied: "Prompt copiado", selected: "Seleccionado: copialo con ⌘C", add: "Agregar", close: "Cerrar" },
  en: { copied: (h) => `Copied ${h}`, promptCopied: "Prompt copied", selected: "Selected: copy it with ⌘C", add: "Add", close: "Close" },
}[LANG];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const $ = (sel) => document.querySelector(sel);

/* ---------- toast ---------- */
const toast = $("#toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    return false;
  }
}

/* ---------- theme: auto / light / dark with a circular reveal ---------- */
const MODES = ["auto", "light", "dark"];
const themeSwitch = $("#themeSwitch");

function storedMode() {
  try {
    const t = localStorage.getItem("ao-theme");
    return MODES.includes(t) ? t : "auto";
  } catch (_) {
    return "auto";
  }
}

function resolvedMode(mode) {
  if (mode !== "auto") return mode;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function paintSwitch(mode) {
  const btns = [...themeSwitch.querySelectorAll("button")];
  btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
  themeSwitch.style.setProperty("--idx", MODES.indexOf(mode));
}

function setMode(mode) {
  if (mode === "auto") delete root.dataset.theme;
  else root.dataset.theme = mode;
  try { localStorage.setItem("ao-theme", mode); } catch (_) {}
  paintSwitch(mode);
}

function applyMode(mode, x, y) {
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
themeSwitch.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-mode]");
  if (!b) return;
  const r = b.getBoundingClientRect();
  applyMode(b.dataset.mode, r.left + r.width / 2, r.top + r.height / 2);
});

$("#themeDemo").addEventListener("click", (e) => {
  const next = resolvedMode(storedMode()) === "dark" ? "light" : "dark";
  applyMode(next, e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
});

/* ---------- color ramp: copy hex ---------- */
$("#ramp").addEventListener("click", async (e) => {
  const b = e.target.closest("button[data-hex]");
  if (!b) return;
  const ok = await copy(b.dataset.hex);
  showToast(ok ? T.copied(b.dataset.hex) : b.dataset.hex);
});

/* ---------- prompt copy ---------- */
$("#copyPrompt").addEventListener("click", async (e) => {
  const ok = await copy($("#promptText").textContent);
  if (ok) {
    showToast(T.promptCopied);
  } else {
    const range = document.createRange();
    range.selectNodeContents($("#promptText"));
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    showToast(T.selected);
  }
});

/* ---------- helpers ---------- */
function restart(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

function setSwap(swapEl, index) {
  [...swapEl.children].forEach((c, i) => c.toggleAttribute("data-on", i === index));
}

/* ---------- micro: words arriving ---------- */
const wordsEl = $("#words");
const wordsText = wordsEl.textContent;
function playWords() {
  wordsEl.classList.remove("words");
  wordsEl.innerHTML = wordsText.split(" ").map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(" ");
  void wordsEl.offsetWidth;
  wordsEl.classList.add("words");
}
playWords();

/* ---------- micro: background recedes ---------- */
const recede = $("#recede");
recede.addEventListener("click", (e) => {
  const t = e.target.closest("[data-recede]");
  if (!t) return;
  recede.classList.toggle("open", t.dataset.recede === "open");
});

/* ---------- micro: blur swap send button ---------- */
const sendBtn = $("#sendBtn");
const sendSwap = sendBtn.querySelector(".swap");
let sendTimers = [];
function resetSend() {
  sendTimers.forEach(clearTimeout);
  sendTimers = [];
  setSwap(sendSwap, 0);
  sendBtn.disabled = false;
}
sendBtn.addEventListener("click", () => {
  if (sendBtn.disabled) return;
  sendBtn.disabled = true;
  setSwap(sendSwap, 1);
  sendTimers.push(setTimeout(() => setSwap(sendSwap, 2), 1600));
});

/* ---------- micro: island pill ---------- */
const isl = $("#isl");
isl.addEventListener("click", () => {
  const open = !isl.classList.contains("open");
  isl.classList.toggle("open", open);
  isl.setAttribute("aria-expanded", String(open));
});
let secs = 12;
setInterval(() => {
  secs += 1;
  $("#islTime").textContent = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
}, 1000);

/* ---------- micro: morphing icons ---------- */
const plusBtn = $("#plusBtn");
plusBtn.addEventListener("click", () => {
  const on = plusBtn.getAttribute("aria-pressed") !== "true";
  plusBtn.setAttribute("aria-pressed", String(on));
  plusBtn.setAttribute("aria-label", on ? T.close : T.add);
});
const copyBtn = $("#copyBtn");
const copySwap = copyBtn.querySelector(".swap");
let copyTimer;
copyBtn.addEventListener("click", () => {
  setSwap(copySwap, 1);
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => setSwap(copySwap, 0), 1400);
});

/* ---------- micro: elastic toggles ---------- */
document.querySelectorAll(".tgl").forEach((t) => {
  t.addEventListener("click", () => t.setAttribute("aria-checked", String(t.getAttribute("aria-checked") !== "true")));
});

/* ---------- motion: number roll ---------- */
const rollEl = $("#roll");
const amounts = ["$1,240", "$8,905", "$356", "$12,070"];
let amountIdx = 0;
function roll(value) {
  rollEl.setAttribute("aria-label", value);
  rollEl.innerHTML = [...value].map((ch) => /\d/.test(ch)
    ? `<span class="col"><span class="strip" data-d="${ch}">${"0123456789".split("").map((d) => `<span>${d}</span>`).join("")}</span></span>`
    : `<span class="sym">${ch}</span>`).join("");
  const strips = rollEl.querySelectorAll(".strip");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    strips.forEach((s, i) => {
      s.style.transitionDelay = `${i * 40}ms`;
      s.classList.add("moving");
      s.style.transform = `translateY(-${s.dataset.d}em)`;
      setTimeout(() => s.classList.remove("moving"), 360 + i * 40);
    });
  }));
}
roll(amounts[0]);

/* ---------- motion: segmented ---------- */
const seg = $("#seg");
seg.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const btns = [...seg.querySelectorAll("button")];
  btns.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  seg.style.setProperty("--idx", btns.indexOf(b));
});

/* ---------- motion: confirm morph ---------- */
const morph = $("#morph");
morph.addEventListener("click", () => morph.classList.add("done"));

/* ---------- motion: toast demo ---------- */
const tst = $("#tst");
let tstTimer;
$("#tstBtn").addEventListener("click", () => {
  tst.classList.add("show");
  clearTimeout(tstTimer);
  tstTimer = setTimeout(() => tst.classList.remove("show"), 1600);
});

/* ---------- motion: push ---------- */
const push = $("#push");
push.addEventListener("click", (e) => {
  const t = e.target.closest("[data-push]");
  if (!t) return;
  push.classList.toggle("in", t.dataset.push === "in");
});

/* ---------- replay buttons ---------- */
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-replay]");
  if (!b) return;
  const id = b.dataset.replay;
  if (id === "words") playWords();
  if (id === "send") resetSend();
  if (id === "lst") restart($("#lst"), "stagger");
  if (id === "roll") { amountIdx = (amountIdx + 1) % amounts.length; roll(amounts[amountIdx]); }
  if (id === "morph") morph.classList.toggle("done");
});

/* ---------- showcase: live details ---------- */
// solace: the rest timer counts down and the ring follows it.
document.querySelectorAll("[data-timer]").forEach((el) => {
  const ring = el.closest(".ring")?.querySelector("[data-ring]");
  const TOTAL = 90;
  const CIRC = 816.8;
  let left = 47;
  const paint = () => {
    el.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
    if (ring) ring.style.strokeDashoffset = String(CIRC * (1 - left / TOTAL));
  };
  paint();
  if (reduceMotion.matches) return;
  setInterval(() => { left = left <= 0 ? 47 : left - 1; paint(); }, 1000);
});

// atlas: the assistant's reply arrives word by word, again every few seconds.
document.querySelectorAll("[data-words]").forEach((el) => {
  const text = el.textContent;
  const play = () => {
    el.classList.remove("words");
    el.innerHTML = text.split(" ").map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(" ");
    void el.offsetWidth;
    el.classList.add("words");
  };
  play();
  if (!reduceMotion.matches) setInterval(play, 7000);
});
