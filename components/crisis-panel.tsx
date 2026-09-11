"use client";

import React, { useState } from "react";
import { PhoneCall, MessageSquare, AlertTriangle, Users, HeartHandshake, ExternalLink, Clock, Sparkles } from "lucide-react";

export function CrisisPanel() {
  const [targetType, setTargetType] = useState<"self" | "other">("self");
  const [selectedRegion, setSelectedRegion] = useState<"global" | "us" | "uk" | "eu" | "sk">("global");

  return (
    <div className="rounded-3xl p-6 sm:p-8 border border-rose-500/30 bg-gradient-to-b from-rose-950/40 via-slate-900/90 to-slate-950/95 glass-panel backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
      {/* Decorative accent background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-6">
        {/* Card Header & Badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold tracking-wide border border-rose-500/30 mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Immediate Support Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              In Crisis or Threat
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              If life, safety, or mental stability is under immediate risk, you do not have to fight alone.
            </p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950/70 rounded-2xl border border-slate-800">
          <button
            onClick={() => setTargetType("self")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              targetType === "self"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span>I am in danger</span>
          </button>
          <button
            onClick={() => setTargetType("other")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              targetType === "other"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Someone else is in danger</span>
          </button>
        </div>

        {targetType === "self" ? (
          <div className="space-y-5">
            {/* Quick 5-Minute Emergency Action Card */}
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>The 3-Step Emergency Anchor</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">1.</span>
                  <span><strong>Physical Pause:</strong> Put both feet flat on the ground and take 3 deep, slow breaths.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">2.</span>
                  <span><strong>Temperature Shock:</strong> Hold an ice cube or splash cold water on your face to break the acute panic loop.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">3.</span>
                  <span><strong>Reach Out:</strong> Connect with one of the free, anonymous hotlines below.</span>
                </li>
              </ul>
            </div>

            {/* Region Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-medium mr-1">Country:</span>
              {[
                { id: "global", label: "Global / All" },
                { id: "us", label: "USA & Canada" },
                { id: "uk", label: "United Kingdom" },
                { id: "eu", label: "EU" },
                { id: "sk", label: "Slovakia & CZ" },
              ].map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                    selectedRegion === reg.id
                      ? "bg-slate-700 text-white border border-slate-600"
                      : "bg-slate-900/60 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>

            {/* Hotlines List */}
            <div className="space-y-2.5">
              {(selectedRegion === "global" || selectedRegion === "us") && (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>988 Suicide & Crisis Lifeline</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">Free & 24/7</span>
                    </div>
                    <p className="text-xs text-slate-400">Call or text 988 (USA & Canada)</p>
                  </div>
                  <a
                    href="tel:988"
                    className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-rose-600/20 active:scale-95"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Call 988
                  </a>
                </div>
              )}

              {(selectedRegion === "global" || selectedRegion === "us" || selectedRegion === "uk") && (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Crisis Text Line</span>
                      <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded border border-sky-500/30">Text Free</span>
                    </div>
                    <p className="text-xs text-slate-400">Text HOME to 741741 (US, UK, Canada)</p>
                  </div>
                  <a
                    href="sms:741741?body=HOME"
                    className="px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Text HOME
                  </a>
                </div>
              )}

              {(selectedRegion === "global" || selectedRegion === "sk") && (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Linka dôvery Nezábudka / IPčko (SK)</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">24/7 SK</span>
                    </div>
                    <p className="text-xs text-slate-400">0800 800 566 · 0800 500 333 · ipcko.sk</p>
                  </div>
                  <a
                    href="tel:0800800566"
                    className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Call SK
                  </a>
                </div>
              )}

              {(selectedRegion === "global" || selectedRegion === "eu" || selectedRegion === "uk") && (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white">Befrienders Worldwide / 112 EU</div>
                    <p className="text-xs text-slate-400">Global network of emotional support centers</p>
                  </div>
                  <a
                    href="https://www.befrienders.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Find Local
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* When someone else is in danger */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-3">
              <h3 className="text-sm font-bold text-amber-200 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                How to Handle Someone in Crisis
              </h3>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Stay with them:</strong> Do not leave them alone if there is active danger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Ask directly & calmly:</strong> "Are you thinking about hurting yourself?" Asking directly opens the door, it does not cause harm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Listen without debating:</strong> Avoid saying "You have so much to live for." Instead say: "I am here with you, and you don't have to face this alone."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Involve Emergency Services:</strong> Call 112 (EU) / 911 (US) if there is an immediate medical or physical emergency.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Need consultation on how to help?</span>
              <a
                href="https://www.befrienders.org/how-to-support-someone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
              >
                Guide <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[11px] text-slate-400">
        <span>Confidential & safe</span>
        <span>You are worthy of support</span>
      </div>
    </div>
  );
}
