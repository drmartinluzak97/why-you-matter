"use client";

import React, { useState } from "react";
import { Sparkles, Brain, Flame, Feather } from "lucide-react";
import { useLanguage } from "./language-context";

export function SublimationCards() {
  const { t } = useLanguage();
  const sub = t.motivationPage?.sublimation;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  if (!sub) return null;

  const cards = [
    {
      title: sub.card1Title,
      icon: Brain,
      summary: sub.card1Summary,
      detail: sub.card1Detail,
      accent: "from-sky-500/20 to-blue-600/10 border-sky-500/30 text-sky-300",
      iconBg: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    },
    {
      title: sub.card2Title,
      icon: Flame,
      summary: sub.card2Summary,
      detail: sub.card2Detail,
      accent: "from-purple-500/20 to-pink-600/10 border-purple-500/30 text-purple-300",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      title: sub.card3Title,
      icon: Feather,
      summary: sub.card3Summary,
      detail: sub.card3Detail,
      accent: "from-amber-500/20 to-orange-600/10 border-amber-500/30 text-amber-300",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1.5 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>{sub.title}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {sub.subtitle}
        </h3>
      </div>

      {/* Desktop 3-column Grid / Mobile Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              className={`p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 bg-slate-900/80 hover:bg-slate-850/90 shadow-lg ${
                isExpanded
                  ? "bg-gradient-to-b from-purple-950/40 to-slate-900/90 border-purple-500/50 ring-2 ring-purple-500/20 shadow-purple-950/30"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className={`p-2.5 rounded-2xl border ${item.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-800/40">
                    #0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm font-medium text-purple-200 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <p className="text-slate-300/90">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
