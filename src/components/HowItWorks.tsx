import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    title: "You pick a package",
    description:
      "Choose the plan that fits your store. One-time payment, no retainers.",
  },
  {
    number: "2",
    title: "We build your flows",
    description:
      "Answer 10 questions about your store and brand. We handle everything from copy to setup.",
  },
  {
    number: "3",
    title: "Go live in 5\u20137 days",
    description:
      "Your flows go live in under a week. Sit back while they recover revenue on autopilot.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-[var(--text-h1)] font-bold text-center">
          How It Works
        </h2>
        <p className="mt-4 text-center text-[#6b6b6b] text-base max-w-lg mx-auto">
          Three steps. Five minutes of your time. Revenue on autopilot.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Arrow connectors (desktop only) */}
        <div className="hidden md:block absolute top-14 left-[33%] right-[33%] h-px">
          <div className="absolute left-0 w-[calc(50%-16px)] h-px border-t border-dashed border-[#333]" />
          <div className="absolute right-0 w-[calc(50%-16px)] h-px border-t border-dashed border-[#333]" />
        </div>

        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-[#c4622d] flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl font-bold text-[#c4622d]">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-[var(--text-h3)] font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
