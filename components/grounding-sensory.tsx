"use client";

import React, { useState } from "react";
import { Eye, Hand, Ear, Sparkles, Check, ArrowRight, RotateCcw } from "lucide-react";

const STEPS = [
  {
    count: 5,
    title: "5 Things You Can See",
    icon: Eye,
    color: "from-blue-500 to-sky-400",
    instruction: "Look around your room right now. Notice 5 distinct visual details (e.g. a pattern on the wall, light reflection, a cup).",
  },
  {
    count: 4,
    title: "4 Things You Can Feel",
    icon: Hand,
    color: "from-emerald-500 to-teal-400",
    instruction: "Focus on physical touch. Feel your feet resting on the floor, texture of your clothes, back against the chair, or cool air.",
  },
  {
    count: 3,
    title: "3 Things You Can Hear",
    icon: Ear,
    color: "from-amber-500 to-yellow-400",
    instruction: "Listen carefully. A clock ticking, distant traffic, your own breathing, or ambient room hum.",
  },
  {
    count: 2,
    title: "2 Things You Can Smell",
    icon: Sparkles,
    color: "from-purple-500 to-pink-400",
    instruction: "Notice the scent in the air, your shirt, coffee, or take a deep neutral breath of fresh room air.",
  },
  {
    count: 1,
    title: "1 Thing You Can Taste / Acknowledge",
    icon: Sparkles,
    color: "from-rose-500 to-red-400",
    instruction: "Notice the taste in your mouth, take a sip of cold water, and remind yourself: 'I am safe here in this moment.'",
  },
];

export function GroundingSensory() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setCompleted(false);
  };

  const step = STEPS[currentStep];
  const Icon = step.icon;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
          <span>5-4-3-2-1 Sensory Grounding</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
            Anti-Panic Tool
          </span>
        </h3>
        <p className="text-xs text-slate-400">
          Anchor your nervous system into physical reality step-by-step.
        </p>
      </div>

      {!completed ? (
        <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-5 animate-fade-in">
          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  idx <= currentStep ? "bg-emerald-400" : "bg-slate-800"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shrink-0`}>
              {step.count}
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-slate-400">Step {currentStep + 1} of 5</span>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            {step.instruction}
          </p>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={reset}
              className="text-xs text-slate-500 hover:text-slate-300"
            >
              Start over
            </button>
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <span>{currentStep === STEPS.length - 1 ? "Complete Grounding" : "I Found Them, Next"}</span>
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
            <h4 className="text-base font-bold text-white">Your Nervous System Is Grounded</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              You are right here, in this physical room. The storm in your head does not control this physical space.
            </p>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Repeat exercise</span>
          </button>
        </div>
      )}
    </div>
  );
}
