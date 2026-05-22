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
    year: z.number(),
    scope: z.string(),
    hero_image: z.string(),
    description: z.string(),
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
