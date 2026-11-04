"use client";

import { EnquiryForm } from "@/components/enquiry-form";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function ContactPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">{ar ? "تواصل" : "Contact"}</p>
        <h1 className="font-display mt-3 text-5xl uppercase sm:text-6xl">
          {ar ? "كلموا المصنع مباشرة." : "Talk to the plant directly."}
        </h1>
        <p className="mt-5 leading-7 text-muted">
          {ar
            ? "واتساب أو اتصال. اذكروا نوع الأسطوانة والمطبعة والموعد. النموذج يفتح محادثة على رقم أم القيوين."
            : "WhatsApp or a phone call. Name the cylinder, the press and the date. The form opens a chat on the Umm Al Quwain number."}
        </p>
        <div className="mt-8 space-y-4 border-t border-line pt-6">
          <a className="block text-2xl" href={`tel:${company.phone}`} dir="ltr">
            {company.phoneDisplay}
          </a>
          <a className="block text-muted" href={`tel:${company.phoneAlt}`} dir="ltr">
            {company.phoneAltDisplay}
          </a>
          <a className="btn btn-yellow" href={company.whatsapp}>
            WhatsApp
          </a>
          <p className="text-sm leading-6 text-muted">
            {ar
              ? "قطعة 950، شارع الاتحاد، بلوك 5، أم ديرا، الرافة، أم القيوين."
              : "Plot 950, Al Itehaad Street, Block 5, Umm Deara, Al Raafah, Umm Al Quwain."}
          </p>
        </div>
      </div>
      <div className="border border-line bg-white p-5 sm:p-8 lg:col-span-7">
        <h2 className="font-display text-3xl uppercase">{ar ? "طلب أسطوانة" : "Cylinder enquiry"}</h2>
        <div className="mt-6">
          <EnquiryForm />
        </div>
      </div>
    </article>
  );
}
