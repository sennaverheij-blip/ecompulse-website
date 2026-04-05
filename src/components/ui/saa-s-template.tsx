"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { ContainerScroll } from "./container-scroll-animation";

// Inline Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-white text-black hover:bg-gray-100",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "hover:bg-gray-800/50 text-white",
      gradient:
        "bg-gradient-to-b from-[#c4622d] via-[#c4622d]/90 to-[#a85326] text-white hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(196,98,45,0.3)]",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// Navigation Component
const Navigation = React.memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#050505]/85 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="EcomPulse" width={120} height={30} className="h-6 w-auto" />
          </Link>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-sm text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#contact" className="text-sm text-white/60 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing">
              <Button type="button" variant="gradient" size="sm" className="rounded-full">
                Get My Flows Built
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/[0.04] animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/features" className="text-sm text-white/60 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-white/60 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/#contact" className="text-sm text-white/60 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.04]">
              <Link href="/pricing">
                <Button type="button" variant="gradient" size="sm" className="rounded-full w-full">
                  Get My Flows Built
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

Navigation.displayName = "Navigation";

// Hero Component
const Hero = React.memo(() => {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ animation: "fadeIn 0.6s ease-out" }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-8 md:pb-12 px-4 sm:px-0">
            <aside className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#c4622d] animate-pulse" />
              <span className="text-xs text-[#999] text-center whitespace-nowrap">
                Flows go live in <span className="text-[#c4622d] font-medium">5-7 days</span>
              </span>
              <Link
                href="/pricing"
                className="flex items-center gap-1 text-xs text-[#999] hover:text-white transition-all active:scale-95 whitespace-nowrap"
                aria-label="View pricing"
              >
                View plans
                <ArrowRight size={12} />
              </Link>
            </aside>

            <h1
              className="font-display text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-3xl px-2 sm:px-6 leading-[1.1] mb-4 sm:mb-6"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.03em",
              }}
            >
              Stop losing revenue to{" "}
              <span
                className="font-accent"
                style={{
                  background: "linear-gradient(to bottom, #c4622d, rgba(196, 98, 45, 0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                broken email flows
              </span>
            </h1>

            <p className="text-[13px] sm:text-sm md:text-base text-center max-w-2xl px-2 sm:px-6 mb-6 sm:mb-10 text-[#777] leading-relaxed">
              Done-for-you Klaviyo flows that recover abandoned carts,
              win back churning customers, and turn one-time buyers into repeat revenue.
              <br />
              One-time setup, no retainers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-10 w-full sm:w-auto">
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button
                  type="button"
                  variant="gradient"
                  size="lg"
                  className="rounded-full flex items-center justify-center w-full sm:w-auto"
                  aria-label="Get your flows built"
                >
                  Get My Flows Built
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-[#666] hover:text-white transition-colors py-2.5"
              >
                See how it works
              </Link>
            </div>
          </div>
        }
      >
        <Image
          src="/dashboard-new.jpg"
          alt="EcomPulse Dashboard — ZAR 122,185.15 total revenue, 150% vs previous period"
          width={1200}
          height={750}
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          priority
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
});

Hero.displayName = "Hero";

// Main Component
export default function SaaSTemplate() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navigation />
      <Hero />
    </main>
  );
}

export { Navigation, Hero, Button };
