import { RossBlob } from "@/components/proposal/RossBlob";
import { MotionReveal } from "@/components/proposal/MotionReveal";

type ProposalHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function ProposalHero({ eyebrow, title, subtitle }: ProposalHeroProps) {
  return (
    <section className="relative flex min-h-screen overflow-hidden px-6 py-24 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(177,204,255,0.28),transparent_35%),radial-gradient(circle_at_10%_70%,rgba(189,220,184,0.2),transparent_32%),linear-gradient(180deg,#f6f1e8_0%,#f3efe6_45%,#eee8dc_100%)]" />
      <RossBlob className="-right-20 top-20 h-[520px] w-[420px] bg-[#dde9fc]/70" />
      <RossBlob variant="alt" className="bottom-16 left-10 h-[180px] w-[150px] bg-[#b9d0b5]/80" />

      <div className="relative z-10 flex max-w-6xl flex-col justify-center">
        {eyebrow && (
          <MotionReveal>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-black/45">{eyebrow}</p>
          </MotionReveal>
        )}
        <MotionReveal delay={0.1}>
          <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">{title}</h1>
        </MotionReveal>
        {subtitle && (
          <MotionReveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-black/65 md:text-2xl">{subtitle}</p>
          </MotionReveal>
        )}
      </div>
    </section>
  );
}
