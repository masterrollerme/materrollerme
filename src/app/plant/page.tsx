import type { Metadata } from "next";
import { PlantPage } from "@/components/plant-page";

export const metadata: Metadata = {
  title: "Umm Al Quwain cylinder plant",
  description:
    "Visit Master Printing Plate Industry L.L.C. at Plot 950, Al Itehaad Street, Block 5, Umm Deara, Umm Al Quwain. Phone +971 54 730 7258.",
  alternates: { canonical: "/plant" },
};

export default function Page() {
  return <PlantPage />;
}
