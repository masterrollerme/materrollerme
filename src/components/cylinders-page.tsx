"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useI18n } from "@/lib/i18n";
import { familyLabel, products, type Family } from "@/lib/products";

const filters: Array<Family | "all"> = ["all", "packaging", "laser", "special"];

export function CylindersPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";
  const [family, setFamily] = useState<Family | "all">("all");
  const visible = products.filter((product) => family === "all" || product.family === family);

  const filterName = (key: Family | "all") => {
    if (key === "all") return ar ? "الكل" : "All";
    return familyLabel[key][lang];
  };

  return (
    <article className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
      <Breadcrumbs
        items={[
          { href: "/", en: "Home", ar: "الرئيسية" },
          { en: "Cylinders", ar: "الأسطوانات" },
        ]}
      />
      <p className="eyebrow mt-6">{ar ? "التشكيلة" : "Range"}</p>
      <h1 className="font-display mt-3 max-w-3xl">
        {ar ? "أسطوانات تغليف، وحفر ليزر، وأعمال خاصة." : "Packaging cylinders, laser gravure, and special work."}
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-muted">
        {ar
          ? "تُحفر أسطوانات التغليف المرن والدوائي والتبغ في أم القيوين. حفر الليزر يُستخدم للنص الدقيق والنقش الأمني والنقش البارز حين يطلبه العمل."
          : "Flexible, pharmaceutical and tobacco packaging cylinders are engraved in Umm Al Quwain. Laser gravure is used for microtext, security patterns and embossing when the job needs it."}
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={ar ? "تصفية" : "Filter"}>
        {filters.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFamily(key)}
            aria-pressed={family === key}
            className={`border px-3 py-2 text-sm ${family === key ? "border-ink bg-ink text-paper" : "border-line bg-white"}`}
          >
            {filterName(key)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {visible.map((product) => (
          <Link key={product.slug} href={`/cylinders/${product.slug}`} className="group border border-line bg-white">
            <Image
              src={product.image}
              alt={product.imageNote[lang]}
              width={product.width}
              height={product.height}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs tracking-[0.14em] text-blue uppercase">{familyLabel[product.family][lang]}</p>
              <h2 className="font-display mt-2 text-3xl group-hover:text-blue">{product.title[lang]}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{product.summary[lang]}</p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
