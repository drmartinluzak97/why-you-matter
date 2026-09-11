"use client";

import React, { useState } from "react";
import { Sparkles, Trash2, CheckCircle2, RotateCcw } from "lucide-react";

export function ThoughtRelease() {
  const [thought, setThought] = useState("");
  const [isReleasing, setIsReleasing] = useState(false);
  const [released, setReleased] = useState(false);

  const handleRelease = (e: React.FormEvent) => {
    e.preventDefault();
    if (!thought.trim()) return;

    setIsReleasing(true);
    setTimeout(() => {
      setIsReleasing(false);
      setReleased(true);
      setThought("");
    }, 2000);
  };

  const handleReset = () => {
    setReleased(false);
    setThought("");
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
          <span>Cosmic Thought Release</span>
          <Sparkles className="w-4 h-4 text-indigo-400" />
        </h3>
        <p className="text-xs text-slate-400">
          Thoughts are not facts — they are just neurological weather. Write it down and let it dissolve.
        </p>
      </div>

      {!released ? (
        <form onSubmit={handleRelease} className="space-y-4">
          <div className="relative">
            <textarea
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              disabled={isReleasing}
              placeholder="Type the heavy, recurring, or painful thought here (e.g., 'I am failing everyone', 'I am afraid of my mind')..."
              rows={3}
              className={`w-full p-4 rounded-2xl bg-slate-950/80 border border-slate-700/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none ${
                isReleasing ? "blur-md scale-95 opacity-30 duration-1000" : ""
              }`}
            />
            {isReleasing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-indigo-300 font-mono text-xs animate-pulse">
                <Sparkles className="w-6 h-6 animate-spin text-indigo-400 mb-2" />
                <span>Dissolving into cosmic stardust...</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              Never stored. Never saved. Disappears completely.
            </span>
            <button
              type="submit"
              disabled={!thought.trim() || isReleasing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold text-xs shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Release & Dissolve</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 border border-indigo-400/40">
            <CheckCircle2 className="w-6 h-6 text-indigo-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">The Thought Has Been Released</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              You are the vast sky; that thought was merely a passing cloud. It has no power over your true worth.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Release another thought</span>
          </button>
        </div>
      )}
    </div>
  );
}
