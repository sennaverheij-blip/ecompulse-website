import Link from "next/link";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import HeroAvatars from "@/components/HeroAvatars";
import LogoStrip from "@/components/LogoStrip";
import HowItWorks from "@/components/HowItWorks";
import StatsStrip from "@/components/StatsStrip";
import AlternatingFeatures from "@/components/AlternatingFeatures";
import TestimonialGrid from "@/components/TestimonialGrid";
import PricingPreview from "@/components/PricingPreview";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen dot-pattern">
      <Navbar />

      <main>
        {/* ─── 2.1 Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h1
                  className="font-display font-bold leading-[1.08] tracking-tight"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  Stop Leaving 20–30% of Your Revenue on the Table.
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-lg leading-relaxed">
                  Done-for-you Klaviyo email flows. Live in 5–7 days. Built to
                  recover lost carts, win back customers, and run on autopilot — forever.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/pricing" className="btn-primary">
                    Get My Flows Set Up
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="#how-it-works" className="text-sm text-[#f5f5f5] underline underline-offset-4 decoration-[#333] hover:decoration-[#c4622d] transition-colors py-3">
                    See How It Works
                  </Link>
                </div>
                <div className="mt-10">
                  <HeroAvatars />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <DashboardMockup />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── 2.2 Logo Strip ─── */}
        <LogoStrip />

        {/* ─── 2.3 How It Works ─── */}
        <div id="how-it-works">
          <HowItWorks />
        </div>

        {/* ─── 2.4 Stats Strip ─── */}
        <StatsStrip />

        {/* ─── 2.5 Alternating Features ─── */}
        <AlternatingFeatures />

        {/* ─── 2.6 Testimonials ─── */}
        <TestimonialGrid />

        {/* ─── 2.7 Pricing ─── */}
        <PricingPreview />

        {/* ─── 2.8 FAQ ─── */}
        <FAQ />

        {/* ─── 2.9 Contact ─── */}
        <ContactSection />

        {/* ─── 2.10 Final CTA ─── */}
        <CTABanner />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
