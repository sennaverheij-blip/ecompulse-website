import Link from "next/link";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SplitSection from "@/components/SplitSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glow-orange-subtle absolute inset-0" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
                Discover the Power of E-mail for eCommerce Growth
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#888] max-w-lg leading-relaxed">
                Unlock smarter insights, automate processes, and optimize your
                business with EcomPulse&apos;s advanced E-mail flows.
              </p>
              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#c4622d] border border-[#c4622d] rounded-lg px-6 py-3 hover:bg-[#c4622d] hover:text-white transition-all duration-200"
                >
                  Check The Packages
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-12 glow-hero pointer-events-none" />
                <DashboardMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6-Feature Icon Grid ─── */}
        <IconFeatureGrid />

        {/* ─── Split: Even More Ways (image right) ─── */}
        <SplitSection
          heading="Even More Ways to Elevate Your eCommerce Business"
          subtext="EcomPulse offers a suite of advanced flows designed to take your business to the next level."
          checks={[
            { text: "Intelligent Welcome Flows" },
            { text: "Comprehensive Order Status Flows" },
            { text: "Limited Time Deal Flows" },
          ]}
          imagePosition="right"
          visual="analytics"
        />

        {/* ─── Split: Minimize Payment Holds (image left) ─── */}
        <SplitSection
          heading="Minimize Payment Holds with Swift Communication"
          subtext="Take advantage of streamlined customer communication to satisfy their needs."
          checks={[
            { text: "Reduces Chargeback Triggers (Shipping updates)" },
            { text: "Boosts Brand Trust & Legitimacy (welcome series)" },
            { text: "Proactive Issue Resolution (win-back)" },
          ]}
          imagePosition="left"
          visual="keywords"
        />

        {/* ─── CTA Banner ─── */}
        <CTABanner ctaLabel="Get Started" ctaHref="/pricing" />

        {/* ─── Footer ─── */}
        <Footer />
      </main>
    </div>
  );
}
