"use client";

import React, { useState, useEffect, useRef } from "react";
import { CloudRain, Waves, Flame, Sparkles, Volume2, VolumeX, Moon } from "lucide-react";

type SoundType = "rain" | "waves" | "tone432" | "campfire" | "meditation";

export function AmbientSoundscape() {
  const [activeSound, setActiveSound] = useState<SoundType | null>(null);
  const [volume, setVolume] = useState(0.4);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ [key: string]: any }>({});

  const stopCurrentSound = () => {
    Object.values(nodesRef.current).forEach((node: any) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {}
    });
    nodesRef.current = {};
  };

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playSound = (type: SoundType) => {
    if (activeSound === type) {
      stopCurrentSound();
      setActiveSound(null);
      return;
    }

    stopCurrentSound();
    const ctx = getAudioContext();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, ctx.currentTime);
    masterGain.connect(ctx.destination);
    nodesRef.current.masterGain = masterGain;

    if (type === "rain") {
      // Synthesize pink/brown noise for rain
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1000, ctx.currentTime);

      noise.connect(filter);
      filter.connect(masterGain);
      noise.start();
      nodesRef.current.noise = noise;
    } else if (type === "waves") {
      // Ocean wave synthesis with slow LFO modulation
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99765 * b0 + white * 0.0990460;
        b1 = 0.96300 * b1 + white * 0.2965164;
        b2 = 0.57000 * b2 + white * 1.0526913;
        data[i] = (b0 + b1 + b2) * 0.1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(300, ctx.currentTime);

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8 sec ocean cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(200, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      noise.connect(filter);
      filter.connect(masterGain);

      noise.start();
      lfo.start();
      nodesRef.current.noise = noise;
      nodesRef.current.lfo = lfo;
    } else if (type === "tone432") {
      // Pure 432 Hz Solfeggio soothing frequency + subtle octave harmonic
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(432, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(216, ctx.currentTime); // Sub-harmonic

      const gain1 = ctx.createGain();
      gain1.gain.setValueAtTime(0.15, ctx.currentTime);
      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.1, ctx.currentTime);

      osc1.connect(gain1);
      gain1.connect(masterGain);

      osc2.connect(gain2);
      gain2.connect(masterGain);

      osc1.start();
      osc2.start();
      nodesRef.current.osc1 = osc1;
      nodesRef.current.osc2 = osc2;
    } else if (type === "campfire") {
      // Warm crackling fire sound
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // High density pops with low rumble
        if (Math.random() < 0.003) {
          data[i] = (Math.random() * 2 - 1) * 0.8;
        } else {
          data[i] = (Math.random() * 2 - 1) * 0.04;
        }
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, ctx.currentTime);

      noise.connect(filter);
      filter.connect(masterGain);
      noise.start();
      nodesRef.current.noise = noise;
    } else if (type === "meditation") {
      // Deep warm drone chord (Root + Fifth + Octave)
      const freqs = [108, 162, 216];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.08 / (idx + 1), ctx.currentTime);

        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        nodesRef.current[`osc_${idx}`] = osc;
      });
    }

    setActiveSound(type);
  };

  useEffect(() => {
    if (nodesRef.current.masterGain && audioCtxRef.current) {
      nodesRef.current.masterGain.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopCurrentSound();
    };
  }, []);

  const soundList = [
    { id: "rain", label: "Gentle Rain", icon: CloudRain, desc: "Rhythmic calming rainfall" },
    { id: "waves", label: "Ocean Waves", icon: Waves, desc: "Soothing deep tides" },
    { id: "tone432", label: "432 Hz Clarity", icon: Sparkles, desc: "Harmonic restorative tone" },
    { id: "campfire", label: "Campfire", icon: Flame, desc: "Warm cozy crackle" },
    { id: "meditation", label: "Deep Drone", icon: Moon, desc: "Rooting meditation chords" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
          <span>Ambient Soundscapes</span>
          <Sparkles className="w-4 h-4 text-emerald-400" />
        </h3>
        <p className="text-xs text-slate-400">
          Synthesized directly in your browser. No downloads, zero ads, pure calm.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {soundList.map((item) => {
          const Icon = item.icon;
          const isSelected = activeSound === item.id;
          return (
            <button
              key={item.id}
              onClick={() => playSound(item.id as SoundType)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between gap-2 ${
                isSelected
                  ? "bg-emerald-500/20 border-emerald-400/50 shadow-lg shadow-emerald-500/10 scale-[1.02]"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-5 h-5 ${isSelected ? "text-emerald-300" : "text-slate-400"}`} />
                {isSelected && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </div>
              <div>
                <div className={`text-xs font-bold ${isSelected ? "text-emerald-200" : "text-slate-200"}`}>
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1">{item.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Volume Slider */}
      {activeSound && (
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <span>Volume</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-32 accent-emerald-400 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
