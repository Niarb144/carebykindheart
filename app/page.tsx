import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
