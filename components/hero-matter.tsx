"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "./language-context";

export function HeroMatter() {
  const { t } = useLanguage();
  const reasons = t.hero.affirmations;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the longest reason string to reserve exact layout dimensions
  const longestReason = reasons.reduce(
    (a, b) => (a.length > b.length ? a : b),
    ""
  );

  // Reset display when language changes
  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [reasons]);

  useEffect(() => {
    if (!reasons || reasons.length === 0) return;
    const target = reasons[currentIndex % reasons.length];
    const typingSpeed = isDeleting ? 25 : 65;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < target.length) {
          setDisplayText(target.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3400);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % reasons.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, reasons]);

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Trust pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-950/40 text-sky-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
        <span>{t.hero.badge}</span>
      </div>

      {/* Main Dynamic Headline */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          {t.hero.headlinePart1}{" "}
          <br className="hidden sm:inline" />
          <span className="relative inline-block align-top mt-1 sm:mt-0 font-extrabold text-left sm:text-center">
            {/* Invisible ghost element holding maximum needed width and height */}
            <span
              className="invisible select-none pointer-events-none block min-h-[1.4em]"
              aria-hidden="true"
            >
              {longestReason}
            </span>
            {/* Animated text layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 text-transparent bg-clip-text typing-cursor flex items-center justify-start sm:justify-center">
              {displayText || "\u00A0"}
            </span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300/90 leading-relaxed pt-2">
          {t.hero.subheadline}
        </p>
      </div>

      {/* Scroll indicator hint */}
      <div className="pt-8 flex justify-center">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>{t.hero.affirmationBadge}</span>
          <ArrowDown className="w-3.5 h-3.5 text-sky-400 animate-bounce ml-1" />
        </div>
      </div>
    </section>
  );
}
