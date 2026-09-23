import Link from "next/link";
import { lang } from "next/root-params";
import { Bunny, Doodle } from "@/components/sketch";
import { Container } from "@/components/ui";
import { defaultLocale, getDictionary, hasLocale } from "@/i18n";

export default async function NotFound() {
  const value = await lang();
  const locale = hasLocale(value) ? value : defaultLocale;
  const t = getDictionary(locale);

  return (
    <main id="main" className="flex flex-1 items-center py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-serif text-[clamp(5rem,14vw,10rem)] leading-none font-bold">
            <span className="relative inline-block">
              404
              <Doodle
                name="circle"
                trigger="load"
                delay={0.3}
                strokeWidth={3}
                stretch
                className="absolute -top-6 -left-8 h-[calc(100%+3rem)] w-[calc(100%+4rem)]"
              />
            </span>
          </p>
          <h1 className="mt-10 text-3xl font-bold">{t.notFound.title}</h1>
          <p className="hand mt-3 -rotate-1 text-3xl text-muted">{t.notFound.body}</p>
          <p className="mt-8 text-lg">
            <Link href={`/${locale}`} className="ink-link">
              ← {t.notFound.back}
            </Link>
          </p>
        </div>
        <Bunny className="mx-auto w-48 -rotate-6 md:w-64" delay={0.8} />
      </Container>
    </main>
  );
}
