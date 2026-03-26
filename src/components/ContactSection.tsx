"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[var(--text-h1)] font-bold">
            Get in Touch
          </h2>
          <p className="mt-3 sm:mt-4 text-[#6b6b6b] text-[15px] sm:text-base leading-relaxed">
            Questions? Want to see if EcomPulse is right for your store?
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@joinecompulse.com"
              className="inline-flex items-center gap-2 text-sm text-[#c4622d] hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@joinecompulse.com
            </a>
            <a href="mailto:info@joinecompulse.com" className="btn-primary text-sm w-full sm:w-auto justify-center">
              Book a Free Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 w-full bg-[#111] border border-white/[0.06] rounded-full px-5 py-3 text-sm text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#c4622d] transition-colors"
            />
            <button type="submit" className="btn-primary w-full sm:w-auto text-sm justify-center">
              Send
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-[#c4622d]">Thanks! We&apos;ll be in touch.</p>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
