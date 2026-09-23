import { BLOG_URL, YOUTUBE_URL } from "@/data/site";
import type { I18nProps } from "@/i18n";
import { isSet } from "@/lib/site";
import { Doodle } from "./sketch";
import { ConfigHint, Section, SectionTitle } from "./ui";

/** Blog and YouTube channel. Each link only shows up once its URL is set. */
export function Writing({ t }: I18nProps) {
  const channels = [
    { key: "blog", href: BLOG_URL, label: t.writing.blogCta, env: "BLOG_URL" },
    { key: "youtube", href: YOUTUBE_URL, label: t.writing.youtubeCta, env: "YOUTUBE_URL" },
  ];
  const configured = channels.filter((c) => isSet(c.href));
  const missing = channels.filter((c) => !isSet(c.href)).map((c) => c.env);

  return (
    <Section id="writing">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <SectionTitle
          id="writing"
          number="05."
          doodle="none"
          className="-rotate-3 lg:col-span-5"
          titleClassName="hand text-[clamp(4.5rem,10vw,8.5rem)] font-bold"
        >
          {t.writing.title}
        </SectionTitle>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="sketch-box rotate-1 p-8 sm:p-10">
            <span aria-hidden="true" className="tape" />
            <p className="font-serif text-xl leading-[1.7] hyphens-auto md:text-justify sm:text-2xl sm:leading-[1.6]">{t.writing.body}</p>

            {configured.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-xl">
                {configured.map((c) => (
                  <li key={c.key}>
                    <a href={c.href} className="ink-link" target="_blank" rel="noopener noreferrer">
                      {c.label} <span aria-hidden="true">→</span>
                      <span className="sr-only"> ({t.newTab})</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="hand mt-8 text-3xl text-muted">{t.writing.soon}</p>
            )}
            {missing.length > 0 && (
              <p className="mt-4">
                <ConfigHint>{missing.join(", ")}: src/data/site.ts or .env</ConfigHint>
              </p>
            )}
          </div>
          <Doodle
            name="arrowLoop"
            strokeWidth={2}
            className="absolute -bottom-20 -left-28 hidden h-24 w-44 text-muted lg:block"
          />
        </div>
      </div>
    </Section>
  );
}
