"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";

/* ─── Pricing ($100 off) ─── */
const plans = [
  {
    name: "Pulse",
    originalPrice: 400,
    price: 300,
    flowCount: "3",
    emailCount: "7",
    variant: "default" as const,
    audience: "Getting started with email",
    stripeUrl: "https://buy.stripe.com/eVqaERbMo9zjale7evfnO0e",
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
    price: 550,
    flowCount: "5",
    emailCount: "13",
    variant: "plus" as const,
    audience: "Growing stores scaling LTV",
    stripeUrl: "https://buy.stripe.com/bJeeV7eYA7rbdxq7evfnO0d",
    features: [
      "All Pulse features",
      "Customer win-back",
      "Post purchase upsell",
      "LTV & repeat purchases",
    ],
  },
  {
    name: "PulseX",
    originalPrice: 880,
    price: 780,
    flowCount: "10",
    emailCount: "25",
    variant: "x" as const,
    audience: "6-figure+ stores",
    stripeUrl: "https://buy.stripe.com/14A28l4jW3aVbpi7evfnO0c",
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
    question: "How does the ScalingClub discount work?",
    answer:
      "As a ScalingClub member, you automatically get $100 off every EcomPulse package. The discount is already applied to the prices shown on this page. Just click to purchase — no coupon code needed.",
  },
  {
    question: "Is this really a one-time payment?",
    answer:
      "Yes. You pay once, we build your flows, and they run on autopilot in your Klaviyo account forever. No monthly fees, no retainers, no hidden costs.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most stores see measurable revenue from email within the first 2 weeks of flows going live. Setup takes 5-7 days, so you could be generating extra revenue within 3 weeks of signing up.",
  },
  {
    question: "What if I already have some Klaviyo flows?",
    answer:
      "We'll audit what you have, keep what's working, and replace or add what's missing. Most stores leave 15-30% of email revenue on the table even with existing flows.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a results-backed guarantee. If you're not happy with the quality of the flows, we'll revise them until you are.",
  },
];

const stats = [
  { value: "500+", label: "Stores live" },
  { value: "20-25%", label: "Avg. revenue uplift" },
  { value: "5-7 days", label: "To go live" },
  { value: "$0", label: "Monthly retainer" },
];

/* ─── Pricing Card ─── */
function ScalingClubPricingCard({ plan }: { plan: (typeof plans)[0] }) {
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
          <div className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 z-40">
            <span className="bg-[#c4622d] text-white text-[10px] sm:text-[11px] font-semibold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_12px_rgba(196,98,45,0.3)]">
              Best Value
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

          <div className="flex items-baseline gap-2 sm:gap-3 mt-3 sm:mt-4">
            <p className="text-3xl sm:text-4xl font-bold text-white font-display">
              ${plan.price}
            </p>
            <p className="text-base sm:text-lg text-[#555] line-through font-display">
              ${plan.originalPrice}
            </p>
          </div>
          <p className="text-[10px] sm:text-[11px] text-[#c4622d] mt-1 font-medium">
            $100 ScalingClub discount applied
          </p>

          <div className="flex items-center gap-2 mt-3 sm:mt-4">
            <span className="text-[10px] bg-[#1a1a1a] border border-[#333] rounded-full px-2.5 py-0.5 text-[#999]">
              {plan.flowCount} flows
            </span>
            <span className="text-[10px] sm:text-xs text-[#6b6b6b]">
              {plan.emailCount} emails
            </span>
          </div>

          <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 sm:gap-2.5 text-[13px] sm:text-sm text-[#999]"
              >
                <Check
                  size={13}
                  className="mt-0.5 shrink-0 text-[#c4622d]"
                  strokeWidth={2.5}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={plan.stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 sm:mt-6 block w-full py-3 rounded-full text-sm font-medium text-center transition-all duration-150 cursor-pointer ${
            isFeatured
              ? "bg-[#c4622d] text-white hover:opacity-90 hover:-translate-y-px shadow-[0_4px_16px_rgba(196,98,45,0.25)]"
              : "border border-[#333] text-white hover:bg-white/5 hover:-translate-y-px"
          }`}
        >
          Get {plan.name} — ${plan.price}
        </a>
      </div>
    </GlassEffect>
  );
}

/* ─── FAQ ─── */
function ScalingClubFAQ() {
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
            <div className="flex items-center justify-between gap-3">
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
export default function ScalingClubPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <GlassFilter />

      {/* ─── Minimal navbar ─── */}
      <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="EcomPulse"
              width={100}
              height={24}
              className="h-5 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 text-xs text-[#6b6b6b]">
            <span>&times;</span>
            <span className="font-semibold text-white">ScalingClub</span>
          </div>
        </div>
      </nav>

      <main>
        {/* ─── Hero ─── */}
        <section className="pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c4622d]/10 border border-[#c4622d]/20 rounded-full px-3 sm:px-4 py-1.5 mb-5 sm:mb-8">
            <span className="text-[10px] sm:text-xs text-[#c4622d] font-medium">
              Exclusive ScalingClub Partner Discount
            </span>
          </div>

          <h1
            className="font-display text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight"
            style={{
              background:
                "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            $100 off every EcomPulse package
          </h1>

          <p className="mt-4 sm:mt-6 text-[13px] sm:text-[15px] md:text-lg text-[#6b6b6b] max-w-xl mx-auto leading-relaxed">
            As a ScalingClub member, you get exclusive pricing on done-for-you
            Klaviyo email flows. Same quality, same speed — just $100 less.
          </p>
        </section>

        {/* ─── Stats ─── */}
        <section className="py-8 sm:py-12 border-y border-white/[0.04] bg-[#080808]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-bold text-[#c4622d] text-xl sm:text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-[13px] text-[#555]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pricing cards ─── */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto py-10 sm:py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {plans.map((plan) => (
              <ScalingClubPricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="mt-6 sm:mt-10 text-center bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 sm:px-5 py-3 sm:py-4 max-w-lg mx-auto">
            <p className="text-[13px] sm:text-sm text-[#999]">
              <span className="text-[#c4622d] font-medium">
                Results-backed guarantee.
              </span>{" "}
              Not happy? We&apos;ll revise until you are. One-time payment, no
              retainers.
            </p>
          </div>
        </section>

        {/* ─── How it works ─── */}
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                num: "1",
                title: "Pick your package",
                desc: "Choose the plan that fits your store. ScalingClub discount is pre-applied.",
              },
              {
                num: "2",
                title: "We build your flows",
                desc: "Answer 10 quick questions. We handle copy, design, and Klaviyo setup.",
              },
              {
                num: "3",
                title: "Go live in 5-7 days",
                desc: "Your flows start recovering revenue on autopilot. Zero maintenance.",
              },
            ].map((step) => (
              <GlassEffect key={step.num} className="rounded-2xl">
                <div className="p-5 sm:p-7 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#c4622d] flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-[0_0_20px_rgba(196,98,45,0.15)]">
                    <span className="font-display text-lg sm:text-xl font-bold text-[#c4622d]">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </GlassEffect>
            ))}
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 max-w-3xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Got Questions?
          </h2>
          <ScalingClubFAQ />
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <GlassEffect className="rounded-2xl sm:rounded-3xl">
            <div className="px-6 sm:px-12 md:px-16 py-10 sm:py-14 md:py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[150px] sm:h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(196,98,45,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                  Ready to add 20-25% more revenue?
                </h2>
                <p className="mt-3 text-[#777] text-[13px] sm:text-[15px] max-w-md mx-auto">
                  Your ScalingClub discount is waiting. One-time setup, flows
                  live in days.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="btn-primary w-full sm:w-auto justify-center"
                  >
                    Claim Your $100 Discount
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </GlassEffect>
        </section>

        {/* ─── Footer ─── */}
        <footer className="border-t border-white/[0.04] py-6 sm:py-8 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="EcomPulse"
                width={100}
                height={25}
                className="h-4 sm:h-5 w-auto opacity-50"
              />
            </Link>
            <p className="text-[10px] sm:text-xs text-[#444]">
              &copy; {new Date().getFullYear()} EcomPulseMarketing LLC. All
              rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
