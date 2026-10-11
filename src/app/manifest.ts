import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { meta } from "@/content/copy";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brandName} – Totebag Pre-Order`,
    short_name: site.brandName,
    description: meta.description,
    lang: "id",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: site.themeColor,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
