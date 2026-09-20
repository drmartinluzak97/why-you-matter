"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Trees, EyeOff, Search, CloudSun, CheckSquare, FileText, ArrowLeft, Sparkles } from "lucide-react";
import { useLanguage } from "./language-context";
import { NatureDistractionModal } from "./nature-modal";

export function PanicButton() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showNatureModal, setShowNatureModal] = useState(false);
  const [isDisguised, setIsDisguised] = useState(false);
  const [disguiseTab, setDisguiseTab] = useState<"weather" | "docs" | "tasks">("weather");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when disguised
  useEffect(() => {
    if (isDisguised) {
      const original = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isDisguised]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isDisguised) {
          setIsDisguised(false);
        } else if (!showNatureModal) {
          setShowNatureModal(true);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNatureModal, isDisguised]);

  const disguiseOverlay = isDisguised && mounted ? (
    <div className="fixed inset-0 z-[999999] bg-[#f8fafc] text-slate-800 font-sans flex flex-col h-screen w-screen overflow-auto select-none">
      {/* Fake Browser Toolbar / Top Navigation */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-xs shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              W
            </div>
            <span className="font-semibold text-slate-800 text-sm">WorkSpace Pro</span>
          </div>

          <nav className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setDisguiseTab("weather")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-colors ${
                disguiseTab === "weather" ? "bg-slate-100 text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CloudSun className="w-3.5 h-3.5" />
              <span>Dashboard & Weather</span>
            </button>
            <button
              onClick={() => setDisguiseTab("docs")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-colors ${
                disguiseTab === "docs" ? "bg-slate-100 text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Project Brief</span>
            </button>
            <button
              onClick={() => setDisguiseTab("tasks")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-colors ${
                disguiseTab === "tasks" ? "bg-slate-100 text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Weekly Sprint</span>
            </button>
          </nav>
        </div>

        {/* Exit discrete button */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              readOnly
              value="Search documentation or tickets..."
              className="bg-slate-100 border border-slate-200 rounded-lg pl-8 pr-4 py-1.5 text-xs text-slate-600 w-64 focus:outline-none"
            />
          </div>
          <button
            onClick={() => setIsDisguised(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-300 transition-colors"
            title="Return to site"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return (Esc)</span>
          </button>
        </div>
      </header>

      {/* Disguise Main View */}
      <main className="flex-1 p-6 sm:p-8 max-w-6xl mx-auto w-full space-y-6">
        {disguiseTab === "weather" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-900">Regional Environmental & Office Metrics</h1>
                <p className="text-xs text-slate-500">Updated: Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
                Systems Optimal
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">Local Forecast</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-slate-900">22°C</span>
                  <span className="text-sm text-slate-500">Partly Cloudy</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-100">
                  <div className="flex justify-between"><span>Humidity</span><span className="font-semibold">44%</span></div>
                  <div className="flex justify-between"><span>Wind</span><span className="font-semibold">9 km/h NW</span></div>
                  <div className="flex justify-between"><span>Air Quality</span><span className="font-semibold text-emerald-600">Good (AQI 24)</span></div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Active Workstream</span>
                <div className="text-base font-bold text-slate-900">Q3 Enterprise Infrastructure</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Routine server maintenance completed. CDN latency within baseline thresholds across all edge locations.
                </p>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-4/5" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Calendar Agenda</span>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold block">Team Sync & Retrospective</span>
                      <span className="text-[11px] text-slate-500">14:00 - 14:45 • Room B</span>
                    </div>
                    <span className="text-[11px] text-blue-600 font-medium">In 15m</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold block">Architecture Review</span>
                      <span className="text-[11px] text-slate-500">16:00 - 17:00 • Virtual</span>
                    </div>
                    <span className="text-[11px] text-slate-500">Later</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {disguiseTab === "docs" && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <h1 className="text-2xl font-bold text-slate-900">Q3 Product Specification & Roadmap</h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              This document outlines the core architectural milestones for the upcoming development cycle. Key focus areas include latency reduction, enhanced data synchronization, and accessibility improvements across mobile platforms.
            </p>
            <div className="border-t border-slate-100 pt-4 space-y-3">
              <h2 className="text-base font-semibold text-slate-800">1. Architectural Objectives</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensure zero downtime migrations during database maintenance windows. Increase cache hit ratio by 15% through localized edge computing caches.
              </p>
            </div>
          </div>
        )}

        {disguiseTab === "tasks" && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h1 className="text-xl font-bold text-slate-900">Sprint Backlog (Sprint 42)</h1>
            <div className="space-y-2">
              <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">INFRA-802: Refactor edge cache headers</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Done</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">FE-312: Update component accessibility labels</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">In Progress</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">BE-109: Audit security headers and CSP rules</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">To Do</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  ) : null;

  return (
    <>
      <div className="flex items-center gap-2">
        {/* 1st: Emergency Nature & More Button */}
        <button
          onClick={() => setShowNatureModal(true)}
          className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95"
          title={t.nav.emergencyNatureTitle}
        >
          <Trees className="w-3.5 h-3.5 text-teal-400 group-hover:rotate-12 transition-transform" />
          <span>{t.nav.emergencyNature}</span>
        </button>

        {/* 2nd: Motivation Page Link */}
        <Link
          href="/motivation"
          className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 text-xs font-medium transition-all hover:text-purple-100 hover:scale-[1.03] active:scale-95 shadow-xs"
          title={t.nav.motivationTitle}
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
          <span>{t.nav.motivation}</span>
        </Link>

        {/* 3rd: Quick Disguise Button */}
        <button
          onClick={() => setIsDisguised(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 text-xs font-medium transition-all hover:text-white active:scale-95"
          title={t.nav.disguiseTitle}
        >
          <EyeOff className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.nav.disguise}</span>
        </button>
      </div>

      {/* Disguise Portal */}
      {disguiseOverlay ? createPortal(disguiseOverlay, document.body) : null}

      {/* Nature & More Modal */}
      <NatureDistractionModal
        isOpen={showNatureModal}
        onClose={() => setShowNatureModal(false)}
      />
    </>
  );
}
