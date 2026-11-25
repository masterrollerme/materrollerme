import { AboutPage } from "@/components/about-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About the Umm Al Quwain plant",
  description:
    "Master Printing Plate Industry L.L.C. was established in Umm Al Quwain in September 2023, part of Master Roller Group, making gravure cylinders since 2009.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPage />
    </>
  );
}
