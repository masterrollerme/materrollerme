import { ContactPage } from "@/components/contact-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact the Umm Al Quwain plant",
  description:
    "Request a rotogravure cylinder from Umm Al Quwain. Call +971 54 730 7258, email alexjoe.md@master-roller.com, or send the job on WhatsApp.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}
