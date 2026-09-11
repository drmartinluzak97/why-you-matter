import Link from "next/link";
import { headers } from "next/headers";
import { Header } from "@/components/header";
import { HeroMatter } from "@/components/hero-matter";
import { CrisisPanel } from "@/components/crisis-panel";
import { ReliefHub } from "@/components/relief-hub";
import { ThoughtRelease } from "@/components/thought-release";
import { Footer } from "@/components/footer";
import { Sparkles, ArrowRight } from "lucide-react";

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
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-5 glass-panel">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              "No feeling is final."
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Your mind may tell you that things will always feel as heavy as they do right now. But emotions are temporary chemical waves. The storm will pass, the horizon will clear, and you deserve to see what comes next.
            </p>
            <div className="text-xs font-mono text-sky-400">
              — Rainer Maria Rilke
            </div>

            {/* Button to Motivation subpage */}
            <div className="pt-3 flex justify-center">
              <Link
                href="/motivation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Explore Motivation & Deeper Perspectives</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

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
