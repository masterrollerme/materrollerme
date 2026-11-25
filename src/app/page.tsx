import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { faqLd } from "@/lib/faq";
import { pageMeta } from "@/lib/seo";

const description =
  "Rotogravure cylinder plant in Umm Al Quwain. Master Printing Plate Industry engraves cylinders for flexible, pharmaceutical and tobacco packaging.";

export const metadata = {
  ...pageMeta({
    title: "Rotogravure cylinders in Umm Al Quwain",
    description,
    path: "/",
  }),
  title: { absolute: "Rotogravure cylinders in Umm Al Quwain · Master Roller UAE" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqLd} />
      <HomePage />
    </>
  );
}
