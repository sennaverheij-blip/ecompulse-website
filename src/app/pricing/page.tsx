import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const pricingPlans = [
  {
    name: "Pulse",
    price: "400",
    flowCount: "3",
    emailCount: "7",
    variant: "default" as const,
    audience: "Perfect for stores just getting started with email",
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
    audience: "Best for growing stores ready to scale LTV",
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
    audience: "For 6-figure+ stores maximizing every dollar",
    features: [
      { text: "All Pulse+ features" },
      { text: "Site abandoned" },
      { text: "Flash sale sequence" },
      { text: "Tracking panel (Rush/Parcel/other)" },
    ],
  },
];

const comparisonRows = [
  { feature: "Welcome series", pulse: true, plus: true, x: true },
  { feature: "Abandoned checkout", pulse: true, plus: true, x: true },
  { feature: "Browse abandoned", pulse: true, plus: true, x: true },
  { feature: "Customer win-back", pulse: false, plus: true, x: true },
  { feature: "Post purchase upsell", pulse: false, plus: true, x: true },
  { feature: "Site abandoned", pulse: false, plus: false, x: true },
  { feature: "Flash sale sequence", pulse: false, plus: false, x: true },
  { feature: "Tracking panel", pulse: false, plus: false, x: true },
  { feature: "LTV optimization", pulse: false, plus: true, x: true },
];

function Check() {
  return (
    <svg className="text-[#c4622d] mx-auto" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Dash() {
  return <span className="text-[#333] block text-center">&mdash;</span>;
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen dot-pattern">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <h1
              className="font-display font-bold leading-[1.08] tracking-tight max-w-2xl"
              style={{ fontSize: "var(--text-display)" }}
            >
              Flexible Pricing for Every Business
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-xl leading-relaxed">
              Choose a plan that fits your needs and start leveraging AI-powered
              insights today.
            </p>
          </ScrollReveal>
        </section>

        {/* ─── Toggle ─── */}
        <ScrollReveal>
          <div className="flex justify-center mb-10">
            <span className="text-[11px] bg-[#1a1a1a] border border-[#333] rounded-full px-4 py-1.5 text-[#999]">
              One-Time Payment
            </span>
          </div>
        </ScrollReveal>

        {/* ─── Pricing Cards ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <PricingCard {...plan} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ─── Risk reversal ─── */}
        <ScrollReveal>
          <p className="text-center text-sm text-[#6b6b6b] pb-20 px-4">
            Not happy with results? We&apos;ll make it right. Results-backed setup.
          </p>
        </ScrollReveal>

        {/* ─── Comparison Table ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24">
          <ScrollReveal>
            <h2 className="font-display text-[var(--text-h2)] font-bold text-center mb-12">
              Compare Plans
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#222]">
                    <th className="text-left py-3 pr-4 text-[#6b6b6b] font-normal">Feature</th>
                    <th className="text-center py-3 px-4 text-white font-medium">Pulse</th>
                    <th className="text-center py-3 px-4 text-[#c4622d] font-medium">Pulse+</th>
                    <th className="text-center py-3 px-4 text-white font-medium">PulseX</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-[#181818]">
                      <td className="py-3 pr-4 text-[#999]">{row.feature}</td>
                      <td className="py-3 px-4">{row.pulse ? <Check /> : <Dash />}</td>
                      <td className="py-3 px-4">{row.plus ? <Check /> : <Dash />}</td>
                      <td className="py-3 px-4">{row.x ? <Check /> : <Dash />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ />

        {/* ─── CTA Banner ─── */}
        <CTABanner primaryLabel="Get Started" primaryHref="/pricing" />

        {/* ─── Footer ─── */}
        <Footer />
      </main>
    </div>
  );
}
