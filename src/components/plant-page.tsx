"use client";

import Image from "next/image";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function PlantPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article>
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
        <p className="eyebrow">{ar ? "أم القيوين" : "Umm Al Quwain"}</p>
        <h1 className="font-display mt-3 max-w-3xl text-5xl sm:text-6xl">
          {ar ? "المصنع على شارع الاتحاد." : "The plant on Al Itehaad Street."}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          {ar
            ? "هذا العنوان منشور على موقع ماستر رولر. الدبوس الذي شاركتموه يشير إلى ماستر برينتنغ بليت إندستري ذ.م.م في أم ديرا."
            : "This address is published on the Master Roller website. The pin you shared points to Master Printing Plate Industry L.L.C. in Umm Dera."}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="border border-line bg-white p-6 lg:col-span-2">
            <p className="eyebrow">{ar ? "العنوان" : "Address"}</p>
            <address className="mt-4 text-lg leading-8 not-italic">
              {ar ? (
                <>
                  قطعة رقم 950، شارع الاتحاد
                  <br />
                  بلوك 5، أم ديرا، الرافة
                  <br />
                  أم القيوين، الإمارات العربية المتحدة
                </>
              ) : (
                company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))
              )}
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
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:px-8 sm:py-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{ar ? "الحرم الجديد" : "The new campus"}</p>
            <h2 className="font-display mt-3 text-4xl">
              {ar ? "5331 متراً مربعاً قيد الإنشاء." : "5,331 square metres, under construction."}
            </h2>
            <p className="mt-4 leading-7 text-muted">
              {ar
                ? "أعلنت المجموعة في أغسطس 2025 أن مصنع الإمارات الجديد سيبدأ أعمال الحفر في ديسمبر من ذلك العام. يضم مكاتب وسكن إدارة، وورش، وسكن موظفين. تحديثات 2026 وصفت تقدم البناء. الإنتاج الحالي لطابعات المنطقة مستمر من أم القيوين أثناء اكتمال الحرم."
                : "In August 2025 the group announced that the new UAE factory would break ground that December. It includes offices and manager housing, workshops, and staff housing. Updates through 2026 describe the build progressing. Current cylinder work for regional printers continues from Umm Al Quwain while the campus is completed."}
            </p>
          </div>
          <figure>
            <Image
              src="/images/uae/factory.webp"
              alt={ar ? "رسم لمبنى ماستر برينتنغ بليت إندستري في أم القيوين" : "Rendering of the planned Master Printing Plate Industry building in Umm Al Quwain"}
              width={1200}
              height={425}
              className="h-auto w-full object-cover"
            />
            <figcaption className="mt-2 text-xs leading-5 text-muted">
              {ar
                ? "رسم للمبنى المخطط، لا صورة لمصنع مكتمل. البناء ما زال جارياً."
                : "A rendering of the planned building, not a photograph of a finished plant. Construction is still under way."}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
        <h2 className="font-display text-4xl">{ar ? "على أرض المصنع" : "On the floor"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(ar
            ? [
                ["/images/uae/colour.webp", "1200", "1805", "ما قبل الطباعة", "مراجعة الملفات والفصل قبل الحفر، بما في ذلك إدارة اللون."],
                ["/images/uae/cnc.webp", "1200", "1742", "الأسطوانة", "تقطيع الأنبوب، الخراطة، ثم الحفر والطلاء."],
                ["/images/uae/qc.webp", "1200", "1048", "البروفة", "فريق الجودة يراجع البروفة قبل أن تغادر الأسطوانة."],
              ]
            : [
                ["/images/uae/colour.webp", "1200", "1805", "Prepress", "File review and separation before engraving, including colour management."],
                ["/images/uae/cnc.webp", "1200", "1742", "The cylinder", "The tube is cut to length, then turned, engraved and plated."],
                ["/images/uae/qc.webp", "1200", "1048", "The proof", "The quality team checks the proof before the cylinder leaves."],
              ]
          ).map(([src, width, height, title, body]) => (
            <figure key={title} className="border border-line bg-paper">
              <Image src={src} alt={title} width={Number(width)} height={Number(height)} className="aspect-[4/3] w-full object-cover" />
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
