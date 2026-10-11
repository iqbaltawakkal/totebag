import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/config/site";
import { meta } from "@/content/copy";
import { WaClickTracker } from "@/components/WaClickTracker";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Peringatan saat build kalau judul/deskripsi kepanjangan setelah nama brand & kota diganti.
if (meta.title.length > 60) console.warn(`[SEO] Judul ${meta.title.length} karakter (maks 60): ${meta.title}`);
if (meta.description.length > 155)
  console.warn(`[SEO] Deskripsi ${meta.description.length} karakter (maks 155): ${meta.description}`);

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: meta.title,
  description: meta.description,
  applicationName: site.brandName,
  keywords: ["totebag pre order", "totebag kanvas", `totebag ${site.city}`, "tas kanvas", site.brandName],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.brandName,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        {children}
        <WaClickTracker />
      </body>
    </html>
  );
}
