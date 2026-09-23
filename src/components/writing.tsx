import { BLOG_URL } from "@/data/site";
import type { I18nProps } from "@/i18n";
import { isSet } from "@/lib/site";
import { Doodle } from "./sketch";
import { ConfigHint, Section, SectionTitle } from "./ui";

export function Writing({ t }: I18nProps) {
  return (
    <Section id="writing">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <SectionTitle
          id="writing"
          number="05."
          doodle="none"
          className="-rotate-3 lg:col-span-5"
          titleClassName="hand text-[clamp(5rem,12vw,10rem)] font-bold"
        >
          {t.writing.title}
        </SectionTitle>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="sketch-box rotate-1 p-8 sm:p-10">
            <span aria-hidden="true" className="tape" />
            <p className="font-serif text-xl leading-[1.7] sm:text-2xl sm:leading-[1.6]">
              {t.writing.body}
            </p>
            <p className="mt-8 text-xl">
              {isSet(BLOG_URL) ? (
                <a href={BLOG_URL} className="ink-link" target="_blank" rel="noopener noreferrer">
                  {t.writing.cta} <span aria-hidden="true">→</span>
                  <span className="sr-only"> ({t.newTab})</span>
                </a>
              ) : (
                <>
                  <span className="hand text-3xl text-muted">{t.writing.soon}</span>{" "}
                  <ConfigHint>BLOG_URL: src/data/site.ts or .env</ConfigHint>
                </>
              )}
            </p>
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
