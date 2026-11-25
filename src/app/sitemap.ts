import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";
import { products } from "@/lib/products";

const updated = new Date("2026-11-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/cylinders", "/process", "/plant", "/contact", ...products.map((product) => `/cylinders/${product.slug}`)];
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: updated,
    changeFrequency: path === "" || path === "/cylinders" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/cylinders" ? 0.9 : path.startsWith("/cylinders/") ? 0.8 : 0.7,
  }));
}
