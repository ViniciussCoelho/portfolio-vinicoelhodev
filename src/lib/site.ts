import { site } from "@/data/site";

/** True for values that were actually filled in (not empty/whitespace). */
export function isSet(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export const isDev = process.env.NODE_ENV !== "production";

/** Absolute base URL of the site, used by metadata, sitemap and robots. */
export function siteUrl(): URL {
  if (isSet(site.url)) return new URL(site.url);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (isSet(vercel)) return new URL(`https://${vercel}`);
  return new URL("http://localhost:3000");
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
