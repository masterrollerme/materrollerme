import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CylinderDetail } from "@/components/cylinder-detail";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/company";
import { getProduct, products } from "@/lib/products";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Cylinder", robots: { index: false, follow: false } };
  return pageMeta({
    title: product.title.en,
    description: product.summary.en,
    path: `/cylinders/${product.slug}`,
    image: product.image,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title.en,
    description: product.summary.en,
    image: `${siteUrl}${product.image}`,
    brand: { "@type": "Brand", name: "Master Roller" },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    category: product.title.en,
    url: `${siteUrl}/cylinders/${product.slug}`,
  };

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Cylinders", path: "/cylinders" },
          { name: product.title.en, path: `/cylinders/${product.slug}` },
        ])}
      />
      <JsonLd data={productLd} />
      <CylinderDetail product={product} />
    </>
  );
}
