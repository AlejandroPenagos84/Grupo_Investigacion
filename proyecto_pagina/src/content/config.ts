import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    date: z.date(),
    imagePath: z.string(),
    altText: z.string(),
    description: z.string(),
  }),
});

const quienesSomos = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    date: z.date(),
    description: z.string(),
    imagePath: z.string().optional(), // <-- ahora opcional
    altText: z.string().optional(),   // <-- ahora opcional
  }),
});

export const collections = {
  quienesSomos,
};