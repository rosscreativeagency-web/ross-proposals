"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import type { Proposal } from "@/types/proposal";

type Props = { proposal: Proposal };

type Slide = {
  id: string;
  kind: "cover" | "divider" | "slide" | "ending";
  eyebrow: string;
  title: string;
  text?: string;
  points?: string[];
  placeholder?: string;
  dark?: boolean;
};

const slides: Slide[] = [
  { id: "cover", kind: "cover", eyebrow: "ROSS × SPM", title: "پروپوزال تعاملی رشد فروش SPM", text: "نسخه وبِ کامل ساختار اسلایدی: استراتژی، آگاهی، جایگاه‌سازی، تبلیغات و فروش." },
  { id: "holding", kind: "slide", eyebrow: "هولدینگ", title: "ROSS Holding / Branches / Services / Clients", points: ["نمایش ساختار گروه، شعب، واحدهای تخصصی", "نقشه سرویس‌ها و حوزه‌های ارائه", "لوگوی مشتریان شاخص به‌صورت دیوار برند"], placeholder: "دیاگرام پیشنهادی: ساختار هولدینگ و شاخه‌ها" },
  { id: "intro-divider", kind: "divider", eyebrow: "DIVIDER", title: "معرفی", text: "از «رس» تا روایت برند: چرا نگاه ما انسانی، استراتژیک و نتیجه‌محور است." },
  { id: "philosophy-1", kind: "slide", eyebrow: "فلسفه ROSS", title: "ما از ماده خام شروع می‌کنیم، نه از قالب آماده", text: "هر برند مثل خاک رس است: قابل شکل‌دادن، انسانی و زنده.", placeholder: "تصویر پیشنهادی: متریال clay / organic texture" },
  { id: "philosophy-2", kind: "slide", eyebrow: "فلسفه ROSS", title: "استراتژی قبل از اجرا", text: "خروجی خلاق بدون مسیر، فقط زیبایی موقتی است.", placeholder: "آیکون پیشنهادی: مسیر استراتژی تا اجرا" },
  { id: "awards", kind: "slide", eyebrow: "افتخارات", title: "Awards & Recognition", points: ["جایگاه‌های رقابتی", "پروژه‌های موفق در صنایع مختلف", "اعتبار اجرایی در کنار کیفیت خلاق"], placeholder: "لوح پیشنهادی: لوگوها / جوایز / افتخارات" },
  { id: "project-intro", kind: "slide", eyebrow: "پروژه SPM", title: "تعریف مسئله پروژه", text: "SPM نیاز دارد از محصول «تمیزکننده» به انتخاب «تخصصی و مطمئن» تبدیل شود.", placeholder: "تصویر پیشنهادی: محصول SPM در صحنه کاربرد" },
  { id: "project-brief", kind: "slide", eyebrow: "پروژه SPM", title: "Project Brief", points: ["چالش: آگاهی پایین از ضرورت شوینده تخصصی", "فرصت: نگرانی هزینه تعمیر دستگاه", "هدف: افزایش اعتماد، افزایش تقاضا، افزایش فروش"], placeholder: "دیاگرام پیشنهادی: مسئله ← استراتژی ← نتیجه" },
  { id: "strategy-divider", kind: "divider", eyebrow: "DIVIDER", title: "استراتژی", text: "چارچوب حرکت: Insight، Message، Channel، Conversion." },
  { id: "strategy-slide", kind: "slide", eyebrow: "استراتژی", title: "ستون‌های اصلی استراتژی", points: ["آموزش بازار", "مقایسه هوشمند با گزینه‌های خارجی", "طراحی مسیر تبدیل تا خرید"], placeholder: "آیکون پیشنهادی: تحقیقات بازار" },
  { id: "awareness-divider", kind: "divider", eyebrow: "DIVIDER", title: "Awareness", text: "مرحله اول: دیده‌شدن + فهم ارزش." },
  { id: "awareness-slide", kind: "slide", eyebrow: "آگاهی", title: "روایت آگاهی‌بخش", points: ["محتوای آموزشی کاربردی", "سناریوی باریستا و مصرف‌کننده خانگی", "نمایش پیامدهای عدم نگهداری صحیح"], placeholder: "تصویر پیشنهادی: باریستا در حال تمیزکردن دستگاه" },
  { id: "positioning-divider", kind: "divider", eyebrow: "DIVIDER", title: "Positioning", text: "مرحله دوم: انتخاب تخصصی در ذهن بازار." },
  { id: "positioning-slide", kind: "slide", eyebrow: "جایگاه‌سازی", title: "معماری پیام برند", points: ["تخصص + اطمینان + صرفه اقتصادی", "لحن حرفه‌ای اما انسانی", "تمایز شفاف در نقطه خرید"], placeholder: "دیاگرام پیشنهادی: جایگاه رقابتی SPM" },
  { id: "ads-divider", kind: "divider", eyebrow: "DIVIDER", title: "Advertising", text: "مرحله سوم: تقویت Reach و Recall." , dark: true},
  { id: "ads-slide", kind: "slide", eyebrow: "تبلیغات", title: "پلتفرم‌های تبلیغاتی", points: ["ویدئوی کوتاه performance-driven", "تبلیغات همکاری با کافه‌ها", "Creativeهای محصول‌محور و کاربردی"], placeholder: "تصویر پیشنهادی: کمپین تبلیغاتی چندکاناله", dark: true },
  { id: "sell-divider", kind: "divider", eyebrow: "DIVIDER", title: "Sell", text: "مرحله چهارم: تبدیل آگاهی به خرید." },
  { id: "sell-slide", kind: "slide", eyebrow: "فروش", title: "فعال‌سازی فروش", points: ["باندلینگ محصول", "سمپلینگ و تریال هدفمند", "POS و پیشنهاد خرید در نقطه تماس"], placeholder: "دیاگرام پیشنهادی: مسیر رشد فروش" },
  { id: "budget", kind: "slide", eyebrow: "Budgeting", title: "چارچوب بودجه‌بندی", points: ["فاز ۱: استراتژی و طراحی", "فاز ۲: تولید محتوا و کمپین", "فاز ۳: تبلیغات و بهینه‌سازی", "فاز ۴: فعال‌سازی فروش و سنجش KPI"], placeholder: "جدول پیشنهادی: بودجه به تفکیک فاز" },
  { id: "ending", kind: "ending", eyebrow: "Thanks", title: "پایان / سپاس", text: "آماده‌ایم نسخه اجرایی را بر اساس تأیید این ساختار آغاز کنیم." },
];

const blob = "absolute rounded-[45%_55%_60%_40%/45%_35%_65%_55%] blur-3xl";

export function SPMProposalExperience({ proposal }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const width = useTransform(progress, (v) => `${v * 100}%`);
  const chapterLinks = useMemo(() => slides.filter((s) => s.kind === "divider" || s.kind === "cover" || s.kind === "ending"), []);

  return (
    <main ref={containerRef} className="relative overflow-x-clip bg-[#f5efe6] text-[#2b2019]">
      <motion.div style={{ width }} className="fixed top-0 right-0 z-50 h-1 bg-[#bb7a52]" />
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="rounded-full border border-[#d4b9a1] bg-[#f9f3eb]/85 px-2 py-4 backdrop-blur">
          {chapterLinks.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="my-2 block h-3 w-3 rounded-full bg-[#d9c2ad] transition hover:scale-110 hover:bg-[#b8734a]" aria-label={c.title} />
          ))}
        </div>
      </aside>

      <div className={`${blob} top-20 -right-20 h-80 w-80 bg-[#e7c9b6]/60 animate-pulse`} />
      <div className={`${blob} top-[35%] -left-28 h-96 w-96 bg-[#c9d8c9]/55 animate-pulse`} />

      {slides.map((slide, index) => (
        <section id={slide.id} key={slide.id} className={`relative px-6 py-16 md:px-12 lg:px-24 ${slide.dark ? "bg-[#1e1a18] text-[#f2e6da]" : ""} ${slide.kind === "divider" ? "py-28" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`mx-auto max-w-7xl ${slide.kind === "cover" ? "min-h-[88vh] flex flex-col justify-between" : ""}`}
          >
            <div className="mb-6 flex items-center justify-between text-xs tracking-[0.2em] opacity-75">
              <span>{slide.eyebrow}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h2 className={`leading-[1.5] ${slide.kind === "cover" ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"}`}>{slide.title}</h2>
                {slide.text && <p className="mt-6 max-w-3xl text-lg leading-9 opacity-85">{slide.text}</p>}
                {slide.points && (
                  <ul className="mt-8 space-y-3 text-lg leading-8">
                    {slide.points.map((point, i) => (
                      <motion.li key={point} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#bb7a52]" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              <motion.div whileHover={{ y: -6 }} className={`relative overflow-hidden rounded-[2.5rem] border p-6 ${slide.dark ? "border-[#f1d9c13b] bg-[#2b2421]" : "border-[#d8c2ae] bg-[#fffaf4]"}`}>
                <div className="absolute -top-14 -left-10 h-32 w-32 rounded-full bg-[#cf9d7a]/20" />
                <div className="absolute -bottom-12 -right-8 h-28 w-28 rounded-full bg-[#9db59d]/20" />
                <div className="relative min-h-[240px] rounded-[2rem] border border-dashed border-[#c8a991] p-5">
                  <p className="text-sm leading-7 opacity-90">{slide.placeholder ?? "تصویر پیشنهادی: فضای بصری اسلاید"}</p>
                  <p className="mt-5 text-xs opacity-70">راهنما: این کادر به‌صورت ماسک ارگانیک/کات‌اوت برای دارایی نهایی جایگزین می‌شود.</p>
                </div>
              </motion.div>
            </div>
            {slide.kind === "cover" && (
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {["آگاهی", "جایگاه‌سازی", "فروش"].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-[#d9c3ad] bg-[#fff8f0] px-5 py-4 text-center text-sm">{item}</div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      ))}

      <footer className="px-6 pb-12 md:px-12 lg:px-24">
        <p className="mx-auto max-w-7xl border-t border-[#d7c0ac] pt-6 text-sm opacity-70">{proposal.title} — ROSS Creative Agency</p>
      </footer>
    </main>
  );
}
