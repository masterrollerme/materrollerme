import type { Metadata } from "next";
import { Cairo, Cormorant_Garamond, Jost } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Preloader } from "@/components/preloader";
import { RevealObserver } from "@/components/reveal-observer";
import { company, siteUrl } from "@/lib/company";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
});

const description =
  "Master Printing Plate Industry L.L.C. engraves rotogravure and flexible-packaging cylinders in Umm Al Quwain, and coordinates texture, embossing and security cylinders for printers in the Gulf.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Master Roller UAE | Gravure cylinders in Umm Al Quwain",
    template: "%s · Master Roller UAE",
  },
  description,
  applicationName: "Master Roller UAE",
  authors: [{ name: company.legal, url: company.parentSite }],
  creator: company.legal,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Master Roller UAE",
    locale: "en_AE",
    title: "Master Roller UAE | Gravure cylinders in Umm Al Quwain",
    description,
    images: [{ url: "/images/uae/hero.webp", width: 2400, height: 1565, alt: "Copper gravure cylinders beside a Daetwyler plating line" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Roller UAE | Gravure cylinders in Umm Al Quwain",
    description,
    images: ["/images/uae/hero.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: company.legal,
  alternateName: ["Master Roller UAE", company.brand],
  parentOrganization: { "@type": "Organization", name: company.parent, url: company.parentSite },
  url: siteUrl,
  telephone: company.phoneDisplay,
  image: `${siteUrl}/images/uae/hero.webp`,
  hasMap: company.mapLink,
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  knowsAbout: [
    "Rotogravure cylinders",
    "Flexible packaging cylinders",
    "Wood grain rollers",
    "Marble grain rollers",
    "Embossing rollers",
    "Heat transfer rollers",
    "Ceramic anilox rollers",
    "Anti-counterfeit cylinders",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phoneDisplay,
    contactType: "sales",
    areaServed: "AE",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 950, Al Itehaad Street, Block 5, Umm Deara",
    addressLocality: "Umm Al Quwain",
    addressRegion: "Umm Al Quwain",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.lat,
    longitude: company.lng,
  },
  sameAs: [company.parentSite],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} ${cairo.variable} js h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <Preloader />
          <RevealObserver />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <a
            href={company.whatsapp}
            className="fixed bottom-5 end-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-dark text-sm text-paper shadow-lg"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M5 6.5h14v9H8.5L5 18.5v-12z" />
            </svg>
          </a>
        </LanguageProvider>
      </body>
    </html>
  );
}
