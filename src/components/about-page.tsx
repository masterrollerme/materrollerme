"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const principles = {
  en: ["Attention", "Courage", "Efficiency", "Refinement", "High quality", "Trust", "Sharing"],
  ar: ["انتباه", "شجاعة", "كفاءة", "إتقان", "جودة عالية", "ثقة", "مشاركة"],
};

export function AboutPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="eyebrow">{ar ? "المجموعة" : "The group"}</p>
      <h1 className="font-display mt-3 max-w-3xl text-5xl uppercase sm:text-6xl">
        {ar ? "صانع أسطوانات منذ 2009، ومصنع في أم القيوين." : "Cylinder makers since 2009, with a plant in Umm Al Quwain."}
      </h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-8 text-muted lg:col-span-7">
          <p>
            {ar
              ? "ماستر رولر (تايلاند) شركة متخصصة في أسطوانات الروتوغرافور منذ 2009، انطلاقاً من بانكوك. نمت المجموعة إلى مصانع في تايلاند وميانمار وبنغلاديش والإمارات."
              : "Master Roller (Thailand) has made rotogravure cylinders since 2009, starting from Bangkok. The group now has plants in Thailand, Myanmar, Bangladesh and the United Arab Emirates."}
          </p>
          <p>
            {ar
              ? "في الإمارات تعمل الشركة تحت اسم ماستر برينتنغ بليت إندستري ذ.م.م. يستقبل المصنع ملفات التغليف والديكور، ويجهّز الأسطوانة، ويطليها بالكروم، ويخرج البروفة قبل التسليم."
              : "In the UAE the company trades as Master Printing Plate Industry L.L.C. The plant takes packaging and décor files, prepares the cylinder, chromes it, and pulls a proof before delivery."}
          </p>
          <p>
            {ar
              ? "التشكيلة الأوسع — ملمس الخشب والرخام، النقش، السيراميك، النقل الحراري، وأسطوانات الحماية — جزء من كتالوج المجموعة، ويُنسق لعملاء الشرق الأوسط وأفريقيا من هذا الفرع."
              : "The wider range — wood and marble texture, embossing, ceramic, heat transfer and security cylinders — belongs to the group catalogue, and is coordinated for Middle East and Africa customers from this branch."}
          </p>
        </div>
        <aside className="bg-blue p-6 text-paper lg:col-span-5">
          <p className="eyebrow text-yellow">{ar ? "مبدأ المجموعة" : "Group principle"}</p>
          <ul className="mt-4 space-y-2 text-lg">
            {principles[lang].map((item) => (
              <li key={item} className="border-b border-white/15 py-2">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-3">
        {[
          {
            title: ar ? "الحفر" : "Engraving",
            body: ar
              ? "منصات المجموعة المذكورة على الموقع الأم تشمل Daetwyler GS وHell K5 Smart وOhio وHell Galaxy ليزر، إلى جانب المخارط المبرمجة."
              : "Platforms named by the group include Daetwyler GS, Hell K5 Smart, Ohio and Hell Galaxy laser, alongside CNC lathes.",
          },
          {
            title: ar ? "ما يُنجز في أم القيوين" : "What Umm Al Quwain runs",
            body: ar
              ? "ما قبل الطباعة، تجهيز الأسطوانة، طلاء الكروم، والبروفة. هذا ما يوظّف له المصنع وما يصفه العملاء الذين طبعوا عنده."
              : "Prepress, cylinder preparation, chrome plating and proofing. That is the work the plant hires for, and the work printers describe after using it.",
          },
          {
            title: ar ? "لمن نعمل" : "Who it is for",
            body: ar
              ? "مطابع التغليف المرن، محولات أفلام الديكور، وطابعات النقل على النسيج في الإمارات والمنطقة."
              : "Flexible-packaging printers, décor-film converters, and textile transfer printers in the UAE and the wider region.",
          },
        ].map((item) => (
          <div key={item.title}>
            <h2 className="font-display text-3xl uppercase">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
          </div>
        ))}
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/plant" className="btn btn-ink">
          {ar ? "موقع المصنع" : "The Umm Al Quwain plant"}
        </Link>
        <Link href="/cylinders" className="btn btn-line">
          {ar ? "الأسطوانات" : "Cylinders"}
        </Link>
      </div>
    </article>
  );
}
