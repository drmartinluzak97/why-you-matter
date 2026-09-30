"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, LanguageInfo, TranslationDictionary } from "@/lib/i18n/types";
import {
  LANGUAGES,
  DICTIONARIES,
  getLocaleFromCountry,
  getLocaleFromBrowser,
} from "@/lib/i18n/languages";
import { usePathname } from "next/navigation";

interface LanguageContextType {
  locale: Locale;
  t: TranslationDictionary;
  setLocale: (locale: Locale) => void;
  currentLanguage: LanguageInfo;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (open: boolean) => void;
  languages: LanguageInfo[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "wym_language";

export function LanguageProvider({
  children,
  initialCountryCode,
}: {
  children: React.ReactNode;
  initialCountryCode?: string;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return getLocaleFromCountry(initialCountryCode);
  });
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  useEffect(() => {
    // 1. Check user explicit choice in localStorage
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && DICTIONARIES[saved]) {
      setLocaleState(saved);
      return;
    }

    // 2. If server country resolved to a valid non-English locale, keep it
    const fromCountry = getLocaleFromCountry(initialCountryCode);
    if (fromCountry && fromCountry !== "en") {
      setLocaleState(fromCountry);
      return;
    }

    // 3. Check browser navigator language
    if (typeof navigator !== "undefined" && navigator.language) {
      const fromBrowser = getLocaleFromBrowser(navigator.language);
      if (fromBrowser) {
        setLocaleState(fromBrowser);
        return;
      }
    }

    // 4. Default
    setLocaleState(fromCountry || "en");
  }, [initialCountryCode]);

  const setLocale = (newLocale: Locale) => {
    if (DICTIONARIES[newLocale]) {
      setLocaleState(newLocale);
      try {
        localStorage.setItem(STORAGE_KEY, newLocale);
      } catch {
        // localStorage might be unavailable in private mode
      }
    }
  };

  const currentLanguage =
    LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];
  const t = DICTIONARIES[locale] || DICTIONARIES.en;

  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Update HTML lang attribute
    document.documentElement.lang = locale;

    // 2. Determine title & description based on active route
    const isMotivation = pathname?.startsWith("/motivation");

    if (isMotivation) {
      if (t?.nav?.motivation && t?.meta?.title) {
        document.title = `${t.nav.motivation} | ${t.meta.title}`;
      }
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && (t?.motivationPage?.description || t?.meta?.description)) {
        metaDescription.setAttribute(
          "content",
          t.motivationPage?.description || t.meta.description
        );
      }
    } else {
      if (t?.meta?.title) {
        document.title = t.meta.title;
      }
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && t?.meta?.description) {
        metaDescription.setAttribute("content", t.meta.description);
      }
    }
  }, [locale, t, pathname]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        t,
        setLocale,
        currentLanguage,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
