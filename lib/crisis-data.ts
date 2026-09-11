export type ContinentId = "all" | "europe" | "americas" | "asia" | "me-africa";

export interface Continent {
  id: ContinentId;
  name: string;
  shortName: string;
  icon: string;
}

export interface CrisisHotline {
  name: string;
  phone?: string;
  sms?: {
    number: string;
    keyword?: string;
  };
  website?: string;
  description: string;
  is24_7?: boolean;
  isFree?: boolean;
  isChat?: boolean;
}

export interface CountryCrisisInfo {
  code: string; // ISO 2-letter or unique identifier
  name: string; // English / International name
  nativeName?: string; // Local native name
  flag: string; // Emoji flag
  continent: "europe" | "americas" | "asia" | "me-africa";
  emergencyNumber: string; // General emergency (112, 911, 999...)
  regionNote?: string; // e.g. "Mesopotamia / Levant"
  hotlines: CrisisHotline[];
}

export const CONTINENTS: Continent[] = [
  { id: "all", name: "All Regions", shortName: "All", icon: "🌐" },
  { id: "europe", name: "Europe", shortName: "Europe", icon: "🏰" },
  { id: "americas", name: "Americas", shortName: "Americas", icon: "🌎" },
  { id: "asia", name: "Asia & Pacific", shortName: "Asia & Pacific", icon: "🌏" },
  { id: "me-africa", name: "Middle East & Africa", shortName: "Middle East & Africa", icon: "🏜️" },
];

export const COUNTRIES_DATA: CountryCrisisInfo[] = [
  // ==========================================
  // 1. EUROPE (49 Sovereign States & Key Regions)
  // ==========================================
  {
    code: "sk",
    name: "Slovakia",
    nativeName: "Slovensko",
    flag: "🇸🇰",
    continent: "europe",
    emergencyNumber: "112 / 155",
    hotlines: [
      {
        name: "Linka dôvery Nezábudka (LDN)",
        phone: "0800800566",
        website: "https://dusevnezdravie.sk/linky-pomoci/",
        description: "Bezplatná 24/7 anonymná linka psychologickej pomoci Ligy za duševné zdravie",
        is24_7: true,
        isFree: true,
      },
      {
        name: "IPčko.sk (Pomoc mladým)",
        phone: "0800500333",
        website: "https://ipcko.sk/",
        description: "24/7 bezplatná psychologická poradňa cez hovor, chat a e-mail",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Linka detskej istoty (LDI)",
        phone: "116111",
        website: "https://ldi.sk/",
        description: "Nonstop bezplatná linka pre deti a mladých ľudí",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cz",
    name: "Czech Republic",
    nativeName: "Česká republika",
    flag: "🇨🇿",
    continent: "europe",
    emergencyNumber: "112 / 155",
    hotlines: [
      {
        name: "Linka první psychické pomoci",
        phone: "116123",
        website: "https://linkapsychickepomoci.cz/",
        description: "Bezplatná 24/7 krizová linka pro dospělé v nouzi",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Linka bezpečí",
        phone: "116111",
        website: "https://www.linkabezpeci.cz/",
        description: "24/7 bezplatná pomoc pro děti, studenty a mladistvé",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Pražská linka důvěry",
        phone: "+420222580697",
        website: "https://www.csspraha.cz/prazska-linka-duvery",
        description: "Nonstop krizová intervence a psychologická podpora",
        is24_7: true,
      },
    ],
  },
  {
    code: "pl",
    name: "Poland",
    nativeName: "Polska",
    flag: "🇵🇱",
    continent: "europe",
    emergencyNumber: "112 / 999",
    hotlines: [
      {
        name: "Kryzysowy Telefon Zaufania",
        phone: "116123",
        website: "https://116123.edu.pl/",
        description: "Bezpłatny telefon zaufania dla osób dorosłych w kryzysie emocjonalnym (24/7)",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Telefon Zaufania dla Dzieci i Młodzieży",
        phone: "116111",
        website: "https://116111.pl/",
        description: "Całodobowa bezpłatna pomoc psychologiczna dla młodzieży",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "hu",
    name: "Hungary",
    nativeName: "Magyarország",
    flag: "🇭🇺",
    continent: "europe",
    emergencyNumber: "112 / 104",
    hotlines: [
      {
        name: "Magyar Lelki Elsősegély Telefonszolgálat (LESZ)",
        phone: "116123",
        website: "http://www.sos505.hu/",
        description: "Ingyenesen és éjjel-nappal hívható lelki elsősegély",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Kék Vonal Gyermekkrízis Alapítvány",
        phone: "116111",
        website: "https://kek-vonal.hu/",
        description: "Éjjel-nappal ingyenes lelkisegély-vonal fiataloknak",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "gb",
    name: "United Kingdom",
    nativeName: "Great Britain",
    flag: "🇬🇧",
    continent: "europe",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Samaritans UK",
        phone: "116123",
        website: "https://www.samaritans.org/",
        description: "24/7 free confidential emotional support for anyone in distress",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Shout Crisis Text Line",
        sms: { number: "85258", keyword: "SHOUT" },
        website: "https://giveusashout.org/",
        description: "Free 24/7 crisis text messaging service in the UK",
        is24_7: true,
        isFree: true,
      },
      {
        name: "NHS 111 Mental Health Services",
        phone: "111",
        website: "https://111.nhs.uk/",
        description: "Urgent medical & mental health assessment 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ie",
    name: "Ireland",
    nativeName: "Éire",
    flag: "🇮🇪",
    continent: "europe",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Samaritans Ireland",
        phone: "116123",
        website: "https://www.samaritans.org/ireland/",
        description: "Free 24/7 emotional support helpline",
        is24_7: true,
        isFree: true,
      },
      {
        name: "50808 Text Support",
        sms: { number: "50808", keyword: "HELLO" },
        website: "https://text50808.ie/",
        description: "Free, 24/7 text conversation with trained crisis volunteers",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "de",
    name: "Germany",
    nativeName: "Deutschland",
    flag: "🇩🇪",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "TelefonSeelsorge",
        phone: "08001110111",
        website: "https://www.telefonseelsorge.de/",
        description: "Kostenfreie und anonyme 24/7 Beratung per Telefon, Chat & Mail",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Nummer gegen Kummer",
        phone: "116111",
        website: "https://www.nummergegenkummer.de/",
        description: "Kostenlose telefonische Beratung für junge Menschen",
        isFree: true,
      },
    ],
  },
  {
    code: "at",
    name: "Austria",
    nativeName: "Österreich",
    flag: "🇦🇹",
    continent: "europe",
    emergencyNumber: "112 / 144",
    hotlines: [
      {
        name: "Telefonseelsorge Österreich",
        phone: "142",
        website: "https://www.telefonseelsorge.at/",
        description: "Kostenlos, vertraulich und 24 Stunden erreichbar",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Rat auf Draht",
        phone: "147",
        website: "https://www.rataufdraht.at/",
        description: "24/7 kostenlose Notrufnummer für Kinder und Jugendliche",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ch",
    name: "Switzerland",
    nativeName: "Schweiz / Suisse",
    flag: "🇨🇭",
    continent: "europe",
    emergencyNumber: "112 / 144",
    hotlines: [
      {
        name: "Die Dargebotene Hand / La Main Tendue",
        phone: "143",
        website: "https://www.143.ch/",
        description: "24/7 anonyme Beratung bei Sorgen, Ängsten und Lebenskrisen",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Pro Juventute",
        phone: "147",
        website: "https://www.147.ch/",
        description: "24/7 kostenlose Beratung für Kinder und Jugendliche",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "fr",
    name: "France",
    nativeName: "France",
    flag: "🇫🇷",
    continent: "europe",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "3114 - Numéro National Prévention Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "Ligne d'écoute gratuite, confidentielle et accessible 24h/24 et 7j/7",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "SOS Amitié",
        phone: "0972394050",
        website: "https://www.sos-amitie.com/",
        description: "Écoute anonyme et bienveillante 24h/24",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "be",
    name: "Belgium",
    nativeName: "België / Belgique",
    flag: "🇧🇪",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Zelfmoordlijn / Centre de Prévention",
        phone: "1813",
        website: "https://www.zelfmoord1813.be/",
        description: "Gratis en anoniem 24/7 bereikbaar via telefoon en chat",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Télé-Accueil",
        phone: "107",
        website: "https://www.tele-accueil.be/",
        description: "Écoute 24h/24 dans l'anonymat et le respect",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "lu",
    name: "Luxembourg",
    nativeName: "Lëtzebuerg",
    flag: "🇱🇺",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "SOS Détresse - Hëllef iwwer Telefon",
        phone: "454545",
        website: "https://454545.lu/",
        description: "Anonym Hëllef an Nout 24/7 op Lëtzebuergesch, Franséisch an Däitsch",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Kanner- a Jugendtelefon",
        phone: "116111",
        website: "https://www.kjt.lu/",
        description: "Gratis an anonym Berodung fir Kanner a Jugendlecher",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "it",
    name: "Italy",
    nativeName: "Italia",
    flag: "🇮🇹",
    continent: "europe",
    emergencyNumber: "112 / 118",
    hotlines: [
      {
        name: "Telefono Amico Italia",
        phone: "0223272327",
        website: "https://www.telefonoamico.it/",
        description: "Ascolto e supporto emotivo anonimo via telefono e WhatsApp",
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "es",
    name: "Spain",
    nativeName: "España",
    flag: "🇪🇸",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "024 Línea de Atención a la Conducta Suicida",
        phone: "024",
        website: "https://www.sanidad.gob.es/linea024/",
        description: "Línea telefónica oficial gratuita, confidencial y 24/7 en toda España",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Teléfono de la Esperanza",
        phone: "717003717",
        website: "https://telefonodelaesperanza.org/",
        description: "Servicio de intervención en crisis las 24 horas del día",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pt",
    name: "Portugal",
    nativeName: "Portugal",
    flag: "🇵🇹",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "SOS Voz Amiga",
        phone: "213544545",
        website: "https://sosvozamiga.org/",
        description: "Linha de apoio emocional e prevenção do suicídio (24/7 gratuito)",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Linha SNS 24",
        phone: "808242424",
        website: "https://www.sns24.gov.pt/",
        description: "Apoio psicológico do Serviço Nacional de Saúde 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "nl",
    name: "Netherlands",
    nativeName: "Nederland",
    flag: "🇳🇱",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "113 Zelfmoordpreventie",
        phone: "08000113",
        website: "https://www.113.nl/",
        description: "Gratis en anoniem 24/7 hulp per telefoon en online chat",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "se",
    name: "Sweden",
    nativeName: "Sverige",
    flag: "🇸🇪",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Självmordslinjen (Mind)",
        phone: "90101",
        website: "https://mind.se/hitta-hjalp/sjalvmordslinjen/",
        description: "Öppet dygnet runt, alla dagar på telefon och chatt",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "no",
    name: "Norway",
    nativeName: "Norge",
    flag: "🇳🇴",
    continent: "europe",
    emergencyNumber: "112 / 113",
    hotlines: [
      {
        name: "Mental Helse Hjelpetelefonen",
        phone: "116123",
        website: "https://mentalhelse.no/fa-hjelp/hjelpetelefonen",
        description: "Døgnåpen, gratis og anonym telefontjeneste",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "dk",
    name: "Denmark",
    nativeName: "Danmark",
    flag: "🇩🇰",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Livslinien",
        phone: "70201201",
        website: "https://www.livslinien.dk/",
        description: "Rådgivning ved selvmordstanker alle dage kl 11-05",
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "fi",
    name: "Finland",
    nativeName: "Suomi",
    flag: "🇫🇮",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "MIELI Kriisipuhelin",
        phone: "0925250111",
        website: "https://mieli.fi/tukea-ja-apua/kriisipuhelin/",
        description: "Avoinna 24/7 suomeksi, tarjoaa keskusteluapua vaikeissa tilanteissa",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "ee",
    name: "Estonia",
    nativeName: "Eesti",
    flag: "🇪🇪",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Eluliin Emotsionaalse toe telefon",
        phone: "6558088",
        website: "https://www.eluliin.ee/",
        description: "Emotsionaalne tugi ja nõustamine igal õhtul kl 19-07",
        isFree: true,
      },
    ],
  },
  {
    code: "lv",
    name: "Latvia",
    nativeName: "Latvija",
    flag: "🇱🇻",
    continent: "europe",
    emergencyNumber: "112 / 113",
    hotlines: [
      {
        name: "Krīžu un konsultāciju centrs Skalbes",
        phone: "67222922",
        website: "https://www.skalbes.lv/",
        description: "24/7 bezmaksas krīzes tālrunis psiholoģiskajam atbalstam",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "lt",
    name: "Lithuania",
    nativeName: "Lietuva",
    flag: "🇱🇹",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Vilties Linija",
        phone: "116123",
        website: "https://www.kpsc.lt/vilties-linija/",
        description: "Nemokama emocinė parama suaugusiems 24 valandas per parą",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gr",
    name: "Greece",
    nativeName: "Ελλάδα",
    flag: "🇬🇷",
    continent: "europe",
    emergencyNumber: "112 / 166",
    hotlines: [
      {
        name: "1018 - Γραμμή Παρέμβασης για την Αυτοκτονία",
        phone: "1018",
        website: "https://suicide-help.gr/",
        description: "24ωρη δωρεάν τηλεφωνική γραμμή βοήθειας και στήριξης",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cy",
    name: "Cyprus",
    nativeName: "Κύπρος / Kıbrıs",
    flag: "🇨🇾",
    continent: "europe",
    emergencyNumber: "112 / 199",
    hotlines: [
      {
        name: "Cyprus Samaritans",
        phone: "80007773",
        website: "https://www.cyprussamaritans.org/",
        description: "Free, confidential emotional support (18:00 - 22:00 daily)",
        isFree: true,
      },
    ],
  },
  {
    code: "ro",
    name: "Romania",
    nativeName: "România",
    flag: "🇷🇴",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Alianța Română de Prevenție a Suicidului",
        phone: "0800801200",
        website: "https://antisuicid.ro/",
        description: "Linie verde antisuicid gratuită și confidențială (19:00 - 07:00)",
        isFree: true,
      },
    ],
  },
  {
    code: "bg",
    name: "Bulgaria",
    nativeName: "България",
    flag: "🇧🇬",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Телефон на доверието (БЧК)",
        phone: "028164800",
        website: "https://redcross.bg/",
        description: "Безплатна психосоциална подкрепа от Червения кръст",
        isFree: true,
      },
    ],
  },
  {
    code: "hr",
    name: "Croatia",
    nativeName: "Hrvatska",
    flag: "🇭🇷",
    continent: "europe",
    emergencyNumber: "112 / 194",
    hotlines: [
      {
        name: "Centar za krizna stanja KBC Zagreb",
        phone: "+38512376335",
        website: "https://www.kbc-zagreb.hr/",
        description: "24/7 besplatna psihološka pomoć i krizna intervencija",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "rs",
    name: "Serbia",
    nativeName: "Srbija",
    flag: "🇷🇸",
    continent: "europe",
    emergencyNumber: "112 / 194",
    hotlines: [
      {
        name: "SOS Telefon za prevenciju suicida",
        phone: "0117777000",
        website: "https://lazalazarevic.rs/",
        description: "24/7 besplatna nacionalna linija za psihološku podršku",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ba",
    name: "Bosnia & Herzegovina",
    nativeName: "Bosna i Hercegovina",
    flag: "🇧🇦",
    continent: "europe",
    emergencyNumber: "112 / 124",
    hotlines: [
      {
        name: "Plavi Telefon BiH",
        phone: "080050305",
        website: "https://plavitelefon.ba/",
        description: "Besplatna savjetodavna linija za djecu i mlade",
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "me",
    name: "Montenegro",
    nativeName: "Crna Gora",
    flag: "🇲🇪",
    continent: "europe",
    emergencyNumber: "112 / 124",
    hotlines: [
      {
        name: "SOS Telefon za Žene i Djecu",
        phone: "+38220664366",
        description: "Besplatna psihološka pomoć i krizno sklonište 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "xk",
    name: "Kosovo",
    nativeName: "Kosova",
    flag: "🇽🇰",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Linja e Jetës (Lifeline Kosovo)",
        phone: "080012345",
        website: "https://linjaejtes.org/",
        description: "Linjë falas dhe konfidenciale për parandalimin e vetëvrasjeve (18:00 - 02:00)",
        isFree: true,
      },
    ],
  },
  {
    code: "si",
    name: "Slovenia",
    nativeName: "Slovenija",
    flag: "🇸🇮",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Zaupna telefona Samarijan in Sopotnik",
        phone: "116123",
        website: "https://www.telefon-samarijan.si/",
        description: "24/7 brezplačna pomoč v duševni stiski",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "al",
    name: "Albania",
    nativeName: "Shqipëria",
    flag: "🇦🇱",
    continent: "europe",
    emergencyNumber: "112 / 127",
    hotlines: [
      {
        name: "Linja Kombëtare Alo 116",
        phone: "116111",
        website: "https://alo116.al/",
        description: "24/7 linjë falas dhe konfidenciale e ndihmës psikologjike",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mk",
    name: "North Macedonia",
    nativeName: "Северна Македонија",
    flag: "🇲🇰",
    continent: "europe",
    emergencyNumber: "112 / 194",
    hotlines: [
      {
        name: "Ало Докторе & Психолошка Поддршка",
        phone: "+389215123",
        description: "24/7 бесплатна психолошка консултација",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "md",
    name: "Moldova",
    nativeName: "Republica Moldova",
    flag: "🇲🇩",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Pentru Viață (Prevenire Suicid)",
        website: "https://pentruviata.md/",
        description: "Consiliere psihologică anonimă și suport emoțional online",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "ua",
    name: "Ukraine",
    nativeName: "Україна",
    flag: "🇺🇦",
    continent: "europe",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "Lifeline Ukraine",
        phone: "7333",
        website: "https://lifelineukraine.com/",
        description: "24/7 безкоштовна та анонімна психологічна підтримка",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "ge",
    name: "Georgia",
    nativeName: "საქართველო",
    flag: "🇬🇪",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "National Crisis Support Line 116 006",
        phone: "116006",
        description: "24/7 psychological support and crisis intervention line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "am",
    name: "Armenia",
    nativeName: "Հայաստան",
    flag: "🇦🇲",
    continent: "europe",
    emergencyNumber: "911 / 112",
    hotlines: [
      {
        name: "Trust Mental Health Hotline",
        phone: "+37410538888",
        description: "Psychological counseling and emergency mental support",
        isFree: true,
      },
    ],
  },
  {
    code: "az",
    name: "Azerbaijan",
    nativeName: "Azərbaycan",
    flag: "🇦🇿",
    continent: "europe",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "Psychological Crisis Hotline 116 111",
        phone: "116111",
        description: "24/7 emotional assistance and psychological help",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "is",
    name: "Iceland",
    nativeName: "Ísland",
    flag: "🇮🇸",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Hjálparsími Rauða Krossins (1717)",
        phone: "1717",
        website: "https://www.raudikrossinn.is/",
        description: "Opið allan sólarhringinn, gjaldfrjálst og í fullum trúnaði",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "mt",
    name: "Malta",
    nativeName: "Malta",
    flag: "🇲🇹",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Crisis Resolution Malta",
        phone: "+35699339966",
        website: "https://www.crisismalta.com/",
        description: "24/7 immediate clinical crisis consultation",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mc",
    name: "Monaco",
    nativeName: "Monaco",
    flag: "🇲🇨",
    continent: "europe",
    emergencyNumber: "112 / 18",
    hotlines: [
      {
        name: "Écoute Jeunes Monaco",
        phone: "+37798984040",
        description: "Service d'écoute et d'accompagnement psychologique gratuit",
        isFree: true,
      },
    ],
  },
  {
    code: "ad",
    name: "Andorra",
    nativeName: "Andorra",
    flag: "🇦🇩",
    continent: "europe",
    emergencyNumber: "112 / 116",
    hotlines: [
      {
        name: "Telèfon d'Atenció Emocional Andorra",
        phone: "177",
        description: "Línia d'ajuda psicològica gratuïta i confidencial 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "li",
    name: "Liechtenstein",
    nativeName: "Liechtenstein",
    flag: "🇱🇮",
    continent: "europe",
    emergencyNumber: "112 / 144",
    hotlines: [
      {
        name: "Die Dargebotene Hand",
        phone: "143",
        website: "https://www.143.ch/",
        description: "24/7 anonyme Krisenhilfe und Lebensberatung",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sm",
    name: "San Marino",
    nativeName: "San Marino",
    flag: "🇸🇲",
    continent: "europe",
    emergencyNumber: "112 / 118",
    hotlines: [
      {
        name: "Pronto Soccorso Psicologico San Marino",
        phone: "+3780549994111",
        description: "Servizio di pronto intervento e supporto psicologico 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "va",
    name: "Vatican City",
    nativeName: "Status Civitatis Vaticanae",
    flag: "🇻🇦",
    continent: "europe",
    emergencyNumber: "112 / +39 06 698112",
    hotlines: [
      {
        name: "Servizio di Ascolto e Accompagnamento",
        phone: "+390669883014",
        description: "Pastoral and emotional listening center",
        isFree: true,
      },
    ],
  },
  {
    code: "ru",
    name: "Russia",
    nativeName: "Россия",
    flag: "🇷🇺",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Неотложная психологическая помощь",
        phone: "051",
        website: "https://msph.ru/",
        description: "Круглосуточная бесплатная психологическая помощь",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ca-es",
    name: "Catalonia",
    nativeName: "Catalunya",
    flag: "🏴",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Telèfon de l'Esperança Catalunya",
        phone: "+34934144848",
        website: "https://telefonesperanca.org/",
        description: "24/7 atenció i suport emocional gratuït",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // ==========================================
    {
    code: "gi",
    name: "Gibraltar",
    nativeName: "Gibraltar",
    flag: "🇬🇮",
    continent: "europe",
    emergencyNumber: "112 / 199",
    hotlines: [
      {
        name: "Gibraltar Community Mental Health Team",
        phone: "+35020072727",
        website: "https://www.gha.gi/",
        description: "Crisis intervention and 24/7 mental health emergency support via St Bernard's Hospital",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Childline Gibraltar",
        phone: "8008",
        website: "https://childline.gi/",
        description: "Free and confidential helpline for children, young people and families",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "im",
    name: "Isle of Man",
    nativeName: "Ellan Vannin",
    flag: "🇮🇲",
    continent: "europe",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Samaritans Isle of Man",
        phone: "116123",
        website: "https://www.samaritans.org/branches/isle-of-man/",
        description: "Free, 24/7 listening service for anyone struggling or in crisis",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Crisis Response Team (Manx Care)",
        phone: "+441624642884",
        description: "24/7 acute mental health crisis intervention and assessment",
        is24_7: true,
      },
    ],
  },
  {
    code: "je",
    name: "Jersey",
    nativeName: "Jersey (Jèrri)",
    flag: "🇯🇪",
    continent: "europe",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Jersey Samaritans",
        phone: "116123",
        website: "https://www.samaritans.org/branches/jersey/",
        description: "24/7 confidential emotional support for anyone in emotional distress",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Mental Health Crisis Team Jersey",
        phone: "+441534445290",
        description: "24-hour mental health crisis team for assessment and immediate support",
        is24_7: true,
      },
    ],
  },
  {
    code: "gg",
    name: "Guernsey",
    nativeName: "Guernsey (Guernésiais)",
    flag: "🇬🇬",
    continent: "europe",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Guernsey Samaritans",
        phone: "116123",
        website: "https://www.samaritans.org/branches/guernsey/",
        description: "Free 24/7 emotional support and crisis listening",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Guernsey Mind Crisis Line",
        phone: "+441481722959",
        website: "https://www.guernseymind.org.gg/",
        description: "Confidential mental health support and counseling guidance",
        isFree: true,
      },
    ],
  },
  {
    code: "fo",
    name: "Faroe Islands",
    nativeName: "Føroyar",
    flag: "🇫🇴",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Tú & Eg (Child & Youth Helpline)",
        phone: "116111",
        website: "https://www.barnabati.fo/",
        description: "Ókeypis og dulnevnt ráðgevingartænasta fyri børn og ung",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Kríshjálp Landssjúkrahúsið",
        phone: "+298304500",
        description: "24/7 psykiatrisk bráðfeingishjálp og kríshjálp",
        is24_7: true,
      },
    ],
  },
  {
    code: "ax",
    name: "Åland Islands",
    nativeName: "Åland",
    flag: "🇦🇽",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Mieli Kristelefon Åland / Finland",
        phone: "0925250112",
        website: "https://mieli.fi/sv/",
        description: "Samtalsstöd vid kris på svenska, öppet dygnet runt",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Psykiatriska kliniken ÅHS",
        phone: "+35818535112",
        description: "Akut psykiatrisk hjälp och krisstöd dygnet runt",
        is24_7: true,
      },
    ],
  },
  {
    code: "sj",
    name: "Svalbard and Jan Mayen",
    nativeName: "Svalbard og Jan Mayen",
    flag: "🇸🇯",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Longyearbyen Sykehus Akutt",
        phone: "+4779024200",
        description: "24/7 akutt medisinsk og psykososial kriseberedskap i Arktis",
        is24_7: true,
      },
      {
        name: "Mental Helse Hjelpetelefonen",
        phone: "116123",
        website: "https://mentalhelse.no/",
        description: "Døgnåpen, gratis og anonym hjelpetelefon for alle i Norge og på Svalbard",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // 2. AMERICAS (35 Sovereign States & Key Regions)
  // ==========================================
  {
    code: "us",
    name: "United States",
    nativeName: "United States of America",
    flag: "🇺🇸",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "988 Suicide & Crisis Lifeline",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "Free, confidential 24/7 support across the United States. Call or text 988.",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Crisis Text Line",
        sms: { number: "741741", keyword: "HOME" },
        website: "https://www.crisistextline.org/",
        description: "Text HOME to 741741 to connect with a crisis counselor 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ca",
    name: "Canada",
    nativeName: "Canada",
    flag: "🇨🇦",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "988 Suicide Crisis Helpline",
        phone: "988",
        website: "https://988.ca/",
        description: "Toll-free 24/7 bilingual (EN/FR) call and text support across Canada",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mx",
    name: "Mexico",
    nativeName: "México",
    flag: "🇲🇽",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea de la Vida (CONASAMA)",
        phone: "8009112000",
        website: "https://www.gob.mx/salud/conasama",
        description: "Servicio gratuito 24/7 de atención a la salud mental y adicciones",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "br",
    name: "Brazil",
    nativeName: "Brasil",
    flag: "🇧🇷",
    continent: "americas",
    emergencyNumber: "192 / 190",
    hotlines: [
      {
        name: "CVV - Centro de Valorização da Vida",
        phone: "188",
        website: "https://www.cvv.org.br/",
        description: "Apoio emocional e prevenção do suicídio gratuito 24h por telefone e chat",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "ar",
    name: "Argentina",
    nativeName: "Argentina",
    flag: "🇦🇷",
    continent: "americas",
    emergencyNumber: "107 / 911",
    hotlines: [
      {
        name: "Centro de Asistencia al Suicida (CAS)",
        phone: "135",
        website: "https://www.cas.org.ar/",
        description: "Línea gratuita 135 (desde Buenos Aires) o 011-5275-1135 en todo el país (24/7)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "co",
    name: "Colombia",
    nativeName: "Colombia",
    flag: "🇨🇴",
    continent: "americas",
    emergencyNumber: "123",
    hotlines: [
      {
        name: "Línea 106 'El poder de ser escuchado'",
        phone: "106",
        website: "https://www.saludcapital.gov.co/",
        description: "Línea gratuita y confidencial de ayuda psicológica 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cl",
    name: "Chile",
    nativeName: "Chile",
    flag: "🇨🇱",
    continent: "americas",
    emergencyNumber: "131 / 133",
    hotlines: [
      {
        name: "Línea *4141 'No Estás Solo'",
        phone: "*4141",
        website: "https://www.minsal.cl/",
        description: "Línea telefónica gratuita y 24/7 para prevención del suicidio",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pe",
    name: "Peru",
    nativeName: "Perú",
    flag: "🇵🇪",
    continent: "americas",
    emergencyNumber: "106 / 105",
    hotlines: [
      {
        name: "Línea 113 Salud Mental (Opción 5)",
        phone: "113",
        website: "https://www.gob.pe/minsa",
        description: "Línea gratuita 24/7 con psicólogos especializados",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ec",
    name: "Ecuador",
    nativeName: "Ecuador",
    flag: "🇪🇨",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea 171 Salud Mental",
        phone: "171",
        description: "Línea gratuita nacional del Ministerio de Salud Pública",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ve",
    name: "Venezuela",
    nativeName: "Venezuela",
    flag: "🇻🇪",
    continent: "americas",
    emergencyNumber: "911 / 171",
    hotlines: [
      {
        name: "Línea de Ayuda Psicológica FEPAP",
        phone: "+584242925588",
        description: "Primeros auxilios psicológicos y atención en crisis",
        isFree: true,
      },
    ],
  },
  {
    code: "uy",
    name: "Uruguay",
    nativeName: "Uruguay",
    flag: "🇺🇾",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea Vida Prevención del Suicidio",
        phone: "08000767",
        website: "https://www.asse.com.uy/",
        description: "Línea gratuita nacional 24/7 (0800 0767 o *0767)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "py",
    name: "Paraguay",
    nativeName: "Paraguay",
    flag: "🇵🇾",
    continent: "americas",
    emergencyNumber: "911 / 141",
    hotlines: [
      {
        name: "Línea 154 de Salud Mental",
        phone: "154",
        description: "Servicio gratuito de contención y orientación psicológica",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bo",
    name: "Bolivia",
    nativeName: "Bolivia",
    flag: "🇧🇴",
    continent: "americas",
    emergencyNumber: "911 / 118",
    hotlines: [
      {
        name: "Línea de la Vida Bolivia",
        phone: "800113040",
        description: "Línea gratuita de apoyo y primeros auxilios psicológicos",
        isFree: true,
      },
    ],
  },
  {
    code: "cr",
    name: "Costa Rica",
    nativeName: "Costa Rica",
    flag: "🇨🇷",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea Aquí Estoy",
        phone: "8002737825",
        website: "https://psicologiacr.com/",
        description: "Línea gratuita para la prevención del suicidio",
        isFree: true,
      },
    ],
  },
  {
    code: "pa",
    name: "Panama",
    nativeName: "Panamá",
    flag: "🇵🇦",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea 169 de Apoyo Emocional",
        phone: "169",
        description: "Línea telefónica gratuita marcando opción 2",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gt",
    name: "Guatemala",
    nativeName: "Guatemala",
    flag: "🇬🇹",
    continent: "americas",
    emergencyNumber: "123 / 110",
    hotlines: [
      {
        name: "Línea de Apoyo Psicológico 1517",
        phone: "1517",
        description: "Línea telefónica nacional de ayuda en salud mental",
        isFree: true,
      },
    ],
  },
  {
    code: "hn",
    name: "Honduras",
    nativeName: "Honduras",
    flag: "🇭🇳",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Teléfono de la Esperanza Honduras",
        phone: "+50425578011",
        description: "Línea de intervención en crisis y apoyo emocional 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sv",
    name: "El Salvador",
    nativeName: "El Salvador",
    flag: "🇸🇻",
    continent: "americas",
    emergencyNumber: "911 / 132",
    hotlines: [
      {
        name: "Línea Te Acompaño 131",
        phone: "131",
        description: "Línea gratuita 24/7 de primeros auxilios psicológicos",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ni",
    name: "Nicaragua",
    nativeName: "Nicaragua",
    flag: "🇳🇮",
    continent: "americas",
    emergencyNumber: "118 / 128",
    hotlines: [
      {
        name: "Línea de Apoyo Psicosocial",
        phone: "+50588880000",
        description: "Orientación psicológica de emergencia",
        isFree: true,
      },
    ],
  },
  {
    code: "bz",
    name: "Belize",
    nativeName: "Belize",
    flag: "🇧🇿",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Belize Mental Health Association Crisis Line",
        phone: "+5016045610",
        description: "24/7 crisis and suicide prevention line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cu",
    name: "Cuba",
    nativeName: "Cuba",
    flag: "🇨🇺",
    continent: "americas",
    emergencyNumber: "106 / 104",
    hotlines: [
      {
        name: "Línea Confidencial Antidrogas y Salud Mental",
        phone: "103",
        description: "Servicio telefónico gratuito de orientación y ayuda psicológica",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "do",
    name: "Dominican Republic",
    nativeName: "República Dominicana",
    flag: "🇩🇴",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea de Primera Respuesta en Salud Mental",
        phone: "8092001400",
        description: "Línea gratuita de atención a emergencias emocionales",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ht",
    name: "Haiti",
    nativeName: "Haïti",
    flag: "🇭🇹",
    continent: "americas",
    emergencyNumber: "114 / 118",
    hotlines: [
      {
        name: "Ligne d'Écoute Psychologique Haïti",
        phone: "177",
        description: "Soutien émotionnel et assistance psychosociale d'urgence",
        isFree: true,
      },
    ],
  },
  {
    code: "jm",
    name: "Jamaica",
    nativeName: "Jamaica",
    flag: "🇯🇲",
    continent: "americas",
    emergencyNumber: "119 / 110",
    hotlines: [
      {
        name: "SafeSpot Youth Helpline",
        phone: "8887233776",
        website: "https://safespotja.com/",
        description: "24/7 free toll-free line & WhatsApp (+1-876-439-5199)",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "bs",
    name: "Bahamas",
    nativeName: "The Bahamas",
    flag: "🇧🇸",
    continent: "americas",
    emergencyNumber: "911 / 919",
    hotlines: [
      {
        name: "Bahamas Crisis Centre Hotline",
        phone: "+12423280922",
        website: "https://bahamascrisiscentre.org/",
        description: "24/7 crisis support line for emergency assistance",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bb",
    name: "Barbados",
    nativeName: "Barbados",
    flag: "🇧🇧",
    continent: "americas",
    emergencyNumber: "911 / 511",
    hotlines: [
      {
        name: "Samaritans / Lifeline Barbados",
        phone: "+12464299999",
        description: "24-hour emotional support and suicide crisis line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tt",
    name: "Trinidad & Tobago",
    nativeName: "Trinidad and Tobago",
    flag: "🇹🇹",
    continent: "americas",
    emergencyNumber: "999 / 811",
    hotlines: [
      {
        name: "Lifeline Trinidad & Tobago",
        phone: "8005588",
        website: "https://www.lifelinetnt.org/",
        description: "24/7 free confidential crisis and suicide intervention (800-5588)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "lc",
    name: "Saint Lucia",
    nativeName: "Saint Lucia",
    flag: "🇱🇨",
    continent: "americas",
    emergencyNumber: "911 / 999",
    hotlines: [
      {
        name: "Saint Lucia Crisis Center Line",
        phone: "203",
        description: "24/7 free mental health and domestic crisis hotline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "vc",
    name: "Saint Vincent & the Grenadines",
    nativeName: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    continent: "americas",
    emergencyNumber: "911 / 999",
    hotlines: [
      {
        name: "National Mental Health Support Line",
        phone: "+17844584218",
        description: "Crisis counseling and psychiatric support",
        isFree: true,
      },
    ],
  },
  {
    code: "gd",
    name: "Grenada",
    nativeName: "Grenada",
    flag: "🇬🇩",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Grenada Crisis Intervention Line",
        phone: "+14734404739",
        description: "Confidential emotional support and guidance",
        isFree: true,
      },
    ],
  },
  {
    code: "ag",
    name: "Antigua & Barbuda",
    nativeName: "Antigua and Barbuda",
    flag: "🇦🇬",
    continent: "americas",
    emergencyNumber: "911 / 999",
    hotlines: [
      {
        name: "Mental Health Crisis Helpline",
        phone: "+12684620000",
        description: "24/7 emergency psychological response",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kn",
    name: "Saint Kitts & Nevis",
    nativeName: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "National Crisis Helpline",
        phone: "+18694652551",
        description: "Emergency emotional support",
        isFree: true,
      },
    ],
  },
  {
    code: "dm",
    name: "Dominica",
    nativeName: "Dominica",
    flag: "🇩🇲",
    continent: "americas",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Dominica Psychological Crisis Response",
        phone: "+17672663000",
        description: "Confidential counseling line",
        isFree: true,
      },
    ],
  },
  {
    code: "gy",
    name: "Guyana",
    nativeName: "Guyana",
    flag: "🇬🇾",
    continent: "americas",
    emergencyNumber: "911 / 913",
    hotlines: [
      {
        name: "Inter-Agency Suicide Prevention Helpline",
        phone: "+5922230001",
        description: "24/7 toll-free crisis helpline (+592-223-0009 / +592-600-7896)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sr",
    name: "Suriname",
    nativeName: "Suriname",
    flag: "🇸🇷",
    continent: "americas",
    emergencyNumber: "115 / 112",
    hotlines: [
      {
        name: "PCS Hulplijn Suriname (Psychiatrisch Centrum)",
        phone: "114",
        description: "24/7 gratis crisislijn voor psychosociale hulp",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // ==========================================
    {
    code: "gl",
    name: "Greenland",
    nativeName: "Kalaallit Nunaat",
    flag: "🇬🇱",
    continent: "americas",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Tusaannga (Crisis Hotline Greenland)",
        phone: "135",
        sms: { number: "135" },
        website: "https://tusaannga.gl/",
        description: "24/7 akeqanngitsumik oqaloqateqarneq SMS-ikkut imaluunniit oqarasuaatikkut",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Mælkebøtten Krisehjelp",
        phone: "+299324024",
        description: "Akutt krisestøtte for barn, unge og familier",
        is24_7: true,
      },
    ],
  },
  {
    code: "bm",
    name: "Bermuda",
    nativeName: "Bermuda",
    flag: "🇧🇲",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Mid-Atlantic Wellness Institute 24/7 Crisis Line",
        phone: "+14412363770",
        website: "https://bermudahospitals.bm/",
        description: "24-hour psychiatric and emotional crisis helpline",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Women's Resource Centre Crisis Line",
        phone: "+14412953882",
        description: "Confidential emotional support and crisis assistance",
        isFree: true,
      },
    ],
  },
  {
    code: "ky",
    name: "Cayman Islands",
    nativeName: "Cayman Islands",
    flag: "🇰🇾",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Mental Health Helpline Cayman",
        phone: "18005346463",
        website: "https://www.hsa.ky/",
        description: "Toll-free 24/7 confidential mental health support and crisis counseling",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Cayman Islands Crisis Centre (CICC)",
        phone: "+13459432422",
        website: "https://www.cicc.ky/",
        description: "24/7 emergency shelter and crisis intervention hotline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "vg",
    name: "British Virgin Islands",
    nativeName: "British Virgin Islands",
    flag: "🇻🇬",
    continent: "americas",
    emergencyNumber: "911 / 999",
    hotlines: [
      {
        name: "BVI Community Mental Health Support",
        phone: "+12848527500",
        website: "https://bvihsa.vg/",
        description: "Emergency psychosocial support and behavioral health services",
        is24_7: true,
      },
    ],
  },
  {
    code: "aw",
    name: "Aruba",
    nativeName: "Aruba",
    flag: "🇦🇼",
    continent: "americas",
    emergencyNumber: "911 / 100",
    hotlines: [
      {
        name: "Respaldo Mental Health Care",
        phone: "+2972815000",
        website: "https://respaldo.aw/",
        description: "Crisisopvang en 24/7 acute psychiatrische hulpverlening",
        is24_7: true,
      },
      {
        name: "Telefon pa Hubentud (Youth Line)",
        phone: "131",
        description: "Gratis y anonimo guia y sosten pa hobennan",
        isFree: true,
      },
    ],
  },
  {
    code: "cw",
    name: "Curaçao",
    nativeName: "Kòrsou",
    flag: "🇨🇼",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Krus Kòrá Krise Hotline (Red Cross Curaçao)",
        phone: "917",
        description: "24/7 sosten sikológiko i krísis grátis",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Klinika Capriles Crisisdienst",
        phone: "+59997374700",
        website: "https://klinikacapriles.org/",
        description: "24/7 psychiatrische spoedhulp en crisisopvang",
        is24_7: true,
      },
    ],
  },
  {
    code: "sx",
    name: "Sint Maarten",
    nativeName: "Sint Maarten (Dutch part)",
    flag: "🇸🇽",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Mental Health Foundation Sint Maarten",
        phone: "+17215205556",
        website: "https://www.mhf-sxm.com/",
        description: "24/7 emergency psychiatric and crisis intervention line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bq",
    name: "Bonaire, Sint Eustatius and Saba",
    nativeName: "Caribisch Nederland",
    flag: "🇧🇶",
    continent: "americas",
    emergencyNumber: "911 / 112",
    hotlines: [
      {
        name: "Mental Health Caribbean (MHC) Crisis Line",
        phone: "+5997170150",
        website: "https://mentalhealthcaribbean.com/",
        description: "24/7 acute crisisdienst voor Bonaire, Sint Eustatius en Saba",
        is24_7: true,
      },
    ],
  },
  {
    code: "gp",
    name: "Guadeloupe",
    nativeName: "Guadeloupe",
    flag: "🇬🇵",
    continent: "americas",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Numéro National de Prévention du Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "24h/24 et 7j/7, appel gratuit et confidentiel avec des professionnels de santé",
        is24_7: true,
        isFree: true,
      },
      {
        name: "SOS Écoute Guadeloupe",
        phone: "0800100811",
        description: "Écoute et soutien psychologique sans jugement",
        isFree: true,
      },
    ],
  },
  {
    code: "mq",
    name: "Martinique",
    nativeName: "Martinique",
    flag: "🇲🇶",
    continent: "americas",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Numéro National de Prévention du Suicide (3114)",
        phone: "3114",
        website: "https://3114.fr/",
        description: "Ligne nationale accessible 24/7 depuis la Martinique, gratuite et confidentielle",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gf",
    name: "French Guiana",
    nativeName: "Guyane",
    flag: "🇬🇫",
    continent: "americas",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Numéro National de Prévention du Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "24/7 écoute professionnelle et prise en charge de crise suicidaire",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bl",
    name: "Saint Barthélemy",
    nativeName: "Saint-Barthélemy",
    flag: "🇧🇱",
    continent: "americas",
    emergencyNumber: "112 / 18",
    hotlines: [
      {
        name: "Ligne 3114 Prévention Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "Service d'écoute et d'intervention 24/7 gratuit",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mf",
    name: "Saint Martin (French part)",
    nativeName: "Saint-Martin",
    flag: "🇲🇫",
    continent: "americas",
    emergencyNumber: "112 / 18",
    hotlines: [
      {
        name: "Ligne 3114 Prévention Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "Écoute et soutien psychologique 24h/24",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pm",
    name: "Saint Pierre and Miquelon",
    nativeName: "Saint-Pierre-et-Miquelon",
    flag: "🇵🇲",
    continent: "americas",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Ligne 3114 & Centre Hospitalier François Dunan",
        phone: "3114",
        website: "https://3114.fr/",
        description: "24/7 soutien psychologique d'urgence",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tc",
    name: "Turks and Caicos Islands",
    nativeName: "Turks and Caicos Islands",
    flag: "🇹🇨",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "TCI Department of Mental Health Support",
        phone: "+16493383333",
        website: "https://gov.tc/",
        description: "Crisis assessment, counseling, and 24/7 hospital liaison support",
        is24_7: true,
      },
    ],
  },
  {
    code: "ai",
    name: "Anguilla",
    nativeName: "Anguilla",
    flag: "🇦🇮",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Anguilla Mental Health Support Unit",
        phone: "+12644972637",
        description: "Crisis support line and Princess Alexandra Hospital emergency services",
        is24_7: true,
      },
    ],
  },
  {
    code: "ms",
    name: "Montserrat",
    nativeName: "Montserrat",
    flag: "🇲🇸",
    continent: "americas",
    emergencyNumber: "911 / 999",
    hotlines: [
      {
        name: "Glendon Hospital Mental Health Services",
        phone: "+16644912552",
        description: "Emergency psychological assistance and clinical crisis care",
        is24_7: true,
      },
    ],
  },
  {
    code: "fk",
    name: "Falkland Islands",
    nativeName: "Falkland Islands (Islas Malvinas)",
    flag: "🇫🇰",
    continent: "americas",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "King Edward VII Memorial Hospital (KEMH) Crisis Support",
        phone: "+50028000",
        website: "https://www.falklands.gov.fk/",
        description: "24/7 medical and emotional crisis counseling line for island residents",
        is24_7: true,
      },
    ],
  },

  // 3. ASIA & PACIFIC (46 Sovereign States & Territories)
  // ==========================================
  {
    code: "jp",
    name: "Japan",
    nativeName: "日本 (Nihon)",
    flag: "🇯🇵",
    continent: "asia",
    emergencyNumber: "110 / 119",
    hotlines: [
      {
        name: "TELL Lifeline (English & Japanese)",
        phone: "0357740992",
        website: "https://telljp.com/",
        description: "Free, anonymous mental health counseling & chat in Japan",
        isFree: true,
        isChat: true,
      },
      {
        name: "Inochi no Denwa",
        phone: "0570783556",
        website: "https://www.inochinodenwa.org/",
        description: "24/7 nationwide suicide prevention hotline in Japan",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cn",
    name: "China",
    nativeName: "中国 (China)",
    flag: "🇨🇳",
    continent: "asia",
    emergencyNumber: "120 / 110",
    hotlines: [
      {
        name: "Beijing Suicide Research & Prevention Center",
        phone: "8008101117",
        website: "http://www.crisis.org.cn/",
        description: "24/7 toll-free crisis psychological lifeline (010-82951332)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "hk",
    name: "Hong Kong",
    nativeName: "香港",
    flag: "🇭🇰",
    continent: "asia",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "The Samaritan Befrienders Hong Kong",
        phone: "+85223892222",
        website: "https://sbhk.org.hk/",
        description: "24/7 multilingual suicide prevention emotional support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tw",
    name: "Taiwan",
    nativeName: "台灣",
    flag: "🇹🇼",
    continent: "asia",
    emergencyNumber: "110 / 119",
    hotlines: [
      {
        name: "1925 Peace Line (安心專線)",
        phone: "1925",
        description: "24/7 toll-free mental health support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kr",
    name: "South Korea",
    nativeName: "대한민국",
    flag: "🇰🇷",
    continent: "asia",
    emergencyNumber: "112 / 119",
    hotlines: [
      {
        name: "109 National Suicide Prevention Hotline",
        phone: "109",
        website: "https://www.mentalhealth.go.kr/",
        description: "24/7 toll-free integrated crisis mental health helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kp",
    name: "North Korea",
    nativeName: "조선민주주의인민공화국",
    flag: "🇰🇵",
    continent: "asia",
    emergencyNumber: "119 / 112",
    hotlines: [
      {
        name: "Red Cross Red Crescent First Aid Support",
        website: "https://www.ifrc.org/",
        description: "Humanitarian medical and psychological first aid",
        isFree: true,
      },
    ],
  },
  {
    code: "sg",
    name: "Singapore",
    nativeName: "Singapore",
    flag: "🇸🇬",
    continent: "asia",
    emergencyNumber: "995 / 999",
    hotlines: [
      {
        name: "SOS (Samaritans of Singapore)",
        phone: "1767",
        website: "https://www.sos.org.sg/",
        description: "24/7 toll-free crisis hotline and WhatsApp (91511767)",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "au",
    name: "Australia",
    nativeName: "Australia",
    flag: "🇦🇺",
    continent: "asia",
    emergencyNumber: "000",
    hotlines: [
      {
        name: "Lifeline Australia",
        phone: "131114",
        sms: { number: "0477131114" },
        website: "https://www.lifeline.org.au/",
        description: "24/7 free crisis support and suicide prevention services",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "nz",
    name: "New Zealand",
    nativeName: "Aotearoa",
    flag: "🇳🇿",
    continent: "asia",
    emergencyNumber: "111",
    hotlines: [
      {
        name: "1737 Need to Talk?",
        phone: "1737",
        sms: { number: "1737" },
        website: "https://1737.org.nz/",
        description: "Free 24/7 call or text to connect with a counsellor",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "in",
    name: "India",
    nativeName: "भारत (Bharat)",
    flag: "🇮🇳",
    continent: "asia",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Tele-MANAS Helpline",
        phone: "14416",
        website: "https://telemanas.mohfw.gov.in/",
        description: "Government of India 24/7 toll-free psychological counseling (1800-891-4416)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pk",
    name: "Pakistan",
    nativeName: "پاکستان (Pakistan)",
    flag: "🇵🇰",
    continent: "asia",
    emergencyNumber: "1122 / 15",
    hotlines: [
      {
        name: "Umang Mental Health Helpline",
        phone: "+923117786264",
        website: "https://www.umang.com.pk/",
        description: "24/7 certified clinical psychologists in Pakistan",
        is24_7: true,
      },
    ],
  },
  {
    code: "bd",
    name: "Bangladesh",
    nativeName: "বাংলাদেশ (Bangladesh)",
    flag: "🇧🇩",
    continent: "asia",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Kaan Pete Roi",
        phone: "+8801779554391",
        website: "https://shuni.org/",
        description: "First emotional support & suicide helpline in Bangladesh",
        isFree: true,
      },
    ],
  },
  {
    code: "lk",
    name: "Sri Lanka",
    nativeName: "ශ්‍රී ලංකාව",
    flag: "🇱🇰",
    continent: "asia",
    emergencyNumber: "119 / 110",
    hotlines: [
      {
        name: "National Mental Health Helpline 1926",
        phone: "1926",
        description: "24/7 toll-free crisis support (Call 1926 / WhatsApp)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "np",
    name: "Nepal",
    nativeName: "नेपाल",
    flag: "🇳🇵",
    continent: "asia",
    emergencyNumber: "100 / 102",
    hotlines: [
      {
        name: "National Suicide Prevention Helpline",
        phone: "1166",
        description: "Government of Nepal 24/7 toll-free psychological support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bt",
    name: "Bhutan",
    nativeName: "འབྲུག (Bhutan)",
    flag: "🇧🇹",
    continent: "asia",
    emergencyNumber: "112 / 113",
    hotlines: [
      {
        name: "Bhutan National Mental Health Helpline 112",
        phone: "112",
        description: "24/7 toll-free emergency psychiatric and emotional support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mv",
    name: "Maldives",
    nativeName: "ދިވެހިރާއްޖެ (Maldives)",
    flag: "🇲🇻",
    continent: "asia",
    emergencyNumber: "102 / 119",
    hotlines: [
      {
        name: "National Mental Health Center Helpline",
        phone: "1425",
        description: "24/7 national mental health toll-free support line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "af",
    name: "Afghanistan",
    nativeName: "افغانستان",
    flag: "🇦🇫",
    continent: "asia",
    emergencyNumber: "119 / 102",
    hotlines: [
      {
        name: "Psychosocial Support Line Afghanistan",
        phone: "119",
        description: "Emergency psychological and medical referral support",
        isFree: true,
      },
    ],
  },
  {
    code: "ph",
    name: "Philippines",
    nativeName: "Pilipinas",
    flag: "🇵🇭",
    continent: "asia",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "NCMH Crisis Hotline",
        phone: "1553",
        website: "https://ncmh.gov.ph/",
        description: "24/7 toll-free landline 1553 or 0917-899-8727",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "th",
    name: "Thailand",
    nativeName: "ประเทศไทย",
    flag: "🇹🇭",
    continent: "asia",
    emergencyNumber: "1669 / 191",
    hotlines: [
      {
        name: "Department of Mental Health Hotline",
        phone: "1323",
        description: "24/7 free mental health consultation service in Thailand",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "vn",
    name: "Vietnam",
    nativeName: "Việt Nam",
    flag: "🇻🇳",
    continent: "asia",
    emergencyNumber: "115 / 113",
    hotlines: [
      {
        name: "National Protection & Mental Helpline",
        phone: "111",
        description: "24/7 miễn phí tư vấn tâm lý và bảo vệ",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "my",
    name: "Malaysia",
    nativeName: "Malaysia",
    flag: "🇲🇾",
    continent: "asia",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Talian HEAL (MOH Malaysia)",
        phone: "15555",
        description: "24/7 dedicated mental health crisis line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "id",
    name: "Indonesia",
    nativeName: "Indonesia",
    flag: "🇮🇩",
    continent: "asia",
    emergencyNumber: "112 / 118",
    hotlines: [
      {
        name: "SEJIWA (KemenPPPA & HIMPSI)",
        phone: "119",
        description: "Layanan psikologi untuk sehat jiwa (Call 119 ext 8, 24/7)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kh",
    name: "Cambodia",
    nativeName: "កម្ពុជា",
    flag: "🇰🇭",
    continent: "asia",
    emergencyNumber: "117 / 119",
    hotlines: [
      {
        name: "TPO Cambodia Mental Health Helpline",
        phone: "+855236366992",
        description: "Professional psychological support and crisis counseling",
        isFree: true,
      },
    ],
  },
  {
    code: "la",
    name: "Laos",
    nativeName: "ລາວ (Laos)",
    flag: "🇱🇦",
    continent: "asia",
    emergencyNumber: "1195 / 191",
    hotlines: [
      {
        name: "Lao Women's Union Counseling Helpline 1362",
        phone: "1362",
        description: "Free 24/7 emotional and crisis helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mm",
    name: "Myanmar",
    nativeName: "မြန်မာ",
    flag: "🇲🇲",
    continent: "asia",
    emergencyNumber: "199 / 192",
    hotlines: [
      {
        name: "Counselling Corner Myanmar Helpline",
        phone: "+959784509916",
        description: "Confidential psychological first aid and emotional support",
        isFree: true,
      },
    ],
  },
  {
    code: "bn",
    name: "Brunei",
    nativeName: "Brunei Darussalam",
    flag: "🇧🇳",
    continent: "asia",
    emergencyNumber: "991 / 993",
    hotlines: [
      {
        name: "Talian Harapan 145 (Ministry of Health)",
        phone: "145",
        description: "24/7 confidential crisis mental health helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tl",
    name: "Timor-Leste",
    nativeName: "Timor-Leste",
    flag: "🇹🇱",
    continent: "asia",
    emergencyNumber: "112 / 110",
    hotlines: [
      {
        name: "PRADET Mental Health Support Center",
        phone: "+6703310020",
        description: "Psychosocial recovery and crisis response",
        isFree: true,
      },
    ],
  },
  {
    code: "mn",
    name: "Mongolia",
    nativeName: "Монгол улс",
    flag: "🇲🇳",
    continent: "asia",
    emergencyNumber: "102 / 103",
    hotlines: [
      {
        name: "National Mental Health Center Hotline",
        phone: "18002000",
        description: "24/7 nationwide toll-free psychological consultation",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kz",
    name: "Kazakhstan",
    nativeName: "Қазақстан",
    flag: "🇰🇿",
    continent: "asia",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "National Trust Hotline 150",
        phone: "150",
        website: "https://telefon150.kz/",
        description: "24/7 бесплатная психологическая помощь",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "uz",
    name: "Uzbekistan",
    nativeName: "Oʻzbekiston",
    flag: "🇺🇿",
    continent: "asia",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "Ishonch Telefoni 1003",
        phone: "1003",
        description: "24/7 bepul psixologik yordam va maslahat",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kg",
    name: "Kyrgyzstan",
    nativeName: "Кыргызстан",
    flag: "🇰🇬",
    continent: "asia",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "Hotline 111 (Балдар үчүн ишеним телефону)",
        phone: "111",
        description: "24/7 бесплатная психологическая помощь",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tj",
    name: "Tajikistan",
    nativeName: "Тоҷикистон",
    flag: "🇹🇯",
    continent: "asia",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "Psychological Trust Line Tajikistan",
        phone: "+992372210000",
        description: "Free emergency psychosocial support",
        isFree: true,
      },
    ],
  },
  {
    code: "tm",
    name: "Turkmenistan",
    nativeName: "Türkmenistan",
    flag: "🇹🇲",
    continent: "asia",
    emergencyNumber: "112 / 03",
    hotlines: [
      {
        name: "Medical & Psychological Emergency Line",
        phone: "03",
        description: "National emergency medical and mental aid",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pg",
    name: "Papua New Guinea",
    nativeName: "Papua Niugini",
    flag: "🇵🇬",
    continent: "asia",
    emergencyNumber: "111 / 112",
    hotlines: [
      {
        name: "1-Tok Kaunselin Helpim Lain",
        phone: "71508000",
        description: "24/7 free toll-free telephone counseling across PNG",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "fj",
    name: "Fiji",
    nativeName: "Fiji",
    flag: "🇫🇯",
    continent: "asia",
    emergencyNumber: "911 / 917",
    hotlines: [
      {
        name: "Lifeline Fiji",
        phone: "132454",
        description: "24/7 toll-free crisis helpline across Fiji",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sb",
    name: "Solomon Islands",
    nativeName: "Solomon Islands",
    flag: "🇸🇧",
    continent: "asia",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Seif Ples Crisis Helpline",
        phone: "132",
        description: "24/7 toll-free crisis and emotional assistance",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "vu",
    name: "Vanuatu",
    nativeName: "Vanuatu",
    flag: "🇻🇺",
    continent: "asia",
    emergencyNumber: "112 / 22100",
    hotlines: [
      {
        name: "Vanuatu Women's Centre Crisis Line",
        phone: "161",
        description: "24/7 free counseling and crisis intervention line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ws",
    name: "Samoa",
    nativeName: "Sāmoa",
    flag: "🇼🇸",
    continent: "asia",
    emergencyNumber: "999 / 995",
    hotlines: [
      {
        name: "Fa'ataua Le Ola (Lifeline Samoa)",
        phone: "8005433",
        description: "24/7 free suicide prevention helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "to",
    name: "Tonga",
    nativeName: "Tonga",
    flag: "🇹🇴",
    continent: "asia",
    emergencyNumber: "911 / 922",
    hotlines: [
      {
        name: "Tonga National Crisis Line",
        phone: "0800444",
        description: "24/7 free confidential psychological support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ki",
    name: "Kiribati",
    nativeName: "Kiribati",
    flag: "🇰🇮",
    continent: "asia",
    emergencyNumber: "192 / 199",
    hotlines: [
      {
        name: "Kiribati Health & Wellness Line",
        phone: "+68628100",
        description: "Psychosocial consultation and medical guidance",
        isFree: true,
      },
    ],
  },
  {
    code: "fm",
    name: "Micronesia",
    nativeName: "Federated States of Micronesia",
    flag: "🇫🇲",
    continent: "asia",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "FSM Department of Health Crisis Line",
        phone: "+6913202619",
        description: "24/7 emergency medical & emotional aid",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pw",
    name: "Palau",
    nativeName: "Belau",
    flag: "🇵🇼",
    continent: "asia",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Belau National Hospital Crisis Support",
        phone: "+6804882555",
        description: "24/7 mental and physical emergency services",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mh",
    name: "Marshall Islands",
    nativeName: "Aolepān Aorōkin M̧ajeļ",
    flag: "🇲🇭",
    continent: "asia",
    emergencyNumber: "911 / 6253221",
    hotlines: [
      {
        name: "Majuro Hospital Mental Health Unit",
        phone: "+6926253399",
        description: "Crisis psychiatric response and counseling",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "nr",
    name: "Nauru",
    nativeName: "Naoero",
    flag: "🇳🇷",
    continent: "asia",
    emergencyNumber: "111 / 112",
    hotlines: [
      {
        name: "Nauru Public Health Crisis Line",
        phone: "+6745573060",
        description: "24/7 hospital and psychological counseling service",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tv",
    name: "Tuvalu",
    nativeName: "Tuvalu",
    flag: "🇹🇻",
    continent: "asia",
    emergencyNumber: "911 / 20211",
    hotlines: [
      {
        name: "Princess Margaret Hospital Emergency Support",
        phone: "+68820749",
        description: "24/7 medical & emotional crisis response",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // ==========================================
    {
    code: "mo",
    name: "Macau",
    nativeName: "澳門 (Macao)",
    flag: "🇲🇴",
    continent: "asia",
    emergencyNumber: "999 / 110 / 112",
    hotlines: [
      {
        name: "Caritas Macau Life Hope Hotline (澳門明愛生命熱線)",
        phone: "+85328525222",
        website: "https://www.caritas.org.mo/",
        description: "24小時免費情緒支援及危機輔導熱線 (Cantonese, Mandarin, English)",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Expat Life Hope Line Macau",
        phone: "+85328525777",
        description: "24/7 English-language crisis support and emotional assistance",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gu",
    name: "Guam",
    nativeName: "Guåhan",
    flag: "🇬🇺",
    continent: "asia",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "988 Suicide & Crisis Lifeline Guam",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "24/7 free and confidential crisis support across Guam. Call or text 988.",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Guam Crisis Intervention Center (GBHWC)",
        phone: "+16716478833",
        website: "https://gbhwc.guam.gov/",
        description: "24/7 Island-wide crisis hotline and walk-in mental health support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mp",
    name: "Northern Mariana Islands",
    nativeName: "Commonwealth of the Northern Mariana Islands",
    flag: "🇲🇵",
    continent: "asia",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "988 Suicide & Crisis Lifeline (CNMI)",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "Free, confidential 24/7 suicide and mental health crisis hotline",
        is24_7: true,
        isFree: true,
      },
      {
        name: "CHCC Community Guidance Center",
        phone: "+16703236560",
        description: "Crisis counseling and community psychosocial support",
        is24_7: true,
      },
    ],
  },
  {
    code: "as",
    name: "American Samoa",
    nativeName: "Amerika Sāmoa",
    flag: "🇦🇸",
    continent: "asia",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "988 Suicide & Crisis Lifeline American Samoa",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "24/7 free, confidential crisis support for Samoa residents. Dial 988.",
        is24_7: true,
        isFree: true,
      },
      {
        name: "LBJ Tropical Medical Center Crisis Support",
        phone: "+16846331222",
        description: "Emergency clinical psychiatry and crisis intervention",
        is24_7: true,
      },
    ],
  },
  {
    code: "pf",
    name: "French Polynesia",
    nativeName: "Polynésie française (Pōrīnetia Farāni)",
    flag: "🇵🇫",
    continent: "asia",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "SOS Suicide Tahiti",
        phone: "+689444767",
        website: "https://sossuicide.pf/",
        description: "24/7 écoute, soutien et prévention du suicide gratuite en Polynésie",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Numéro Vert Écoute Famille",
        phone: "444447",
        description: "Numéro gratuit de soutien psychologique et d'urgence familiale",
        isFree: true,
      },
    ],
  },
  {
    code: "nc",
    name: "New Caledonia",
    nativeName: "Nouvelle-Calédonie",
    flag: "🇳🇨",
    continent: "asia",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "SOS Écoute Nouvelle-Calédonie",
        phone: "053030",
        description: "24/7 numéro vert anonyme et gratuit d'aide psychologique et d'écoute",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Centre Hospitalier Territorial (CHT) Urgences Psy",
        phone: "+687208000",
        description: "24/7 urgences psychiatriques et prise en charge de crise",
        is24_7: true,
      },
    ],
  },
  {
    code: "ck",
    name: "Cook Islands",
    nativeName: "Kūki 'Āirani",
    flag: "🇨🇰",
    continent: "asia",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Te Marae Ora (Cook Islands Health) Mental Health Line",
        phone: "+68222664",
        website: "https://www.health.gov.ck/",
        description: "24/7 psychological crisis support, community care, and clinical assessment",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "nu",
    name: "Niue",
    nativeName: "Niuē",
    flag: "🇳🇺",
    continent: "asia",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Niue Foou Hospital Crisis Support",
        phone: "+6834100",
        description: "24/7 island medical emergency and psychosocial crisis intervention",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tk",
    name: "Tokelau",
    nativeName: "Tokelau",
    flag: "🇹🇰",
    continent: "asia",
    emergencyNumber: "111",
    hotlines: [
      {
        name: "Tokelau Health Department Liaison",
        phone: "+6902112",
        description: "Emergency medical response and tele-health counseling support",
        is24_7: true,
      },
    ],
  },
  {
    code: "wf",
    name: "Wallis and Futuna",
    nativeName: "Wallis-et-Futuna ('Uvea mo Futuna)",
    flag: "🇼🇫",
    continent: "asia",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Agence de Santé de Wallis et Futuna (Sia Hospital)",
        phone: "+681720700",
        description: "24/7 urgences hospitalières et soutien médico-psychologique",
        is24_7: true,
      },
    ],
  },
  {
    code: "pn",
    name: "Pitcairn",
    nativeName: "Pitcairn Islands",
    flag: "🇵🇳",
    continent: "asia",
    emergencyNumber: "999 / VHF 16",
    hotlines: [
      {
        name: "Pitcairn Medical Clinic Support",
        phone: "+6497336111",
        description: "Resident medical officer and 24/7 international tele-health crisis link",
        is24_7: true,
      },
    ],
  },
  {
    code: "nf",
    name: "Norfolk Island",
    nativeName: "Norfolk Island",
    flag: "🇳🇫",
    continent: "asia",
    emergencyNumber: "000",
    hotlines: [
      {
        name: "Lifeline Australia (Accessible from Norfolk Island)",
        phone: "131114",
        website: "https://www.lifeline.org.au/",
        description: "24/7 free, confidential crisis counseling support. Call 13 11 14.",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Norfolk Island Health Services (NIHRACS)",
        phone: "+672322091",
        description: "Emergency care and community mental health liaison",
        is24_7: true,
      },
    ],
  },
  {
    code: "cx",
    name: "Christmas Island",
    nativeName: "Christmas Island",
    flag: "🇨🇽",
    continent: "asia",
    emergencyNumber: "000",
    hotlines: [
      {
        name: "Lifeline Crisis Support",
        phone: "131114",
        website: "https://www.lifeline.org.au/",
        description: "24/7 free national crisis support and suicide prevention",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cc",
    name: "Cocos (Keeling) Islands",
    nativeName: "Cocos (Keeling) Islands",
    flag: "🇨🇨",
    continent: "asia",
    emergencyNumber: "000",
    hotlines: [
      {
        name: "Lifeline Crisis Line",
        phone: "131114",
        website: "https://www.lifeline.org.au/",
        description: "24/7 free telephone crisis support and counseling",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // 4. MIDDLE EAST & AFRICA (65 Sovereign States)
  // ==========================================
  {
    code: "iq",
    name: "Iraq (Mesopotamia)",
    nativeName: "العراق / بلاد الرافدين",
    flag: "🇮🇶",
    continent: "me-africa",
    regionNote: "Mesopotamia / Blízky východ",
    emergencyNumber: "112 / 104 / 122",
    hotlines: [
      {
        name: "National Psychological Support Line Iraq",
        phone: "5678",
        website: "https://moh.gov.iq/",
        description: "خط الدعم النفسي الوطني العراقي المجاني على مدار الساعة (Free 24/7 Helpline)",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Medecins Sans Frontieres Mental Health Hub (Iraq)",
        phone: "+9647800008888",
        description: "Specialized psychosocial support in Baghdad, Ninewa, and Kurdistan regions",
        isFree: true,
      },
    ],
  },
  {
    code: "sa",
    name: "Saudi Arabia",
    nativeName: "المملكة العربية السعودية",
    flag: "🇸🇦",
    continent: "me-africa",
    emergencyNumber: "911 / 997",
    hotlines: [
      {
        name: "National Center for Mental Health Promotion (NCMH)",
        phone: "920033360",
        website: "https://ncmh.org.sa/",
        description: "المركز الوطني لتعزيز الصحة النفسية - استشارات مجانية 24 ساعة",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Sehhaty Line (Ministry of Health)",
        phone: "937",
        description: "24/7 direct psychiatric counseling (Dial 937)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ae",
    name: "United Arab Emirates",
    nativeName: "الإمارات العربية المتحدة",
    flag: "🇦🇪",
    continent: "me-africa",
    emergencyNumber: "999 / 998",
    hotlines: [
      {
        name: "National Mental Health Support Line (HOPE)",
        phone: "8004673",
        description: "Free and confidential psychological support by MOHAP (800-HOPE)",
        isFree: true,
      },
    ],
  },
  {
    code: "jo",
    name: "Jordan",
    nativeName: "الأردن",
    flag: "🇯🇴",
    continent: "me-africa",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "National Mental Health Support Line Jordan",
        phone: "+96265300888",
        description: "خط الاستشارات والدعم النفسي المجاني بوزارة الصحة الأردنية",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "qa",
    name: "Qatar",
    nativeName: "قطر",
    flag: "🇶🇦",
    continent: "me-africa",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "National Mental Health Helpline (HMC)",
        phone: "16000",
        description: "Free, confidential counseling line (Dial 16000 option 4)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kw",
    name: "Kuwait",
    nativeName: "الكويت",
    flag: "🇰🇼",
    continent: "me-africa",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Kuwait Mental Health Support Line",
        phone: "+96524621770",
        description: "خط الاستشارات النفسية التابع لوزارة الصحة",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "om",
    name: "Oman",
    nativeName: "عُمان",
    flag: "🇴🇲",
    continent: "me-africa",
    emergencyNumber: "9999",
    hotlines: [
      {
        name: "Ministry of Health Psychological Line",
        phone: "1441",
        description: "خط الدعم النفسي والمشورة الطبية المجاني",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bh",
    name: "Bahrain",
    nativeName: "البحرين",
    flag: "🇧🇭",
    continent: "me-africa",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Psychiatric Hospital Helpline Bahrain",
        phone: "+97317288888",
        description: "24/7 mental health crisis support line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sy",
    name: "Syria",
    nativeName: "سوريا",
    flag: "🇸🇾",
    continent: "me-africa",
    emergencyNumber: "110 / 112",
    hotlines: [
      {
        name: "Syrian Red Crescent Psychosocial Helpline",
        phone: "+963113327645",
        description: "Emergency emotional and humanitarian assistance",
        isFree: true,
      },
    ],
  },
  {
    code: "ye",
    name: "Yemen",
    nativeName: "اليمن",
    flag: "🇾🇪",
    continent: "me-africa",
    emergencyNumber: "199 / 191",
    hotlines: [
      {
        name: "Yemen Family Care Psychological Support",
        phone: "+9671449000",
        description: "Emergency psychosocial counseling line",
        isFree: true,
      },
    ],
  },
  {
    code: "ps",
    name: "Palestine",
    nativeName: "فلسطين",
    flag: "🇵🇸",
    continent: "me-africa",
    emergencyNumber: "101 / 100",
    hotlines: [
      {
        name: "SAWA Free Helpline Palestine",
        phone: "121",
        website: "https://sawa.ps/",
        description: "24/7 free emotional first aid and crisis counseling line (Dial 121)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tr",
    name: "Turkey",
    nativeName: "Türkiye",
    flag: "🇹🇷",
    continent: "me-africa",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "ALO 182 / Ruh Sağlığı Danışma Hattı",
        phone: "182",
        description: "Sağlık Bakanlığı 7/24 Psikolojik Destek Hattı",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ir",
    name: "Iran",
    nativeName: "ایران",
    flag: "🇮🇷",
    continent: "me-africa",
    emergencyNumber: "115 / 110",
    hotlines: [
      {
        name: "1480 Moshavereh",
        phone: "1480",
        description: "سامانه ملی مشاوره تلفنی رایگان سازمان بهزیستی (08:00 - 24:00)",
        isFree: true,
      },
    ],
  },
  {
    code: "il",
    name: "Israel",
    nativeName: "ישראל",
    flag: "🇮🇱",
    continent: "me-africa",
    emergencyNumber: "101 / 100",
    hotlines: [
      {
        name: "ERAN - Emotional First Aid (ער״ן)",
        phone: "1201",
        website: "https://www.eran.org.il/",
        description: "24/7 confidential emotional first aid by phone and chat",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "eg",
    name: "Egypt",
    nativeName: "مصر",
    flag: "🇪🇬",
    continent: "me-africa",
    emergencyNumber: "123 / 122",
    hotlines: [
      {
        name: "General Secretariat of Mental Health",
        phone: "08008880700",
        description: "الخط الساخن للأمانة العامة للصحة النفسية (24/7 مجاناً)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "lb",
    name: "Lebanon",
    nativeName: "لبنان",
    flag: "🇱🇧",
    continent: "me-africa",
    emergencyNumber: "112 / 140",
    hotlines: [
      {
        name: "Embrace Lifeline 1564",
        phone: "1564",
        website: "https://embracelebanon.org/",
        description: "National 24/7 emotional support and suicide prevention helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ly",
    name: "Libya",
    nativeName: "ليبيا",
    flag: "🇱🇾",
    continent: "me-africa",
    emergencyNumber: "191 / 193",
    hotlines: [
      {
        name: "Libyan Red Crescent Crisis Line",
        phone: "+218213600000",
        description: "Emergency psychological and relief response",
        isFree: true,
      },
    ],
  },
  {
    code: "tn",
    name: "Tunisia",
    nativeName: "تونس",
    flag: "🇹🇳",
    continent: "me-africa",
    emergencyNumber: "190 / 197",
    hotlines: [
      {
        name: "Ligne Verte Écoute Psychologique",
        phone: "80105050",
        description: "Numéro vert gratuit d'assistance psychologique 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "dz",
    name: "Algeria",
    nativeName: "الجزائر (Algérie)",
    flag: "🇩🇿",
    continent: "me-africa",
    emergencyNumber: "14 / 17",
    hotlines: [
      {
        name: "Ligne d'Écoute Psychologique Algérie",
        phone: "3033",
        description: "Ligne verte nationale gratuite de soutien psychologique",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ma",
    name: "Morocco",
    nativeName: "المغرب",
    flag: "🇲🇦",
    continent: "me-africa",
    emergencyNumber: "15 / 19",
    hotlines: [
      {
        name: "Sourire de Reda",
        phone: "+212522874747",
        website: "https://www.souriredereda.org/",
        description: "Service d'écoute et de prévention du suicide chez les jeunes",
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "mr",
    name: "Mauritania",
    nativeName: "موريتانيا",
    flag: "🇲🇷",
    continent: "me-africa",
    emergencyNumber: "117 / 118",
    hotlines: [
      {
        name: "Croissant-Rouge Mauritanien Crisis Line",
        phone: "+22245252822",
        description: "Urgence psychosociale et secours",
        isFree: true,
      },
    ],
  },
  {
    code: "sd",
    name: "Sudan",
    nativeName: "السودان",
    flag: "🇸🇩",
    continent: "me-africa",
    emergencyNumber: "999 / 77777",
    hotlines: [
      {
        name: "Sudanese Red Crescent Mental Support Line",
        phone: "+249183772000",
        description: "Emergency psychosocial support in crisis",
        isFree: true,
      },
    ],
  },
  {
    code: "ss",
    name: "South Sudan",
    nativeName: "South Sudan",
    flag: "🇸🇸",
    continent: "me-africa",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "HealthNet TPO Mental Support South Sudan",
        phone: "+211920000000",
        description: "Psychosocial and trauma counseling line",
        isFree: true,
      },
    ],
  },
  {
    code: "ng",
    name: "Nigeria",
    nativeName: "Nigeria",
    flag: "🇳🇬",
    continent: "me-africa",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "MANI (Mentally Aware Nigeria Initiative)",
        phone: "+2348091116264",
        website: "https://mentallyaware.org/",
        description: "24/7 crisis response and emotional first aid (+234-811-160-8444)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gh",
    name: "Ghana",
    nativeName: "Ghana",
    flag: "🇬🇭",
    continent: "me-africa",
    emergencyNumber: "112 / 193",
    hotlines: [
      {
        name: "Mental Health Authority Ghana Toll-Free Helpline",
        phone: "0800678678",
        description: "24/7 toll-free crisis response and counseling line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sn",
    name: "Senegal",
    nativeName: "Sénégal",
    flag: "🇸🇳",
    continent: "me-africa",
    emergencyNumber: "18 / 17",
    hotlines: [
      {
        name: "Ligne Verte de Soutien Psychologique Sénégal",
        phone: "800005050",
        description: "Numéro vert gratuit 24/7 d'assistance psychologique",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ci",
    name: "Ivory Coast",
    nativeName: "Côte d'Ivoire",
    flag: "🇨🇮",
    continent: "me-africa",
    emergencyNumber: "185 / 110",
    hotlines: [
      {
        name: "Ligne d'Assistance Psychologique Côte d'Ivoire",
        phone: "143",
        description: "Numéro vert gratuit de soutien émotionnel et d'écoute",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cm",
    name: "Cameroon",
    nativeName: "Cameroun",
    flag: "🇨🇲",
    continent: "me-africa",
    emergencyNumber: "112 / 119",
    hotlines: [
      {
        name: "Ligne Verte Nationale Santé Mentale",
        phone: "1510",
        description: "24/7 assistance psychologique gratuite",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ke",
    name: "Kenya",
    nativeName: "Kenya",
    flag: "🇰🇪",
    continent: "me-africa",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Befrienders Kenya",
        phone: "+254722178177",
        website: "https://befrienderskenya.org/",
        description: "Free 24/7 emotional support and suicide prevention helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "et",
    name: "Ethiopia",
    nativeName: "ኢትዮጵያ",
    flag: "🇪🇹",
    continent: "me-africa",
    emergencyNumber: "911 / 907",
    hotlines: [
      {
        name: "Ethiopian Mental Health Association Helpline",
        phone: "8335",
        description: "Free national mental health counseling service",
        isFree: true,
      },
    ],
  },
  {
    code: "tz",
    name: "Tanzania",
    nativeName: "Tanzania",
    flag: "🇹🇿",
    continent: "me-africa",
    emergencyNumber: "112 / 114",
    hotlines: [
      {
        name: "National Child & Family Helpline 116",
        phone: "116",
        description: "24/7 toll-free crisis and mental counseling helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ug",
    name: "Uganda",
    nativeName: "Uganda",
    flag: "🇺🇬",
    continent: "me-africa",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "Uganda National Mental Health Helpline",
        phone: "0800212121",
        description: "24/7 toll-free national mental health crisis helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "rw",
    name: "Rwanda",
    nativeName: "Rwanda",
    flag: "🇷🇼",
    continent: "me-africa",
    emergencyNumber: "112 / 912",
    hotlines: [
      {
        name: "Rwanda Mental Health Crisis Line",
        phone: "114",
        description: "Toll-free 24/7 psychological support line by RBC",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bi",
    name: "Burundi",
    nativeName: "Uburundi",
    flag: "🇧🇮",
    continent: "me-africa",
    emergencyNumber: "112 / 113",
    hotlines: [
      {
        name: "Ligne d'Assistance Psychosociale Burundi",
        phone: "116",
        description: "24/7 assistance psychologique d'urgence",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cd",
    name: "DR Congo",
    nativeName: "RD Congo",
    flag: "🇨🇩",
    continent: "me-africa",
    emergencyNumber: "112 / 118",
    hotlines: [
      {
        name: "Ligne Verte d'Urgence Psychologique",
        phone: "119",
        description: "Assistance et soutien psychosocial 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cg",
    name: "Republic of the Congo",
    nativeName: "Congo-Brazzaville",
    flag: "🇨🇬",
    continent: "me-africa",
    emergencyNumber: "112 / 118",
    hotlines: [
      {
        name: "Croix-Rouge Congolaise Ligne d'Écoute",
        phone: "+242066600000",
        description: "Soutien émotionnel et secours d'urgence",
        isFree: true,
      },
    ],
  },
  {
    code: "ga",
    name: "Gabon",
    nativeName: "Gabon",
    flag: "🇬🇦",
    continent: "me-africa",
    emergencyNumber: "177 / 18",
    hotlines: [
      {
        name: "Ligne Verte Nationale Gabon",
        phone: "1410",
        description: "Assistance médicale et psychologique gratuite",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "cf",
    name: "Central African Republic",
    nativeName: "Centrafrique",
    flag: "🇨🇫",
    continent: "me-africa",
    emergencyNumber: "117 / 118",
    hotlines: [
      {
        name: "Ligne d'Assistance Psychosociale",
        phone: "1212",
        description: "Soutien psychologique d'urgence",
        isFree: true,
      },
    ],
  },
  {
    code: "td",
    name: "Chad",
    nativeName: "Tchad",
    flag: "🇹🇩",
    continent: "me-africa",
    emergencyNumber: "17 / 18",
    hotlines: [
      {
        name: "Croix-Rouge du Tchad Assistance",
        phone: "+23522523434",
        description: "Secours et écoute psychologique",
        isFree: true,
      },
    ],
  },
  {
    code: "ne",
    name: "Niger",
    nativeName: "Niger",
    flag: "🇳🇪",
    continent: "me-africa",
    emergencyNumber: "17 / 18",
    hotlines: [
      {
        name: "Ligne Verte d'Assistance Psychosociale",
        phone: "15",
        description: "Urgence médicale et soutien psychologique",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bf",
    name: "Burkina Faso",
    nativeName: "Burkina Faso",
    flag: "🇧🇫",
    continent: "me-africa",
    emergencyNumber: "17 / 18",
    hotlines: [
      {
        name: "Ligne Verte d'Écoute Burkina",
        phone: "80001122",
        description: "24/7 soutien psychologique gratuit",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ml",
    name: "Mali",
    nativeName: "Mali",
    flag: "🇲🇱",
    continent: "me-africa",
    emergencyNumber: "17 / 18",
    hotlines: [
      {
        name: "Ligne d'Assistance Psychosociale Mali",
        phone: "80333",
        description: "Écoute et premiers secours psychologiques",
        isFree: true,
      },
    ],
  },
  {
    code: "gn",
    name: "Guinea",
    nativeName: "Guinée",
    flag: "🇬🇳",
    continent: "me-africa",
    emergencyNumber: "117 / 18",
    hotlines: [
      {
        name: "Ligne Verte Santé Mentale Guinée",
        phone: "115",
        description: "24/7 assistance psychologique d'urgence",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sl",
    name: "Sierra Leone",
    nativeName: "Sierra Leone",
    flag: "🇸🇱",
    continent: "me-africa",
    emergencyNumber: "999 / 112",
    hotlines: [
      {
        name: "National Psychosocial Support Helpline 117",
        phone: "117",
        description: "24/7 toll-free crisis response and counseling",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "lr",
    name: "Liberia",
    nativeName: "Liberia",
    flag: "🇱🇷",
    continent: "me-africa",
    emergencyNumber: "911 / 4455",
    hotlines: [
      {
        name: "National Crisis Line Liberia",
        phone: "4455",
        description: "24/7 emergency psychosocial assistance",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tg",
    name: "Togo",
    nativeName: "Togo",
    flag: "🇹🇬",
    continent: "me-africa",
    emergencyNumber: "117 / 118",
    hotlines: [
      {
        name: "Ligne Verte d'Écoute Togo",
        phone: "1011",
        description: "Soutien émotionnel et secours d'urgence",
        isFree: true,
      },
    ],
  },
  {
    code: "bj",
    name: "Benin",
    nativeName: "Bénin",
    flag: "🇧🇯",
    continent: "me-africa",
    emergencyNumber: "117 / 118",
    hotlines: [
      {
        name: "Ligne Verte d'Assistance Bénin",
        phone: "138",
        description: "24/7 assistance psychologique et sociale",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gm",
    name: "Gambia",
    nativeName: "The Gambia",
    flag: "🇬🇲",
    continent: "me-africa",
    emergencyNumber: "112 / 116",
    hotlines: [
      {
        name: "National Psychosocial Helpline 1025",
        phone: "1025",
        description: "24/7 toll-free crisis support helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gw",
    name: "Guinea-Bissau",
    nativeName: "Guiné-Bissau",
    flag: "🇬🇼",
    continent: "me-africa",
    emergencyNumber: "112 / 117",
    hotlines: [
      {
        name: "Linha de Apoio Psicossocial",
        phone: "+245966600000",
        description: "Apoio emocional e psicológico de emergência",
        isFree: true,
      },
    ],
  },
  {
    code: "cv",
    name: "Cape Verde",
    nativeName: "Cabo Verde",
    flag: "🇨🇻",
    continent: "me-africa",
    emergencyNumber: "132 / 130",
    hotlines: [
      {
        name: "Linha SOS Mulher e Família",
        phone: "8001818",
        description: "24/7 apoio psicológico gratuito e confidencial",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "st",
    name: "São Tomé and Príncipe",
    nativeName: "São Tomé e Príncipe",
    flag: "🇸🇹",
    continent: "me-africa",
    emergencyNumber: "112 / 2222222",
    hotlines: [
      {
        name: "Hospital Central Ayres de Menezes Crisis Line",
        phone: "+2392221222",
        description: "Apoio de emergência psiquiátrica e psicossocial",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gq",
    name: "Equatorial Guinea",
    nativeName: "Guinea Ecuatorial",
    flag: "🇬🇶",
    continent: "me-africa",
    emergencyNumber: "112 / 115",
    hotlines: [
      {
        name: "Servicio de Emergencia Psicológica Malabo",
        phone: "+240333090000",
        description: "Atención psicológica y soporte en crisis",
        isFree: true,
      },
    ],
  },
  {
    code: "dj",
    name: "Djibouti",
    nativeName: "Djibouti",
    flag: "🇩🇯",
    continent: "me-africa",
    emergencyNumber: "17 / 18",
    hotlines: [
      {
        name: "Croissant-Rouge de Djibouti Ligne d'Écoute",
        phone: "+25321352936",
        description: "Secours et soutien émotionnel d'urgence",
        isFree: true,
      },
    ],
  },
  {
    code: "er",
    name: "Eritrea",
    nativeName: "ኤርትራ (Eritrea)",
    flag: "🇪🇷",
    continent: "me-africa",
    emergencyNumber: "113 / 114",
    hotlines: [
      {
        name: "National Emergency Health Line",
        phone: "114",
        description: "Emergency medical and psychiatric assistance",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "so",
    name: "Somalia",
    nativeName: "Soomaaliya",
    flag: "🇸🇴",
    continent: "me-africa",
    emergencyNumber: "999 / 888",
    hotlines: [
      {
        name: "Somali Red Crescent Psychosocial Helpline",
        phone: "112",
        description: "Emergency emotional and humanitarian assistance 24/7",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sc",
    name: "Seychelles",
    nativeName: "Seychelles",
    flag: "🇸🇨",
    continent: "me-africa",
    emergencyNumber: "999 / 151",
    hotlines: [
      {
        name: "Ministry of Health Mental Support Line",
        phone: "+2484388000",
        description: "24/7 psychological first aid helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mu",
    name: "Mauritius",
    nativeName: "Maurice",
    flag: "🇲🇺",
    continent: "me-africa",
    emergencyNumber: "999 / 114",
    hotlines: [
      {
        name: "Befrienders Mauritius Suicide Prevention",
        phone: "+2308009393",
        description: "24/7 free toll-free emotional support line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "km",
    name: "Comoros",
    nativeName: "Comores",
    flag: "🇰🇲",
    continent: "me-africa",
    emergencyNumber: "17 / 18",
    hotlines: [
      {
        name: "Croissant-Rouge Comorien Écoute",
        phone: "+2697730000",
        description: "Soutien psychosocial d'urgence",
        isFree: true,
      },
    ],
  },
  {
    code: "mg",
    name: "Madagascar",
    nativeName: "Madagasikara",
    flag: "🇲🇬",
    continent: "me-africa",
    emergencyNumber: "117 / 118",
    hotlines: [
      {
        name: "Ligne Verte d'Écoute Psychologique 147",
        phone: "147",
        description: "24/7 numéro vert gratuit de soutien émotionnel",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mw",
    name: "Malawi",
    nativeName: "Malawi",
    flag: "🇲🇼",
    continent: "me-africa",
    emergencyNumber: "999 / 998",
    hotlines: [
      {
        name: "National Child & Family Helpline 116",
        phone: "116",
        description: "24/7 toll-free crisis and mental health line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "mz",
    name: "Mozambique",
    nativeName: "Moçambique",
    flag: "🇲🇿",
    continent: "me-africa",
    emergencyNumber: "112 / 119",
    hotlines: [
      {
        name: "Linha Fala Criança e Família 116",
        phone: "116",
        description: "Linha gratuita 24/7 de apoio psicossocial",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "zm",
    name: "Zambia",
    nativeName: "Zambia",
    flag: "🇿🇲",
    continent: "me-africa",
    emergencyNumber: "999 / 992",
    hotlines: [
      {
        name: "Lifeline / Childline Zambia 933",
        phone: "933",
        description: "24/7 toll-free mental health and suicide crisis line (Dial 933 or 116)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "zw",
    name: "Zimbabwe",
    nativeName: "Zimbabwe",
    flag: "🇿🇼",
    continent: "me-africa",
    emergencyNumber: "999 / 994",
    hotlines: [
      {
        name: "Friendship Bench Zimbabwe",
        phone: "+263772555555",
        website: "https://www.friendshipbenchzimbabwe.org/",
        description: "Community-based mental health counseling and crisis support",
        isFree: true,
      },
    ],
  },
  {
    code: "bw",
    name: "Botswana",
    nativeName: "Botswana",
    flag: "🇧🇼",
    continent: "me-africa",
    emergencyNumber: "999 / 997",
    hotlines: [
      {
        name: "Lifeline Botswana",
        phone: "+2673911290",
        description: "Free 24/7 confidential counseling and emotional first aid",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "na",
    name: "Namibia",
    nativeName: "Namibia",
    flag: "🇳🇦",
    continent: "me-africa",
    emergencyNumber: "112 / 211111",
    hotlines: [
      {
        name: "Lifeline Childline Namibia 116",
        phone: "116",
        website: "https://www.lifelinechildline.org.na/",
        description: "24/7 toll-free crisis helpline across Namibia",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ao",
    name: "Angola",
    nativeName: "Angola",
    flag: "🇦🇴",
    continent: "me-africa",
    emergencyNumber: "112 / 113",
    hotlines: [
      {
        name: "Linha SOS Criança e Família 15015",
        phone: "15015",
        description: "Linha gratuita 24/7 de apoio psicológico de emergência",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ls",
    name: "Lesotho",
    nativeName: "Lesotho",
    flag: "🇱🇸",
    continent: "me-africa",
    emergencyNumber: "112 / 121",
    hotlines: [
      {
        name: "National Child & Crisis Helpline 116",
        phone: "116",
        description: "24/7 toll-free emotional and crisis counseling line",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sz",
    name: "Eswatini",
    nativeName: "Eswatini (Swaziland)",
    flag: "🇸🇿",
    continent: "me-africa",
    emergencyNumber: "999 / 933",
    hotlines: [
      {
        name: "Eswatini Crisis Support Line",
        phone: "116",
        description: "24/7 toll-free mental health and crisis counseling",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "za",
    name: "South Africa",
    nativeName: "South Africa / Suid-Afrika",
    flag: "🇿🇦",
    continent: "me-africa",
    emergencyNumber: "112 / 10177",
    hotlines: [
      {
        name: "SADAG Suicide Crisis Line",
        phone: "0800567567",
        sms: { number: "31393" },
        website: "https://www.sadag.org/",
        description: "24/7 nationwide free crisis helpline and suicide intervention",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Akeso 24-Hour Crisis Helpline",
        phone: "0861435787",
        description: "24/7 emergency response for emotional crisis",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "by",
    name: "Belarus",
    nativeName: "Беларусь",
    flag: "🇧🇾",
    continent: "europe",
    emergencyNumber: "112 / 103",
    hotlines: [
      {
        name: "Республиканская телефонная горячая линия",
        phone: "88011001611",
        description: "Бесплатная круглосуточная кризисная психологическая поддержка",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pr",
    name: "Puerto Rico",
    nativeName: "Puerto Rico",
    flag: "🇵🇷",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "Línea PAS (Primera Ayuda Psicosocial)",
        phone: "18009810023",
        website: "https://assmca.pr.gov/linea-pas/",
        description: "24/7 libre de costo, confidencial para crisis emocional y prevención de suicidio",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "988 Suicide & Crisis Lifeline (Puerto Rico)",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "Línea directa nacional 24/7 en español e inglés. Marca o envía texto al 988.",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "gs",
    name: "South Georgia and South Sandwich Islands",
    nativeName: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸",
    continent: "americas",
    emergencyNumber: "VHF 16 / 999",
    hotlines: [
      {
        name: "BAS Medical Unit / King Edward Point Station Support",
        phone: "+441223221400",
        description: "24/7 sub-antarctic research emergency & psychosocial consultation",
        is24_7: true,
      },
    ],
  },
  {
    code: "um",
    name: "United States Minor Outlying Islands",
    nativeName: "United States Minor Outlying Islands",
    flag: "🇺🇲",
    continent: "americas",
    emergencyNumber: "911 / USCG",
    hotlines: [
      {
        name: "988 Suicide & Crisis Lifeline",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "24/7 free and confidential crisis support across all US territories. Call or text 988.",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "hm",
    name: "Heard Island and McDonald Islands",
    nativeName: "Heard Island and McDonald Islands",
    flag: "🇭🇲",
    continent: "asia",
    emergencyNumber: "000 / Satellite Emergency",
    hotlines: [
      {
        name: "Australian Antarctic Division (AAD) Tele-Health Crisis Line",
        phone: "+61362323209",
        description: "24/7 expedition health and psychological assistance",
        is24_7: true,
      },
    ],
  },
  {
    code: "aq",
    name: "Antarctica",
    nativeName: "Antarctica",
    flag: "🇦🇶",
    continent: "me-africa",
    emergencyNumber: "Station Radio / 911",
    hotlines: [
      {
        name: "Polar Medical & Psychological Tele-Health Support",
        phone: "+13034971000",
        description: "24/7 global crisis tele-medicine and psychological assistance for research expedition personnel",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "bv",
    name: "Bouvet Island",
    nativeName: "Bouvetøya",
    flag: "🇧🇻",
    continent: "me-africa",
    emergencyNumber: "VHF Radio / +47 22 04 88 88",
    hotlines: [
      {
        name: "Norwegian Joint Rescue Coordination Centre (JRCC)",
        phone: "+4751517000",
        description: "24/7 polar maritime and emergency crisis tele-medical support",
        is24_7: true,
      },
    ],
  },
  {
    code: "eh",
    name: "Western Sahara",
    nativeName: "الصحراء الغربية (Western Sahara)",
    flag: "🇪🇭",
    continent: "me-africa",
    emergencyNumber: "150 / 190",
    hotlines: [
      {
        name: "Sahrawi Red Crescent Psychosocial Support",
        phone: "+21349921500",
        description: "Humanitarian and psychological emergency crisis support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "io",
    name: "British Indian Ocean Territory",
    nativeName: "British Indian Ocean Territory (Chagos)",
    flag: "🇮🇴",
    continent: "me-africa",
    emergencyNumber: "911 / 112",
    hotlines: [
      {
        name: "Diego Garcia Branch Clinic & Mental Health Support",
        phone: "+2463704211",
        description: "24/7 emergency care and behavioral health support line",
        is24_7: true,
      },
    ],
  },
  {
    code: "re",
    name: "Réunion",
    nativeName: "La Réunion",
    flag: "🇷🇪",
    continent: "me-africa",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Numéro National de Prévention du Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "24/7 écoute confidentielle et gratuite avec des infirmiers et psychologues spécialisés",
        is24_7: true,
        isFree: true,
      },
      {
        name: "SOS Solitude Réunion",
        phone: "0262970000",
        description: "Écoute bienveillante et soutien psychologique 24h/24",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "sh",
    name: "Saint Helena, Ascension and Tristan da Cunha",
    nativeName: "Saint Helena",
    flag: "🇸🇭",
    continent: "me-africa",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "Saint Helena General Hospital Support",
        phone: "+29022500",
        description: "24/7 medical emergency and psychosocial support team",
        is24_7: true,
      },
    ],
  },
  {
    code: "tf",
    name: "French Southern Territories",
    nativeName: "Terres australes et antarctiques françaises (TAAF)",
    flag: "🇹🇫",
    continent: "me-africa",
    emergencyNumber: "112 / CROSS",
    hotlines: [
      {
        name: "TAAF Mission Medical & Psychological Support",
        phone: "+262262967878",
        description: "24/7 polar mission medical support and emergency tele-consultation",
        is24_7: true,
      },
    ],
  },
  {
    code: "yt",
    name: "Mayotte",
    nativeName: "Mayotte (Maoré)",
    flag: "🇾🇹",
    continent: "me-africa",
    emergencyNumber: "112 / 15",
    hotlines: [
      {
        name: "Ligne 3114 Prévention Suicide",
        phone: "3114",
        website: "https://3114.fr/",
        description: "24/7 service d'urgence pour toute personne en détresse psychologique",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Centre Hospitalier de Mayotte (CHM) Urgences",
        phone: "+262269618000",
        description: "Prise en charge psychiatrique et médicale d'urgence 24/7",
        is24_7: true,
      },
    ],
  },
  {
    code: "vi",
    name: "U.S. Virgin Islands",
    nativeName: "United States Virgin Islands",
    flag: "🇻🇮",
    continent: "americas",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "988 Suicide & Crisis Lifeline (USVI)",
        phone: "988",
        website: "https://988lifeline.org/",
        description: "Free, confidential 24/7 mental health crisis support across the Virgin Islands. Call or text 988.",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Crisis Text Line",
        sms: { number: "741741", keyword: "HOME" },
        website: "https://www.crisistextline.org/",
        description: "Text HOME to 741741 for 24/7 crisis counselor support",
        is24_7: true,
        isFree: true,
      },
    ],
  },
];

/**
 * Intelligent helper to resolve user's country code based on their browser timezone or language.
 */
export function detectUserCountryCode(): string {
  if (typeof window === "undefined") return "sk";

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || navigator.languages?.[0] || "").toLowerCase();

    // Europe timezones
    if (tz.includes("Bratislava")) return "sk";
    if (tz.includes("Prague")) return "cz";
    if (tz.includes("Warsaw")) return "pl";
    if (tz.includes("Budapest")) return "hu";
    if (tz.includes("London")) return "gb";
    if (tz.includes("Dublin")) return "ie";
    if (tz.includes("Berlin")) return "de";
    if (tz.includes("Vienna")) return "at";
    if (tz.includes("Zurich")) return "ch";
    if (tz.includes("Paris")) return "fr";
    if (tz.includes("Brussels")) return "be";
    if (tz.includes("Luxembourg")) return "lu";
    if (tz.includes("Rome")) return "it";
    if (tz.includes("Madrid")) return "es";
    if (tz.includes("Lisbon")) return "pt";
    if (tz.includes("Amsterdam")) return "nl";
    if (tz.includes("Stockholm")) return "se";
    if (tz.includes("Oslo")) return "no";
    if (tz.includes("Copenhagen")) return "dk";
    if (tz.includes("Helsinki")) return "fi";
    if (tz.includes("Tallinn")) return "ee";
    if (tz.includes("Riga")) return "lv";
    if (tz.includes("Vilnius")) return "lt";
    if (tz.includes("Athens")) return "gr";
    if (tz.includes("Nicosia")) return "cy";
    if (tz.includes("Bucharest")) return "ro";
    if (tz.includes("Sofia")) return "bg";
    if (tz.includes("Zagreb")) return "hr";
    if (tz.includes("Belgrade")) return "rs";
    if (tz.includes("Sarajevo")) return "ba";
    if (tz.includes("Podgorica")) return "me";
    if (tz.includes("Pristina")) return "xk";
    if (tz.includes("Ljubljana")) return "sl";
    if (tz.includes("Tirane")) return "al";
    if (tz.includes("Skopje")) return "mk";
    if (tz.includes("Chisinau")) return "md";
    if (tz.includes("Kyiv")) return "ua";
    if (tz.includes("Tbilisi")) return "ge";
    if (tz.includes("Yerevan")) return "am";
    if (tz.includes("Baku")) return "az";
    if (tz.includes("Reykjavik")) return "is";
    if (tz.includes("Malta")) return "mt";
    if (tz.includes("Monaco")) return "mc";
    if (tz.includes("Andorra")) return "ad";
    if (tz.includes("Vaduz")) return "li";
    if (tz.includes("San_Marino")) return "sm";
    if (tz.includes("Vatican")) return "va";
    if (tz.includes("Moscow")) return "ru";

    // Middle East & Africa timezones
    if (tz.includes("Baghdad") || tz.includes("Basra")) return "iq";
    if (tz.includes("Riyadh")) return "sa";
    if (tz.includes("Dubai")) return "ae";
    if (tz.includes("Amman")) return "jo";
    if (tz.includes("Qatar")) return "qa";
    if (tz.includes("Kuwait")) return "kw";
    if (tz.includes("Muscat")) return "om";
    if (tz.includes("Bahrain")) return "bh";
    if (tz.includes("Damascus")) return "sy";
    if (tz.includes("Aden") || tz.includes("Sanaa")) return "ye";
    if (tz.includes("Gaza") || tz.includes("Hebron")) return "ps";
    if (tz.includes("Istanbul")) return "tr";
    if (tz.includes("Tehran")) return "ir";
    if (tz.includes("Jerusalem") || tz.includes("Tel_Aviv")) return "il";
    if (tz.includes("Cairo")) return "eg";
    if (tz.includes("Beirut")) return "lb";
    if (tz.includes("Tripoli")) return "ly";
    if (tz.includes("Tunis")) return "tn";
    if (tz.includes("Algiers")) return "dz";
    if (tz.includes("Casablanca")) return "ma";
    if (tz.includes("Nouakchott")) return "mr";
    if (tz.includes("Khartoum")) return "sd";
    if (tz.includes("Juba")) return "ss";
    if (tz.includes("Lagos")) return "ng";
    if (tz.includes("Accra")) return "gh";
    if (tz.includes("Dakar")) return "sn";
    if (tz.includes("Abidjan")) return "ci";
    if (tz.includes("Douala") || tz.includes("Yaounde")) return "cm";
    if (tz.includes("Nairobi")) return "ke";
    if (tz.includes("Addis_Ababa")) return "et";
    if (tz.includes("Dar_es_Salaam")) return "tz";
    if (tz.includes("Kampala")) return "ug";
    if (tz.includes("Kigali")) return "rw";
    if (tz.includes("Bujumbura")) return "bi";
    if (tz.includes("Kinshasa")) return "cd";
    if (tz.includes("Brazzaville")) return "cg";
    if (tz.includes("Libreville")) return "ga";
    if (tz.includes("Bangui")) return "cf";
    if (tz.includes("Ndjamena")) return "td";
    if (tz.includes("Niamey")) return "ne";
    if (tz.includes("Ouagadougou")) return "bf";
    if (tz.includes("Bamako")) return "ml";
    if (tz.includes("Conakry")) return "gn";
    if (tz.includes("Freetown")) return "sl-africa";
    if (tz.includes("Monrovia")) return "lr";
    if (tz.includes("Lome")) return "tg";
    if (tz.includes("Porto-Novo")) return "bj";
    if (tz.includes("Banjul")) return "gm";
    if (tz.includes("Bissau")) return "gw";
    if (tz.includes("Cape_Verde")) return "cv";
    if (tz.includes("Sao_Tome")) return "st";
    if (tz.includes("Malabo")) return "gq";
    if (tz.includes("Djibouti")) return "dj";
    if (tz.includes("Asmara")) return "er";
    if (tz.includes("Mogadishu")) return "so";
    if (tz.includes("Seychelles")) return "sc";
    if (tz.includes("Mauritius")) return "mu";
    if (tz.includes("Comoro")) return "km";
    if (tz.includes("Antananarivo")) return "mg";
    if (tz.includes("Lilongwe")) return "mw";
    if (tz.includes("Maputo")) return "mz";
    if (tz.includes("Lusaka")) return "zm";
    if (tz.includes("Harare")) return "zw";
    if (tz.includes("Gaborone")) return "bw";
    if (tz.includes("Windhoek")) return "na";
    if (tz.includes("Luanda")) return "ao";
    if (tz.includes("Maseru")) return "ls";
    if (tz.includes("Mbabane")) return "sz";
    if (tz.includes("Johannesburg")) return "za";

    // Asia & Pacific timezones
    if (tz.includes("Tokyo")) return "jp";
    if (tz.includes("Shanghai") || tz.includes("Beijing")) return "cn";
    if (tz.includes("Hong_Kong")) return "hk";
    if (tz.includes("Taipei")) return "tw";
    if (tz.includes("Seoul")) return "ko";
    if (tz.includes("Pyongyang")) return "kp";
    if (tz.includes("Singapore")) return "sg";
    if (tz.includes("Sydney") || tz.includes("Melbourne") || tz.includes("Brisbane")) return "au";
    if (tz.includes("Auckland")) return "nz";
    if (tz.includes("Kolkata") || tz.includes("Calcutta")) return "in";
    if (tz.includes("Karachi")) return "pk";
    if (tz.includes("Dhaka")) return "bd";
    if (tz.includes("Colombo")) return "lk";
    if (tz.includes("Kathmandu")) return "np";
    if (tz.includes("Thimphu")) return "bt";
    if (tz.includes("Maldives")) return "mv";
    if (tz.includes("Kabul")) return "af";
    if (tz.includes("Manila")) return "ph";
    if (tz.includes("Bangkok")) return "th";
    if (tz.includes("Saigon") || tz.includes("Ho_Chi_Minh")) return "vi";
    if (tz.includes("Kuala_Lumpur")) return "my";
    if (tz.includes("Jakarta")) return "id";
    if (tz.includes("Phnom_Penh")) return "kh";
    if (tz.includes("Vientiane")) return "la-asia";
    if (tz.includes("Yangon")) return "mm";
    if (tz.includes("Brunei")) return "bn";
    if (tz.includes("Dili")) return "tl";
    if (tz.includes("Ulaanbaatar")) return "mn";
    if (tz.includes("Almaty") || tz.includes("Astana")) return "kz";
    if (tz.includes("Tashkent")) return "uz";
    if (tz.includes("Bishkek")) return "kg";
    if (tz.includes("Dushanbe")) return "tj";
    if (tz.includes("Ashgabat")) return "tm";
    if (tz.includes("Port_Moresby")) return "pg";
    if (tz.includes("Fiji")) return "fj";
    if (tz.includes("Guadalcanal")) return "sb";
    if (tz.includes("Efate")) return "vu";
    if (tz.includes("Apia")) return "ws";
    if (tz.includes("Tongatapu")) return "to";
    if (tz.includes("Tarawa")) return "ki";
    if (tz.includes("Pohnpei")) return "fm";
    if (tz.includes("Palau")) return "pw";
    if (tz.includes("Majuro")) return "mh";
    if (tz.includes("Nauru")) return "nr";
    if (tz.includes("Funafuti")) return "tv";

    // Americas timezones
    if (tz.includes("New_York") || tz.includes("Chicago") || tz.includes("Los_Angeles") || tz.includes("Denver")) return "us";
    if (tz.includes("Toronto") || tz.includes("Vancouver") || tz.includes("Montreal")) return "ca";
    if (tz.includes("Mexico_City")) return "mx";
    if (tz.includes("Sao_Paulo")) return "br";
    if (tz.includes("Buenos_Aires")) return "ar";
    if (tz.includes("Bogota")) return "co";
    if (tz.includes("Santiago")) return "cl";
    if (tz.includes("Lima")) return "pe";
    if (tz.includes("Guayaquil")) return "ec";
    if (tz.includes("Caracas")) return "ve";
    if (tz.includes("Montevideo")) return "uy";
    if (tz.includes("Asuncion")) return "py";
    if (tz.includes("La_Paz")) return "bo";
    if (tz.includes("Costa_Rica")) return "cr";
    if (tz.includes("Panama")) return "pa";
    if (tz.includes("Guatemala")) return "gt";
    if (tz.includes("Tegucigalpa")) return "hn";
    if (tz.includes("El_Salvador")) return "sv";
    if (tz.includes("Managua")) return "ni";
    if (tz.includes("Belize")) return "bz";
    if (tz.includes("Havana")) return "cu";
    if (tz.includes("Santo_Domingo")) return "do";
    if (tz.includes("Port-au-Prince")) return "ht";
    if (tz.includes("Jamaica")) return "jm";
    if (tz.includes("Nassau")) return "bs";
    if (tz.includes("Barbados")) return "bb";
    if (tz.includes("Port_of_Spain")) return "tt";
    if (tz.includes("St_Lucia")) return "lc";
    if (tz.includes("St_Vincent")) return "vc";
    if (tz.includes("Grenada")) return "gd";
    if (tz.includes("Antigua")) return "ag";
    if (tz.includes("St_Kitts")) return "kn";
    if (tz.includes("Dominica")) return "dm";
    if (tz.includes("Guyana")) return "gy";
    if (tz.includes("Paramaribo")) return "sr";

    // Language fallbacks
    if (lang.startsWith("sk")) return "sk";
    if (lang.startsWith("cs")) return "cz";
    if (lang.startsWith("pl")) return "pl";
    if (lang.startsWith("hu")) return "hu";
    if (lang.startsWith("de")) return "de";
    if (lang.startsWith("fr")) return "fr";
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("it")) return "it";
    if (lang.startsWith("ja")) return "jp";
    if (lang.startsWith("zh")) return "cn";
    if (lang.startsWith("ko")) return "ko";
    if (lang.startsWith("ar")) return "sa";
    if (lang.startsWith("pt")) return "br";
    if (lang.startsWith("ru")) return "ru";

    return "sk";
  } catch {
    return "sk";
  }
}
