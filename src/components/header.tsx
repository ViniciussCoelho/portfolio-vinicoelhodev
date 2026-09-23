import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import type { I18nProps } from "@/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { Doodle } from "./sketch";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "#about", key: "about", tilt: "-rotate-2" },
  { href: "#experience", key: "experience", tilt: "rotate-1" },
  { href: "#projects", key: "projects", tilt: "-rotate-1" },
  { href: "#writing", key: "writing", tilt: "rotate-2" },
  { href: "#contact", key: "contact", tilt: "-rotate-1" },
] as const;

export function Header({ locale, t }: I18nProps) {
  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between gap-6 px-5 py-3 font-sans font-light sm:px-10 lg:px-16">
        <Link href={`/${locale}`} className="boil flex items-center gap-4 text-fg no-underline sm:gap-5">
          <Image
            src="/images/logo.png"
            alt=""
            width={415}
            height={520}
            className="h-auto w-8 transition-[filter] duration-300 dark:invert sm:w-10"
          />
          <span className="mt-2 text-xl sm:text-2xl">{site.name}</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-7">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="hand flex gap-7 text-[1.65rem]">
              {nav.map((item) => (
                <li key={item.href} className={item.tilt}>
                  <a href={item.href} className="ink-link font-medium">
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher locale={locale} t={t} />
          <ThemeToggle label={t.themeToggle} />
        </div>
      </div>
      <Doodle name="divider" trigger="load" duration={1.1} stretch strokeWidth={3.2} className="block h-3 w-full" />
    </header>
  );
}
