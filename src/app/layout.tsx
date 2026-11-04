import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Cairo } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/lib/company";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-condensed",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "Master Roller UAE | Gravure cylinders in Umm Al Quwain",
    template: "%s · Master Roller UAE",
  },
  description:
    "Master Printing Plate Industry L.L.C. is the Umm Al Quwain plant of Master Roller Group. Rotogravure, texture, embossing and security cylinders for packaging and décor printers.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: company.legal,
  alternateName: ["Master Roller UAE", company.brand],
  parentOrganization: company.parent,
  telephone: company.phoneDisplay,
  image: "/images/shop-2.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 950, Al Itehaad Street, Block 5, Umm Deara",
    addressLocality: "Umm Al Quwain",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.lat,
    longitude: company.lng,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${condensed.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
