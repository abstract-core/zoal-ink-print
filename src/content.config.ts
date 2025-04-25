import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: z.object({
    Name: z.string(),
    Slug: z.string(),
    Description: z.nullable(z.string()),
    Url: z.nullable(z.string()),
  }),
});

export const collections = { pages };
