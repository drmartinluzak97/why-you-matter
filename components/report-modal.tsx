"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  AlertTriangle,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "./language-context";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountry?: string;
  defaultType?: "outdated_number" | "feedback";
}

export function ReportModal({
  isOpen,
  onClose,
  defaultCountry = "",
  defaultType = "outdated_number",
}: ReportModalProps) {
  const { t } = useLanguage();
  const trm = t.reportModal;
  const [reportType, setReportType] = useState<"outdated_number" | "feedback">(defaultType);
  const [country, setCountry] = useState(defaultCountry);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setReportType(defaultType);
      if (defaultCountry) setCountry(defaultCountry);
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen, defaultType, defaultCountry]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");

    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage(trm.messageLabel + " (min. 5)");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          country: country.trim(),
          reportType,
          message: message.trim(),
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delivery failed. Please email directly to hello@martinluzak.sk.");
      }

      setSubmitStatus("success");
      setMessage("");
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Unable to submit report right now. Please email directly to hello@martinluzak.sk.";
      setErrorMessage(msg);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const REPORT_TYPES = [
    {
      id: "outdated_number" as const,
      label: trm.categoryOutdated,
      sublabel: trm.categoryOutdatedDesc,
      icon: AlertTriangle,
      color: "text-rose-400",
      activeBg: "bg-rose-500/20 border-rose-500/40 text-rose-300",
    },
    {
      id: "feedback" as const,
      label: trm.categoryFeedback,
      sublabel: trm.categoryFeedbackDesc,
      icon: MessageSquare,
      color: "text-sky-400",
      activeBg: "bg-sky-500/20 border-sky-500/40 text-sky-300",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-slate-900/95 border border-slate-700/80 rounded-3xl shadow-2xl shadow-rose-950/40 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-inner">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {trm.title}
              </h3>
              <p className="text-xs text-slate-400">
                {trm.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label={trm.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 custom-scrollbar">
          {submitStatus === "success" ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">{trm.successTitle}</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {trm.successDesc}
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
                >
                  {trm.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 2 Choices for Category */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  {trm.categoryLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {REPORT_TYPES.map((tItem) => {
                    const Icon = tItem.icon;
                    const isCurrent = reportType === tItem.id;
                    return (
                      <button
                        type="button"
                        key={tItem.id}
                        onClick={() => setReportType(tItem.id)}
                        className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                          isCurrent
                            ? tItem.activeBg
                            : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/60 text-slate-400"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${tItem.color}`} />
                        <div className="min-w-0">
                          <span className="text-xs font-bold block text-white">
                            {tItem.label}
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            {tItem.sublabel}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Country and Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    {trm.countryLabel}
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder={trm.countryPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    {trm.emailLabel} <span className="text-slate-500 font-normal">({trm.optional})</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={trm.emailPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  {trm.messageLabel} <span className="text-rose-400">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                  placeholder={trm.messagePlaceholder}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-rose-400 transition-colors resize-none"
                />
              </div>

              {/* Honeypot field for bot protection */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error Notification */}
              {submitStatus === "error" && errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`mailto:hello@martinluzak.sk?subject=${encodeURIComponent(
                    `[Why-You-Matter Report] ${reportType} (${country || "Global"})`
                  )}&body=${encodeURIComponent(message)}`}
                  className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors font-mono"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{trm.openEmailApp}</span>
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex-1 sm:flex-none"
                  >
                    {trm.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 disabled:opacity-40 text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition-all active:scale-95 flex-1 sm:flex-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{trm.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{trm.submitButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            {trm.footerNotice}
          </span>
        </div>
      </div>
    </div>
  );
}
