import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { defaultLocale, hasLocale, locales } from "@/i18n";
import { logoDataUrl } from "@/lib/logo";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const logo = await logoDataUrl();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#333333",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 72,
            padding: "0 96px",
            borderBottom: "2px solid #333333",
          }}
        >
          <img src={logo} alt="" width={208} height={260} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
            <div style={{ fontSize: 40, marginTop: 12, color: "#666666" }}>
              {site.role[locale]}
            </div>
          </div>
        </div>
        <div style={{ height: 56, background: "#333333" }} />
      </div>
    ),
    size,
  );
}
