"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mark } from "@/components/mark";
import { company } from "@/lib/company";
import { useI18n, type Lang } from "@/lib/i18n";

const links = {
  en: [
    { href: "/about", label: "About" },
    { href: "/cylinders", label: "Cylinders" },
    { href: "/process", label: "Process" },
    { href: "/plant", label: "Umm Al Quwain" },
    { href: "/contact", label: "Contact" },
  ],
  ar: [
    { href: "/about", label: "عن الشركة" },
    { href: "/cylinders", label: "الأسطوانات" },
    { href: "/process", label: "طريقة العمل" },
    { href: "/plant", label: "أم القيوين" },
    { href: "/contact", label: "تواصل" },
  ],
};

export function Header() {
  const { lang, setLang } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = links[lang];
  const cta = lang === "ar" ? "اطلب أسطوانة" : "Request a cylinder";

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Mark />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-[1.35rem] uppercase tracking-wide text-ink">
              Master Roller
            </span>
            <span className="block text-xs tracking-[0.14em] text-muted uppercase">
              {lang === "ar" ? "أم القيوين" : "Umm Al Quwain"}
            </span>
          </span>
        </Link>

        <nav className="ms-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm ${active ? "text-ink" : "text-muted hover:text-ink"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-2">
          <LangSwitch lang={lang} setLang={setLang} />
          <Link href="/contact" className="btn btn-ink hidden sm:inline-flex">
            {cta}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-label={lang === "ar" ? "القائمة" : "Menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-px bg-ink" />
              <span className="h-px bg-ink" />
              <span className="h-px bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-paper px-4 py-3 lg:hidden" aria-label="Mobile">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-ink/10 py-3 text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a className="mt-3 block text-sm text-blue" href={`tel:${company.phone}`} dir="ltr">
            {company.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex border border-ink/15 text-xs tracking-wide" role="group" aria-label="Language">
      {(["en", "ar"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-2.5 py-2 ${lang === code ? "bg-ink text-paper" : "text-muted"}`}
          aria-pressed={lang === code}
        >
          {code === "en" ? "EN" : "عربي"}
        </button>
      ))}
    </div>
  );
}
