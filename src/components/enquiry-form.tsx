"use client";

import { FormEvent, useEffect, useState } from "react";
import { whatsappHref } from "@/lib/company";
import { useI18n } from "@/lib/i18n";
import { products } from "@/lib/products";

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

export function EnquiryForm({ preset }: { preset?: string }) {
  const { lang } = useI18n();
  const ar = lang === "ar";
  const [fields, setFields] = useState<Fields>({ ...empty, product: preset ?? "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (preset) setFields((current) => ({ ...current, product: preset }));
  }, [preset]);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!fields.name.trim() || !fields.phone.trim() || !fields.message.trim()) {
      setError(ar ? "الاسم والهاتف والرسالة مطلوبة." : "Name, phone and message are required.");
      return;
    }
    setError("");
    const productTitle =
      products.find((item) => item.slug === fields.product)?.title[lang] ?? fields.product;
    const text = [
      "Master Roller UAE enquiry",
      `Name: ${fields.name}`,
      `Company: ${fields.company || "-"}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email || "-"}`,
      `Cylinder: ${productTitle || "-"}`,
      `Message: ${fields.message}`,
    ].join("\n");
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  const label = ar
    ? {
        name: "الاسم",
        company: "الشركة",
        phone: "الهاتف",
        email: "البريد",
        product: "نوع الأسطوانة",
        message: "تفاصيل الطلب",
        send: "إرسال عبر واتساب",
        note: "تُفتح الرسالة في واتساب على رقم المصنع. لا يُحفظ شيء على هذا الموقع.",
        unset: "لم أحدد بعد",
      }
    : {
        name: "Name",
        company: "Company",
        phone: "Phone",
        email: "Email",
        product: "Cylinder",
        message: "Job details",
        send: "Send on WhatsApp",
        note: "This opens WhatsApp to the plant number. Nothing is stored on this website.",
        unset: "Not sure yet",
      };

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={label.name} value={fields.name} onChange={(value) => update("name", value)} required />
        <Field label={label.company} value={fields.company} onChange={(value) => update("company", value)} />
        <Field label={label.phone} value={fields.phone} onChange={(value) => update("phone", value)} required type="tel" />
        <Field label={label.email} value={fields.email} onChange={(value) => update("email", value)} type="email" />
      </div>
      <label className="grid gap-1.5 text-sm">
        <span>{label.product}</span>
        <select
          className="field"
          value={fields.product}
          onChange={(event) => update("product", event.target.value)}
        >
          <option value="">{label.unset}</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.title[lang]}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>{label.message}</span>
        <textarea
          className="field min-h-32 resize-y"
          value={fields.message}
          required
          onChange={(event) => update("message", event.target.value)}
        />
      </label>
      {error && <p className="text-sm text-magenta">{error}</p>}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-ink">
          {label.send}
        </button>
        <p className="max-w-xs text-xs leading-5 text-muted">{label.note}</p>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span>{label}</span>
      <input
        className="field"
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
