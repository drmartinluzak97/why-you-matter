import type { Metadata } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { UmamiAnalytics } from "@/components/umami-analytics";
import { LanguageProvider } from "@/components/language-context";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.why-you-matter.org"),
  title: {
    default: "Why You Matter | You Are Irreplaceable",
    template: "%s | Why You Matter",
  },
  description: "A global sanctuary for moments of crisis, doubt, and exhaustion. 250+ countries crisis directory, grounding tools, and reasons why you matter.",
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
    canonical: "/",
  },
  openGraph: {
    title: "Why You Matter | A Sanctuary in the Dark",
    description: "Your thoughts are not facts. Global crisis directory across 250+ countries and territories.",
    type: "website",
    url: "https://www.why-you-matter.org",
    siteName: "Why You Matter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why You Matter | You Are Irreplaceable",
    description: "A global crisis sanctuary & grounding directory across 250+ countries and territories.",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const countryHeader =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("x-real-ip-country") ||
    headersList.get("cf-ipcountry") ||
    undefined;

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#070b14] text-slate-100 min-h-screen flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
        <LanguageProvider initialCountryCode={countryHeader?.toLowerCase()}>
          {children}
        </LanguageProvider>
        <Analytics />
        <UmamiAnalytics />
      </body>
    </html>
  );
}
