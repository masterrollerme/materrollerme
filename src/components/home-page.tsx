"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";
import { products } from "@/lib/products";

const surfaces = [
  { src: "/images/uae/decor.webp", en: "Wood and marble décor", ar: "ديكور خشب ورخام" },
  { src: "/images/wood-1.jpg", en: "Wood grain", ar: "عرق خشب" },
  { src: "/images/marble-1.jpg", en: "White marble", ar: "رخام أبيض" },
  { src: "/images/uae/security.webp", en: "Security pattern", ar: "نقشة أمنية" },
  { src: "/images/wood-2.jpg", en: "Warm oak", ar: "سنديان" },
  { src: "/images/marble-2.jpg", en: "Stone vein", ar: "عرق حجر" },
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
        ["استلام التصميم", "أرسلوا العبوة وطول التكرار والمطبعة. يكفي اسم ورقم لفتح الطلب."],
        ["ما قبل الطباعة", "يُراجع الملف ويُفصل قبل أن يُمس المعدن."],
        ["القاعدة", "تُجهَّز الأسطوانة لطول الوجه والمحيط الذي تحتاجه المطبعة."],
        ["الحفر", "تُحفر الصورة على منصات المجموعة: Daetwyler وHell وOhio."],
        ["الكروم", "طبقة كروم تحمي الحفر خلال الإنتاج."],
        ["البروفة", "تُسحب بروفة ليقارن المطبعة النتيجة مع التصميم المعتمد."],
        ["التسليم", "تغادر الأسطوانة أم القيوين إلى المطبعة."],
      ]
    : [
        ["Artwork in", "Send the pack, the repeat and the press. A name and a phone number open the job."],
        ["Prepress", "The file is checked and separated before any metal is cut."],
        ["Base", "The cylinder is prepared to the face length and circumference the press needs."],
        ["Engraving", "The image is engraved on the group’s Daetwyler, Hell and Ohio platforms."],
        ["Chrome", "A chrome layer protects the engraving for the run."],
        ["Proof", "A proof is pulled so the printer can compare it with the approved artwork."],
        ["Dispatch", "The cylinder leaves Umm Al Quwain for the press."],
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
              {ar ? "مصنع أسطوانات · أم القيوين" : "Cylinder plant · Umm Al Quwain"}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.8rem,6vw,5.25rem)] text-white" data-load style={{ ["--d" as string]: "0.16s" }}>
              {ar ? "أسطوانات حفر لمطابع الخليج." : "Cylinders engraved for the presses of the Gulf."}
            </h1>
            <p className="font-display mt-4 text-[clamp(1.8rem,4vw,3rem)] text-white" dir="ltr" data-load style={{ ["--d" as string]: "0.22s" }}>
              2009 → 2026
            </p>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-white/85" data-load style={{ ["--d" as string]: "0.28s" }}>
              {ar
                ? "ماستر برينتنغ بليت إندستري ذ.م.م هي مصنع أم القيوين التابع لمجموعة ماستر رولر. من الملف الفني إلى الكروم والبروفة، لطابعات التغليف والديكور."
                : "Master Printing Plate Industry L.L.C. is the Umm Al Quwain plant of Master Roller Group. From artwork to chrome and proof, for packaging and décor printers."}
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
          <div className="mt-10 flex flex-col items-start gap-2 border-t border-white/25 pt-5 text-start text-xs tracking-[0.12em] text-white/75 uppercase sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 sm:tracking-[0.16em]" data-load style={{ ["--d" as string]: "0.5s" }}>
            <span>{ar ? "منذ 2009" : "Since 2009"}</span>
            <span>{ar ? "100,000+ أسطوانة سنوياً للمجموعة" : "100,000+ cylinders a year, group-wide"}</span>
            <span dir="ltr">{company.phoneDisplay}</span>
          </div>
        </div>
      </section>

      <section className="bg-paper-2" data-reveal>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow">{ar ? "الطريق" : "The journey"}</p>
          <h2 className="font-display mt-3 max-w-3xl">
            {ar ? "من ورشة في بانكوك إلى مصنع في الخليج." : "From a workshop in Bangkok to a plant in the Gulf."}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            {ar
              ? "منذ 2009 تصنع مجموعة ماستر رولر أسطوانات الروتوغرافور. الطريق يمر بتايلاند وميانمار وبنغلاديش، ويصل إلى ماستر برينتنغ بليت إندستري ذ.م.م في أم القيوين."
              : "Master Roller Group has made rotogravure cylinders since 2009. The route runs through Thailand, Myanmar and Bangladesh, and arrives at Master Printing Plate Industry L.L.C. in Umm Al Quwain."}
          </p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(ar
              ? [
                  ["2009", "تايلاند", "تبدأ ماستر رولر (تايلاند) من بانكوك. الصورة أدناه للمقر، لا لمصنع أم القيوين."],
                  ["ميانمار", "مصنع المجموعة", "أحد مصانع المجموعة على هذا الطريق. لا توجد صورة لهذا الموقع هنا."],
                  ["بنغلاديش", "مصنع المجموعة", "مصنع آخر للمجموعة. لا توجد صورة لهذا الموقع هنا."],
                  ["أم القيوين", "فرع الإمارات", "يُراجع الروتوغرافور هنا. الحرم الجديد بمساحة 5331 م² أُعلن عام 2025 وما زال قيد البناء."],
                ]
              : [
                  ["2009", "Thailand", "Master Roller (Thailand) starts in Bangkok. The photograph below is the headquarters, not the Umm Al Quwain plant."],
                  ["Myanmar", "Group plant", "One of the group plants on this route. This site has no photograph of that location."],
                  ["Bangladesh", "Group plant", "Another group plant. This site has no photograph of that location."],
                  ["Umm Al Quwain", "UAE branch", "Rotogravure is checked here. The 5,331 m² campus was announced in 2025 and is still being built."],
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
                    ? "مقر المجموعة منذ 2009. شركة الإمارات هي الاسم القانوني الآخر: ماستر برينتنغ بليت إندستري ذ.م.م."
                    : "Group headquarters since 2009. The UAE company is the other legal name: Master Printing Plate Industry L.L.C."}
                </p>
              </div>
            </Link>
            <Link href="/plant" className="bg-paper">
              <Image
                src="/images/uae/factory.webp"
                alt={ar ? "رسم لمبنى ماستر برينتنغ بليت إندستري في أم القيوين" : "Rendering of the planned Master Printing Plate Industry building in Umm Al Quwain"}
                width={1200}
                height={425}
                className="aspect-[16/9] w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="p-5">
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.1rem)]">{ar ? "أم القيوين" : "Umm Al Quwain"}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {ar
                    ? "رسم للمبنى المخطط في أم القيوين. الحرم ما زال قيد البناء، والعمل الحالي يستمر من المصنع."
                    : "A rendering of the planned Umm Al Quwain building. The campus is still under construction, and current work continues from the plant."}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" data-reveal>
        <div className="max-w-3xl text-start">
          <p className="eyebrow">{ar ? "أعمالنا" : "Our work"}</p>
          <h2 className="font-display mt-3">{ar ? "أسطوانات مختارة" : "Featured cylinders"}</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
            {ar
              ? "الروتوغرافور يُراجع في أم القيوين. خطوط الملمس والنقش جزء من كتالوج المجموعة وتُنسق من هذا الفرع."
              : "Rotogravure is checked in Umm Al Quwain. Texture and embossing lines belong to the group catalogue and are coordinated from this branch."}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-12">
          <figure className="relative overflow-hidden bg-field lg:col-span-8">
            <Image
              key={current.slug}
              src={current.image}
              alt={current.title[lang]}
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
              {ar ? "افتح هذه الأسطوانة" : "Open this cylinder"} →
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
          <p className="eyebrow">{ar ? "ما نصنعه" : "What we make"}</p>
          <h2 className="font-display mt-3 max-w-xl text-5xl">{ar ? "من أسطوانة واحدة إلى خط إنتاج." : "From one cylinder to a running line."}</h2>
          <ol className="mt-10">
            {products.slice(0, 4).map((product, step) => (
              <li key={product.slug} className="border-t border-line">
                <Link href={`/cylinders/${product.slug}`} className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline">
                  <span className="text-sm text-blue md:col-span-2">0{step + 1}</span>
                  <span className="font-display text-[clamp(1.55rem,3vw,2.25rem)] md:col-span-4">{product.title[lang]}</span>
                  <span className="text-sm leading-6 text-muted md:col-span-6">{product.summary[lang]}</span>
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/cylinders" className="mt-2 inline-block text-sm text-blue">
            {ar ? "كل التشكيلة" : "View the full range"} →
          </Link>
        </div>
      </section>

      <section className="bg-paper-2" data-reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{ar ? "الأسطح" : "Surfaces"}</p>
            <h2 className="font-display mt-3 text-5xl">{ar ? "خشب ورخام، على كامل التكرار." : "Wood and marble, held across the repeat."}</h2>
            <p className="mt-5 leading-7 text-muted">
              {ar
                ? "هذه مراجع للنقشة من كتالوج المجموعة، لا صوراً لورشة أم القيوين. العرق يجب أن يبقى متماسكاً على الأسطوانة كلها."
                : "These are pattern references from the group catalogue, not photographs of the Umm Al Quwain shop. The grain has to hold together around the whole cylinder."}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {surfaces.map((item) => (
              <figure key={item.src} className="overflow-hidden bg-white">
                <Image src={item.src} alt={item[lang]} width={600} height={391} className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8" data-reveal>
        <p className="eyebrow">{ar ? "طريقة العمل" : "How a cylinder moves"}</p>
        <h2 className="font-display mt-3 max-w-2xl text-5xl">{ar ? "من الملف إلى بروفة يمكن توقيعها." : "From the file to a proof you can sign."}</h2>
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
          {ar ? "التفاصيل" : "Read the process"} →
        </Link>
      </section>

      <section className="border-t border-line bg-field" data-reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <figure className="overflow-hidden">
            <Image
              src="/images/uae/proofing.webp"
              alt={ar ? "أسطوانات جاهزة في منطقة البروفة" : "Finished cylinders in the proofing area"}
              width={2400}
              height={925}
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs leading-5 text-muted">
              {ar
                ? "أسطوانات جاهزة للبروفة. العنوان في أم القيوين هو ماستر برينتنغ بليت إندستري ذ.م.م."
                : "Cylinders ready for proofing. The Umm Al Quwain company is Master Printing Plate Industry L.L.C."}
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">{ar ? "المصنع" : "The plant"}</p>
            <h2 className="font-display mt-3 text-5xl">{ar ? "فريق واحد، من الملف حتى البروفة." : "One plant, from the file to the proof."}</h2>
            <p className="mt-5 leading-7 text-muted">
              {ar
                ? "العنوان: قطعة 950، شارع الاتحاد، بلوك 5، أم ديرا. الحرم الجديد بمساحة 5331 متراً مربعاً أُعلن عام 2025 وما زال البناء يتقدم."
                : "Plot 950, Al Itehaad Street, Block 5, Umm Deara. The new 5,331 m² campus was announced in 2025, and construction has kept moving through 2026."}
            </p>
            <Link href="/plant" className="btn btn-ink mt-8">
              {ar ? "موقع المصنع" : "Visit the plant"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" data-reveal>
        <p className="eyebrow">{ar ? "أسئلة" : "Questions"}</p>
        <h2 className="font-display mt-3 max-w-2xl">{ar ? "قبل أن ترسلوا الملف." : "Before you send the artwork."}</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {(ar
            ? [
                ["أين المصنع؟", "قطعة 950، شارع الاتحاد، بلوك 5، أم ديرا، أم القيوين. الهاتف +971 54 730 7258."],
                ["ما الأسطوانات التي تُراجع هنا؟", "أسطوانات الروتوغرافور والتغليف المرن تُراجع في أم القيوين، من الملف إلى الكروم والبروفة. خطوط الملمس والنقش من كتالوج المجموعة وتُنسق من هذا الفرع."],
                ["كيف أطلب أسطوانة؟", "الاسم ورقم الهاتف وتفاصيل المطبعة تكفي. النموذج يفتح واتساب المصنع ولا يحفظ البيانات على الموقع."],
              ]
            : [
                ["Where is the Master Roller UAE plant?", "Plot 950, Al Itehaad Street, Block 5, Umm Deara, Umm Al Quwain. Phone +971 54 730 7258."],
                ["Which cylinders are checked in Umm Al Quwain?", "Rotogravure and flexible-packaging cylinders are checked in Umm Al Quwain, from artwork through chrome and proof. Texture and embossing lines come from the group catalogue and are coordinated from this branch."],
                ["How do I request a gravure cylinder?", "A name, a phone number and the press details are enough. The form opens the plant WhatsApp and stores nothing on this website."],
              ]
          ).map(([question, answer]) => (
            <div key={question} className="grid gap-2 py-6 md:grid-cols-12">
              <dt className="font-display text-[clamp(1.45rem,3vw,1.85rem)] md:col-span-5">{question}</dt>
              <dd className="text-sm leading-6 text-muted md:col-span-7">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-dark text-paper" data-reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow !text-yellow">{ar ? "ابدأ طلباً" : "Start a job"}</p>
            <h2 className="font-display mt-3 max-w-xl text-5xl">{ar ? "أخبرونا عن المطبعة." : "Tell us about the press."}</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-paper/70">
              {ar ? "النوع، طول التكرار، والموعد. نرد على واتساب المصنع." : "The cylinder, the repeat, and the date. The reply comes back on the plant WhatsApp."}
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
