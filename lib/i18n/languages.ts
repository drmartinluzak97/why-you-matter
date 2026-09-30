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
import { ca } from "./dictionaries/ca";
import { eu } from "./dictionaries/eu";
import { gl } from "./dictionaries/gl";
import { mk } from "./dictionaries/mk";
import { sq } from "./dictionaries/sq";
import { bs } from "./dictionaries/bs";
import { mt } from "./dictionaries/mt";
import { lb } from "./dictionaries/lb";
import { be } from "./dictionaries/be";
import { kk } from "./dictionaries/kk";
import { uz } from "./dictionaries/uz";
import { ky } from "./dictionaries/ky";
import { tg } from "./dictionaries/tg";
import { tk } from "./dictionaries/tk";
import { mn } from "./dictionaries/mn";
import { my } from "./dictionaries/my";
import { km } from "./dictionaries/km";
import { lo } from "./dictionaries/lo";
import { ne } from "./dictionaries/ne";
import { si } from "./dictionaries/si";
import { dz } from "./dictionaries/dz";
import { te } from "./dictionaries/te";
import { mr } from "./dictionaries/mr";
import { gu } from "./dictionaries/gu";
import { kn } from "./dictionaries/kn";
import { ml } from "./dictionaries/ml";
import { pa } from "./dictionaries/pa";
import { or } from "./dictionaries/or";
import { as } from "./dictionaries/as";
import { am } from "./dictionaries/am";
import { ti } from "./dictionaries/ti";
import { so } from "./dictionaries/so";
import { yo } from "./dictionaries/yo";
import { ig } from "./dictionaries/ig";
import { ha } from "./dictionaries/ha";
import { zu } from "./dictionaries/zu";
import { xh } from "./dictionaries/xh";
import { st } from "./dictionaries/st";
import { sn } from "./dictionaries/sn";
import { ny } from "./dictionaries/ny";
import { mg } from "./dictionaries/mg";
import { rw } from "./dictionaries/rw";
import { rn } from "./dictionaries/rn";
import { ln } from "./dictionaries/ln";
import { wo } from "./dictionaries/wo";
import { ku } from "./dictionaries/ku";
import { ps } from "./dictionaries/ps";
import { eo } from "./dictionaries/eo";
import { la } from "./dictionaries/la";
import { sm } from "./dictionaries/sm";
import { haw } from "./dictionaries/haw";

export const LANGUAGES: LanguageInfo[] = [
  {
    "code": "en",
    "name": "English",
    "nativeName": "English",
    "flag": "🇬🇧",
    "globeLabel": "Change Language",
    "region": "Global / UK / US"
  },
  {
    "code": "sk",
    "name": "Slovak",
    "nativeName": "Slovenčina",
    "flag": "🇸🇰",
    "globeLabel": "Zmeniť jazyk",
    "region": "Slovakia"
  },
  {
    "code": "cs",
    "name": "Czech",
    "nativeName": "Čeština",
    "flag": "🇨🇿",
    "globeLabel": "Změnit jazyk",
    "region": "Czech Republic"
  },
  {
    "code": "de",
    "name": "German",
    "nativeName": "Deutsch",
    "flag": "🇩🇪",
    "globeLabel": "Sprache ändern",
    "region": "Germany / Austria / Switzerland"
  },
  {
    "code": "es",
    "name": "Spanish",
    "nativeName": "Español",
    "flag": "🇪🇸",
    "globeLabel": "Cambiar idioma",
    "region": "Spain / Latin America"
  },
  {
    "code": "fr",
    "name": "French",
    "nativeName": "Français",
    "flag": "🇫🇷",
    "globeLabel": "Changer de langue",
    "region": "France / Francophonie"
  },
  {
    "code": "uk",
    "name": "Ukrainian",
    "nativeName": "Українська",
    "flag": "🇺🇦",
    "globeLabel": "Змінити мову",
    "region": "Ukraine"
  },
  {
    "code": "pl",
    "name": "Polish",
    "nativeName": "Polski",
    "flag": "🇵🇱",
    "globeLabel": "Zmień język",
    "region": "Poland"
  },
  {
    "code": "it",
    "name": "Italian",
    "nativeName": "Italiano",
    "flag": "🇮🇹",
    "globeLabel": "Cambia lingua",
    "region": "Italy / Switzerland"
  },
  {
    "code": "ja",
    "name": "Japanese",
    "nativeName": "日本語",
    "flag": "🇯🇵",
    "globeLabel": "言語を変更",
    "region": "Japan"
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "nativeName": "Português",
    "flag": "🇵🇹",
    "globeLabel": "Mudar idioma",
    "region": "Portugal / Brazil"
  },
  {
    "code": "zh",
    "name": "Chinese",
    "nativeName": "中文 (简体)",
    "flag": "🇨🇳",
    "globeLabel": "更改语言",
    "region": "China / Singapore"
  },
  {
    "code": "nl",
    "name": "Dutch",
    "nativeName": "Nederlands",
    "flag": "🇳🇱",
    "globeLabel": "Taal wijzigen",
    "region": "Netherlands / Belgium"
  },
  {
    "code": "tr",
    "name": "Turkish",
    "nativeName": "Türkçe",
    "flag": "🇹🇷",
    "globeLabel": "Dili değiştir",
    "region": "Turkey / Cyprus"
  },
  {
    "code": "ar",
    "name": "Arabic",
    "nativeName": "العربية",
    "flag": "🇸🇦",
    "globeLabel": "تغيير اللغة",
    "region": "Middle East & North Africa"
  },
  {
    "code": "hi",
    "name": "Hindi",
    "nativeName": "हिन्दी",
    "flag": "🇮🇳",
    "globeLabel": "भाषा बदलें",
    "region": "India"
  },
  {
    "code": "ko",
    "name": "Korean",
    "nativeName": "한국어",
    "flag": "🇰🇷",
    "globeLabel": "언어 변경",
    "region": "South Korea"
  },
  {
    "code": "id",
    "name": "Indonesian",
    "nativeName": "Bahasa Indonesia",
    "flag": "🇮🇩",
    "globeLabel": "Ubah Bahasa",
    "region": "Indonesia"
  },
  {
    "code": "ro",
    "name": "Romanian",
    "nativeName": "Română",
    "flag": "🇷🇴",
    "globeLabel": "Schimbă limba",
    "region": "Romania / Moldova"
  },
  {
    "code": "hu",
    "name": "Hungarian",
    "nativeName": "Magyar",
    "flag": "🇭🇺",
    "globeLabel": "Nyelv váltása",
    "region": "Hungary"
  },
  {
    "code": "sv",
    "name": "Swedish",
    "nativeName": "Svenska",
    "flag": "🇸🇪",
    "globeLabel": "Ändra språk",
    "region": "Sweden / Finland"
  },
  {
    "code": "el",
    "name": "Greek",
    "nativeName": "Ελληνικά",
    "flag": "🇬🇷",
    "globeLabel": "Αλλαγή γλώσσας",
    "region": "Greece / Cyprus"
  },
  {
    "code": "vi",
    "name": "Vietnamese",
    "nativeName": "Tiếng Việt",
    "flag": "🇻🇳",
    "globeLabel": "Đổi ngôn ngữ",
    "region": "Vietnam"
  },
  {
    "code": "th",
    "name": "Thai",
    "nativeName": "ไทย",
    "flag": "🇹🇭",
    "globeLabel": "เปลี่ยนภาษา",
    "region": "Thailand"
  },
  {
    "code": "no",
    "name": "Norwegian",
    "nativeName": "Norsk",
    "flag": "🇳🇴",
    "globeLabel": "Endre språk",
    "region": "Norway"
  },
  {
    "code": "da",
    "name": "Danish",
    "nativeName": "Dansk",
    "flag": "🇩🇰",
    "globeLabel": "Skift sprog",
    "region": "Denmark"
  },
  {
    "code": "fi",
    "name": "Finnish",
    "nativeName": "Suomi",
    "flag": "🇫🇮",
    "globeLabel": "Vaihda kieltä",
    "region": "Finland"
  },
  {
    "code": "hr",
    "name": "Croatian",
    "nativeName": "Hrvatski",
    "flag": "🇭🇷",
    "globeLabel": "Promijeni jezik",
    "region": "Croatia"
  },
  {
    "code": "bg",
    "name": "Bulgarian",
    "nativeName": "Български",
    "flag": "🇧🇬",
    "globeLabel": "Смяна на езика",
    "region": "Bulgaria"
  },
  {
    "code": "he",
    "name": "Hebrew",
    "nativeName": "עברית",
    "flag": "🇮🇱",
    "globeLabel": "שנה שפה",
    "region": "Israel"
  },
  {
    "code": "ru",
    "name": "Russian",
    "nativeName": "Русский",
    "flag": "🇷🇺",
    "globeLabel": "Сменить язык",
    "region": "Eurasia"
  },
  {
    "code": "sr",
    "name": "Serbian",
    "nativeName": "Српски",
    "flag": "🇷🇸",
    "globeLabel": "Промени језик",
    "region": "Serbia"
  },
  {
    "code": "sl",
    "name": "Slovenian",
    "nativeName": "Slovenščina",
    "flag": "🇸🇮",
    "globeLabel": "Spremeni jezik",
    "region": "Slovenia"
  },
  {
    "code": "lt",
    "name": "Lithuanian",
    "nativeName": "Lietuvių",
    "flag": "🇱🇹",
    "globeLabel": "Keisti kalbą",
    "region": "Lithuania"
  },
  {
    "code": "lv",
    "name": "Latvian",
    "nativeName": "Latviešu",
    "flag": "🇱🇻",
    "globeLabel": "Mainīt valodu",
    "region": "Latvia"
  },
  {
    "code": "et",
    "name": "Estonian",
    "nativeName": "Eesti",
    "flag": "🇪🇪",
    "globeLabel": "Muuda keelt",
    "region": "Estonia"
  },
  {
    "code": "ms",
    "name": "Malay",
    "nativeName": "Bahasa Melayu",
    "flag": "🇲🇾",
    "globeLabel": "Tukar Bahasa",
    "region": "Malaysia / Brunei"
  },
  {
    "code": "tl",
    "name": "Tagalog",
    "nativeName": "Tagalog (Filipino)",
    "flag": "🇵🇭",
    "globeLabel": "Palitan ang Wika",
    "region": "Philippines"
  },
  {
    "code": "bn",
    "name": "Bengali",
    "nativeName": "বাংলা",
    "flag": "🇧🇩",
    "globeLabel": "ভাষা পরিবর্তন করুন",
    "region": "Bangladesh / India"
  },
  {
    "code": "ta",
    "name": "Tamil",
    "nativeName": "தமிழ்",
    "flag": "🇮🇳",
    "globeLabel": "மொழியை மாற்றவும்",
    "region": "India / Sri Lanka / Singapore"
  },
  {
    "code": "ur",
    "name": "Urdu",
    "nativeName": "اردو",
    "flag": "🇵🇰",
    "globeLabel": "زبان تبدیل کریں",
    "region": "Pakistan / India"
  },
  {
    "code": "fa",
    "name": "Persian",
    "nativeName": "فارسی",
    "flag": "🇮🇷",
    "globeLabel": "تغییر زبان",
    "region": "Iran / Afghanistan"
  },
  {
    "code": "sw",
    "name": "Swahili",
    "nativeName": "Kiswahili",
    "flag": "🇰🇪",
    "globeLabel": "Badilisha Lugha",
    "region": "East Africa (Kenya, Tanzania)"
  },
  {
    "code": "af",
    "name": "Afrikaans",
    "nativeName": "Afrikaans",
    "flag": "🇿🇦",
    "globeLabel": "Verander Taal",
    "region": "South Africa / Namibia"
  },
  {
    "code": "is",
    "name": "Icelandic",
    "nativeName": "Íslenska",
    "flag": "🇮🇸",
    "globeLabel": "Breyta tungumáli",
    "region": "Iceland"
  },
  {
    "code": "ga",
    "name": "Irish",
    "nativeName": "Gaeilge",
    "flag": "🇮🇪",
    "globeLabel": "Athraigh Teanga",
    "region": "Ireland"
  },
  {
    "code": "cy",
    "name": "Welsh",
    "nativeName": "Cymraeg",
    "flag": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "globeLabel": "Newid Iaith",
    "region": "Wales (UK)"
  },
  {
    "code": "ka",
    "name": "Georgian",
    "nativeName": "ქართული",
    "flag": "🇬🇪",
    "globeLabel": "ენის შეცვლა",
    "region": "Georgia"
  },
  {
    "code": "hy",
    "name": "Armenian",
    "nativeName": "Հայերեն",
    "flag": "🇦🇲",
    "globeLabel": "Փոխել լեզուն",
    "region": "Armenia"
  },
  {
    "code": "az",
    "name": "Azerbaijani",
    "nativeName": "Azərbaycan",
    "flag": "🇦🇿",
    "globeLabel": "Dili dəyişdir",
    "region": "Azerbaijan"
  },
  {
    "code": "ca",
    "name": "Catalan",
    "nativeName": "Català",
    "flag": "🇪🇸",
    "globeLabel": "Canviar d'idioma",
    "region": "Catalonia (Spain / Andorra)"
  },
  {
    "code": "eu",
    "name": "Basque",
    "nativeName": "Euskara",
    "flag": "🇪🇸",
    "globeLabel": "Aldatu hizkuntza",
    "region": "Basque Country (Spain / France)"
  },
  {
    "code": "gl",
    "name": "Galician",
    "nativeName": "Galego",
    "flag": "🇪🇸",
    "globeLabel": "Cambiar idioma",
    "region": "Galicia (Spain)"
  },
  {
    "code": "mk",
    "name": "Macedonian",
    "nativeName": "Македонски",
    "flag": "🇲🇰",
    "globeLabel": "Смени јазик",
    "region": "North Macedonia"
  },
  {
    "code": "sq",
    "name": "Albanian",
    "nativeName": "Shqip",
    "flag": "🇦🇱",
    "globeLabel": "Ndrysho gjuhën",
    "region": "Albania / Kosovo"
  },
  {
    "code": "bs",
    "name": "Bosnian",
    "nativeName": "Bosanski",
    "flag": "🇧🇦",
    "globeLabel": "Promijeni jezik",
    "region": "Bosnia and Herzegovina"
  },
  {
    "code": "mt",
    "name": "Maltese",
    "nativeName": "Malti",
    "flag": "🇲🇹",
    "globeLabel": "Ibdel il-lingwa",
    "region": "Malta"
  },
  {
    "code": "lb",
    "name": "Luxembourgish",
    "nativeName": "Lëtzebuergesch",
    "flag": "🇱🇺",
    "globeLabel": "Sprooch änneren",
    "region": "Luxembourg"
  },
  {
    "code": "be",
    "name": "Belarusian",
    "nativeName": "Беларуская",
    "flag": "🇧🇾",
    "globeLabel": "Змяніць мову",
    "region": "Belarus"
  },
  {
    "code": "kk",
    "name": "Kazakh",
    "nativeName": "Қазақша",
    "flag": "🇰🇿",
    "globeLabel": "Тілді өзгерту",
    "region": "Kazakhstan"
  },
  {
    "code": "uz",
    "name": "Uzbek",
    "nativeName": "O'zbekcha",
    "flag": "🇺🇿",
    "globeLabel": "Tilni o'zgartirish",
    "region": "Uzbekistan"
  },
  {
    "code": "ky",
    "name": "Kyrgyz",
    "nativeName": "Кыргызча",
    "flag": "🇰🇬",
    "globeLabel": "Тилди алмаштыруу",
    "region": "Kyrgyzstan"
  },
  {
    "code": "tg",
    "name": "Tajik",
    "nativeName": "Тоҷикӣ",
    "flag": "🇹🇯",
    "globeLabel": "Тағйири забон",
    "region": "Tajikistan"
  },
  {
    "code": "tk",
    "name": "Turkmen",
    "nativeName": "Türkmençe",
    "flag": "🇹🇲",
    "globeLabel": "Dili üýtgetmek",
    "region": "Turkmenistan"
  },
  {
    "code": "mn",
    "name": "Mongolian",
    "nativeName": "Монгол",
    "flag": "🇲🇳",
    "globeLabel": "Хэл солих",
    "region": "Mongolia"
  },
  {
    "code": "my",
    "name": "Burmese",
    "nativeName": "မြန်မာစာ",
    "flag": "🇲🇲",
    "globeLabel": "ဘာသာစကားပြောင်းပါ",
    "region": "Myanmar (Burma)"
  },
  {
    "code": "km",
    "name": "Khmer",
    "nativeName": "ភាសាខ្មែរ",
    "flag": "🇰🇭",
    "globeLabel": "ប្តូរភាសា",
    "region": "Cambodia"
  },
  {
    "code": "lo",
    "name": "Lao",
    "nativeName": "ພາສາລາວ",
    "flag": "🇱🇦",
    "globeLabel": "ປ່ຽນພາສາ",
    "region": "Laos"
  },
  {
    "code": "ne",
    "name": "Nepali",
    "nativeName": "नेपाली",
    "flag": "🇳🇵",
    "globeLabel": "भाषा परिवर्तन गर्नुहोस्",
    "region": "Nepal / India"
  },
  {
    "code": "si",
    "name": "Sinhala",
    "nativeName": "සිංහල",
    "flag": "🇱🇰",
    "globeLabel": "භාෂාව වෙනස් කරන්න",
    "region": "Sri Lanka"
  },
  {
    "code": "dz",
    "name": "Dzongkha",
    "nativeName": "རྫོང་ཁ",
    "flag": "🇧🇹",
    "globeLabel": "སྐད་ཡིག་བསྒྱུར་བཅོས",
    "region": "Bhutan"
  },
  {
    "code": "te",
    "name": "Telugu",
    "nativeName": "తెలుగు",
    "flag": "🇮🇳",
    "globeLabel": "భాషను మార్చండి",
    "region": "India (Andhra Pradesh, Telangana)"
  },
  {
    "code": "mr",
    "name": "Marathi",
    "nativeName": "मराठी",
    "flag": "🇮🇳",
    "globeLabel": "भाषा बदला",
    "region": "India (Maharashtra)"
  },
  {
    "code": "gu",
    "name": "Gujarati",
    "nativeName": "ગુજરાતી",
    "flag": "🇮🇳",
    "globeLabel": "ભાષા બદલો",
    "region": "India (Gujarat)"
  },
  {
    "code": "kn",
    "name": "Kannada",
    "nativeName": "ಕನ್ನಡ",
    "flag": "🇮🇳",
    "globeLabel": "ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ",
    "region": "India (Karnataka)"
  },
  {
    "code": "ml",
    "name": "Malayalam",
    "nativeName": "മലയാളം",
    "flag": "🇮🇳",
    "globeLabel": "ഭാഷ മാറ്റുക",
    "region": "India (Kerala)"
  },
  {
    "code": "pa",
    "name": "Punjabi",
    "nativeName": "ਪੰਜਾਬੀ",
    "flag": "🇮🇳",
    "globeLabel": "ਭਾਸ਼ਾ ਬਦਲੋ",
    "region": "India (Punjab) / Pakistan"
  },
  {
    "code": "or",
    "name": "Odia",
    "nativeName": "ଓଡ଼ିଆ",
    "flag": "🇮🇳",
    "globeLabel": "ଭାଷା ପରିବର୍ତ୍ତନ କରନ୍ତୁ",
    "region": "India (Odisha)"
  },
  {
    "code": "as",
    "name": "Assamese",
    "nativeName": "অসমীয়া",
    "flag": "🇮🇳",
    "globeLabel": "भाषा সলনি কৰক",
    "region": "India (Assam)"
  },
  {
    "code": "am",
    "name": "Amharic",
    "nativeName": "አማርኛ",
    "flag": "🇪🇹",
    "globeLabel": "ቋንቋ ቀይር",
    "region": "Ethiopia"
  },
  {
    "code": "ti",
    "name": "Tigrinya",
    "nativeName": "ትግርኛ",
    "flag": "🇪🇷",
    "globeLabel": "ቋንቋ ቀይር",
    "region": "Eritrea / Ethiopia"
  },
  {
    "code": "so",
    "name": "Somali",
    "nativeName": "Soomaali",
    "flag": "🇸🇴",
    "globeLabel": "Beddel Luuqadda",
    "region": "Somalia / Horn of Africa"
  },
  {
    "code": "yo",
    "name": "Yoruba",
    "nativeName": "Yorùbá",
    "flag": "🇳🇬",
    "globeLabel": "Yi Ede Pada",
    "region": "Nigeria / West Africa"
  },
  {
    "code": "ig",
    "name": "Igbo",
    "nativeName": "Ásụ̀sụ́ Ìgbò",
    "flag": "🇳🇬",
    "globeLabel": "Gbanwee Asụsụ",
    "region": "Nigeria"
  },
  {
    "code": "ha",
    "name": "Hausa",
    "nativeName": "Harshen Hausa",
    "flag": "🇳🇬",
    "globeLabel": "Canja Harshe",
    "region": "Nigeria / Niger / West Africa"
  },
  {
    "code": "zu",
    "name": "Zulu",
    "nativeName": "isiZulu",
    "flag": "🇿🇦",
    "globeLabel": "Shintsha Ulimi",
    "region": "South Africa"
  },
  {
    "code": "xh",
    "name": "Xhosa",
    "nativeName": "isiXhosa",
    "flag": "🇿🇦",
    "globeLabel": "Tshintsha Ulwimi",
    "region": "South Africa"
  },
  {
    "code": "st",
    "name": "Southern Sotho",
    "nativeName": "Sesotho",
    "flag": "🇱🇸",
    "globeLabel": "Fetola Puo",
    "region": "Lesotho / South Africa"
  },
  {
    "code": "sn",
    "name": "Shona",
    "nativeName": "chiShona",
    "flag": "🇿🇼",
    "globeLabel": "Chinja Mutauro",
    "region": "Zimbabwe"
  },
  {
    "code": "ny",
    "name": "Chichewa",
    "nativeName": "Chichewa",
    "flag": "🇲🇼",
    "globeLabel": "Sinthani Chilankhulo",
    "region": "Malawi / Zambia"
  },
  {
    "code": "mg",
    "name": "Malagasy",
    "nativeName": "Malagasy",
    "flag": "🇲🇬",
    "globeLabel": "Hanova Fiteny",
    "region": "Madagascar"
  },
  {
    "code": "rw",
    "name": "Kinyarwanda",
    "nativeName": "Ikinyarwanda",
    "flag": "🇷🇼",
    "globeLabel": "Guhindura Ururimi",
    "region": "Rwanda"
  },
  {
    "code": "rn",
    "name": "Kirundi",
    "nativeName": "Ikirundi",
    "flag": "🇧🇮",
    "globeLabel": "Guhindura Ururimi",
    "region": "Burundi"
  },
  {
    "code": "ln",
    "name": "Lingala",
    "nativeName": "Lingála",
    "flag": "🇨🇩",
    "globeLabel": "Kobongola Lokota",
    "region": "DR Congo / Republic of Congo"
  },
  {
    "code": "wo",
    "name": "Wolof",
    "nativeName": "Wolof",
    "flag": "🇸🇳",
    "globeLabel": "Soppi Làkk",
    "region": "Senegal / The Gambia"
  },
  {
    "code": "ku",
    "name": "Kurdish",
    "nativeName": "Kurdî (Kurmancî)",
    "flag": "☀️",
    "globeLabel": "Ziman Biguhêre",
    "region": "Kurdistan (Turkey, Iraq, Syria, Iran)"
  },
  {
    "code": "ps",
    "name": "Pashto",
    "nativeName": "پښتو",
    "flag": "🇦🇫",
    "globeLabel": "ژبه بدله کړئ",
    "region": "Afghanistan / Pakistan"
  },
  {
    "code": "eo",
    "name": "Esperanto",
    "nativeName": "Esperanto",
    "flag": "🌍",
    "globeLabel": "Elekti Lingvon",
    "region": "International Auxiliary Language"
  },
  {
    "code": "la",
    "name": "Latin",
    "nativeName": "Latina",
    "flag": "🏛️",
    "globeLabel": "Linguam Mutare",
    "region": "Historical / Classical / Vatican"
  },
  {
    "code": "sm",
    "name": "Samoan",
    "nativeName": "Gagana Samoa",
    "flag": "🇼🇸",
    "globeLabel": "Sui Gagana",
    "region": "Samoa / American Samoa"
  },
  {
    "code": "haw",
    "name": "Hawaiian",
    "nativeName": "ʻŌlelo Hawaiʻi",
    "flag": "🌺",
    "globeLabel": "Hoʻololi i ka ʻŌlelo",
    "region": "Hawaii (USA)"
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
  ca,
  eu,
  gl,
  mk,
  sq,
  bs,
  mt,
  lb,
  be,
  kk,
  uz,
  ky,
  tg,
  tk,
  mn,
  my,
  km,
  lo,
  ne,
  si,
  dz,
  te,
  mr,
  gu,
  kn,
  ml,
  pa,
  or,
  as,
  am,
  ti,
  so,
  yo,
  ig,
  ha,
  zu,
  xh,
  st,
  sn,
  ny,
  mg,
  rw,
  rn,
  ln,
  wo,
  ku,
  ps,
  eo,
  la,
  sm,
  haw,
};

export const COUNTRY_TO_LOCALE_MAP: Record<string, Locale> = {
  "US": "en",
  "CA": "en",
  "MX": "es",
  "GT": "es",
  "SV": "es",
  "HN": "es",
  "NI": "es",
  "CR": "es",
  "PA": "es",
  "CU": "es",
  "DO": "es",
  "PR": "es",
  "JM": "en",
  "HT": "fr",
  "BS": "en",
  "BB": "en",
  "TT": "en",
  "BZ": "en",
  "BR": "pt",
  "AR": "es",
  "CL": "es",
  "CO": "es",
  "PE": "es",
  "VE": "es",
  "EC": "es",
  "BO": "es",
  "PY": "es",
  "UY": "es",
  "GY": "en",
  "SR": "nl",
  "GB": "en",
  "IE": "ga",
  "IS": "is",
  "NO": "no",
  "SE": "sv",
  "FI": "fi",
  "DK": "da",
  "NL": "nl",
  "BE": "nl",
  "LU": "lb",
  "FR": "fr",
  "MC": "fr",
  "DE": "de",
  "AT": "de",
  "CH": "de",
  "LI": "de",
  "ES": "es",
  "PT": "pt",
  "IT": "it",
  "SM": "it",
  "VA": "la",
  "MT": "mt",
  "GR": "el",
  "CY": "el",
  "AD": "ca",
  "PL": "pl",
  "CZ": "cs",
  "SK": "sk",
  "HU": "hu",
  "RO": "ro",
  "MD": "ro",
  "UA": "uk",
  "BY": "be",
  "RU": "ru",
  "HR": "hr",
  "SI": "sl",
  "RS": "sr",
  "BA": "bs",
  "ME": "sr",
  "MK": "mk",
  "AL": "sq",
  "XK": "sq",
  "BG": "bg",
  "LT": "lt",
  "LV": "lv",
  "EE": "et",
  "GE": "ka",
  "AM": "hy",
  "AZ": "az",
  "KZ": "kk",
  "UZ": "uz",
  "KG": "ky",
  "TJ": "tg",
  "TM": "tk",
  "MN": "mn",
  "TR": "tr",
  "IL": "he",
  "PS": "ar",
  "SA": "ar",
  "AE": "ar",
  "EG": "ar",
  "IQ": "ar",
  "SY": "ar",
  "JO": "ar",
  "LB": "ar",
  "KW": "ar",
  "QA": "ar",
  "BH": "ar",
  "OM": "ar",
  "YE": "ar",
  "DZ": "ar",
  "MA": "ar",
  "TN": "ar",
  "LY": "ar",
  "SD": "ar",
  "IR": "fa",
  "AF": "ps",
  "IN": "hi",
  "PK": "ur",
  "BD": "bn",
  "LK": "si",
  "NP": "ne",
  "BT": "dz",
  "MV": "en",
  "CN": "zh",
  "TW": "zh",
  "HK": "zh",
  "MO": "zh",
  "JP": "ja",
  "KR": "ko",
  "VN": "vi",
  "TH": "th",
  "ID": "id",
  "MY": "ms",
  "PH": "tl",
  "SG": "zh",
  "MM": "my",
  "KH": "km",
  "LA": "lo",
  "BN": "ms",
  "TL": "pt",
  "AU": "en",
  "NZ": "en",
  "FJ": "en",
  "PG": "en",
  "WS": "sm",
  "AS": "sm",
  "ZA": "zu",
  "NG": "yo",
  "KE": "sw",
  "TZ": "sw",
  "UG": "sw",
  "ET": "am",
  "ER": "ti",
  "SO": "so",
  "GH": "en",
  "CI": "fr",
  "SN": "wo",
  "CM": "fr",
  "CD": "ln",
  "CG": "ln",
  "AO": "pt",
  "MZ": "pt",
  "ZW": "sn",
  "MW": "ny",
  "MG": "mg",
  "RW": "rw",
  "BI": "rn",
  "LS": "st",
  "SZ": "en",
  "BW": "en",
  "NA": "af",
  "NE": "ha",
  "ML": "fr",
  "BF": "fr",
  "GN": "fr",
  "BJ": "fr",
  "TG": "fr",
  "GA": "fr",
  "TD": "fr",
  "CF": "fr",
  "LR": "en",
  "SL": "en",
  "GM": "wo",
  "GW": "pt",
  "CV": "pt",
  "ST": "pt",
  "KM": "ar",
  "MU": "en",
  "SC": "fr",
  "DJ": "so",
  "MR": "ar"
};

export function getLocaleFromCountry(countryCode?: string): Locale {
  if (!countryCode) return "en";
  const upper = countryCode.toUpperCase();
  return COUNTRY_TO_LOCALE_MAP[upper] || "en";
}

export function getLocaleFromBrowser(browserLang?: string): Locale {
  const navLang =
    browserLang ||
    (typeof navigator !== "undefined"
      ? navigator.language || (navigator.languages && navigator.languages[0])
      : "") ||
    "";
  const langCode = navLang.split("-")[0].toLowerCase() as Locale;
  if (DICTIONARIES[langCode]) {
    return langCode;
  }
  return "en";
}
