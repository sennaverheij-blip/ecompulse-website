import Link from "next/link";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import TrustBadge from "@/components/TrustBadge";
import FeatureGrid from "@/components/FeatureGrid";
import BenefitsRow from "@/components/BenefitsRow";
import PricingPreview from "@/components/PricingPreview";
import TestimonialGrid from "@/components/TestimonialGrid";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="flame-bg absolute inset-0" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
                Boost eCommerce Revenue with Email Flows
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#888] max-w-lg leading-relaxed">
                Ecom store. Now automate email flows, catch up sales and increase
                customer lifetime value by 20–25%.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-[#c4622d] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#d4743f] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Check The Packages
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8">
                <TrustBadge />
              </div>
            </div>

            {/* Dashboard visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-12 glow-hero pointer-events-none" />
                <DashboardMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Feature Grid ─── */}
        <FeatureGrid />

        {/* ─── Benefits Row ─── */}
        <BenefitsRow />

        {/* ─── Pricing Preview ─── */}
        <PricingPreview />

        {/* ─── Testimonials ─── */}
        <TestimonialGrid />

        {/* ─── FAQ ─── */}
        <FAQ />

        {/* ─── Contact ─── */}
        <ContactSection />

        {/* ─── CTA Banner ─── */}
        <CTABanner ctaLabel="Get Started" ctaHref="/pricing" />

        {/* ─── Footer ─── */}
        <Footer />
      </main>
    </div>
  );
}
