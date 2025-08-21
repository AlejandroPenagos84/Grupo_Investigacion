import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object(
        {
            name: z.string(),
            title: z.string(),
            imagePath: z.string(),
            altText: z.string(),
            date: z.date(),
            description: z.string()
        }),
});

const newsCollection = defineCollection({
    schema: z.object(
        {
            name: z.string(),
            title: z.string(),
            imagePath: z.string(),
            altText: z.string(),
            date: z.date(),
            description: z.string()
        }),
});

export const collections = {
    projects: projectsCollection,
    news: newsCollection
}
