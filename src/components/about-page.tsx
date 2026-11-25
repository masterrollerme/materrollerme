"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { company, groupCompanies, markets } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function AboutPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
      <Breadcrumbs
        items={[
          { href: "/", en: "Home", ar: "الرئيسية" },
          { en: "About", ar: "عن الشركة" },
        ]}
      />
      <p className="eyebrow mt-6">{ar ? "المجموعة" : "The group"}</p>
      <h1 className="font-display mt-3 max-w-3xl">
        {ar ? "صانع أسطوانات منذ 2009، ومصنع في أم القيوين منذ 2023." : "Cylinder makers since 2009, with a Umm Al Quwain plant since 2023."}
      </h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-8 text-muted lg:col-span-7">
          <p>
            {ar
              ? "ماستر برينتنغ بليت إندستري ذ.م.م جزء من مجموعة ماستر، ومقرها تايلاند. منذ تأسيسها عام 2009 واصلت المجموعة تطوير التقنية والجودة والإدارة، وبنت شراكات مع عملاء في تايلاند وميانمار وبنغلاديش وخارجها."
              : "Master Printing Plate Industry L.L.C. is part of Master Group, headquartered in Thailand. Since its establishment in 2009, the group has kept improving technology, quality and management, and has built partnerships with customers across Thailand, Myanmar, Bangladesh and beyond."}
          </p>
          <p>
            {ar
              ? "تأسست الشركة في أم القيوين في سبتمبر 2023. تختص بأسطوانات الروتوغرافور للتغليف المرن والتغليف الدوائي وتغليف التبغ. تجمع آلات الحفر الإلكترونية الألمانية HELL مع حفر الليزر، وتغطي ما قبل الطباعة وصناعة الأسطوانة والحفر والبروفة."
              : "The company was established in Umm Al Quwain in September 2023. It specialises in rotogravure cylinders for flexible packaging, pharmaceutical packaging and tobacco packaging. It combines German HELL electronic engraving with laser engraving, and covers prepress, cylinder making, engraving and proofing."}
          </p>
          <p>
            {ar
              ? "يخدم المصنع أكثر من 60 عميلاً في الإمارات والخليج والشرق الأوسط وأفريقيا، مع تسليم يمكن الاعتماد عليه ودعم فني يستجيب."
              : "The plant serves more than 60 customers across the UAE, the wider GCC, the Middle East and Africa, with consistent quality, reliable delivery and responsive technical support."}
          </p>
        </div>
        <aside className="bg-field p-6 text-ink lg:col-span-5">
          <p className="eyebrow">{ar ? "شركات المجموعة" : "Group companies"}</p>
          <ul className="mt-4 space-y-2">
            {groupCompanies.map((item) => (
              <li key={item.en} className="border-b border-line py-2 text-base">
                {item[lang]}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-3">
        {[
          {
            title: ar ? "إدارة اللون" : "Colour management",
            body: ar
              ? "يضبط مهندس اللون منحنيات ICC والحفر بأجهزة GMG وغيرها، حسب كل خامة، ليتفق الدليل الرقمي وبروفة الأسطوانة والنتيجة النهائية عند العميل."
              : "A colour engineer sets and maintains ICC and engraving curves with GMG and other instruments, for each substrate, so the digital proof, the cylinder proof and the printed result stay aligned.",
          },
          {
            title: ar ? "ما يُنجز في أم القيوين" : "What Umm Al Quwain runs",
            body: ar
              ? "ما قبل الطباعة، صناعة الأسطوانة، الحفر الكهروميكانيكي والليزر، طلاء النحاس والكروم، ومراقبة الجودة والبروفة قبل الشحن."
              : "Prepress, cylinder making, electromechanical and laser engraving, copper and chrome plating, then quality control and a proof before dispatch.",
          },
          {
            title: ar ? "لمن نعمل" : "Who it is for",
            body: ar
              ? "مطابع التغليف المرن والدوائي والتبغ، والأعمال التي تحتاج نصاً دقيقاً أو نقشاً أمنياً أو نقشاً بارزاً."
              : "Printers of flexible, pharmaceutical and tobacco packaging, and jobs that need microtext, a security pattern or an embossing roller.",
          },
        ].map((item) => (
          <div key={item.title}>
            <h2 className="font-display text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-display">{ar ? "الأسواق والعلامات" : "Markets and brands"}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          {ar
            ? "العلامات أدناه من عرض المصنع للعبوات التي حُفرت أسطواناتها. الدبابيس على خريطة الأسواق لا تعني عناوين العملاء."
            : "The marks below are from the plant’s own presentation of packaging it has engraved cylinders for. Pins on the market map are not customer addresses."}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {markets.map((market) => (
            <li key={market.en} className="border border-line bg-white px-3 py-1 text-sm">
              {market[lang]}
            </li>
          ))}
        </ul>
        <figure className="mt-8 border border-line bg-white p-3">
          <Image
            src="/images/uae/brands.webp"
            alt={
              ar
                ? "علامات تغليف حُفرت أسطواناتها لدى ماستر برينتنغ بليت إندستري، ومنها المراعي ونادى وبروكتر وغامبل وكارفور وكلوروكس وأمريكانا وفالكون باك ويونيكاي"
                : "Packaging brands Master Printing Plate Industry has engraved cylinders for, including Almarai, Nada, P&G, Carrefour, Clorox, Americana, Falcon Pack and Unikai"
            }
            width={2400}
            height={1200}
            className="h-auto w-full"
          />
          <figcaption className="mt-3 text-xs leading-5 text-muted">
            {ar
              ? "من بينها المراعي، نادى، بروكتر وغامبل، كارفور، كلوروكس، أمريكانا، فالكون باك، يونيكاي، ومزارع العين."
              : "Among them: Almarai, Nada, P&G, Carrefour, Clorox, Americana, Falcon Pack, Unikai and Al Ain Farms."}
          </figcaption>
        </figure>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/plant" className="btn btn-ink">
          {ar ? "موقع المصنع" : "The Umm Al Quwain plant"}
        </Link>
        <Link href="/cylinders" className="btn btn-line">
          {ar ? "الأسطوانات" : "Cylinders"}
        </Link>
        <a href={`mailto:${company.email}`} className="btn btn-line">
          {company.email}
        </a>
      </div>
    </article>
  );
}
