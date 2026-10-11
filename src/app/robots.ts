import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Crawler AI diizinkan secara eksplisit supaya halaman bisa dikutip di AI search.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: new URL("/sitemap.xml", site.domain).toString(),
  };
}
