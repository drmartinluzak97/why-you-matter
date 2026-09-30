import React from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotivationHub } from "@/components/motivation-hub";

export const metadata: Metadata = {
  title: "Motivation & Deeper Perspective",
  description:
    "Deeper reflections, psychological reframing, and real stories of human resilience from around the world.",
  alternates: {
    canonical: "/motivation",
  },
  openGraph: {
    title: "Motivation & Deeper Perspective | Why You Matter",
    description:
      "Deeper reflections, psychological reframing, and real stories of human resilience from around the world.",
    type: "website",
    url: "https://www.why-you-matter.org/motivation",
    siteName: "Why You Matter",
  },
};

export default async function MotivationPage() {
  const headersList = await headers();
  const serverCountry =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("cf-ipcountry") ||
    undefined;

  return (
    <div className="flex-1 flex flex-col justify-between min-h-screen">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <MotivationHub initialCountryCode={serverCountry} />
      </main>

      <Footer />
    </div>
  );
}
