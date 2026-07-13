import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date(),
  }),
});

const research = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/research",
  }),

  schema: z.object({
    title: z.string(),
    lab: z.string(),
    advisor: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    dates: z.string(),
    tags: z.array(z.string()),
    logos: z.array(z.string()),
    poster: z.string().optional(),
  }),
});

export const collections = {
  writing,
  research,
};