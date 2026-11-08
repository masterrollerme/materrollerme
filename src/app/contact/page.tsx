import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact the Umm Al Quwain plant",
  description:
    "Call or WhatsApp Master Roller UAE on +971 54 730 7258 to request a gravure cylinder. Plant: Plot 950, Al Itehaad Street, Umm Deara, Umm Al Quwain.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
