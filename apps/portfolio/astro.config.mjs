import { defineConfig } from "astro/config";

export default defineConfig({
  // Pages read PUBLIC_SITE_URL from .env; CI can set it in the environment too.
  site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",
  // English is primary and lives at the root; Spanish is a translation under /es/.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  server: { port: 4321 },
  devToolbar: { enabled: false },
});
