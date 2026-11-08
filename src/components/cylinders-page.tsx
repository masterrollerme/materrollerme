"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { familyLabel, products, type Family } from "@/lib/products";

const filters: Array<Family | "all"> = ["all", "packaging", "decor", "special"];

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
      <p className="eyebrow">{ar ? "التشكيلة" : "Range"}</p>
      <h1 className="font-display mt-3 max-w-3xl text-5xl sm:text-6xl">
        {ar ? "أسطوانات التغليف والديكور والخاصة." : "Packaging, décor and special cylinders."}
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-muted">
        {ar
          ? "الروتوغرافور يُصنع ويُراجع في أم القيوين. خطوط الملمس والنقش والسيراميك جزء من كتالوج مجموعة ماستر رولر وتُنسق عبر هذا الفرع."
          : "Rotogravure is made and checked in Umm Al Quwain. Texture, embossing and ceramic lines are part of the Master Roller Group catalogue and are coordinated through this branch."}
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
              alt={product.title[lang]}
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
