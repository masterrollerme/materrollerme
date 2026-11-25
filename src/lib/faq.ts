import type { LocaleText } from "@/lib/products";

export const faqs: { q: LocaleText; a: LocaleText }[] = [
  {
    q: {
      en: "Where is the Master Roller UAE plant?",
      ar: "أين يقع مصنع ماستر رولر في الإمارات؟",
    },
    a: {
      en: "Plot 950, Al Itehaad Street, Block 5, Umm Deara, Umm Al Quwain. P.O. Box 326873. Phone +971 54 730 7258. Email alexjoe.md@master-roller.com.",
      ar: "قطعة 950، شارع الاتحاد، بلوك 5، أم ديرا، أم القيوين. صندوق بريد 326873. الهاتف +971 54 730 7258. البريد alexjoe.md@master-roller.com.",
    },
  },
  {
    q: {
      en: "What cylinders does the Umm Al Quwain plant engrave?",
      ar: "ما الأسطوانات التي يحفرها مصنع أم القيوين؟",
    },
    a: {
      en: "Rotogravure cylinders for flexible packaging, pharmaceutical packaging and tobacco packaging. The same plant also runs laser gravure for fine detail, security patterns and embossing rollers.",
      ar: "أسطوانات روتوغرافور للتغليف المرن والتغليف الدوائي وتغليف التبغ. ويعمل المصنع نفسه بحفر الليزر للتفاصيل الدقيقة والنقش الأمني وأسطوانات النقش البارز.",
    },
  },
  {
    q: {
      en: "When was Master Printing Plate Industry established?",
      ar: "متى تأسست ماستر برينتنغ بليت إندستري؟",
    },
    a: {
      en: "September 2023, in Umm Al Quwain. It is part of Master Roller Group, which has made rotogravure cylinders since 2009 from Thailand.",
      ar: "في سبتمبر 2023 في أم القيوين. وهي جزء من مجموعة ماستر رولر التي تصنع أسطوانات الروتوغرافور منذ 2009 انطلاقاً من تايلاند.",
    },
  },
  {
    q: {
      en: "Which engraving machines are on the floor?",
      ar: "ما آلات الحفر الموجودة في المصنع؟",
    },
    a: {
      en: "Two HELL K5 Smart XL and two K5 Smart electromechanical engravers, plus a HELL HelioXtreme 32+. Laser gravure is a separate process for U-shaped cells, fine text and security patterns.",
      ar: "آلتان HELL K5 Smart XL وآلتان K5 Smart للحفر الكهروميكانيكي، إضافة إلى HELL HelioXtreme 32+. حفر الليزر عملية منفصلة للخلايا على شكل U والنص الدقيق والنقش الأمني.",
    },
  },
  {
    q: {
      en: "How is laser gravure different from electromechanical engraving?",
      ar: "ما الفرق بين حفر الليزر والحفر الكهروميكانيكي؟",
    },
    a: {
      en: "Electromechanical engraving cuts a fixed diamond-shaped V-cell. Laser gravure images a resist and etches a smooth U-cell, so the dot can be square, round, hexagonal or a custom security shape. The plant’s comparison puts ink use about 10 to 15 percent lower at the same print density.",
      ar: "الحفر الكهروميكانيكي يقطع خلية ماسية ثابتة على شكل V. حفر الليزر يصوّر طبقة مقاومة ثم يحفر خلية U ملساء، فيمكن أن تكون النقطة مربعة أو دائرية أو سداسية أو نقشاً أمنياً خاصاً. مقارنة المصنع تضع استهلاك الحبر أقل بنحو 10 إلى 15 بالمئة عند كثافة الطباعة نفسها.",
    },
  },
  {
    q: {
      en: "Which markets do you supply?",
      ar: "أي الأسواق توردون إليها؟",
    },
    a: {
      en: "More than 60 customers across the UAE, the wider GCC, the Middle East and Africa. Named markets are the UAE, Oman, Qatar, Iraq, Kuwait, Jordan, Syria, Yemen, Cameroon and Uganda.",
      ar: "أكثر من 60 عميلاً في الإمارات ودول الخليج والشرق الأوسط وأفريقيا. الأسواق المذكورة هي الإمارات وعُمان وقطر والعراق والكويت والأردن وسوريا واليمن والكاميرون وأوغندا.",
    },
  },
  {
    q: {
      en: "How do I request a gravure cylinder?",
      ar: "كيف أطلب أسطوانة حفر؟",
    },
    a: {
      en: "Send the pack, the repeat and the press, with a name and a phone number. The form opens WhatsApp on +971 54 730 7258 and stores nothing on this website. You can also email alexjoe.md@master-roller.com.",
      ar: "أرسلوا العبوة وطول التكرار والمطبعة مع الاسم ورقم الهاتف. النموذج يفتح واتساب على +971 54 730 7258 ولا يحفظ شيئاً على هذا الموقع. ويمكنكم الكتابة إلى alexjoe.md@master-roller.com.",
    },
  },
];

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q.en,
    acceptedAnswer: { "@type": "Answer", text: item.a.en },
  })),
};
