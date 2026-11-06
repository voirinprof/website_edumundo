import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: ({ image }) => z.object({
    title: z.string(), description: z.string(), theme: z.string(), ageMin: z.number(), ageMax: z.number(),
    duration: z.number(), location: z.enum(['inside','outside','both']), emoji: z.string(),
    materials: z.array(z.string()), objectives: z.array(z.string()), safety: z.string().optional(),
    featured: z.boolean().default(false),
    cover: image().optional(), coverAlt: z.string().optional()
  })
});
export const collections = { activities };
