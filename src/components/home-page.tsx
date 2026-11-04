"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";
import { familyLabel, products } from "@/lib/products";

const surfaces = [
  { src: "/images/wood-1.jpg", en: "Wood grain", ar: "عرق خشب" },
  { src: "/images/wood-2.jpg", en: "Warm oak", ar: "سنديان دافئ" },
  { src: "/images/wood-3.jpg", en: "Fine grain", ar: "عرق ناعم" },
  { src: "/images/marble-1.jpg", en: "White marble", ar: "رخام أبيض" },
  { src: "/images/marble-2.jpg", en: "Stone vein", ar: "عرق حجر" },
  { src: "/images/marble-3.jpg", en: "Soft marble", ar: "رخام هادئ" },
];

export function HomePage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-6">
            <p className="eyebrow">{ar ? "ماستر برينتنغ بليت إندستري ذ.م.م" : company.legal}</p>
            <h1 className="font-display mt-4 max-w-xl text-5xl uppercase text-ink sm:text-6xl lg:text-7xl">
              {ar ? "أسطوانات حفر لمطابع الخليج." : "Gravure cylinders for Gulf presses."}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              {ar
                ? "مصنع أم القيوين التابع لمجموعة ماستر رولر. من الملف الفني إلى الكروم والبروفة، لطابعات التغليف والديكور في الإمارات والشرق الأوسط وأفريقيا."
                : "The Umm Al Quwain plant of Master Roller Group. From artwork to chrome and proof, for packaging and décor printers across the UAE, the Middle East and Africa."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cylinders" className="btn btn-ink">
                {ar ? "تشكيلة الأسطوانات" : "See the cylinders"}
              </Link>
              <a href={company.whatsapp} className="btn btn-line">
                WhatsApp
              </a>
            </div>
          </div>
          <figure className="lg:col-span-6">
            <div className="relative">
              <Image
                src="/images/shop-2.jpg"
                alt={ar ? "قواعد أسطوانات فولاذية من مجموعة ماستر رولر" : "Steel cylinder bases from Master Roller Group"}
                width={1200}
                height={756}
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-yellow px-4 py-3 text-sm text-ink">
                {ar
                  ? "قواعد أسطوانات من إنتاج المجموعة. الحفر والبروفة يُنسقان من أم القيوين."
                  : "Cylinder bases from group production. Engraving and proofing are coordinated from Umm Al Quwain."}
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-blue text-paper">
        <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["2009", ar ? "تأسيس المجموعة" : "Group founded"],
            ["100,000+", ar ? "أسطوانة سنوياً عبر المجموعة" : "Cylinders a year, group-wide"],
            ["5,331 m²", ar ? "حرم المصنع الجديد في أم القيوين" : "New Umm Al Quwain campus"],
            ["4", ar ? "دول فيها مصانع المجموعة" : "Countries with group plants"],
          ].map(([value, label]) => (
            <div key={label} className="border-white/15 px-6 py-8 sm:border-s">
              <dt className="font-display text-4xl text-yellow">{value}</dt>
              <dd className="mt-2 max-w-[16rem] text-sm leading-5 text-paper/80">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">01 — {ar ? "الأسطوانات" : "Cylinders"}</p>
            <h2 className="font-display mt-3 text-4xl uppercase sm:text-5xl">
              {ar ? "ما يُحفر هنا" : "What gets engraved"}
            </h2>
          </div>
          <Link href="/cylinders" className="text-sm text-blue">
            {ar ? "كل التشكيلة" : "Full range"}
          </Link>
        </div>
        <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <Link key={product.slug} href={`/cylinders/${product.slug}`} className="group bg-paper p-5 sm:p-6">
              <p className="text-xs tracking-[0.16em] text-muted uppercase">{familyLabel[product.family][lang]}</p>
              <h3 className="font-display mt-3 text-3xl uppercase group-hover:text-blue">{product.title[lang]}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">{product.summary[lang]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow">02 — {ar ? "الأسطح" : "Surfaces"}</p>
            <h2 className="font-display mt-3 text-4xl uppercase sm:text-5xl">
              {ar ? "خشب ورخام، على كامل التكرار." : "Wood and marble, held across the repeat."}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              {ar
                ? "أسطوانات الملمس من كتالوج المجموعة تُستخدم لأفلام الأثاث والألواح والأرضيات. الصور مراجع للنقشة، لا لقطات من مصنع أم القيوين."
                : "Texture rollers from the group catalogue are used for furniture film, panels and flooring. These pictures are pattern references, not photographs of the Umm Al Quwain shop."}
            </p>
            <Link href="/cylinders/wooden-texture-rollers" className="btn btn-ink mt-6">
              {ar ? "أسطوانات الخشب" : "Wood-grain rollers"}
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {surfaces.map((item) => (
              <figure key={item.src} className="bg-white">
                <Image src={item.src} alt={item[lang]} width={600} height={391} className="aspect-[6/4] w-full object-cover" />
                <figcaption className="px-2 py-1.5 text-[11px] tracking-wide text-muted">{item[lang]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">03 — {ar ? "من الملف إلى المطبعة" : "File to press"}</p>
        <h2 className="font-display mt-3 max-w-xl text-4xl uppercase sm:text-5xl">
            {ar ? "مسار واحد للطلب، من الملف حتى إعادة الطباعة." : "One path for the job, from the file to the reprint."}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(ar
            ? ["استلام التصميم", "ما قبل الطباعة", "تجهيز القاعدة", "الحفر", "الكروم", "البروفة", "التسليم في الإمارات", "المتابعة عند إعادة الطلب"]
            : ["Artwork in", "Prepress", "Base preparation", "Engraving", "Chrome", "Proof", "UAE dispatch", "Reprint support"]
          ).slice(0, 8).map((step, index) => (
            <li key={step} className="border-t border-ink pt-3">
              <span className="text-xs text-blue">0{index + 1}</span>
              <p className="mt-2 text-lg">{step}</p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-8 inline-block text-sm text-blue">
          {ar ? "طريقة العمل بالتفصيل" : "Read the process"}
        </Link>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <figure>
            <Image
              src="/images/hero-line.jpg"
              alt={ar ? "مقر ماستر رولر في تايلاند" : "Master Roller headquarters in Thailand"}
              width={1440}
              height={594}
              className="h-auto w-full object-cover"
            />
            <figcaption className="mt-2 text-xs text-paper/60">
              {ar
                ? "مقر المجموعة في تايلاند. شركة الإمارات هي ماستر برينتنغ بليت إندستري ذ.م.م في أم القيوين."
                : "Group headquarters in Thailand. The UAE company is Master Printing Plate Industry L.L.C. in Umm Al Quwain."}
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow text-yellow">{ar ? "المصنع" : "The plant"}</p>
            <h2 className="font-display mt-3 text-4xl uppercase sm:text-5xl">
              {ar ? "أم ديرا، أم القيوين." : "Umm Deara, Umm Al Quwain."}
            </h2>
            <p className="mt-4 leading-7 text-paper/75">
              {ar
                ? "العنوان المنشور: قطعة 950، شارع الاتحاد، بلوك 5. الحرم الجديد بمساحة 5331 متراً مربعاً — مكاتب وورش وسكن — أُعلن عام 2025 وما زال العمل فيه يتقدم."
                : "Published address: Plot 950, Al Itehaad Street, Block 5. The new 5,331 m² campus — offices, workshops and staff housing — was announced in 2025 and construction has been moving forward through 2026."}
            </p>
            <Link href="/plant" className="btn btn-yellow mt-6">
              {ar ? "تفاصيل المصنع" : "Plant and map"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
