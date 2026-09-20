import { Locale, LanguageInfo, TranslationDictionary } from "./types";
import { en } from "./dictionaries/en";
import { sk } from "./dictionaries/sk";
import { cs } from "./dictionaries/cs";
import { de } from "./dictionaries/de";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { uk } from "./dictionaries/uk";
import { pl } from "./dictionaries/pl";
import { it } from "./dictionaries/it";
import { ja } from "./dictionaries/ja";

export const LANGUAGES: LanguageInfo[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    globeLabel: "Change Language",
    region: "Global / North America / UK",
  },
  {
    code: "sk",
    name: "Slovak",
    nativeName: "Slovenčina",
    flag: "🇸🇰",
    globeLabel: "Zmeniť jazyk",
    region: "Slovensko",
  },
  {
    code: "cs",
    name: "Czech",
    nativeName: "Čeština",
    flag: "🇨🇿",
    globeLabel: "Změnit jazyk",
    region: "Česká republika",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    globeLabel: "Sprache ändern",
    region: "Deutschland / Österreich / Schweiz",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    globeLabel: "Cambiar idioma",
    region: "España / Latinoamérica",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    globeLabel: "Changer de langue",
    region: "France / Belgique / Canada",
  },
  {
    code: "uk",
    name: "Ukrainian",
    nativeName: "Українська",
    flag: "🇺🇦",
    globeLabel: "Змінити мову",
    region: "Україна",
  },
  {
    code: "pl",
    name: "Polish",
    nativeName: "Polski",
    flag: "🇵🇱",
    globeLabel: "Zmień język",
    region: "Polska",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    globeLabel: "Cambia lingua",
    region: "Italia / Svizzera",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    globeLabel: "言語を変更",
    region: "日本 (Japan)",
  },
];

export const DICTIONARIES: Record<Locale, TranslationDictionary> = {
  en,
  sk,
  cs,
  de,
  es,
  fr,
  uk,
  pl,
  it,
  ja,
};

/**
 * Maps ISO 3166-1 country code (from Vercel header x-vercel-ip-country)
 * to one of our 10 supported locales.
 */
export const COUNTRY_TO_LOCALE_MAP: Record<string, Locale> = {
  // Slovakia
  sk: "sk",

  // Czech Republic
  cz: "cs",

  // German-speaking
  de: "de",
  at: "de",
  ch: "de",
  li: "de",
  lu: "de",

  // Spanish-speaking
  es: "es",
  mx: "es",
  ar: "es",
  co: "es",
  cl: "es",
  pe: "es",
  ve: "es",
  ec: "es",
  gt: "es",
  cu: "es",
  bo: "es",
  do: "es",
  hn: "es",
  py: "es",
  sv: "es",
  ni: "es",
  cr: "es",
  pa: "es",
  uy: "es",

  // French-speaking
  fr: "fr",
  be: "fr",
  mc: "fr",
  sn: "fr",
  ci: "fr",
  mg: "fr",
  cm: "fr",

  // Ukraine
  ua: "uk",

  // Poland
  pl: "pl",

  // Italy / San Marino / Vatican
  it: "it",
  sm: "it",
  va: "it",

  // Japan
  jp: "ja",

  // English-speaking / Global
  us: "en",
  gb: "en",
  ca: "en",
  au: "en",
  nz: "en",
  ie: "en",
  za: "en",
  sg: "en",
  in: "en",
  ph: "en",
};

export function getLocaleFromCountry(countryCode?: string): Locale {
  if (!countryCode) return "en";
  const normalized = countryCode.toLowerCase().trim();
  return COUNTRY_TO_LOCALE_MAP[normalized] || "en";
}

export function getLocaleFromBrowser(navLang?: string): Locale {
  if (!navLang) return "en";
  const langPrefix = navLang.toLowerCase().split("-")[0];
  const matched = LANGUAGES.find((l) => l.code === langPrefix);
  return matched ? matched.code : "en";
}
