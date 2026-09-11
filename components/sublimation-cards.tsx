"use client";

import React, { useState } from "react";
import { Sparkles, Brain, Flame, Feather, Compass, CheckCircle } from "lucide-react";

const INSIGHTS = [
  {
    title: "1. Thoughts Are Not Facts",
    icon: Brain,
    summary: "Most self-critical thoughts are not your own. They are old tape recordings from childhood or environment.",
    detail: "As young children, we lacked critical filters. When someone spoke in anger or criticism, our subconscious recorded it as absolute truth. When you hear 'You are broken' or 'You are worthless', realize: that isn't you speaking. It is simply an outdated tape loop.",
  },
  {
    title: "2. The Art of Sublimation (Alchemy)",
    icon: Flame,
    summary: "Your intense dark energy doesn't have to destroy you. It can be transmuted into creation.",
    detail: "Sublimation is the psychological alchemy of converting raw instinct, taboo thoughts, and deep emotional pain into art, literature, physical power, or code. Creators like Tarantino and Dostoevsky didn't suppress their darkness—they channeled it into timeless works.",
  },
  {
    title: "3. You Are the Sky, Not the Storm",
    icon: Feather,
    summary: "You are the conscious observer witnessing the storm, not the wreckage inside it.",
    detail: "No matter how turbulent the clouds, thunder, or rain become, the sky itself is never harmed by the weather. Step back into the seat of the observer. Watch the sensations come and go without attaching your identity to them.",
  },
];

export function SublimationCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      <div className="text-center space-y-1 mb-4">
        <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
          <span>The Alchemy of Mind & Shadow</span>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </h3>
        <p className="text-xs text-slate-400">
          Transforming inner turmoil into understanding and creative power.
        </p>
      </div>

      <div className="space-y-3">
        {INSIGHTS.map((item, idx) => {
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
                  <div className={`p-2 rounded-xl ${isExpanded ? "bg-purple-500/20 text-purple-300" : "bg-slate-800 text-slate-400"}`}>
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
