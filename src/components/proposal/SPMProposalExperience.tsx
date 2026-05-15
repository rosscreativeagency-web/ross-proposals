"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/types/proposal";

type Props = { proposal: Proposal };

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export function SPMProposalExperience({ proposal }: Props) {
  const cards = proposal.sections.find((s) => s.type === "cards");
  const timeline = proposal.sections.find((s) => s.type === "timeline");
  const pricing = proposal.sections.find((s) => s.type === "pricing");

  return (
    <main className="relative overflow-hidden bg-[#060606] text-[#f2ebe1]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,#c68a2f22,transparent_35%),radial-gradient(circle_at_80%_20%,#9f4c1728,transparent_35%),radial-gradient(circle_at_50%_100%,#f6d9a010,transparent_45%)]" />

      <section className="relative min-h-screen px-6 py-20 md:px-14 lg:px-24">
        <motion.div {...fadeUp} className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-between rounded-[2.4rem] border border-[#ffffff26] bg-gradient-to-br from-[#ffffff0d] to-[#ffffff00] p-8 backdrop-blur-sm md:p-12">
          <div className="flex items-center justify-between border-b border-[#ffffff24] pb-5 text-xs tracking-[0.18em] text-[#d6c0a3]">
            <span>ROSS × SPM</span><span>PROPOSAL 2026</span>
          </div>
          <div className="space-y-6 py-10">
            <p className="text-sm text-[#d0c4b2]">{proposal.client}</p>
            <h1 className="max-w-4xl text-4xl leading-[1.35] font-semibold md:text-6xl">{proposal.title}</h1>
            <p className="max-w-3xl text-lg leading-9 text-[#d7ccbc]">{proposal.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["استراتژی برند", "داستان‌پردازی تعاملی", "فعال‌سازی فروش"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#ffffff22] bg-[#ffffff09] p-5 text-sm">{item}</div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-24 md:px-14 lg:px-24">
        <motion.div {...fadeUp} className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <p className="text-xs tracking-[0.22em] text-[#bd9970]">فرصت بازار</p>
            <h2 className="text-3xl leading-[1.6] md:text-5xl">SPM باید از یک محصول به یک انتخاب حرفه‌ای تبدیل شود.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="min-h-[210px] rounded-3xl border border-[#ffffff22] bg-[#ffffff08] p-6">
              <p className="text-xs text-[#bcab94]">Insight</p>
              <p className="mt-8 leading-8 text-[#efe3d2]">تصمیم خرید در این بازار، تابع اعتماد، آموزش و لمس مزیت اقتصادی است.</p>
            </div>
            <div className="min-h-[210px] rounded-3xl border border-[#ffffff22] bg-gradient-to-b from-[#c58a2a22] to-transparent p-6">
              <p className="text-xs text-[#e4c08b]">Action</p>
              <p className="mt-8 leading-8 text-[#f3e4d1]">روایت پیشنهاد به‌صورت مرحله‌ای طراحی شده تا مخاطب از آگاهی به خرید حرکت کند.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {cards && cards.type === "cards" && (
        <section className="relative px-6 py-24 md:px-14 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <motion.h3 {...fadeUp} className="mb-10 text-3xl md:text-5xl">{cards.title}</motion.h3>
            <div className="grid gap-6 md:grid-cols-3">
              {cards.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#ffffff2e] bg-[#0f0f0f] p-6"
                >
                  <div className="mb-7 h-44 rounded-2xl border border-dashed border-[#e4c18f66] bg-[linear-gradient(145deg,#ffffff0d,#ffffff03)]" />
                  <p className="text-sm text-[#d6a86e]">0{index + 1}</p>
                  <h4 className="mt-2 text-xl">{card.title}</h4>
                  <p className="mt-4 leading-8 text-[#d8ccbc]">{card.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {timeline && timeline.type === "timeline" && (
        <section className="relative px-6 py-24 md:px-14 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <motion.h3 {...fadeUp} className="mb-14 text-3xl md:text-5xl">{timeline.title}</motion.h3>
            <div className="relative space-y-10 before:absolute before:top-0 before:bottom-0 before:right-[0.8rem] before:w-px before:bg-[#d8aa6f55] md:before:right-1/2">
              {timeline.items.map((item) => (
                <motion.div {...fadeUp} key={item.phase} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <span className="absolute top-7 right-0 h-4 w-4 rounded-full border border-[#f3c686] bg-[#0a0a0a] md:right-1/2 md:translate-x-1/2" />
                  <div className="hidden md:block" />
                  <article className="mr-8 rounded-3xl border border-[#ffffff24] bg-[#ffffff08] p-6 md:mr-0">
                    <p className="text-xs tracking-[0.16em] text-[#d0a46b]">{item.phase}</p>
                    <h4 className="mt-3 text-2xl">{item.title}</h4>
                    <p className="mt-4 leading-8 text-[#dbcebd]">{item.text}</p>
                    <div className="mt-6 h-28 rounded-2xl border border-dashed border-[#ffffff44]" />
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pricing && pricing.type === "pricing" && (
        <section className="relative px-6 py-24 md:px-14 lg:px-24">
          <motion.div {...fadeUp} className="mx-auto max-w-7xl rounded-[2rem] border border-[#ffffff26] bg-[#ffffff08] p-8 md:p-12">
            <h3 className="text-3xl md:text-5xl">{pricing.title}</h3>
            <p className="mt-4 max-w-3xl leading-8 text-[#d9cdbd]">{pricing.text}</p>
            <div className="mt-10 space-y-5">
              {pricing.items.map((item) => (
                <div key={item.service} className="grid gap-4 rounded-2xl border border-[#ffffff21] bg-[#0f0f0f] p-5 md:grid-cols-[1.1fr_2fr_auto] md:items-center">
                  <h4 className="text-lg">{item.service}</h4>
                  <p className="text-[#d4c7b6]">{item.description}</p>
                  <p className="text-sm text-[#e6bf88]">{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}
    </main>
  );
}
