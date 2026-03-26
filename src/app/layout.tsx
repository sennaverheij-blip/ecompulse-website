import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
