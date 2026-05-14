type StatementSectionProps = {
  title: string;
  text: string;
};

export function StatementSection({ title, text }: StatementSectionProps) {
  return (
    <section className="border-t border-black/10 px-6 py-28 md:px-12 lg:px-20">
      <div className="grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h2>

        <p className="text-xl leading-10 text-black/65">{text}</p>
      </div>
    </section>
  );
}
