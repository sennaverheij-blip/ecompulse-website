import Link from "next/link";
import PricingCard from "./PricingCard";
import ScrollReveal from "./ScrollReveal";

const plans = [
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

export default function PricingPreview() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-[var(--text-h1)] font-bold">
            Choose the Right Plan for Your Business
          </h2>
          <p className="mt-4 text-[#6b6b6b] text-base">
            Flexible pricing plans designed to fit businesses of all sizes.
          </p>
          <div className="mt-6">
            <span className="text-[11px] bg-[#1a1a1a] border border-[#333] rounded-full px-4 py-1.5 text-[#999]">
              One-Time Payment
            </span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <PricingCard {...plan} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <p className="text-center text-sm text-[#6b6b6b] mt-8">
          Not happy with results? We&apos;ll make it right. Results-backed setup.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="btn-ghost text-sm text-[#f5f5f5]"
          >
            View all pricing details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
