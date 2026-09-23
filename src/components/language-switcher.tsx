import { htmlLang, localeNames, locales, type I18nProps } from "@/i18n";

/**
 * Language dropdown built on <details>/<summary>: keyboard accessible and
 * works without any client-side JavaScript. The choice is remembered by the
 * proxy (see src/proxy.ts) through a cookie.
 */
export function LanguageSwitcher({ locale, t }: I18nProps) {
  return (
    <details className="lang-menu relative">
      <summary
        aria-label={`${t.language}: ${localeNames[locale]}`}
        className="hand flex cursor-pointer list-none items-center gap-1 rounded-sm px-1 text-[1.65rem] font-semibold select-none [&::-webkit-details-marker]:hidden"
      >
        {locale.toUpperCase()}
        <svg viewBox="0 0 20 12" aria-hidden="true" className="lang-chevron mt-1 h-2.5 w-4 transition-transform">
          <path
            d="M2 2 C 6 6, 8 8, 10 10 C 12 7, 15 5, 18 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>

      <ul className="sketch-box absolute right-0 z-20 mt-3 w-44 -rotate-1 p-2 font-serif text-base">
        {locales.map((l) => {
          const current = l === locale;
          return (
            <li key={l}>
              <a
                href={`/${l}`}
                hrefLang={htmlLang[l]}
                lang={htmlLang[l]}
                aria-current={current ? "page" : undefined}
                className={`flex items-center justify-between rounded-[3px] px-3 py-2 text-fg hover:bg-code ${current ? "font-bold" : ""}`}
              >
                {localeNames[l]}
                {current && <span aria-hidden="true">✓</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
