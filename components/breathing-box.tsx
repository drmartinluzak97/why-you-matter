"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Wind } from "lucide-react";

export function BreathingBox() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"Inhale" | "Hold (Full)" | "Exhale" | "Hold (Empty)">("Inhale");
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [technique, setTechnique] = useState<"box" | "relax">("box"); // box: 4-4-4-4, relax: 4-7-8

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 1) {
            return prev - 1;
          }

          // Transition to next phase
          if (technique === "box") {
            // 4s Box Breathing: Inhale -> Hold -> Exhale -> Hold
            if (phase === "Inhale") {
              setPhase("Hold (Full)");
              return 4;
            } else if (phase === "Hold (Full)") {
              setPhase("Exhale");
              return 4;
            } else if (phase === "Exhale") {
              setPhase("Hold (Empty)");
              return 4;
            } else {
              setPhase("Inhale");
              return 4;
            }
          } else {
            // 4-7-8 Relaxing: Inhale (4s) -> Hold (7s) -> Exhale (8s)
            if (phase === "Inhale") {
              setPhase("Hold (Full)");
              return 7;
            } else if (phase === "Hold (Full)") {
              setPhase("Exhale");
              return 8;
            } else {
              setPhase("Inhale");
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
    setPhase("Inhale");
    setSecondsLeft(4);
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case "Inhale":
        return "Breathe in slowly through your nose...";
      case "Hold (Full)":
        return "Hold gently. Relax your shoulders...";
      case "Exhale":
        return "Release slowly through your mouth...";
      case "Hold (Empty)":
        return "Rest in stillness...";
    }
  };

  const getScaleClass = () => {
    if (!isActive) return "scale-100";
    if (phase === "Inhale") return "scale-125 transition-transform duration-[4000ms] ease-out";
    if (phase === "Hold (Full)") return "scale-125";
    if (phase === "Exhale") return "scale-90 transition-transform duration-[4000ms] ease-in";
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
          Box Breathing (4-4-4-4)
        </button>
        <button
          onClick={() => { setTechnique("relax"); reset(); }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            technique === "relax"
              ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          4-7-8 Sleep & Calm
        </button>
      </div>

      {/* Visual Breathing Orb */}
      <div className="relative h-56 flex items-center justify-center">
        {/* Outer pulsating ring */}
        <div
          className={`w-44 h-44 rounded-full border border-teal-500/20 bg-teal-950/20 backdrop-blur-md flex items-center justify-center shadow-2xl ${getScaleClass()}`}
        >
          {/* Inner glowing orb */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-400/40 to-sky-400/30 flex flex-col items-center justify-center p-3 shadow-inner border border-teal-400/30">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-200 font-semibold">
              {phase}
            </span>
            <span className="text-3xl font-extrabold text-white my-1 font-mono">
              {isActive ? secondsLeft : 4}s
            </span>
          </div>
        </div>
      </div>

      {/* Instruction text */}
      <p className="text-sm font-medium text-teal-200/90 h-6 animate-fade-in">
        {isActive ? getPhaseInstruction() : "Press start and follow the rhythm."}
      </p>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
        >
          {isActive ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950" />}
          <span>{isActive ? "Pause" : "Start Breathing"}</span>
        </button>
        <button
          onClick={reset}
          className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
          title="Reset"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
