import { MotionReveal } from "@/components/proposal/MotionReveal";

type MediaSectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  caption?: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export function MediaSection({ eyebrow, title, text, caption, images }: MediaSectionProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="border-t border-black/10 bg-[#ece6db] px-6 py-28 md:px-12 lg:px-20">
      <div className="max-w-7xl">
        {eyebrow && <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-black/45">{eyebrow}</p>}

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h2>
          </MotionReveal>
          {text && (
            <MotionReveal delay={0.1}>
              <p className="text-lg leading-9 text-black/70">{text}</p>
            </MotionReveal>
          )}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {images.map((image, index) => (
            <MotionReveal key={`${image.alt}-${index}`} delay={index * 0.08} className={index === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}>
              <figure className="group relative overflow-hidden rounded-[2rem] border border-black/15 bg-[#f5f1e8] p-3">
                <div className={`relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(155deg,#1f2431,#2c3141_45%,#53607d)] ${index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(235,245,255,0.25),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(197,225,183,0.18),transparent_45%)]" />
                  <div className="absolute inset-0 translate-y-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.55))] transition duration-500 group-hover:translate-y-1" />
                  <div className="absolute inset-x-4 bottom-4 text-right text-sm text-white/80">{image.alt}</div>
                </div>
              </figure>
            </MotionReveal>
          ))}
        </div>

        {caption && <p className="mt-6 max-w-3xl text-sm leading-7 text-black/55">{caption}</p>}
      </div>
    </section>
  );
}
