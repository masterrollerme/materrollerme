import type { Metadata } from "next";
import { company, markets, siteUrl } from "@/lib/company";
import { products } from "@/lib/products";

const ogImage = "/images/uae/hero.webp";

export function pageMeta({
  title,
  description,
  path,
  image = ogImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const shareTitle = `${title} · Master Roller UAE`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName: "Master Roller UAE",
      url: path,
      title: shareTitle,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["ManufacturingBusiness", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: company.legal,
  alternateName: ["Master Roller UAE", company.brand, "Master UAE"],
  description:
    "Rotogravure cylinder manufacturer in Umm Al Quwain, established September 2023. Engraves cylinders for flexible, pharmaceutical and tobacco packaging, with HELL electromechanical engraving and laser gravure.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}${ogImage}`,
  telephone: company.phone,
  email: company.email,
  foundingDate: "2023-09",
  parentOrganization: {
    "@type": "Organization",
    name: company.parent,
    url: company.parentSite,
    foundingDate: "2009",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 950, Al Itehaad Street, Block 5, Umm Deara",
    addressLocality: "Umm Al Quwain",
    addressRegion: "Umm Al Quwain",
    addressCountry: "AE",
    postOfficeBoxNumber: company.poBox,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.lat,
    longitude: company.lng,
  },
  hasMap: company.mapLink,
  areaServed: markets.map((market) => ({ "@type": "Country", name: market.en })),
  knowsAbout: [
    "Rotogravure cylinders",
    "Flexible packaging cylinders",
    "Pharmaceutical packaging cylinders",
    "Tobacco packaging cylinders",
    "Laser gravure",
    "HELL K5 Smart engraving",
    "HelioXtreme engraving",
    "Colour management",
    "Anti-counterfeit cylinders",
    "Embossing rollers",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    email: company.email,
    contactType: "sales",
    areaServed: ["AE", "OM", "QA", "IQ", "KW", "JO", "SY", "YE", "CM", "UG"],
    availableLanguage: ["English", "Arabic"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rotogravure cylinders",
    itemListElement: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.title.en,
        description: product.summary.en,
        url: `${siteUrl}/cylinders/${product.slug}`,
      },
    })),
  },
  sameAs: [company.parentSite],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Master Roller UAE",
  url: siteUrl,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#organization` },
};
