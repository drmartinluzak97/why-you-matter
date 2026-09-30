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
    },
    {
      title: sub.card2Title,
      icon: Flame,
      summary: sub.card2Summary,
      detail: sub.card2Detail,
    },
    {
      title: sub.card3Title,
      icon: Feather,
      summary: sub.card3Summary,
      detail: sub.card3Detail,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center space-y-1 mb-4">
        <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
          <span>{sub.title}</span>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </h3>
        <p className="text-xs text-slate-400">
          {sub.subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                isExpanded
                  ? "bg-purple-950/30 border-purple-500/40 shadow-lg shadow-purple-500/10"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${
                      isExpanded ? "bg-purple-500/20 text-purple-300" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <span className="text-xs text-purple-400 font-mono">
                  {isExpanded ? "−" : "+"}
                </span>
              </div>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-purple-900/40 text-xs sm:text-sm text-slate-300 space-y-2 animate-fade-in leading-relaxed">
                  <p className="font-semibold text-purple-200">{item.summary}</p>
                  <p className="text-slate-300/90">{item.detail}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
