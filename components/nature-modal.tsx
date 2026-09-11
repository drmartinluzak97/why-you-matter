"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Sparkles, Volume2, VolumeX, RefreshCw, Video, Image as ImageIcon, Compass } from "lucide-react";

interface NatureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CategoryKey = "oceans" | "cats" | "dogs" | "animals";

const CATEGORY_DATA: Record<CategoryKey, {
  label: string;
  icon: string;
  items: Array<{ url: string; caption: string }>;
  videoEmbedUrl: string;
  soundType: "waves" | "purr" | "dog" | "zen";
}> = {
  oceans: {
    label: "Oceans & Nature",
    icon: "🌊",
    soundType: "waves",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/G52dUQLxPzg?autoplay=1&mute=1&loop=1&playlist=G52dUQLxPzg",
    items: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        caption: "The rhythm of the tide never stops. Inhale as the wave rises, exhale as it recedes.",
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
        caption: "Deep mountain forest. Trees don't fight the storm; they bend and stand deeply rooted.",
      },
      {
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
        caption: "Calm turquoise depths. Beneath any surface storm, there is tranquil stillness.",
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        caption: "Still waters reflecting golden twilight. Peace is already here in this single breath.",
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        caption: "Rolling green valleys under golden mist. The earth breathes in silence.",
      },
      {
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
        caption: "A solitary tree standing in peace. Nature is never in a rush, yet all is accomplished.",
      },
      {
        url: "https://images.unsplash.com/photo-1439853941329-a99ce0457e8a?q=80&w=1200&auto=format&fit=crop",
        caption: "Cascading waterfall. Water yields to everything, yet carves through solid rock.",
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        caption: "Peaks above the cloudline. The sun is always shining above the heaviest weather.",
      },
      {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
        caption: "Vast celestial night sky. Your current worry is small in this infinite, safe cosmos.",
      },
      {
        url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=1200&auto=format&fit=crop",
        caption: "Sunbeams filtering through ancient trees. You are exactly where you need to be.",
      },
    ],
  },
  cats: {
    label: "Cats & Purring",
    icon: "🐱",
    soundType: "purr",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/bv3hXOCfdAw?autoplay=1&mute=1&loop=1&playlist=bv3hXOCfdAw",
    items: [
      {
        url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
        caption: "Taking a soft pause. Cats know that resting is never wasted time.",
      },
      {
        url: "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1200&auto=format&fit=crop",
        caption: "CEO of judging everyone without doing any work today.",
      },
      {
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
        caption: "Zero thoughts behind those eyes. Pure, undisturbed inner bliss.",
      },
      {
        url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop",
        caption: "If it fits, I sits. Masterclass in fitting into comfort anywhere.",
      },
      {
        url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1200&auto=format&fit=crop",
        caption: "Wearing sunglasses inside because the future is looking bright.",
      },
      {
        url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1200&auto=format&fit=crop",
        caption: "Inhale calm, exhale tension. You don't have to perform for anyone right now.",
      },
      {
        url: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=1200&auto=format&fit=crop",
        caption: "A ferocious roar or an epic yawn? Either way, you've got this.",
      },
      {
        url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1200&auto=format&fit=crop",
        caption: "Soft warmth. A cat's purr has harmonic frequencies scientifically proven to ease stress.",
      },
      {
        url: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1200&auto=format&fit=crop",
        caption: "Too relaxed for existential dread. Put your imaginary sunglasses on.",
      },
      {
        url: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop",
        caption: "Peek-a-boo! A reminder that curiosity always overcomes fear.",
      },
    ],
  },
  dogs: {
    label: "Dogs & Pups",
    icon: "🐶",
    soundType: "dog",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/-AdteE-KuIg?autoplay=1&mute=1&loop=1&playlist=-AdteE-KuIg",
    items: [
      {
        url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop",
        caption: "Unconditional loyalty. A dog loves you simply because you exist.",
      },
      {
        url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop",
        caption: "Did someone say 'Walk' or 'Everything is going to turn out okay'?",
      },
      {
        url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
        caption: "Blep! 100% good vibes, 0% overthinking.",
      },
      {
        url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format&fit=crop",
        caption: "Gentle eyes that don't judge your tough days. You are safe here.",
      },
      {
        url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop",
        caption: "Spilled pup. Melt your worries away like this sleepy golden cloud.",
      },
      {
        url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1200&auto=format&fit=crop",
        caption: "Pure joy in simple moments. The sun on your face, the grass beneath your paws.",
      },
      {
        url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1200&auto=format&fit=crop",
        caption: "Waddle forward with unstoppable corgi confidence!",
      },
      {
        url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop",
        caption: "Incoming puppy hug delivered at maximum speed!",
      },
      {
        url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop",
        caption: "Look at that goofy grin. You are someone's whole world.",
      },
      {
        url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
        caption: "Two best friends running free. Happiness is waiting in tomorrow.",
      },
    ],
  },
  animals: {
    label: "Other Animals",
    icon: "🐾",
    soundType: "zen",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/UxF9GxWXCCQ?autoplay=1&mute=1&loop=1&playlist=UxF9GxWXCCQ",
    items: [
      {
        // 1. Giant Panda (Kept)
        url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop",
        caption: "🐼 Giant Panda: Munching bamboo without a single care in the universe. One slow, peaceful bite at a time.",
      },
      {
        // 2. Funny Giraffe (Fixed - Genuine Giraffe Close-up)
        url: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1200&auto=format&fit=crop",
        caption: "🦒 Giraffe: Awkwardly peeking into frame with a 6-foot neck. Stand tall with quirky confidence!",
      },
      {
        // 3. Koala (Kept)
        url: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=1200&auto=format&fit=crop",
        caption: "🐨 Koala: Sleeping 20 hours a day and hugging a tree. A masterclass in radical rest.",
      },
      {
        // 4. Meerkats on alert (Fixed - Beautiful Wide Landscape Framing)
        url: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1200&auto=format&fit=crop",
        caption: "🦡 Meerkats: Standing dramatically at attention like 'Did someone just open a bag of chips?!'",
      },
      {
        // 5. Seal / Sea Lion (Kept)
        url: "https://images.unsplash.com/photo-1553563777-e7f319af6b47?q=80&w=1200&auto=format&fit=crop",
        caption: "🦭 Seal: Just a chubby ocean potato laughing on the rocks. Unapologetic pure joy.",
      },
      {
        // 6. Ring-Tailed Lemur (Fixed - Perfectly Framed & Centered)
        url: "https://images.unsplash.com/photo-1541890633-a92e223f2200?q=80&w=1200&auto=format&fit=crop",
        caption: "🐒 Lemur: Practicing deep morning meditation while looking delightfully dramatic.",
      },
      {
        // 7. Brown Bear (Kept)
        url: "https://images.unsplash.com/photo-1505916287987-93face5dfed2?q=80&w=1200&auto=format&fit=crop",
        caption: "🐻 Bear: Taking an epic, lazy stretch in the sunny woods. You are allowed to take up space.",
      },
      {
        // 8. Bunny (Kept)
        url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1200&auto=format&fit=crop",
        caption: "🐰 Bunny: Fast-twitching nose, infinite softness, zero overthinking.",
      },
      {
        // 9. Owl (Kept)
        url: "https://images.unsplash.com/photo-1635917923751-ef936226e579?q=80&w=1200&auto=format&fit=crop",
        caption: "🦉 Owl: Looking deeply offended by your self-doubt. Even the wisest creatures look goofy sometimes.",
      },
      {
        // 10. Sloth (Fixed - Genuine Sloth Macro / Hanging)
        url: "https://images.unsplash.com/photo-1576612119302-7b7e8f824e5f?q=80&w=1200&auto=format&fit=crop",
        caption: "🦥 Sloth: Moving at 0.1 km/h with an unstoppable gentle smile. Go at your own pace today.",
      },
    ],
  },
};

const REFLECTIONS = [
  "Nature never rushes, yet everything is accomplished in its own time.",
  "You belong to this living world as profoundly as the oceans, trees, and skies.",
  "Animals measure your worth by love and presence, not productivity.",
  "Even the darkest, heaviest night eventually bows to a golden morning."
];

export function NatureDistractionModal({ isOpen, onClose }: NatureModalProps) {
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState<CategoryKey>("oceans");
  const [itemIndex, setItemIndex] = useState(0);
  const [reflectionIndex, setReflectionIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [viewMode, setViewMode] = useState<"photo" | "video">("photo");

  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeNodesRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stop sound helper
  const stopAudio = useCallback(() => {
    if (activeNodesRef.current) {
      try {
        activeNodesRef.current.stop();
      } catch {}
      activeNodesRef.current = null;
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    } else {
      stopAudio();
      setIsPlayingAudio(false);
    }
  }, [isOpen, stopAudio]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const currentCategoryData = CATEGORY_DATA[category];
  const currentList = currentCategoryData.items;

  // Start sound for given category
  const startAudioForCategory = useCallback((catKey: CategoryKey) => {
    stopAudio();

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const soundType = CATEGORY_DATA[catKey].soundType;

      if (soundType === "purr") {
        // Purring sound synthesizer
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

        activeNodesRef.current = {
          stop: () => {
            try { osc.stop(); lfo.stop(); } catch {}
          }
        };
      } else if (soundType === "dog") {
        // Soothing sleeping puppy breathing rhythm + gentle cute puppy sounds
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let last = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (last + 0.012 * white) / 1.012;
          last = data[i];
          data[i] *= 1.6;
        }

        const breathSource = ctx.createBufferSource();
        breathSource.buffer = buffer;
        breathSource.loop = true;

        const breathFilter = ctx.createBiquadFilter();
        breathFilter.type = "lowpass";
        breathFilter.frequency.setValueAtTime(190, ctx.currentTime);

        const breathLfo = ctx.createOscillator();
        breathLfo.type = "sine";
        breathLfo.frequency.setValueAtTime(0.24, ctx.currentTime);

        const breathLfoGain = ctx.createGain();
        breathLfoGain.gain.setValueAtTime(0.07, ctx.currentTime);

        const breathGain = ctx.createGain();
        breathGain.gain.setValueAtTime(0.11, ctx.currentTime);

        breathLfo.connect(breathLfoGain);
        breathLfoGain.connect(breathGain.gain);

        breathSource.connect(breathFilter);
        breathFilter.connect(breathGain);
        breathGain.connect(ctx.destination);

        // Warm comforting heartbeat
        const heartOsc = ctx.createOscillator();
        heartOsc.type = "sine";
        heartOsc.frequency.setValueAtTime(55, ctx.currentTime);
        const heartGain = ctx.createGain();
        heartGain.gain.setValueAtTime(0.025, ctx.currentTime);

        heartOsc.connect(heartGain);
        heartGain.connect(ctx.destination);

        breathSource.start();
        breathLfo.start();
        heartOsc.start();

        // Soft, cute puppy sounds (wholesome gentle whimper/yawn sound every few seconds)
        let puppyInterval: any = null;
        const playPuppyChirp = () => {
          try {
            if (ctx.state !== "running") return;
            const now = ctx.currentTime;
            const pupOsc = ctx.createOscillator();
            const pupGain = ctx.createGain();
            pupOsc.type = "sine";
            pupOsc.frequency.setValueAtTime(460, now);
            pupOsc.frequency.exponentialRampToValueAtTime(720, now + 0.12);
            pupOsc.frequency.exponentialRampToValueAtTime(380, now + 0.38);

            pupGain.gain.setValueAtTime(0.001, now);
            pupGain.gain.linearRampToValueAtTime(0.035, now + 0.08);
            pupGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);

            pupOsc.connect(pupGain);
            pupGain.connect(ctx.destination);
            pupOsc.start(now);
            pupOsc.stop(now + 0.45);

            puppyInterval = setTimeout(playPuppyChirp, 3500 + Math.random() * 3000);
          } catch {}
        };
        puppyInterval = setTimeout(playPuppyChirp, 1800);

        activeNodesRef.current = {
          stop: () => {
            try {
              if (puppyInterval) clearTimeout(puppyInterval);
              breathSource.stop();
              breathLfo.stop();
              heartOsc.stop();
            } catch {}
          }
        };
      } else if (soundType === "zen") {
        // Enchanted Forest Sanctuary: Soft soothing woodland breeze + gentle pentatonic wind chimes & crystal bells
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let last = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (last + 0.008 * white) / 1.008;
          last = data[i];
          data[i] *= 1.2;
        }

        const breezeSource = ctx.createBufferSource();
        breezeSource.buffer = buffer;
        breezeSource.loop = true;

        const breezeFilter = ctx.createBiquadFilter();
        breezeFilter.type = "lowpass";
        breezeFilter.frequency.setValueAtTime(150, ctx.currentTime);

        const breezeGain = ctx.createGain();
        breezeGain.gain.setValueAtTime(0.04, ctx.currentTime);

        breezeSource.connect(breezeFilter);
        breezeFilter.connect(breezeGain);
        breezeGain.connect(ctx.destination);
        breezeSource.start();

        // Warm grounding pad in the background (very soft sine chord at 130.81 Hz C3 + 196 Hz G3)
        const padOsc1 = ctx.createOscillator();
        const padOsc2 = ctx.createOscillator();
        const padGain = ctx.createGain();
        padOsc1.type = "sine";
        padOsc1.frequency.setValueAtTime(130.81, ctx.currentTime);
        padOsc2.type = "sine";
        padOsc2.frequency.setValueAtTime(196.0, ctx.currentTime);
        padGain.gain.setValueAtTime(0.025, ctx.currentTime);
        padOsc1.connect(padGain);
        padOsc2.connect(padGain);
        padGain.connect(ctx.destination);
        padOsc1.start();
        padOsc2.start();

        // Gentle sweet chime / crystal bell notes
        const pentatonic = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
        let chimeTimeout: any = null;

        const playGentleChime = () => {
          try {
            if (ctx.state !== "running") return;
            const now = ctx.currentTime;
            const freq = pentatonic[Math.floor(Math.random() * pentatonic.length)];

            const chimeOsc = ctx.createOscillator();
            const chimeGain = ctx.createGain();
            chimeOsc.type = "sine";
            chimeOsc.frequency.setValueAtTime(freq, now);

            chimeGain.gain.setValueAtTime(0.0001, now);
            chimeGain.gain.linearRampToValueAtTime(0.028, now + 0.04);
            chimeGain.gain.exponentialRampToValueAtTime(0.00001, now + 2.2);

            chimeOsc.connect(chimeGain);
            chimeGain.connect(ctx.destination);
            chimeOsc.start(now);
            chimeOsc.stop(now + 2.3);

            chimeTimeout = setTimeout(playGentleChime, 2400 + Math.random() * 2500);
          } catch {}
        };
        chimeTimeout = setTimeout(playGentleChime, 1000);

        activeNodesRef.current = {
          stop: () => {
            try {
              if (chimeTimeout) clearTimeout(chimeTimeout);
              breezeSource.stop();
              padOsc1.stop();
              padOsc2.stop();
            } catch {}
          }
        };
      } else {
        // Nature & Ocean Sanctuary: Warm Solfeggio ambient drone + soft rolling ocean surf
        const baseOsc1 = ctx.createOscillator();
        const baseOsc2 = ctx.createOscillator();
        const baseOsc3 = ctx.createOscillator();
        const chordGain = ctx.createGain();

        baseOsc1.type = "sine";
        baseOsc1.frequency.setValueAtTime(174, ctx.currentTime); // Solfeggio soothing base
        baseOsc2.type = "sine";
        baseOsc2.frequency.setValueAtTime(261.63, ctx.currentTime); // C4 warm harmony
        baseOsc3.type = "sine";
        baseOsc3.frequency.setValueAtTime(396, ctx.currentTime); // G4 gentle presence

        chordGain.gain.setValueAtTime(0.045, ctx.currentTime);
        baseOsc1.connect(chordGain);
        baseOsc2.connect(chordGain);
        baseOsc3.connect(chordGain);
        chordGain.connect(ctx.destination);

        // Warm deeply-filtered rolling ocean surf
        const bufferSize = ctx.sampleRate * 3;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let last = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (last + 0.01 * white) / 1.01;
          last = data[i];
          data[i] *= 1.4;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(210, ctx.currentTime);

        const swellLfo = ctx.createOscillator();
        swellLfo.type = "sine";
        swellLfo.frequency.setValueAtTime(0.12, ctx.currentTime); // gentle 8s wave cycle

        const swellGain = ctx.createGain();
        swellGain.gain.setValueAtTime(0.07, ctx.currentTime);

        const swellLfoGain = ctx.createGain();
        swellLfoGain.gain.setValueAtTime(0.05, ctx.currentTime);

        swellLfo.connect(swellLfoGain);
        swellLfoGain.connect(swellGain.gain);

        noise.connect(filter);
        filter.connect(swellGain);
        swellGain.connect(ctx.destination);

        baseOsc1.start();
        baseOsc2.start();
        baseOsc3.start();
        noise.start();
        swellLfo.start();

        activeNodesRef.current = {
          stop: () => {
            try {
              baseOsc1.stop();
              baseOsc2.stop();
              baseOsc3.stop();
              noise.stop();
              swellLfo.stop();
            } catch {}
          }
        };
      }
    } catch (err) {
      console.error("Audio error:", err);
    }
  }, [stopAudio]);

  // Toggle button ON / OFF
  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopAudio();
      setIsPlayingAudio(false);
    } else {
      startAudioForCategory(category);
      setIsPlayingAudio(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [stopAudio]);

  if (!isOpen || !mounted) return null;

  // Next image in current category: audio continues completely uninterrupted
  const nextItem = () => {
    setItemIndex((prev) => (prev + 1) % currentList.length);
    setReflectionIndex((prev) => (prev + 1) % REFLECTIONS.length);
  };

  // Switching category: if audio was on, seamlessly transition to new category's sound
  const handleCategoryChange = (cat: CategoryKey) => {
    setCategory(cat);
    setItemIndex(0);
    if (isPlayingAudio) {
      startAudioForCategory(cat);
    }
  };

  return (
    <>
      {mounted && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl my-auto bg-slate-900 border border-teal-500/30 rounded-3xl shadow-2xl overflow-hidden glass-panel-glow flex flex-col max-h-[92vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-teal-200 flex items-center gap-2">
                    Emergency Nature & More
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </h3>
                  <p className="text-xs text-slate-400">Step away from mental noise. Immerse in living calm.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleAudio}
                  className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                    isPlayingAudio
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                  title="Toggle ambient sound"
                >
                  {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isPlayingAudio ? "Sound ON" : "Calm Audio"}</span>
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
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              {/* Top: 4 Clean Category Switchers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs">
                {(Object.keys(CATEGORY_DATA) as CategoryKey[]).map((catKey) => {
                  const item = CATEGORY_DATA[catKey];
                  const isSelected = category === catKey;
                  return (
                    <button
                      key={catKey}
                      onClick={() => handleCategoryChange(catKey)}
                      className={`px-3 py-2 rounded-xl flex items-center justify-center gap-1.5 font-semibold transition-all whitespace-nowrap ${
                        isSelected
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="text-[11px] sm:text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Media View */}
              {viewMode === "photo" ? (
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-950 shadow-inner group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentList[itemIndex % currentList.length].url}
                    alt={currentCategoryData.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex items-end p-5">
                    <p className="text-white text-sm sm:text-base font-medium drop-shadow-md">
                      "{currentList[itemIndex % currentList.length].caption}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-950 shadow-inner">
                  <iframe
                    src={currentCategoryData.videoEmbedUrl}
                    title={`Calming ${currentCategoryData.label} Stream`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Controls directly under image/video: [Photos / Video toggle] on left, [Next Scene] on right */}
              <div className="flex items-center justify-between gap-3 pt-1">
                {/* Photo / Video Switch */}
                <div className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                      viewMode === "photo" ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-xs" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Photos</span>
                  </button>
                  <button
                    onClick={() => setViewMode("video")}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                      viewMode === "video" ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-xs" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video Stream</span>
                  </button>
                </div>

                {/* Next Scene Button (When in photo mode) */}
                {viewMode === "photo" && (
                  <button
                    onClick={nextItem}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all active:scale-95 shadow-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Next Scene ({((itemIndex % currentList.length) + 1)}/10)</span>
                  </button>
                )}
              </div>

              {/* Gentle reminder card */}
              <div className="rounded-xl p-4 bg-teal-950/30 border border-teal-800/40 flex items-start gap-3.5">
                <Compass className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                  {REFLECTIONS[reflectionIndex]}
                </p>
              </div>
            </div>

            {/* Footer controls */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-t border-slate-800 bg-slate-950/80 shrink-0">
              <span className="text-[11px] text-slate-500">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Esc</kbd> anytime
              </span>

              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors"
              >
                I Feel Grounded Now (Esc)
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
