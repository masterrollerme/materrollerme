"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useI18n();
  const ar = lang === "ar";
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-3 text-5xl">
        {ar ? "هذه الصفحة غير موجودة." : "That page is not on this site."}
      </h1>
      <Link href="/" className="btn btn-ink mt-8">
        {ar ? "العودة للرئيسية" : "Back to the homepage"}
      </Link>
    </div>
  );
}
