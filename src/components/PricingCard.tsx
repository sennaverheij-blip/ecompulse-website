"use client";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  name: string;
  price: string;
  flowCount: string;
  emailCount: string;
  features: PricingFeature[];
  variant: "default" | "plus" | "x";
  audience: string;
}

export default function PricingCard({
  name,
  price,
  flowCount,
  emailCount,
  features,
  variant,
  audience,
}: PricingCardProps) {
  const isFeatured = variant === "plus";

  return (
    <div className={`${isFeatured ? "pricing-card-featured" : "pricing-card"} p-7 flex flex-col justify-between h-full fade-up relative`}>
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#c4622d] text-white text-[11px] font-semibold px-4 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div>
        <h3 className="font-display text-lg font-bold text-white">{name}</h3>
        <p className="text-xs text-[#6b6b6b] mt-1">{audience}</p>
        <p className="text-4xl font-bold text-white mt-4 font-display">${price}</p>
        <p className="text-xs text-[#6b6b6b] mt-1">One-time payment &middot; No monthly fees</p>

        <div className="flex items-center gap-2 mt-5">
          <span className="text-[11px] bg-[#1a1a1a] border border-[#333] rounded-full px-3 py-1 text-[#999]">
            Flows
          </span>
          <span className="text-sm text-[#6b6b6b]">
            {flowCount} flows &middot; {emailCount} emails
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#999]">
              <svg className="mt-0.5 shrink-0 text-[#c4622d]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-8 w-full py-3 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer ${
          isFeatured
            ? "bg-[#c4622d] text-white hover:opacity-90 hover:-translate-y-px"
            : "border border-[#333] text-white hover:bg-white/5 hover:-translate-y-px"
        }`}
      >
        Get Started with {name}
      </button>
    </div>
  );
}
