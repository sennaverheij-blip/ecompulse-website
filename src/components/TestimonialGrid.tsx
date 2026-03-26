import ScrollReveal from "./ScrollReveal";

const heroTestimonial = {
  name: "Sarah K.",
  handle: "DTC Brand Owner",
  quote: "EcomPulse transformed our email strategy. We saw a 28% revenue increase within the first month of implementing their flows.",
};

const smallTestimonials = [
  {
    name: "Marcus T.",
    handle: "Shopify Store Owner",
    quote: "The abandoned cart flow alone paid for the entire service. Incredible ROI and the setup was completely hands-off.",
  },
  {
    name: "Emily R.",
    handle: "eCommerce Manager",
    quote: "We tried managing flows ourselves for months. EcomPulse did in a week what took us months to figure out, and the results are 3x better.",
  },
  {
    name: "James L.",
    handle: "Dropship Entrepreneur",
    quote: "Finally a service that understands dropshipping. The tracking panel flow alone reduced our chargebacks by 40%.",
  },
];

const results = [
  { stat: "A$222,832", detail: "attributed revenue \u2014 23.77% of total" },
  { stat: "34%", detail: "abandoned cart recovery rate" },
  { stat: "40%", detail: "reduction in chargebacks" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#c4622d">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialGrid() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-[var(--text-h1)] font-bold mb-16">
          Trusted by Leading eCommerce Brands
        </h2>
      </ScrollReveal>

      {/* Two-column asymmetric layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
        {/* Hero testimonial */}
        <ScrollReveal>
          <div className="testimonial-hero h-full flex flex-col justify-center">
            <Stars />
            <blockquote className="mt-6 text-xl sm:text-2xl font-display font-medium leading-relaxed text-[#f5f5f5]">
              &ldquo;{heroTestimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-medium text-white">{heroTestimonial.name}</p>
              <p className="text-xs text-[#6b6b6b]">{heroTestimonial.handle}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Small testimonials stack */}
        <div className="flex flex-col gap-4">
          {smallTestimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-[#111] border border-[#222] rounded-xl p-5">
                <Stars />
                <p className="mt-3 text-sm text-[#ccc] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#c4622d] flex items-center justify-center text-[9px] font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">{t.name}</p>
                    <p className="text-[10px] text-[#6b6b6b]">{t.handle}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Results strip */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {results.map((r, i) => (
          <ScrollReveal key={r.stat} delay={i * 0.1}>
            <div className="result-card">
              <p className="text-lg font-bold font-display text-white">{r.stat}</p>
              <p className="text-xs text-[#6b6b6b] mt-1">{r.detail}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
