import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const cvs = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/cvs" }),
  schema: z.object({
    company: z.string(),
    logo: z.string(),
    date: z.date(),
    description: z.string(),
    jobTitle: z.string(),
    author: z.string(),
    jobs: z.array(reference("work")),
    education: z.array(reference("education")),
    profile: reference("profile"),
    tags: z.array(z.string()),
    photo: z.boolean(),
    lang: z.string(),
  }),
});

const cls = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cls" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    organization: z.string(),
    position: z.string(),
    tags: z.array(z.string()),
    contact: z.object({
      email: z.string(),
      fullName: z.string(),
      companyAddress: z.string(),
      position: z.string().optional(),
    }),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/skills" }),
  schema: z.object({
    short: z.record(z.string(), z.string()),
    extra: z.record(z.string(), z.string()).optional(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/profile" }),
  schema: z.object({
    tags: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    titleShort: z.string(),
    points: z.optional(z.array(z.string())),
    when: z.string(),
    where: z.string(),
    organization: z.string(),
    placeShort: z.string(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    points: z.optional(z.array(z.string())),
    when: z.string(),
    where: z.string(),
    organization: z.string(),
    description: z.string(),
  }),
});

const languages = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/languages" }),
  schema: z.record(
    z.string(),
    z.object({
      proficiency: z.record(z.string(), z.string()),
      flag: z.string(),
    }),
  ),
});

const personal = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/personal" }),
  schema: z.object({
    social: z.record(
      z.string(),
      z
        .object({
          username: z.string(),
          href: z.string(),
          image: z.string().optional(),
          icon: z.string().optional(),
        })
        .refine(
          (data) => {
            const image = "image" in data;
            const icon = "icon" in data;
            return (image && !icon) || (!image && icon);
          },
          {
            message: "Object can have either key1 or key2, but not both.",
          },
        ),
    ),
    name: z.string(),
    surname: z.string(),
    profession: z.string(),
    headshot: z.string().optional(),
  }),
});

export const collections = {
  cvs,
  cls,
  profile,
  work,
  languages,
  education,
  skills,
  personal,
};
