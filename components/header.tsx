"use client";

import React from "react";
import Link from "next/link";
import { Heart, Globe, ChevronDown } from "lucide-react";
import { PanicButton } from "./panic-button";
import { useLanguage } from "./language-context";
import { LanguageModal } from "./language-modal";

export function Header() {
  const { t, currentLanguage, setIsLanguageModalOpen } = useLanguage();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-300 transition-colors">
                why-you-matter<span className="text-sky-400">.org</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                {t.nav.tagline}
              </span>
            </div>
          </Link>

          {/* Action / Language & Panic controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Globe Button */}
            <button
              onClick={() => setIsLanguageModalOpen(true)}
              className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white transition-all shadow-sm shadow-slate-950/50"
              title={t.nav.changeLanguage}
              aria-label={t.nav.changeLanguage}
            >
              <div className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="text-base select-none">{currentLanguage.flag}</span>
              <span className="text-xs font-medium tracking-tight hidden md:inline">
                {t.nav.changeLanguage}
              </span>
              <span className="text-xs font-semibold text-sky-400 md:hidden">
                {currentLanguage.code.toUpperCase()}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300 transition-transform group-hover:translate-y-0.5" />
            </button>

            <PanicButton />
          </div>
        </div>
      </header>
      <LanguageModal />
    </>
  );
}
