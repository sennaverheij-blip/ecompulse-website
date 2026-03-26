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
    stripeUrl: "https://buy.stripe.com/3cIcMZ5o0cLvdxq0Q7fnO00",
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
    stripeUrl: "https://buy.stripe.com/7sYfZb17K12NgJC42jfnO01",
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
    stripeUrl: "https://buy.stripe.com/6oUdR3cQsbHrdxq2YffnO02",
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
        <section className="pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-16 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="font-display font-bold leading-[1.08] tracking-tight max-w-2xl text-[clamp(32px,5vw,64px)]">
              Flexible Pricing for Every Business
            </h1>
            <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg text-[#6b6b6b] max-w-xl leading-relaxed">
              Choose a plan that fits your needs. One-time payment, no monthly fees.
            </p>
          </ScrollReveal>
        </section>

        <section className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-6 sm:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <PricingCard {...plan} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ScrollReveal>
          <div className="text-center px-5 pb-16 sm:pb-20">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4 max-w-lg mx-auto">
              <p className="text-sm text-[#999]">
                <span className="text-[#c4622d] font-medium">Results-backed guarantee.</span>{" "}
                Not happy? We&apos;ll revise until you are.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-20 sm:pb-24">
          <ScrollReveal>
            <h2 className="font-display text-[var(--text-h2)] font-bold text-center mb-8 sm:mb-12">
              Compare Plans
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="comparison-table overflow-x-auto">
              <table className="w-full text-[13px] sm:text-sm min-w-[400px]">
                <thead>
                  <tr className="border-b border-[rgba(255,255,255,0.06)]">
                    <th className="text-left py-3 sm:py-4 pl-4 sm:pl-6 pr-3 text-[#6b6b6b] font-normal">Feature</th>
                    <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-white font-medium">Pulse</th>
                    <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-[#c4622d] font-medium">Pulse+</th>
                    <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-white font-medium">PulseX</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-[rgba(255,255,255,0.04)]">
                      <td className="py-3 sm:py-3.5 pl-4 sm:pl-6 pr-3 text-[#999]">{row.feature}</td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4">{row.pulse ? <Check /> : <Dash />}</td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4">{row.plus ? <Check /> : <Dash />}</td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4">{row.x ? <Check /> : <Dash />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        <FAQ />
        <CTABanner primaryLabel="Get Started" primaryHref="/pricing" />
        <Footer />
      </main>
    </div>
  );
}
