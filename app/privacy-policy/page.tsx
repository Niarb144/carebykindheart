import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | CareNest HomeCare",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section">
        <div className="section-inner max-w-prose space-y-5 text-slate-soft">
          <p>
            {BRAND.name} respects the privacy of the families and clients we
            serve. This page is placeholder legal copy — replace it with your
            agency&apos;s reviewed privacy policy before launch.
          </p>
          <p>
            We collect only the information needed to provide a care
            assessment and coordinate services, and we never sell client
            information to third parties.
          </p>
          <p>
            For questions about how your information is used, contact us at{" "}
            <a href={`mailto:${BRAND.email}`} className="text-teal underline">
              {BRAND.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
