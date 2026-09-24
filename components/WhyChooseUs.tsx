import { DIFFERENTIATORS } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="section-inner grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div>
          <p className="eyebrow">Why families choose CareNest</p>
          <h2 className="h2 mt-3">
            The details that make care feel like family, not a service.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="flex gap-5 border-b border-cream-line pb-8 last:border-none last:pb-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                <item.icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-teal-deep">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-soft">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
