import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SublimationCards } from "@/components/sublimation-cards";
import { ArrowLeft, Sparkles, Heart, Compass, Flame, Shield, SunMedium, Brain } from "lucide-react";

export const metadata = {
  title: "Motivation & Deeper Perspective | Why You Matter",
  description: "Deeper reflections, psychological reframing, and the alchemy of turning pain into purpose.",
};

export default function MotivationPage() {
  const PILLARS = [
    {
      title: "100% Survival Rate",
      desc: "You have survived every panic attack, every heartbreak, and every dark night you thought you wouldn't. Your resilience is already proven.",
      icon: Shield,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "Cognitive Noise vs. Truth",
      desc: "The brain is an aggressive pattern-matching machine designed for primal survival. It overestimates danger to keep you safe. Anxiety is a false alarm, not reality.",
      icon: Brain,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    },
    {
      title: "The Unwritten Chapters",
      desc: "You cannot judge the entire book of your life by a single difficult chapter. The best people you will ever meet, and the greatest laughs you will ever have, are still ahead.",
      icon: SunMedium,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "Alchemy of Pain (Sublimation)",
      desc: "Great art, deep empathy, and groundbreaking innovation are born from people who have stood in the dark. Your pain can become your greatest creative superpower.",
      icon: Flame,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
  ];

  const QUOTES = [
    {
      quote: "He who has a why to live can bear almost any how.",
      author: "Viktor E. Frankl",
      context: "Psychiatrist & Holocaust survivor",
    },
    {
      quote: "One does not become enlightened by imagining figures of light, but by making the darkness conscious.",
      author: "Carl Gustav Jung",
      context: "Founder of Analytical Psychology",
    },
    {
      quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius",
      context: "Meditations",
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-between min-h-screen">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Navigation back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-xl"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Home & Tools</span>
          </Link>
        </div>

        {/* Page Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Perspective Shift & Meaning</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Your Existence <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 text-transparent bg-clip-text">Matters Profoundly</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            When you are in the thick of mental exhaustion, perspective narrows. Here are grounded psychological truths and timeless principles to re-anchor your worth.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3 glass-panel hover:border-slate-700 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Alchemy of Mind / Sublimation Section */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-950/30 via-slate-900/80 to-slate-950 border border-purple-500/30 glass-panel space-y-6">
          <SublimationCards />
        </div>

        {/* Quotes Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center">
            Words of Grounding & Strength
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {QUOTES.map((q, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between space-y-4"
              >
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{q.quote}"
                </p>
                <div>
                  <div className="text-xs font-bold text-purple-300">{q.author}</div>
                  <div className="text-[11px] text-slate-500">{q.context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Action Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950/40 via-indigo-950/40 to-slate-900 border border-sky-500/30 text-center space-y-4">
          <h4 className="text-lg font-bold text-white">Need to ground yourself right now?</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Take a slow, deep breath. You do not have to conquer the whole mountain today. Just the next minute.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-sky-500/20 active:scale-95"
            >
              Return to Breathing & Grounding
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
