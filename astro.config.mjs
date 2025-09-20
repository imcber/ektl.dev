import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});