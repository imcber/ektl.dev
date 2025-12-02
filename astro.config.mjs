import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import lineClamp from "@tailwindcss/line-clamp";

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      strategy: 'prefix'
    },
    base: '/ekatl.dev',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  base: '/ekatl.dev/', 
  site: "https://ekatl.dev",
});
