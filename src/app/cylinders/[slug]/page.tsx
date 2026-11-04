import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CylinderDetail } from "@/components/cylinder-detail";
import { getProduct, products } from "@/lib/products";

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
  if (!product) return { title: "Cylinder" };
  return { title: product.title.en, description: product.summary.en };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <CylinderDetail product={product} />;
}
