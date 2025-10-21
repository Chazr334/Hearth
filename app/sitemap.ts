import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { navigationLinks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const pages = navigationLinks.map((link) => ({
    url: `${base}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.7
  }));

  return pages;
}
