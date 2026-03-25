import Link from "next/link";

interface CTABannerProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABanner({
  ctaLabel = "Get Started",
  ctaHref = "/pricing",
}: CTABannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Label */}
      <div className="mb-6">
        <span className="pill">Get started</span>
      </div>

      {/* Banner */}
      <div className="cta-banner px-8 sm:px-12 py-12 sm:py-16 dots-pattern">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug max-w-md">
            Join thousands of successful brands already using EcomPulse.
          </h2>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-[#c4622d] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#d4743f] transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          >
            {ctaLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="particle absolute top-[20%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="particle particle-delay-1 absolute top-[60%] right-[35%] w-1 h-1 rounded-full bg-white/15" />
          <div className="particle particle-delay-2 absolute top-[30%] right-[55%] w-1 h-1 rounded-full bg-white/10" />
          <div className="particle particle-delay-3 absolute bottom-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="particle particle-delay-4 absolute top-[45%] left-[15%] w-1 h-1 rounded-full bg-white/10" />
        </div>
      </div>
    </section>
  );
}
