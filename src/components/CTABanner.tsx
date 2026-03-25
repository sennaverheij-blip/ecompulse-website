export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Get started label */}
      <div className="mb-6">
        <span className="text-xs text-[#999] border border-[#2a2a2a] rounded-full px-4 py-1.5">
          Get started
        </span>
      </div>

      {/* Banner */}
      <div className="cta-banner rounded-2xl px-8 sm:px-12 py-12 sm:py-16 dots-pattern">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug max-w-md">
            Join thousands of successful brands already using EcomPulse.
          </h2>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e8763a] to-[#c46030] text-white text-sm font-medium px-6 py-3 rounded-lg hover:from-[#f08a4e] hover:to-[#d47040] transition-all hover:translate-y-[-1px]"
          >
            Start free trial
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

        {/* Decorative particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="particle absolute top-[20%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="particle particle-delay-1 absolute top-[60%] right-[40%] w-1 h-1 rounded-full bg-white/15" />
          <div className="particle particle-delay-2 absolute top-[30%] right-[60%] w-1 h-1 rounded-full bg-white/10" />
          <div className="particle particle-delay-3 absolute bottom-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="particle particle-delay-4 absolute top-[50%] left-[20%] w-1 h-1 rounded-full bg-white/10" />
        </div>
      </div>
    </section>
  );
}
