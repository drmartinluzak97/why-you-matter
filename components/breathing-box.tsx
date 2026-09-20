"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useLanguage } from "./language-context";

export function BreathingBox() {
  const { t } = useLanguage();
  const tb = t.relief.tools.breathing;
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "holdFull" | "exhale" | "holdEmpty">("inhale");
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [technique, setTechnique] = useState<"box" | "relax">("box");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 1) {
            return prev - 1;
          }

          if (technique === "box") {
            if (phase === "inhale") {
              setPhase("holdFull");
              return 4;
            } else if (phase === "holdFull") {
              setPhase("exhale");
              return 4;
            } else if (phase === "exhale") {
              setPhase("holdEmpty");
              return 4;
            } else {
              setPhase("inhale");
              return 4;
            }
          } else {
            if (phase === "inhale") {
              setPhase("holdFull");
              return 7;
            } else if (phase === "holdFull") {
              setPhase("exhale");
              return 8;
            } else {
              setPhase("inhale");
              return 4;
            }
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase, technique]);

  const reset = () => {
    setIsActive(false);
    setPhase("inhale");
    setSecondsLeft(4);
  };

  const getPhaseName = () => {
    switch (phase) {
      case "inhale":
        return tb.inhale;
      case "holdFull":
      case "holdEmpty":
        return tb.hold;
      case "exhale":
        return tb.exhale;
    }
  };

  const getScaleClass = () => {
    if (!isActive) return "scale-100";
    if (phase === "inhale") return "scale-125 transition-transform duration-[4000ms] ease-out";
    if (phase === "holdFull") return "scale-125";
    if (phase === "exhale") return "scale-90 transition-transform duration-[4000ms] ease-in";
    return "scale-90";
  };

  return (
    <div className="space-y-6 text-center">
      {/* Technique switch */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => { setTechnique("box"); reset(); }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            technique === "box"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Box 4-4-4-4
        </button>
        <button
          onClick={() => { setTechnique("relax"); reset(); }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            technique === "relax"
              ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          4-7-8 Relax
        </button>
      </div>

      {/* Visual Breathing Orb */}
      <div className="relative h-56 flex items-center justify-center">
        <div
          className={`w-44 h-44 rounded-full border border-teal-500/20 bg-teal-950/20 backdrop-blur-md flex items-center justify-center shadow-2xl ${getScaleClass()}`}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-400/40 to-sky-400/30 flex flex-col items-center justify-center p-3 shadow-inner border border-teal-400/30">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-200 font-semibold truncate max-w-[110px]">
              {getPhaseName()}
            </span>
            <span className="text-3xl font-extrabold text-white my-1 font-mono">
              {isActive ? secondsLeft : 4}s
            </span>
          </div>
        </div>
      </div>

      {/* Instruction text */}
      <p className="text-sm font-medium text-teal-200/90 h-6 animate-fade-in">
        {isActive ? getPhaseName() : tb.desc}
      </p>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
        >
          {isActive ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950" />}
          <span>{isActive ? tb.pause : tb.start}</span>
        </button>
        <button
          onClick={reset}
          className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
          title={tb.reset}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
