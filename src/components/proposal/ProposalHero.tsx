import { RossBlob } from "@/components/proposal/RossBlob";

type ProposalHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function ProposalHero({ eyebrow, title, subtitle }: ProposalHeroProps) {
  return (
    <section className="relative flex min-h-screen overflow-hidden px-6 py-24 md:px-12 lg:px-20">
      <RossBlob className="-right-20 top-20 h-[520px] w-[420px] bg-[#dde9fc]" />
      <RossBlob
        variant="alt"
        className="bottom-16 left-10 h-[180px] w-[150px] bg-[#b9d0b5]"
      />

      <div className="relative z-10 flex max-w-5xl flex-col justify-center">
        {eyebrow && (
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-black/45">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-8 max-w-3xl text-xl leading-9 text-black/65">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
