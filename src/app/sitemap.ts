import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/cylinders", "/process", "/plant", "/contact", ...products.map((product) => `/cylinders/${product.slug}`)];
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/cylinders/") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path === "/cylinders" ? 0.9 : 0.7,
  }));
}
