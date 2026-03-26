import Link from "next/link";
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
        <section className="relative pt-28 sm:pt-36 pb-8 overflow-hidden hero-bg">
          {/* Floating left card — flow diagram */}
          <div className="hidden lg:block absolute left-[2%] xl:left-[5%] top-[140px] w-[220px]">
            <ScrollReveal delay={0.3}>
              <div className="floating-card p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-md bg-[#c4622d]/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c4622d" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <span className="text-xs font-medium text-white">Browse abandoned flow</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-2">
                    <span className="text-[10px] text-[#c4622d]">&#9889;</span>
                    <span className="text-[10px] text-[#999]">When someone <span className="text-white">views a product</span></span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-2">
                    <span className="text-[10px] text-[#6b6b6b]">&#9201;</span>
                    <span className="text-[10px] text-[#999]">Wait <span className="text-white">1 hour</span></span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-2">
                    <span className="text-[10px] text-[#6b6b6b]">&#9993;</span>
                    <span className="text-[10px] text-[#999]">Send email: <span className="text-white">You forgot something</span></span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating right card — ROI */}
          <div className="hidden lg:block absolute right-[2%] xl:right-[5%] top-[120px] w-[220px]">
            <ScrollReveal delay={0.4}>
              <div className="floating-card p-4">
                <p className="text-lg font-bold font-display text-white">4-10x ROI</p>
                <p className="text-[10px] text-[#6b6b6b] mt-1">Earn back your investment within days</p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#6b6b6b]">Investment</span>
                    <div className="w-20 h-1.5 rounded-full bg-white/[0.06]"><div className="w-[30%] h-full rounded-full bg-[#c4622d]" /></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#6b6b6b]">Return</span>
                    <div className="w-20 h-1.5 rounded-full bg-white/[0.06]"><div className="w-[85%] h-full rounded-full bg-[#c4622d]" /></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="floating-card p-4 mt-4">
                <p className="text-xl font-bold font-display text-white">&euro;124.000</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px] text-[#6b6b6b]">Additional revenue (20% of total)</span>
                  <span className="text-[10px] text-green-400">+234%</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Center content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
            <ScrollReveal>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#c4622d] animate-pulse" />
                <span className="text-xs text-[#999]">Up to <span className="text-[#c4622d] font-medium">30%</span> more Revenue within days</span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="font-display font-bold leading-[1.1] tracking-tight text-[clamp(36px,5.5vw,72px)]">
                A data-driven Klaviyo<br />
                <span className="font-accent text-[#c4622d]">retention system</span> that grows<br />
                revenue on autopilot
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
                Replace your in-house team with a retention system that increases customer lifetime value
                and brand valuation, live within days, not months. Strategy based on the data from 500+ stores.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/pricing" className="btn-primary">
                  For Dropshipping
                </Link>
                <Link href="/pricing" className="btn-ghost text-white text-sm">
                  For Brands
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center">
                <HeroAvatars />
              </div>
            </ScrollReveal>
          </div>

          {/* Phone mockups */}
          <ScrollReveal delay={0.3}>
            <div className="relative mt-16 flex items-end justify-center gap-4 sm:gap-6 px-4 max-w-4xl mx-auto">
              {/* Left phone */}
              <div className="phone-mockup w-[160px] sm:w-[200px] h-[300px] sm:h-[380px] -rotate-3 translate-y-8 flex-shrink-0">
                <div className="p-3 pt-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8px] text-[#6b6b6b]">9:41</span>
                    <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-[#6b6b6b]" /><div className="w-1 h-1 rounded-full bg-[#6b6b6b]" /></div>
                  </div>
                  <div className="bg-[#c4622d]/20 rounded-lg p-3 mb-2">
                    <p className="text-[8px] text-white font-medium">Welcome to Your Store</p>
                    <p className="text-[7px] text-[#999] mt-0.5">Take 10% Off Your First Order</p>
                  </div>
                  <div className="flex-1 bg-white/[0.03] rounded-lg p-3">
                    <div className="w-full h-3 bg-white/[0.06] rounded mb-2" />
                    <div className="text-[9px] font-bold text-white text-center mt-4">WELCOME</div>
                    <div className="text-[7px] text-[#6b6b6b] text-center mt-1">YOUR EDGE STARTS TONIGHT</div>
                  </div>
                </div>
              </div>

              {/* Center phone (larger) */}
              <div className="phone-mockup w-[180px] sm:w-[240px] h-[340px] sm:h-[420px] z-10 flex-shrink-0">
                <div className="p-3 pt-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8px] text-[#6b6b6b]">9:41</span>
                    <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-[#6b6b6b]" /><div className="w-1 h-1 rounded-full bg-[#6b6b6b]" /></div>
                  </div>
                  <div className="bg-[#c4622d]/20 rounded-lg p-3 mb-2">
                    <p className="text-[8px] text-[#c4622d]">&#128293; Flash Sale &mdash; up to 25% off</p>
                    <p className="text-[7px] text-[#999] mt-0.5">Limited time only</p>
                  </div>
                  <div className="bg-[#c4622d]/10 rounded-md px-2 py-1 text-[7px] text-[#c4622d] mb-2 inline-block w-fit">
                    ORDER BEFORE 22:45 &middot; DELIVERED TOMORROW
                  </div>
                  <div className="flex-1 bg-white/[0.03] rounded-lg p-3">
                    <div className="text-[10px] font-bold text-white text-center mt-2">FLASH SALE</div>
                    <div className="text-[7px] text-[#6b6b6b] text-center mt-1">PRE-WORKOUT COLLECTION</div>
                    <div className="mt-3 w-full h-12 bg-white/[0.04] rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Right phone */}
              <div className="phone-mockup w-[160px] sm:w-[200px] h-[300px] sm:h-[380px] rotate-3 translate-y-8 flex-shrink-0">
                <div className="p-3 pt-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8px] text-[#6b6b6b]">9:41</span>
                    <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-[#6b6b6b]" /><div className="w-1 h-1 rounded-full bg-[#6b6b6b]" /></div>
                  </div>
                  <div className="bg-[#c4622d]/20 rounded-lg p-3 mb-2">
                    <p className="text-[8px] text-white font-medium">Don&apos;t Miss Out &mdash; 20% Off</p>
                    <p className="text-[7px] text-[#999] mt-0.5">Your Haircare Refill</p>
                  </div>
                  <div className="flex-1 bg-white/[0.03] rounded-lg p-3">
                    <div className="w-full h-3 bg-white/[0.06] rounded mb-2" />
                    <div className="text-[9px] font-bold text-white text-center mt-4">DON&apos;T MISS OUT</div>
                    <div className="text-[7px] text-[#6b6b6b] text-center mt-1">Give your Hair a Boost with 20% Off</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── Logo Strip ─── */}
        <LogoStrip />

        {/* ─── How It Works ─── */}
        <div id="how-it-works">
          <HowItWorks />
        </div>

        {/* ─── Stats Strip ─── */}
        <StatsStrip />

        {/* ─── Alternating Features ─── */}
        <AlternatingFeatures />

        {/* ─── Testimonials ─── */}
        <TestimonialGrid />

        {/* ─── Pricing ─── */}
        <PricingPreview />

        {/* ─── FAQ ─── */}
        <FAQ />

        {/* ─── Contact ─── */}
        <ContactSection />

        {/* ─── Final CTA ─── */}
        <CTABanner />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
