import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { links } from "@/data/site";
import { tx, type I18nProps } from "@/i18n";
import { isDev, isSet } from "@/lib/site";
import { Doodle } from "./sketch";
import { ConfigHint, Note, Section, SectionTitle, TextLink } from "./ui";

// Cards are pinned to the page slightly crooked, never twice the same way.
const tilts = ["-rotate-1", "rotate-[0.8deg]", "-rotate-[0.5deg]", "rotate-[1.2deg]"];

function ProjectCard({ project, index, locale, t }: I18nProps & { project: Project; index: number }) {
  return (
    <article className={`sketch-box h-full p-7 sm:p-8 ${tilts[index % tilts.length]}`}>
      <span aria-hidden="true" className="tape" />
      {project.image && (
        <Image
          src={project.image.src}
          alt={tx(project.image.alt, locale)}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="mb-6 h-auto w-full rounded-[2px] border border-line-soft"
        />
      )}

      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-2xl font-bold sm:text-3xl">{project.name}</h3>
        {project.status && <p className="hand text-2xl text-muted">{tx(project.status, locale)}</p>}
      </header>

      {project.placeholder && (
        <p className="mt-2">
          <ConfigHint>{t.dev.placeholder}</ConfigHint>
        </p>
      )}

      <p className="mt-4 leading-[1.8]">{tx(project.description, locale)}</p>

      {project.technologies.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.experience.technologies}>
          {project.technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      )}

      {(isSet(project.github) || isSet(project.demo)) && (
        <p className="mt-7 flex gap-7">
          {isSet(project.github) && <TextLink href={project.github} newTabLabel={t.newTab}>{t.projects.code}</TextLink>}
          {isSet(project.demo) && <TextLink href={project.demo} newTabLabel={t.newTab}>{t.projects.demo}</TextLink>}
        </p>
      )}
    </article>
  );
}

export function Projects({ locale, t }: I18nProps) {
  const visible = projects.filter((p) => isDev || !p.placeholder);

  return (
    <Section id="projects">
      <div className="relative mb-16 flex flex-wrap items-end gap-x-10 gap-y-4">
        <SectionTitle id="projects" number="03." doodle="circle" className="-rotate-1 pl-10">
          {t.projects.title}
        </SectionTitle>
        <div aria-hidden="true" className="hidden items-end gap-2 md:flex">
          <Doodle name="arrowLoop" strokeWidth={2} className="h-16 w-32 -scale-y-100 rotate-6 text-muted" />
          <Note className="-rotate-3 pb-8">{t.projects.note}</Note>
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {visible.map((project, i) => (
            <li key={project.name} className={i % 2 === 1 ? "md:mt-10" : ""}>
              <ProjectCard project={project} index={i} locale={locale} t={t} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="sketch-box max-w-xl -rotate-1 p-8 md:ml-[8%]">
          <span aria-hidden="true" className="tape" />
          <p className="text-lg leading-[1.8] hyphens-auto md:text-justify">
            {t.projects.empty}
            {isSet(links.github) && (
              <>
                {" "}
                {t.projects.emptyGithubBefore} <TextLink href={links.github} newTabLabel={t.newTab}>GitHub</TextLink>
                {t.projects.emptyGithubAfter}
              </>
            )}
          </p>
          <Note className="mt-4 rotate-1">{t.projects.wip}</Note>
        </div>
      )}
    </Section>
  );
}
