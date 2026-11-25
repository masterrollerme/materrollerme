"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company, markets } from "@/lib/company";
import { faqs } from "@/lib/faq";
import { useI18n } from "@/lib/i18n";
import { products } from "@/lib/products";

const capabilities = [
  {
    en: ["IT6", "CNC turning", "Roundness about 0.0025 mm. Surface roughness Ra 0.8–1.6 μm."],
    ar: ["IT6", "خراطة مبرمجة", "استدارة نحو 0.0025 مم. خشونة سطح Ra 0.8–1.6 ميكرومتر."],
  },
  {
    en: ["1.7 m", "Copper and chrome", "Full-auto tanks plate one gravure cylinder at a time."],
    ar: ["1.7 م", "نحاس وكروم", "أحواض آلية كاملة تطلي أسطوانة حفر واحدة في كل مرة."],
  },
  {
    en: ["4", "HELL K5 engravers", "Two K5 Smart XL and two K5 Smart, with HD Gravure and CellEye."],
    ar: ["4", "آلات حفر HELL K5", "آلتان K5 Smart XL وآلتان K5 Smart، مع HD Gravure وCellEye."],
  },
  {
    en: ["540", "lines / cm", "HelioXtreme 32+ for logos, barcodes, microtext and fine packs."],
    ar: ["540", "خطاً / سم", "HelioXtreme 32+ للشعارات والباركود والنص الدقيق والعبوات الدقيقة."],
  },
  {
    en: ["U-cell", "Laser gravure", "Smooth cells, custom dots, and about 10–15% less ink at equal density."],
    ar: ["خلية U", "حفر ليزر", "خلايا ملساء ونقاط حسب الطلب، وحبر أقل بنحو 10–15% عند الكثافة نفسها."],
  },
  {
    en: ["60+", "Customers", "Ten markets across the Gulf, the Middle East and Africa."],
    ar: ["+60", "عميلاً", "عشر أسواق في الخليج والشرق الأوسط وأفريقيا."],
  },
];

export function HomePage() {
  const { lang } = useI18n();
  const ar = lang === "ar";
  const [index, setIndex] = useState(0);
  const current = products[index];
  const count = String(products.length).padStart(2, "0");
  const num = String(index + 1).padStart(2, "0");

  const steps = ar
    ? [
        ["اللون والملف", "تُضبط منحنيات ICC والحفر بـ GMG حسب الخامة، ليتفق الدليل الرقمي وبروفة الأسطوانة والنتيجة على المطبعة."],
        ["قاعدة CNC", "تُخرط الأسطوانة بدرجة سماحية IT6، واستدارة نحو 0.0025 مم، وخشونة Ra 0.8–1.6 ميكرومتر."],
        ["طلاء النحاس", "أحواض بطول 1.7 متر تطلي أسطوانة واحدة في كل مرة، فيُضبط السمك لكل أسطوانة."],
        ["الحفر", "HELL K5 Smart وHelioXtreme للحفر الكهروميكانيكي، أو الليزر حين تحتاج الخلية شكل U."],
        ["الكروم والجودة", "قبل الشحن تُراجع الأبعاد وسطح الأسطوانة والحفر ولون البروفة."],
        ["البروفة والتسليم", "يخلط الحبر آلياً حسب الوصفة، ومنها أهداف بانتون، ثم تغادر الأسطوانة أم القيوين."],
      ]
    : [
        ["Colour and file", "ICC and engraving curves are set with GMG for the substrate, so the digital proof, the cylinder proof and the press result agree."],
        ["CNC base", "The cylinder is turned to tolerance grade IT6, roundness about 0.0025 mm, and roughness Ra 0.8–1.6 μm."],
        ["Copper plate", "1.7-metre tanks plate one cylinder at a time, so thickness is set for that cylinder."],
        ["Engrave", "HELL K5 Smart and HelioXtreme for electromechanical engraving, or laser when the cell has to be a U."],
        ["Chrome and QC", "Before dispatch the plant checks dimensions, surface, engraving and proof colour."],
        ["Proof and dispatch", "Ink is dispensed from stored formulas, including Pantone targets, then the cylinder leaves Umm Al Quwain."],
      ];

  return (
    <>
      <section className="hero-bleed relative min-h-svh bg-dark text-paper">
        <div className="absolute inset-0 overflow-hidden" data-load-open style={{ ["--d" as string]: "0.15s" }}>
          <Image
            src="/images/uae/hero.webp"
            alt={ar ? "أسطوانات نحاسية بجانب خط طلاء Daetwyler" : "Copper gravure cylinders beside a Daetwyler plating line"}
            fill
            priority
            className="breathe object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/35 to-dark/10" />
        </div>
        <div className="relative flex min-h-svh flex-col justify-end px-5 pb-12 pt-40 sm:px-8 sm:pb-16 lg:pt-36 md:pb-20">
          <div className="max-w-[680px]">
            <p className="eyebrow !text-paper/75" data-load style={{ ["--d" as string]: "0.05s" }}>
              {ar ? "مصنع أسطوانات · أم القيوين · منذ سبتمبر 2023" : "Cylinder plant · Umm Al Quwain · since September 2023"}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.8rem,6vw,5.25rem)] text-white" data-load style={{ ["--d" as string]: "0.16s" }}>
              {ar ? "أسطوانات روتوغرافور لتغليف الخليج." : "Rotogravure cylinders for packaging in the Gulf."}
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-white/85" data-load style={{ ["--d" as string]: "0.28s" }}>
              {ar
                ? "ماستر برينتنغ بليت إندستري ذ.م.م تحفر أسطوانات التغليف المرن والدوائي والتبغ في أم القيوين. من ما قبل الطباعة حتى الحفر بآلات HELL والليزر والبروفة."
                : "Master Printing Plate Industry L.L.C. engraves flexible, pharmaceutical and tobacco packaging cylinders in Umm Al Quwain. From prepress through HELL and laser engraving to the proof."}
            </p>
            <div className="mt-9 flex flex-wrap gap-3" data-load style={{ ["--d" as string]: "0.4s" }}>
              <Link href="/cylinders" className="btn btn-ink bg-paper text-ink hover:bg-white">
                {ar ? "شاهدوا الأسطوانات" : "See the cylinders"}
                <span aria-hidden>→</span>
              </Link>
              <a href={company.whatsapp} className="btn btn-line">
                WhatsApp
              </a>
            </div>
          </div>
          <ul className="mt-10 flex flex-col items-start gap-2 border-t border-white/25 pt-5 text-start text-xs tracking-[0.12em] text-white/75 uppercase sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 sm:tracking-[0.16em]" data-load style={{ ["--d" as string]: "0.5s" }}>
            <li>{ar ? "المجموعة منذ 2009" : "Group since 2009"}</li>
            <li>{ar ? "الإمارات منذ 2023" : "UAE since 2023"}</li>
            <li>{ar ? "أكثر من 60 عميلاً" : "60+ customers"}</li>
            <li>{ar ? "10 أسواق" : "10 markets"}</li>
          </ul>
        </div>
      </section>

      <section className="bg-paper-2" data-reveal>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow">{ar ? "المجموعة" : "The group"}</p>
          <h2 className="font-display mt-3 max-w-3xl">
            {ar ? "من بانكوك عام 2009 إلى أم القيوين عام 2023." : "From Bangkok in 2009 to Umm Al Quwain in 2023."}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            {ar
              ? "ماستر برينتنغ بليت إندستري جزء من مجموعة ماستر، ومقرها تايلاند. منذ 2009 تبني المجموعة شراكات في تايلاند وميانمار وبنغلاديش، ثم في الإمارات."
              : "Master Printing Plate Industry is part of Master Group, headquartered in Thailand. Since 2009 the group has built partnerships in Thailand, Myanmar and Bangladesh, and then in the Emirates."}
          </p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(ar
              ? [
                  ["2009", "تايلاند", "تبدأ ماستر رولر (تايلاند) من بانكوك. الصورة أدناه لمقر المجموعة."],
                  ["ميانمار", "مصنع المجموعة", "ماستر رولر (ميانمار) على طريق المجموعة نفسه."],
                  ["بنغلاديش", "صناعة الألواح", "ماستر بليت ميكينغ (بنغلاديش)."],
                  ["2023", "أم القيوين", "تأسست ماستر برينتنغ بليت إندستري ذ.م.م في سبتمبر 2023."],
                ]
              : [
                  ["2009", "Thailand", "Master Roller (Thailand) starts in Bangkok. The photograph below is the group headquarters."],
                  ["Myanmar", "Group plant", "Master Roller (Myanmar) on the same group route."],
                  ["Bangladesh", "Plate making", "Master Plate Making (Bangladesh)."],
                  ["2023", "Umm Al Quwain", "Master Printing Plate Industry L.L.C. is established in September 2023."],
                ]
            ).map(([year, place, body]) => (
              <li key={year} className="border-s-2 border-accent bg-paper p-5">
                <p className="font-display text-3xl">{year}</p>
                <h3 className="mt-2 text-base">{place}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Link href="/about" className="bg-paper">
              <Image
                src="/images/hero-line.jpg"
                alt={ar ? "مقر ماستر رولر في تايلاند" : "Master Roller headquarters in Thailand"}
                width={1440}
                height={594}
                className="aspect-[16/9] w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="p-5">
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.1rem)]">{ar ? "تايلاند" : "Thailand"}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {ar
                    ? "مقر المجموعة منذ 2009. الاسم القانوني في الإمارات: ماستر برينتنغ بليت إندستري ذ.م.م."
                    : "Group headquarters since 2009. The UAE legal name is Master Printing Plate Industry L.L.C."}
                </p>
              </div>
            </Link>
            <Link href="/plant" className="bg-paper">
              <Image
                src="/images/uae/factory.webp"
                alt={ar ? "ماستر برينتنغ بليت إندستري في أم القيوين" : "Master Printing Plate Industry in Umm Al Quwain"}
                width={1200}
                height={425}
                className="aspect-[16/9] w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="p-5">
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.1rem)]">{ar ? "أم القيوين" : "Umm Al Quwain"}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {ar
                    ? "تأسس المصنع في سبتمبر 2023. يحفر أسطوانات التغليف المرن والدوائي والتبغ."
                    : "The plant was established in September 2023. It engraves flexible, pharmaceutical and tobacco packaging cylinders."}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" data-reveal>
        <div className="max-w-3xl text-start">
          <p className="eyebrow">{ar ? "الأسطوانات" : "Cylinders"}</p>
          <h2 className="font-display mt-3">{ar ? "ما يُحفر في أم القيوين" : "What is engraved in Umm Al Quwain"}</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
            {ar
              ? "التغليف المرن والدوائي والتبغ هي أعمال المصنع. حفر الليزر يُضاف حين تحتاج العبوة تفاصيل أدق أو خلية مختلفة."
              : "Flexible, pharmaceutical and tobacco packaging are the plant’s work. Laser gravure is added when the pack needs finer detail or a different cell."}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-12">
          <figure className="relative overflow-hidden bg-field lg:col-span-8">
            <Image
              key={current.slug}
              src={current.image}
              alt={current.imageNote[lang]}
              width={current.width}
              height={current.height}
              className="aspect-[16/10] w-full object-cover"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/80 to-transparent p-4 text-start text-paper sm:p-5">
              <p className="text-xs tracking-[0.18em] uppercase">
                {num} / {count}
              </p>
              <p className="font-display mt-1 text-[clamp(1.6rem,4vw,2.25rem)]">{current.title[lang]}</p>
            </figcaption>
          </figure>
          <div className="lg:col-span-4">
            <p className="text-sm leading-7 text-muted">{current.summary[lang]}</p>
            <p className="mt-4 text-xs leading-5 text-muted">{current.imageNote[lang]}</p>
            <div className="mt-6 flex gap-2">
              <button type="button" className="grid h-12 w-12 place-items-center border border-line bg-paper" onClick={() => setIndex((value) => (value - 1 + products.length) % products.length)} aria-label={ar ? "السابق" : "Previous"}>
                ←
              </button>
              <button type="button" className="grid h-12 w-12 place-items-center border border-line bg-paper" onClick={() => setIndex((value) => (value + 1) % products.length)} aria-label={ar ? "التالي" : "Next"}>
                →
              </button>
            </div>
            <Link href={`/cylinders/${current.slug}`} className="mt-6 inline-block text-sm text-blue">
              {ar ? `تفاصيل ${current.title.ar}` : `${current.title.en} details`} →
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {products.map((product, dot) => (
                <button
                  key={product.slug}
                  type="button"
                  aria-label={product.title[lang]}
                  aria-pressed={dot === index}
                  onClick={() => setIndex(dot)}
                  className={`h-1.5 ${dot === index ? "w-8 bg-dark" : "w-4 bg-line"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line" data-reveal>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="eyebrow">{ar ? "القدرة" : "Capability"}</p>
          <h2 className="font-display mt-3 max-w-xl">{ar ? "آلات المصنع، بالأرقام المنشورة." : "The plant’s machines, in the figures it publishes."}</h2>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const [figure, title, body] = item[lang];
              return (
                <li key={title} className="bg-paper p-6">
                  <p className="font-display text-4xl">{figure}</p>
                  <h3 className="mt-2 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
                </li>
              );
            })}
          </ul>
          <Link href="/plant" className="mt-6 inline-block text-sm text-blue">
            {ar ? "مواصفات المصنع" : "Plant specifications"} →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8" data-reveal>
        <p className="eyebrow">{ar ? "طريقة العمل" : "How a cylinder moves"}</p>
        <h2 className="font-display mt-3 max-w-2xl">{ar ? "من الملف إلى بروفة يمكن توقيعها." : "From the file to a proof you can sign."}</h2>
        <ol className="mt-10 grid gap-x-10 md:grid-cols-2">
          {steps.map(([title, body], step) => (
            <li key={title} className="border-t border-line py-6">
              <p className="text-sm text-blue">0{step + 1}</p>
              <h3 className="font-display mt-2 text-3xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-4 inline-block text-sm text-blue">
          {ar ? "اقرأ طريقة الحفر، بما فيها الليزر مقابل الكهرباء" : "Read the process, including laser and electromechanical engraving"} →
        </Link>
      </section>

      <section className="border-t border-line bg-field" data-reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <figure className="overflow-hidden">
            <Image
              src="/images/uae/proofing.webp"
              alt={ar ? "أسطوانات جاهزة في منطقة البروفة في أم القيوين" : "Finished cylinders in the proofing area in Umm Al Quwain"}
              width={2400}
              height={925}
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs leading-5 text-muted">
              {ar
                ? "أسطوانات جاهزة للبروفة. العنوان: قطعة 950، شارع الاتحاد، أم ديرا."
                : "Cylinders ready for proofing. Address: Plot 950, Al Itehaad Street, Umm Deara."}
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">{ar ? "الأسواق" : "Markets"}</p>
            <h2 className="font-display mt-3">{ar ? "عشرة أسواق، وأكثر من ستين عميلاً." : "Ten markets, and more than sixty customers."}</h2>
            <p className="mt-5 leading-7 text-muted">
              {ar
                ? "يخدم المصنع عملاء في الإمارات والخليج والشرق الأوسط وأفريقيا."
                : "The plant serves customers in the UAE, the wider GCC, the Middle East and Africa."}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {markets.map((market) => (
                <li key={market.en} className="border border-line bg-paper px-3 py-1 text-sm">
                  {market[lang]}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-ink mt-8">
              {ar ? "عن المجموعة" : "About the group"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" data-reveal id="faq">
        <p className="eyebrow">{ar ? "أسئلة" : "Questions"}</p>
        <h2 className="font-display mt-3 max-w-2xl">{ar ? "قبل أن ترسلوا الملف." : "Before you send the artwork."}</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q.en} className="grid gap-2 py-6 md:grid-cols-12">
              <dt className="font-display text-[clamp(1.45rem,3vw,1.85rem)] md:col-span-5">{item.q[lang]}</dt>
              <dd className="text-sm leading-6 text-muted md:col-span-7">{item.a[lang]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-dark text-paper" data-reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow !text-yellow">{ar ? "ابدأ طلباً" : "Start a job"}</p>
            <h2 className="font-display mt-3 max-w-xl">{ar ? "أخبرونا عن المطبعة." : "Tell us about the press."}</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-paper/70">
              {ar
                ? "النوع، طول التكرار، والموعد. الرد يأتي على واتساب المصنع أو بالبريد."
                : "The cylinder, the repeat, and the date. The reply comes back on the plant WhatsApp or by email."}
            </p>
          </div>
          <Link href="/contact" className="btn bg-paper text-ink">
            {ar ? "اطلب أسطوانة" : "Request a cylinder"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
