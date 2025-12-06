import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

//
// SCHEMA REUTILIZÁVEL (equivalente ao &project_fields do YAML)
//
const projectSchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    hero: image().optional(),

    languages: z.object({
      pt: z.object({
        summary: z.string(),
        tags: z.array(z.string()).optional(),
        body: z.string().optional(),
      }),
      en: z.object({
        summary: z.string(),
        tags: z.array(z.string()).optional(),
        body: z.string().optional(),
      }),
    }),

    meta: z.object({
      created_at: z.coerce.date(),
      updated_at: z.coerce.date().optional(),
      category: z.string(),
      stage: z.string(),
      progress: z.number(),
    }),
  });

//
// COLEÇÕES
//

// Projects
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

// Insights
const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

// Studio
const studio = defineCollection({
  loader: glob({ base: "./src/content/studio", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

//
// EXPORTA TUDO
//
export const collections = {
  projects,
  insights,
  studio,
};
