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
import { pt } from "./dictionaries/pt";
import { zh } from "./dictionaries/zh";
import { nl } from "./dictionaries/nl";
import { tr } from "./dictionaries/tr";
import { ar } from "./dictionaries/ar";
import { hi } from "./dictionaries/hi";
import { ko } from "./dictionaries/ko";
import { id } from "./dictionaries/id";
import { ro } from "./dictionaries/ro";
import { hu } from "./dictionaries/hu";
import { sv } from "./dictionaries/sv";
import { el } from "./dictionaries/el";
import { vi } from "./dictionaries/vi";
import { th } from "./dictionaries/th";
import { no } from "./dictionaries/no";
import { da } from "./dictionaries/da";
import { fi } from "./dictionaries/fi";
import { hr } from "./dictionaries/hr";
import { bg } from "./dictionaries/bg";
import { he } from "./dictionaries/he";
import { ru } from "./dictionaries/ru";
import { sr } from "./dictionaries/sr";
import { sl } from "./dictionaries/sl";
import { lt } from "./dictionaries/lt";
import { lv } from "./dictionaries/lv";
import { et } from "./dictionaries/et";
import { ms } from "./dictionaries/ms";
import { tl } from "./dictionaries/tl";
import { bn } from "./dictionaries/bn";
import { ta } from "./dictionaries/ta";
import { ur } from "./dictionaries/ur";
import { fa } from "./dictionaries/fa";
import { sw } from "./dictionaries/sw";
import { af } from "./dictionaries/af";
import { is } from "./dictionaries/is";
import { ga } from "./dictionaries/ga";
import { cy } from "./dictionaries/cy";
import { ka } from "./dictionaries/ka";
import { hy } from "./dictionaries/hy";
import { az } from "./dictionaries/az";

export const LANGUAGES: LanguageInfo[] = [
  {
    "code": "en",
    "name": "English",
    "nativeName": "English",
    "flag": "🇬🇧",
    "globeLabel": "Change Language",
    "region": "Global / North America / UK"
  },
  {
    "code": "sk",
    "name": "Slovak",
    "nativeName": "Slovenčina",
    "flag": "🇸🇰",
    "globeLabel": "Zmeniť jazyk",
    "region": "Slovensko"
  },
  {
    "code": "cs",
    "name": "Czech",
    "nativeName": "Čeština",
    "flag": "🇨🇿",
    "globeLabel": "Změnit jazyk",
    "region": "Česká republika"
  },
  {
    "code": "de",
    "name": "German",
    "nativeName": "Deutsch",
    "flag": "🇩🇪",
    "globeLabel": "Sprache ändern",
    "region": "Deutschland / Österreich / Schweiz"
  },
  {
    "code": "es",
    "name": "Spanish",
    "nativeName": "Español",
    "flag": "🇪🇸",
    "globeLabel": "Cambiar idioma",
    "region": "España / Latinoamérica"
  },
  {
    "code": "fr",
    "name": "French",
    "nativeName": "Français",
    "flag": "🇫🇷",
    "globeLabel": "Changer de langue",
    "region": "France / Belgique / Canada / Suisse"
  },
  {
    "code": "uk",
    "name": "Ukrainian",
    "nativeName": "Українська",
    "flag": "🇺🇦",
    "globeLabel": "Змінити мову",
    "region": "Україна"
  },
  {
    "code": "pl",
    "name": "Polish",
    "nativeName": "Polski",
    "flag": "🇵🇱",
    "globeLabel": "Zmień język",
    "region": "Polska"
  },
  {
    "code": "it",
    "name": "Italian",
    "nativeName": "Italiano",
    "flag": "🇮🇹",
    "globeLabel": "Cambia lingua",
    "region": "Italia / Svizzera"
  },
  {
    "code": "ja",
    "name": "Japanese",
    "nativeName": "日本語",
    "flag": "🇯🇵",
    "globeLabel": "言語を変更",
    "region": "日本 (Japan)"
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "nativeName": "Português",
    "flag": "🇵🇹",
    "globeLabel": "Mudar idioma",
    "region": "Portugal / Brasil"
  },
  {
    "code": "zh",
    "name": "Chinese (Simplified)",
    "nativeName": "简体中文",
    "flag": "🇨🇳",
    "globeLabel": "更改语言",
    "region": "中国 / 新加坡"
  },
  {
    "code": "nl",
    "name": "Dutch",
    "nativeName": "Nederlands",
    "flag": "🇳🇱",
    "globeLabel": "Taal wijzigen",
    "region": "Nederland / België"
  },
  {
    "code": "tr",
    "name": "Turkish",
    "nativeName": "Türkçe",
    "flag": "🇹🇷",
    "globeLabel": "Dili değiştir",
    "region": "Türkiye"
  },
  {
    "code": "ar",
    "name": "Arabic",
    "nativeName": "العربية",
    "flag": "🇸🇦",
    "globeLabel": "تغيير اللغة",
    "region": "الشرق الأوسط / شمال أفريقيا"
  },
  {
    "code": "hi",
    "name": "Hindi",
    "nativeName": "हिन्दी",
    "flag": "🇮🇳",
    "globeLabel": "भाषा बदलें",
    "region": "भारत (India)"
  },
  {
    "code": "ko",
    "name": "Korean",
    "nativeName": "한국어",
    "flag": "🇰🇷",
    "globeLabel": "언어 변경",
    "region": "대한민국 (South Korea)"
  },
  {
    "code": "id",
    "name": "Indonesian",
    "nativeName": "Bahasa Indonesia",
    "flag": "🇮🇩",
    "globeLabel": "Ubah bahasa",
    "region": "Indonesia"
  },
  {
    "code": "ro",
    "name": "Romanian",
    "nativeName": "Română",
    "flag": "🇷🇴",
    "globeLabel": "Schimbă limba",
    "region": "România / Moldova"
  },
  {
    "code": "hu",
    "name": "Hungarian",
    "nativeName": "Magyar",
    "flag": "🇭🇺",
    "globeLabel": "Nyelv módosítása",
    "region": "Magyarország"
  },
  {
    "code": "sv",
    "name": "Swedish",
    "nativeName": "Svenska",
    "flag": "🇸🇪",
    "globeLabel": "Byt språk",
    "region": "Sverige"
  },
  {
    "code": "el",
    "name": "Greek",
    "nativeName": "Ελληνικά",
    "flag": "🇬🇷",
    "globeLabel": "Αλλαγή γλώσσας",
    "region": "Ελλάδα / Κύπρος"
  },
  {
    "code": "vi",
    "name": "Vietnamese",
    "nativeName": "Tiếng Việt",
    "flag": "🇻🇳",
    "globeLabel": "Đổi ngôn ngữ",
    "region": "Việt Nam"
  },
  {
    "code": "th",
    "name": "Thai",
    "nativeName": "ไทย",
    "flag": "🇹🇭",
    "globeLabel": "เปลี่ยนภาษา",
    "region": "ประเทศไทย"
  },
  {
    "code": "no",
    "name": "Norwegian",
    "nativeName": "Norsk",
    "flag": "🇳🇴",
    "globeLabel": "Bytt språk",
    "region": "Norge"
  },
  {
    "code": "da",
    "name": "Danish",
    "nativeName": "Dansk",
    "flag": "🇩🇰",
    "globeLabel": "Skift sprog",
    "region": "Danmark"
  },
  {
    "code": "fi",
    "name": "Finnish",
    "nativeName": "Suomi",
    "flag": "🇫🇮",
    "globeLabel": "Vaihda kieli",
    "region": "Suomi"
  },
  {
    "code": "hr",
    "name": "Croatian",
    "nativeName": "Hrvatski",
    "flag": "🇭🇷",
    "globeLabel": "Promijeni jezik",
    "region": "Hrvatska / Bosna i Hercegovina"
  },
  {
    "code": "bg",
    "name": "Bulgarian",
    "nativeName": "Български",
    "flag": "🇧🇬",
    "globeLabel": "Смяна на езика",
    "region": "България"
  },
  {
    "code": "he",
    "name": "Hebrew",
    "nativeName": "עברית",
    "flag": "🇮🇱",
    "globeLabel": "שנה שפה",
    "region": "ישראל (Israel)"
  },
  {
    "code": "ru",
    "name": "Russian",
    "nativeName": "Русский",
    "flag": "🌐",
    "globeLabel": "Выбрать язык",
    "region": "Восточная Европа / Центральная Азия"
  },
  {
    "code": "sr",
    "name": "Serbian",
    "nativeName": "Српски",
    "flag": "🇷🇸",
    "globeLabel": "Изабери језик",
    "region": "Србија / Црна Гора"
  },
  {
    "code": "sl",
    "name": "Slovenian",
    "nativeName": "Slovenščina",
    "flag": "🇸🇮",
    "globeLabel": "Izberi jezik",
    "region": "Slovenija"
  },
  {
    "code": "lt",
    "name": "Lithuanian",
    "nativeName": "Lietuvių",
    "flag": "🇱🇹",
    "globeLabel": "Pasirinkti kalbą",
    "region": "Lietuva"
  },
  {
    "code": "lv",
    "name": "Latvian",
    "nativeName": "Latviešu",
    "flag": "🇱🇻",
    "globeLabel": "Izvēlēties valodu",
    "region": "Latvija"
  },
  {
    "code": "et",
    "name": "Estonian",
    "nativeName": "Eesti",
    "flag": "🇪🇪",
    "globeLabel": "Vali keel",
    "region": "Eesti"
  },
  {
    "code": "ms",
    "name": "Malay",
    "nativeName": "Bahasa Melayu",
    "flag": "🇲🇾",
    "globeLabel": "Pilih Bahasa",
    "region": "Malaysia / Brunei / Singapura"
  },
  {
    "code": "tl",
    "name": "Filipino (Tagalog)",
    "nativeName": "Filipino",
    "flag": "🇵🇭",
    "globeLabel": "Pumili ng Wika",
    "region": "Pilipinas"
  },
  {
    "code": "bn",
    "name": "Bengali",
    "nativeName": "বাংলা",
    "flag": "🇧🇩",
    "globeLabel": "ভাষা নির্বাচন",
    "region": "বাংলাদেশ / ভারত"
  },
  {
    "code": "ta",
    "name": "Tamil",
    "nativeName": "தமிழ்",
    "flag": "🇮🇳",
    "globeLabel": "மொழியைத் தேர்ந்தெடு",
    "region": "இந்தியா / இலங்கை / சிங்கப்பூர்"
  },
  {
    "code": "ur",
    "name": "Urdu",
    "nativeName": "اردو",
    "flag": "🇵🇰",
    "globeLabel": "زبان منتخب کریں",
    "region": "پاکستان / بھارت"
  },
  {
    "code": "fa",
    "name": "Persian (Farsi)",
    "nativeName": "فارسی",
    "flag": "🇮🇷",
    "globeLabel": "انتخاب زبان",
    "region": "ایران / افغانستان"
  },
  {
    "code": "sw",
    "name": "Swahili",
    "nativeName": "Kiswahili",
    "flag": "🇰🇪",
    "globeLabel": "Chagua Lugha",
    "region": "Afrika Mashariki / Kenya / Tanzania"
  },
  {
    "code": "af",
    "name": "Afrikaans",
    "nativeName": "Afrikaans",
    "flag": "🇿🇦",
    "globeLabel": "Kies taal",
    "region": "Suid-Afrika / Namibië"
  },
  {
    "code": "is",
    "name": "Icelandic",
    "nativeName": "Íslenska",
    "flag": "🇮🇸",
    "globeLabel": "Veldu tungumál",
    "region": "Ísland"
  },
  {
    "code": "ga",
    "name": "Irish",
    "nativeName": "Gaeilge",
    "flag": "🇮🇪",
    "globeLabel": "Roghnaigh Teanga",
    "region": "Éire"
  },
  {
    "code": "cy",
    "name": "Welsh",
    "nativeName": "Cymraeg",
    "flag": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "globeLabel": "Dewis Iaith",
    "region": "Cymru (Wales)"
  },
  {
    "code": "ka",
    "name": "Georgian",
    "nativeName": "ქართული",
    "flag": "🇬🇪",
    "globeLabel": "ენის არჩევა",
    "region": "საქართველო"
  },
  {
    "code": "hy",
    "name": "Armenian",
    "nativeName": "Հայերեն",
    "flag": "🇦🇲",
    "globeLabel": "Ընտրել լեզուն",
    "region": "Հայաստան"
  },
  {
    "code": "az",
    "name": "Azerbaijani",
    "nativeName": "Azərbaycan",
    "flag": "🇦🇿",
    "globeLabel": "Dil Seçin",
    "region": "Azərbaycan"
  }
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
  pt,
  zh,
  nl,
  tr,
  ar,
  hi,
  ko,
  id,
  ro,
  hu,
  sv,
  el,
  vi,
  th,
  no,
  da,
  fi,
  hr,
  bg,
  he,
  ru,
  sr,
  sl,
  lt,
  lv,
  et,
  ms,
  tl,
  bn,
  ta,
  ur,
  fa,
  sw,
  af,
  is,
  ga,
  cy,
  ka,
  hy,
  az,
};

/**
 * Maps ISO 3166-1 country code (from Vercel header x-vercel-ip-country)
 * to our 50 supported locales.
 */
export const COUNTRY_TO_LOCALE_MAP: Record<string, Locale> = {
  "sk": "sk",
  "cz": "cs",
  "de": "de",
  "at": "de",
  "ch": "de",
  "li": "de",
  "lu": "de",
  "es": "es",
  "mx": "es",
  "ar": "es",
  "co": "es",
  "cl": "es",
  "pe": "es",
  "ve": "es",
  "ec": "es",
  "gt": "es",
  "cu": "es",
  "bo": "es",
  "do": "es",
  "hn": "es",
  "py": "es",
  "sv": "es",
  "ni": "es",
  "cr": "es",
  "pa": "es",
  "uy": "es",
  "pr": "es",
  "fr": "fr",
  "be": "fr",
  "mc": "fr",
  "sn": "fr",
  "ci": "fr",
  "mg": "fr",
  "cm": "fr",
  "cd": "fr",
  "cg": "fr",
  "ga": "fr",
  "gn": "fr",
  "ml": "fr",
  "ne": "fr",
  "tg": "fr",
  "bj": "fr",
  "ua": "uk",
  "pl": "pl",
  "it": "it",
  "sm": "it",
  "va": "it",
  "jp": "ja",
  "pt": "pt",
  "br": "pt",
  "ao": "pt",
  "mz": "pt",
  "cv": "pt",
  "cn": "zh",
  "tw": "zh",
  "hk": "zh",
  "mo": "zh",
  "nl": "nl",
  "sr_sr": "nl",
  "tr": "tr",
  "cy_tr": "tr",
  "sa": "ar",
  "ae": "ar",
  "eg": "ar",
  "dz": "ar",
  "ma": "ar",
  "iq": "ar",
  "jo": "ar",
  "lb": "ar",
  "kw": "ar",
  "qa": "ar",
  "om": "ar",
  "bh": "ar",
  "tn": "ar",
  "ly": "ar",
  "ye": "ar",
  "ps": "ar",
  "sd": "ar",
  "sy": "ar",
  "in": "hi",
  "kr": "ko",
  "kp": "ko",
  "id": "id",
  "ro": "ro",
  "md": "ro",
  "hu": "hu",
  "se": "sv",
  "gr": "el",
  "cy": "el",
  "vn": "vi",
  "th": "th",
  "no": "no",
  "dk": "da",
  "gl": "da",
  "fo": "da",
  "fi": "fi",
  "ax": "fi",
  "hr": "hr",
  "ba": "hr",
  "bg": "bg",
  "il": "he",
  "ru": "ru",
  "by": "ru",
  "kz": "ru",
  "kg": "ru",
  "tj": "ru",
  "uz": "ru",
  "rs": "sr",
  "me": "sr",
  "si": "sl",
  "lt": "lt",
  "lv": "lv",
  "ee": "et",
  "my": "ms",
  "bn": "ms",
  "ph": "tl",
  "bd": "bn",
  "lk": "ta",
  "pk": "ur",
  "ir": "fa",
  "af": "fa",
  "ke": "sw",
  "tz": "sw",
  "ug": "sw",
  "rw": "sw",
  "za": "af",
  "na": "af",
  "is": "is",
  "ie": "ga",
  "ge": "ka",
  "am": "hy",
  "az": "az",
  "us": "en",
  "gb": "en",
  "ca": "en",
  "au": "en",
  "nz": "en",
  "sg": "en"
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
