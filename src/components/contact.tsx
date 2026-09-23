import { links } from "@/data/site";
import type { I18nProps } from "@/i18n";
import { isSet } from "@/lib/site";
import { Doodle } from "./sketch";
import { ConfigHint, Note, Section, SectionTitle, TextLink } from "./ui";

export function Contact({ t }: I18nProps) {
  const channels = [
    { label: t.contact.email, value: links.email, href: `mailto:${links.email}`, display: links.email },
    { label: t.contact.github, value: links.github, href: links.github, display: prettyUrl(links.github) },
    { label: t.contact.linkedin, value: links.linkedin, href: links.linkedin, display: prettyUrl(links.linkedin) },
  ];
  const configured = channels.filter((c) => isSet(c.value));
  const missing = channels.filter((c) => !isSet(c.value)).map((c) => c.label);

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <SectionTitle id="contact" number="06." doodle="none" className="rotate-1" titleClassName="font-sans text-3xl font-light">
            {t.contact.title}
          </SectionTitle>
          <p className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] font-bold tracking-tight">
            {t.contact.sayBefore}{" "}
            <span className="relative mx-3 inline-block">
              {t.contact.sayCircled}
              <Doodle
                name="circle"
                strokeWidth={2.5}
                stretch
                className="absolute -top-4 -left-7 h-[calc(100%+2rem)] w-[calc(100%+3.5rem)]"
              />
            </span>
            {t.contact.sayAfter}
          </p>
          <p className="mt-10 max-w-xl text-lg leading-[1.8] hyphens-auto md:text-justify">
            {t.contact.body}
          </p>
        </div>

        <div className="relative min-w-0 lg:col-span-5 lg:self-end">
          {configured.length > 0 && (
            <>
              <Note className="mb-6 -rotate-2">{t.contact.note}</Note>
              <Doodle
                name="bracket"
                stretch
                strokeWidth={2}
                className="absolute top-14 -left-10 hidden h-[calc(100%-3.5rem)] w-5 text-muted lg:block"
              />
            </>
          )}
          {configured.length > 0 && (
            <dl className="space-y-5">
              {configured.map((c) => (
                <div key={c.label}>
                  <dt className="font-sans text-sm font-light tracking-wide text-muted uppercase">{c.label}</dt>
                  <dd className="mt-1 text-lg [overflow-wrap:anywhere] sm:text-2xl">
                    <TextLink href={c.href} newTabLabel={t.newTab}>{c.display}</TextLink>
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {missing.length > 0 && (
            <p className="mt-5">
              <ConfigHint>
                {t.dev.notSet} {missing.join(", ")}. {t.dev.edit} src/data/site.ts
              </ConfigHint>
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}

function prettyUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
