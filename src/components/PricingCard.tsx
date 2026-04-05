"use client";

import { GlassEffect } from "./ui/liquid-glass";

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
  stripeUrl: string;
}

export default function PricingCard({
  name,
  price,
  flowCount,
  emailCount,
  features,
  variant,
  audience,
  stripeUrl,
}: PricingCardProps) {
  const isFeatured = variant === "plus";

  return (
    <GlassEffect
      className="rounded-2xl h-full"
      style={
        isFeatured
          ? { boxShadow: "0 4px 20px rgba(196, 98, 45, 0.2), 0 20px 56px rgba(0,0,0,0.5), 0 0 80px rgba(196, 98, 45, 0.06)" }
          : undefined
      }
    >
      <div className={`${isFeatured ? "pricing-card-featured" : "pricing-card"} p-5 sm:p-7 flex flex-col justify-between h-full relative bg-transparent`}>
        {isFeatured && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-40">
            <span className="bg-[#c4622d] text-white text-[11px] font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_12px_rgba(196,98,45,0.3)]">
              Most Popular
            </span>
          </div>
        )}

        <div>
          <h3 className="font-display text-base sm:text-lg font-bold text-white">{name}</h3>
          <p className="text-[11px] sm:text-xs text-[#6b6b6b] mt-1">{audience}</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mt-3 sm:mt-4 font-display">${price}</p>
          <p className="text-[11px] text-[#6b6b6b] mt-1">One-time payment &middot; No monthly fees</p>

          <div className="flex items-center gap-2 mt-4 sm:mt-5">
            <span className="text-[10px] sm:text-[11px] bg-[#1a1a1a] border border-[#333] rounded-full px-3 py-1 text-[#999]">
              Flows
            </span>
            <span className="text-xs sm:text-sm text-[#6b6b6b]">
              {flowCount} flows &middot; {emailCount} emails
            </span>
          </div>

          <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-[#999]">
                <svg className="mt-0.5 shrink-0 text-[#c4622d]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 space-y-2">
          <a
            href={stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-3 sm:py-3.5 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer text-center ${
              isFeatured
                ? "bg-[#c4622d] text-white hover:opacity-90 hover:-translate-y-px shadow-[0_4px_16px_rgba(196,98,45,0.25)]"
                : "border border-[#333] text-white hover:bg-white/5 hover:-translate-y-px"
            }`}
          >
            Get {name} for ${price}
          </a>
          {isFeatured && (
            <p className="text-[10px] text-center text-[#666]">Setup starts within 24 hours</p>
          )}
        </div>
      </div>
    </GlassEffect>
  );
}
