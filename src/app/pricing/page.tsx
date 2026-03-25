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

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glow-top-right absolute inset-0" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight max-w-2xl">
            Flexible Pricing for Every Business
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#888] max-w-xl leading-relaxed">
            Choose a plan that fits your needs and start leveraging AI-powered
            insights today.
          </p>
        </section>

        {/* ─── Toggle ─── */}
        <div className="flex justify-center mb-10">
          <span className="pill">One-Time</span>
        </div>

        {/* ─── Pricing Cards ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ />

        {/* ─── CTA Banner ─── */}
        <CTABanner ctaLabel="Start free trial" ctaHref="#" />

        {/* ─── Footer ─── */}
        <Footer />
      </main>
    </div>
  );
}
