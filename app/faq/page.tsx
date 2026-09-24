import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | CareNest HomeCare",
  description:
    "Answers to common questions about CareNest HomeCare's caregivers, pricing, scheduling, and care process.",
};

const FAQS = [
  {
    question: "Are your caregivers licensed and background-checked?",
    answer:
      "Yes. Every caregiver completes a full background check, reference verification, and in-person interview before joining our team, and stays current on training throughout their time with us.",
  },
  {
    question: "How quickly can care begin?",
    answer:
      `In most cases, care can begin within 24 to 72 hours of your in-home assessment. For urgent needs, call ${BRAND.phoneDisplay} and we'll do everything we can to move faster.`,
  },
  {
    question: "How much does in-home care cost?",
    answer:
      "Cost depends on the type of care, hours needed, and schedule. Your free assessment includes a clear, written estimate before you commit to anything.",
  },
  {
    question: "Do you accept long-term care insurance?",
    answer:
      "We work with many long-term care insurance policies and can help you understand your coverage during your assessment. Private pay and veterans' benefits coordination are also available.",
  },
  {
    question: "What if the caregiver isn't the right fit?",
    answer:
      "Our Match-Your-Caregiver Guarantee means we'll rematch your loved one with a different caregiver at no additional cost until the fit feels right.",
  },
  {
    question: "Can care plans change over time?",
    answer:
      "Yes. Needs change, and so do our care plans. Your care coordinator checks in regularly and adjusts hours, tasks, or caregiver skills as circumstances evolve.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions"
        description="Can't find what you're looking for? Call us — a real person answers, day or night."
      />

      <section className="section">
        <div className="section-inner max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <CTASection
        heading="Still have questions?"
        subheading="A quick phone call is often the fastest way to get clear answers."
      />
    </>
  );
}
