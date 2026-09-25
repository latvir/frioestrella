import type { Metadata } from "next";
import "./globals.css";
import AppToaster from "@/components/AppToaster";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://frioestrella.lv";
const OG_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/1002238/2026-03-04/aa6aee94-e453-41c2-86e3-3931ee90abab.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Gaisa kondicionieri Rīgā un Latvijā — uzstādīšana, apkope, remonts | Frioestrella SIA",
  description:
    "Gaisa kondicionieru uzstādīšana, apkope un remonts Latvijā un Spānijā. 15+ gadu pieredze, sertificēti speciālisti, garantija līdz 5 gadiem.",
  icons: { icon: "/favicon.svg" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Frioestrella SIA",
    title:
      "Gaisa kondicionieri Rīgā un Latvijā — uzstādīšana, apkope, remonts | Frioestrella SIA",
    description:
      "Profesionāla gaisa kondicionieru uzstādīšana, apkope un remonts Latvijā un Spānijā.",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frioestrella SIA | Gaisa kondicionieri",
    description:
      "Gaisa kondicionieru uzstādīšana, apkope un remonts Latvijā un Spānijā.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv">
      <body>
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
