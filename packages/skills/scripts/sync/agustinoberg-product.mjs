// Regenerates the parts of the agustinoberg-product skill that come from @agustinoberg/brand:
// the "apply it to any project" and "portfolio" recipes. Hand-written files are never touched.
// Run through scripts/sync.mjs (`pnpm sync:skills` from the repo root).

import { skillWriter, specSections, writeSections } from "../lib/brand.mjs";

const SKILL = "agustinoberg-product";
const write = skillWriter(SKILL);
const sections = specSections("brand.md");

for (const [file, title, ids] of [
  ["references/apply-to-product.md", "Apply the design language to any product", [13]],
  ["references/portfolio.md", "Recipe: Agustín's portfolio", [14]],
]) {
  writeSections({ write, sections, file, title, ids, source: "brand.md", script: `${SKILL}.mjs` });
}
