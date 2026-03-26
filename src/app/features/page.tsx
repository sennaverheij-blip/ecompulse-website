import Link from "next/link";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import SplitSection from "@/components/SplitSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen dot-pattern">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h1
                  className="font-display font-bold leading-[1.08] tracking-tight"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  Discover the Power of E-mail for eCommerce Growth
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-lg leading-relaxed">
                  Unlock smarter insights, automate processes, and optimize your
                  business with EcomPulse&apos;s advanced E-mail flows.
                </p>
                <div className="mt-8">
                  <Link href="/pricing" className="btn-ghost text-sm text-[#f5f5f5]">
                    Check The Packages
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
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

        {/* ─── 6-Feature Icon Grid (3.1 — benefit titles) ─── */}
        <IconFeatureGrid />

        {/* ─── 3.2 How It Works (repeated from homepage) ─── */}
        <HowItWorks />

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

        {/* ─── Split: Minimize Payment Holds (3.3 — rewritten bullets) ─── */}
        <SplitSection
          heading="Minimize Payment Holds with Swift Communication"
          subtext="Take advantage of streamlined customer communication to satisfy their needs."
          checks={[
            { text: "Shipping update flows sent automatically \u2014 before customers even think to dispute" },
            { text: "Welcome series that builds brand trust from the first order" },
            { text: "Win-back sequences that resolve tension before it becomes a chargeback" },
          ]}
          imagePosition="left"
          visual="keywords"
        />

        {/* ─── CTA Banner ─── */}
        <CTABanner primaryLabel="Get Started" primaryHref="/pricing" />

        {/* ─── Footer ─── */}
        <Footer />
      </main>
    </div>
  );
}
