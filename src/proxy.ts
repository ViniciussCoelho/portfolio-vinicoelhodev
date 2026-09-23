import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config";

const COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Locale routing:
 * - /pt/... and /en/... pass through, and the language is remembered in a cookie
 *   (so picking one in the dropdown sticks on the next visit to "/").
 * - Anything else is redirected to /<locale>/..., picking the cookie first, then
 *   the browser's Accept-Language, then the default (pt).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (hasLocale(segment)) {
    const response = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== segment) {
      response.cookies.set(COOKIE, segment, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(COOKIE)?.value;
  if (hasLocale(saved)) return saved;

  // "pt-BR,pt;q=0.9,en;q=0.8" → by quality, first language we support.
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { base: tag.split("-")[0], q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((entry) => entry.base && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { base } of ranked) {
    const match = locales.find((l) => l === base);
    if (match) return match;
  }
  return defaultLocale;
}

export const config = {
  // Skip Next internals, files with an extension (images, robots.txt,
  // sitemap.xml…) and the generated icon.
  matcher: ["/((?!_next|icon|.*\\..*).*)"],
};
