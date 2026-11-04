import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Gravure cylinders in Umm Al Quwain",
  description:
    "Master Roller UAE engraves rotogravure, wood-grain, marble, embossing and security cylinders from its plant in Umm Al Quwain.",
};

export default function Page() {
  return <HomePage />;
}
