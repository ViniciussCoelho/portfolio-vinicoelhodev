import type { Localized } from "@/i18n/config";

/**
 * Personal info and external links.
 *
 * Anything left as an empty string is treated as "not configured" and is
 * simply not rendered — no broken or made-up links end up on the page.
 *
 * URLs can also be set through environment variables (see `.env.example`),
 * which take precedence over the values written here. An env var that exists
 * but is empty is ignored (falls back to the value here), so pasting
 * `.env.example` into Vercel as-is doesn't wipe the links.
 */

export const site = {
  name: "Vinicius Coelho",
  role: { en: "Full Stack Software Engineer", pt: "Engenheiro de Software Full Stack" } satisfies Localized,
  // Used in Open Graph images and <meta> descriptions.
  tagline: { en: "Full stack, backend focused", pt: "Full stack com foco em backend" } satisfies Localized,
  description: {
    en: "Full stack Software Engineer focused on backend. 5 years of experience with B2B SaaS platforms using Ruby on Rails, Node.js, NestJS, React and TypeScript.",
    pt: "Engenheiro de Software full stack com foco em backend. 5 anos de experiência com plataformas SaaS B2B usando Ruby on Rails, Node.js, NestJS, React e TypeScript.",
  } satisfies Localized,

  // Production URL of this portfolio, e.g. "https://vinicoelho.dev".
  // Falls back to the Vercel production URL, then to localhost.
  // TODO: set your domain here or in NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
} as const;

export const links = {
  email: process.env.NEXT_PUBLIC_EMAIL || "vinicius2001@gmail.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ViniciussCoelho",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/viniciuscoelhodev",

  // TODO: drop a PDF at public/resume.pdf and set this to "/resume.pdf",
  // or point it to an external link. (Mind personal data such as your phone
  // number before publishing it.)
  resume: process.env.NEXT_PUBLIC_RESUME_URL || "",
} as const;

// TODO: URL of the blog. Also configurable via BLOG_URL.
export const BLOG_URL = process.env.BLOG_URL || "";

// TODO: URL of the YouTube channel. Also configurable via YOUTUBE_URL.
export const YOUTUBE_URL = process.env.YOUTUBE_URL || "";
