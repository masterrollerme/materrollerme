export type Family = "packaging" | "laser" | "special";
export type LocaleText = { en: string; ar: string };

export type Product = {
  slug: string;
  family: Family;
  image: string;
  width: number;
  height: number;
  imageNote: LocaleText;
  title: LocaleText;
  summary: LocaleText;
  points: { en: string[]; ar: string[] };
  uses: { en: string[]; ar: string[] };
};

export const familyLabel: Record<Family, LocaleText> = {
  packaging: { en: "Packaging", ar: "تغليف" },
  laser: { en: "Laser gravure", ar: "حفر ليزر" },
  special: { en: "Special cylinders", ar: "أسطوانات خاصة" },
};

export const products: Product[] = [
  {
    slug: "rotogravure-cylinders",
    family: "packaging",
    image: "/images/uae/k5.webp",
    width: 1800,
    height: 1351,
    imageNote: {
      en: "A HELL K5 Smart engraving a copper cylinder.",
      ar: "آلة HELL K5 Smart تحفر أسطوانة نحاسية.",
    },
    title: { en: "Rotogravure cylinders", ar: "أسطوانات الروتوغرافور" },
    summary: {
      en: "Gravure cylinders for flexible packaging, engraved in Umm Al Quwain from prepress and copper plating through HELL engraving, chrome and proof.",
      ar: "أسطوانات حفر للتغليف المرن، تُحفر في أم القيوين من ما قبل الطباعة وطلاء النحاس حتى حفر HELL والكروم والبروفة.",
    },
    points: {
      en: [
        "Prepress, cylinder making, engraving and proofing in one plant",
        "Two HELL K5 Smart XL and two K5 Smart electromechanical engravers",
        "HD Gravure, CellEye volume measurement and SprintEasy stylus compensation",
        "For converters across the UAE, the GCC, the Middle East and Africa",
      ],
      ar: [
        "ما قبل الطباعة وصناعة الأسطوانة والحفر والبروفة في مصنع واحد",
        "آلتان HELL K5 Smart XL وآلتان K5 Smart للحفر الكهروميكانيكي",
        "HD Gravure وقياس حجم الخلية CellEye وتعويض الإبرة SprintEasy",
        "لمحولات الإمارات والخليج والشرق الأوسط وأفريقيا",
      ],
    },
    uses: {
      en: ["Flexible packaging", "Film and pouches", "Labels", "Repeat orders"],
      ar: ["التغليف المرن", "الأفلام والأكياس", "الملصقات", "الطلبيات المتكررة"],
    },
  },
  {
    slug: "pharmaceutical-packaging-cylinders",
    family: "packaging",
    image: "/images/uae/hell.webp",
    width: 1200,
    height: 1150,
    imageNote: {
      en: "A HELL Gravure Systems head used for stylus compensation on electromechanical engraving.",
      ar: "رأس HELL Gravure Systems يُستخدم لتعويض الإبرة في الحفر الكهروميكانيكي.",
    },
    title: { en: "Pharmaceutical packaging cylinders", ar: "أسطوانات التغليف الدوائي" },
    summary: {
      en: "Cylinders for pharmaceutical packs and labels, where barcodes, microtext and stable colour have to hold. HelioXtreme engraving reaches 540 lines per centimetre.",
      ar: "أسطوانات للعبوات والملصقات الدوائية، حيث يجب أن يثبت الباركود والنص الدقيق واللون. حفر HelioXtreme يصل إلى 540 خطاً في السنتيمتر.",
    },
    points: {
      en: [
        "HELL HelioXtreme 32+ with XtremeEngraving",
        "Writing resolution up to 540 lines/cm, set apart from the screen ruling",
        "Suited to logos, barcodes, microtext and fine pharmaceutical artwork",
        "ICC and engraving curves maintained with GMG for each substrate",
      ],
      ar: [
        "HELL HelioXtreme 32+ بتقنية XtremeEngraving",
        "دقة كتابة حتى 540 خطاً/سم، مستقلة عن تسطير الشاشة",
        "مناسبة للشعارات والباركود والنص الدقيق ورسوم الدواء",
        "منحنيات ICC والحفر تُدار بـ GMG لكل خامة",
      ],
    },
    uses: {
      en: ["Pharmaceutical packaging", "Labels", "Barcodes", "Microtext"],
      ar: ["التغليف الدوائي", "الملصقات", "الباركود", "النص الدقيق"],
    },
  },
  {
    slug: "tobacco-packaging-cylinders",
    family: "packaging",
    image: "/images/uae/proofing.webp",
    width: 2400,
    height: 925,
    imageNote: {
      en: "Finished cylinders in the proofing area before they leave the plant.",
      ar: "أسطوانات جاهزة في منطقة البروفة قبل مغادرة المصنع.",
    },
    title: { en: "Tobacco packaging cylinders", ar: "أسطوانات تغليف التبغ" },
    summary: {
      en: "Cylinders for tobacco packaging that need sharp contours, dense solids and stable colour across a long run. Laser gravure is used when the artwork calls for it.",
      ar: "أسطوانات لتغليف التبغ تحتاج حوافاً حادة ومساحات مصمتة كثيفة ولوناً ثابتاً على الإنتاج الطويل. يُستخدم حفر الليزر حين يطلبه التصميم.",
    },
    points: {
      en: [
        "One of the three packaging lines the Umm Al Quwain plant is built around",
        "Electromechanical engraving where repeatable cell volume is the priority",
        "Laser gravure for metallic ink, heavy solids and fine security detail",
        "Proof colour checked against the approved file before dispatch",
      ],
      ar: [
        "أحد خطوط التغليف الثلاثة التي بُني حولها مصنع أم القيوين",
        "حفر كهروميكانيكي حين تكون أولوية حجم الخلية القابل للتكرار",
        "حفر ليزر للحبر المعدني والمساحات الثقيلة والتفاصيل الأمنية",
        "يُراجع لون البروفة مقابل الملف المعتمد قبل الشحن",
      ],
    },
    uses: {
      en: ["Tobacco packaging", "Cartons", "Metallic ink", "Long runs"],
      ar: ["تغليف التبغ", "العلب", "الحبر المعدني", "الإنتاج الطويل"],
    },
  },
  {
    slug: "laser-gravure-cylinders",
    family: "laser",
    image: "/images/uae/dots.webp",
    width: 800,
    height: 304,
    imageNote: {
      en: "Electromechanical diamond cells beside laser cells, including a character at 100 and 400 lines per centimetre.",
      ar: "خلايا ماسية للحفر الكهروميكانيكي إلى جانب خلايا الليزر، ومنها حرف عند 100 و400 خط في السنتيمتر.",
    },
    title: { en: "Laser gravure cylinders", ar: "أسطوانات حفر الليزر" },
    summary: {
      en: "Laser-assisted etching that forms smooth U-shaped cells. Dot shape, screen and angle follow the ink, instead of a fixed diamond stylus.",
      ar: "حفر بمعاونة الليزر يكوّن خلايا U ملساء. شكل النقطة والتسطير والزاوية تتبع الحبر، لا إبرة ماسية ثابتة.",
    },
    points: {
      en: [
        "Non-contact laser imaging of a resist, then controlled etching",
        "Square, round, hexagonal or custom security dots",
        "Screens above 200 lines/cm, with 0.05 mm lines and microtext",
        "The plant’s comparison: about 10–15% less ink at the same density, and a more stable opening on long runs",
      ],
      ar: [
        "تصوير ليزر غير ملامس لطبقة مقاومة، ثم حفر مضبوط",
        "نقاط مربعة أو دائرية أو سداسية أو أمنية حسب الطلب",
        "تسطير فوق 200 خط/سم، مع خطوط 0.05 مم ونص دقيق",
        "مقارنة المصنع: حبر أقل بنحو 10–15% عند الكثافة نفسها، وفتحة أثبت على الإنتاج الطويل",
      ],
    },
    uses: {
      en: ["Fine detail", "Metallic and solid ink", "Security patterns", "Million-metre runs"],
      ar: ["التفاصيل الدقيقة", "الحبر المعدني والمصمت", "النقش الأمني", "إنتاج بملايين الأمتار"],
    },
  },
  {
    slug: "security-cylinders",
    family: "special",
    image: "/images/uae/security.webp",
    width: 480,
    height: 536,
    imageNote: {
      en: "A laser-engraved guilloche security pattern.",
      ar: "نقشة أمنية محفورة بالليزر.",
    },
    title: { en: "Anti-counterfeit cylinders", ar: "أسطوانات مكافحة التقليد" },
    summary: {
      en: "Cylinders for security artwork on protected packaging, tickets and lottery work: microtext, fine gradients and hidden patterns.",
      ar: "أسطوانات للرسوم الأمنية على التغليف المحمي والتذاكر واليانصيب: نص دقيق وتدرجات ناعمة ونقوش مخفية.",
    },
    points: {
      en: [
        "Custom security dots that a diamond stylus cannot cut",
        "0.05 mm lines and gradients without a serrated edge",
        "The file is reviewed before engraving and the proof before dispatch",
        "Quoted from Umm Al Quwain for brand-protection work in the region",
      ],
      ar: [
        "نقاط أمنية خاصة لا تقطعها الإبرة الماسية",
        "خطوط 0.05 مم وتدرجات بلا حافة منشورة",
        "يُراجع الملف قبل الحفر والبروفة قبل الشحن",
        "يُسعَّر الطلب من أم القيوين لأعمال حماية العلامة في المنطقة",
      ],
    },
    uses: {
      en: ["Brand protection", "Tickets", "Lottery", "Hidden patterns"],
      ar: ["حماية العلامة", "التذاكر", "اليانصيب", "النقوش المخفية"],
    },
  },
  {
    slug: "embossing-rollers",
    family: "special",
    image: "/images/uae/plating.webp",
    width: 1200,
    height: 1243,
    imageNote: {
      en: "A copper-plated cylinder on the plating line.",
      ar: "أسطوانة مطلية بالنحاس على خط الطلاء.",
    },
    title: { en: "Embossing rollers", ar: "أسطوانات النقش البارز" },
    summary: {
      en: "Embossing rollers quoted with the laser line, for packs where a physical texture sits with securities, tickets or specialty finishing.",
      ar: "أسطوانات نقش بارز تُسعَّر مع خط الليزر، للعبوات التي يجتمع فيها ملمس مادي مع الأوراق المالية أو التذاكر أو التشطيب الخاص.",
    },
    points: {
      en: [
        "Named with securities, anti-counterfeit tickets and lottery work",
        "Cell geometry is chosen for the finish rather than locked to a V-cell",
        "Specified to the press face length and circumference",
        "Enquiries taken by Master Printing Plate Industry in Umm Al Quwain",
      ],
      ar: [
        "مذكورة مع الأوراق المالية وتذاكر مكافحة التقليد واليانصيب",
        "هندسة الخلية تُختار للتشطيب ولا تُحبس في خلية V",
        "تُحدد وفق طول وجه المطبعة والمحيط",
        "تُستقبل الطلبات لدى ماستر برينتنغ بليت إندستري في أم القيوين",
      ],
    },
    uses: {
      en: ["Embossing", "Specialty finishing", "Securities", "Decorative texture"],
      ar: ["النقش البارز", "تشطيب خاص", "أوراق مالية", "ملمس زخرفي"],
    },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
