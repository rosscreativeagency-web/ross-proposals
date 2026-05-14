type PricingSectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  items: {
    service: string;
    description: string;
    price: string;
  }[];
};

export function PricingSection({
  eyebrow,
  title,
  text,
  items,
}: PricingSectionProps) {
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

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-black/10 bg-white/70">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid gap-6 border-b border-black/10 p-7 last:border-none md:grid-cols-[1fr_1.5fr_220px]"
            >
              <div>
                <h3 className="text-xl font-extrabold">
                  {item.service}
                </h3>
              </div>

              <div>
                <p className="text-base leading-8 text-black/60">
                  {item.description}
                </p>
              </div>

              <div className="flex items-start justify-start md:justify-end">
                <span className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
