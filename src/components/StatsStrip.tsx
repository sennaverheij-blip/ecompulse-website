"use client";

import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Stores live" },
  { value: 25, prefix: "", suffix: "%", label: "Average revenue uplift", displayPrefix: "20\u2013" },
  { value: 7, suffix: " days", label: "Time to go live", displayPrefix: "5\u2013" },
  { value: 0, prefix: "$", suffix: "", label: "Monthly retainer" },
];

export default function StatsStrip() {
  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="stat-number font-display">
                  {stat.displayPrefix || ""}
                  {stat.value === 0 ? (
                    <span>{stat.prefix}0</span>
                  ) : (
                    <CountUp
                      target={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="mt-2 text-sm text-[#6b6b6b]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
