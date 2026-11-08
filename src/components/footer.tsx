"use client";

import Link from "next/link";
import { Mark } from "@/components/mark";
import { company } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

const explore = {
  en: [
    { href: "/cylinders", label: "Cylinders" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/plant", label: "The plant" },
    { href: "/contact", label: "Contact" },
  ],
  ar: [
    { href: "/cylinders", label: "الأسطوانات" },
    { href: "/process", label: "طريقة العمل" },
    { href: "/about", label: "عن الشركة" },
    { href: "/plant", label: "المصنع" },
    { href: "/contact", label: "تواصل" },
  ],
};

export function Footer() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-3">
            <Mark className="h-11 w-11" />
            <span>
              <span className="font-display block text-3xl leading-none">Master Roller</span>
              <span className="mt-1 block text-[0.62rem] tracking-[0.28em] text-muted uppercase">
                {ar ? "أسطوانات · كروم · بروفة" : "Engrave · Chrome · Proof"}
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            {ar
              ? "ماستر برينتنغ بليت إندستري ذ.م.م هي فرع الإمارات لمجموعة ماستر رولر. نحفر أسطوانات الروتوغرافور لطابعات التغليف والديكور."
              : "Master Printing Plate Industry L.L.C. is the UAE plant of Master Roller Group. We engrave rotogravure cylinders for packaging and décor printers."}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">{ar ? "تصفح" : "Explore"}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {explore[lang].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow">{ar ? "المصنع" : "The plant"}</p>
          <address className="mt-4 text-sm leading-7 not-italic text-muted">
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
          <a className="mt-4 block" href={`tel:${company.phone}`} dir="ltr">
            {company.phoneDisplay}
          </a>
          <a className="mt-1 block text-sm text-muted" href={`tel:${company.phoneAlt}`} dir="ltr">
            {company.phoneAltDisplay}
          </a>
          <a className="mt-5 inline-block text-sm text-blue" href={company.mapLink}>
            {ar ? "فتح الخريطة" : "Open the map"} →
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-muted sm:px-8">
          <p>© 2026 {company.legal}</p>
          <a href={company.parentSite}>{company.parent}</a>
        </div>
      </div>
    </footer>
  );
}
