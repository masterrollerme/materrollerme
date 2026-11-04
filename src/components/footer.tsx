"use client";

import Link from "next/link";
import { Mark } from "@/components/mark";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Mark />
            <div>
              <p className="font-display text-2xl uppercase tracking-wide">Master Roller</p>
              <p className="text-xs tracking-[0.16em] text-paper/60 uppercase">
                {ar ? "مصنع أم القيوين" : "Umm Al Quwain plant"}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-paper/75">
            {ar
              ? "ماستر برينتنغ بليت إندستري ذ.م.م هي فرع الإمارات لمجموعة ماستر رولر. نحفر أسطوانات الروتوغرافور لطابعات التغليف والديكور."
              : "Master Printing Plate Industry L.L.C. is the UAE plant of Master Roller Group. We engrave rotogravure cylinders for packaging and décor printers."}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-yellow">{ar ? "الزيارة" : "Visit"}</p>
          <address className="mt-3 text-sm leading-6 text-paper/80 not-italic">
            {ar ? (
              <>
                قطعة رقم 950، شارع الاتحاد
                <br />
                بلوك 5، أم ديرا، الرافة
                <br />
                أم القيوين، الإمارات
              </>
            ) : (
              company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))
            )}
          </address>
          <a className="mt-3 inline-block text-sm text-yellow" href={company.mapLink}>
            {ar ? "فتح الخريطة" : "Open the map"}
          </a>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-yellow">{ar ? "الخط المباشر" : "Direct line"}</p>
          <a className="mt-3 block text-lg" href={`tel:${company.phone}`} dir="ltr">
            {company.phoneDisplay}
          </a>
          <a className="mt-1 block text-sm text-paper/70" href={`tel:${company.phoneAlt}`} dir="ltr">
            {company.phoneAltDisplay}
          </a>
          <a className="btn btn-yellow mt-5" href={company.whatsapp}>
            WhatsApp
          </a>
          <p className="mt-6 text-xs leading-5 text-paper/55">
            {ar ? "الشركة الأم" : "Parent company"}:{" "}
            <a className="underline" href={company.parentSite}>
              {company.parent}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-paper/50 sm:px-6">
          <p>© 2026 {company.legal}</p>
          <div className="flex gap-4">
            <Link href="/cylinders">{ar ? "الأسطوانات" : "Cylinders"}</Link>
            <Link href="/contact">{ar ? "تواصل" : "Contact"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
