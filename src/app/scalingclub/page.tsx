import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Pulse",
    originalPrice: "400",
    price: "300",
    flowCount: "3",
    emailCount: "7",
    audience: "Getting started with email",
    stripeUrl: "https://buy.stripe.com/3cIcMZ5o0cLvdxq0Q7fnO00",
    features: [
      "Welcome series",
      "Abandoned checkout",
      "Browse abandoned",
      "Live in 5-7 days",
    ],
  },
  {
    name: "Pulse+",
    originalPrice: "650",
    price: "550",
    flowCount: "5",
    emailCount: "13",
    audience: "Growing stores scaling LTV",
    featured: true,
    stripeUrl: "https://buy.stripe.com/7sYfZb17K12NgJC42jfnO01",
    features: [
      "All Pulse features",
      "Customer win-back",
      "Post purchase upsell",
      "LTV & repeat purchases",
    ],
  },
  {
    name: "PulseX",
    originalPrice: "880",
    price: "650",
    flowCount: "10",
    emailCount: "25",
    audience: "6-figure+ stores",
    featured: false,
    stripeUrl: "https://buy.stripe.com/aFa4gtbMo12NgJC56nfnO06",
    features: [
      "All Pulse+ features",
      "Site abandoned",
      "Flash sale sequence",
      "Tracking panel (Rush/Parcel/other)",
    ],
  },
];

export default function ScalingClubPage() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar — minimal for partner page */}
      <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="EcomPulse" width={100} height={24} className="h-5 w-auto" />
          </Link>
          <div className="flex items-center gap-2 text-xs text-[#6b6b6b]">
            <span>×</span>
            <span className="font-semibold text-white">ScalingClub</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-12 sm:pt-20 pb-10 sm:pb-16 px-5 sm:px-6 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[#c4622d]/10 border border-[#c4622d]/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs text-[#c4622d] font-medium">
                Exclusive ScalingClub Partner Discount
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="font-display font-bold leading-[1.08] tracking-tight text-[clamp(28px,5vw,56px)]">
              $100 off every EcomPulse package
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg text-[#6b6b6b] max-w-xl mx-auto leading-relaxed">
              As a ScalingClub member, you get exclusive pricing on done-for-you Klaviyo email flows.
              Same quality, same speed — just $100 less.
            </p>
          </ScrollReveal>
        </section>

        {/* Pricing cards */}
        <section className="px-5 sm:px-6 max-w-5xl mx-auto pb-8 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`${plan.featured ? "pricing-card-featured" : "pricing-card"} p-5 sm:p-6 flex flex-col justify-between h-full relative`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#c4622d] text-white text-[10px] sm:text-[11px] font-semibold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_12px_rgba(196,98,45,0.3)]">
                        Best Value
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">{plan.name}</h3>
                    <p className="text-[11px] text-[#6b6b6b] mt-1">{plan.audience}</p>

                    <div className="mt-3 sm:mt-4 flex items-baseline gap-2">
                      <p className="text-3xl sm:text-4xl font-bold text-white font-display">${plan.price}</p>
                      <p className="text-base sm:text-lg text-[#555] line-through">${plan.originalPrice}</p>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#c4622d] mt-1">ScalingClub discount applied</p>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-[10px] bg-[#1a1a1a] border border-[#333] rounded-full px-2.5 py-0.5 text-[#999]">
                        {plan.flowCount} flows
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#6b6b6b]">
                        {plan.emailCount} emails
                      </span>
                    </div>

                    <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13px] sm:text-sm text-[#999]">
                          <svg className="mt-0.5 shrink-0 text-[#c4622d]" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={plan.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block w-full py-3 rounded-full text-sm font-medium text-center transition-all duration-150 ${
                      plan.featured
                        ? "bg-[#c4622d] text-white hover:opacity-90 hover:-translate-y-px shadow-[0_4px_16px_rgba(196,98,45,0.25)]"
                        : "border border-[#333] text-white hover:bg-white/5 hover:-translate-y-px"
                    }`}
                  >
                    Get {plan.name} for ${plan.price}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Trust */}
        <ScrollReveal>
          <div className="text-center px-5 pb-16 sm:pb-20">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4 max-w-lg mx-auto">
              <p className="text-[13px] sm:text-sm text-[#999]">
                <span className="text-[#c4622d] font-medium">Results-backed guarantee.</span>{" "}
                Not happy? We&apos;ll revise until you are. One-time payment, no retainers.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}
