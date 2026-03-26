import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
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
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-0 overflow-hidden hero-bg">
          <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#c4622d] animate-pulse" />
                <span className="text-xs text-[#999]">Flows go live in <span className="text-[#c4622d] font-medium">5–7 days</span></span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="font-display font-bold leading-[1.06] tracking-tight text-[clamp(36px,5.5vw,68px)]">
                Stop losing revenue to{" "}
                <span className="font-accent text-[#c4622d]">broken email flows</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-[15px] sm:text-[17px] text-[#777] max-w-2xl mx-auto leading-relaxed">
                Done-for-you Klaviyo flows that recover abandoned carts,
                win back churning customers, and turn one-time buyers into repeat revenue.
                One-time setup, no retainers.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/pricing" className="btn-primary w-full sm:w-auto justify-center">
                  Get My Flows Built
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="#how-it-works" className="text-sm text-[#666] hover:text-white transition-colors py-2.5">
                  See how it works ↓
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center">
                <HeroAvatars />
              </div>
            </ScrollReveal>
          </div>

          {/* Dashboard image */}
          <ScrollReveal delay={0.25}>
            <div className="mt-16 sm:mt-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="dashboard-image-wrapper">
                <Image
                  src="/dashboard.png"
                  alt="EcomPulse Dashboard — A$1,354,591.40 total revenue"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        <LogoStrip />

        <div id="how-it-works">
          <HowItWorks />
        </div>

        <StatsStrip />

        <TestimonialGrid />

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
