"use client";

/**
 * CrisisPanel Component
 * Comprehensive international crisis and emergency directory covering all 249 ISO 3166-1 
 * alpha-2 countries and autonomous territories (252 regional entities worldwide).
 * Features dual-row segmented navigation, live search filtering, smart locale detection,
 * and bilingual hotline display (Option B: Localized purpose + original native description).
 */

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  PhoneCall,
  MessageSquare,
  AlertTriangle,
  Users,
  HeartHandshake,
  ExternalLink,
  Clock,
  Search,
  Globe,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  CONTINENTS,
  COUNTRIES_DATA,
  ContinentId,
  CountryCrisisInfo,
  CrisisHotline,
  detectUserCountryCode,
} from "@/lib/crisis-data";
import { useLanguage } from "./language-context";
import { ReportModal } from "./report-modal";
import { getHotlineI18n } from "@/lib/hotline-i18n";

export interface CrisisPanelProps {
  initialCountryCode?: string;
}

/**
 * Localizes country name based on the user's active UI locale with fallback.
 */
export function getLocalizedCountryName(
  code: string,
  locale: string,
  fallbackName: string
): string {
  try {
    if (typeof Intl !== "undefined" && Intl.DisplayNames) {
      const displayNames = new Intl.DisplayNames([locale, "en"], { type: "region" });
      const localized = displayNames.of(code.toUpperCase());
      if (localized && localized.toLowerCase() !== code.toLowerCase()) {
        return localized;
      }
    }
  } catch (e) {
    // ignore and fallback
  }
  return fallbackName;
}

/**
 * Classifies hotline purpose and provides a crystal-clear localized summary in user's UI language.
 */
interface LocalizedHotlineSummary {
  badge: string;
  purpose: string;
}

function getLocalizedHotlineSummary(
  hotline: CrisisHotline,
  locale: string
): LocalizedHotlineSummary {
  const combined = `${hotline.name} ${hotline.description}`.toLowerCase();

  const isYouth =
    combined.includes("rat auf draht") ||
    combined.includes("kinder") ||
    combined.includes("jugend") ||
    combined.includes("child") ||
    combined.includes("youth") ||
    combined.includes("teen") ||
    combined.includes("ipčko") ||
    combined.includes("detsk") ||
    combined.includes("mlád") ||
    combined.includes("mlad") ||
    combined.includes("116111") ||
    combined.includes("116 111") ||
    combined.includes("147") ||
    combined.includes("kids");

  const isWomen =
    combined.includes("frauen") ||
    combined.includes("women") ||
    combined.includes("domestic") ||
    combined.includes("violence") ||
    combined.includes("násil") ||
    combined.includes("nasilie") ||
    combined.includes("femme") ||
    combined.includes("mujer");

  const isElderly =
    combined.includes("senior") ||
    combined.includes("elderly") ||
    combined.includes("alter") ||
    combined.includes("starší") ||
    combined.includes("starsi");

  const i18n = getHotlineI18n(locale);

  if (isYouth) {
    return {
      badge: i18n.youthBadge,
      purpose: i18n.youthPurpose,
    };
  }

  if (isWomen) {
    return {
      badge: i18n.womenBadge,
      purpose: i18n.womenPurpose,
    };
  }

  if (isElderly) {
    return {
      badge: i18n.elderlyBadge,
      purpose: i18n.elderlyPurpose,
    };
  }

  return {
    badge: i18n.crisisBadge,
    purpose: i18n.crisisPurpose,
  };
}

export function CrisisPanel({ initialCountryCode }: CrisisPanelProps) {
  const { currentLanguage, t } = useLanguage();
  const tc = t.crisis;
  const [targetType, setTargetType] = useState<"self" | "other">("self");

  // Determine the best initial country
  const defaultCountry = useMemo(() => {
    if (initialCountryCode) {
      const match = COUNTRIES_DATA.find((c) => c.code === initialCountryCode.toLowerCase().trim());
      if (match) return match;
    }
    const detected = detectUserCountryCode(undefined, currentLanguage.code);
    return COUNTRIES_DATA.find((c) => c.code === detected) || COUNTRIES_DATA.find((c) => c.code === "sk") || COUNTRIES_DATA[0];
  }, [initialCountryCode, currentLanguage.code]);

  const [selectedContinent, setSelectedContinent] = useState<ContinentId>(defaultCountry.continent);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(defaultCountry.code);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const continentsScrollRef = useRef<HTMLDivElement>(null);
  const countriesScrollRef = useRef<HTMLDivElement>(null);

  const scrollContinents = (direction: "left" | "right") => {
    if (continentsScrollRef.current) {
      const offset = direction === "left" ? -220 : 220;
      continentsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const scrollCountries = (direction: "left" | "right") => {
    if (countriesScrollRef.current) {
      const offset = direction === "left" ? -240 : 240;
      countriesScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Auto-detect country and continent on initial client mount if not already provided via server header
  useEffect(() => {
    if (!initialCountryCode) {
      const detectedCode = detectUserCountryCode(undefined, currentLanguage.code);
      const found = COUNTRIES_DATA.find((c) => c.code === detectedCode);
      if (found) {
        setSelectedCountryCode(found.code);
        setSelectedContinent(found.continent);
      }
    }
  }, [initialCountryCode, currentLanguage.code]);

  // Filter countries by continent & search query (matching localized name, native name, code, english name)
  const filteredCountries = useMemo(() => {
    let list = COUNTRIES_DATA;
    if (selectedContinent !== "all") {
      list = list.filter((c) => c.continent === selectedContinent);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((c) => {
        const localized = getLocalizedCountryName(c.code, currentLanguage.code, c.name).toLowerCase();
        return (
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          localized.includes(q) ||
          (c.nativeName && c.nativeName.toLowerCase().includes(q)) ||
          (c.regionNote && c.regionNote.toLowerCase().includes(q))
        );
      });
    }
    return list;
  }, [selectedContinent, searchQuery, currentLanguage.code]);

  // Selected country object
  const activeCountry: CountryCrisisInfo = useMemo(() => {
    return (
      COUNTRIES_DATA.find((c) => c.code === selectedCountryCode) ||
      filteredCountries[0] ||
      COUNTRIES_DATA[0]
    );
  }, [selectedCountryCode, filteredCountries]);

  // Localized active country name
  const localizedActiveCountryName = useMemo(() => {
    return getLocalizedCountryName(activeCountry.code, currentLanguage.code, activeCountry.name);
  }, [activeCountry, currentLanguage.code]);

  // Continent country counts for badges
  const continentCounts = useMemo(() => {
    const counts: Record<string, number> = { all: COUNTRIES_DATA.length };
    COUNTRIES_DATA.forEach((c) => {
      counts[c.continent] = (counts[c.continent] || 0) + 1;
    });
    return counts;
  }, []);

  const handleContinentSelect = (continentId: ContinentId) => {
    setSelectedContinent(continentId);
    setSearchQuery("");
    if (continentId !== "all") {
      const countryInContinent = COUNTRIES_DATA.find((c) => c.continent === continentId);
      if (countryInContinent && activeCountry.continent !== continentId) {
        setSelectedCountryCode(countryInContinent.code);
      }
    }
  };

  const handleCountrySelect = (code: string) => {
    setSelectedCountryCode(code);
    setIsDropdownOpen(false);
  };

  return (
    <section id="crisis-support" className="relative scroll-mt-20">
      {/* Background glow styling */}
      <div className="absolute -inset-x-4 -inset-y-6 bg-gradient-to-b from-rose-500/5 via-rose-500/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      <div className="relative rounded-3xl bg-slate-900/90 border border-rose-500/25 shadow-2xl shadow-rose-950/40 p-5 sm:p-7 md:p-8 space-y-6 backdrop-blur-xl">
        {/* ======================================================== */}
        {/* HEADER & EMERGENCY WARNING                               */}
        {/* ======================================================== */}
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
              <span>{tc.badge}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>
                <strong>{COUNTRIES_DATA.length}</strong> {tc.countriesAvailable}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {tc.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {tc.subtitle}
            </p>
          </div>

          {/* Critical Emergency Banner */}
          <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-rose-950/70 via-rose-900/50 to-slate-900 border border-rose-500/40 text-rose-100 flex items-start gap-3 shadow-md">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 animate-pulse" />
            <div className="text-xs sm:text-sm space-y-0.5">
              <p className="font-semibold text-white">
                {tc.emergencyWarning}
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TARGET MODE SELECTOR (FOR MYSELF / FOR SOMEONE ELSE)     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-950/70 border border-slate-800">
          <button
            type="button"
            onClick={() => setTargetType("self")}
            className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              targetType === "self"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{tc.modeSelf}</span>
          </button>
          <button
            type="button"
            onClick={() => setTargetType("other")}
            className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              targetType === "other"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{tc.modeOther}</span>
          </button>
        </div>

        {targetType === "self" ? (
          <div className="space-y-5">
            {/* ======================================================== */}
            {/* 3 IMMEDIATE ANCHOR STEPS                                 */}
            {/* ======================================================== */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-400" />
                {tc.anchorTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-rose-300 block">
                    {tc.anchorStep1Title}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {tc.anchorStep1Desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-rose-300 block">
                    {tc.anchorStep2Title}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {tc.anchorStep2Desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-rose-300 block">
                    {tc.anchorStep3Title}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {tc.anchorStep3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* DUAL-ROW NAVIGATION: CONTINENTS & COUNTRY CHIPS          */}
            {/* ======================================================== */}
            <div className="space-y-2.5 p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              {/* Row 1: Continents Tabs with Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollContinents("left")}
                  className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors shrink-0 active:scale-95"
                  title="Scroll left"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <div
                  ref={continentsScrollRef}
                  className="flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
                >
                  {CONTINENTS.map((c) => {
                    const isSelected = selectedContinent === c.id;
                    const count = continentCounts[c.id] || 0;
                    return (
                      <button
                        key={c.id}
                        onClick={() => handleContinentSelect(c.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                          isSelected
                            ? "bg-slate-800 text-rose-300 border border-rose-500/50 shadow-md shadow-rose-950/40"
                            : "bg-slate-900/90 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span>{c.icon}</span>
                        <span>{c.shortName}</span>
                        <span className="text-[10px] bg-slate-800/80 text-slate-400 px-1.5 py-0.2 rounded-full font-mono">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => scrollContinents("right")}
                  className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors shrink-0 active:scale-95"
                  title="Scroll right"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Row 2: Live Search & Country Selector */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={tc.searchCountryPlaceholder}
                      className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-rose-500/60 focus:ring-2 focus:ring-rose-500/20 text-xs text-white placeholder-slate-500 transition-all outline-none"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Quick Dropdown Toggle for Quick Jump */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
                    >
                      <span>{activeCountry.flag}</span>
                      <span className="hidden sm:inline">
                        {localizedActiveCountryName}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Popover list if dropdown is open */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 top-full mt-1.5 w-72 max-h-72 overflow-y-auto no-scrollbar bg-slate-900/98 border border-slate-700 rounded-2xl shadow-2xl p-1.5 z-50 backdrop-blur-xl">
                        <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1 border-b border-slate-800/80 mb-1 flex items-center justify-between">
                          <span>
                            {selectedContinent === "all"
                              ? tc.allCountriesInRegion
                              : `${tc.allCountriesInRegion} (${
                                  CONTINENTS.find((c) => c.id === selectedContinent)?.name || ""
                                })`}
                          </span>
                          <span className="text-rose-400 font-mono">
                            ({filteredCountries.length})
                          </span>
                        </div>
                        {filteredCountries.map((c) => {
                          const localizedName = getLocalizedCountryName(c.code, currentLanguage.code, c.name);
                          return (
                            <button
                              key={c.code}
                              onClick={() => handleCountrySelect(c.code)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                                c.code === activeCountry.code
                                  ? "bg-rose-600/30 text-rose-200 border border-rose-500/40 font-semibold"
                                  : "text-slate-300 hover:bg-slate-800/80"
                              }`}
                            >
                              <span className="flex items-center gap-2 truncate">
                                <span>{c.flag}</span>
                                <span className="truncate">{localizedName}</span>
                                {c.nativeName && c.nativeName !== localizedName && (
                                  <span className="text-[10px] text-slate-400 truncate">
                                    ({c.nativeName})
                                  </span>
                                )}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-1">
                                {c.code.toUpperCase()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Country Flag Chips Row with Arrow Controls */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <button
                    onClick={() => scrollCountries("left")}
                    className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 active:scale-90 shadow-sm"
                    title="Previous countries"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <div
                    ref={countriesScrollRef}
                    className="flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth pb-1 pt-0.5"
                    onWheel={(e) => {
                      if (e.deltaY !== 0) {
                        e.currentTarget.scrollLeft += e.deltaY;
                      }
                    }}
                  >
                    {filteredCountries.map((country) => {
                      const isSelected = country.code === activeCountry.code;
                      const localizedName = getLocalizedCountryName(country.code, currentLanguage.code, country.name);
                      return (
                        <button
                          key={country.code}
                          onClick={() => handleCountrySelect(country.code)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 active:scale-95 ${
                            isSelected
                              ? "bg-rose-600 text-white font-bold border border-rose-400 shadow-md shadow-rose-600/30 ring-2 ring-rose-500/40"
                              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-850"
                          }`}
                          title={`${localizedName} (${country.nativeName || country.name})`}
                        >
                          <span className="text-sm leading-none">{country.flag}</span>
                          <span>{localizedName}</span>
                          {country.regionNote && (
                            <span className="text-[9px] bg-rose-950/60 text-rose-300 px-1 rounded border border-rose-800/40">
                              {country.regionNote}
                            </span>
                          )}
                        </button>
                      );
                    })}
                    {filteredCountries.length === 0 && (
                      <div className="text-xs text-slate-400 py-1 px-2">
                        {tc.noResults}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => scrollCountries("right")}
                    className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 active:scale-90 shadow-sm"
                    title="Next countries"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* ACTIVE COUNTRY CRISIS CARD & BILINGUAL HOTLINES          */}
            {/* ======================================================== */}
            <div className="space-y-3 pt-1">
              {/* Country Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-850/90 to-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeCountry.flag}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {localizedActiveCountryName}
                      </h3>
                      {activeCountry.nativeName &&
                        activeCountry.nativeName.toLowerCase() !==
                          localizedActiveCountryName.toLowerCase() && (
                          <span className="text-xs text-slate-400">
                            ({activeCountry.nativeName})
                          </span>
                        )}
                      {activeCountry.name &&
                        activeCountry.name.toLowerCase() !==
                          localizedActiveCountryName.toLowerCase() &&
                        activeCountry.name.toLowerCase() !==
                          (activeCountry.nativeName || "").toLowerCase() && (
                          <span className="text-[11px] text-slate-500">
                            • {activeCountry.name}
                          </span>
                        )}
                    </div>
                    {activeCountry.regionNote && (
                      <p className="text-[11px] text-rose-300 font-medium">
                        Region: {activeCountry.regionNote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Emergency Services Badge */}
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    {tc.generalEmergency}
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-800/50">
                    🚨 {activeCountry.emergencyNumber}
                  </span>
                </div>
              </div>

              {/* Hotlines List for Selected Country (Option B: Bilingual) */}
              <div className="space-y-2.5">
                {activeCountry.hotlines.map((hotline, idx) => {
                  const summary = getLocalizedHotlineSummary(hotline, currentLanguage.code);
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-900/85 border border-slate-800/90 hover:border-slate-700/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:shadow-md"
                    >
                      <div className="space-y-1.5 flex-1 pr-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-bold text-white">
                            {hotline.name}
                          </span>
                          <span className="text-[10px] bg-rose-950/70 text-rose-200 border border-rose-800/50 px-2 py-0.5 rounded-md font-semibold">
                            {summary.badge}
                          </span>
                          {hotline.is24_7 && (
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-md border border-emerald-500/30 flex items-center gap-1 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {tc.available247}
                            </span>
                          )}
                          {hotline.isFree && (
                            <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded-md border border-sky-500/30 font-medium">
                              {tc.tollFree}
                            </span>
                          )}
                          {hotline.isChat && (
                            <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-md border border-purple-500/30 font-medium">
                              {tc.chat}
                            </span>
                          )}
                        </div>

                        {/* Primary: Localized Purpose in UI language */}
                        <p className="text-xs text-slate-200 font-medium leading-relaxed">
                          {summary.purpose}
                        </p>

                        {/* Secondary: Original Native Description */}
                        {hotline.description && (
                          <p className="text-[11px] text-slate-400 leading-snug">
                            <span className="text-slate-500 font-mono text-[10px] uppercase mr-1">
                              Orig:
                            </span>
                            {hotline.description}
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                        {hotline.phone && (
                          <a
                            href={`tel:${hotline.phone.replace(/\s+/g, "")}`}
                            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-rose-600/30 active:scale-95 border border-rose-400/40"
                            title={`${tc.callPrefix} ${hotline.name}`}
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>
                              {tc.callPrefix} {hotline.phone}
                            </span>
                          </a>
                        )}

                        {hotline.sms && (
                          <a
                            href={`sms:${hotline.sms.number}${
                              hotline.sms.keyword
                                ? `?body=${encodeURIComponent(hotline.sms.keyword)}`
                                : ""
                            }`}
                            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/30 active:scale-95 border border-sky-400/40"
                            title={`${tc.textPrefix} ${hotline.sms.number}`}
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>
                              {tc.textPrefix} {hotline.sms.keyword || hotline.sms.number}
                            </span>
                          </a>
                        )}

                        {hotline.website && (
                          <a
                            href={hotline.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors border border-slate-700"
                            title="Open website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Report Outdated Number Link */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate">
                  {tc.foundBrokenNumber.replace("{country}", localizedActiveCountryName)}
                </span>
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(true)}
                  className="text-rose-400 hover:text-rose-300 font-medium underline underline-offset-2 flex items-center gap-1 shrink-0 ml-2"
                >
                  <AlertTriangle className="w-3 h-3" />
                  <span>{tc.reportHotline}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* When someone else is in danger */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-3">
              <h3 className="text-sm font-bold text-amber-200 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                {tc.otherGuideTitle}
              </h3>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>{tc.otherStep1Title}:</strong> {tc.otherStep1Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>{tc.otherStep2Title}:</strong> {tc.otherStep2Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>{tc.otherStep3Title}:</strong> {tc.otherStep3Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>{tc.otherStep4Title}:</strong> {tc.otherStep4Desc}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>{tc.otherNeedGuide}</span>
              <a
                href="https://www.befrienders.org/how-to-support-someone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
              >
                {tc.otherGuideLink} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Report Modal */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        defaultCountry={localizedActiveCountryName}
      />
    </section>
  );
}
