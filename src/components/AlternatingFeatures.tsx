import ScrollReveal from "./ScrollReveal";

const features = [
  {
    headline: "Recover Every Abandoned Cart \u2014 Automatically",
    copy: "Most stores lose 70% of their carts. Our flows catch them with perfectly timed, high-converting sequences that bring buyers back \u2014 without you lifting a finger.",
    visual: {
      title: "Abandoned Cart Flow",
      detail: "3 emails \u00b7 34% recovery rate",
    },
    imagePosition: "left" as const,
  },
  {
    headline: "Win Back Customers Before They Forget You",
    copy: "Your best customers bought once. Our win-back and post-purchase flows turn one-time buyers into repeat customers and increase lifetime value by up to 25%.",
    visual: {
      title: "Win-back Flow",
      detail: "Opened by 62% of recipients",
    },
    imagePosition: "right" as const,
  },
  {
    headline: "Zero Chargebacks. Zero Payment Holds.",
    copy: "Proactive shipping updates and order confirmations build trust before disputes start. Our tracking flows have reduced chargebacks by up to 40% for dropshipping stores.",
    visual: {
      title: "Chargeback rate",
      detail: "\u2193 40% after flow implementation",
    },
    imagePosition: "left" as const,
  },
];

function FeatureVisual({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="feature-visual flex flex-col items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#c4622d]/10 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4622d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div>
        <p className="text-lg font-semibold text-white font-display">{title}</p>
        <p className="text-sm text-[#c4622d] mt-1">{detail}</p>
      </div>
      {/* Mini chart decoration */}
      <div className="w-full h-16 mt-2">
        <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 50 C50 45, 80 20, 120 30 C160 40, 200 10, 250 15 C275 18, 290 8, 300 5"
            fill="none"
            stroke="#c4622d"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d="M0 50 C50 45, 80 20, 120 30 C160 40, 200 10, 250 15 C275 18, 290 8, 300 5 L300 60 L0 60 Z"
            fill="#c4622d"
            opacity="0.06"
          />
        </svg>
      </div>
    </div>
  );
}

export default function AlternatingFeatures() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-[var(--text-h1)] font-bold text-center mb-20">
          Built to Recover Revenue You&apos;re Already Losing
        </h2>
      </ScrollReveal>

      <div className="space-y-24 lg:space-y-32">
        {features.map((f, i) => (
          <ScrollReveal key={f.headline}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {f.imagePosition === "left" ? (
                <>
                  <FeatureVisual title={f.visual.title} detail={f.visual.detail} />
                  <div>
                    <h3 className="font-display text-[var(--text-h2)] font-bold leading-snug">
                      {f.headline}
                    </h3>
                    <p className="mt-4 text-[#6b6b6b] text-base leading-relaxed">
                      {f.copy}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="font-display text-[var(--text-h2)] font-bold leading-snug">
                      {f.headline}
                    </h3>
                    <p className="mt-4 text-[#6b6b6b] text-base leading-relaxed">
                      {f.copy}
                    </p>
                  </div>
                  <FeatureVisual title={f.visual.title} detail={f.visual.detail} />
                </>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
