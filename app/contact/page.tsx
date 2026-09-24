import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | CareNest HomeCare",
  description:
    "Reach the CareNest HomeCare team for a free care assessment. Call, email, or send us your loved one's care needs directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help — reach out today"
        description="Whether you're planning ahead or need care right away, our coordinators are ready to talk through your options."
      />

      <section className="section">
        <div className="section-inner grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-teal-deep">
              Contact information
            </h2>

            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-slate">Direct phone line</p>
                  <a href={BRAND.phoneHref} className="text-teal-deep hover:underline">
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-slate">Email</p>
                  <a href={`mailto:${BRAND.email}`} className="text-teal-deep hover:underline">
                    {BRAND.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-slate">Office address</p>
                  <p className="text-slate-soft">
                    {BRAND.addressLine1}
                    <br />
                    {BRAND.addressLine2}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  <Clock size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-slate">Office hours</p>
                  <p className="text-slate-soft">Mon–Fri, 8:00 AM – 6:00 PM</p>
                  <p className="text-slate-soft">Caregiving support: 24/7, 365 days</p>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-2xl bg-honey-light p-4">
                <AlertCircle size={20} className="mt-0.5 shrink-0 text-honey" aria-hidden="true" />
                <p className="text-sm text-teal-deep">
                  For an urgent care need, please call us directly rather than
                  submitting the form — our line is answered 24/7.
                </p>
              </li>
            </ul>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-card border border-cream-line bg-teal-light">
              <div className="flex h-full w-full items-center justify-center text-sm text-teal-deep/70">
                Map placeholder — {BRAND.addressLine2}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-teal-deep">
              Request a free care assessment
            </h2>
            <p className="mt-2 text-slate-soft">
              Share a few details and a care coordinator will follow up to plan
              next steps.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
