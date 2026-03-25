const testimonials = [
  {
    name: "Sarah K.",
    handle: "DTC Brand Owner",
    quote: "EcomPulse transformed our email strategy. We saw a 28% revenue increase within the first month of implementing their flows.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    handle: "Shopify Store Owner",
    quote: "The abandoned cart flow alone paid for the entire service. Incredible ROI and the setup was completely hands-off.",
    stars: 5,
  },
  {
    name: "Emily R.",
    handle: "eCommerce Manager",
    quote: "We tried managing flows ourselves for months. EcomPulse did in a week what took us months to figure out, and the results are 3x better.",
    stars: 5,
  },
  {
    name: "James L.",
    handle: "Dropship Entrepreneur",
    quote: "Finally a service that understands dropshipping. The tracking panel flow alone reduced our chargebacks by 40%.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="star-orange" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialGrid() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Leading eCommerce Brands</h2>
        <p className="mt-4 text-[#888] text-base">
          Real success stories from businesses using EcomPulse to grow their brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="card-dark p-6 hover:border-[#333] transition-colors">
            <Stars count={t.stars} />
            <p className="mt-4 text-sm text-[#ccc] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c4622d] to-[#d4743f] flex items-center justify-center text-xs font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-[#888]">{t.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
