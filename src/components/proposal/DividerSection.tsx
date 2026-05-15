import { MotionReveal } from "@/components/proposal/MotionReveal";
import { RossBlob } from "@/components/proposal/RossBlob";

type DividerSectionProps = {
  title: string;
  text?: string;
};

export function DividerSection({ title, text }: DividerSectionProps) {
  return (
    <section className="relative flex min-h-[78vh] overflow-hidden border-t border-black/10 px-6 py-24 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f121a] via-[#191d28] to-[#131823]" />
      <RossBlob className="left-20 top-10 h-[320px] w-[280px] bg-[#d4b5d2]/20" />
      <RossBlob variant="alt" className="-right-8 bottom-8 h-[220px] w-[180px] bg-[#bdd4f7]/25" />

      <div className="relative z-10 my-auto max-w-4xl text-white">
        <MotionReveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Divider</p>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">{title}</h2>
        </MotionReveal>
        {text && (
          <MotionReveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/70">{text}</p>
          </MotionReveal>
        )}
      </div>
    </section>
  );
}
