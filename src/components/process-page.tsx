"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const steps = {
  en: [
    ["Artwork in", "Send the pack, the repeat and the press it has to fit. A name and a phone number are enough to open the job."],
    ["Prepress", "The file is checked and separated. Questions about trap, repeat or a missing font go back to you before metal is cut."],
    ["Base", "The cylinder body is prepared to the face length and circumference the press needs. Seamless tube work is part of the group’s shop practice."],
    ["Engraving", "The image is engraved on the group’s gravure platforms: Daetwyler, Hell and Ohio systems named by Master Roller."],
    ["Chrome", "A chrome layer protects the engraving for the run. Plating is one of the trades staffed at the UAE plant."],
    ["Proof", "A proof is pulled so the printer can compare colour and detail with the approved artwork before the cylinder ships."],
    ["Dispatch", "The cylinder leaves Umm Al Quwain for presses in the UAE and, where agreed, further across the Middle East and Africa."],
  ],
  ar: [
    ["استلام التصميم", "أرسلوا العبوة وطول التكرار والمطبعة التي ستعمل عليها. يكفي اسم ورقم هاتف لفتح الطلب."],
    ["ما قبل الطباعة", "يُراجع الملف ويُفصل. أسئلة التراكب أو التكرار أو الخط الناقص تعود إليكم قبل العمل على المعدن."],
    ["القاعدة", "تُجهَّز الأسطوانة لطول الوجه والمحيط الذي تحتاجه المطبعة. أنبوب بلا وصلة جزء من ممارسة ورش المجموعة."],
    ["الحفر", "تُحفر الصورة على منصات الحفر لدى المجموعة: أنظمة Daetwyler وHell وOhio التي تذكرها ماستر رولر."],
    ["الكروم", "طبقة كروم تحمي الحفر خلال الإنتاج. الطلاء من المهن العاملة في مصنع الإمارات."],
    ["البروفة", "تُسحب بروفة ليقارن المطبعة اللون والتفاصيل مع التصميم المعتمد قبل شحن الأسطوانة."],
    ["التسليم", "تغادر الأسطوانة أم القيوين إلى مطابع الإمارات، وإلى الشرق الأوسط وأفريقيا حين يُتفق على ذلك."],
  ],
};

export function ProcessPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="eyebrow">{ar ? "طريقة العمل" : "How a cylinder moves"}</p>
      <h1 className="font-display mt-3 max-w-3xl text-5xl uppercase sm:text-6xl">
        {ar ? "من ملف التصميم إلى بروفة يمكن توقيعها." : "From a design file to a proof you can sign."}
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-muted">
        {ar
          ? "لا ننشر إعدادات الحفر. هذه هي المراحل التي يراها العميل، وهي مطابقة لما يعلنه المصنع عن ما قبل الطباعة والكروم والبروفة."
          : "Engraving settings stay on the shop floor. These are the stages a customer actually sees, and they match what the plant publishes about prepress, chrome and proofing."}
      </p>
      <ol className="mt-12">
        {steps[lang].map(([title, body], index) => (
          <li key={title} className="grid gap-3 border-t border-ink py-6 md:grid-cols-12">
            <span className="font-display text-3xl text-blue md:col-span-2">0{index + 1}</span>
            <h2 className="text-2xl md:col-span-3">{title}</h2>
            <p className="text-muted leading-7 md:col-span-7">{body}</p>
          </li>
        ))}
      </ol>
      <Link href="/contact" className="btn btn-ink mt-8">
        {ar ? "ابدأ طلباً" : "Start a job"}
      </Link>
    </article>
  );
}
