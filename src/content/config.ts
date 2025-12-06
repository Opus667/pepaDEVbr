import { defineCollection, z } from "astro:content";

const langSchema = z.object({
  summary: z.string(),
  tags: z.array(z.string()).optional(),
  body: z.string(),
});

const multiSchema = z.object({
  title: z.string(),
  hero: z.string().optional(),

  languages: z.object({
    pt: langSchema,
    en: langSchema,
  }),
  meta: z.object({
    created_at: z.date(),
    updated_at: z.date().optional(),
    category: z.string(),
    stage: z.string().optional(),
    progress: z.number().min(0).max(100).optional(),
  }),
});

export const collections = {
  insights: defineCollection({ schema: multiSchema }),
  projects: defineCollection({ schema: multiSchema }),
  studio: defineCollection({ schema: multiSchema }),
};
