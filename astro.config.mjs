import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
