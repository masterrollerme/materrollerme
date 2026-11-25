/** Set NEXT_PUBLIC_SITE_URL to the live domain before launch so canonicals, Open Graph and the sitemap use it. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3456").replace(/\/$/, "");

export const company = {
  brand: "Master Roller",
  legal: "Master Printing Plate Industry L.L.C",
  group: "Master Roller Group",
  parent: "Master Roller (Thailand) Co., Ltd.",
  parentSite: "https://master-roller.com/",
  phone: "+971547307258",
  phoneDisplay: "+971 54 730 7258",
  phoneAlt: "+971507413688",
  phoneAltDisplay: "+971 50 741 3688",
  email: "alexjoe.md@master-roller.com",
  whatsapp: "https://wa.me/971547307258",
  poBox: "326873",
  established: "September 2023",
  groupFounded: "2009",
  address: [
    "Plot No. 950, Al Itehaad Street",
    "Block 5, Umm Deara, Al Raafah",
    "Umm Al Quwain, United Arab Emirates",
  ],
  plusCode: "HP36+G73",
  lat: 25.55396,
  lng: 55.710635,
  mapLink: "https://www.google.com/maps/search/?api=1&query=25.55396,55.710635",
  mapEmbed:
    "https://maps.google.com/maps?q=25.55396,55.710635&z=15&hl=en&output=embed",
};

export function whatsappHref(message: string) {
  return `https://wa.me/971547307258?text=${encodeURIComponent(message)}`;
}

export const markets = [
  { en: "United Arab Emirates", ar: "الإمارات" },
  { en: "Oman", ar: "عُمان" },
  { en: "Qatar", ar: "قطر" },
  { en: "Iraq", ar: "العراق" },
  { en: "Kuwait", ar: "الكويت" },
  { en: "Jordan", ar: "الأردن" },
  { en: "Syria", ar: "سوريا" },
  { en: "Yemen", ar: "اليمن" },
  { en: "Cameroon", ar: "الكاميرون" },
  { en: "Uganda", ar: "أوغندا" },
];

export const groupCompanies = [
  { en: "Master Roller (Thailand) Co., Ltd.", ar: "ماستر رولر (تايلاند) المحدودة" },
  { en: "Master Dongzhou (Thailand) Co., Ltd.", ar: "ماستر دونغتشو (تايلاند) المحدودة" },
  { en: "Master Plate Making (Bangladesh) Co., Ltd.", ar: "ماستر بليت ميكينغ (بنغلاديش) المحدودة" },
  { en: "Master Roller (Myanmar) Co., Ltd.", ar: "ماستر رولر (ميانمار) المحدودة" },
  { en: "Master Printing Plate Industry L.L.C.", ar: "ماستر برينتنغ بليت إندستري ذ.م.م" },
  { en: "Master Special Roller Co., Ltd.", ar: "ماستر سبيشال رولر المحدودة" },
  { en: "Master Thail MG Film Co., Ltd.", ar: "ماستر تايل إم جي فيلم المحدودة" },
];
