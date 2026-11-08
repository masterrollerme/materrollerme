import type { Metadata } from "next";
import { CylindersPage } from "@/components/cylinders-page";

export const metadata: Metadata = {
  title: "Gravure, texture and embossing cylinders",
  description:
    "Rotogravure, flexible packaging, wood grain, marble grain, embossing, heat transfer, ceramic anilox and anti-counterfeit cylinders from Master Roller UAE in Umm Al Quwain.",
  alternates: { canonical: "/cylinders" },
};

export default function Page() {
  return <CylindersPage />;
}
