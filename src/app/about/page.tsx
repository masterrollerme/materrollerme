import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Master Roller Group has made rotogravure cylinders since 2009. The UAE company is Master Printing Plate Industry L.L.C. in Umm Al Quwain.",
};

export default function Page() {
  return <AboutPage />;
}
