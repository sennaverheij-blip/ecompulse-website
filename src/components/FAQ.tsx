"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import GoldenEgg from "./GoldenEgg";

const faqs = [
  {
    question: "Is EcomPulse suited for brands, or just dropshipping stores?",
    answer:
      "EcomPulse is designed for both brands and dropshipping stores, offering tailored solutions for each. Whether you run a DTC brand with custom products or a dropshipping operation, our email flows are optimized for your specific business model and customer journey.",
  },
  {
    question: "Why would I use EcomPulse as my email flows provider?",
    answer:
      "EcomPulse specializes in high-converting email flows for ecommerce. Our AI-powered approach means your flows are continuously optimized for maximum revenue. We handle everything from setup to optimization, so you can focus on growing your business.",
  },
  {
    question: "What are the expected results of implementing these flows?",
    answer:
      "Most clients see a 15-30% increase in email-attributed revenue within the first 30 days. Our flows are designed to capture lost revenue from abandoned carts, win back inactive customers, and increase customer lifetime value through strategic post-purchase sequences.",
  },
  {
    question: "How fast can I expect results after I have paid?",
    answer:
      "Our Pulse plan goes live in 5-7 business days. Pulse+ and PulseX plans may take slightly longer due to the additional flows and customization involved. You'll typically see measurable results within the first 2 weeks of your flows going live.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "We offer a results-backed guarantee. If you're not satisfied with the quality of the flows, we'll revise them until you are. Our goal is to make this the highest-ROI investment you make for your store this year.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "After purchase, you'll receive a detailed onboarding questionnaire. Our team reviews your store, brand voice, and goals. We then build your flows, send them for approval, and launch once you're happy. The entire process is hands-off for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-[var(--text-h1)] font-bold text-center">
          Everything You Need to Know
        </h2>
        <p className="mt-3 sm:mt-4 text-center text-[#6b6b6b] text-[15px] sm:text-base">
          Common questions about EcomPulse. <GoldenEgg id="faq" size="text-[9px]" />
        </p>
      </ScrollReveal>

      <div className="mt-8 sm:mt-12 flex flex-col">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <ScrollReveal key={i} delay={i * 0.04}>
              <button
                className={`w-full text-left py-4 sm:py-5 transition-all duration-200 cursor-pointer faq-item ${
                  isOpen ? "faq-item-active" : ""
                }`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <span className={`text-[13px] sm:text-sm font-medium ${isOpen ? "text-[#c4622d]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`shrink-0 transition-transform duration-200 text-[#6b6b6b] ${isOpen ? "rotate-180" : ""}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-[13px] sm:text-sm text-[#6b6b6b] leading-relaxed">{faq.answer}</p>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
