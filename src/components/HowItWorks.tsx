import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Pick your package",
    description: "Choose the plan that fits your store. One-time payment, no retainers.",
  },
  {
    number: "2",
    title: "We build your flows",
    description: "Answer 10 quick questions. We handle copy, design, and Klaviyo setup.",
  },
  {
    number: "3",
    title: "Go live in 5–7 days",
    description: "Your flows start recovering revenue on autopilot. Zero maintenance needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-[var(--text-h1)] font-bold text-center">
          How It Works
        </h2>
        <p className="mt-3 sm:mt-4 text-center text-[#6b6b6b] text-[15px] sm:text-base max-w-lg mx-auto">
          Three steps. Five minutes of your time. Revenue on autopilot.
        </p>
      </ScrollReveal>

      <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.1}>
            <div className="step-card text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#c4622d] flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-[0_0_20px_rgba(196,98,45,0.15)]">
                <span className="font-display text-xl sm:text-2xl font-bold text-[#c4622d]">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-[var(--text-h3)] font-semibold mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-[#6b6b6b] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
