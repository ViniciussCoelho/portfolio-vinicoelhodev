import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Container } from "@/components/ui";
import { Writing } from "@/components/writing";
import { education, experience } from "@/data/experience";
import { links, site } from "@/data/site";
import { getDictionary, hasLocale, htmlLang } from "@/i18n";
import { isSet, siteUrl } from "@/lib/site";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const props = { locale: lang, t };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role[lang],
    description: site.description[lang],
    url: new URL(`/${lang}`, siteUrl()).toString(),
    worksFor: { "@type": "Organization", name: experience[0].company },
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    knowsLanguage: ["pt-BR", "en"],
    sameAs: [links.github, links.linkedin].filter(isSet),
    inLanguage: htmlLang[lang],
  };

  return (
    <main id="main" tabIndex={-1} className="flex-1 overflow-x-clip pt-14 outline-none sm:pt-24">
      <Container>
        <Hero {...props} />
        <About {...props} />
        <Experience {...props} />
        <Projects {...props} />
        <Stack {...props} />
        <Writing {...props} />
        <Contact {...props} />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
