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
