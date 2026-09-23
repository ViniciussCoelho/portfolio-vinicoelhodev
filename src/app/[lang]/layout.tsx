import type { Metadata, Viewport } from "next";
import { Caveat, Roboto, Roboto_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SketchFilters } from "@/components/sketch";
import { site } from "@/data/site";
import { getDictionary, hasLocale, htmlLang, locales, ogLocale } from "@/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// Handwriting for margin notes and doodle labels.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

// Only /pt and /en exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const title = `${site.name} | ${site.role[lang]}`;
  const description = site.description[lang];
  return {
    metadataBase: siteUrl(),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      url: `/${lang}`,
      siteName: site.name,
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      firstName: "Vinicius",
      lastName: "Coelho",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

// Runs before paint: applies the saved/system theme without a flash, and
// enables the draw-on-scroll doodles (see DrawOnScroll) when JS is available.
const themeScript = `try{var d=document.documentElement,t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t}catch(e){}if("IntersectionObserver" in window)document.documentElement.classList.add("draw-ready");`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html
      lang={htmlLang[lang]}
      suppressHydrationWarning
      className={`${robotoSerif.variable} ${roboto.variable} ${caveat.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col font-serif antialiased">
        <a
          href="#main"
          className="sr-only rounded-[2px] bg-inverse-bg px-4 py-2 font-sans text-inverse-fg focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-30"
        >
          {t.skipToContent}
        </a>
        <SketchFilters />
        <Header locale={lang} t={t} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
