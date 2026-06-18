import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    category: z.enum(['restaurant', 'retail', 'hospitality-group']),
    name: z.string(),
    client: z.string(),
    location: z.string(),
    year: z.number().optional(),
    scope: z.string().optional(),
    designer: z.string().optional(),
    budget: z.string().optional(),
    programme: z.string().optional(),
    features: z.array(z.string()).default([]),
    hero_image: z.string(),
    description: z.string(),
    /* Optional structured body sections — each renders as <h3> +
       paragraphs + bullet list on the detail page. Use when the project
       has headed copy ("Project Overview", "Key Challenges", etc).
       Older projects without sections continue to render as flat
       description paragraphs only. */
    sections: z
      .array(
        z.object({
          heading: z.string(),
          paragraphs: z.array(z.string()).default([]),
          bullets: z.array(z.string()).default([]),
        })
      )
      .default([]),
    order: z.number().default(100),
    gallery: z
      .array(
        z.object({
          image: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };
