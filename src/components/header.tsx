"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { useI18n, type Lang } from "@/lib/i18n";

const links = {
  en: [
    { href: "/about", label: "About" },
    { href: "/cylinders", label: "Cylinders" },
    { href: "/process", label: "Process" },
    { href: "/plant", label: "Plant" },
    { href: "/contact", label: "Contact" },
  ],
  ar: [
    { href: "/about", label: "عن الشركة" },
    { href: "/cylinders", label: "الأسطوانات" },
    { href: "/process", label: "طريقة العمل" },
    { href: "/plant", label: "المصنع" },
    { href: "/contact", label: "تواصل" },
  ],
};

export function Header() {
  const { lang, setLang } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const items = links[lang];
  const onHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onHero ? "text-paper" : "border-b border-line bg-paper/95 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-8 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Mark className="h-9 w-9 shrink-0" />
            <span className="min-w-0 leading-none">
              <span className="font-display block text-[1.35rem] sm:text-[1.7rem]">Master Roller</span>
              <span className={`block text-[0.58rem] tracking-[0.18em] uppercase ${onHero ? "text-paper/70" : "text-muted"}`}>
                {lang === "ar" ? "أم القيوين" : "Umm Al Quwain"}
              </span>
            </span>
          </Link>
          <div className="lg:hidden">
            <LangSwitch lang={lang} setLang={setLang} light={onHero} />
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-start text-[0.72rem] tracking-[0.08em] uppercase sm:text-[0.78rem] lg:flex-1 lg:justify-center lg:gap-x-5 lg:text-[0.82rem] lg:tracking-[0.12em]" aria-label="Primary">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`border-b py-1.5 transition-colors ${
                  active ? "border-current" : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <LangSwitch lang={lang} setLang={setLang} light={onHero} />
        </div>
      </div>
    </header>
  );
}

function LangSwitch({ lang, setLang, light }: { lang: Lang; setLang: (lang: Lang) => void; light: boolean }) {
  return (
    <div className={`flex shrink-0 text-[0.68rem] tracking-[0.14em] ${light ? "text-paper" : "text-ink"}`} role="group" aria-label="Language">
      {(["en", "ar"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-1.5 py-2 ${lang === code ? "opacity-100" : "opacity-45"}`}
          aria-pressed={lang === code}
        >
          {code === "en" ? "EN" : "عربي"}
        </button>
      ))}
    </div>
  );
}
