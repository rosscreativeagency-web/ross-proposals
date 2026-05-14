type CardsSectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  cards: {
    title: string;
    text: string;
  }[];
};

export function CardsSection({ eyebrow, title, text, cards }: CardsSectionProps) {
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

          {text && (
            <p className="text-lg leading-9 text-black/65">
              {text}
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={index}
              className="rounded-[2rem] border border-black/10 bg-white/60 p-7 shadow-sm backdrop-blur"
            >
              <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                {index + 1}
              </span>

              <h3 className="text-2xl font-extrabold leading-tight">
                {card.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-black/60">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
