import ScrollReveal from "./ScrollReveal";

const logos = [
  "Shopify", "Klaviyo", "WooCommerce", "DTC Brand", "Dropshipping Store",
  "Shopify", "Klaviyo", "WooCommerce", "DTC Brand", "Dropshipping Store",
];

export default function LogoStrip() {
  return (
    <section className="py-12 sm:py-14 logo-strip overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-[11px] uppercase tracking-[0.15em] text-[#555] mb-6 sm:mb-8">
          Works with the tools you already use
        </p>
      </ScrollReveal>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex marquee-track w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-3 px-5 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-[11px] text-[#555] whitespace-nowrap select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
