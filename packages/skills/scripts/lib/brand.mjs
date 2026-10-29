// Shared helpers for sync scripts that derive skill files from @agustinoberg/brand.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const brandDir = dirname(require.resolve("@agustinoberg/brand/package.json"));

export const skillsDir = resolve(here, "../../skills");

/** Reads a file from packages/brand. */
export const readBrand = (file) => readFileSync(resolve(brandDir, file), "utf8");

/** Returns a writer for one skill folder that creates parent dirs and logs each file. */
export function skillWriter(skillName) {
  const root = resolve(skillsDir, skillName);
  return (rel, content) => {
    const path = resolve(root, rel);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
    console.log(`  wrote ${skillName}/${rel}`);
  };
}

/** Header for generated markdown, pointing at the source and the script. */
export const generatedHeader = (source, script) =>
  `<!-- Generated from packages/brand/${source} by packages/skills/scripts/sync/${script}. Do not edit here: edit the brand spec and run \`pnpm sync:skills\`. -->\n\n`;

/** Splits a brand spec into a Map of section number → markdown ("## N. Title" headings). */
export function specSections(file) {
  const sections = new Map();
  for (const part of readBrand(file).split(/^(?=## \d+\. )/m)) {
    const m = part.match(/^## (\d+)\. /);
    if (m) sections.set(Number(m[1]), part.replace(/\n---\s*$/m, "").trim());
  }
  return sections;
}

/** Writes one reference file made of the given spec sections. */
export function writeSections({ write, sections, file, title, ids, source, script }) {
  const missing = ids.filter((id) => !sections.has(id));
  if (missing.length) throw new Error(`${source} is missing sections ${missing.join(", ")} needed for ${file}`);
  const body = ids.map((id) => sections.get(id)).join("\n\n---\n\n");
  write(file, `${generatedHeader(source, script)}# ${title}\n\n${body}\n`);
}
