import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    type: z.enum(['learning', 'project']).optional(),
    isPinned: z.boolean().optional(),
    summary: z.string(),
  })
});

export const collections = {
  posts: posts,
};
