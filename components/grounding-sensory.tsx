"use client";

import React, { useState } from "react";
import { Eye, Hand, Ear, Sparkles, Check, ArrowRight, RotateCcw } from "lucide-react";
import { useLanguage } from "./language-context";

const STEP_ICONS = [Eye, Hand, Ear, Sparkles, Sparkles];
const STEP_COLORS = [
  "from-blue-500 to-sky-400",
  "from-emerald-500 to-teal-400",
  "from-amber-500 to-yellow-400",
  "from-purple-500 to-pink-400",
  "from-rose-500 to-red-400",
];

export function GroundingSensory() {
  const { t } = useLanguage();
  const tg = t.relief.tools.grounding;
  const steps = tg.steps;
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setCompleted(false);
  };

  const currentStepData = steps[currentStep] || steps[0];
  const Icon = STEP_ICONS[currentStep] || Sparkles;
  const color = STEP_COLORS[currentStep] || "from-sky-500 to-indigo-500";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
          <span>{tg.title}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
            {tg.badge}
          </span>
        </h3>
        <p className="text-xs text-slate-400">
          {tg.desc}
        </p>
      </div>

      {!completed ? (
        <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-5 animate-fade-in">
          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  idx <= currentStep ? "bg-emerald-400" : "bg-slate-800"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${color} flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shrink-0`}>
              {currentStepData.number}
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-slate-400">
                {tg.stepTitle} {currentStep + 1} / {steps.length}
              </span>
              <h4 className="text-base font-bold text-white">{currentStepData.sense}</h4>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            {currentStepData.instruction}
          </p>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={reset}
              className="text-xs text-slate-500 hover:text-slate-300"
            >
              {tg.restart}
            </button>
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <span>{currentStep === steps.length - 1 ? tg.completed.slice(0, 20) + "..." : tg.nextStep}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 border border-emerald-400/40">
            <Check className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">{tg.badge}</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {tg.completed}
            </p>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{tg.restart}</span>
          </button>
        </div>
      )}
    </div>
  );
}
