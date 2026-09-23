import type { MetadataRoute } from "next";
import { htmlLang, locales } from "@/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], new URL(`/${l}`, base).toString()]));
  return locales.map((l) => ({
    url: new URL(`/${l}`, base).toString(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
