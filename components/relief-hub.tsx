"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Wind, Hand, Music, Sparkles, Trees, ArrowRight } from "lucide-react";
import { BreathingBox } from "./breathing-box";
import { AmbientSoundscape } from "./ambient-soundscape";
import { GroundingSensory } from "./grounding-sensory";
import { NatureDistractionModal } from "./nature-modal";

type TabKey = "breathing" | "grounding" | "sounds";

export function ReliefHub() {
  const [activeTab, setActiveTab] = useState<TabKey>("breathing");
  const [showNatureModal, setShowNatureModal] = useState(false);

  const TABS = [
    { key: "breathing", label: "Breathing", icon: Wind },
    { key: "grounding", label: "5-4-3-2-1", icon: Hand },
    { key: "sounds", label: "Soundscapes", icon: Music },
  ];

  return (
    <div className="rounded-3xl p-6 sm:p-8 border border-teal-500/30 bg-gradient-to-b from-teal-950/30 via-slate-900/90 to-slate-950/95 glass-panel backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
      {/* Decorative accent background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-6">
        {/* Card Header & Badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Grounding & Relief Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tips & Immediate Relief
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Interactive exercises to calm acute panic, ease anxiety, and reset your nervous system.
            </p>
          </div>

          {/* Quick Nature & More button */}
          <button
            onClick={() => setShowNatureModal(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-medium transition-all active:scale-95"
            title="Open Nature & More Sanctuary"
          >
            <Trees className="w-4 h-4 text-teal-400" />
            <span>Nature & More</span>
          </button>
        </div>

        {/* Sub Navigation Bar */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/70 rounded-2xl border border-slate-800 overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabKey)}
                className={`py-2 px-3.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isCurrent
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-md shadow-teal-500/10"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}

          {/* Motivation Link as requested 4th tab */}
          <Link
            href="/motivation"
            className="py-2 px-3.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:text-purple-200 ml-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Motivation →</span>
          </Link>
        </div>

        {/* Dynamic Tool View */}
        <div className="min-h-[300px] flex flex-col justify-center">
          {activeTab === "breathing" && <BreathingBox />}
          {activeTab === "grounding" && <GroundingSensory />}
          {activeTab === "sounds" && <AmbientSoundscape />}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[11px] text-slate-400">
        <span>100% Client-side & Private</span>
        <Link href="/motivation" className="text-teal-400 hover:text-teal-300 flex items-center gap-1">
          <span>Read Motivation & Sublimation</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <NatureDistractionModal
        isOpen={showNatureModal}
        onClose={() => setShowNatureModal(false)}
      />
    </div>
  );
}
