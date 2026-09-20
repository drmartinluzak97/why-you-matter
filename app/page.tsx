import Link from "next/link";
import { headers } from "next/headers";
import { Header } from "@/components/header";
import { HeroMatter } from "@/components/hero-matter";
import { CrisisPanel } from "@/components/crisis-panel";
import { ReliefHub } from "@/components/relief-hub";
import { ReassuranceCard } from "@/components/reassurance-card";
import { ThoughtRelease } from "@/components/thought-release";
import { Footer } from "@/components/footer";

export default async function Home() {
  const headersList = await headers();
  const countryHeader =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("x-real-ip-country") ||
    headersList.get("cf-ipcountry") ||
    undefined;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <Header />

      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <HeroMatter />

        {/* The Two Main Paths (Clean, un-crowded, powerful) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Card 1: Immediate Crisis & Danger with 0ms Geolocation */}
            <CrisisPanel initialCountryCode={countryHeader?.toLowerCase()} />

            {/* Card 2: Relief, Tips, Calming Tools & Breathing */}
            <ReliefHub />
          </div>
        </section>

        {/* Gentle Philosophical Reassurance Section */}
        <ReassuranceCard />

        {/* Standalone Cosmic Thought Release Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-indigo-950/30 via-slate-900/80 to-slate-950 border border-indigo-500/30 glass-panel shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <ThoughtRelease />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
