# @agustinoberg/skills

Agent skills by agustín oberg, distributed through [skills.sh](https://skills.sh) (`npx skills`). They work with Claude Code, Cursor, Codex and any agent that supports the open Agent Skills format.

## Skills

| skill | what it answers | use it for |
|---|---|---|
| [`agustinoberg-design`](skills/agustinoberg-design/SKILL.md) | What my design is, exactly. | Anything that must look, move and read like I designed it: screens, components, sites, decks, Dribbble shots. Includes tokens (CSS + React Native), code for every signature pattern and a visual pre-flight. |
| [`agustinoberg-product`](skills/agustinoberg-product/SKILL.md) | How to build a product well. | Whole apps, sites and flows. Design references lead the visuals when they exist, with my touch on top; otherwise it uses my design. Adds study-first research, navigation grammar, every state, the motion frequency gate and a verification loop. Loads `agustinoberg-design`. |

## Install

The repo root has a `skills.sh.json` that points the CLI at `packages/skills/skills`.

```sh
# every skill, in the current project
npx skills add AgustinOberg/agustinoberg

# one skill, for Claude Code, without prompts
npx skills add AgustinOberg/agustinoberg --skill agustinoberg-design -a claude-code -y

# both skills, available in every project
npx skills add AgustinOberg/agustinoberg --skill agustinoberg-design --skill agustinoberg-product -g
```

The repo is private for now, so installing needs an account with access to it; see the skills CLI docs on private repositories. Once it's public, anyone can install it.

## Structure

```
packages/skills/
├─ skills/                       ← only what gets installed
│  └─ agustinoberg-<area>/
│     ├─ SKILL.md                ← frontmatter (name = folder name) + method and laws
│     ├─ references/             ← loaded on demand
│     └─ assets/                 ← files the agent copies into projects
└─ scripts/                      ← repo maintenance, never installed
   ├─ sync.mjs                   ← runs every scripts/sync/<skill>.mjs
   ├─ sync/<skill>.mjs           ← regenerates the files a skill derives from other packages
   ├─ lib/brand.mjs              ← helpers to read and split @agustinoberg/brand
   └─ validate.mjs               ← checks every skill before it ships
```

Some files are generated from `packages/brand`: they start with a "Generated from" header. Don't edit those; edit the brand spec and run the sync. Everything else in a skill is hand-written.

## Adding a skill

1. Create `skills/agustinoberg-<area>/SKILL.md`, with a `name` that matches the folder name and a `description` that says what it does and when to use it (≤ 1024 characters).
2. Keep `SKILL.md` under 500 lines and put the detail in `references/`. Mention every reference file in `SKILL.md` so agents can find it.
3. If the skill derives files from another package, add `scripts/sync/agustinoberg-<area>.mjs`.
4. Run `pnpm sync:skills` from the repo root. It syncs and validates, and fails on any problem.

## Commands

```sh
pnpm sync:skills                              # from the repo root: sync + validate
pnpm --filter @agustinoberg/skills validate   # validate only
pnpm --filter @agustinoberg/skills list       # what skills.sh would find (uses npx skills)
```
