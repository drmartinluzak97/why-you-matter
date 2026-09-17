import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.why-you-matter.org"),
  title: "Why You Matter | You Are Irreplaceable",
  description: "A global sanctuary for moments of crisis, doubt, and mental exhaustion. 250+ countries & territories crisis directory (ISO 3166-1), grounding tools, and the reasons why your existence matters.",
  keywords: [
    "mental health",
    "why you matter",
    "crisis support 250 countries",
    "global crisis lines",
    "suicide prevention hotline",
    "panic button",
    "grounding exercises",
    "box breathing",
    "thoughts are not facts",
    "sublimation",
    "ISO 3166-1",
  ],
  alternates: {
    canonical: "https://www.why-you-matter.org",
  },
  openGraph: {
    title: "Why You Matter | A Sanctuary in the Dark",
    description: "Your thoughts are not facts. Your existence changes everything. Global crisis directory across 250+ countries & territories.",
    type: "website",
    url: "https://www.why-you-matter.org",
    siteName: "Why You Matter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why You Matter | You Are Irreplaceable",
    description: "A global crisis sanctuary & grounding directory across 250+ countries & territories.",
  },
};

const JSON_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://www.why-you-matter.org/#app",
      "name": "Why You Matter",
      "url": "https://www.why-you-matter.org",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "description": "Global mental health sanctuary and crisis intervention companion covering 250+ countries and territories.",
      "author": {
        "@type": "Person",
        "name": "Martin Lužák",
        "url": "https://martinluzak.sk",
      },
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.why-you-matter.org/#crisis-directory",
      "name": "Global 250+ Countries Crisis & Emergency Directory",
      "url": "https://www.why-you-matter.org",
      "about": [
        {
          "@type": "MedicalCondition",
          "name": "Crisis Intervention & Psychological Distress",
        },
      ],
      "audience": {
        "@type": "PeopleAudience",
        "audienceType": "General Public",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
      </head>
      <body className="antialiased bg-[#070b14] text-slate-100 min-h-screen flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
