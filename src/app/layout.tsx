import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import MetaPixel from "@/components/MetaPixel";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "EcomPulse — Done-for-You Klaviyo Email Flows",
  description:
    "Stop leaving 20-30% of your revenue on the table. Done-for-you Klaviyo email flows, live in 5-7 days.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "EcomPulse — Done-for-You Klaviyo Email Flows",
    description:
      "Stop leaving 20-30% of your revenue on the table. Done-for-you Klaviyo email flows, live in 5-7 days.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EcomPulse Dashboard",
      },
    ],
    type: "website",
    siteName: "EcomPulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcomPulse — Done-for-You Klaviyo Email Flows",
    description:
      "Stop leaving 20-30% of your revenue on the table. Done-for-you Klaviyo email flows, live in 5-7 days.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen font-body">
        <MetaPixel />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
