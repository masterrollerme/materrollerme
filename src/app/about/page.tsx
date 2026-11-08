import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About the Umm Al Quwain plant",
  description:
    "Master Roller Group has made rotogravure cylinders since 2009. The UAE company is Master Printing Plate Industry L.L.C. in Umm Deara, Umm Al Quwain.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
