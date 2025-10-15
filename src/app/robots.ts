import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mananjay.org";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/static/",
          "/_next/image/",
          "/private/",
          "/temp/",
          "/*.json$",
          "/*.env$",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/gallery/"],
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: [
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
        ],
        allow: "/",
      },
      {
        userAgent: ["AhrefsBot", "SemrushBot"],
        crawlDelay: 10,
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: ["MJ12bot", "dotbot"],
        disallow: "/",
      },
      // Uncomment below to block AI scrapers
      // {
      //   userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web'],
      //   disallow: '/',
      // },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
