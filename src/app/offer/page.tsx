"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  TrendingUp,
  Mail,
  DollarSign,
  Users,
  BarChart3,
  ShoppingCart,
  RefreshCw,
  Eye,
  X,
} from "lucide-react";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { trackEvent } from "@/components/MetaPixel";

const WHATSAPP_URL =
  "https://wa.me/31617637046?text=Hi%2C%20I%27d%20like%20to%20get%20my%20Klaviyo%20flows%20set%20up.%20Can%20you%20tell%20me%20more%3F";

/* ─── Fake Klaviyo dashboard data ─── */
const revenueData = [
  { month: "Jan", before: 1200, after: 1200 },
  { month: "Feb", before: 1350, after: 1800 },
  { month: "Mar", before: 1100, after: 2400 },
  { month: "Apr", before: 1400, after: 3100 },
  { month: "May", before: 1250, after: 3800 },
  { month: "Jun", before: 1300, after: 4200 },
];

const flowMetrics = [
  {
    name: "Welcome Series",
    openRate: "67.2%",
    clickRate: "24.8%",
    revenue: "$4,280",
    status: "Live",
  },
  {
    name: "Abandoned Cart",
    openRate: "58.4%",
    clickRate: "19.2%",
    revenue: "$8,640",
    status: "Live",
  },
  {
    name: "Browse Abandon",
    openRate: "44.1%",
    clickRate: "12.6%",
    revenue: "$2,190",
    status: "Live",
  },
  {
    name: "Post-Purchase",
    openRate: "72.3%",
    clickRate: "28.1%",
    revenue: "$3,410",
    status: "Live",
  },
  {
    name: "Win-Back",
    openRate: "38.7%",
    clickRate: "11.4%",
    revenue: "$1,860",
    status: "Live",
  },
];

const faqs = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most stores see measurable revenue from email within the first 2 weeks of flows going live. Setup takes 5-7 days, so you could be generating extra revenue within 3 weeks.",
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
    question: "Do I need a Klaviyo account?",
    answer:
      "Yes, you need an active Klaviyo account. If you don't have one yet, we'll help you get set up — Klaviyo has a free tier for up to 250 contacts.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a results-backed guarantee. If you're not happy with the flows we deliver, we'll revise them until you are.",
  },
];

/* ─── Components ─── */

function KlaviyoPartnerBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full px-5 py-2.5">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          fill="#2BD27F"
          opacity="0.15"
          stroke="#2BD27F"
          strokeWidth="1.5"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#2BD27F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xs text-[#999] font-medium">
        Official Klaviyo Partner
      </span>
      <div className="w-px h-4 bg-[#222]" />
      <span className="text-xs text-[#555]">500+ stores</span>
    </div>
  );
}

function KlaviyoDashboard() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.after));

  return (
    <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2BD27F]" />
            <span className="text-xs font-medium text-[#999]">
              Klaviyo Flow Analytics
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-[#2BD27F]/10 text-[#2BD27F] px-2 py-0.5 rounded-full font-medium">
            Live
          </span>
          <span className="text-[10px] text-[#555]">Last 6 months</span>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1a1a1a]">
        {[
          {
            label: "Email Revenue",
            value: "$24,380",
            change: "+284%",
            positive: true,
          },
          {
            label: "Attributed Orders",
            value: "487",
            change: "+196%",
            positive: true,
          },
          {
            label: "Avg. Open Rate",
            value: "56.2%",
            change: "+18.4%",
            positive: true,
          },
          {
            label: "Revenue per Email",
            value: "$2.84",
            change: "+142%",
            positive: true,
          },
        ].map((metric) => (
          <div key={metric.label} className="bg-[#0a0a0a] px-4 py-3.5">
            <p className="text-[10px] text-[#555] uppercase tracking-wider">
              {metric.label}
            </p>
            <p className="text-lg sm:text-xl font-bold text-white mt-1 font-display">
              {metric.value}
            </p>
            <span className="text-[10px] text-[#2BD27F] font-medium">
              {metric.change}
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-[#777] font-medium">
            Email Revenue vs. Previous Period
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <span className="text-[10px] text-[#555]">Before</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#c4622d]" />
              <span className="text-[10px] text-[#555]">
                After EcomPulse
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 sm:gap-5 h-32 sm:h-40">
          {revenueData.map((d) => (
            <div
              key={d.month}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <div className="w-full flex items-end gap-1 h-28 sm:h-36">
                <div
                  className="flex-1 bg-[#1a1a1a] rounded-t-sm transition-all duration-500"
                  style={{
                    height: `${(d.before / maxRevenue) * 100}%`,
                  }}
                />
                <div
                  className="flex-1 bg-gradient-to-t from-[#c4622d] to-[#e8814a] rounded-t-sm transition-all duration-500"
                  style={{
                    height: `${(d.after / maxRevenue) * 100}%`,
                  }}
                />
              </div>
              <span className="text-[10px] text-[#555]">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KlaviyoFlowsTable() {
  return (
    <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-[#c4622d]" />
          <span className="text-xs font-medium text-[#999]">
            Active Flows — Performance Overview
          </span>
        </div>
        <span className="text-[10px] text-[#555]">Updated today</span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-5 gap-2 px-5 py-2.5 border-b border-[#1a1a1a] bg-[#080808]">
        <span className="text-[10px] text-[#555] uppercase tracking-wider">
          Flow
        </span>
        <span className="text-[10px] text-[#555] uppercase tracking-wider text-center">
          Open Rate
        </span>
        <span className="text-[10px] text-[#555] uppercase tracking-wider text-center">
          Click Rate
        </span>
        <span className="text-[10px] text-[#555] uppercase tracking-wider text-center">
          Revenue
        </span>
        <span className="text-[10px] text-[#555] uppercase tracking-wider text-right">
          Status
        </span>
      </div>

      {/* Rows */}
      {flowMetrics.map((flow) => (
        <div
          key={flow.name}
          className="grid grid-cols-5 gap-2 px-5 py-3 border-b border-[#111] last:border-0 hover:bg-white/[0.02] transition-colors"
        >
          <span className="text-xs text-white font-medium truncate">
            {flow.name}
          </span>
          <span className="text-xs text-[#999] text-center">
            {flow.openRate}
          </span>
          <span className="text-xs text-[#999] text-center">
            {flow.clickRate}
          </span>
          <span className="text-xs text-[#2BD27F] font-medium text-center">
            {flow.revenue}
          </span>
          <div className="flex justify-end">
            <span className="text-[10px] bg-[#2BD27F]/10 text-[#2BD27F] px-2 py-0.5 rounded-full">
              {flow.status}
            </span>
          </div>
        </div>
      ))}

      {/* Total bar */}
      <div className="grid grid-cols-5 gap-2 px-5 py-3 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <span className="text-xs text-[#c4622d] font-semibold">Total</span>
        <span className="text-xs text-[#999] text-center">—</span>
        <span className="text-xs text-[#999] text-center">—</span>
        <span className="text-xs text-[#2BD27F] font-bold text-center">
          $20,380
        </span>
        <div className="flex justify-end">
          <span className="text-[10px] text-[#555]">5 flows</span>
        </div>
      </div>
    </div>
  );
}

function WhatsAppCTA({
  variant = "primary",
  children,
}: {
  variant?: "primary" | "large";
  children?: React.ReactNode;
}) {
  const handleClick = () => {
    trackEvent("Lead", { content_name: "WhatsApp CTA" });
  };

  if (variant === "large") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-3 bg-[#25D366] text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)] cursor-pointer"
      >
        <MessageCircle size={20} />
        {children || "Get My Flows Set Up"}
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(37,211,102,0.25)] cursor-pointer"
    >
      <MessageCircle size={16} />
      {children || "Get My Flows Set Up"}
    </a>
  );
}

function ProcessStep({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#c4622d]/15 border border-[#c4622d]/30 flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-[#c4622d]">{number}</span>
        </div>
        <div className="w-px flex-1 bg-[#1a1a1a] mt-2" />
      </div>
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-1.5">
          {icon}
          <h3 className="text-base font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-[#777] leading-relaxed">{description}</p>
      </div>
    </div>
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
  const hasTrackedViewContent = useRef(false);

  useEffect(() => {
    if (!hasTrackedViewContent.current) {
      hasTrackedViewContent.current = true;
      trackEvent("ViewContent", {
        content_name: "Offer Funnel Page",
        content_category: "Landing Page",
      });
    }
  }, []);

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
            <WhatsAppCTA>Chat With Us</WhatsAppCTA>
          </div>
        </header>

        <main>
          {/* ═══════════════════════════════════════════════
              SECTION 1: Hero — Hook + Klaviyo Partner Badge
              ═══════════════════════════════════════════════ */}
          <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-20 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(196, 98, 45, 0.1) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-6">
              <KlaviyoPartnerBadge />

              <h1
                className="mt-8 font-display text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Klaviyo is leaving{" "}
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
                  thousands on the table
                </span>
              </h1>

              <p className="mt-6 text-[15px] sm:text-[17px] text-[#777] max-w-2xl mx-auto leading-relaxed">
                We build done-for-you Klaviyo email flows that add 20-25% more
                revenue to your store — without spending another dollar on ads.
                One-time setup. Live in 5-7 days.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4">
                <WhatsAppCTA variant="large">
                  Get My Flows Set Up
                </WhatsAppCTA>
                <span className="text-[13px] text-[#555]">
                  Free consultation — no commitment
                </span>
              </div>
            </div>
          </section>

          {/* ─── Trusted by strip ─── */}
          <section className="py-8 sm:py-10 border-y border-white/[0.04] bg-[#080808]">
            <div className="max-w-4xl mx-auto px-5">
              <p className="text-center text-[11px] uppercase tracking-[0.15em] text-[#444] mb-6">
                Trusted by 500+ ecommerce brands using Klaviyo
              </p>
              <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
                {[
                  "Klaviyo Partner",
                  "Shopify",
                  "Klaviyo Gold",
                  "500+ Stores",
                  "E-commerce",
                ].map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 opacity-30"
                  >
                    <div className="w-6 h-6 rounded bg-white/10" />
                    <span className="text-xs text-[#666] font-medium">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 2: The Problem — Pain Points
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                You&apos;re spending on ads but{" "}
                <span className="text-[#c4622d]">leaving money behind</span>
              </h2>
              <p className="mt-4 text-[15px] text-[#777] leading-relaxed">
                Most Shopify stores only capture 5-10% of their traffic as
                revenue. The rest? Gone forever — unless you have the right
                email flows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <ShoppingCart size={20} className="text-red-400" />,
                  stat: "70%",
                  title: "of carts are abandoned",
                  description:
                    "Without an abandoned cart flow, those sales are lost forever.",
                },
                {
                  icon: <Eye size={20} className="text-red-400" />,
                  stat: "97%",
                  title: "of visitors leave without buying",
                  description:
                    "Browse abandonment flows bring them back when they're ready.",
                },
                {
                  icon: <RefreshCw size={20} className="text-red-400" />,
                  stat: "65%",
                  title: "of revenue comes from repeat customers",
                  description:
                    "Post-purchase flows turn one-time buyers into loyal fans.",
                },
                {
                  icon: <DollarSign size={20} className="text-red-400" />,
                  stat: "$0",
                  title: "from email = money left on the table",
                  description:
                    "If email isn't 20-30% of your revenue, you're underperforming.",
                },
              ].map((item) => (
                <GlassEffect key={item.title} className="rounded-2xl">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <span className="text-2xl font-bold text-white font-display">
                        {item.stat}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassEffect>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 3: The Solution — What We Build
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-[#c4622d]/10 border border-[#c4622d]/30 rounded-full px-4 py-1.5 mb-6">
                <Mail size={14} className="text-[#c4622d]" />
                <span className="text-xs text-[#c4622d] font-medium">
                  Done-for-you Klaviyo flows
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                We build the flows.{" "}
                <span className="text-[#c4622d]">You collect the revenue.</span>
              </h2>
              <p className="mt-4 text-[15px] text-[#777] leading-relaxed">
                As an official Klaviyo partner, we&apos;ve built high-converting
                email flows for 500+ ecommerce stores. Here&apos;s what your
                dashboard could look like:
              </p>
            </div>

            {/* Fake Klaviyo Dashboard */}
            <KlaviyoDashboard />

            <div className="mt-8 text-center">
              <p className="text-sm text-[#555] mb-6">
                Real results from a store 60 days after EcomPulse setup
              </p>
              <WhatsAppCTA>I Want These Results</WhatsAppCTA>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 4: Flow Performance Table
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                5 flows that generate{" "}
                <span className="text-[#2BD27F]">$20K+/month</span>
              </h2>
              <p className="mt-3 text-[15px] text-[#777]">
                Each flow runs on autopilot in your Klaviyo account — 24/7,
                while you sleep.
              </p>
            </div>

            <KlaviyoFlowsTable />

            <div className="mt-6 text-center">
              <p className="text-xs text-[#555]">
                Based on avg. client performance after 90 days
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 5: How It Works
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                Live in 5-7 days. Here&apos;s how.
              </h2>
            </div>

            <div>
              <ProcessStep
                number="1"
                title="Message Us on WhatsApp"
                description="Tell us about your store and current email setup. We'll give you a free audit and recommendation within 24 hours."
                icon={
                  <MessageCircle size={16} className="text-[#25D366]" />
                }
              />
              <ProcessStep
                number="2"
                title="We Build Your Flows"
                description="Our Klaviyo-certified team builds your custom flows — copywriting, design, segmentation, triggers — all optimized for your niche."
                icon={<Mail size={16} className="text-[#c4622d]" />}
              />
              <ProcessStep
                number="3"
                title="Review & Go Live"
                description="You approve the flows, we push them live in your Klaviyo account, and revenue starts rolling in automatically."
                icon={<TrendingUp size={16} className="text-[#2BD27F]" />}
              />
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2BD27F]/15 border border-[#2BD27F]/30 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-[#2BD27F]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2BD27F]">
                    Collect Revenue on Autopilot
                  </h3>
                  <p className="text-sm text-[#777] leading-relaxed mt-1">
                    Your flows run 24/7 — recovering carts, welcoming new
                    subscribers, and turning one-time buyers into repeat
                    customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <WhatsAppCTA variant="large">
                Start With a Free Audit
              </WhatsAppCTA>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 6: Social Proof — Testimonials
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                Store owners love the results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  quote:
                    "We saw a 28% revenue increase from email alone in the first month. EcomPulse paid for itself in the first week.",
                  name: "Sarah K.",
                  role: "DTC Brand Owner",
                  metric: "+28% revenue",
                },
                {
                  quote:
                    "Our email revenue went from 8% to 32% of total revenue within 60 days. Best ROI of any marketing investment we've made.",
                  name: "Natalie W.",
                  role: "DTC Growth Lead",
                  metric: "8% → 32% email rev",
                },
                {
                  quote:
                    "The abandoned cart flow alone recovered $12K in the first month. I can't believe we weren't doing this before.",
                  name: "Marcus D.",
                  role: "Shopify Store Owner",
                  metric: "$12K recovered",
                },
              ].map((t) => (
                <GlassEffect key={t.name} className="rounded-2xl">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs bg-[#c4622d]/15 text-[#c4622d] px-2.5 py-1 rounded-full font-semibold">
                        {t.metric}
                      </span>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#c4622d"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[13px] text-[#999] leading-relaxed mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#666]">{t.role}</p>
                    </div>
                  </div>
                </GlassEffect>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 7: Comparison
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                Why EcomPulse vs. the rest
              </h2>
            </div>

            <div className="comparison-table">
              <div className="grid grid-cols-4 gap-2 px-5 py-3 border-b border-[#1a1a1a]">
                <span className="text-xs text-[#555]" />
                <span className="text-xs text-[#c4622d] font-semibold text-center">
                  EcomPulse
                </span>
                <span className="text-xs text-[#555] text-center">
                  Agencies
                </span>
                <span className="text-xs text-[#555] text-center">
                  DIY
                </span>
              </div>
              {[
                ["Cost", "One-time", "$2-5K/mo", "Free"],
                ["Setup time", "5-7 days", "2-4 weeks", "Weeks+"],
                ["Klaviyo expertise", "Partner", "Varies", "Learning"],
                ["Ongoing fees", "$0", "$2-5K/mo", "$0"],
                ["Proven templates", "500+ stores", "Limited", "None"],
                ["Results guarantee", "Yes", "Rare", "No"],
              ].map(([feature, us, agency, diy]) => (
                <div
                  key={feature}
                  className="grid grid-cols-4 gap-2 px-5 py-3 border-b border-[#111] last:border-0"
                >
                  <span className="text-xs text-[#999]">{feature}</span>
                  <span className="text-xs text-white font-medium text-center">
                    {us}
                  </span>
                  <span className="text-xs text-[#555] text-center">
                    {agency}
                  </span>
                  <span className="text-xs text-[#555] text-center">
                    {diy}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 8: FAQ
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-20 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">
              Got Questions?
            </h2>
            <p className="mt-3 text-center text-[#6b6b6b] text-[15px]">
              Or just message us on WhatsApp — we reply fast.
            </p>
            <div className="mt-8 sm:mt-10">
              <OfferFAQ />
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 9: Final CTA
              ═══════════════════════════════════════════════ */}
          <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <GlassEffect className="rounded-3xl">
              <div className="px-8 sm:px-16 py-14 sm:py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.08)_0%,transparent_70%)] pointer-events-none" />
                <div className="relative z-10">
                  <KlaviyoPartnerBadge />
                  <h2 className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Ready to turn your Klaviyo into a{" "}
                    <span className="text-[#c4622d]">revenue machine</span>?
                  </h2>
                  <p className="mt-4 text-[#777] text-[15px] sm:text-base max-w-lg mx-auto">
                    Message us on WhatsApp for a free audit of your current
                    email setup. We&apos;ll show you exactly how much revenue
                    you&apos;re leaving on the table.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <WhatsAppCTA variant="large">
                      Get My Flows Set Up
                    </WhatsAppCTA>
                    <div className="flex items-center gap-6 text-[13px] text-[#555]">
                      <span className="flex items-center gap-1.5">
                        <Check size={12} className="text-[#2BD27F]" />
                        Free audit
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Check size={12} className="text-[#2BD27F]" />
                        No commitment
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Check size={12} className="text-[#2BD27F]" />
                        Reply in minutes
                      </span>
                    </div>
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
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#555]">
                  Official Klaviyo Partner
                </span>
                <p className="text-xs text-[#555]">
                  &copy; {new Date().getFullYear()} EcomPulse. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
