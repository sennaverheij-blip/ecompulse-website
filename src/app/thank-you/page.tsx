"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Mail, ClipboardList, UserPlus, Zap } from "lucide-react";
import { trackEvent } from "@/components/MetaPixel";
import MetaPixel from "@/components/MetaPixel";

const steps = [
  {
    icon: <Mail size={22} className="text-[#c4622d]" />,
    title: "Check your email",
    description:
      "You'll receive an onboarding email from us within the next few hours with everything you need to get started.",
  },
  {
    icon: <ClipboardList size={22} className="text-[#c4622d]" />,
    title: "Fill in the Typeform",
    description:
      "We'll send you a short questionnaire about your store, brand voice, and goals. This takes about 5 minutes and helps us build flows tailored to your business.",
  },
  {
    icon: <UserPlus size={22} className="text-[#c4622d]" />,
    title: "Invite us to your Klaviyo",
    description: (
      <>
        Send a collaborator invite to{" "}
        <a
          href="mailto:info@joinecompulse.com"
          className="text-[#c4622d] font-semibold hover:underline"
        >
          info@joinecompulse.com
        </a>{" "}
        so we can access your account and build your flows.
      </>
    ),
  },
  {
    icon: <Zap size={22} className="text-[#c4622d]" />,
    title: "Flows go live in 5-7 days",
    description:
      "Once we have your questionnaire and Klaviyo access, we get to work. Your flows will be live and generating revenue within 5-7 business days.",
  },
];

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent("Purchase", {
      content_name: "EcomPulse Package",
      content_category: "Email Flows",
    });
  }, []);

  return (
    <>
      <MetaPixel />
      <div className="min-h-screen bg-[#050505] text-white">
        {/* Header */}
        <header className="border-b border-white/[0.04] bg-[#050505]/90 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="EcomPulse"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
            </Link>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Success icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-full bg-[#c4622d]/10 border-2 border-[#c4622d] flex items-center justify-center"
              style={{
                boxShadow: "0 0 40px rgba(196,98,45,0.15)",
              }}
            >
              <Check size={36} className="text-[#c4622d]" strokeWidth={3} />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Thank you for your purchase!
            </h1>
            <p className="text-[15px] sm:text-base text-[#777] max-w-lg mx-auto leading-relaxed">
              You&apos;re about to add serious revenue to your store. Here&apos;s
              what happens next:
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 sm:gap-5 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-5 sm:p-6"
                style={{
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#c4622d]/10 border border-[#c4622d]/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] text-[#555] font-semibold">
                      STEP {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-[#777] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">
              Questions? Need help?
            </h3>
            <p className="text-[13px] sm:text-sm text-[#777] mb-4">
              Reach out anytime — we typically reply within a few hours.
            </p>
            <a
              href="mailto:info@joinecompulse.com"
              className="inline-flex items-center gap-2 bg-[#c4622d] text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{
                boxShadow: "0 4px 16px rgba(196,98,45,0.25)",
              }}
            >
              <Mail size={16} />
              info@joinecompulse.com
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-[13px] text-[#555]">
              We&apos;re excited to work with you. Your flows are about to
              change the game.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 text-sm text-[#777] hover:text-white transition-colors"
            >
              ← Back to EcomPulse
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
