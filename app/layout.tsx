import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Pinyon_Script } from "next/font/google";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const script = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script" });

const title = "Adaeze Victoria Simon | E-commerce Email Marketing";
const description = "Email campaigns, automation and segmentation for beauty, skincare, cosmetics, haircare and fashion brands.";

export const metadata: Metadata = {
  metadataBase: new URL("https://victoriasimonmarketing.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Adaeze Victoria Simon", type: "website", locale: "en_NG" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
