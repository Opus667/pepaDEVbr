import { defineCollection, z } from "astro:content";
import { glob } from "astro:content";

const langBlock = z.object({
  summary: z.string(),
  tags: z.array(z.string()).optional(),
  body: z.string().optional(),
});

const projectSchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    hero: image().optional(),
    languages: z.object({
      pt: langBlock,
      en: langBlock,
    }),
    meta: z.object({
      created_at: z.coerce.date(),
      updated_at: z.coerce.date().optional(),
      category: z.string(),
      stage: z.string(),
      progress: z.number().min(0).max(100),
    }),
    // # slug is inferred from filename, but allow optional override
    slug: z.string().optional(),
  });

// Collections
export const collections = {
  projects: defineCollection({
    schema: projectSchema,
    // loader helpful for IDE discoverability; astro:content finds files automatically too
    // loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  }),
  insights: defineCollection({
    schema: projectSchema,
  }),
  studio: defineCollection({
    schema: projectSchema,
  }),
};
