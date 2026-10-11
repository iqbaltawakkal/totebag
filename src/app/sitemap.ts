import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", site.domain).toString(),
      lastModified: site.lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
