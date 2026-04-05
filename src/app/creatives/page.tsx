import Link from "next/link";

const creatives = [
  {
    file: "/creatives/01-pain-square.html",
    title: "01 — Pain Point",
    desc: "Traffic that never converts",
    angle: "Pain / Problem awareness",
    dims: "1080 × 1080 (Square — Feed)",
  },
  {
    file: "/creatives/02-results-square.html",
    title: "02 — Real Results",
    desc: "ZAR 29,324 in 7 days (dashboard)",
    angle: "Data / Proof",
    dims: "1080 × 1080 (Square — Feed)",
  },
  {
    file: "/creatives/03-comparison-square.html",
    title: "03 — Price Comparison",
    desc: "Agency $3K/mo vs EcomPulse $360 once",
    angle: "Value / Comparison",
    dims: "1080 × 1080 (Square — Feed)",
  },
  {
    file: "/creatives/04-socialproof-portrait.html",
    title: "04 — Social Proof",
    desc: "500+ stores, testimonials, stats",
    angle: "Trust / Social proof",
    dims: "1080 × 1350 (Portrait — Feed/Stories)",
  },
  {
    file: "/creatives/05-urgency-square.html",
    title: "05 — Urgency",
    desc: "Your store is leaking money right now",
    angle: "Urgency / FOMO",
    dims: "1080 × 1080 (Square — Feed)",
  },
  {
    file: "/creatives/06-offer-portrait.html",
    title: "06 — 10% Off Offer",
    desc: "All 3 plans with pricing breakdown",
    angle: "Offer / Discount",
    dims: "1080 × 1350 (Portrait — Feed/Stories)",
  },
  {
    file: "/creatives/07-results-landscape.html",
    title: "07 — Results + Dashboard",
    desc: "Dashboard proof with stats (link ad)",
    angle: "Data / Proof",
    dims: "1200 × 628 (Landscape — Link Ads)",
  },
];

export default function CreativesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 sm:p-10 font-body">
      <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">
        EcomPulse Ad Creatives
      </h1>
      <p className="text-[#777] text-sm mb-10">
        Click any card to open the creative. Take a screenshot at the specified
        dimensions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {creatives.map((c) => (
          <a
            key={c.file}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#111] border border-[#222] rounded-xl p-5 hover:border-[#c4622d] transition-colors"
          >
            <h3 className="font-display text-base font-semibold mb-1">
              {c.title}
            </h3>
            <p className="text-[13px] text-[#666] mb-3">{c.desc}</p>
            <p className="text-[13px] text-[#c4622d] mb-2">{c.angle}</p>
            <span className="inline-block bg-[#1a1a1a] border border-[#333] rounded-md px-2 py-0.5 text-[11px] text-[#888]">
              {c.dims}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12 bg-[#111] border border-[#222] rounded-xl p-6">
        <h2 className="font-display text-lg font-semibold mb-3">
          How to export as images
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-[#999]">
          <li>Open the creative in Chrome</li>
          <li>
            Open DevTools (
            <code className="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-[#c4622d] text-xs">
              Cmd + Option + I
            </code>
            )
          </li>
          <li>
            Click the device toolbar (
            <code className="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-[#c4622d] text-xs">
              Cmd + Shift + M
            </code>
            )
          </li>
          <li>Set the dimensions to match the creative (e.g., 1080 x 1080)</li>
          <li>
            Set device pixel ratio to{" "}
            <code className="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-[#c4622d] text-xs">
              2
            </code>{" "}
            for retina quality
          </li>
          <li>
            Three-dot menu in device toolbar →{" "}
            <code className="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-[#c4622d] text-xs">
              Capture screenshot
            </code>
          </li>
          <li>Upload the PNG directly to Meta Ads Manager</li>
        </ol>
      </div>
    </div>
  );
}
