import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceAccordion from "@/components/ServiceAccordion";
import ProcessSteps from "@/components/ProcessSteps";
import ZipCodeFinder from "@/components/ZipCodeFinder";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services | CareNest HomeCare",
  description:
    "Explore CareNest HomeCare's full range of in-home care services, our four-step care process, and check availability in your area.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our comprehensive homecare services"
        description="From a few hours of companionship to round-the-clock live-in support, our caregivers meet your family exactly where you are."
      />

      <section className="section">
        <div className="section-inner">
          <ServiceAccordion />
        </div>
      </section>

      <section className="section bg-white pt-0 md:pt-0">
        <div className="section-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="h2 mt-3">A simple, guided path to care.</h2>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Service area</p>
            <h2 className="h2 mt-3">Is CareNest available near you?</h2>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <ZipCodeFinder />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
