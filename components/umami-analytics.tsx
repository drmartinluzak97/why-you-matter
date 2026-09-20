import Script from "next/script";

interface UmamiAnalyticsProps {
  websiteId?: string;
  scriptUrl?: string;
}

export function UmamiAnalytics({
  websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "2a114f48-db09-46f4-b986-8117c020bc3a",
  scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://martin-luzak.vercel.app/script.js",
}: UmamiAnalyticsProps) {
  if (!websiteId) {
    return null;
  }

  return (
    <Script
      async
      defer
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
