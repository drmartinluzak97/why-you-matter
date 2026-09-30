"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  Shield,
  Brain,
  SunMedium,
  Flame,
  Globe,
  Quote,
  HeartHandshake,
  Compass,
  Search,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "./language-context";
import { INSPIRING_FIGURES, InspiringFigure } from "@/lib/motivation-data";
import { SublimationCards } from "./sublimation-cards";
import { detectUserCountryCode } from "@/lib/crisis-data";

export interface MotivationHubProps {
  initialCountryCode?: string;
}

export function MotivationHub({ initialCountryCode }: MotivationHubProps) {
  const { currentLanguage, locale } = useLanguage();
  const isSk = locale === "sk";
  const langKey = isSk ? "sk" : "en";

  // Auto-detected country
  const detectedCode = useMemo(() => {
    if (initialCountryCode) return initialCountryCode.toLowerCase().trim();
    return detectUserCountryCode(undefined, currentLanguage.code);
  }, [initialCountryCode, currentLanguage.code]);

  // Selected spotlight country
  const [spotlightCode, setSpotlightCode] = useState<string>(() => {
    const match = INSPIRING_FIGURES.find((f) => f.countryCode === detectedCode);
    if (match) return match.countryCode;
    return isSk ? "sk" : "au";
  });

  const [activeContinent, setActiveContinent] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Spotlight Figure (Type 1: Geo-Hero)
  const spotlightFigure: InspiringFigure = useMemo(() => {
    return (
      INSPIRING_FIGURES.find((f) => f.countryCode === spotlightCode) ||
      INSPIRING_FIGURES.find((f) => f.id === "nick-vujicic") ||
      INSPIRING_FIGURES[0]
    );
  }, [spotlightCode]);

  // Global Titans
  const globalTitans = useMemo(() => {
    return INSPIRING_FIGURES.filter((f) => f.isGlobalFeatured);
  }, []);

  // Filtered gallery
  const filteredFigures = useMemo(() => {
    let list = INSPIRING_FIGURES;
    if (activeContinent !== "all") {
      list = list.filter((f) => f.continent === activeContinent);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.countryName[langKey].toLowerCase().includes(q) ||
          f.role[langKey].toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeContinent, searchQuery, langKey]);

  // Psychological Pillars
  const pillars = [
    {
      title: isSk ? "100% Úspešnosť prežitia" : "100% Survival Rate",
      desc: isSk
        ? "Prežil si každú paniku, každé zlomené srdce a každú temnú noc, o ktorej si si myslel, že ju nezvládneš. Tvoja odolnosť je už dokázaná faktami."
        : "You have survived every panic attack, every heartbreak, and every dark night you thought you wouldn't. Your resilience is already proven by facts.",
      icon: Shield,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: isSk ? "Kognitívny šum vs. Pravda" : "Cognitive Noise vs. Truth",
      desc: isSk
        ? "Mozog je evolučný nástroj navrhnutý na prežitie. V kríze dramaticky zveličuje nebezpečenstvo. Úzkosť a ťažké myšlienky sú falošný poplach, nie realita."
        : "The brain is an evolutionary survival machine that exaggerates threat in times of stress. Anxiety and dark thoughts are false alarms, not objective reality.",
      icon: Brain,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    },
    {
      title: isSk ? "Nenapísané kapitoly" : "The Unwritten Chapters",
      desc: isSk
        ? "Nemôžeš hodnotiť celú knihu svojho života podľa jednej náročnej kapitoly. Tí najlepší ľudia a najúprimnejší smiech ťa ešte len čakajú."
        : "You cannot judge the entire book of your life by a single difficult chapter. The best people you will ever meet and the greatest laughs are still ahead.",
      icon: SunMedium,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: isSk ? "Alchýmia bolesti (Sublimácia)" : "Alchemy of Pain (Sublimation)",
      desc: isSk
        ? "Veľké umenie, hlboká empatia a najsilnejšie príbehy sa rodia u ľudí, ktorí stáli v tme. Tvoja bolesť sa môže stať tvojou najväčšou silou."
        : "Great art, deep empathy, and groundbreaking resilience are born from people who have stood in the dark. Your pain can become your greatest creative superpower.",
      icon: Flame,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Navigation back */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors bg-slate-900/80 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-xl shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-rose-400" />
          <span>{isSk ? "← Späť na hlavnú stránku a krízové linky" : "← Back to Home & Crisis Help"}</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold tracking-wide border border-purple-500/30 shadow-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>{isSk ? "Premena bolesti na zmysel • 101 svetových inšpirácií" : "Perspective Shift & Meaning • 101 Global Inspirations"}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {isSk ? (
            <>
              Prečo na tvojom živote{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 text-transparent bg-clip-text">
                hlboko záleží
              </span>
            </>
          ) : (
            <>
              Why Your Existence{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 text-transparent bg-clip-text">
                Matters Profoundly
              </span>
            </>
          )}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {isSk
            ? "Keď prechádzame ťažkým obdobím, myseľ sa zúži na bolesť. Tu sú overené psychologické kotvy a skutočné príbehy ľudí, ktorí prešli najtemnejšími skúškami a našli cestu k svetlu."
            : "When you are in the thick of exhaustion, perspective narrows. Here are grounded psychological principles and real human stories of those who turned extreme suffering into enduring purpose."}
        </p>
      </div>

      {/* ======================================================== */}
      {/* TYPE 1: GEO-HERO SPOTLIGHT ("Hlas z tvojej krajiny")     */}
      {/* ======================================================== */}
      <div className="relative rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-slate-950 border border-purple-500/40 p-6 sm:p-8 shadow-2xl shadow-purple-950/40 backdrop-blur-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{spotlightFigure.flag}</span>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-300 uppercase tracking-wider bg-purple-500/20 px-2 py-0.5 rounded-md border border-purple-500/30">
                <Compass className="w-3 h-3 text-purple-400" />
                <span>{isSk ? "Hlas z tvojho regiónu / krajiny" : "Voice from Your Region"}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {spotlightFigure.name}
              </h2>
              <p className="text-xs text-slate-400">
                {spotlightFigure.countryName[langKey]} • {spotlightFigure.role[langKey]}
              </p>
            </div>
          </div>

          {/* Quick country switcher inside spotlight */}
          <div className="flex items-center gap-2">
            <label htmlFor="geo-hero-select" className="text-xs text-slate-400">
              {isSk ? "Vybrať krajinu:" : "Select country:"}
            </label>
            <select
              id="geo-hero-select"
              value={spotlightCode}
              onChange={(e) => setSpotlightCode(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:border-purple-400 focus:outline-none"
            >
              {INSPIRING_FIGURES.map((f) => (
                <option key={f.id} value={f.countryCode}>
                  {f.flag} {f.countryName[langKey]} ({f.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Spotlight Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Quote Box */}
          <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-3 relative">
            <Quote className="w-8 h-8 text-purple-400/30 absolute right-3 top-3 pointer-events-none" />
            <p className="text-sm sm:text-base text-purple-100 font-serif italic leading-relaxed">
              "{spotlightFigure.quote[langKey]}"
            </p>
            <p className="text-xs text-purple-300 font-semibold">
              — {spotlightFigure.name}
            </p>
          </div>

          {/* Story & Adversity */}
          <div className="space-y-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {isSk ? "Prekonaná skúška" : "Adversity Faced"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {spotlightFigure.adversity[langKey]}
            </p>
            <div className="pt-2 border-t border-slate-800/80 mt-2">
              <p className="text-xs text-slate-300 leading-relaxed">
                {spotlightFigure.transformation[langKey]}
              </p>
            </div>
          </div>

          {/* Key Psychological Takeaway */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-950/30 border border-purple-500/30 space-y-2">
            <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              <span>{isSk ? "Posolstvo pre tvoj dnešný deň" : "Takeaway for You Today"}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
              {spotlightFigure.takeaway[langKey]}
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FEATURED GLOBAL TITANS (NICK VUJICIC, FRANKL, MANDELA...)*/}
      {/* ======================================================== */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isSk ? "Globálni velikáni ľudskej nezlomnosti" : "Global Titans of Resilience"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {isSk
                ? "Osobnosti, ktoré prekonali zdanlivo neriešiteľné situácie a inšpirujú celý svet."
                : "Timeless figures who overcame unimaginable odds to light the path for humanity."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {globalTitans.map((figure) => (
            <div
              key={figure.id}
              className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4 glass-panel"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{figure.flag}</span>
                  <span className="text-[10px] text-purple-300 bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded-full font-medium">
                    {figure.countryName[langKey]}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{figure.name}</h3>
                  <p className="text-xs text-slate-400">{figure.role[langKey]}</p>
                </div>
                <p className="text-xs text-purple-200 italic font-serif leading-relaxed bg-purple-950/20 p-2.5 rounded-xl border border-purple-500/20">
                  "{figure.quote[langKey]}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {figure.adversity[langKey]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-purple-300 font-medium">
                💡 {figure.takeaway[langKey]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Psychological Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3 glass-panel hover:border-slate-700 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Sublimation & Cards Component */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-purple-950/30 via-slate-900/80 to-slate-950 border border-purple-500/30 glass-panel space-y-6">
        <SublimationCards />
      </div>

      {/* ======================================================== */}
      {/* ALL REGIONS & CONTINENTAL GALLERY                        */}
      {/* ======================================================== */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isSk ? "Galéria hrdinov podľa kontinentov" : "All Continental & European Figures"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {isSk
                ? "Objav inšpiratívne príbehy z každej európskej krajiny a kútov sveta."
                : "Explore inspiring stories from across Europe and the entire globe."}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isSk ? "Hľadať osobnosť alebo krajinu..." : "Search name or country..."}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-purple-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Continent filter pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: "all", label: isSk ? "🌍 Všetko" : "🌍 All" },
            { id: "europe", label: isSk ? "🏰 Európa" : "🏰 Europe" },
            { id: "americas", label: isSk ? "🌎 Amerika" : "🌎 Americas" },
            { id: "asia", label: isSk ? "🌏 Ázia" : "🌏 Asia" },
            { id: "africa", label: isSk ? "🏜️ Afrika" : "🏜️ Africa" },
            { id: "oceania", label: isSk ? "🌊 Oceánia" : "🌊 Oceania" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveContinent(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeContinent === tab.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of All Figures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFigures.map((fig) => (
            <div
              key={fig.id}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{fig.flag}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{fig.name}</h3>
                    <p className="text-[11px] text-slate-400">{fig.countryName[langKey]}</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-purple-200 italic font-serif">
                "{fig.quote[langKey]}"
              </p>
              <p className="text-[11px] text-slate-300 line-clamp-3 leading-relaxed">
                {fig.adversity[langKey]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Grounding & Help CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950/40 via-purple-950/40 to-slate-900 border border-purple-500/30 text-center space-y-4">
        <h2 className="text-lg font-bold text-white">
          {isSk ? "Potrebuješ sa práve teraz upokojiť alebo sa porozprávať?" : "Need to ground yourself right now or talk to someone?"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          {isSk
            ? "Zhlboka sa nadýchni. Nemusíš vyriešiť celý svoj život dnes. Stačí zvládnuť túto jednu minútu."
            : "Take a slow, deep breath. You do not have to conquer the whole mountain today. Just the next minute."}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/#crisis-support"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs transition-all shadow-lg shadow-rose-600/30 active:scale-95"
          >
            {isSk ? "Zobraziť krízové linky pomoci" : "View Crisis Helplines"}
          </Link>
          <Link
            href="/#relief-tools"
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 active:scale-95"
          >
            {isSk ? "Dýchacie a upokojujúce cvičenia" : "Breathing & Grounding Tools"}
          </Link>
        </div>
      </div>
    </div>
  );
}
