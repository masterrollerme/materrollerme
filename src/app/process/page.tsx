import { ProcessPage } from "@/components/process-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gravure cylinder engraving process",
  description:
    "How a gravure cylinder is made in Umm Al Quwain: colour management, CNC turning, copper and chrome plating, HELL engraving, laser gravure and proofing.",
  path: "/process",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <ProcessPage />
    </>
  );
}
