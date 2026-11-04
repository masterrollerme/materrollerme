import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or WhatsApp Master Roller UAE at +971 54 730 7258. Plant: Plot 950, Al Itehaad Street, Umm Deara, Umm Al Quwain.",
};

export default function Page() {
  return <ContactPage />;
}
