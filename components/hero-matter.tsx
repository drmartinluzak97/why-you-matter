"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Heart, ArrowDown, ShieldCheck } from "lucide-react";

const REASONS = [
  "your story isn't finished yet.",
  "your thoughts are not facts; they are just echoes.",
  "your presence changes worlds in ways you cannot see.",
  "you are stronger than the heaviest noise in your head.",
  "healing is a journey of quiet courage, not a race.",
  "you don't have to carry the whole weight alone.",
  "the world needs the light only you can bring.",
];

export function HeroMatter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the longest reason string to reserve exact layout dimensions
  const longestReason = REASONS.reduce((a, b) => (a.length > b.length ? a : b), "");

  useEffect(() => {
    const target = REASONS[currentIndex];
    
    // Deliberate, slower pace so words sink in deeply
    const typingSpeed = isDeleting ? 30 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < target.length) {
          setDisplayText(target.slice(0, displayText.length + 1));
        } else {
          // Pause at completed sentence for 3.2 seconds
          setTimeout(() => setIsDeleting(true), 3200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % REASONS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Trust pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-950/40 text-sky-300 text-xs font-mono uppercase tracking-widest mb-6">
        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
        <span>Safe · Anonymous · No Judgment</span>
      </div>

      {/* Main Dynamic Headline with Ghost element (Zero Layout Shift) */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          You matter because{" "}
          <br className="hidden sm:inline" />
          <span className="relative inline-block align-top mt-1 sm:mt-0 font-extrabold text-left sm:text-center">
            {/* Invisible ghost element holding maximum needed width and height */}
            <span
              className="invisible select-none pointer-events-none block"
              aria-hidden="true"
            >
              {longestReason}
            </span>
            {/* Animated text layer pinned cleanly to the reserved box */}
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 text-transparent bg-clip-text typing-cursor flex items-center justify-start sm:justify-center">
              {displayText || "\u00A0"}
            </span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300/90 leading-relaxed pt-2">
          Whatever brought you here right now — overwhelm, pain, a storm in your mind, or wanting to help someone you love — <strong className="text-white font-semibold">you are in the right place</strong>. Choose a path below.
        </p>
      </div>

      {/* Scroll indicator hint */}
      <div className="pt-8 flex justify-center">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <span>Choose your immediate focus</span>
          <ArrowDown className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
