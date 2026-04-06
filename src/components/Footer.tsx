import Link from "next/link";
import Image from "next/image";

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
    <footer className="border-t border-white/[0.04] pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image src="/logo.png" alt="EcomPulse" width={120} height={30} className="h-6 w-auto" />
          </Link>
          <p className="text-sm text-[#6b6b6b] max-w-xs leading-relaxed">
            Done-for-you Klaviyo email flows that recover lost revenue and run on autopilot.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#6b6b6b] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#444]">
          Copyright &copy; 2025 EcomPulseMarketing LLC. All rights reserved
          <a
            href="https://wa.me/31683355115?text=I%20have%20found%20the%20golden%20egg%20and%20I%20am%20here%20to%20redeem%20my%2030%25%20off%20on%20ecompulse%20flows!%20Let's%20get%20started."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-1 text-[8px] opacity-20 hover:opacity-100 hover:text-[10px] transition-all duration-300 cursor-default hover:cursor-pointer grayscale hover:grayscale-0"
            title=""
          >
            🥚
          </a>
        </p>
      </div>
    </footer>
  );
}
