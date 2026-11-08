import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

const description =
  "Rotogravure cylinder manufacturer in Umm Al Quwain. Master Printing Plate Industry L.L.C. checks gravure and flexible-packaging cylinders, and coordinates wood, marble, embossing and security rollers.";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the Master Roller UAE plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plot 950, Al Itehaad Street, Block 5, Umm Deara, Umm Al Quwain. Phone +971 54 730 7258.",
      },
    },
    {
      "@type": "Question",
      name: "Which cylinders are checked in Umm Al Quwain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rotogravure and flexible-packaging cylinders are checked in Umm Al Quwain, from artwork through chrome and proof. Texture and embossing lines come from the group catalogue and are coordinated from this branch.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a gravure cylinder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A name, a phone number and the press details are enough. The form opens the plant WhatsApp and stores nothing on this website.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Gravure cylinders in Umm Al Quwain",
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "Gravure cylinders in Umm Al Quwain", description, url: "/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HomePage />
    </>
  );
}
