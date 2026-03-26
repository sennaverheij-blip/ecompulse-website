import Link from "next/link";
import HeroAvatars from "./HeroAvatars";
import ScrollReveal from "./ScrollReveal";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showAvatars?: boolean;
}

export default function CTABanner({
  headline = "Ready to Add 20\u201325% More Revenue?",
  subheadline = "Setup takes 5 minutes. Flows go live in days.",
  primaryLabel = "Get My Flows Set Up",
  primaryHref = "/pricing",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
  showAvatars = true,
}: CTABannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="cta-elevated px-8 sm:px-16 py-14 sm:py-20 text-center">
          {/* Subtle accent glow behind headline */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(196,98,45,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
              {headline}
            </h2>
            <p className="mt-3 text-[#6b6b6b] text-base">{subheadline}</p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href={secondaryHref} className="btn-ghost text-sm text-[#f5f5f5]">
                {secondaryLabel}
              </Link>
            </div>

            {showAvatars && (
              <div className="mt-8 flex justify-center">
                <HeroAvatars />
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
