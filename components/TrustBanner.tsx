import { TRUST_STATS } from "@/lib/constants";

export default function TrustBanner() {
  return (
    <section className="border-y border-cream-line bg-teal-light">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-10">
        {TRUST_STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-display text-3xl font-semibold text-teal-deep md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate">{stat.label}</p>
            <p className="mt-0.5 text-xs text-slate-soft">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
