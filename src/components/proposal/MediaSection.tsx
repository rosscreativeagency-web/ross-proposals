import Image from "next/image";

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

export function MediaSection({
  eyebrow,
  title,
  text,
  caption,
  images,
}: MediaSectionProps) {
  const isSingle = images.length === 1;

  if (!images.length) {
    return null;
  }

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

        <div className="mt-16">
          {isSingle ? (
            <figure className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 85vw"
                />
              </div>
            </figure>
          ) : (
            <div className="grid gap-5 md:grid-cols-12">
              {images.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className={`overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-3 ${
                    index === 0
                      ? "md:col-span-7 md:row-span-2"
                      : index === 1
                        ? "md:col-span-5"
                        : "md:col-span-5"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.25rem] ${
                      index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          )}

          {caption && (
            <p className="mt-6 max-w-3xl text-sm leading-7 text-black/50">
              {caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
