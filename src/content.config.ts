import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        tagline: z.string().max(160),
        category: z.enum(['hardware', 'embedded', 'software-ai', 'scientific-instrumentation']),
        featured: z.boolean().default(false),
        date: z.coerce.date(),
        heroImage: z.string(),
        tools: z.array(z.string()),
        specs: z.record(z.string(), z.string()).optional(),
        githubUrl: z.string().url().optional(),
        docUrl: z.string().url().optional(),
        cadUrl: z.string().url().optional(),
        gallery: z.array(z.object({
            src: z.string(),
            caption: z.string().optional(),
        }))
        .optional(),
    }),
});

export const collections = {
    projects
};