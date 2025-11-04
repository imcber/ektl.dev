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
      tooltip: z.string(),
      contact: z.string(),
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

const aboutMeCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/about-me",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    hello: z.string(),
    about: z.string(),
    table: z.array(
      z.object({
        description: z.string(),
        value: z.string(),
      }),
    ),
  }),
});

export const collections = {
  home: greetingCollection,
  aboutMe: aboutMeCollection
};
