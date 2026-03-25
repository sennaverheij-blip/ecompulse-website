"use client";

import { useState } from "react";

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
    question: "How does the onboarding process work?",
    answer:
      "After purchase, you'll receive a detailed onboarding questionnaire. Our team reviews your store, brand voice, and goals. We then build your flows, send them for approval, and launch once you're happy. The entire process is hands-off for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
        {/* Left side */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
            Frequently
            <br />
            Asked Questions
          </h2>
          <p className="mt-4 text-[#888] text-base">
            Find answers to common questions about EcomPulse.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={i}
                className={`w-full text-left px-5 sm:px-6 py-4 transition-all duration-200 cursor-pointer ${
                  isOpen ? "faq-item-open" : "faq-item-closed"
                }`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-white">{faq.question}</span>
                  <svg
                    className={`shrink-0 transition-transform duration-200 text-[#888] ${
                      isOpen ? "rotate-180" : ""
                    }`}
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[#888] leading-relaxed">{faq.answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
