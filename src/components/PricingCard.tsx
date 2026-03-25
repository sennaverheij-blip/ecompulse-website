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
}

const variantStyles = {
  default: "card-pulse",
  plus: "card-pulse-plus",
  x: "card-pulse-x",
};

const iconBg = {
  default: "bg-[#1a1a1a]",
  plus: "bg-[#3a2515]",
  x: "bg-[#2a1a0e]",
};

const btnStyles = {
  default: "border border-[#c4622d]/40 text-[#c4622d] hover:bg-[#c4622d]/10",
  plus: "bg-[#c4622d] text-white hover:bg-[#d4743f]",
  x: "border border-[#c4622d]/40 text-[#c4622d] hover:bg-[#c4622d]/10",
};

export default function PricingCard({
  name,
  price,
  flowCount,
  emailCount,
  features,
  variant,
}: PricingCardProps) {
  return (
    <div className={`${variantStyles[variant]} pricing-card-hover p-7 flex flex-col justify-between h-full`}>
      <div>
        {/* Icon */}
        <div className={`${iconBg[variant]} w-10 h-10 rounded-xl flex items-center justify-center mb-6`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        {/* Name & Price */}
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-3xl font-bold text-white mt-1">${price}</p>

        {/* Flow pill */}
        <div className="flex items-center gap-2 mt-5">
          <span className="pill">{name === "Pulse" ? "Flows" : "Flows"}</span>
          <span className="text-sm text-[#aaa] flex items-center gap-1">
            {flowCount} flows - {emailCount} emails
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-3.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#aaa]">
              <svg className="mt-0.5 shrink-0 text-[#c4622d]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button className={`mt-8 w-full py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${btnStyles[variant]}`}>
        Get your Setup
      </button>
    </div>
  );
}
