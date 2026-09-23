import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** The bunny logo as a data URL, for images generated with next/og. */
export async function logoDataUrl() {
  const data = await readFile(join(process.cwd(), "public/images/logo.png"), "base64");
  return `data:image/png;base64,${data}`;
}
