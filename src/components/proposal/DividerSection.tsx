import { RossBlob } from "@/components/proposal/RossBlob";

type DividerSectionProps = {
  title: string;
  text?: string;
};

export function DividerSection({ title, text }: DividerSectionProps) {
  return (
    <section className="relative flex min-h-[70vh] overflow-hidden border-t border-black/10 px-6 py-24 md:px-12 lg:px-20">
      <RossBlob className="left-16 top-16 h-[360px] w-[300px] bg-[#d0b0ce]/60" />

      <div className="relative z-10 flex max-w-4xl flex-col justify-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-black/40">
          Section
        </p>

        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          {title}
        </h2>

        {text && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
