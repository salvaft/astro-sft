// Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// Define a `type` and `schema` for each collection
const cvs = defineCollection({
  type: "data",
  schema: z.object({
    company: z.string(),
    logo: z.string(),
    description: z.string(),
    author: z.string(),
    jobs: z.array(reference("work")),
    education: z.array(reference("education")),
    profile: reference("profile"),
    tags: z.array(z.string()),
  }),
});

// Define a `type` and `schema` for each collection
const cls = defineCollection({
  type: "content",
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
    }),
  }),
});

const skills = defineCollection({
  type: "data",
  schema: z.object({
    short: z.record(z.string()),
    extra: z.record(z.string()).optional(),
  }),
});

const profile = defineCollection({
  type: "data",
  schema: z.object({
    text: z.string(),
    tags: z.array(z.string()),
  }),
});

// TOOD use same interface for work?
const education = defineCollection({
  type: "content",
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
  type: "content",
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
  type: "data",
  schema: z.record(
    z.object({
      proficiency: z.string(),
      flag: z.string(),
    })
  ),
});
const personal = defineCollection({
  type: "data",
  schema: z.object({
    social: z.record(
      z.object({
        username: z.string(),
        href: z.string(),
      })
    ),
    name: z.string(),
    surname: z.string(),
    profession: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
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
