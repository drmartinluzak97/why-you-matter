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
  code: string; // ISO 2-letter or unique identifier (sk, cz, iq, us, gb...)
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
  // 1. EUROPE (48 countries & regions)
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
      {
        name: "Pieta House Suicide Helpline",
        phone: "1800247247",
        website: "https://www.pieta.ie/",
        description: "Free 24/7 suicide and self-harm crisis support",
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
        name: "Nummer gegen Kummer (Kinder & Jugendliche)",
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
        name: "Rat auf Draht (Kinder & Jugend)",
        phone: "147",
        website: "https://www.rataufdraht.at/",
        description: "24/7 kostenlose Notrufnummer für Kinder und Jugendliche",
        is24_7: true,
        isFree: true,
        isChat: true,
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
        name: "Pro Juventute (Jugendliche)",
        phone: "147",
        website: "https://www.147.ch/",
        description: "24/7 kostenlose Beratung für Kinder und Jugendliche",
        is24_7: true,
        isFree: true,
        isChat: true,
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
        isChat: true,
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
        name: "Télé-Accueil (FR)",
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
        name: "Kanner- a Jugendtelefon (KJT)",
        phone: "116111",
        website: "https://www.kjt.lu/",
        description: "Gratis an anonym Berodung fir Kanner a Jugendlecher",
        is24_7: true,
        isFree: true,
        isChat: true,
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
      {
        name: "Samaritans Onlus Italia",
        phone: "0677208977",
        website: "https://www.samaritans.it/",
        description: "Centro di ascolto per la prevenzione del suicidio",
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
        name: "Linha SNS 24 (Apoio Psicológico)",
        phone: "808242424",
        website: "https://www.sns24.gov.pt/",
        description: "Serviço de aconselhamento psicológico do Serviço Nacional de Saúde",
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
      {
        name: "De Luisterlijn",
        phone: "0880767000",
        website: "https://www.deluisterlijn.nl/",
        description: "24/7 een luisterend oor voor iedereen die daar behoefte aan heeft",
        is24_7: true,
        isFree: true,
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
      {
        name: "Usaldustelefon",
        phone: "126",
        website: "https://usaldus.ee/",
        description: "24/7 anonüümne hingeabi eesti ja vene keeles",
        is24_7: true,
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
        name: "Vilties Linija (Emocinė Parama)",
        phone: "116123",
        website: "https://www.kpsc.lt/vilties-linija/",
        description: "Nemokama emocinė parama suaugusiems 24 valandas per parą",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Jaunimo Linija",
        phone: "880028888",
        website: "https://jaunimolinija.lt/",
        description: "24/7 nemokama emocinė pagalba jaunimui",
        is24_7: true,
        isFree: true,
        isChat: true,
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
        name: "1018 - Γραμμή Παρέμβασης για την Αυτοκτονία (Κλίμακα)",
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
      {
        name: "Hope for Children Helpline",
        phone: "116111",
        website: "https://uncrcpc.org.cy/",
        description: "24/7 free psychological line for children and families",
        is24_7: true,
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
      {
        name: "Telefonul Sufletului (depreHUB)",
        phone: "0374456420",
        website: "https://deprehub.ro/",
        description: "24/7 suport emoțional și consiliere psihologică",
        is24_7: true,
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
      {
        name: "Национална линия за деца",
        phone: "116111",
        website: "https://116111.bg/",
        description: "24/7 безплатна линия за деца и младежи",
        is24_7: true,
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
      {
        name: "Hrabri Telefon za djecu i mlade",
        phone: "116111",
        website: "https://hrabritelefon.hr/",
        description: "Besplatna i anonimna savjetodavna linija",
        isFree: true,
        isChat: true,
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
      {
        name: "Nacionalna SOS linija Klinika Laza Lazarević",
        phone: "0800309309",
        website: "https://lazalazarevic.rs/",
        description: "24 časa dnevno besplatna podrška psihijatara",
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
        name: "SOS Telefon za Žene i Djecu Podgorica",
        phone: "+38220664366",
        description: "Besplatna psihološka pomoć i krizno sklonište 24/7",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Nacionalna SOS linija",
        phone: "080111111",
        description: "24/7 besplatna linija za podršku",
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
    code: "sl",
    name: "Slovenia",
    nativeName: "Slovenija",
    flag: "🇸🇮",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Klic v duševni stiski (Ljubljana)",
        phone: "+38615209900",
        website: "https://www.klinicna-psihijatrija.si/",
        description: "Zaupni telefon za pomoč v stiski (19:00 - 07:00)",
      },
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
        name: "Linja Kombëtare e Këshillimit Alo 116",
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
        name: "Pentru Viață (Linia Verde Prevenire Suicid)",
        website: "https://pentruviata.md/",
        description: "Consiliere psihologică anonimă și suport emoțional online",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Telefonul Încrederii pentru Copii",
        phone: "116111",
        description: "24/7 asistență gratuită și confidențială",
        is24_7: true,
        isFree: true,
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
      {
        name: "Національна гаряча лінія",
        phone: "0800501212",
        description: "Безкоштовна кризова допомога",
        isFree: true,
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
        website: "https://112.gov.ge/",
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
        name: "Trust Mental Health Hotline Yerevan",
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
      {
        name: "Supportline 179",
        phone: "179",
        description: "National 24/7 emotional support helpline",
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
        name: "Die Dargebotene Hand Liechtenstein",
        phone: "143",
        website: "https://www.143.ch/",
        description: "24/7 anonyme Krisenhilfe und Lebensberatung",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Sorgentelefon für Kinder und Jugendliche",
        phone: "147",
        description: "24/7 kostenlose Notrufnummer",
        is24_7: true,
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
  {
    code: "eu-es",
    name: "Basque Country",
    nativeName: "Euskadi",
    flag: "🏴",
    continent: "europe",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Esperantzaren Telefonoa",
        phone: "+34943468844",
        website: "https://telefonodelaesperanza.org/",
        description: "24/7 laguntza emozionala eta krisiei aurre egitea",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // ==========================================
  // 2. AMERICAS (20 countries & regions)
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
      {
        name: "The Trevor Project (LGBTQ Youth)",
        phone: "18664887386",
        sms: { number: "678678", keyword: "START" },
        website: "https://www.thetrevorproject.org/",
        description: "24/7 confidential suicide prevention and crisis intervention",
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
      {
        name: "Kids Help Phone",
        phone: "18006686868",
        sms: { number: "686868", keyword: "CONNECT" },
        website: "https://kidshelpphone.ca/",
        description: "24/7 e-mental health service for young people in Canada",
        is24_7: true,
        isFree: true,
        isChat: true,
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
      {
        name: "SAPTEL México (Cruz Roja)",
        phone: "+525552598121",
        website: "https://www.saptel.org.mx/",
        description: "Sistema de apoyo psicológico por teléfono las 24 horas",
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
        name: "Línea *4141 'No Estás Solo' (MINSAL)",
        phone: "*4141",
        website: "https://www.minsal.cl/",
        description: "Línea telefónica gratuita y 24/7 para prevención del suicidio",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Salud Responde",
        phone: "6003607777",
        description: "Orientación psicológica 24 horas al día",
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
        name: "Línea 113 Salud Mental (MINSA)",
        phone: "113",
        website: "https://www.gob.pe/minsa",
        description: "Línea gratuita 24/7 marcando opción 5 para psicólogos especializados",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Teléfono de la Esperanza Perú",
        phone: "+5112738026",
        website: "https://telefonodelaesperanza.org/",
        description: "Orientación y escucha activa ante crisis emocionales",
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
        name: "Línea 171 Salud Mental (Opción 6)",
        phone: "171",
        website: "https://www.salud.gob.ec/",
        description: "Línea gratuita nacional del Ministerio de Salud Pública",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Teléfono de la Esperanza Quito",
        phone: "+59326003333",
        description: "Atención psicológica y soporte en crisis",
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
        name: "Línea Vida Prevención del Suicidio (ASSE)",
        phone: "08000767",
        website: "https://www.asse.com.uy/",
        description: "Línea gratuita nacional 24/7 (marcando 0800 0767 o *0767)",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Línea de Apoyo Emocional",
        phone: "08001920",
        description: "Orientación psicológica 24 horas",
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
        website: "https://www.mspbs.gov.py/",
        description: "Servicio gratuito de contención y orientación psicológica",
        is24_7: true,
        isFree: true,
      },
      {
        name: "SOS Mujer y Familia",
        phone: "137",
        description: "Línea de emergencia y apoyo psicológico 24/7",
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
      {
        name: "Teléfono de la Esperanza La Paz",
        phone: "+59122248488",
        description: "Apoyo emocional anónimo y prevención de crisis",
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
        name: "Línea Aquí Estoy (Colegio de Psicólogos)",
        phone: "8002737825",
        website: "https://psicologiacr.com/",
        description: "Línea gratuita para la prevención del suicidio y escucha activa",
        isFree: true,
      },
      {
        name: "Sistema 9-1-1 Despacho de Salud Mental",
        phone: "911",
        description: "Atención inmediata 24/7 en crisis aguda",
        is24_7: true,
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
        name: "Línea 169 de Apoyo Emocional (MINSA)",
        phone: "169",
        website: "https://www.minsa.gob.pa/",
        description: "Línea telefónica gratuita marcando opción 2 para salud mental",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Te Escucho Panamá",
        phone: "8000277",
        description: "Línea gratuita de contención emocional",
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
        website: "https://www.msp.gob.do/",
        description: "Línea gratuita de atención a emergencias emocionales",
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
        name: "Línea PAS de ASSMCA",
        phone: "18009810023",
        website: "https://assmca.pr.gov/",
        description: "24/7 Primera Ayuda Psicosocial gratuita en todo Puerto Rico (Call / Text 988)",
        is24_7: true,
        isFree: true,
        isChat: true,
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
      {
        name: "Teléfono de la Esperanza Guatemala",
        phone: "+50224205000",
        description: "Orientación en crisis y prevención del suicidio",
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
        description: "24/7 free toll-free line & WhatsApp (+1-876-439-5199) for young people",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "U-Matter Mental Health Line",
        phone: "8888628837",
        description: "Free 24/7 mental health crisis counseling",
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
        description: "24/7 free confidential crisis and suicide intervention (800-5588 / 220-3636)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "la",
    name: "Latin America & Caribbean",
    nativeName: "América Latina",
    flag: "🌎",
    continent: "americas",
    emergencyNumber: "911 / 112",
    hotlines: [
      {
        name: "Befrienders Worldwide (Español)",
        website: "https://www.befrienders.org/es",
        description: "Red internacional de centros de ayuda emocional 24/7",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },

  // ==========================================
  // 3. ASIA & PACIFIC (23 countries & regions)
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
        name: "Inochi no Denwa (こころの電話)",
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
      {
        name: "Lifeline China",
        phone: "4008211215",
        website: "https://www.lifelinechina.org/",
        description: "Free, confidential mental health support 10am - 10pm daily",
        isFree: true,
      },
    ],
  },
  {
    code: "hk",
    name: "Hong Kong",
    nativeName: "香港 (Hong Kong)",
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
      {
        name: "Suicide Prevention Services (SPS)",
        phone: "+85223820000",
        website: "https://www.sps.org.hk/",
        description: "24-hour emotional support hotline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "tw",
    name: "Taiwan",
    nativeName: "台灣 (Taiwan)",
    flag: "🇹🇼",
    continent: "asia",
    emergencyNumber: "110 / 119",
    hotlines: [
      {
        name: "1925 Peace Line (安心專線)",
        phone: "1925",
        website: "https://www.mohw.gov.tw/",
        description: "Ministry of Health 24/7 toll-free psychological support",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Teacher Chang Foundation (張老師專線)",
        phone: "1980",
        website: "http://www.1980.org.tw/",
        description: "Nationwide free counseling and emotional guidance",
        isFree: true,
      },
    ],
  },
  {
    code: "ko",
    name: "South Korea",
    nativeName: "대한민국 (Korea)",
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
      {
        name: "Mental Health Crisis Hotline",
        phone: "15770199",
        description: "24/7 professional psychiatric crisis support",
        is24_7: true,
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
        sms: { number: "91511767" },
        website: "https://www.sos.org.sg/",
        description: "24/7 toll-free crisis hotline and WhatsApp text line",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "National Mindline Singapore",
        phone: "18002026868",
        website: "https://www.mindline.sg/",
        description: "Government supported mental well-being platform",
        isFree: true,
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
        description: "24/7 free crisis support and suicide prevention services across Australia",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Beyond Blue",
        phone: "1300224636",
        website: "https://www.beyondblue.org.au/",
        description: "24/7 mental health information and support",
        is24_7: true,
        isFree: true,
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
        description: "Free 24/7 call or text to connect with a trained counsellor",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Lifeline Aotearoa",
        phone: "0800543354",
        sms: { number: "4357", keyword: "HELP" },
        website: "https://www.lifeline.org.nz/",
        description: "24/7 confidential community helpline",
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
        name: "Tele-MANAS (National Mental Health Helpline)",
        phone: "14416",
        website: "https://telemanas.mohfw.gov.in/",
        description: "Government of India 24/7 toll-free multilingual psychological counseling (1800-891-4416)",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Vandrevala Foundation Helpline",
        phone: "+919999666555",
        website: "https://www.vandrevalafoundation.com/",
        description: "24/7 free mental health counseling via call and WhatsApp",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "np",
    name: "Nepal",
    nativeName: "नेपाल (Nepal)",
    flag: "🇳🇵",
    continent: "asia",
    emergencyNumber: "100 / 102",
    hotlines: [
      {
        name: "National Suicide Prevention Helpline",
        phone: "1166",
        website: "https://mohp.gov.np/",
        description: "Government of Nepal 24/7 toll-free psychological support line",
        is24_7: true,
        isFree: true,
      },
      {
        name: "TUTH Mental Health Crisis Line",
        phone: "+9779840021600",
        description: "24-hour psychiatric emergency helpline",
        is24_7: true,
      },
    ],
  },
  {
    code: "lk",
    name: "Sri Lanka",
    nativeName: "ශ්‍රී ලංකාව / இலங்கை",
    flag: "🇱🇰",
    continent: "asia",
    emergencyNumber: "119 / 110",
    hotlines: [
      {
        name: "Sumithrayo Emotional Support Helpline",
        phone: "+94112696666",
        website: "https://srilankasumithrayo.lk/",
        description: "Free, confidential emotional support and suicide prevention",
        isFree: true,
      },
      {
        name: "National Mental Health Helpline (NIMH)",
        phone: "1926",
        website: "http://nimh.health.gov.lk/",
        description: "24/7 toll-free crisis support (Call 1926 or Text 1926 via WhatsApp)",
        is24_7: true,
        isFree: true,
        isChat: true,
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
        description: "24/7 toll-free landline 1553 or mobile 0917-899-8727",
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
        website: "https://www.dmh.go.th/",
        description: "24/7 free mental health consultation service in Thailand",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "vi",
    name: "Vietnam",
    nativeName: "Việt Nam",
    flag: "🇻🇳",
    continent: "asia",
    emergencyNumber: "115 / 113",
    hotlines: [
      {
        name: "National Protection & Mental Helpline",
        phone: "111",
        website: "http://tongdai111.vn/",
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
        website: "https://www.moh.gov.my/",
        description: "24/7 dedicated mental health crisis line by Ministry of Health",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Befrienders Kuala Lumpur",
        phone: "+60376272929",
        website: "https://www.befrienders.org.my/",
        description: "24/7 free, confidential emotional support",
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
        website: "https://kemenpppa.go.id/",
        description: "Layanan psikologi untuk sehat jiwa (Call 119 ext 8, 24/7 gratis)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "pk",
    name: "Pakistan & Bangladesh",
    nativeName: "Pakistan / Bangladesh",
    flag: "🇵🇰",
    continent: "asia",
    emergencyNumber: "1122 / 999",
    hotlines: [
      {
        name: "Umang Mental Health Helpline (Pakistan)",
        phone: "+923117786264",
        website: "https://www.umang.com.pk/",
        description: "24/7 certified clinical psychologists in Pakistan",
        is24_7: true,
      },
      {
        name: "Kaan Pete Roi (Bangladesh)",
        phone: "+8801779554391",
        website: "https://shuni.org/",
        description: "First emotional support & suicide helpline in Bangladesh",
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
        name: "National Trust Hotline 150 (Сенім телефоны)",
        phone: "150",
        website: "https://telefon150.kz/",
        description: "24/7 бесплатная психологическая помощь для всех",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
      {
        name: "Mental Health Unified Line 1414",
        phone: "1414",
        description: "Государственная служба психологической поддержки",
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
        name: "Ishonch Telefoni (National Trust Line)",
        phone: "1003",
        description: "24/7 bepul psixologik yordam va maslahat",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kh",
    name: "Cambodia",
    nativeName: "កម្ពុជា (Cambodia)",
    flag: "🇰🇭",
    continent: "asia",
    emergencyNumber: "117 / 119",
    hotlines: [
      {
        name: "TPO Cambodia Mental Health Helpline",
        phone: "+855236366992",
        website: "https://tpocambodia.org/",
        description: "Professional psychological support and crisis counseling",
        isFree: true,
      },
    ],
  },
  {
    code: "mm",
    name: "Myanmar",
    nativeName: "မြန်မာ (Myanmar)",
    flag: "🇲🇲",
    continent: "asia",
    emergencyNumber: "199 / 192",
    hotlines: [
      {
        name: "Counselling Corner Myanmar Helpline",
        phone: "+959784509916",
        website: "https://counsellingcornermyanmar.com/",
        description: "Confidential psychological first aid and emotional support",
        isFree: true,
      },
    ],
  },
  {
    code: "fj",
    name: "Fiji & Pacific Islands",
    nativeName: "Fiji / Pasifika",
    flag: "🇫🇯",
    continent: "asia",
    emergencyNumber: "911 / 917",
    hotlines: [
      {
        name: "Lifeline Fiji",
        phone: "132454",
        website: "https://www.lifelinefiji.com/",
        description: "24/7 toll-free crisis helpline across Fiji and the Pacific",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Empower Pacific Helpline",
        phone: "5626",
        website: "https://empowerpacific.com/",
        description: "24/7 toll-free psychosocial support line",
        is24_7: true,
        isFree: true,
      },
    ],
  },

  // ==========================================
  // 4. MIDDLE EAST & AFRICA (20 countries & regions)
  // Featuring Mesopotamia / Iraq, Levant, Gulf, Africa
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
        website: "https://www.msf.org/iraq",
        description: "Specialized psychosocial support in Baghdad, Ninewa, and Kurdistan regions",
        isFree: true,
      },
      {
        name: "Iraqi Red Crescent Emergency Support",
        phone: "115",
        website: "https://ircs.org.iq/",
        description: "Emergency psychological and physical humanitarian support 24/7",
        is24_7: true,
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
        description: "المركز الوطني لتعزيز الصحة النفسية - استشارات مجانية على مدار 24 ساعة",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Sehhaty App Consultations (Ministry of Health)",
        phone: "937",
        website: "https://www.moh.gov.sa/",
        description: "24/7 direct telephone medical & psychiatric counseling (Dial 937)",
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
        website: "https://www.mohap.gov.sa/",
        description: "Free and confidential psychological support by MOHAP (800-HOPE)",
        isFree: true,
      },
      {
        name: "Estijaba Helpline (Abu Dhabi)",
        phone: "8001717",
        description: "24/7 dedicated crisis and mental support hotline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "jo",
    name: "Jordan",
    nativeName: "الأردن (Jordan)",
    flag: "🇯🇴",
    continent: "me-africa",
    regionNote: "Levant / Blízky východ",
    emergencyNumber: "911",
    hotlines: [
      {
        name: "National Mental Health Support Line Jordan",
        phone: "+96265300888",
        website: "https://moh.gov.jo/",
        description: "خط الاستشارات والدعم النفسي المجاني بوزارة الصحة الأردنية",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Jordan Red Crescent Crisis Support",
        phone: "+96264773141",
        description: "Emergency psychosocial support",
        isFree: true,
      },
    ],
  },
  {
    code: "qa",
    name: "Qatar",
    nativeName: "قطر (Qatar)",
    flag: "🇶🇦",
    continent: "me-africa",
    emergencyNumber: "999",
    hotlines: [
      {
        name: "National Mental Health Helpline (HMC)",
        phone: "16000",
        website: "https://www.hamad.qa/",
        description: "Free, confidential counseling line (Dial 16000 option 4)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "kw",
    name: "Kuwait",
    nativeName: "الكويت (Kuwait)",
    flag: "🇰🇼",
    continent: "me-africa",
    emergencyNumber: "112",
    hotlines: [
      {
        name: "Kuwait Center for Mental Health Hotline",
        phone: "+96524621770",
        website: "https://www.moh.gov.kw/",
        description: "خط الاستشارات النفسية التابع لوزارة الصحة الكويتية",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "om",
    name: "Oman",
    nativeName: "عُمان (Oman)",
    flag: "🇴🇲",
    continent: "me-africa",
    emergencyNumber: "9999",
    hotlines: [
      {
        name: "Ministry of Health Psychological Support Line",
        phone: "1441",
        website: "https://www.moh.gov.om/",
        description: "خط الدعم النفسي والمشورة الطبية المجاني",
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
        website: "https://www.mhrs.gov.tr/",
        description: "Sağlık Bakanlığı 7/24 Psikolojik Destek ve Randevu Hattı",
        is24_7: true,
        isFree: true,
      },
      {
        name: "Umut Vakfı Destek Hattı",
        phone: "+902122160101",
        website: "https://www.umut.org.tr/",
        description: "İntiharı önleme ve kriz danışmanlığı",
      },
    ],
  },
  {
    code: "ir",
    name: "Iran",
    nativeName: "ایران (Iran)",
    flag: "🇮🇷",
    continent: "me-africa",
    emergencyNumber: "115 / 110",
    hotlines: [
      {
        name: "1480 Moshavereh (Psychological Counseling)",
        phone: "1480",
        website: "https://www.behzisti.ir/",
        description: "سامانه ملی مشاوره تلفنی رایگان سازمان بهزیستی (08:00 - 24:00)",
        isFree: true,
      },
      {
        name: "Social Emergency Services (اورژانس اجتماعی)",
        phone: "123",
        description: "24/7 emergency psychosocial intervention hotline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "il",
    name: "Israel",
    nativeName: "ישראל (Israel)",
    flag: "🇮🇱",
    continent: "me-africa",
    emergencyNumber: "101 / 100",
    hotlines: [
      {
        name: "ERAN - Emotional First Aid (ער״ן)",
        phone: "1201",
        website: "https://www.eran.org.il/",
        description: "24/7 confidential emotional first aid by phone and chat in Hebrew, Arabic, English, Russian",
        is24_7: true,
        isFree: true,
        isChat: true,
      },
    ],
  },
  {
    code: "eg",
    name: "Egypt",
    nativeName: "مصر (Egypt)",
    flag: "🇪🇬",
    continent: "me-africa",
    emergencyNumber: "123 / 122",
    hotlines: [
      {
        name: "General Secretariat of Mental Health Egypt",
        phone: "08008880700",
        website: "http://gsmh.gov.eg/",
        description: "الخط الساخن للأمانة العامة للصحة النفسية وعلاج الإدمان (24/7 مجاناً)",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "lb",
    name: "Lebanon & Levant",
    nativeName: "لبنان (Lebanon)",
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
    code: "ma",
    name: "Morocco",
    nativeName: "المغرب (Maroc)",
    flag: "🇲🇦",
    continent: "me-africa",
    emergencyNumber: "15 / 19",
    hotlines: [
      {
        name: "Sourire de Reda (Écoute et Soutien)",
        phone: "+212522874747",
        website: "https://www.souriredereda.org/",
        description: "Service d'écoute et de prévention du suicide chez les jeunes",
        isFree: true,
        isChat: true,
      },
      {
        name: "Ligne Verte Écoute Santé",
        phone: "0801000180",
        description: "Ligne nationale gratuite de soutien",
        isFree: true,
      },
    ],
  },
  {
    code: "tn",
    name: "Tunisia",
    nativeName: "تونس (Tunisie)",
    flag: "🇹🇳",
    continent: "me-africa",
    emergencyNumber: "190 / 197",
    hotlines: [
      {
        name: "Ligne Verte Écoute Psychologique (Ministère Santé)",
        phone: "80105050",
        description: "Numéro vert gratuit d'assistance psychologique 24/7",
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
        website: "https://mha-ghana.org/",
        description: "24/7 toll-free crisis response and counseling line",
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
        website: "https://health.go.ug/",
        description: "24/7 toll-free national mental health crisis helpline",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "ke",
    name: "Kenya (East Africa)",
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
      {
        name: "Kenya Red Cross Emergency Line",
        phone: "1199",
        website: "https://www.redcross.or.ke/",
        description: "24/7 toll-free crisis psychosocial assistance",
        is24_7: true,
        isFree: true,
      },
    ],
  },
  {
    code: "et",
    name: "Ethiopia",
    nativeName: "ኢትዮጵያ (Ethiopia)",
    flag: "🇪🇹",
    continent: "me-africa",
    emergencyNumber: "911 / 907",
    hotlines: [
      {
        name: "Ethiopian Mental Health Association Helpline",
        phone: "8335",
        website: "https://emha.org.et/",
        description: "Free national mental health counseling service",
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
    code: "ng",
    name: "Nigeria (West Africa)",
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
    if (tz.includes("Moscow")) return "ru";

    // Middle East / Mesopotamia & Africa timezones
    if (tz.includes("Baghdad") || tz.includes("Basra")) return "iq";
    if (tz.includes("Riyadh")) return "sa";
    if (tz.includes("Dubai")) return "ae";
    if (tz.includes("Amman")) return "jo";
    if (tz.includes("Qatar")) return "qa";
    if (tz.includes("Kuwait")) return "kw";
    if (tz.includes("Muscat")) return "om";
    if (tz.includes("Istanbul")) return "tr";
    if (tz.includes("Tehran")) return "ir";
    if (tz.includes("Jerusalem") || tz.includes("Tel_Aviv")) return "il";
    if (tz.includes("Cairo")) return "eg";
    if (tz.includes("Beirut")) return "lb";
    if (tz.includes("Casablanca")) return "ma";
    if (tz.includes("Tunis")) return "tn";
    if (tz.includes("Accra")) return "gh";
    if (tz.includes("Kampala")) return "ug";
    if (tz.includes("Nairobi")) return "ke";
    if (tz.includes("Addis_Ababa")) return "et";
    if (tz.includes("Johannesburg")) return "za";
    if (tz.includes("Lagos")) return "ng";

    // Asia timezones
    if (tz.includes("Tokyo")) return "jp";
    if (tz.includes("Shanghai") || tz.includes("Beijing")) return "cn";
    if (tz.includes("Hong_Kong")) return "hk";
    if (tz.includes("Taipei")) return "tw";
    if (tz.includes("Seoul")) return "ko";
    if (tz.includes("Singapore")) return "sg";
    if (tz.includes("Sydney") || tz.includes("Melbourne") || tz.includes("Brisbane")) return "au";
    if (tz.includes("Auckland")) return "nz";
    if (tz.includes("Kolkata") || tz.includes("Calcutta")) return "in";
    if (tz.includes("Kathmandu")) return "np";
    if (tz.includes("Colombo")) return "lk";
    if (tz.includes("Manila")) return "ph";
    if (tz.includes("Bangkok")) return "th";
    if (tz.includes("Saigon") || tz.includes("Ho_Chi_Minh")) return "vi";
    if (tz.includes("Kuala_Lumpur")) return "my";
    if (tz.includes("Jakarta")) return "id";
    if (tz.includes("Karachi") || tz.includes("Dhaka")) return "pk";
    if (tz.includes("Ulaanbaatar")) return "mn";
    if (tz.includes("Almaty") || tz.includes("Astana")) return "kz";
    if (tz.includes("Tashkent")) return "uz";
    if (tz.includes("Phnom_Penh")) return "kh";
    if (tz.includes("Yangon")) return "mm";
    if (tz.includes("Fiji")) return "fj";

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
    if (tz.includes("Montevideo")) return "uy";
    if (tz.includes("Asuncion")) return "py";
    if (tz.includes("La_Paz")) return "bo";
    if (tz.includes("Costa_Rica")) return "cr";
    if (tz.includes("Panama")) return "pa";
    if (tz.includes("Santo_Domingo")) return "do";
    if (tz.includes("Puerto_Rico")) return "pr";
    if (tz.includes("Guatemala")) return "gt";
    if (tz.includes("Jamaica")) return "jm";
    if (tz.includes("Port_of_Spain")) return "tt";

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
