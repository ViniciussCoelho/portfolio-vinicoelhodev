export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function hasLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** BCP 47 tag for <html lang>, hreflang and Open Graph. */
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };
export const localeNames: Record<Locale, string> = { pt: "Português", en: "English" };

/**
 * Translatable content in the data files: either a plain string (same in
 * every language, e.g. "PostgreSQL") or one value per locale.
 */
export type Localized<T = string> = Record<Locale, T>;
export type Text = string | Localized;

export function tx(text: Text, locale: Locale): string {
  return typeof text === "string" ? text : text[locale];
}
