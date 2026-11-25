"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; en: string; ar: string }[];
}) {
  const { lang } = useI18n();

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const label = item[lang];
          const last = index === items.length - 1;
          return (
            <li key={`${item.en}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !last ? (
                <Link href={item.href} className="text-blue">
                  {label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
