type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-cream-line bg-teal-light">
      <div className="section-inner px-6 py-16 md:px-10 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 mt-3 text-4xl md:text-5xl">{title}</h1>
        {description && (
          <p className="body-lg mt-4 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
