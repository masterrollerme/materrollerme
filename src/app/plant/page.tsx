import { PlantPage } from "@/components/plant-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Umm Al Quwain cylinder plant",
  description:
    "Master Printing Plate Industry L.L.C. at Plot 950, Al Itehaad Street, Umm Deara, Umm Al Quwain. P.O. Box 326873. HELL K5, HelioXtreme and Daetwyler plating.",
  path: "/plant",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Plant", path: "/plant" },
        ])}
      />
      <PlantPage />
    </>
  );
}
