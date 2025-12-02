import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import lineClamp from "@tailwindcss/line-clamp";

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale:true
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },

  base: '/ektl.dev/', 
  site: "https://ektl.dev",
});
