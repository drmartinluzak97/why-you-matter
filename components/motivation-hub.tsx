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
  Compass,
  Search,
  CheckCircle2,
  Heart,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "./language-context";
import { INSPIRING_FIGURES, InspiringFigure } from "@/lib/motivation-data";
import { SublimationCards } from "./sublimation-cards";
import { detectUserCountryCode } from "@/lib/crisis-data";
import { getLocalizedCountryName } from "./crisis-panel";

export interface MotivationHubProps {
  initialCountryCode?: string;
}

export function MotivationHub({ initialCountryCode }: MotivationHubProps) {
  const { currentLanguage, locale, t } = useLanguage();
  const mp = t.motivationPage;
  const isSk = locale === "sk";
  const langKey: "sk" | "en" = isSk ? "sk" : "en";

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

  // Global Titans (5 Featured Figures)
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
      list = list.filter((f) => {
        const localizedCountry = getLocalizedCountryName(
          f.countryCode,
          locale,
          f.countryName[langKey] || f.countryName.en
        ).toLowerCase();

        return (
          f.name.toLowerCase().includes(q) ||
          f.countryName[langKey].toLowerCase().includes(q) ||
          localizedCountry.includes(q) ||
          f.role[langKey].toLowerCase().includes(q)
        );
      });
    }
    return list;
  }, [activeContinent, searchQuery, langKey, locale]);

  // 3 Psychological Pillars (Cognitive Noise, Unwritten Chapters, Alchemy of Pain)
  const pillars = useMemo(() => {
    if (!mp) return [];
    return [
      {
        title: mp.pillars.noiseTitle,
        desc: mp.pillars.noiseDesc,
        icon: Brain,
        badge: "01",
        color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
        glow: "hover:border-sky-500/40 hover:shadow-sky-950/20",
      },
      {
        title: mp.pillars.chaptersTitle,
        desc: mp.pillars.chaptersDesc,
        icon: SunMedium,
        badge: "02",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        glow: "hover:border-amber-500/40 hover:shadow-amber-950/20",
      },
      {
        title: mp.pillars.alchemyTitle,
        desc: mp.pillars.alchemyDesc,
        icon: Flame,
        badge: "03",
        color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
        glow: "hover:border-purple-500/40 hover:shadow-purple-950/20",
      },
    ];
  }, [mp]);

  if (!mp) return null;

  const spotlightCountryName = getLocalizedCountryName(
    spotlightFigure.countryCode,
    locale,
    spotlightFigure.countryName[langKey] || spotlightFigure.countryName.en
  );

  return (
    <div className="space-y-10 lg:space-y-12">
      {/* ======================================================== */}
      {/* 1. TOP HERO HEADER (FULL WIDTH)                          */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors bg-slate-900/90 border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-xl shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-rose-400" />
            <span>{mp.backToHome}</span>
          </Link>
        </div>

        <div className="space-y-2.5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold tracking-wide border border-purple-500/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{mp.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {mp.titlePart1}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 text-transparent bg-clip-text">
              {mp.titleHighlight}
            </span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            {mp.description}
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. SIDE-BY-SIDE BENTO: GEO-HERO SPOTLIGHT & 3 PILLARS    */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* LEFT BLOCK (7 Columns): Geo-Hero Spotlight */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900/95 to-slate-950 border border-purple-500/40 p-6 sm:p-7 shadow-2xl shadow-purple-950/40 backdrop-blur-xl space-y-5 flex-1 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-500/20 pb-3.5">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl">{spotlightFigure.flag}</span>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-purple-300 uppercase tracking-wider bg-purple-500/20 px-2 py-0.5 rounded-md border border-purple-500/30">
                    <Compass className="w-3 h-3 text-purple-400" />
                    <span>{mp.spotlightBadge}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {spotlightFigure.name}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {spotlightCountryName} • {spotlightFigure.role[langKey]}
                  </p>
                </div>
              </div>

              {/* Country dropdown */}
              <div className="flex items-center gap-2">
                <select
                  id="geo-hero-select"
                  value={spotlightCode}
                  onChange={(e) => setSpotlightCode(e.target.value)}
                  className="bg-slate-900/90 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:border-purple-400 focus:outline-none cursor-pointer"
                >
                  {INSPIRING_FIGURES.map((f) => {
                    const locName = getLocalizedCountryName(
                      f.countryCode,
                      locale,
                      f.countryName[langKey] || f.countryName.en
                    );
                    return (
                      <option key={f.id} value={f.countryCode}>
                        {f.flag} {locName} ({f.name})
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Spotlight Quote & Story */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 relative">
                <Quote className="w-6 h-6 text-purple-400/30 absolute right-3 top-3 pointer-events-none" />
                <p className="text-sm sm:text-base text-purple-100 font-serif italic leading-relaxed pr-6">
                  "{spotlightFigure.quote[langKey]}"
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 space-y-1.5 leading-relaxed bg-slate-900/70 p-3.5 rounded-2xl border border-slate-800">
                <p>
                  <strong className="text-slate-200">{mp.spotlightAdversity}:</strong>{" "}
                  {spotlightFigure.adversity[langKey]}
                </p>
                <p className="text-slate-400 text-xs pt-1 border-t border-slate-800/80">
                  {spotlightFigure.transformation[langKey]}
                </p>
              </div>
            </div>

            {/* Daily Takeaway Footer */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-950/30 to-purple-900/30 border border-purple-500/30 flex items-center gap-2.5 text-xs text-purple-200">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                <strong className="text-white">{mp.spotlightTakeaway}:</strong>{" "}
                {spotlightFigure.takeaway[langKey]}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT BLOCK (5 Columns): 3 Psychological Pillars */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
          <div className="flex items-center justify-between pb-0.5">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>{mp.pillars.title}</span>
            </h3>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded-md">
              {mp.pillars.badge}
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-800/90 shadow-md transition-all flex flex-col justify-center space-y-2 ${p.glow}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center border ${p.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {p.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      #{p.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pl-0.5">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MIDDLE SECTION: SUBLIMATION & COGNITIVE ALCHEMY MATRIX*/}
      {/* ======================================================== */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-purple-950/25 via-slate-900/90 to-slate-950 border border-purple-500/30 glass-panel shadow-xl">
        <SublimationCards />
      </div>

      {/* ======================================================== */}
      {/* 3. FEATURED GLOBAL TITANS (NICK VUJICIC, FRANKL, MANDELA) */}
      {/* ======================================================== */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {mp.globalTitansTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {mp.globalTitansSubtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-full self-start sm:self-auto">
            {globalTitans.length} Svetových Velikánov
          </span>
        </div>

        {/* 5-Column Widescreen Desktop Grid / Responsive Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4.5">
          {globalTitans.map((figure) => {
            const locCountry = getLocalizedCountryName(
              figure.countryCode,
              locale,
              figure.countryName[langKey] || figure.countryName.en
            );

            return (
              <div
                key={figure.id}
                className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg hover:shadow-purple-950/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{figure.flag}</span>
                    <span className="text-[10px] text-purple-300 bg-purple-950/80 border border-purple-800/50 px-2 py-0.5 rounded-full font-medium">
                      {locCountry}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {figure.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      {figure.role[langKey]}
                    </p>
                  </div>

                  <p className="text-xs text-purple-200 italic font-serif leading-relaxed bg-purple-950/30 p-2.5 rounded-xl border border-purple-500/20">
                    "{figure.quote[langKey]}"
                  </p>

                  <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-4">
                    {figure.adversity[langKey]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-purple-300 font-medium leading-snug">
                  💡 {figure.takeaway[langKey]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. ALL CONTINENTAL & EUROPEAN GALLERY (4-COLUMNS ON DESKTOP) */}
      {/* ======================================================== */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {mp.galleryTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {mp.gallerySubtitle}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={mp.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-purple-500 text-xs text-white placeholder-slate-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Continent filter pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: "all", label: mp.continents.all },
            { id: "europe", label: mp.continents.europe },
            { id: "americas", label: mp.continents.americas },
            { id: "asia", label: mp.continents.asia },
            { id: "africa", label: mp.continents.africa },
            { id: "oceania", label: mp.continents.oceania },
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

        {/* 4-Column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4.5">
          {filteredFigures.map((fig) => {
            const locCountry = getLocalizedCountryName(
              fig.countryCode,
              locale,
              fig.countryName[langKey] || fig.countryName.en
            );

            return (
              <div
                key={fig.id}
                className="p-4.5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-850/90 transition-all space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{fig.flag}</span>
                      <div>
                        <h3 className="text-sm font-bold text-white leading-snug">
                          {fig.name}
                        </h3>
                        <p className="text-[11px] text-slate-400">{locCountry}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-purple-200 italic font-serif bg-purple-950/20 p-2 rounded-xl border border-purple-500/10">
                    "{fig.quote[langKey]}"
                  </p>

                  <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
                    {fig.adversity[langKey]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[10px] text-purple-300">
                  💡 {fig.takeaway[langKey]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 5. GROUNDING & HELP CTA BOX (FULL WIDTH)                  */}
      {/* ======================================================== */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-950/40 via-purple-950/40 to-slate-900 border border-purple-500/30 text-center space-y-4 shadow-xl">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          {mp.cta.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          {mp.cta.desc}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/#crisis-support"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs transition-all shadow-lg shadow-rose-600/30 active:scale-95"
          >
            {mp.cta.crisisButton}
          </Link>
          <Link
            href="/#relief-tools"
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 active:scale-95"
          >
            {mp.cta.toolsButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
