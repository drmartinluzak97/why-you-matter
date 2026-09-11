"use client";

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
  detectUserCountryCode,
} from "@/lib/crisis-data";

export function CrisisPanel() {
  const [targetType, setTargetType] = useState<"self" | "other">("self");
  const [selectedContinent, setSelectedContinent] = useState<ContinentId>("all");
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("sk");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

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

  // Auto-detect country and continent on initial client mount
  useEffect(() => {
    const detectedCode = detectUserCountryCode();
    const found = COUNTRIES_DATA.find((c) => c.code === detectedCode);
    if (found) {
      setSelectedCountryCode(found.code);
      setSelectedContinent(found.continent);
    }
  }, []);

  // Filter countries by continent & search query
  const filteredCountries = useMemo(() => {
    let list = COUNTRIES_DATA;
    if (selectedContinent !== "all") {
      list = list.filter((c) => c.continent === selectedContinent);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          (c.nativeName && c.nativeName.toLowerCase().includes(q)) ||
          (c.regionNote && c.regionNote.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedContinent, searchQuery]);

  // Selected country object
  const activeCountry: CountryCrisisInfo = useMemo(() => {
    return (
      COUNTRIES_DATA.find((c) => c.code === selectedCountryCode) ||
      filteredCountries[0] ||
      COUNTRIES_DATA[0]
    );
  }, [selectedCountryCode, filteredCountries]);

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
    // If the currently selected country is not in this continent, pick the first one
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
    const country = COUNTRIES_DATA.find((c) => c.code === code);
    if (country && selectedContinent !== "all" && country.continent !== selectedContinent) {
      setSelectedContinent(country.continent);
    }
  };

  return (
    <div className="rounded-3xl p-5 sm:p-7 border border-rose-500/30 bg-gradient-to-b from-rose-950/40 via-slate-900/90 to-slate-950/95 glass-panel backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-5 relative z-10">
        {/* Card Header & Badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold tracking-wide border border-rose-500/30 mb-2 shadow-xs">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>Immediate Support Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              In Crisis or Threat
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              If life, safety, or mental stability is under immediate risk, help is accessible worldwide 24/7.
            </p>
          </div>
        </div>

        {/* Mode Selector (Self vs Other) */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950/70 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <button
            onClick={() => setTargetType("self")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              targetType === "self"
                ? "bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg shadow-rose-600/30 border border-rose-400/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span>I am in danger</span>
          </button>
          <button
            onClick={() => setTargetType("other")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              targetType === "other"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/30 border border-amber-400/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Someone else is in danger</span>
          </button>
        </div>

        {targetType === "self" ? (
          <div className="space-y-5">
            {/* Quick 3-Step Emergency Action Card */}
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40 space-y-2.5 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>The 3-Step Emergency Anchor</span>
              </div>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">1.</span>
                  <span><strong>Physical Pause:</strong> Put both feet flat on the floor and take 3 deep, slow breaths.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">2.</span>
                  <span><strong>Temperature Shock:</strong> Hold an ice cube or splash cold water on your face.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">3.</span>
                  <span><strong>Reach Out:</strong> Connect with one of the free, anonymous hotlines below.</span>
                </li>
              </ul>
            </div>

            {/* ======================================================== */}
            {/* DUAL-ROW CONTINENT & COUNTRY SELECTOR                     */}
            {/* ======================================================== */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between text-xs text-slate-400 px-0.5">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-rose-400" />
                  <span>Select Region & Country:</span>
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
                  {COUNTRIES_DATA.length} Countries Available
                </span>
              </div>

              {/* ROW 1: CONTINENT TABS (Segmented Glass Container with Arrow Controls) */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollContinents("left")}
                  className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 active:scale-90 shadow-sm"
                  title="Scroll left"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <div
                  ref={continentsScrollRef}
                  className="flex-1 p-1 bg-slate-950/80 rounded-2xl border border-slate-800/90 shadow-inner backdrop-blur-md overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-1"
                  onWheel={(e) => {
                    if (e.deltaY !== 0) {
                      e.currentTarget.scrollLeft += e.deltaY;
                    }
                  }}
                >
                  {CONTINENTS.map((cont) => {
                    const isActive = selectedContinent === cont.id;
                    const count = continentCounts[cont.id] || 0;
                    return (
                      <button
                        key={cont.id}
                        onClick={() => handleContinentSelect(cont.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 flex-1 justify-center shrink-0 ${
                          isActive
                            ? "bg-gradient-to-r from-rose-500/25 via-indigo-500/25 to-purple-500/25 text-white border border-rose-400/50 shadow-md shadow-rose-500/10 font-bold"
                            : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                        }`}
                      >
                        <span>{cont.icon}</span>
                        <span>{cont.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive
                              ? "bg-rose-500/30 text-rose-200 border border-rose-400/30"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => scrollContinents("right")}
                  className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 active:scale-90 shadow-sm"
                  title="Scroll right"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* ROW 2: COUNTRY SELECTOR & SEARCH BAR */}
              <div className="space-y-2">
                {/* Search & Quick Dropdown Toggle Bar */}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search country, code or Mesopotamia..."
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-8 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Dropdown toggle button for fast switching */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors"
                    >
                      <span className="text-sm">{activeCountry.flag}</span>
                      <span>{activeCountry.code.toUpperCase()}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Popover list if dropdown is open */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 top-full mt-1.5 w-64 max-h-72 overflow-y-auto no-scrollbar bg-slate-900/98 border border-slate-700 rounded-2xl shadow-2xl p-1.5 z-50 backdrop-blur-xl">
                        <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1 border-b border-slate-800/80 mb-1 flex items-center justify-between">
                          <span>
                            {selectedContinent === "all"
                              ? "All Countries in This Region"
                              : `Countries in ${
                                  CONTINENTS.find((c) => c.id === selectedContinent)?.name ||
                                  "This Region"
                                }`}
                          </span>
                          <span className="text-rose-400 font-mono">
                            ({filteredCountries.length})
                          </span>
                        </div>
                        {filteredCountries.map((c) => (
                          <button
                            key={c.code}
                            onClick={() => handleCountrySelect(c.code)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                              c.code === activeCountry.code
                                ? "bg-rose-600/30 text-rose-200 border border-rose-500/40 font-semibold"
                                : "text-slate-300 hover:bg-slate-800/80"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span>{c.flag}</span>
                              <span className="truncate">{c.name}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {c.code.toUpperCase()}
                            </span>
                          </button>
                        ))}
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
                      return (
                        <button
                          key={country.code}
                          onClick={() => handleCountrySelect(country.code)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 active:scale-95 ${
                            isSelected
                              ? "bg-rose-600 text-white font-bold border border-rose-400 shadow-md shadow-rose-600/30 ring-2 ring-rose-500/40"
                              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-850"
                          }`}
                          title={`${country.name} (${country.nativeName || ""})`}
                        >
                          <span className="text-sm leading-none">{country.flag}</span>
                          <span>{country.name}</span>
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
                        No country matched "{searchQuery}". Try searching another name or reset filter.
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
            {/* ACTIVE COUNTRY CRISIS CARD & HOTLINES                    */}
            {/* ======================================================== */}
            <div className="space-y-3 pt-1">
              {/* Country Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-850/90 to-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeCountry.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {activeCountry.name}
                      </h3>
                      {activeCountry.nativeName && (
                        <span className="text-xs text-slate-400">
                          ({activeCountry.nativeName})
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
                    General Emergency
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-800/50">
                    🚨 {activeCountry.emergencyNumber}
                  </span>
                </div>
              </div>

              {/* Hotlines List for Selected Country */}
              <div className="space-y-2.5">
                {activeCountry.hotlines.map((hotline, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-900/85 border border-slate-800/90 hover:border-slate-700/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {hotline.name}
                        </span>
                        {hotline.is24_7 && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-md border border-emerald-500/30 flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            24/7
                          </span>
                        )}
                        {hotline.isFree && (
                          <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded-md border border-sky-500/30 font-medium">
                            Free
                          </span>
                        )}
                        {hotline.isChat && (
                          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-md border border-purple-500/30 font-medium">
                            Chat
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {hotline.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                      {hotline.phone && (
                        <a
                          href={`tel:${hotline.phone.replace(/\s+/g, "")}`}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-rose-600/30 active:scale-95 border border-rose-400/40"
                          title={`Call ${hotline.name}`}
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>Call {hotline.phone}</span>
                        </a>
                      )}

                      {hotline.sms && (
                        <a
                          href={`sms:${hotline.sms.number}${
                            hotline.sms.keyword ? `?body=${encodeURIComponent(hotline.sms.keyword)}` : ""
                          }`}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/30 active:scale-95 border border-sky-400/40"
                          title={`Text ${hotline.sms.number}`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Text {hotline.sms.keyword || hotline.sms.number}</span>
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
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* When someone else is in danger */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-3">
              <h3 className="text-sm font-bold text-amber-200 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                How to Handle Someone in Crisis
              </h3>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Stay with them:</strong> Do not leave them alone if there is active danger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Ask directly & calmly:</strong> "Are you thinking about hurting yourself?" Asking directly opens the door, it does not cause harm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Listen without debating:</strong> Avoid saying "You have so much to live for." Instead say: "I am here with you, and you don't have to face this alone."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Involve Emergency Services:</strong> Call 112 / 911 if there is an immediate medical or physical risk.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Need step-by-step guidance on how to support?</span>
              <a
                href="https://www.befrienders.org/how-to-support-someone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
              >
                Guide <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-800/80 mt-5 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Confidential, free & verified</span>
        </span>
        <span>You are worthy of support</span>
      </div>
    </div>
  );
}
