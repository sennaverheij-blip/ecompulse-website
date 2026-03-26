import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface CheckItem {
  text: string;
}

interface SplitSectionProps {
  heading: string;
  subtext: string;
  checks: CheckItem[];
  imagePosition: "left" | "right";
  visual: "analytics" | "keywords";
}

function AnalyticsMockup() {
  return (
    <div className="bg-[#111] border border-[#222] rounded-2xl p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#6b6b6b]">Site Overview</span>
        <span className="text-[10px] text-green-500 flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M18 15l-6-6-6 6" />
          </svg>
          10.15%
        </span>
      </div>
      <div className="mb-3">
        <p className="text-[10px] text-[#6b6b6b]">Visibility</p>
        <p className="text-lg font-bold text-white font-display">59.8K</p>
      </div>
      <div className="flex gap-3">
        <div className="w-16 space-y-2">
          {["Dashboard", "Flows", "Campaigns", "Analytics"].map((item) => (
            <div key={item} className="text-[8px] text-[#6b6b6b] py-1 px-2 rounded bg-[#0d0d0d]">{item}</div>
          ))}
        </div>
        <div className="flex-1 relative h-20">
          <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 60 C40 50, 60 25, 100 30 C140 35, 160 10, 200 15" fill="none" stroke="#c4622d" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function KeywordsMockup() {
  return (
    <div className="bg-[#111] border border-[#222] rounded-2xl p-5 w-full">
      <div className="mb-3">
        <p className="text-[10px] text-[#6b6b6b]">Displays Amount At</p>
        <p className="text-2xl font-bold text-white font-display">35.6K</p>
      </div>
      <div className="mb-4">
        <p className="text-[10px] text-[#6b6b6b] mb-2">Top Keywords</p>
        <div className="space-y-1.5">
          {[
            { keyword: "ecommerce email flows", vol: "12.4K" },
            { keyword: "abandoned cart email", vol: "8.2K" },
            { keyword: "post purchase upsell", vol: "6.1K" },
            { keyword: "email marketing roi", vol: "4.8K" },
          ].map((kw) => (
            <div key={kw.keyword} className="flex items-center justify-between text-[10px]">
              <span className="text-[#999]">{kw.keyword}</span>
              <span className="text-[#6b6b6b]">{kw.vol}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-16">
        <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
          <rect x="10" y="40" width="20" height="20" rx="2" fill="#c4622d" opacity="0.4" />
          <rect x="40" y="25" width="20" height="35" rx="2" fill="#c4622d" opacity="0.6" />
          <rect x="70" y="15" width="20" height="45" rx="2" fill="#c4622d" opacity="0.8" />
          <rect x="100" y="30" width="20" height="30" rx="2" fill="#c4622d" opacity="0.5" />
          <rect x="130" y="10" width="20" height="50" rx="2" fill="#c4622d" />
          <rect x="160" y="20" width="20" height="40" rx="2" fill="#c4622d" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

export default function SplitSection({
  heading,
  subtext,
  checks,
  imagePosition,
  visual,
}: SplitSectionProps) {
  const textContent = (
    <div className="flex flex-col justify-center">
      <h2 className="font-display text-[var(--text-h2)] font-bold leading-snug">{heading}</h2>
      <p className="mt-4 text-[#6b6b6b] text-sm leading-relaxed">{subtext}</p>
      <ul className="mt-6 space-y-3">
        {checks.map((c) => (
          <li key={c.text} className="flex items-start gap-3 text-sm text-[#999]">
            <svg className="mt-0.5 shrink-0 text-[#c4622d]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {c.text}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/pricing" className="btn-ghost text-sm text-[#f5f5f5]">
          Check The Packages
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );

  const imageContent = (
    <div>{visual === "analytics" ? <AnalyticsMockup /> : <KeywordsMockup />}</div>
  );

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imagePosition === "left" ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
