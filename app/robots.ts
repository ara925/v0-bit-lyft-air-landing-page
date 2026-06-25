import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly allow OpenAI ad and search crawlers so ads serve correctly
      // and content is indexed by ChatGPT/SearchGPT. These must appear before
      // the wildcard rule — some crawlers stop at the first matching user-agent.
      {
        userAgent: "OAI-AdsBot",
        allow: "/",
        disallow: ["/contact/thank-you"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/contact/thank-you"],
      },
      // Allow all other crawlers (Google, Bing, etc.)
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contact/thank-you"],
      },
    ],
    sitemap: "https://www.bitlyftair.ai/sitemap.xml",
  }
}
