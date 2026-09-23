import { about } from "@/data/about";
import type { I18nProps } from "@/i18n";
import { Doodle } from "./sketch";
import { Note, Section, SectionTitle } from "./ui";

export function About({ locale, t }: I18nProps) {
  const [lede, ...rest] = about[locale];
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-12">
            <SectionTitle id="about" number="01." className="-rotate-2">
              {t.about.title}
            </SectionTitle>
            <div className="mt-14 hidden lg:block">
              <Note className="rotate-2">{t.about.note}</Note>
              <Doodle name="squiggle" strokeWidth={2} className="mt-2 h-5 w-32 text-muted" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 xl:col-span-7 xl:col-start-6">
          <p className="font-serif text-2xl leading-snug sm:text-3xl sm:leading-snug">{lede}</p>
          <div className="mt-10 grid gap-8 text-lg leading-[1.8] md:grid-cols-2 md:gap-10">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
