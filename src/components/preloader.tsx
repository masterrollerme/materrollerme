"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { useI18n } from "@/lib/i18n";

export function Preloader() {
  const { lang } = useI18n();
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    if (window.sessionStorage.getItem("mr-boot") === "1") {
      setPhase("gone");
      return;
    }
    const out = window.setTimeout(() => setPhase("out"), 1500);
    const gone = window.setTimeout(() => {
      window.sessionStorage.setItem("mr-boot", "1");
      setPhase("gone");
    }, 2200);
    return () => {
      window.clearTimeout(out);
      window.clearTimeout(gone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`preloader ${phase === "out" ? "is-out" : ""}`} aria-hidden={phase === "out"}>
      <div className="flex flex-col items-center">
        <span className="preloader__icon">
          <Mark className="h-auto w-full" />
        </span>
        <p className="preloader__word font-display text-ink">Master Roller</p>
        <p className="preloader__sub">{lang === "ar" ? "أم القيوين" : "Umm Al Quwain"}</p>
        <div className="preloader__bar" />
      </div>
    </div>
  );
}
