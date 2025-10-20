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
    contact: z.object({
      touch: z.string(),
      description: z.string(),
      resume: z.string(),
      social: z.array(
        z.object({
          title: z.string(),
          url: z.string(),
        }),
      ),
    }),
  }),
});

export const collections = {
  home: greetingCollection,
};
