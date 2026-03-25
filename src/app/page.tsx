import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Pulse",
    price: "400",
    flowCount: "3",
    emailCount: "7",
    variant: "default" as const,
    features: [
      { text: "Welcome series" },
      { text: "Abandoned checkout" },
      { text: "Browse abandoned" },
      { text: "Live in 5-7 days" },
    ],
  },
  {
    name: "Pulse+",
    price: "650",
    flowCount: "5",
    emailCount: "13",
    variant: "plus" as const,
    features: [
      { text: "All Pulse features" },
      { text: "Customer win-back" },
      { text: "Post purchase upsell" },
      { text: "Increase of LTV & Repeat purchases" },
    ],
  },
  {
    name: "PulseX",
    price: "880",
    flowCount: "10",
    emailCount: "25",
    variant: "x" as const,
    features: [
      { text: "All Pulse+ features" },
      { text: "Site abandoned" },
      { text: "Flash sale sequence" },
      { text: "Tracking panel (Rush/Parcel/other)" },
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Ambient glow */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(232,118,58,0.08)_0%,transparent_50%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero / Pricing Section */}
        <section id="pricing" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
            Flexible Pricing for Every Business
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#999] max-w-xl">
            Choose a plan that fits your needs and start leveraging AI-powered
            insights today.
          </p>

          {/* Toggle */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center border border-[#2a2a2a] rounded-full px-5 py-2 text-sm text-white">
              One-Time
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Banner */}
        <CTABanner />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
