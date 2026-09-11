"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Sparkles, Volume2, VolumeX, RefreshCw, Heart, Video, Image as ImageIcon } from "lucide-react";

interface CatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CAT_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
    caption: "Just taking a gentle pause. You are safe here.",
  },
  {
    url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1200&auto=format&fit=crop",
    caption: "A little stylish friend reminding you to take it easy.",
  },
  {
    url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1200&auto=format&fit=crop",
    caption: "Inhale calm, exhale tension. No hurry, no pressure.",
  },
  {
    url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop",
    caption: "Curiosity and warmth. Tomorrow has moments waiting for you.",
  },
  {
    url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1200&auto=format&fit=crop",
    caption: "Soft warmth. You don't need to earn your rest.",
  }
];

const CAT_FACTS = [
  "A cat's purr (25–140 Hz) is scientifically proven to lower blood pressure and help calm human stress.",
  "Cats spend ~70% of their day relaxing or recharging. They know resting is not wasting time.",
  "You don't need to be productive right this second to deserve peace and care.",
  "Cats never judge you for having difficult days. They just love warmth and quiet companionship."
];

export function CatDistractionModal({ isOpen, onClose }: CatModalProps) {
  const [mounted, setMounted] = useState(false);
  const [catIndex, setCatIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [isPurring, setIsPurring] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [purrNodes, setPurrNodes] = useState<{ osc: OscillatorNode; gain: GainNode } | null>(null);
  const [viewMode, setViewMode] = useState<"photo" | "video">("photo");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open to prevent awkward page scrolling
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Gentle purr sound synthesizer using Web Audio API
  const togglePurr = () => {
    if (isPurring) {
      if (purrNodes) {
        try {
          purrNodes.osc.stop();
          purrNodes.osc.disconnect();
        } catch {}
      }
      setIsPurring(false);
    } else {
      try {
        const ctx = audioCtx || new (window.AudioContext || (window as any).webkitAudioContext)();
        if (!audioCtx) setAudioCtx(ctx);
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(45, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        lfo.type = "sine";
        lfo.frequency.setValueAtTime(24, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.08, ctx.currentTime);

        gain.gain.setValueAtTime(0.12, ctx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        lfo.start();

        setPurrNodes({ osc, gain });
        setIsPurring(true);
      } catch (err) {
        console.error("Audio error:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (purrNodes) {
        try {
          purrNodes.osc.stop();
          purrNodes.osc.disconnect();
        } catch {}
      }
    };
  }, [purrNodes]);

  if (!isOpen || !mounted) return null;

  const nextCat = () => {
    setCatIndex((prev) => (prev + 1) % CAT_IMAGES.length);
    setFactIndex((prev) => (prev + 1) % CAT_FACTS.length);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl my-auto bg-slate-900 border border-sky-500/30 rounded-3xl shadow-2xl overflow-hidden glass-panel-glow flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🐱</span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-sky-200 flex items-center gap-2">
                Emergency Wholesome Sanctuary
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h3>
              <p className="text-xs text-slate-400">Take a deep breath. No rush, just soft paws.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePurr}
              className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                isPurring
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
              title="Toggle calming purr sound"
            >
              {isPurring ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{isPurring ? "Purr Active" : "Purr Sound"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
              title="Close sanctuary (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Mode toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setViewMode("photo")}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                  viewMode === "photo" ? "bg-sky-500/20 text-sky-300 border border-sky-500/30" : "text-slate-400 hover:text-white"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Photos</span>
              </button>
              <button
                onClick={() => setViewMode("video")}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                  viewMode === "video" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "text-slate-400 hover:text-white"
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Relaxing Video Stream</span>
              </button>
            </div>

            {viewMode === "photo" && (
              <button
                onClick={nextCat}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Next Friend</span>
              </button>
            )}
          </div>

          {/* Media View */}
          {viewMode === "photo" ? (
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-950 shadow-inner group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CAT_IMAGES[catIndex].url}
                alt="Cute cat calming scene"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex items-end p-5">
                <p className="text-white text-sm sm:text-base font-medium drop-shadow-md">
                  "{CAT_IMAGES[catIndex].caption}"
                </p>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-950 shadow-inner">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PL_m3t1Q2U0b-W6s6n1f9_Zp4EaJ3w4q1z&autoplay=1&mute=1&loop=1"
                title="Calming Cat Videos"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Gentle reminder card */}
          <div className="rounded-xl p-4 bg-sky-950/40 border border-sky-800/40 flex items-start gap-3.5">
            <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
              {CAT_FACTS[factIndex]}
            </p>
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-t border-slate-800 bg-slate-950/80 shrink-0">
          <span className="text-[11px] text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Esc</kbd> anytime to return
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors"
          >
            I Feel Better Now
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
