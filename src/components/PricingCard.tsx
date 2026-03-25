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

const iconBgStyles = {
  default: "bg-[#1e1e1e]",
  plus: "bg-[#4a3520]",
  x: "bg-[#5a4530]",
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
    <div
      className={`${variantStyles[variant]} rounded-2xl p-6 flex flex-col justify-between h-full transition-transform hover:scale-[1.02] duration-300`}
    >
      <div>
        {/* Icon */}
        <div
          className={`${iconBgStyles[variant]} w-10 h-10 rounded-xl flex items-center justify-center mb-6`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        {/* Name & Price */}
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-3xl font-bold text-white mt-1">${price}</p>

        {/* Flow badge */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xs font-medium bg-white/10 text-white px-3 py-1 rounded-full">
            Flows
          </span>
          <span className="text-sm text-[#ccc] flex items-center gap-1">
            {flowCount} flows - {emailCount} emails
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#ccc]">
              <svg
                className="mt-0.5 shrink-0 text-[#e8763a]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button className="mt-8 w-full py-3 rounded-full text-sm font-medium border border-[#e8763a]/40 text-[#e8763a] hover:bg-[#e8763a]/10 transition-all cursor-pointer">
        Get your Setup
      </button>
    </div>
  );
}
