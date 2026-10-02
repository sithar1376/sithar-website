import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | AI Marketing Expert`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["AI Marketing Expert", "AI Marketing Consultant", "Digital Marketing Consultant", "Lead Generation", "Marketing Automation"],
  alternates: { canonical: "/" },
  openGraph: { title: `${siteConfig.name} | AI Marketing Expert`, description: siteConfig.description, type: "website", url: siteConfig.url },
  twitter: { card: "summary", title: `${siteConfig.name} | AI Marketing Expert`, description: siteConfig.description },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
