"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Clock, Shield, Zap } from "lucide-react";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { trackEvent } from "@/components/MetaPixel";

/* ─── Pricing (10% off) ─── */
const plans = [
  {
    name: "Pulse",
    originalPrice: 400,
    price: 360,
    flowCount: "3",
    emailCount: "7",
    variant: "default" as const,
    audience: "Perfect for stores just getting started with email",
    stripeUrl: "https://buy.stripe.com/bJe8wJ2bO7rbbpidCTfnO0f",
    features: [
      "Welcome series",
      "Abandoned checkout",
      "Browse abandoned",
      "Live in 5-7 days",
    ],
  },
  {
    name: "Pulse+",
    originalPrice: 650,
    price: 585,
    flowCount: "5",
    emailCount: "13",
    variant: "plus" as const,
    audience: "Best for growing stores ready to scale LTV",
    stripeUrl: "https://buy.stripe.com/7sYeV703Gh1L50U56nfnO0h",
    features: [
      "All Pulse features",
      "Customer win-back",
      "Post purchase upsell",
      "LTV & repeat purchase optimization",
    ],
  },
  {
    name: "PulseX",
    originalPrice: 880,
    price: 792,
    flowCount: "10",
    emailCount: "25",
    variant: "x" as const,
    audience: "For 6-figure+ stores maximizing every dollar",
    stripeUrl: "https://buy.stripe.com/6oU6oB2bOfXH7921UbfnO0g",
    features: [
      "All Pulse+ features",
      "Site abandoned",
      "Flash sale sequence",
      "Tracking panel (Rush/Parcel/other)",
    ],
  },
];

const faqs = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most stores see measurable revenue from email within the first 2 weeks of flows going live. Setup takes 5-7 days, so you could be generating extra revenue within 3 weeks of signing up.",
  },
  {
    question: "Is this really a one-time payment?",
    answer:
      "Yes. You pay once, we build your flows, and they run on autopilot in your Klaviyo account forever. No monthly fees, no retainers, no hidden costs.",
  },
  {
    question: "What if I already have some Klaviyo flows?",
    answer:
      "We'll audit what you have, keep what's working, and replace or add what's missing. Most stores are leaving 15-30% of email revenue on the table even with existing flows.",
  },
  {
    question: "How is this different from hiring a freelancer or agency?",
    answer:
      "Agencies charge $2-5K/month on retainer. Freelancers are inconsistent. We deliver battle-tested flows backed by data from 500+ stores, at a fraction of the cost, with zero ongoing fees.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a results-backed guarantee. If you're not happy with the flows we deliver, we'll revise them until you are. Our reputation depends on your success.",
  },
];

const socialProof = [
  { metric: "500+", label: "Stores using EcomPulse" },
  { metric: "20-25%", label: "Avg. revenue uplift" },
  { metric: "$0", label: "Monthly retainer" },
  { metric: "5-7 days", label: "To go live" },
];

/* ─── Components ─── */

function OfferBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#c4622d]/10 border border-[#c4622d]/30 rounded-full px-4 py-1.5 mb-6">
      <Clock size={14} className="text-[#c4622d]" />
      <span className="text-xs text-[#c4622d] font-medium">Limited offer — 10% off all plans</span>
    </div>
  );
}

function OfferPricingCard({
  plan,
  onClaim,
}: {
  plan: (typeof plans)[0];
  onClaim: () => void;
}) {
  const isFeatured = plan.variant === "plus";

  return (
    <GlassEffect
      className="rounded-2xl h-full"
      style={
        isFeatured
          ? {
              boxShadow:
                "0 4px 20px rgba(196, 98, 45, 0.2), 0 20px 56px rgba(0,0,0,0.5), 0 0 80px rgba(196, 98, 45, 0.06)",
            }
          : undefined
      }
    >
      <div
        className={`${
          isFeatured ? "pricing-card-featured" : "pricing-card"
        } p-5 sm:p-7 flex flex-col justify-between h-full relative bg-transparent`}
      >
        {isFeatured && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-40">
            <span className="bg-[#c4622d] text-white text-[11px] font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_12px_rgba(196,98,45,0.3)]">
              Most Popular
            </span>
          </div>
        )}

        <div>
          <h3 className="font-display text-base sm:text-lg font-bold text-white">
            {plan.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#6b6b6b] mt-1">
            {plan.audience}
          </p>

          <div className="flex items-baseline gap-3 mt-3 sm:mt-4">
            <p className="text-3xl sm:text-4xl font-bold text-white font-display">
              ${plan.price}
            </p>
            <p className="text-lg text-[#555] line-through font-display">
              ${plan.originalPrice}
            </p>
            <span className="text-xs bg-[#c4622d]/15 text-[#c4622d] font-semibold px-2 py-0.5 rounded-full">
              -10%
            </span>
          </div>
          <p className="text-[11px] text-[#6b6b6b] mt-1">
            One-time payment &middot; No monthly fees
          </p>

          <div className="flex items-center gap-2 mt-4 sm:mt-5">
            <span className="text-[10px] sm:text-[11px] bg-[#1a1a1a] border border-[#333] rounded-full px-3 py-1 text-[#999]">
              Flows
            </span>
            <span className="text-xs sm:text-sm text-[#6b6b6b]">
              {plan.flowCount} flows &middot; {plan.emailCount} emails
            </span>
          </div>

          <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-[#999]"
              >
                <Check
                  size={14}
                  className="mt-0.5 shrink-0 text-[#c4622d]"
                  strokeWidth={2.5}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 space-y-2">
          <a
            href={plan.stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClaim}
            className={`block w-full py-3 sm:py-3.5 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer text-center ${
              isFeatured
                ? "bg-[#c4622d] text-white hover:opacity-90 hover:-translate-y-px shadow-[0_4px_16px_rgba(196,98,45,0.25)]"
                : "border border-[#333] text-white hover:bg-white/5 hover:-translate-y-px"
            }`}
          >
            Claim {plan.name} — ${plan.price}
          </a>
          <p className="text-[10px] text-center text-[#555]">
            Save ${plan.originalPrice - plan.price} with this offer
          </p>
        </div>
      </div>
    </GlassEffect>
  );
}

function OfferFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <button
            key={i}
            className={`w-full text-left py-4 sm:py-5 transition-all duration-200 cursor-pointer faq-item ${
              isOpen ? "faq-item-active" : ""
            }`}
            onClick={() => setOpenIndex(isOpen ? -1 : i)}
          >
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <span
                className={`text-[13px] sm:text-sm font-medium ${
                  isOpen ? "text-[#c4622d]" : "text-white"
                }`}
              >
                {faq.question}
              </span>
              <ChevronDown
                size={16}
                className={`shrink-0 transition-transform duration-200 text-[#6b6b6b] ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[13px] sm:text-sm text-[#6b6b6b] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Main Page ─── */
export default function OfferPage() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const hasTrackedViewContent = useRef(false);

  useEffect(() => {
    // Track ViewContent when pricing section scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedViewContent.current) {
            hasTrackedViewContent.current = true;
            trackEvent("ViewContent", {
              content_name: "Offer Page Pricing",
              content_category: "Landing Page",
              value: 585,
              currency: "USD",
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (pricingRef.current) observer.observe(pricingRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClaim = (plan: (typeof plans)[0]) => {
    trackEvent("InitiateCheckout", {
      content_name: plan.name,
      value: plan.price,
      currency: "USD",
      num_items: 1,
    });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
    trackEvent("Lead", { content_name: "Offer CTA Click" });
  };

  return (
    <>
      <GlassFilter />

      <div className="relative min-h-screen bg-[#050505] text-white">
        {/* ─── Minimal top bar ─── */}
        <header className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#050505]/85 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="EcomPulse"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
            </Link>
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center gap-2 text-sm font-medium bg-[#c4622d] text-white rounded-full px-5 py-2 hover:opacity-90 transition-all shadow-[0_4px_16px_rgba(196,98,45,0.25)] cursor-pointer"
            >
              Claim 10% Off
            </button>
          </div>
        </header>

        <main>
          {/* ─── Hero ─── */}
          <section className="relative pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(196, 98, 45, 0.1) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-6">
              <OfferBadge />

              <h1
                className="font-display text-[26px] sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Add 20-25% more revenue{" "}
                <span
                  className="font-accent"
                  style={{
                    background:
                      "linear-gradient(to bottom, #c4622d, rgba(196, 98, 45, 0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  without spending more on ads
                </span>
              </h1>

              <p className="mt-6 text-[15px] sm:text-[17px] text-[#777] max-w-2xl mx-auto leading-relaxed">
                Done-for-you Klaviyo email flows that turn your existing traffic
                into repeat buyers. One-time setup, live in 5-7 days, no
                retainers. Today only: <strong className="text-white">10% off every plan.</strong>
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                <button
                  onClick={scrollToPricing}
                  className="btn-primary w-full sm:w-auto justify-center cursor-pointer"
                >
                  Claim Your Discount
                  <ArrowRight size={14} />
                </button>
                <span className="text-[13px] sm:text-sm text-[#555]">
                  No monthly fees. Ever.
                </span>
              </div>
            </div>

            {/* Dashboard image */}
            <div className="mt-14 sm:mt-18 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="dashboard-image-wrapper">
                <Image
                  src="/dashboard-new.jpg"
                  alt="EcomPulse Dashboard"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ─── Social proof strip ─── */}
          <section className="py-12 sm:py-16 stats-section">
            <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                {socialProof.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="stat-number font-display text-3xl sm:text-4xl">
                      {stat.metric}
                    </div>
                    <p className="mt-2 text-[13px] text-[#555]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Why email beats more ad spend ─── */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                You&apos;re already paying for the traffic.{" "}
                <span className="text-[#c4622d]">Stop wasting it.</span>
              </h2>
              <p className="mt-4 text-[15px] text-[#777] leading-relaxed">
                Every visitor who leaves without buying is money you already
                spent. Our email flows bring them back — automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: <Zap size={24} className="text-[#c4622d]" />,
                  title: "Recover Abandoned Carts",
                  description:
                    "70% of carts are abandoned. Our flows bring back buyers who were already ready to purchase.",
                },
                {
                  icon: <ArrowRight size={24} className="text-[#c4622d]" />,
                  title: "Increase Customer LTV",
                  description:
                    "Post-purchase and win-back flows turn one-time buyers into repeat customers without extra ad spend.",
                },
                {
                  icon: <Shield size={24} className="text-[#c4622d]" />,
                  title: "Zero Risk, One-Time Fee",
                  description:
                    "No retainers, no monthly costs. Pay once, keep the flows forever. Results-backed guarantee.",
                },
              ].map((item) => (
                <GlassEffect key={item.title} className="rounded-2xl h-full">
                  <div className="p-6 sm:p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#c4622d]/10 border border-[#c4622d]/20 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-sm text-[#6b6b6b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassEffect>
              ))}
            </div>
          </section>

          {/* ─── Pricing ─── */}
          <section
            ref={pricingRef}
            id="pricing"
            className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          >
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <OfferBadge />
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                Claim Your 10% Discount
              </h2>
              <p className="mt-3 sm:mt-4 text-[#6b6b6b] text-[15px] sm:text-base">
                One-time payment. No monthly fees. No retainers. Flows live in
                5-7 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {plans.map((plan) => (
                <OfferPricingCard
                  key={plan.name}
                  plan={plan}
                  onClaim={() => handleClaim(plan)}
                />
              ))}
            </div>

            <div className="mt-8 sm:mt-10 text-center bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4 max-w-lg mx-auto">
              <p className="text-sm text-[#999]">
                <span className="text-[#c4622d] font-medium">
                  Results-backed guarantee.
                </span>{" "}
                Not happy? We&apos;ll revise until you are.
              </p>
            </div>
          </section>

          {/* ─── Testimonial highlight ─── */}
          <section className="py-16 sm:py-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  quote:
                    "We saw a 28% revenue increase from email alone in the first month. EcomPulse paid for itself in the first week.",
                  name: "Sarah K.",
                  role: "DTC Brand Owner",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
                },
                {
                  quote:
                    "Our email revenue went from 8% to 32% of total revenue within 60 days. Best ROI of any marketing investment we've made.",
                  name: "Natalie W.",
                  role: "DTC Growth Lead",
                  image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
                },
              ].map((t) => (
                <GlassEffect key={t.name} className="rounded-2xl">
                  <div className="p-6 sm:p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#c4622d"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-[#999] leading-relaxed mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover ring-2 ring-white/[0.08]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {t.name}
                        </p>
                        <p className="text-xs text-[#666]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </GlassEffect>
              ))}
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section className="py-16 sm:py-20 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">
              Got Questions?
            </h2>
            <p className="mt-3 text-center text-[#6b6b6b] text-[15px]">
              Everything you need to know before claiming your discount.
            </p>
            <div className="mt-8 sm:mt-10">
              <OfferFAQ />
            </div>
          </section>

          {/* ─── Final CTA ─── */}
          <section className="py-16 sm:py-20 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <GlassEffect className="rounded-3xl">
              <div className="px-8 sm:px-16 py-14 sm:py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(196,98,45,0.1)_0%,transparent_70%)] pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Stop paying for traffic you can&apos;t convert
                  </h2>
                  <p className="mt-3 text-[#777] text-[15px] sm:text-base max-w-lg mx-auto">
                    Add 20-25% more revenue from your existing visitors. One-time
                    setup, 10% off today.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={scrollToPricing}
                      className="btn-primary w-full sm:w-auto justify-center cursor-pointer"
                    >
                      Claim Your 10% Discount
                      <ArrowRight size={14} />
                    </button>
                    <span className="text-sm text-[#555]">
                      No risk. Results-backed guarantee.
                    </span>
                  </div>
                </div>
              </div>
            </GlassEffect>
          </section>

          {/* ─── Footer ─── */}
          <footer className="border-t border-white/[0.04] py-8 px-5 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="EcomPulse"
                  width={100}
                  height={25}
                  className="h-5 w-auto opacity-50"
                />
              </Link>
              <p className="text-xs text-[#555]">
                &copy; {new Date().getFullYear()} EcomPulse. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
