const benefits = [
  {
    title: "Increase Revenue Efficiency",
    description: "Maximize every dollar spent on email marketing with flows that consistently convert.",
    visual: "revenue",
  },
  {
    title: "Enhance Customer Experience",
    description: "Deliver personalized touchpoints that make customers feel valued and come back for more.",
    visual: "stars",
  },
  {
    title: "Save Money with E-Mail Flows",
    description: "Automate what used to take hours, cutting costs while boosting results.",
    visual: "checklist",
  },
];

function BenefitVisual({ type }: { type: string }) {
  if (type === "revenue") {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <p className="text-3xl font-bold text-white">$400</p>
        <div className="flex items-end gap-1 h-10">
          {[40, 55, 35, 65, 50, 80, 70].map((h, i) => (
            <div
              key={i}
              className="w-3 rounded-t bg-gradient-to-t from-[#c4622d] to-[#d4743f]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (type === "stars") {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} className="star-orange" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-xs text-[#888] italic">&ldquo;Revenue increased 28% in 30 days&rdquo;</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-6 h-6 rounded-full bg-[#c4622d]" />
          <span className="text-[10px] text-[#aaa]">Sarah K. — DTC Brand Owner</span>
        </div>
      </div>
    );
  }
  // checklist
  return (
    <div className="flex flex-col gap-2 px-4">
      {["Welcome series", "Abandoned cart", "Win-back flow", "Post-purchase"].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <svg className="text-[#c4622d] shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span className="text-xs text-[#aaa]">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function BenefitsRow() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">The Key Benefits of Utilizing EcomPulse</h2>
        <p className="mt-4 text-[#888] text-base">
          Maximize Your Business Potential with EcomPulse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {benefits.map((b) => (
          <div key={b.title} className="card-benefit overflow-hidden group hover:border-[#333] transition-colors">
            <div className="h-44 p-4 flex items-center justify-center">
              <BenefitVisual type={b.visual} />
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-base font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
