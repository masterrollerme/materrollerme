import type { Metadata } from "next";
import { ProcessPage } from "@/components/process-page";

export const metadata: Metadata = {
  title: "Cylinder engraving process",
  description:
    "How a Master Roller cylinder moves from artwork through prepress, base preparation, engraving, chrome, proof and dispatch from Umm Al Quwain.",
  alternates: { canonical: "/process" },
};

export default function Page() {
  return <ProcessPage />;
}
