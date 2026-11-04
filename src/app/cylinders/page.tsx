import type { Metadata } from "next";
import { CylindersPage } from "@/components/cylinders-page";

export const metadata: Metadata = {
  title: "Cylinders",
  description:
    "Rotogravure, flexible packaging, wood texture, marble, embossing, heat transfer, ceramic and anti-counterfeit cylinders from Master Roller UAE.",
};

export default function Page() {
  return <CylindersPage />;
}
