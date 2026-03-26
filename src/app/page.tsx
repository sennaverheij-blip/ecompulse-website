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
        <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-0 overflow-hidden hero-bg">
          {/* Floating left card */}
          <div className="hidden xl:block absolute left-[3%] 2xl:left-[6%] top-[160px] w-[220px]">
            <ScrollReveal delay={0.3}>
              <div className="floating-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-medium text-green-400">Flow active</span>
                </div>
                <p className="text-xs font-medium text-white mb-3">Abandoned checkout</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 rounded-full bg-[#c4622d]" />
                    <div>
                      <p className="text-[9px] text-[#999]">Email 1 sent &middot; 4 min ago</p>
                      <p className="text-[9px] text-white">Hey, you left something behind</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 rounded-full bg-white/10" />
                    <div>
                      <p className="text-[9px] text-[#666]">Email 2 &middot; sends in 23h</p>
                      <p className="text-[9px] text-[#666]">Still thinking about it?</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating right cards */}
          <div className="hidden xl:block absolute right-[3%] 2xl:right-[6%] top-[130px] w-[200px]">
            <ScrollReveal delay={0.4}>
              <div className="floating-card p-4">
                <p className="text-[10px] text-[#666] uppercase tracking-wider">This month</p>
                <p className="text-xl font-bold font-display text-white mt-1">$18,420</p>
                <p className="text-[10px] text-[#c4622d] mt-0.5">recovered from flows</p>
                <div className="mt-3 w-full h-8">
                  <svg viewBox="0 0 180 30" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 25 C20 22, 40 14, 60 17 C80 20, 100 8, 130 10 C150 12, 170 4, 180 6" fill="none" stroke="#c4622d" strokeWidth="1.5" />
                    <path d="M0 25 C20 22, 40 14, 60 17 C80 20, 100 8, 130 10 C150 12, 170 4, 180 6 L180 30 L0 30 Z" fill="#c4622d" opacity="0.1" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="floating-card p-3 mt-3">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-[#666]">Open rate</p>
                  <p className="text-[11px] font-bold text-white">62.4%</p>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-1.5">
                  <div className="w-[62%] h-full rounded-full bg-[#c4622d]" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Center content */}
          <div className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto text-center px-5 sm:px-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#c4622d] animate-pulse" />
                <span className="text-[11px] sm:text-xs text-[#999]">Flows go live in <span className="text-[#c4622d] font-medium">5–7 days</span></span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="font-display font-bold leading-[1.08] tracking-tight text-[clamp(32px,6vw,72px)]">
                Stop losing revenue to<br className="hidden sm:block" />
                <span className="font-accent text-[#c4622d]">broken email flows</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg text-[#6b6b6b] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                We build and install done-for-you Klaviyo flows that recover abandoned carts,
                win back churning customers, and turn one-time buyers into repeat revenue.
                One-time setup, no retainers.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <p className="mt-3 text-xs text-[#555]">
                ✓ Results-backed guarantee &nbsp;·&nbsp; ✓ One-time payment &nbsp;·&nbsp; ✓ No monthly fees
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/pricing" className="btn-primary w-full sm:w-auto justify-center">
                  Get My Flows Built
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="#how-it-works" className="text-sm text-[#888] hover:text-white transition-colors py-2 sm:py-3">
                  See how it works ↓
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 sm:mt-10 flex flex-col items-center">
                <HeroAvatars />
              </div>
            </ScrollReveal>
          </div>

          {/* Dashboard image — the hero visual */}
          <ScrollReveal delay={0.25}>
            <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-5 sm:px-8">
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

        {/* ─── Logo Strip ─── */}
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
