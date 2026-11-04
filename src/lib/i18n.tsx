"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "ar";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("mr-lang");
    if (saved === "ar" || saved === "en") setLang(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (hydrated) window.localStorage.setItem("mr-lang", lang);
  }, [lang, hydrated]);

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used within LanguageProvider");
  return value;
}
