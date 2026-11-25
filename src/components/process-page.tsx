"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useI18n } from "@/lib/i18n";

const steps = {
  en: [
    ["Artwork and colour", "Send the pack, the repeat and the press. ICC profiles and engraving curves are set with GMG and other instruments for the substrate, so the digital proof, the cylinder proof and the printed result stay in step."],
    ["CNC base", "A high-end CNC lathe prepares the cylinder to tolerance grade IT6, roundness of about 0.0025 mm, and surface roughness Ra 0.8–1.6 μm."],
    ["Copper plating", "Full-automatic 1.7-metre copper tanks plate one gravure cylinder at a time. Parameters are set for that cylinder, for a controlled deposit and an even thickness. Daetwyler CFM ECONO 1610 and CFM 1610 cover face lengths from 400 to 1,700 mm."],
    ["Electromechanical engraving", "Two HELL K5 Smart XL and two K5 Smart engravers. One-button operation runs the engraving and the check. HD Gravure holds contours. CellEye measures cell volume, and SprintEasy compensates for stylus wear. HelioXtreme 32+ adds XtremeEngraving up to 540 lines/cm and depths up to 100 μm for logos, barcodes and microtext."],
    ["Laser gravure", "A separate process. A laser images a resist without contact, then etching forms a smooth U-shaped cell. The dot can be square, round, hexagonal or a custom security shape. Screen, angle and depth follow the ink rather than a diamond stylus."],
    ["Chrome", "Chrome protects the engraving for the run. The chrome tanks, like the copper tanks, treat one cylinder at a time."],
    ["Quality control", "QC follows the job from prepress through engraving, plating and proofing. Before dispatch the plant checks cylinder dimensions, surface finish, engraving quality and proof colour against the approved specification."],
    ["Ink, proof and dispatch", "An automatic dispenser meters base inks from stored formulas, including Pantone targets inside the ink gamut. The proof is the record the printer signs. The cylinder then leaves Umm Al Quwain."],
  ],
  ar: [
    ["الملف واللون", "أرسلوا العبوة وطول التكرار والمطبعة. تُضبط ملفات ICC ومنحنيات الحفر بأجهزة GMG وغيرها حسب الخامة، ليتفق الدليل الرقمي وبروفة الأسطوانة والنتيجة المطبوعة."],
    ["قاعدة CNC", "مخرطة مبرمجة عالية التجهيز تجهّز الأسطوانة بدرجة سماحية IT6، واستدارة نحو 0.0025 مم، وخشونة سطح Ra 0.8–1.6 ميكرومتر."],
    ["طلاء النحاس", "أحواض نحاس آلية كاملة بطول 1.7 متر تطلي أسطوانة حفر واحدة في كل مرة. تُضبط المعاملات لتلك الأسطوانة لترسيب مضبوط وسمك متساوٍ. تغطي Daetwyler CFM ECONO 1610 وCFM 1610 طول وجه من 400 إلى 1700 مم."],
    ["الحفر الكهروميكانيكي", "آلتان HELL K5 Smart XL وآلتان K5 Smart. التشغيل بزر واحد ينفّذ الحفر والفحص. HD Gravure يحفظ الحواف. CellEye يقيس حجم الخلية، وSprintEasy يعوّض تآكل الإبرة. يضيف HelioXtreme 32+ تقنية XtremeEngraving حتى 540 خطاً/سم وأعماقاً حتى 100 ميكرومتر للشعارات والباركود والنص الدقيق."],
    ["حفر الليزر", "عملية منفصلة. يصوّر الليزر طبقة مقاومة دون تلامس، ثم يكوّن الحفر خلية U ملساء. يمكن أن تكون النقطة مربعة أو دائرية أو سداسية أو نقشاً أمنياً خاصاً. التسطير والزاوية والعمق تتبع الحبر لا إبرة ماسية."],
    ["الكروم", "الكروم يحمي الحفر خلال الإنتاج. أحواض الكروم، مثل أحواض النحاس، تعالج أسطوانة واحدة في كل مرة."],
    ["مراقبة الجودة", "تراقب الجودة الطلب من ما قبل الطباعة حتى الحفر والطلاء والبروفة. قبل الشحن يراجع المصنع أبعاد الأسطوانة وسطحها وجودة الحفر ولون البروفة مقابل المواصفة المعتمدة."],
    ["الحبر والبروفة والتسليم", "موزع آلي يعاير الأحبار الأساسية من وصفات مخزنة، ومنها أهداف بانتون ضمن سلسلة الحبر المتاحة. البروفة هي السجل الذي يوقعه المطبعة. ثم تغادر الأسطوانة أم القيوين."],
  ],
};

const rows = {
  en: [
    ["Dot shape", "Diamond, fixed", "Square, round, hexagon or a custom security dot"],
    ["Cell section", "Wide top, narrow V bottom. Ink releases less easily", "Smooth U-shaped wall. Ink transfers more evenly"],
    ["Solid coverage", "Lower volume on large solids", "Cells can be deepened for stronger metallic and solid ink"],
    ["Ink", "Baseline", "About 10–15% less ink at the same print density"],
    ["Wear", "The opening narrows and colour shifts sooner", "The U stays more stable, with less colour drift on a long run"],
  ],
  ar: [
    ["شكل النقطة", "ماسي، ثابت", "مربع أو دائري أو سداسي أو نقطة أمنية خاصة"],
    ["مقطع الخلية", "فتحة واسعة وقاع V ضيق. تحرير الحبر أصعب", "جدار U أملس. انتقال الحبر أكثر انتظاماً"],
    ["التغطية المصمتة", "حجم أقل على المساحات الكبيرة", "يمكن تعميق الخلايا لحبر معدني ومصمت أقوى"],
    ["الحبر", "خط الأساس", "حبر أقل بنحو 10–15% عند كثافة الطباعة نفسها"],
    ["التآكل", "تضيق الفتحة ويزيح اللون أبكر", "شكل U أثبت، وانحراف لون أقل على الإنتاج الطويل"],
  ],
};

const laserUses = {
  en: [
    "High-end tobacco, wine-box, pharmaceutical and cosmetic packaging",
    "Securities, anti-counterfeit tickets, lottery and embossing rollers",
    "Large solids, metallic ink, matte and high-opacity work",
    "Million-metre flexible packaging runs",
    "Jobs that need microtext, fine gradients and hidden security patterns",
  ],
  ar: [
    "تغليف التبغ وعلب النبيذ والدواء ومستحضرات التجميل عالي المستوى",
    "الأوراق المالية وتذاكر مكافحة التقليد واليانصيب وأسطوانات النقش",
    "المساحات الكبيرة والحبر المعدني والمطفي والعالي التغطية",
    "إنتاج تغليف مرن بملايين الأمتار",
    "الأعمال التي تحتاج نصاً دقيقاً وتدرجات ناعمة ونقشاً أمنياً مخفياً",
  ],
};

export function ProcessPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-14">
      <Breadcrumbs
        items={[
          { href: "/", en: "Home", ar: "الرئيسية" },
          { en: "Process", ar: "طريقة العمل" },
        ]}
      />
      <p className="eyebrow mt-6">{ar ? "طريقة العمل" : "How a cylinder moves"}</p>
      <h1 className="font-display mt-3 max-w-3xl">
        {ar ? "من ملف التصميم إلى بروفة يمكن توقيعها." : "From a design file to a proof you can sign."}
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-muted">
        {ar
          ? "هذه مراحل مصنع أم القيوين كما ينشرها: اللون، الخراطة، الطلاء، حفر HELL، حفر الليزر، الجودة، ثم البروفة."
          : "These are the stages the Umm Al Quwain plant publishes: colour, turning, plating, HELL engraving, laser gravure, quality control, then the proof."}
      </p>
      <ol className="mt-12">
        {steps[lang].map(([title, body], index) => (
          <li key={title} className="grid gap-3 border-t border-ink py-6 md:grid-cols-12">
            <span className="font-display text-3xl text-blue md:col-span-2">0{index + 1}</span>
            <h2 className="text-2xl md:col-span-3">{title}</h2>
            <p className="leading-7 text-muted md:col-span-7">{body}</p>
          </li>
        ))}
      </ol>

      <section className="mt-16">
        <h2 className="font-display">{ar ? "الليزر مقابل الحفر الكهربائي" : "Laser and electromechanical engraving"}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          {ar
            ? "الخلية الكهربائية على شكل V تفقد حجماً حين تتآكل الفتحة. خلية الليزر على شكل U تبقي مساحة الفتحة أثبت على الإنتاج الطويل."
            : "A V-shaped cell loses ink volume as the opening wears. A U-shaped laser cell keeps a more stable opening through a long print run."}
        </p>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] border-collapse text-start text-sm">
            <caption className="border-b border-line bg-field px-4 py-3 text-start text-base">
              {ar ? "فرق بنية الخلية" : "How the cell is built"}
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-4 py-3 text-start font-medium">
                  {ar ? "البند" : "Item"}
                </th>
                <th scope="col" className="px-4 py-3 text-start font-medium">
                  {ar ? "حفر كهربائي (خلية V)" : "Electro engraving (V-cell)"}
                </th>
                <th scope="col" className="px-4 py-3 text-start font-medium">
                  {ar ? "حفر ليزر (خلية U)" : "Laser gravure (U-cell)"}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows[lang].map((row) => (
                <tr key={row[0]} className="border-b border-line last:border-b-0">
                  <th scope="row" className="px-4 py-3 text-start font-medium">
                    {row[0]}
                  </th>
                  <td className="px-4 py-3 text-muted">{row[1]}</td>
                  <td className="px-4 py-3 text-muted">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-muted">
          {ar
            ? "أرقام توفير الحبر والمتانة من مقارنة المصنع المنشورة، عند كثافة طباعة واحدة وسمك كروم متقارب. حفر الليزر عملية أعلى تكلفة، وتُختار حين يغلب أثر الطباعة أو الحماية أو التوفير أو ثبات الإنتاج الطويل."
            : "The ink and durability figures are the plant’s published comparison, at equal print density and a comparable chrome thickness. Laser gravure costs more to make, and it is chosen when print effect, protection, ink saving or long-run stability carry the job."}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display">{ar ? "متى يصنع الليزر الفرق" : "When laser gravure earns its place"}</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {laserUses[lang].map((item) => (
            <li key={item} className="border border-line bg-white px-4 py-3 text-sm leading-6">
              {item}
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(ar
            ? [
                ["0.05 مم", "خطوط أمنية ونص دقيق وتدرجات بلا حافة منشورة"],
                ["200+ خط/سم", "تسطير أعلى مع زاوية ونقطة تُحددان للعمل"],
                ["+30%", "متانة طباعة أعلى في موجز المصنع عند سمك كروم متقارب"],
                ["10–15%", "توفير حبر وطاقة تجفيف أقل عند الكثافة نفسها"],
              ]
            : [
                ["0.05 mm", "Security lines, microtext and gradients without a serrated edge"],
                ["200+ L/cm", "Higher screens, with angle and dot set for the job"],
                ["30%+", "Higher print durability in the plant brief, at a comparable chrome thickness"],
                ["10–15%", "Less ink, and less drying energy, at the same density"],
              ]
          ).map(([figure, body]) => (
            <li key={figure} className="bg-field p-5">
              <p className="font-display text-3xl">{figure}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <Link href="/contact" className="btn btn-ink mt-12">
        {ar ? "ابدأ طلباً" : "Start a job"}
      </Link>
    </article>
  );
}
