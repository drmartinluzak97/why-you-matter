"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Mail, Linkedin, Globe, AlertTriangle } from "lucide-react";
import { useLanguage } from "./language-context";
import { ReportModal } from "./report-modal";

export function Footer() {
  const { t } = useLanguage();
  const tf = t.footer;
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <>
      <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 mt-20 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Two clean columns: Project Mission & Safety Ethics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1: why-you-matter.org */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-sky-400" />
                </div>
                <span className="font-bold text-base text-white">why-you-matter.org</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
                {tf.copyright}
              </p>
            </div>

            {/* Column 2: Safety & Ethics */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {tf.sanctuaryNotice}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
                {tf.emergencyReminder}
              </p>
            </div>
          </div>

          {/* Author, Contact & Report Issue section */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                {tf.createdWithLove}
              </div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Martin Lužák</span>
                <a
                  href="https://martinluzak.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-normal text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>martinluzak.sk</span>
                </a>
              </div>
            </div>

            {/* Actions: Report button + Email + LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
              {/* Report Issue / Outdated number button */}
              <button
                onClick={() => setIsReportOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all font-medium active:scale-95 shadow-xs"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>{tf.reportButton}</span>
              </button>

              {/* Direct email link */}
              <a
                href="mailto:hello@martinluzak.sk"
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-slate-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
                <span className="font-mono text-xs">hello@martinluzak.sk</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/martinluzak"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
                <span className="font-mono text-xs hidden lg:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} why-you-matter.org · All rights reserved</p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Anonymous & Private</span>
            </div>
          </div>
        </div>
      </footer>

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </>
  );
}
