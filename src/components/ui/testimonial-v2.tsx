"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "EcomPulse set up our entire Klaviyo flow suite in under a week. We saw a 28% revenue increase from email alone in the first month.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah K.",
    role: "DTC Brand Owner",
  },
  {
    text: "We were leaving so much money on the table with abandoned carts. EcomPulse's flows recovered 70% of what we were losing. Game changer.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcus T.",
    role: "Shopify Store Owner",
  },
  {
    text: "The win-back sequences alone paid for the entire package within two weeks. Our repeat purchase rate jumped 25%.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emily R.",
    role: "E-commerce Director",
  },
  {
    text: "No retainers, no BS. They built our flows, handed them over, and they've been printing money on autopilot ever since.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "James L.",
    role: "Brand Founder",
  },
  {
    text: "We tried building Klaviyo flows ourselves for months. EcomPulse did in 5 days what took us 6 months to fail at.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Olivia M.",
    role: "Marketing Manager",
  },
  {
    text: "The post-purchase upsell flow alone generates an extra $12K/month. Best one-time investment we've made for our store.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rachel S.",
    role: "Shopify Plus Merchant",
  },
  {
    text: "Zero chargebacks since switching to their payment hold flows. That alone saved us from losing our Stripe account.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David P.",
    role: "Store Operations Lead",
  },
  {
    text: "Our email revenue went from 8% to 32% of total revenue within 60 days. The ROI is insane for a one-time fee.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Natalie W.",
    role: "DTC Growth Lead",
  },
  {
    text: "Hands down the best done-for-you Klaviyo service out there. Professional, fast, and the results speak for themselves.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Chris H.",
    role: "E-commerce Entrepreneur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-8 rounded-2xl border border-white/[0.08] max-w-xs w-full bg-[#0c0c0c] transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#c4622d]/30"
                style={{
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.5), 0 12px 36px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <blockquote className="m-0 p-0">
                  <p className="text-[#999] leading-relaxed font-normal m-0 text-sm">
                    {text}
                  </p>
                  <footer className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`Avatar of ${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/[0.08] group-hover:ring-[#c4622d]/30 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-white text-sm">
                        {name}
                      </cite>
                      <span className="text-xs leading-5 tracking-tight text-[#666] mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

// --- Main Testimonials Section ---
export default function TestimonialsV2() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="max-w-7xl px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-white/[0.08] py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-[#999] bg-white/[0.04]">
              Testimonials
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-6 text-center text-white"
          >
            Trusted by{" "}
            <span className="font-accent text-[#c4622d]">500+ stores</span>
          </h2>
          <p className="text-center mt-5 text-[#777] text-base leading-relaxed max-w-sm">
            See how ecommerce brands are adding 20-25% more revenue with
            done-for-you Klaviyo flows.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
