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
    stripeUrl: "https://buy.stripe.com/00w8wJ7w89zjale9mDfnO09",
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
    stripeUrl: "https://buy.stripe.com/4gMfZb2bO26RgJC6arfnO0a",
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
    stripeUrl: "https://buy.stripe.com/fZu4gtbMo4eZ0KE7evfnO0b",
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
    <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-display text-[var(--text-h1)] font-bold">
            Choose the Right Plan for Your Business
          </h2>
          <p className="mt-3 sm:mt-4 text-[#6b6b6b] text-[15px] sm:text-base">
            One-time payment. No monthly fees. No retainers.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <PricingCard {...plan} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-8 sm:mt-10 text-center bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4 max-w-lg mx-auto">
          <p className="text-sm text-[#999]">
            <span className="text-[#c4622d] font-medium">Results-backed guarantee.</span>{" "}
            Not happy? We&apos;ll revise until you are.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-8 text-center">
          <Link href="/pricing" className="btn-ghost text-sm text-[#f5f5f5]">
            Compare all plans
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
