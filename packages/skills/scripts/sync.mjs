// Runs every skill's sync script (scripts/sync/<skill-name>.mjs).
// A sync script regenerates the files a skill derives from other packages
// (for example, the design skill from @agustinoberg/brand). Skills without
// derived files don't need one.

import { readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const syncDir = resolve(here, "sync");

const scripts = readdirSync(syncDir).filter((f) => f.endsWith(".mjs")).sort();
for (const file of scripts) {
  console.log(`sync ${file.replace(/\.mjs$/, "")}`);
  await import(pathToFileURL(resolve(syncDir, file)).href);
}
