"use client";

import { useRef, useCallback } from "react";
import html2canvas from "html2canvas-pro";

/* ─── Download helper ─── */
function useDownload() {
  return useCallback(async (el: HTMLElement | null, name: string) => {
    if (!el) return;
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#050505",
      useCORS: true,
    });
    const link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);
}

/* ─── Creative wrapper ─── */
function Creative({
  id,
  label,
  dims,
  angle,
  children,
  width,
  height,
}: {
  id: string;
  label: string;
  dims: string;
  angle: string;
  children: React.ReactNode;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const download = useDownload();

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display text-lg font-semibold">{label}</h3>
          <p className="text-[13px] text-[#c4622d]">{angle}</p>
          <p className="text-[11px] text-[#555] mt-1">{dims}</p>
        </div>
        <button
          onClick={() => download(ref.current, id)}
          className="bg-[#c4622d] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
        >
          Download PNG
        </button>
      </div>
      <div className="overflow-auto rounded-xl border border-[#222]">
        <div
          ref={ref}
          style={{ width, height, minWidth: width, minHeight: height }}
          className="relative overflow-hidden"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Shared styles ─── */
const bg = "bg-[#050505]";
const orange = "#c4622d";

/* ─────────────────────────────────────────────
   CREATIVE 1: Before/After Results (1080x1080)
   Framework: Picture-Promise-Proof
   ───────────────────────────────────────────── */
function Creative1() {
  return (
    <Creative id="before-after-results" label="Before/After Results" dims="1080 × 1080 — Feed" angle="Framework: Picture-Promise-Proof" width={1080} height={1080}>
      <div className={`${bg} w-full h-full flex flex-col`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        {/* Top label */}
        <div className="px-[60px] pt-[56px] pb-[32px]">
          <div className="inline-block bg-[#c4622d] text-white text-[15px] font-bold px-[20px] py-[8px] rounded-full tracking-wide">
            REAL CLIENT RESULTS
          </div>
        </div>

        {/* Before / After */}
        <div className="flex-1 px-[60px] flex gap-[24px]">
          {/* Before */}
          <div className="flex-1 rounded-[20px] border-2 border-[#222] bg-[#0a0a0a] p-[32px] flex flex-col">
            <div className="text-[14px] text-[#555] font-semibold tracking-widest uppercase mb-[20px]">Before EcomPulse</div>
            <div className="flex-1 flex flex-col justify-center gap-[24px]">
              <div>
                <div className="text-[42px] font-bold text-[#444] leading-none">$0</div>
                <div className="text-[14px] text-[#444] mt-[4px]">Email revenue</div>
              </div>
              <div>
                <div className="text-[42px] font-bold text-[#444] leading-none">0%</div>
                <div className="text-[14px] text-[#444] mt-[4px]">Revenue from flows</div>
              </div>
              <div>
                <div className="text-[42px] font-bold text-[#444] leading-none">0</div>
                <div className="text-[14px] text-[#444] mt-[4px]">Active flows</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="flex-1 rounded-[20px] border-2 border-[#c4622d] bg-[#0c0806] p-[32px] flex flex-col" style={{ boxShadow: "0 0 60px rgba(196,98,45,0.1)" }}>
            <div className="text-[14px] text-[#c4622d] font-semibold tracking-widest uppercase mb-[20px]">After EcomPulse</div>
            <div className="flex-1 flex flex-col justify-center gap-[24px]">
              <div>
                <div className="text-[42px] font-bold text-white leading-none">ZAR 29,324</div>
                <div className="text-[14px] text-[#888] mt-[4px]">Email revenue in 7 days</div>
              </div>
              <div>
                <div className="text-[42px] font-bold text-white leading-none">24%</div>
                <div className="text-[14px] text-[#888] mt-[4px]">Of total revenue from flows</div>
              </div>
              <div>
                <div className="flex items-center gap-[12px]">
                  <div className="text-[42px] font-bold text-[#22c55e] leading-none">+1601%</div>
                </div>
                <div className="text-[14px] text-[#888] mt-[4px]">Growth vs. previous period</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-[60px] py-[48px] flex items-center justify-between">
          <div>
            <div className="text-[20px] text-white font-bold">One-time setup. No retainers.</div>
            <div className="text-[15px] text-[#555] mt-[4px]">Flows live in 5-7 days</div>
          </div>
          <div className="bg-[#c4622d] text-white text-[17px] font-semibold px-[32px] py-[14px] rounded-full" style={{ boxShadow: "0 4px 20px rgba(196,98,45,0.35)" }}>
            Get My Flows Built →
          </div>
        </div>
      </div>
    </Creative>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE 2: Single Stat Callout (1080x1080)
   Framework: Specific Number Pattern
   ───────────────────────────────────────────── */
function Creative2() {
  return (
    <Creative id="single-stat" label="Single Stat — Revenue Recovered" dims="1080 × 1080 — Feed" angle="Framework: Specific Number" width={1080} height={1080}>
      <div className={`${bg} w-full h-full flex flex-col items-center justify-center text-center p-[80px]`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]" style={{ background: "radial-gradient(ellipse at center, rgba(196,98,45,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 flex flex-col items-center">
          <div className="text-[15px] text-[#555] font-medium tracking-widest uppercase mb-[40px]">What our clients see in their first week</div>

          <div className="text-[140px] font-bold text-white leading-none tracking-tight" style={{ background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            +150%
          </div>
          <div className="text-[28px] text-[#888] mt-[12px] mb-[56px]">revenue increase from email flows</div>

          <div className="flex gap-[40px] mb-[56px]">
            <div className="text-center">
              <div className="text-[36px] font-bold text-[#c4622d]">$0</div>
              <div className="text-[13px] text-[#555]">Monthly retainer</div>
            </div>
            <div className="w-px bg-[#222]" />
            <div className="text-center">
              <div className="text-[36px] font-bold text-[#c4622d]">5-7d</div>
              <div className="text-[13px] text-[#555]">To go live</div>
            </div>
            <div className="w-px bg-[#222]" />
            <div className="text-center">
              <div className="text-[36px] font-bold text-[#c4622d]">500+</div>
              <div className="text-[13px] text-[#555]">Stores live</div>
            </div>
          </div>

          <div className="bg-[#c4622d] text-white text-[18px] font-semibold px-[36px] py-[16px] rounded-full" style={{ boxShadow: "0 4px 24px rgba(196,98,45,0.35)" }}>
            Start recovering revenue →
          </div>
        </div>
      </div>
    </Creative>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE 3: PAS — Problem Agitate Solve (1080x1350)
   Framework: Problem-Agitate-Solve
   ───────────────────────────────────────────── */
function Creative3() {
  return (
    <Creative id="pas-story" label="Problem → Agitate → Solve" dims="1080 × 1350 — Feed / Stories" angle="Framework: Problem-Agitate-Solve" width={1080} height={1350}>
      <div className={`${bg} w-full h-full flex flex-col justify-between p-[64px]`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        <div className="absolute top-0 left-0 w-full h-[400px]" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,98,45,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10">
          {/* Problem */}
          <div className="mb-[48px]">
            <div className="inline-block bg-[#1a1a1a] border border-[#333] text-[#888] text-[13px] font-semibold px-[14px] py-[5px] rounded-full mb-[20px]">THE PROBLEM</div>
            <div className="text-[48px] font-bold text-white leading-[1.1] tracking-tight">
              70% of your carts are abandoned.
            </div>
            <div className="text-[48px] font-bold leading-[1.1] tracking-tight" style={{ color: "#444" }}>
              You're recovering 0%.
            </div>
          </div>

          {/* Agitate */}
          <div className="mb-[48px]">
            <div className="inline-block bg-[#1a1a1a] border border-[#333] text-[#888] text-[13px] font-semibold px-[14px] py-[5px] rounded-full mb-[20px]">THE REALITY</div>
            <div className="text-[22px] text-[#777] leading-[1.5]">
              Every day without email flows, you lose <span className="text-[#ef4444] font-semibold">$500-2,000</span> in revenue that your competitors are capturing. You paid for that traffic. It should be converting.
            </div>
          </div>

          {/* Solve */}
          <div>
            <div className="inline-block bg-[#c4622d]/15 border border-[#c4622d]/30 text-[#c4622d] text-[13px] font-semibold px-[14px] py-[5px] rounded-full mb-[20px]">THE FIX</div>
            <div className="text-[28px] text-white font-bold leading-[1.3] mb-[24px]">
              We build your Klaviyo flows in 5-7 days. You keep the revenue forever.
            </div>

            <div className="flex flex-wrap gap-[10px]">
              {["Welcome series", "Abandoned cart", "Win-back", "Post-purchase", "Browse abandoned"].map((f) => (
                <span key={f} className="bg-[#c4622d]/10 border border-[#c4622d]/20 text-[#c4622d] text-[14px] px-[14px] py-[6px] rounded-full">{f}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 flex items-center justify-between pt-[40px] border-t border-[#1a1a1a] mt-[48px]">
          <div>
            <div className="text-[18px] text-white font-bold">Starting at $360</div>
            <div className="text-[14px] text-[#555]">One-time · No retainers · Results guaranteed</div>
          </div>
          <div className="bg-[#c4622d] text-white text-[16px] font-semibold px-[28px] py-[14px] rounded-full" style={{ boxShadow: "0 4px 20px rgba(196,98,45,0.35)" }}>
            Fix My Flows →
          </div>
        </div>
      </div>
    </Creative>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE 4: Comparison (1080x1080)
   Framework: Us vs Them
   ───────────────────────────────────────────── */
function Creative4() {
  return (
    <Creative id="us-vs-them" label="Us vs Agency" dims="1080 × 1080 — Feed" angle="Framework: Comparison / Value" width={1080} height={1080}>
      <div className={`${bg} w-full h-full flex flex-col p-[60px]`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        <div className="text-[15px] text-[#c4622d] font-semibold tracking-widest uppercase mb-[24px]">STOP OVERPAYING FOR EMAIL</div>
        <div className="text-[52px] font-bold text-white leading-[1.08] tracking-tight mb-[48px]">
          Why pay $3K/month when you can pay <span style={{ color: orange }}>$360 once?</span>
        </div>

        {/* Comparison table */}
        <div className="flex-1 rounded-[20px] border border-[#1a1a1a] overflow-hidden bg-[#0a0a0a]">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-[#1a1a1a]">
            <div className="p-[24px] text-[14px] text-[#555]" />
            <div className="p-[24px] text-center text-[14px] text-[#555] border-l border-[#1a1a1a]">Agency</div>
            <div className="p-[24px] text-center text-[14px] text-[#c4622d] font-semibold border-l border-[#c4622d]/20 bg-[#c4622d]/5">EcomPulse</div>
          </div>

          {[
            ["Price", "$2-5K/month", "$360 once"],
            ["Timeline", "4-6 weeks", "5-7 days"],
            ["Contract", "6-12 months", "No contract"],
            ["Monthly fee", "Always", "Never"],
            ["Custom flows", "Sometimes", "Always"],
            ["Guarantee", "Rarely", "Results-backed"],
          ].map(([label, bad, good], i) => (
            <div key={label} className={`grid grid-cols-3 ${i < 5 ? "border-b border-[#1a1a1a]" : ""}`}>
              <div className="p-[20px] pl-[24px] text-[15px] text-[#888]">{label}</div>
              <div className="p-[20px] text-center text-[15px] text-[#555] border-l border-[#1a1a1a]">{bad}</div>
              <div className="p-[20px] text-center text-[15px] text-white font-medium border-l border-[#c4622d]/20 bg-[#c4622d]/5">{good}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center pt-[40px]">
          <div className="bg-[#c4622d] text-white text-[17px] font-semibold px-[32px] py-[14px] rounded-full" style={{ boxShadow: "0 4px 20px rgba(196,98,45,0.35)" }}>
            Get Started for $360 →
          </div>
        </div>
      </div>
    </Creative>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE 5: Social Proof (1080x1350)
   Framework: Testimonial + Case Study
   ───────────────────────────────────────────── */
function Creative5() {
  return (
    <Creative id="social-proof-testimonials" label="Testimonials + Proof" dims="1080 × 1350 — Feed / Stories" angle="Framework: Social Proof Stack" width={1080} height={1350}>
      <div className={`${bg} w-full h-full flex flex-col p-[60px]`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        <div className="absolute top-0 left-0 w-full h-[300px]" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,98,45,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10">
          <div className="text-center mb-[48px]">
            <div className="text-[72px] font-bold text-white leading-none tracking-tight">500+</div>
            <div className="text-[20px] text-[#777] mt-[8px]">ecommerce stores trust EcomPulse</div>
          </div>

          <div className="flex flex-col gap-[16px] mb-[48px]">
            {[
              { quote: "28% revenue increase from email alone in the first month. Paid for itself in week one.", name: "Sarah K.", role: "DTC Brand Owner", initials: "SK", metric: "+28% revenue" },
              { quote: "Email revenue went from 8% to 32% of total revenue within 60 days.", name: "Natalie W.", role: "Growth Lead", initials: "NW", metric: "8% → 32%" },
              { quote: "Best one-time investment we've made. The post-purchase flow alone generates $12K/month extra.", name: "Rachel S.", role: "Shopify Plus", initials: "RS", metric: "+$12K/mo" },
            ].map((t) => (
              <div key={t.name} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-[16px] p-[28px] flex gap-[20px]">
                <div className="flex flex-col items-center gap-[8px] flex-shrink-0">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#1a1a1a] border-2 border-[#c4622d]/30 flex items-center justify-center text-[#c4622d] font-bold text-[15px]">{t.initials}</div>
                  <div className="text-[11px] text-[#c4622d] font-bold bg-[#c4622d]/10 px-[8px] py-[2px] rounded-full whitespace-nowrap">{t.metric}</div>
                </div>
                <div>
                  <div className="text-[#c4622d] text-[14px] mb-[8px] tracking-wide">★★★★★</div>
                  <div className="text-[15px] text-[#999] leading-[1.5] mb-[12px]">&ldquo;{t.quote}&rdquo;</div>
                  <div className="text-[14px] text-white font-semibold">{t.name} <span className="text-[#555] font-normal">· {t.role}</span></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-[16px] mb-[48px]">
            {[
              { value: "20-25%", label: "Avg. revenue uplift" },
              { value: "5-7 days", label: "To go live" },
              { value: "$0/mo", label: "Retainer fee" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-[12px] p-[20px] text-center">
                <div className="text-[28px] font-bold text-[#c4622d]">{s.value}</div>
                <div className="text-[12px] text-[#555] mt-[4px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 mt-auto text-center">
          <div className="inline-block bg-[#c4622d] text-white text-[17px] font-semibold px-[32px] py-[14px] rounded-full" style={{ boxShadow: "0 4px 20px rgba(196,98,45,0.35)" }}>
            Join 500+ Stores →
          </div>
          <div className="text-[13px] text-[#555] mt-[12px]">One-time payment · Results guaranteed</div>
        </div>
      </div>
    </Creative>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE 6: "I Did X, Got Y" (1080x1080)
   Framework: Results Story
   ───────────────────────────────────────────── */
function Creative6() {
  return (
    <Creative id="i-did-x-got-y" label={`"I Did X, Got Y" — Results Story`} dims="1080 × 1080 — Feed" angle="Framework: I Did X, Got Y (Highest CTR)" width={1080} height={1080}>
      <div className={`${bg} w-full h-full flex flex-col p-[64px]`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(196,98,45,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 flex flex-col h-full">
          <div className="text-[17px] text-[#c4622d] font-semibold mb-[32px]">Here&apos;s what happened:</div>

          <div className="text-[44px] font-bold text-white leading-[1.15] tracking-tight mb-[40px]">
            We audited 50 Shopify stores&apos; email flows.
            <br /><br />
            <span style={{ color: "#555" }}>47 had the same 3 mistakes.</span>
            <br /><br />
            We fixed them. Average result:
          </div>

          <div className="flex gap-[24px] mb-[48px]">
            <div className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-[16px] p-[28px]">
              <div className="text-[48px] font-bold text-[#c4622d] leading-none">+$8K</div>
              <div className="text-[14px] text-[#777] mt-[8px]">Extra monthly email revenue</div>
            </div>
            <div className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-[16px] p-[28px]">
              <div className="text-[48px] font-bold text-[#22c55e] leading-none">20-25%</div>
              <div className="text-[14px] text-[#777] mt-[8px]">Revenue uplift from flows</div>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="text-[15px] text-[#555]">Starting at $360 · One-time · No retainers</div>
            <div className="bg-[#c4622d] text-white text-[16px] font-semibold px-[28px] py-[13px] rounded-full" style={{ boxShadow: "0 4px 20px rgba(196,98,45,0.35)" }}>
              Fix My Flows →
            </div>
          </div>
        </div>
      </div>
    </Creative>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE 7: Offer / Discount (1080x1080)
   Framework: Direct Offer
   ───────────────────────────────────────────── */
function Creative7() {
  return (
    <Creative id="offer-discount" label="10% Off — Direct Offer" dims="1080 × 1080 — Feed" angle="Framework: Direct Offer + Urgency" width={1080} height={1080}>
      <div className={`${bg} w-full h-full flex flex-col items-center justify-center text-center p-[70px]`} style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]" style={{ background: "radial-gradient(ellipse at center, rgba(196,98,45,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-[#c4622d] text-white text-[16px] font-bold px-[24px] py-[10px] rounded-full mb-[40px]" style={{ boxShadow: "0 4px 24px rgba(196,98,45,0.4)" }}>
            LIMITED TIME — 10% OFF
          </div>

          <div className="text-[56px] font-bold text-white leading-[1.08] tracking-tight mb-[16px]">
            Done-for-you Klaviyo flows
          </div>
          <div className="text-[22px] text-[#777] mb-[48px]">
            Add 20-25% more revenue without spending more on ads
          </div>

          <div className="flex gap-[20px] mb-[48px] w-full">
            {[
              { name: "Pulse", orig: "$400", price: "$360", flows: "3 flows" },
              { name: "Pulse+", orig: "$650", price: "$585", flows: "5 flows", featured: true },
              { name: "PulseX", orig: "$880", price: "$792", flows: "10 flows" },
            ].map((p) => (
              <div key={p.name} className={`flex-1 rounded-[16px] p-[24px] ${p.featured ? "bg-[#0c0806] border-2 border-[#c4622d]" : "bg-[#0a0a0a] border border-[#1a1a1a]"}`} style={p.featured ? { boxShadow: "0 0 40px rgba(196,98,45,0.1)" } : {}}>
                <div className="text-[16px] text-white font-bold mb-[4px]">{p.name}</div>
                <div className="text-[12px] text-[#555] mb-[12px]">{p.flows}</div>
                <div className="text-[32px] font-bold text-white leading-none">{p.price}</div>
                <div className="text-[15px] text-[#555] line-through mt-[4px]">{p.orig}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#c4622d] text-white text-[18px] font-semibold px-[36px] py-[16px] rounded-full" style={{ boxShadow: "0 4px 24px rgba(196,98,45,0.35)" }}>
            Claim Your Discount →
          </div>
          <div className="text-[13px] text-[#555] mt-[14px]">One-time payment · No retainers · Live in 5-7 days</div>
        </div>
      </div>
    </Creative>
  );
}

/* ─── Main Page ─── */
export default function CreativesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 sm:p-10">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Ad Creatives</h1>
        <p className="text-[#777] text-sm mb-2">Click &quot;Download PNG&quot; to save any creative as a retina-quality image.</p>
        <p className="text-[#555] text-xs mb-10">All images export at 2x resolution, ready for Meta Ads Manager.</p>

        <Creative1 />
        <Creative2 />
        <Creative3 />
        <Creative4 />
        <Creative5 />
        <Creative6 />
        <Creative7 />
      </div>
    </div>
  );
}
