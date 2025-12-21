import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* --------------- PROJECTS -------------- */
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      hero: image().optional(),

      languages: z.object({
        pt: z.object({
          summary: z.string(),
          tags: z.array(z.string()).optional(),
          body: z.string(),
        }),
        en: z.object({
          summary: z.string(),
          tags: z.array(z.string()).optional(),
          body: z.string(),
        }),
      }),

      meta: z.object({
        created_at: z.coerce.date(),
        updated_at: z.coerce.date().optional(),
        category: z.string(),
        stage: z.string(),
        progress: z.number().min(0).max(100),
      }),
    }),
});

/* --------------- INSIGHTS --------------- */
const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      hero: image().optional(),

      languages: z.object({
        pt: z.object({
          summary: z.string(),
          tags: z.array(z.string()).optional(),
          body: z.string(),
        }),
        en: z.object({
          summary: z.string(),
          tags: z.array(z.string()).optional(),
          body: z.string(),
        }),
      }),

      meta: z.object({
        created_at: z.coerce.date(),
        updated_at: z.coerce.date().optional(),
        category: z.string().optional(),
        stage: z.string().optional(),
        progress: z.number().min(0).max(100).optional(),
      }),
    }),
});

/* ---------------- STUDIO ---------------- */
const studio = defineCollection({
  loader: glob({ base: "./src/content/studio", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      hero: image().optional(),

      languages: z.object({
        pt: z.object({
          summary: z.string(),
          tags: z.array(z.string()).optional(),
          body: z.string(),
        }),
        en: z.object({
          summary: z.string(),
          tags: z.array(z.string()).optional(),
          body: z.string(),
        }),
      }),

      meta: z.object({
        created_at: z.coerce.date(),
        updated_at: z.coerce.date().optional(),
      }),
    }),
});

/* -------- EXPORTA TODAS JUNTAS -------- */
export const collections = {
  projects,
  insights,
  studio,
};
