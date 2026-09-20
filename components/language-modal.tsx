"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./language-context";
import { Globe, X, Check, Search, Sparkles } from "lucide-react";
import { Locale } from "@/lib/i18n/types";

export function LanguageModal() {
  const {
    isLanguageModalOpen,
    setIsLanguageModalOpen,
    locale,
    setLocale,
    languages,
    t,
  } = useLanguage();
  const [search, setSearch] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLanguageModalOpen(false);
      }
    };
    if (isLanguageModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLanguageModalOpen, setIsLanguageModalOpen]);

  if (!isLanguageModalOpen) return null;

  const filteredLanguages = languages.filter((lang) => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    return (
      lang.name.toLowerCase().includes(query) ||
      lang.nativeName.toLowerCase().includes(query) ||
      lang.region.toLowerCase().includes(query) ||
      lang.code.toLowerCase().includes(query)
    );
  });

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsLanguageModalOpen(false);
    setSearch("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl shadow-sky-950/50 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-inner">
              <Globe className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {t.nav.selectLanguageTitle}
                <Sparkles className="w-4 h-4 text-sky-400" />
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {t.nav.languageCountNotice}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsLanguageModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label={t.nav.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.nav.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              autoFocus
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded-md"
              >
                {t.nav.clearSearch}
              </button>
            )}
          </div>
        </div>

        {/* Languages Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredLanguages.map((lang) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`group relative flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-500/15 to-indigo-500/15 border-sky-500/50 shadow-md shadow-sky-500/10"
                      : "bg-slate-800/40 border-slate-800/90 hover:bg-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl select-none shrink-0 group-hover:scale-110 transition-transform">
                      {lang.flag}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`font-semibold text-sm truncate ${
                            isSelected
                              ? "text-sky-300"
                              : "text-slate-200 group-hover:text-white"
                          }`}
                        >
                          {lang.nativeName}
                        </span>
                        {lang.name !== lang.nativeName && (
                          <span className="text-xs text-slate-400 truncate">
                            ({lang.name})
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block truncate font-mono">
                        {lang.region}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm shadow-sky-400/50">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {filteredLanguages.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm text-slate-400">
                {t.crisis.noResults}
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.nav.geoDetectionEnabled}
          </span>
          <button
            onClick={() => setIsLanguageModalOpen(false)}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            {t.nav.close}
          </button>
        </div>
      </div>
    </div>
  );
}
