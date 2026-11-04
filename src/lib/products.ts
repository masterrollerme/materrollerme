export type Family = "packaging" | "decor" | "special";
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
  decor: { en: "Décor", ar: "ديكور" },
  special: { en: "Special cylinders", ar: "أسطوانات خاصة" },
};

export const products: Product[] = [
  {
    slug: "rotogravure-cylinders",
    family: "packaging",
    image: "/images/shop-2.jpg",
    width: 1200,
    height: 756,
    imageNote: {
      en: "Cylinder bases from Master Roller Group production.",
      ar: "قواعد أسطوانات من إنتاج مجموعة ماستر رولر.",
    },
    title: { en: "Rotogravure cylinders", ar: "أسطوانات الروتوغرافور" },
    summary: {
      en: "The core of the Umm Al Quwain plant. Engraved cylinders for gravure presses, taken from artwork through chrome and proof before they reach the pressroom.",
      ar: "أساس مصنع أم القيوين. أسطوانات محفورة لمطابع الحفر، من الملف الفني حتى الكروم والبروفة قبل أن تصل إلى صالة الطباعة.",
    },
    points: {
      en: [
        "Artwork intake, separation and cylinder making in one plant",
        "Chrome plating and proofing before dispatch",
        "Built for repeat packaging work across the Gulf and Africa",
        "Backed by Master Roller Group engraving practice since 2009",
      ],
      ar: [
        "استلام الملفات والفصل وصناعة الأسطوانة في مصنع واحد",
        "طلاء الكروم والبروفة قبل الشحن",
        "مهيأة لأعمال التغليف المتكررة في الخليج وأفريقيا",
        "تستند إلى خبرة مجموعة ماستر رولر في الحفر منذ 2009",
      ],
    },
    uses: {
      en: ["Flexible packaging", "Labels and wraps", "Multi-SKU reprints", "Regional pressrooms"],
      ar: ["التغليف المرن", "الملصقات والأغلفة", "إعادة طباعة عدة أصناف", "مطابع المنطقة"],
    },
  },
  {
    slug: "flexible-packaging-rollers",
    family: "packaging",
    image: "/images/shop-2.jpg",
    width: 1200,
    height: 756,
    imageNote: {
      en: "Cylinder bases prepared for press work.",
      ar: "قواعد أسطوانات مهيأة للعمل على المطبعة.",
    },
    title: { en: "Flexible pack rollers", ar: "أسطوانات التغليف المرن" },
    summary: {
      en: "Cylinders prepared for film and pouch work, where repeat length, register and a clean proof matter as much as the engraving itself.",
      ar: "أسطوانات مهيأة لأعمال الأفلام والأكياس، حيث يهم طول التكرار والتطابق والبروفة النظيفة بقدر أهمية الحفر نفسه.",
    },
    points: {
      en: [
        "For snack, film and pouch converters",
        "Proofed so the printer sees the result before the run",
        "Suited to repeat orders and artwork revisions",
        "Coordinated from Umm Al Quwain for UAE lead times",
      ],
      ar: [
        "لمحولات السناك والأفلام والأكياس",
        "تُراجع ببروفة ليرى المطبعة النتيجة قبل الإنتاج",
        "مناسبة للطلبيات المتكررة وتعديلات التصميم",
        "تُنسق من أم القيوين لمهل التسليم داخل الإمارات",
      ],
    },
    uses: {
      en: ["Snack packaging", "Pouches", "Shrink and wrap films", "Tobacco packaging"],
      ar: ["تغليف السناك", "الأكياس", "أفلام التغليف", "تغليف التبغ"],
    },
  },
  {
    slug: "wooden-texture-rollers",
    family: "decor",
    image: "/images/wood-1.jpg",
    width: 600,
    height: 391,
    imageNote: {
      en: "Surface reference for a wood-grain pattern.",
      ar: "مرجع سطح لنقشة عروق الخشب.",
    },
    title: { en: "Wooden texture rollers", ar: "أسطوانات ملمس الخشب" },
    summary: {
      en: "Rollers that carry wood-grain artwork for décor film, panels and laminate surfaces. The grain has to hold together across the full repeat, not only in a swatch.",
      ar: "أسطوانات تحمل رسم عروق الخشب لأفلام الديكور والألواح والأسطح المصفحة. يجب أن يبقى العرق متماسكاً على كامل التكرار، لا في عينة صغيرة فقط.",
    },
    points: {
      en: [
        "Oak, walnut and other grain directions from the group catalogue",
        "Used for furniture film, flooring and wall panels",
        "Engraved so the repeat does not show a hard join",
        "Supplied to décor printers through the UAE plant",
      ],
      ar: [
        "اتجاهات سنديان وجوز وغيرها من كتالوج المجموعة",
        "لأفلام الأثاث والأرضيات وألواح الجدران",
        "تُحفر بحيث لا يظهر وصل حاد في التكرار",
        "تُورَّد لطابعات الديكور عبر مصنع الإمارات",
      ],
    },
    uses: {
      en: ["Furniture film", "Flooring", "Wall panels", "Door wraps"],
      ar: ["أفلام الأثاث", "الأرضيات", "ألواح الجدران", "تغليف الأبواب"],
    },
  },
  {
    slug: "marble-grain-rollers",
    family: "decor",
    image: "/images/marble-1.jpg",
    width: 600,
    height: 391,
    imageNote: {
      en: "Surface reference for a marble vein.",
      ar: "مرجع سطح لعرق الرخام.",
    },
    title: { en: "Marble grain rollers", ar: "أسطوانات عروق الرخام" },
    summary: {
      en: "Marble and stone patterns for decorative surfaces. Veins need a continuous flow around the cylinder, with the same care as a wood grain.",
      ar: "نقوش رخام وحجر للأسطح الزخرفية. تحتاج العروق إلى جريان متصل حول الأسطوانة، بالعناية نفسها التي تُعطى لعروق الخشب.",
    },
    points: {
      en: [
        "Stone and marble artwork for décor converters",
        "Prepared as part of the Master Roller surface range",
        "Checked at proof against the approved reference",
        "Available to UAE and regional décor printers",
      ],
      ar: [
        "رسوم حجر ورخام لمحولات الديكور",
        "ضمن مجموعة أسطح ماستر رولر",
        "تُراجع في البروفة مقابل المرجع المعتمد",
        "متاحة لطابعات الديكور في الإمارات والمنطقة",
      ],
    },
    uses: {
      en: ["Décor film", "Furniture panels", "Interior surfaces", "PVC décor"],
      ar: ["أفلام الديكور", "ألواح الأثاث", "أسطح داخلية", "ديكور PVC"],
    },
  },
  {
    slug: "embossing-rollers",
    family: "special",
    image: "/images/wood-2.jpg",
    width: 600,
    height: 391,
    imageNote: {
      en: "Décor surface of the kind these rollers finish.",
      ar: "سطح ديكور من النوع الذي تشطبه هذه الأسطوانات.",
    },
    title: { en: "Embossing rollers", ar: "أسطوانات النقش البارز" },
    summary: {
      en: "Embossing rollers for decoration, from the group’s special-cylinder line. They put a physical texture into film and paper rather than only a printed image.",
      ar: "أسطوانات نقش بارز للزينة، من خط الأسطوانات الخاصة في المجموعة. تضع ملمساً مادياً في الفيلم والورق، لا صورة مطبوعة فقط.",
    },
    points: {
      en: [
        "For décor, coating and specialty finishing",
        "Paired with printed wood, marble and plain films",
        "Made within Master Roller Group’s special-cylinder work",
        "Quoted from the UAE desk for Middle East jobs",
      ],
      ar: [
        "للديكور والطلاء والتشطيبات الخاصة",
        "تُقرن مع أفلام الخشب والرخام والأفلام السادة",
        "تُصنع ضمن أعمال الأسطوانات الخاصة لمجموعة ماستر رولر",
        "يُسعَّر الطلب من مكتب الإمارات لأعمال الشرق الأوسط",
      ],
    },
    uses: {
      en: ["Décor emboss", "Specialty finishing", "Coated films", "Panel texture"],
      ar: ["نقش الديكور", "تشطيب خاص", "أفلام مطلية", "ملمس الألواح"],
    },
  },
  {
    slug: "heat-transfer-rollers",
    family: "special",
    image: "/images/wood-3.jpg",
    width: 600,
    height: 391,
    imageNote: {
      en: "A grain the transfer range is often asked to reproduce.",
      ar: "عرق يُطلب كثيراً ضمن مجموعة النقل.",
    },
    title: { en: "Heat transfer rollers", ar: "أسطوانات النقل الحراري" },
    summary: {
      en: "Textile heat-transfer rollers. The cylinder prints the transfer paper that later releases the design onto fabric.",
      ar: "أسطوانات النقل الحراري للنسيج. تطبع الأسطوانة ورق النقل الذي يحرر التصميم لاحقاً على القماش.",
    },
    points: {
      en: [
        "Listed in the Master Roller product range since the group’s early years",
        "For textile printers working with transfer paper",
        "Artwork, engraving and proof handled as one job",
        "Supported for regional customers from Umm Al Quwain",
      ],
      ar: [
        "ضمن تشكيلة ماستر رولر منذ سنوات المجموعة الأولى",
        "لطابعات النسيج التي تعمل بورق النقل",
        "الملف والحفر والبروفة تُعالج كطلب واحد",
        "دعم لعملاء المنطقة من أم القيوين",
      ],
    },
    uses: {
      en: ["Textile transfer", "Fashion prints", "Home textiles", "Sportswear graphics"],
      ar: ["النقل على النسيج", "طباعة الأزياء", "مفروشات المنزل", "رسوم الملابس الرياضية"],
    },
  },
  {
    slug: "ceramic-rollers",
    family: "special",
    image: "/images/shop-2.jpg",
    width: 1200,
    height: 756,
    imageNote: {
      en: "Steel bases from the group. Ceramic and anilox are specified per press.",
      ar: "قواعد فولاذية من المجموعة. السيراميك والأنيلكس يُحددان حسب المطبعة.",
    },
    title: { en: "Ceramic and anilox rollers", ar: "أسطوانات سيراميك وأنيلكس" },
    summary: {
      en: "Ceramic and anilox rollers for high-precision coating and ink metering, supplied through the group’s special-cylinder capability.",
      ar: "أسطوانات سيراميك وأنيلكس للطلاء الدقيق ومعايرة الحبر، تُورَّد عبر قدرة المجموعة على الأسطوانات الخاصة.",
    },
    points: {
      en: [
        "For coating lines and anilox metering",
        "Specified with the printer’s press and coat weight in mind",
        "Part of the special-roller range alongside embossing",
        "Enquiries taken by the UAE plant",
      ],
      ar: [
        "لخطوط الطلاء ومعايرة الأنيلكس",
        "تُحدد وفق المطبعة ووزن طبقة الطلاء",
        "ضمن مجموعة الأسطوانات الخاصة إلى جانب النقش",
        "تُستقبل الطلبات في مصنع الإمارات",
      ],
    },
    uses: {
      en: ["Precision coating", "Ink metering", "Specialty gravure", "Finishing lines"],
      ar: ["طلاء دقيق", "معايرة الحبر", "حفر متخصص", "خطوط التشطيب"],
    },
  },
  {
    slug: "security-cylinders",
    family: "special",
    image: "/images/shop-2.jpg",
    width: 1200,
    height: 756,
    imageNote: {
      en: "Cylinder bases. Security artwork is confirmed on the proof.",
      ar: "قواعد أسطوانات. يُؤكد الرسم الأمني على البروفة.",
    },
    title: { en: "Anti-counterfeit cylinders", ar: "أسطوانات مكافحة التقليد" },
    summary: {
      en: "Cylinders for security artwork on brand-protected packaging. Fine detail is agreed in prepress and confirmed on the proof.",
      ar: "أسطوانات للرسوم الأمنية على التغليف المحمي للعلامة. تُعتمد التفاصيل الدقيقة في ما قبل الطباعة وتُؤكد على البروفة.",
    },
    points: {
      en: [
        "A published Master Roller product line",
        "For brands that need protected packaging artwork",
        "File review before engraving, proof before dispatch",
        "Handled confidentially from enquiry to delivery",
      ],
      ar: [
        "خط إنتاج معلن لدى ماستر رولر",
        "للعلامات التي تحتاج رسوماً محمية على العبوة",
        "مراجعة الملف قبل الحفر، والبروفة قبل الشحن",
        "تُعامل بسرية من الاستفسار حتى التسليم",
      ],
    },
    uses: {
      en: ["Brand protection", "Protected packaging", "Security artwork", "Special editions"],
      ar: ["حماية العلامة", "تغليف محمي", "رسوم أمنية", "إصدارات خاصة"],
    },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
