import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HIPAA Notice | CareNest HomeCare",
};

export default function HipaaNoticePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="HIPAA Notice of Privacy Practices" />
      <section className="section">
        <div className="section-inner max-w-prose space-y-5 text-slate-soft">
          <p>
            {BRAND.name} follows HIPAA-informed practices to protect client
            health and care information. This page is placeholder legal copy —
            replace it with counsel-reviewed HIPAA documentation before
            launch.
          </p>
          <p>
            Client care records are stored securely, shared only with
            authorized care team members and, where applicable, the client&apos;s
            designated family contacts.
          </p>
          <p>
            To request a copy of your full Notice of Privacy Practices, contact
            us at{" "}
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
