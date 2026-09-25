import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, ShieldCheck, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Care by KindHeart",
  description:
    "Care by KindHeart's mission is to improve quality of life for aging adults and support families caring for loved ones at home.",
};

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Experienced",
    description:
      "Care by KindHeart is a state-licensed in-home care agency that has served families in the Denver metro area and surrounding counties for more than a decade.",
  },
  {
    icon: ShieldCheck,
    title: "Certified",
    description:
      "Every caregiver is carefully screened and background-checked before hiring, then insured and supervised by our support staff throughout their time with us.",
  },
  {
    icon: HeartHandshake,
    title: "Committed",
    description:
      "We tailor every service to the client's actual needs, so care stays efficient, reliable, and centered on the comfort of home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Care by KindHeart"
        title="Our mission is simple: help families care for the people they love."
      />

      <section className="section">
        <div className="section-inner grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="h2 mt-3">
              Improving quality of life for aging adults, one family at a time.
            </h2>
            <p className="body-lg mt-5">
              Everything we do at Care by KindHeart is driven by a single
              purpose: helping aging adults stay safe, comfortable, and
              independent at home, while giving their families genuine peace
              of mind.
            </p>
            <p className="mt-4 text-slate-soft">
              We started as a small team of caregivers and coordinators who
              believed home care should feel personal, not transactional.
              Today, that same belief shapes every assessment, every
              caregiver match, and every check-in we make.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft">
            <Image
              src="/hero.jpg"
              alt="A caregiver helping an older adult take a walk outdoors"
              fill
              sizes="(min-width: 768px) 500px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">What guides us</p>
            <h2 className="h2 mt-3">Three commitments behind every visit.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-card border border-cream-line bg-cream p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-light text-teal">
                  <pillar.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-teal-deep">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-soft">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
