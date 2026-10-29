// Validates every skill in skills/ before it ships through skills.sh.
// Exits with code 1 and a list of problems if anything is off.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const skillsDir = resolve(here, "../skills");

const PREFIX = "agustinoberg-";
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const MAX_NAME = 64;
const MAX_DESCRIPTION = 1024;
const MAX_BODY_LINES = 500;

const problems = [];
const fail = (skill, msg) => problems.push(`${skill}: ${msg}`);

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  const fields = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-zA-Z_.-]+):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].trim();
  }
  return { fields, body: text.slice(m[0].length) };
}

const skills = readdirSync(skillsDir).filter((d) => statSync(resolve(skillsDir, d)).isDirectory());
if (!skills.length) problems.push("no skills found in skills/");

for (const skill of skills) {
  const dir = resolve(skillsDir, skill);
  const skillFile = resolve(dir, "SKILL.md");
  if (!existsSync(skillFile)) { fail(skill, "missing SKILL.md"); continue; }

  if (!skill.startsWith(PREFIX)) fail(skill, `folder name should start with "${PREFIX}"`);

  const text = readFileSync(skillFile, "utf8");
  const fm = frontmatter(text);
  if (!fm) { fail(skill, "SKILL.md has no frontmatter block"); continue; }

  const { name, description } = fm.fields;
  if (!name) fail(skill, "frontmatter is missing `name`");
  else {
    if (name !== skill) fail(skill, `name "${name}" must match the folder name`);
    if (!NAME_RE.test(name)) fail(skill, `name "${name}" must be lowercase letters, digits and hyphens`);
    if (name.length > MAX_NAME) fail(skill, `name is longer than ${MAX_NAME} characters`);
  }
  if (!description) fail(skill, "frontmatter is missing `description`");
  else if (description.length > MAX_DESCRIPTION) fail(skill, `description is ${description.length} characters (max ${MAX_DESCRIPTION})`);

  const bodyLines = fm.body.split("\n").length;
  if (bodyLines > MAX_BODY_LINES) fail(skill, `SKILL.md body is ${bodyLines} lines (keep it under ${MAX_BODY_LINES}; move detail to references/)`);

  // Every `references/...`, `assets/...` or `scripts/...` path mentioned in SKILL.md must exist.
  for (const m of text.matchAll(/`((?:references|assets|scripts)\/[^`\s]+)`/g)) {
    if (!existsSync(resolve(dir, m[1]))) fail(skill, `SKILL.md points to ${m[1]}, which doesn't exist`);
  }

  // Every file in references/ should be reachable from SKILL.md.
  const refsDir = resolve(dir, "references");
  if (existsSync(refsDir)) {
    for (const f of readdirSync(refsDir)) {
      if (!text.includes(`references/${f}`)) fail(skill, `references/${f} is never mentioned in SKILL.md`);
    }
  }
}

if (problems.length) {
  console.error(`skills: ${problems.length} problem(s)\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`skills: ${skills.length} skill(s) valid (${skills.join(", ")})`);
