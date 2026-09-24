import { Phone } from "lucide-react";
import Button from "./Button";
import { BRAND } from "@/lib/constants";

type CTASectionProps = {
  heading?: string;
  subheading?: string;
};

export default function CTASection({
  heading = "Your loved ones deserve care you can trust.",
  subheading = "Talk with a care coordinator today — there's no cost or obligation for your first assessment.",
}: CTASectionProps) {
  return (
    <section className="section bg-teal-deep">
      <div className="section-inner flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-white/75">{subheading}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="/contact" className="!bg-white !text-teal-deep hover:!bg-cream">
            Request Free Assessment
          </Button>
          <Button
            href={BRAND.phoneHref}
            variant="ghost"
            icon={<Phone size={18} />}
            className="!text-white hover:!bg-white/10"
          >
            Call {BRAND.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
