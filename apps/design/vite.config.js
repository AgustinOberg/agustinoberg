import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const brandDir = dirname(require.resolve("@agustinoberg/brand/package.json"));

const read = (file) => readFileSync(resolve(brandDir, file), "utf8");

const TYPES = {
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

// Files served at the site root so any AI can find them from the URL alone.
function aiFiles(siteUrl) {
  const specEn = read("brand.md");
  const tokensJson = read("tokens.json");

  const llms = `# Agustín Oberg · design language

> The design language of Agustín Oberg, who works like a design studio. Use it to design anything with his hand: mobile apps, websites, portfolios, decks or Dribbble shots. It covers philosophy, decisions with reasons, if/then rules, life (real content, so nothing looks AI-made), light and dark tokens, typography, components, micro-blurs, motion and voice. Available in English and Spanish.

How to use it:
1. Read the spec. English is primary; a Spanish translation exists.
2. Read section 4, "Range and life", before the first screen: gather real content first.
3. For someone else's product (for example a travel app), follow "Work like a studio": the product gets its own identity, with my craft and a few signature touches. My own look (the house style) is only for my brand or when asked. For my portfolio, follow "Recipe: portfolio".
4. Take every value from the tokens. Don't hardcode colors, radii, blurs or timings.
5. Never invent facts about me (projects, clients, metrics, bio). Ask, or use placeholders marked [TODO].
If the English spec and the Spanish translation ever differ, English (brand.md) wins.

## Spec

- [Design language](${siteUrl}/brand.md): the full spec, in English (primary).
- [Design language, Spanish](${siteUrl}/brand.es.md): the Spanish translation.
- [Everything in one file](${siteUrl}/llms-full.txt): the English spec plus all tokens, for tools that read a single URL.

## Tokens

- [tokens.css](${siteUrl}/tokens.css): CSS variables for light and dark, base components and micro-blur/motion classes, ready to import.
- [tokens.json](${siteUrl}/tokens.json): every value as design tokens (color per mode, atmospheres, type, radius, space, blur, motion).

## Visual guide

- [English](${siteUrl}/): live demos of every pattern.
- [Spanish](${siteUrl}/es/): the same guide in Spanish.
`;

  const llmsFull = `${specEn}

---

## Appendix: tokens.json

Source: ${siteUrl}/tokens.json

\`\`\`json
${tokensJson.trim()}
\`\`\`
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${siteUrl}/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/"/>
    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}/es/"/>
  </url>
  <url>
    <loc>${siteUrl}/es/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/"/>
    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}/es/"/>
  </url>
  <url><loc>${siteUrl}/brand.md</loc></url>
  <url><loc>${siteUrl}/brand.es.md</loc></url>
  <url><loc>${siteUrl}/llms.txt</loc></url>
</urlset>
`;

  return {
    "brand.md": specEn,
    "brand.es.md": read("brand.es.md"),
    "tokens.css": read("tokens.css"),
    "tokens.json": tokensJson,
    "llms.txt": llms,
    "llms-full.txt": llmsFull,
    "robots.txt": robots,
    "sitemap.xml": sitemap,
  };
}

// Cloudflare Pages host config. Pages already serves /es/ from es/index.html and adds
// trailing slashes; these cover the old /en/ route and give AI files the right types.
function hostFiles(base) {
  const redirects = `${base}en ${base} 301
${base}en/* ${base} 301
`;
  const headers = `${base}brand.md
  Content-Type: text/markdown; charset=utf-8
${base}brand.es.md
  Content-Type: text/markdown; charset=utf-8
${base}llms.txt
  Content-Type: text/plain; charset=utf-8
${base}llms-full.txt
  Content-Type: text/plain; charset=utf-8
${base}assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
  return { _redirects: redirects, _headers: headers };
}

function aiFilesPlugin(siteUrl, base) {
  return {
    name: "ai-files",
    configureServer(server) {
      // Friendly URLs in dev: add the trailing slash to page folders and send the
      // old /en/ route to the English root. Production hosts should do the same.
      const redirects = new Map([
        ...(base === "/" ? [] : [[base.replace(/\/$/, ""), base]]),
        [`${base}es`, `${base}es/`],
        [`${base}en`, base],
        [`${base}en/`, base],
      ]);
      server.middlewares.use((req, res, next) => {
        const path = (req.url || "").split("?")[0];
        if (redirects.has(path)) {
          res.statusCode = 301;
          res.setHeader("Location", redirects.get(path));
          return res.end();
        }
        if (!path.startsWith(base)) return next();
        const name = path.slice(base.length);
        const files = aiFiles(siteUrl);
        if (!(name in files)) return next();
        res.setHeader("Content-Type", TYPES[name.slice(name.lastIndexOf("."))] || "text/plain");
        res.end(files[name]);
      });
    },
    generateBundle() {
      for (const [fileName, source] of Object.entries({ ...aiFiles(siteUrl), ...hostFiles(base) })) {
        this.emitFile({ type: "asset", fileName, source });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, here, "VITE_");
  const siteUrl = (env.VITE_SITE_URL || "http://localhost:5173").replace(/\/$/, "");
  const base = new URL(siteUrl).pathname.replace(/\/?$/, "/");

  return {
    base,
    // Multi-page site: unknown URLs 404 instead of falling back to the English page.
    appType: "mpa",
    plugins: [aiFilesPlugin(siteUrl, base)],
    build: {
      rollupOptions: {
        input: {
          en: resolve(here, "index.html"),
          es: resolve(here, "es/index.html"),
          notFound: resolve(here, "404.html"),
        },
      },
    },
  };
});
