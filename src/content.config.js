import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const greetingCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/home",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    greetings: z.object({
      hello: z.string(),
      name: z.string(),
      rest: z.string(),
      alias: z.string(),
      profile: z.string(),
      projects: z.string(),
      about: z.string(),
    }),
  }),
});

export const collections = {
  home: greetingCollection,
};
