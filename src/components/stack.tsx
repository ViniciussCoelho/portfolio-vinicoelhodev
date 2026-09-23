import { stack } from "@/data/stack";
import { tx, type I18nProps } from "@/i18n";
import { Doodle } from "./sketch";
import { Section, SectionTitle } from "./ui";

export function Stack({ locale, t }: I18nProps) {
  return (
    <Section id="stack">
      <SectionTitle id="stack" number="04." className="mb-16 text-center lg:mb-20">
        {t.stack.title}
      </SectionTitle>

      <dl className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-16">
        {stack.map((group) => (
          <div key={group.label.en}>
            <dt className="hand inline-block text-4xl font-semibold">
              {group.label[locale]}
              <Doodle name="squiggle" strokeWidth={4.5} stretch className="mt-1 h-3 w-full text-muted" />
            </dt>
            <dd className="mt-5">
              <ul className="space-y-2 text-lg">
                {group.items.map((item) => (
                  <li key={tx(item, "en")}>{tx(item, locale)}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
