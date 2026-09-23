import { education, experience } from "@/data/experience";
import type { I18nProps } from "@/i18n";
import { Doodle } from "./sketch";
import { Section, SectionTitle } from "./ui";

export function Experience({ locale, t }: I18nProps) {
  return (
    <Section id="experience">
      <SectionTitle id="experience" number="02." doodle="double" className="mb-16 rotate-1 lg:mb-24 lg:text-right">
        {t.experience.title}
      </SectionTitle>

      <ol className="space-y-24 lg:space-y-32">
        {experience.map((job) => (
          <li key={job.company}>
            <article className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <header className="lg:col-span-4">
                <h3 className="pl-8 font-serif text-5xl font-bold sm:text-6xl">
                  <span className="relative inline-block">
                    {job.url ? (
                      <a href={job.url} className="text-fg">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                    <Doodle
                      name="circle"
                      strokeWidth={2.2}
                      stretch
                      className="absolute -top-6 -left-9 h-[calc(100%+3rem)] w-[calc(100%+4.5rem)]"
                    />
                  </span>
                </h3>
                <p className="mt-8 font-sans font-light text-muted">{job.location[locale]}</p>
                <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed font-light text-muted">
                  <span className="sr-only">{t.experience.technologies}: </span>
                  {job.technologies.join(" · ")}
                </p>
              </header>

              <div className="space-y-14 lg:col-span-8 xl:col-span-7 xl:col-start-6">
                {job.roles.map((role, i) => (
                  <section key={role.title.en} aria-label={role.title[locale]}>
                    {i > 0 && <Doodle name="squiggle" strokeWidth={2} className="mb-10 h-5 w-24 text-muted" />}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h4 className={`hand text-4xl font-semibold ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                        {role.title[locale]}
                      </h4>
                      <p className="font-sans font-light text-muted">{role.period[locale]}</p>
                    </div>
                    <ul className="mt-7 grid gap-x-10 gap-y-5 text-lg leading-[1.6] md:grid-cols-2">
                      {role.highlights[locale].map((item) => (
                        <li key={item} className="flex gap-3">
                          <Doodle name="check" strokeWidth={2.2} className="mt-1 size-5 shrink-0" />
                          <span className="min-w-0 flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-24 grid gap-8 lg:mt-32 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h3 className="hand inline-block -rotate-2 text-4xl font-semibold">
            {t.experience.education}
            <Doodle name="underline" strokeWidth={2.5} stretch className="h-3 w-full" />
          </h3>
        </div>
        <ul className="space-y-6 lg:col-span-8 xl:col-span-7 xl:col-start-6">
          {education.map((item) => (
            <li key={item.school} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-xl">
                <span className="font-bold">{item.course[locale]}</span>
                <span className="text-muted"> · {item.school}</span>
              </p>
              <p className="font-sans font-light text-muted">{item.period[locale]}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
