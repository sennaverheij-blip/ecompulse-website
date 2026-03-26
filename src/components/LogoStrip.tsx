import ScrollReveal from "./ScrollReveal";

const logos = [
  "Shopify",
  "Klaviyo",
  "WooCommerce",
  "DTC Brand",
  "Dropshipping Store",
  "Shopify",
  "Klaviyo",
  "WooCommerce",
  "DTC Brand",
  "Dropshipping Store",
];

export default function LogoStrip() {
  return (
    <section className="py-16 border-y border-[#222] overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-xs uppercase tracking-widest text-[#6b6b6b] mb-8">
          Works with the tools you already use
        </p>
      </ScrollReveal>
      <div className="relative">
        <div className="flex marquee-track w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-4 px-6 py-2.5 rounded-full border border-[#222] text-xs text-[#6b6b6b] whitespace-nowrap select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
