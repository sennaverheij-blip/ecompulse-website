import LogoStrip from "@/components/LogoStrip";
import HowItWorks from "@/components/HowItWorks";
import StatsStrip from "@/components/StatsStrip";
import AlternatingFeatures from "@/components/AlternatingFeatures";
import TestimonialsV2 from "@/components/ui/testimonial-v2";
import PricingPreview from "@/components/PricingPreview";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { Navigation, Hero } from "@/components/ui/saa-s-template";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      <main>
        {/* ─── Hero ─── */}
        <Hero />

        <LogoStrip />

        <div id="how-it-works">
          <HowItWorks />
        </div>

        <StatsStrip />

        <TestimonialsV2 />

        <AlternatingFeatures />

        <FAQ />

        <PricingPreview />

        <ContactSection />

        <CTABanner />

        <Footer />
      </main>
    </div>
  );
}
