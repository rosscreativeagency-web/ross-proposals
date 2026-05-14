type TimelineSectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  items: {
    phase: string;
    title: string;
    text: string;
  }[];
};

export function TimelineSection({ eyebrow, title, text, items }: TimelineSectionProps) {
  return (
    <section className="border-t border-black/10 px-6 py-28 md:px-12 lg:px-20">
      <div className="max-w-7xl">
        {eyebrow && (
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-black/40">
            {eyebrow}
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h2>

          {text && <p className="text-lg leading-9 text-black/65">{text}</p>}
        </div>

        <div className="mt-16 space-y-5">
          {items.map((item, index) => (
            <article
              key={index}
              className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/60 p-7 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-black/35">
                  {item.phase}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-black/60">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
