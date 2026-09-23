import { ImageResponse } from "next/og";
import { logoDataUrl } from "@/lib/logo";

// Placeholder favicon generated from the logo. Replace with src/app/icon.png
// (or favicon.ico) if you want a hand-tuned one.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await logoDataUrl();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 12,
        }}
      >
        <img src={logo} alt="" width={42} height={53} />
      </div>
    ),
    size,
  );
}
