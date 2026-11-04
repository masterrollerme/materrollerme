"use client";

import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { useI18n } from "@/lib/i18n";
import { familyLabel, products, type Product } from "@/lib/products";

export function CylinderDetail({ product }: { product: Product }) {
  const { lang } = useI18n();
  const ar = lang === "ar";
  const related = products.filter((item) => item.family === product.family && item.slug !== product.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm text-muted">
        <Link href="/cylinders" className="text-blue">
          {ar ? "الأسطوانات" : "Cylinders"}
        </Link>
        <span className="px-2">/</span>
        {familyLabel[product.family][lang]}
      </p>
      <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl uppercase sm:text-6xl">{product.title[lang]}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{product.summary[lang]}</p>
          <ul className="mt-6 space-y-3">
            {product.points[lang].map((point) => (
              <li key={point} className="border-s-2 border-yellow ps-3 text-sm leading-6">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.uses[lang].map((use) => (
              <span key={use} className="border border-line bg-white px-2 py-1 text-xs">
                {use}
              </span>
            ))}
          </div>
        </div>
        <figure>
          <Image
            src={product.image}
            alt={product.title[lang]}
            width={product.width}
            height={product.height}
            className="h-auto w-full object-cover"
            priority
          />
          <figcaption className="mt-2 text-xs leading-5 text-muted">{product.imageNote[lang]}</figcaption>
        </figure>
      </div>

      <section className="mt-14 border border-line bg-white p-5 sm:p-8">
        <h2 className="font-display text-4xl uppercase">{ar ? "اطلب هذه الأسطوانة" : "Ask for this cylinder"}</h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {ar
            ? "اذكروا المطبعة وطول التكرار والموعد. نرد على واتساب المصنع."
            : "Tell us the press, the repeat and the date you need it. The reply comes back on the plant WhatsApp."}
        </p>
        <EnquiryForm preset={product.slug} />
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm tracking-[0.16em] text-muted uppercase">{ar ? "في العائلة نفسها" : "In the same family"}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/cylinders/${item.slug}`} className="border border-line p-4 hover:border-ink">
                {item.title[lang]}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
