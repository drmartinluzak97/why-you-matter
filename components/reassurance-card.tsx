"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "./language-context";

export function ReassuranceCard() {
  const { t } = useLanguage();
  const tr = t.reassurance;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center space-y-6">
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-5 glass-panel">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {tr.quote}
        </h3>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {tr.body}
        </p>
        <div className="text-xs font-mono text-sky-400">
          {tr.author}
        </div>

        {/* Button to Motivation subpage */}
        <div className="pt-3 flex justify-center">
          <Link
            href="/motivation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{tr.button}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
