import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* -------- SCHEMA BASE (REUTILIZÁVEL) -------- */
const baseSchema = ({ image }: { image: any }) =>
  z.object({
    // 🔑 usado no slug pelo Netlify CMS
    entry: z.string(),

    hero: image().optional(),
    tags: z.array(z.string()).optional(),

    meta: z.object({
      created_at: z.coerce.date(),
      updated_at: z.coerce.date().optional(),
      progress: z.number().min(0).max(200).optional(),
    }),

    languages: z.object({
      pt: z.object({
        title: z.string(),
        summary: z.string(),
        content: z.string(), // 🔥 markdown vindo do CMS
      }),
      en: z.object({
        title: z.string(),
        summary: z.string(),
        content: z.string(), // 🔥 markdown vindo do CMS
      }),
    }),
  });

/* --------------- PROJECTS -------------- */
const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: baseSchema,
});

/* --------------- INSIGHTS --------------- */
const insights = defineCollection({
  loader: glob({
    base: "./src/content/insights",
    pattern: "**/*.{md,mdx}",
  }),
  schema: baseSchema,
});

/* ---------------- STUDIO ---------------- */
const studio = defineCollection({
  loader: glob({
    base: "./src/content/studio",
    pattern: "**/*.{md,mdx}",
  }),
  schema: baseSchema,
});

/* -------- EXPORTA TODAS JUNTAS -------- */
export const collections = {
  projects,
  insights,
  studio,
};
