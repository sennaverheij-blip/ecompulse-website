import Link from "next/link";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#222] pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#c4622d] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-[15px]">EcomPulse</span>
          </Link>
          <p className="text-sm text-[#888] max-w-xs leading-relaxed">
            Done-for-you Klaviyo email flows that recover lost revenue and run on autopilot.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#888] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#555]">
          Copyright &copy; 2025 EcomPulseMarketing LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
