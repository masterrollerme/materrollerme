"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

const specs = {
  en: [
    ["CNC lathe", "Tolerance grade IT6. Roundness about 0.0025 mm. Surface roughness Ra 0.8–1.6 μm."],
    ["Plating", "Full-automatic 1.7-metre copper and chrome tanks. One gravure cylinder at a time, with the deposit set for that cylinder."],
    ["Daetwyler CFM", "CFM ECONO 1610 and CFM 1610. Hollow face length 400–1,700 mm. Shaft length 850–2,350 mm. Circumference 315–1,000 mm."],
    ["HELL engraving", "Two K5 Smart XL and two K5 Smart. HD Gravure, CellEye and SprintEasy. HelioXtreme 32+ up to 540 lines/cm and 100 μm depth."],
    ["Laser gravure", "Laser imaging of a resist, then etching of a U-shaped cell. Custom dots, fine text and security patterns."],
    ["Ink and proof", "Automatic dispensing from stored formulas, including Pantone targets. QC checks dimensions, surface, engraving and proof colour before dispatch."],
  ],
  ar: [
    ["مخرطة CNC", "درجة سماحية IT6. استدارة نحو 0.0025 مم. خشونة سطح Ra 0.8–1.6 ميكرومتر."],
    ["الطلاء", "أحواض نحاس وكروم آلية كاملة بطول 1.7 متر. أسطوانة حفر واحدة في كل مرة، والترسيب يُضبط لها."],
    ["Daetwyler CFM", "CFM ECONO 1610 وCFM 1610. طول الوجه للأسطوانة المجوفة 400–1700 مم. طول العمود 850–2350 مم. المحيط 315–1000 مم."],
    ["حفر HELL", "آلتان K5 Smart XL وآلتان K5 Smart. HD Gravure وCellEye وSprintEasy. HelioXtreme 32+ حتى 540 خطاً/سم وعمق 100 ميكرومتر."],
    ["حفر الليزر", "تصوير ليزر لطبقة مقاومة ثم حفر خلية على شكل U. نقاط خاصة ونص دقيق ونقش أمني."],
    ["الحبر والبروفة", "توزيع آلي من وصفات مخزنة، ومنها أهداف بانتون. الجودة تراجع الأبعاد والسطح والحفر ولون البروفة قبل الشحن."],
  ],
};

export function PlantPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article>
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
        <Breadcrumbs
          items={[
            { href: "/", en: "Home", ar: "الرئيسية" },
            { en: "Plant", ar: "المصنع" },
          ]}
        />
        <p className="eyebrow mt-6">{ar ? "أم القيوين" : "Umm Al Quwain"}</p>
        <h1 className="font-display mt-3 max-w-3xl">
          {ar ? "المصنع على شارع الاتحاد." : "The plant on Al Itehaad Street."}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          {ar
            ? "تأسست ماستر برينتنغ بليت إندستري ذ.م.م هنا في سبتمبر 2023. ما قبل الطباعة وصناعة الأسطوانة والحفر والبروفة تُنجز من هذا العنوان."
            : "Master Printing Plate Industry L.L.C. was established here in September 2023. Prepress, cylinder making, engraving and proofing run from this address."}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="border border-line bg-white p-6 lg:col-span-2">
            <p className="eyebrow">{ar ? "العنوان" : "Address"}</p>
            <address className="mt-4 text-lg leading-8 not-italic">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">{ar ? `صندوق بريد ${company.poBox}` : `P.O. Box ${company.poBox}`}</span>
            </address>
            <p className="mt-4 text-sm text-muted" dir="ltr">
              Plus code {company.plusCode}
              <br />
              {company.lat}, {company.lng}
            </p>
            <div className="mt-6 space-y-2">
              <a className="block text-lg text-blue" href={`tel:${company.phone}`} dir="ltr">
                {company.phoneDisplay}
              </a>
              <a className="block text-sm text-muted" href={`tel:${company.phoneAlt}`} dir="ltr">
                {company.phoneAltDisplay}
              </a>
              <a className="block text-sm text-blue" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
            <a href={company.mapLink} className="btn btn-ink mt-6">
              {ar ? "الملاحة إلى المصنع" : "Navigate to the plant"}
            </a>
          </div>
          <div className="min-h-80 overflow-hidden border border-line lg:col-span-3">
            <iframe
              title={ar ? "خريطة مصنع ماستر رولر في أم القيوين" : "Map of the Master Roller plant in Umm Al Quwain"}
              src={company.mapEmbed}
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
          <p className="eyebrow">{ar ? "المعدات" : "Equipment"}</p>
          <h2 className="font-display mt-3 max-w-3xl">
            {ar ? "ما يقف على أرض المصنع." : "What stands on the shop floor."}
          </h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {specs[lang].map(([term, detail]) => (
              <div key={term} className="grid gap-2 py-5 md:grid-cols-12">
                <dt className="font-medium md:col-span-3">{term}</dt>
                <dd className="text-sm leading-6 text-muted md:col-span-9">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
        <h2 className="font-display">{ar ? "على أرض المصنع" : "On the floor"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(ar
            ? [
                ["/images/uae/colour.webp", "1200", "1805", "إدارة اللون", "ملفات ICC ومنحنيات الحفر تُضبط بـ GMG حسب الخامة قبل أن يُمس المعدن."],
                ["/images/uae/cnc.webp", "1200", "1742", "الخراطة", "درجة IT6، استدارة نحو 0.0025 مم، وخشونة Ra 0.8–1.6 ميكرومتر."],
                ["/images/uae/qc.webp", "1200", "1048", "قبل الشحن", "تُراجع الأبعاد والسطح والحفر ولون البروفة مقابل المواصفة المعتمدة."],
              ]
            : [
                ["/images/uae/colour.webp", "1200", "1805", "Colour management", "ICC profiles and engraving curves are set with GMG for the substrate before any metal is cut."],
                ["/images/uae/cnc.webp", "1200", "1742", "Turning", "Tolerance grade IT6, roundness about 0.0025 mm, and roughness Ra 0.8–1.6 μm."],
                ["/images/uae/qc.webp", "1200", "1048", "Before dispatch", "Dimensions, surface, engraving and proof colour are checked against the approved specification."],
              ]
          ).map(([src, width, height, title, body]) => (
            <figure key={title} className="border border-line bg-paper">
              <Image src={src} alt={body} width={Number(width)} height={Number(height)} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-5">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
