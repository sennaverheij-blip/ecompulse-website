"use client";

import { useState } from "react";

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
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get in Touch
        </h2>
        <p className="mt-4 text-[#888] text-base leading-relaxed">
          Have questions about our flows? Want to see if EcomPulse is right for your store? Reach out.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:hello@ecompulse.io"
            className="inline-flex items-center gap-2 text-sm text-[#c4622d] hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            hello@ecompulse.io
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#c4622d] text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-all duration-150 hover:-translate-y-px"
          >
            Book a Free Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 w-full sm:w-auto bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#c4622d] transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#c4622d] text-white text-sm font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-150 hover:-translate-y-px cursor-pointer"
          >
            Send us a message
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm text-[#c4622d]">Thanks! We&apos;ll be in touch.</p>
        )}
      </div>
    </section>
  );
}
