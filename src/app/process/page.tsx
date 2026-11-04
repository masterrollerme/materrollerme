import type { Metadata } from "next";
import { ProcessPage } from "@/components/process-page";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a Master Roller cylinder moves from artwork through prepress, engraving, chrome, proof and dispatch from Umm Al Quwain.",
};

export default function Page() {
  return <ProcessPage />;
}
