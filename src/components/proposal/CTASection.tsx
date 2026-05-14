import Link from "next/link";

import { RossBlob } from "@/components/proposal/RossBlob";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  button?: {
    label: string;
    href: string;
  };
};

export function CTASection({ eyebrow, title, description, button }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-black/10 px-6 py-28 md:px-12 lg:px-20">
      <RossBlob className="-left-12 bottom-0 h-[250px] w-[220px] bg-[#b9d0b5]/70" />
      <RossBlob
        variant="alt"
        className="-right-10 top-10 h-[280px] w-[240px] bg-[#dde9fc]/70"
      />

      <div className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white/70 p-8 backdrop-blur md:p-12">
        {eyebrow && (
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-black/40">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-black/65">{description}</p>

        {button && (
          <div className="mt-10">
            <Link
              href={button.href}
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-base font-bold text-white transition hover:bg-black/80"
            >
              {button.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
