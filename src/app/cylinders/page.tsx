import { CylindersPage } from "@/components/cylinders-page";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/company";
import { products } from "@/lib/products";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Rotogravure and laser gravure cylinders",
  description:
    "Rotogravure cylinders for flexible, pharmaceutical and tobacco packaging, plus laser gravure and security cylinders, engraved in Umm Al Quwain.",
  path: "/cylinders",
});

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Rotogravure cylinders engraved in Umm Al Quwain",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.title.en,
    url: `${siteUrl}/cylinders/${product.slug}`,
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Cylinders", path: "/cylinders" },
        ])}
      />
      <JsonLd data={itemListLd} />
      <CylindersPage />
    </>
  );
}
