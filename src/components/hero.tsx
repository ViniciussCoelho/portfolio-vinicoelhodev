import { hero } from "@/data/about";
import { links, site } from "@/data/site";
import type { I18nProps } from "@/i18n";
import { isSet } from "@/lib/site";
import { Bunny, Doodle } from "./sketch";
import { ConfigHint, TextLink } from "./ui";

export function Hero({ locale, t }: I18nProps) {
  const cta = [
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: t.hero.resume, href: links.resume },
  ];
  const missing = cta.filter((l) => !isSet(l.href)).map((l) => l.label);
  const [first, ...rest] = site.name.split(" ");

  return (
    <section aria-labelledby="hero-title" className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <p aria-hidden="true" className="hand mb-2 inline-block -rotate-3 text-3xl text-muted sm:text-4xl">
          {t.hero.hi}
        </p>

        <h1
          id="hero-title"
          className="font-serif text-[clamp(3.25rem,9vw,8rem)] leading-[0.92] font-bold tracking-tight"
        >
          {first}
          <br />
          <span className="relative inline-block">
            {rest.join(" ")}
            <Doodle
              name="underlineDouble"
              trigger="load"
              delay={0.9}
              duration={0.9}
              strokeWidth={3}
              stretch
              className="absolute -bottom-5 -left-1 h-7 w-[calc(100%+0.5rem)] sm:-bottom-7 sm:h-9"
            />
          </span>
        </h1>

        <p className="mt-12 font-sans text-2xl leading-[1.7] font-light sm:text-3xl sm:leading-[1.7]">
          {t.hero.roleBefore}{" "}
          <span className="relative mx-5 inline-block whitespace-nowrap">
            {t.hero.roleCircled}
            <Doodle
              name="circle"
              trigger="load"
              delay={1.8}
              duration={0.8}
              strokeWidth={3.5}
              stretch
              className="absolute -top-3 -left-5 h-[calc(100%+1.5rem)] w-[calc(100%+2.5rem)]"
            />
          </span>
          {t.hero.roleAfter}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-[1.8] sm:text-xl sm:leading-[1.75]">{hero.intro[locale]}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg">
          <a href="#projects" className="group inline-flex items-center gap-2 font-bold text-fg">
            <span className="ink-link">{t.hero.seeProjects}</span>
            <Doodle
              name="arrowDown"
              trigger="load"
              delay={2.4}
              strokeWidth={2.2}
              className="h-9 w-5 transition-transform group-hover:translate-y-1"
            />
          </a>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {cta
              .filter((l) => isSet(l.href))
              .map((l) => (
                <li key={l.label}>
                  <TextLink href={l.href} newTabLabel={t.newTab}>{l.label}</TextLink>
                </li>
              ))}
          </ul>
        </div>
        {missing.length > 0 && (
          <p className="mt-4">
            <ConfigHint>
              {t.dev.notSet} {missing.join(", ")}. {t.dev.edit} src/data/site.ts
            </ConfigHint>
          </p>
        )}
      </div>

      <div className="relative mx-auto w-52 sm:w-64 lg:col-span-5 lg:w-full lg:max-w-md">
        <Bunny className="w-full rotate-3" />

        <div aria-hidden="true" className="absolute -top-6 -left-44 hidden w-48 xl:block">
          <p className="hand -rotate-6 text-[1.7rem] text-muted">{t.hero.bunnyNote}</p>
          <Doodle name="arrow" trigger="load" delay={3} strokeWidth={2} className="ml-16 h-14 w-28 rotate-12" />
        </div>
        <Doodle name="star" trigger="load" delay={3.3} strokeWidth={2} className="absolute top-4 -right-2 h-8 w-8" />
        <Doodle name="star" trigger="load" delay={3.5} strokeWidth={1.8} className="absolute bottom-24 -left-6 h-5 w-5" />
        <Doodle name="spiral" trigger="load" delay={3.7} strokeWidth={1.8} className="absolute -right-6 bottom-8 h-10 w-10" />
      </div>
    </section>
  );
}
