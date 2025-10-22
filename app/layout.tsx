import "./globals.css";

import type { Metadata } from "next";
import { Cinzel_Decorative, Crimson_Text, Merriweather } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EmberField } from "@/components/ember-field";
import { buildOrganizationJsonLd, siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

const heading = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"]
});

const subhead = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-subhead",
  display: "swap",
  weight: ["400", "600", "700"]
});

const body = Merriweather({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "700", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: siteConfig.locale,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`
    }
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-obsidian text-bone antialiased",
          heading.variable,
          subhead.variable,
          body.variable
        )}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <EmberField />
        <SiteHeader />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <SiteFooter />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationJsonLd())
          }}
        />
      </body>
    </html>
  );
}
