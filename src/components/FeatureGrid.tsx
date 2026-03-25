const features = [
  {
    title: "Optimize Customer Retention",
    description: "Predict churn risks and boost loyalty with AI-driven email flows that keep customers engaged.",
    chart: "line",
  },
  {
    title: "Predictable Revenue",
    description: "Build consistent revenue streams with automated flows that convert at every touchpoint.",
    chart: "metric",
  },
  {
    title: "Reduce Chargebacks",
    description: "Proactive shipping updates and order confirmations that prevent payment disputes.",
    chart: "table",
  },
  {
    title: "Boost Sales",
    description: "Strategic post-purchase upsells and win-back campaigns that maximize customer lifetime value.",
    chart: "avatars",
  },
];

function MiniChart({ type }: { type: string }) {
  if (type === "line") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 60 C30 55, 50 30, 80 35 C110 40, 130 15, 160 20 C175 22, 190 10, 200 8" fill="none" stroke="#c4622d" strokeWidth="2" />
        <path d="M0 65 C30 60, 50 45, 80 50 C110 55, 130 40, 160 42 C175 43, 190 38, 200 35" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    );
  }
  if (type === "metric") {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-2xl font-bold text-white">$48.2K</p>
        <p className="text-[10px] text-green-500 mt-1">+12.4% this month</p>
      </div>
    );
  }
  if (type === "table") {
    return (
      <div className="space-y-2 px-2">
        {["Resolved", "Pending", "Prevented"].map((status, i) => (
          <div key={status} className="flex items-center justify-between text-[10px]">
            <span className="text-[#888]">{status}</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 rounded-full bg-[#c4622d]" style={{ width: `${60 - i * 15}px` }} />
              <span className="text-[#aaa]">{[87, 12, 94][i]}%</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // avatars
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex -space-x-2">
        {["#c4622d", "#d4743f", "#e07f4a", "#888"].map((color, i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111]" style={{ background: color }} />
        ))}
      </div>
      <span className="ml-3 text-xs text-[#aaa]">+500 stores</span>
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">How EcomPulse Helps Your Business</h2>
        <p className="mt-4 text-[#888] text-base">
          Unlock the full potential of your eCommerce store with data-driven revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature) => (
          <div key={feature.title} className="card-dark overflow-hidden group hover:border-[#333] transition-colors">
            {/* Chart area */}
            <div className="h-40 p-4 flex items-center justify-center bg-gradient-to-b from-[#111] to-[#0d0d0d]">
              <MiniChart type={feature.chart} />
            </div>
            {/* Text */}
            <div className="p-6">
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
