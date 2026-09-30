export interface InspiringFigure {
  id: string;
  name: string;
  countryCode: string;
  countryName: {
    en: string;
    sk: string;
  };
  flag: string;
  continent: "europe" | "americas" | "asia" | "africa" | "oceania";
  role: {
    en: string;
    sk: string;
  };
  quote: {
    en: string;
    sk: string;
  };
  adversity: {
    en: string;
    sk: string;
  };
  transformation: {
    en: string;
    sk: string;
  };
  takeaway: {
    en: string;
    sk: string;
  };
  isGlobalFeatured?: boolean;
}

export const INSPIRING_FIGURES: InspiringFigure[] = [
  // =========================================================================
  // GLOBAL FEATURED TITANS
  // =========================================================================
  {
    id: "nick-vujicic",
    name: "Nick Vujicic",
    countryCode: "au",
    countryName: { en: "Australia", sk: "Austrália" },
    flag: "🇦🇺",
    continent: "oceania",
    role: {
      en: "Evangelist, author & motivational speaker",
      sk: "Svetový motivačný rečník a autor",
    },
    quote: {
      en: "If you can't get a miracle, become one.",
      sk: "Ak nemôžeš získať zázrak, staň sa ním pre niekoho iného.",
    },
    adversity: {
      en: "Born with tetra-amelia syndrome (without arms and legs). Suffered severe bullying, loneliness, and attempted suicide at age 10.",
      sk: "Narodil sa bez rúk a nôh (syndróm tetra-amélie). V detstve prežil šikanu, pocity beznádeje a v 10 rokoch pokus o samovraždu.",
    },
    transformation: {
      en: "Realized his life had a distinct purpose beyond physical form. He has spoken to millions across 70+ countries, showing that love and courage transcend physical limits.",
      sk: "Uvedomil si, že jeho život má hlbší zmysel. Dnes inšpiruje milióny ľudí vo viac ako 70 krajinách sveta a dokazuje, že ľudská hodnota nezávisí od tela.",
    },
    takeaway: {
      en: "Your worth is not defined by what you lack, but by the love and light you can bring to others.",
      sk: "Tvoja hodnota nie je definovaná tým, čo ti chýba, ale láskou a silou, ktorú môžeš odovzdať ďalej.",
    },
    isGlobalFeatured: true,
  },
  {
    id: "viktor-frankl",
    name: "Viktor E. Frankl",
    countryCode: "at",
    countryName: { en: "Austria", sk: "Rakúsko" },
    flag: "🇦🇹",
    continent: "europe",
    role: {
      en: "Neurologist, psychiatrist & founder of Logotherapy",
      sk: "Neurológ, psychiater a zakladateľ logoterapie",
    },
    quote: {
      en: "He who has a why to live can bear almost any how.",
      sk: "Kto má prečo žiť, vydrží takmer každé ako.",
    },
    adversity: {
      en: "Survived 4 concentration camps including Auschwitz and Dachau; lost his parents, brother, and pregnant wife in the Holocaust.",
      sk: "Prežil 4 koncentračné tábory vrátane Osvienčimu a Dachau. V holokauste prišiel o rodičov, brata aj tehotnú manželku.",
    },
    transformation: {
      en: "Created logotherapy—the school of psychotherapy centered on finding meaning even in the most unbearable suffering.",
      sk: "Založil logoterapiu – psychoterapeutický smer zameraný na nachádzanie zmyslu života aj v tom najťažšom utrpení.",
    },
    takeaway: {
      en: "Everything can be taken from a person but one thing: the last of human freedoms—to choose one's attitude in any set of circumstances.",
      sk: "Človeku možno vziať všetko okrem jediného: poslednej slobody zvoliť si vlastný postoj za akýchkoľvek okolností.",
    },
    isGlobalFeatured: true,
  },
  {
    id: "nelson-mandela",
    name: "Nelson Mandela",
    countryCode: "za",
    countryName: { en: "South Africa", sk: "Južná Afrika" },
    flag: "🇿🇦",
    continent: "africa",
    role: {
      en: "Anti-apartheid revolutionary & President",
      sk: "Bojovník proti apartheidu a prezident Južnej Afriky",
    },
    quote: {
      en: "It always seems impossible until it is done.",
      sk: "Vždy sa to zdá nemožné, až kým to niekto neurobí.",
    },
    adversity: {
      en: "Imprisoned for 27 years in harsh conditions on Robben Island for demanding equality.",
      sk: "Strávil 27 rokov v tvrdom väzení na ostrove Robben Island za boj za ľudskú dôstojnosť a rovnosť.",
    },
    transformation: {
      en: "Emerged without vengeance, united a fractured nation, and became the global symbol of forgiveness and resilience.",
      sk: "Vyšiel z väzenia bez nenávisti a viedol národ k odpusteniu a zmiereniu, čím zabránil občianskej vojne.",
    },
    takeaway: {
      en: "Resentment is like drinking poison and hoping it will kill your enemies. Forgive to free yourself.",
      sk: "Hnev a zatrpknutosť ubližujú najviac tomu, kto ich v sebe nosí. Odpustenie prináša osobnú slobodu.",
    },
    isGlobalFeatured: true,
  },
  {
    id: "helen-keller",
    name: "Helen Keller",
    countryCode: "us",
    countryName: { en: "United States", sk: "Spojené štáty" },
    flag: "🇺🇸",
    continent: "americas",
    role: {
      en: "Author, disability rights advocate & educator",
      sk: "Autorka, pedagogička a aktivistka",
    },
    quote: {
      en: "Although the world is full of suffering, it is also full of the overcoming of it.",
      sk: "Hoci je svet plný utrpenia, je plný aj jeho prekonávania.",
    },
    adversity: {
      en: "Lost both her sight and hearing at 19 months old due to acute illness, living in complete darkness and isolation.",
      sk: "V 19 mesiacoch po ťažkej chorobe úplne stratila zrak aj sluch a žila v úplnej tme a tichu.",
    },
    transformation: {
      en: "Learned to communicate through touch, earned a university degree, and traveled the world empowering millions.",
      sk: "Vďaka dotykovej abecede vyštudovala univerzitu, napísala 12 kníh a bojovala za zrovnoprávnenie znevýhodnených.",
    },
    takeaway: {
      en: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      sk: "To najkrajšie na svete nemožno vidieť ani sa toho dotknúť – musíme to precítiť srdcom.",
    },
    isGlobalFeatured: true,
  },
  {
    id: "terry-fox",
    name: "Terry Fox",
    countryCode: "ca",
    countryName: { en: "Canada", sk: "Kanada" },
    flag: "🇨🇦",
    continent: "americas",
    role: {
      en: "Athlete & cancer research activist",
      sk: "Športovec a aktivista",
    },
    quote: {
      en: "Dreams are made possible if you try.",
      sk: "Sny sa stávajú skutočnosťou, keď sa nevzdáš a skúšaš to.",
    },
    adversity: {
      en: "Diagnosed with osteosarcoma at age 18, leading to the amputation of his right leg.",
      sk: "V 18 rokoch mu diagnostikovali rakovinu kostí, kvôli ktorej mu amputovali pravú nohu.",
    },
    transformation: {
      en: "Embarked on the 'Marathon of Hope' across Canada, running a marathon every single day on a prosthetic leg to fund cancer research.",
      sk: "Rozbehol 'Maratón nádeje' naprieč Kanadou – každý deň odbehol celý maratón s protézou a vyzbieral milióny na výskum rakoviny.",
    },
    takeaway: {
      en: "Even one person with an unstoppable spirit can spark hope across an entire nation.",
      sk: "Aj jediný odhodlaný človek dokáže zapáliť plameň nádeje v celom národe.",
    },
    isGlobalFeatured: true,
  },

  // =========================================================================
  // EUROPE (EVERY COUNTRY IN EUROPE)
  // =========================================================================
  {
    id: "anton-srholec",
    name: "Anton Srholec",
    countryCode: "sk",
    countryName: { en: "Slovakia", sk: "Slovensko" },
    flag: "🇸🇰",
    continent: "europe",
    role: {
      en: "Priest, political prisoner & philanthropist",
      sk: "Kňaz, politický väzeň a filantrop",
    },
    quote: {
      en: "Pity has no value if it does not reach out a helping hand.",
      sk: "Súcit nemá hodnotu, ak nepodá pomocnú ruku.",
    },
    adversity: {
      en: "Imprisoned for 10 years by the communist regime, working in the uranium mines of Jáchymov.",
      sk: "Odsúdený na 10 rokov ťažkého žalára a nútených prác v jáchymovských uránových baniach.",
    },
    transformation: {
      en: "Turned his suffering into selfless charity, establishing the Resoty shelter for the homeless and preaching forgiveness.",
      sk: "Svoje utrpenie pretavil do lásky k blížnemu. Založil útulok Resoty pre ľudí bez domova a učil odpúšťať.",
    },
    takeaway: {
      en: "No regime and no prison can break a person who decides to live in truth and kindness.",
      sk: "Žiadne väzenie a žiadna temnota nedokáže zlomiť človeka, ktorý sa rozhodol žiť v pravde a láske.",
    },
  },
  {
    id: "vaclav-havel",
    name: "Václav Havel",
    countryCode: "cz",
    countryName: { en: "Czech Republic", sk: "Česká republika" },
    flag: "🇨🇿",
    continent: "europe",
    role: {
      en: "Dissident, playwright & President",
      sk: "Disident, dramatik a prezident",
    },
    quote: {
      en: "Hope is not the conviction that something will turn out well, but the certainty that something makes sense, regardless of how it turns out.",
      sk: "Nádej nie je presvedčenie, že niečo dobre dopadne, ale istota, že niečo má zmysel – bez ohľadu na to, ako to dopadne.",
    },
    adversity: {
      en: "Persecuted and repeatedly imprisoned for nearly 5 years for defending basic human rights.",
      sk: "Prenasledovaný a takmer 5 rokov väznený komunistickým režimom za obhajobu ľudských práv.",
    },
    transformation: {
      en: "Led the Velvet Revolution and showed that truth and moral courage can defeat totalitarian power peacefully.",
      sk: "Viedol Nežnú revolúciu a ukázal silu 'moci bezmocných', kde pravda a nenásilie zvíťazili nad tyraniou.",
    },
    takeaway: {
      en: "Living in truth and standing by your values gives your life unshakeable meaning.",
      sk: "Život v pravde a vernosť vlastným hodnotám dáva človeku nezničiteľný vnútorný pokoj.",
    },
  },
  {
    id: "beethoven",
    name: "Ludwig van Beethoven",
    countryCode: "de",
    countryName: { en: "Germany", sk: "Nemecko" },
    flag: "🇩🇪",
    continent: "europe",
    role: {
      en: "Composer & pianist",
      sk: "Skladateľ a hudobný génius",
    },
    quote: {
      en: "I will seize fate by the throat; it will certainly never wholly conquer me.",
      sk: "Uchopím osud pod krk; celkom ma určite nikdy nepremôže.",
    },
    adversity: {
      en: "Began losing his hearing in his late 20s, becoming completely deaf by his 40s.",
      sk: "V mladom veku začal strácať sluch a neskôr úplne ohluchol, čo ho priviedlo na pokraj zúfalstva.",
    },
    transformation: {
      en: "Composed his greatest masterpieces, including the Ninth Symphony (Ode to Joy), without ever hearing them with physical ears.",
      sk: "Napriek hluchote zložil svoje najslávnejšie diela vrátane 9. symfónie (Óda na radosť) – hymny ľudskej nádeje.",
    },
    takeaway: {
      en: "True vision and creativity come from the depths of the soul, not physical senses.",
      sk: "Skutočná tvorivosť a poslanie pramenia z hĺbky duše, nie z vonkajších okolností.",
    },
  },
  {
    id: "irena-sendler",
    name: "Irena Sendlerowa",
    countryCode: "pl",
    countryName: { en: "Poland", sk: "Poľsko" },
    flag: "🇵🇱",
    continent: "europe",
    role: {
      en: "Nurse & humanitarian",
      sk: "Zdravotná sestra a záchrankyňa detí",
    },
    quote: {
      en: "Every child saved with my help is the justification of my existence on this Earth.",
      sk: "Každé zachránené dieťa je ospravedlnením mojej existencie na tejto Zemi.",
    },
    adversity: {
      en: "Tortured by the Gestapo with both legs and feet broken for running an underground rescue network.",
      sk: "Zatknutá a brutálne mučená Gestapom, ktoré jej zlomilo obe nohy za záchranu detí z geta.",
    },
    transformation: {
      en: "Saved 2,500 Jewish children from the Warsaw Ghetto by smuggling them to safety and burying their real names in jars to reunite them after the war.",
      sk: "Tajne zachránila 2 500 židovských detí z varšavského geta a ich skutočné mená zakopala v pohároch, aby po vojne našli svoje rodiny.",
    },
    takeaway: {
      en: "Quiet courage in the darkest times can illuminate the destiny of thousands.",
      sk: "Tichá odvaha jednotlivca v najtemnejších časoch dokáže zmeniť osudy celých generácií.",
    },
  },
  {
    id: "marie-curie",
    name: "Marie Curie-Skłodowska",
    countryCode: "fr",
    countryName: { en: "France", sk: "Francúzsko" },
    flag: "🇫🇷",
    continent: "europe",
    role: {
      en: "Physicist, chemist & 2x Nobel laureate",
      sk: "Fyzik, chemik a dvojnásobná laureátka Nobelovej ceny",
    },
    quote: {
      en: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
      sk: "Ničoho v živote sa netreba báť, treba tomu len porozumieť. Teraz je čas porozumieť viac, aby sme sa báli menej.",
    },
    adversity: {
      en: "Endured extreme poverty, hunger, and gender discrimination, doing experiments in a dilapidated shed.",
      sk: "Prežila extrémnu chudobu, hladovanie a predsudky spoločnosti voči vedkyniam.",
    },
    transformation: {
      en: "Discovered polonium and radium, developed mobile X-ray units for wounded soldiers in WWI, and won two Nobel prizes in different scientific fields.",
      sk: "Objavila rádium a polónium, vyvinula mobilné röntgeny pre ranených vojakov a stala sa prvým človekom s dvoma Nobelovými cenami.",
    },
    takeaway: {
      en: "Curiosity and discipline can turn poverty and obstacles into groundbreaking breakthroughs.",
      sk: "Vytrvalosť a hľadanie poznania dokážu prelomiť akékoľvek predsudky a prekážky.",
    },
  },
  {
    id: "stephen-hawking",
    name: "Stephen Hawking",
    countryCode: "gb",
    countryName: { en: "United Kingdom", sk: "Veľká Británia" },
    flag: "🇬🇧",
    continent: "europe",
    role: {
      en: "Theoretical physicist & cosmologist",
      sk: "Teoretický fyzik a kozmológ",
    },
    quote: {
      en: "However difficult life may seem, there is always something you can do and succeed at. Where there's life, there is hope.",
      sk: "Nech sa zdá život akokoľvek ťažký, vždy existuje niečo, čo môžete robiť a v čom môžete uspieť. Kde je život, tam je nádej.",
    },
    adversity: {
      en: "Diagnosed with motor neurone disease (ALS) at 21 and given 2 years to live; eventually lost almost all motor function and speech.",
      sk: "V 21 rokoch mu diagnostikovali ALS s prognózou 2 rokov života. Postupne stratil kontrolu nad telom aj hlas.",
    },
    transformation: {
      en: "Lived 55 more years, revolutionized theoretical physics, and wrote bestsellers using a single cheek muscle to type.",
      sk: "Prežil ďalších 55 rokov, zmenil pohľad ľudstva na vesmír a komunikoval cez počítač ovládaný jediným lícnym svalom.",
    },
    takeaway: {
      en: "The mind can explore the boundaries of the universe even when the body is confined to a chair.",
      sk: "Ľudská myseľ dokáže objavovať hranice vesmíru, aj keď je telo pripútané na vozík.",
    },
  },
  {
    id: "lesya-ukrainka",
    name: "Lesya Ukrainka",
    countryCode: "ua",
    countryName: { en: "Ukraine", sk: "Ukrajina" },
    flag: "🇺🇦",
    continent: "europe",
    role: {
      en: "Poet, dramatist & feminist icon",
      sk: "Básnička, dramatička a kultúrna ikona",
    },
    quote: {
      en: "I want to laugh through tears, to sing songs amid disaster, to hope without hope, to live!",
      sk: "Chcem sa smiať cez slzy, spievať piesne uprostred nešťastia, dúfať bez nádeje, chcem žiť!",
    },
    adversity: {
      en: "Battled severe bone tuberculosis from childhood, undergoing painful operations and lifelong chronic pain.",
      sk: "Od detstva bojovala s ťažkou tuberkulózou kostí a prežila desiatky bolestivých operácií.",
    },
    transformation: {
      en: "Wrote immortal literary masterworks, becoming the voice of resilience and courage for her nation.",
      sk: "Premenila bolesť na nesmrteľné literárne diela a stala sa symbolom národnej nezlomnosti a slobody.",
    },
    takeaway: {
      en: "Pain cannot extinguish the fire of creative spirit when one resolves to live with dignity.",
      sk: "Bolesť nedokáže uhasiť oheň tvorivého ducha, ak sa človek rozhodne žiť s hrdosťou.",
    },
  },
  {
    id: "carl-jung",
    name: "Carl Gustav Jung",
    countryCode: "ch",
    countryName: { en: "Switzerland", sk: "Švajčiarsko" },
    flag: "🇨🇭",
    continent: "europe",
    role: {
      en: "Psychiatrist & founder of Analytical Psychology",
      sk: "Psychiater a zakladateľ analytickej psychológie",
    },
    quote: {
      en: "I am not what happened to me, I am what I choose to become.",
      sk: "Nie som to, čo sa mi stalo. Som to, kým sa rozhodnem stať.",
    },
    adversity: {
      en: "Experienced severe mid-life psychological disorientation and crisis after his split with Freud.",
      sk: "Po rozchode s Freudom prešiel hlbokou psychologickou krízou a pocitmi úplného odcudzenia.",
    },
    transformation: {
      en: "Dove deep into the unconscious, creating the foundation of modern psychotherapy, shadow work, and self-integration.",
      sk: "Využil vlastnú krízu na preskúmanie nevedomia a položil základy práce s tieňom a celistvosti osobnosti.",
    },
    takeaway: {
      en: "Your darkest moments are not your end; they are the raw material for your greatest psychological integration.",
      sk: "Tvoje najtemnejšie tiene nie sú tvojím koncom – sú surovinou pre tvoj najväčší vnútorný rast.",
    },
  },
  {
    id: "vincent-van-gogh",
    name: "Vincent van Gogh",
    countryCode: "nl",
    countryName: { en: "Netherlands", sk: "Holandsko" },
    flag: "🇳🇱",
    continent: "europe",
    role: {
      en: "Post-impressionist painter",
      sk: "Postimpresionistický maliar",
    },
    quote: {
      en: "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.",
      sk: "Ak v sebe počuješ hlas, ktorý hovorí 'nevieš maľovať', tak za každú cenu maľuj a ten hlas stíchne.",
    },
    adversity: {
      en: "Endured severe depressive episodes, intense poverty, and was misunderstood throughout his entire lifetime.",
      sk: "Bojoval s ťažkými depresiami, samotou a chudobou, pričom počas života predal iba jediný obraz.",
    },
    transformation: {
      en: "Channeled his emotional agony into revolutionary vibrant art that permanently changed the history of human expression.",
      sk: "Pretavil svoju bolesť do neskutočnej palety farieb a svetla, ktoré dodnes liečia duše miliónov ľudí.",
    },
    takeaway: {
      en: "Your sensitivity is not a weakness; it is the source of your deepest empathy and creative light.",
      sk: "Tvoja citlivosť nie je slabosť – je zdrojom tvojej najhlbšej empatie a vnútornej krásy.",
    },
  },
  {
    id: "rita-levi-montalcini",
    name: "Rita Levi-Montalcini",
    countryCode: "it",
    countryName: { en: "Italy", sk: "Taliansko" },
    flag: "🇮🇹",
    continent: "europe",
    role: {
      en: "Neurobiologist & Nobel laureate",
      sk: "Neurobiologička a nositeľka Nobelovej ceny",
    },
    quote: {
      en: "Above all, don't fear difficult moments. The best comes from them.",
      sk: "Predovšetkým sa nebojte ťažkých chvíľ. To najlepšie v živote prichádza práve z nich.",
    },
    adversity: {
      en: "Banned from university and public life due to fascist race laws during WWII.",
      sk: "Počas fašistického režimu jej zakázali vedeckú prácu a musela sa skrývať pred deportáciou.",
    },
    transformation: {
      en: "Built a secret research laboratory in her bedroom, discovering Nerve Growth Factor (NGF) and winning the Nobel Prize.",
      sk: "Zriadila si tajné laboratórium v spálni, objavila nervový rastový faktor a získala Nobelovu cenu za medicínu.",
    },
    takeaway: {
      en: "Passion and dedication can thrive in the smallest corner when external freedom is restricted.",
      sk: "Vášeň a zmysel pre poslanie dokážu rásť aj v tom najskromnejšom kúte, keď vonkajší svet zlyháva.",
    },
  },
  {
    id: "cervantes",
    name: "Miguel de Cervantes",
    countryCode: "es",
    countryName: { en: "Spain", sk: "Španielsko" },
    flag: "🇪🇸",
    continent: "europe",
    role: {
      en: "Writer & poet",
      sk: "Spisovateľ a básnik",
    },
    quote: {
      en: "To be prepared is half the victory.",
      sk: "Byť pripravený znamená polovicu víťazstva.",
    },
    adversity: {
      en: "Severely wounded in battle, maimed in his left hand, and enslaved in Algiers for 5 years with multiple failed escape attempts.",
      sk: "V boji prišiel o ľavú ruku, strávil 5 rokov v otroctve v Alžíri a prežil opakované väznenie.",
    },
    transformation: {
      en: "Drew upon his suffering and observations of human folly to write Don Quixote, the foundational masterpiece of modern literature.",
      sk: "Zúročil svoje životné skúšky a napísal Dona Quijota – prvé a najslávnejšie moderné dielo svetovej literatúry.",
    },
    takeaway: {
      en: "No setback in your life is wasted if you use it to understand the human heart with deeper compassion.",
      sk: "Žiadne zlyhanie a žiadna jazva nie sú zbytočné, ak ti pomôžu hlbšie porozumieť ľudskému srdcu.",
    },
  },
  {
    id: "fridtjof-nansen",
    name: "Fridtjof Nansen",
    countryCode: "no",
    countryName: { en: "Norway", sk: "Nórsko" },
    flag: "🇳🇴",
    continent: "europe",
    role: {
      en: "Polar explorer, diplomat & Nobel Peace laureate",
      sk: "Polárnik, diplomat a nositeľ Nobelovej ceny za mier",
    },
    quote: {
      en: "The difficult is what takes a little time; the impossible is what takes a little longer.",
      sk: "Ťažké veci si vyžadujú trochu času; nemožné veci si vyžadujú o niečo viac času.",
    },
    adversity: {
      en: "Survived brutal Arctic winters near the North Pole and witnessed the catastrophic refugee crises after WWI.",
      sk: "Prežil arktické mrazy na pokraji smrti a videl utrpenie státisícov ľudí bez domova po prvej svetovej vojne.",
    },
    transformation: {
      en: "Created the 'Nansen Passport' for stateless refugees, saving over 450,000 displaced people.",
      sk: "Vytvoril tzv. Nansenov pas pre utečencov a zachránil viac ako 450 000 ľudí bez štátnej príslušnosti.",
    },
    takeaway: {
      en: "Human empathy knows no national borders. Helping the vulnerable gives life its highest meaning.",
      sk: "Ľudská solidarita nepozná hranice. Záchrana slabších dáva životu ten najvyšší zmysel.",
    },
  },
  {
    id: "nikola-tesla",
    name: "Nikola Tesla",
    countryCode: "hr",
    countryName: { en: "Croatia", sk: "Chorvátsko" },
    flag: "🇭🇷",
    continent: "europe",
    role: {
      en: "Inventor & electrical engineer",
      sk: "Vynálezca a elektrotechnický génius",
    },
    quote: {
      en: "The present is theirs; the future, for which I really worked, is mine.",
      sk: "Prítomnosť patrí im; budúcnosť, pre ktorú som skutočne pracoval, patrí mne.",
    },
    adversity: {
      en: "Suffered nervous breakdowns, severe cholera, cheated out of fortunes, and saw his laboratory burn to the ground.",
      sk: "Prežil choleru, nervové zrútenia, podvody obchodných partnerov a požiar celého laboratória.",
    },
    transformation: {
      en: "Invented the alternating current (AC) electrical system and radio, powering the modern world.",
      sk: "Vynašiel striedavý prúd, rádio a bezdrôtový prenos, čím doslova rozsvietil modernú civilizáciu.",
    },
    takeaway: {
      en: "Work for a vision greater than yourself; what you build for humanity outlasts any personal hardship.",
      sk: "Tvor pre niečo väčšie než si ty sám; hodnota, ktorú vytvoríš, pretrvá akúkoľvek osobnú krízu.",
    },
  },
  {
    id: "mother-teresa",
    name: "Mother Teresa",
    countryCode: "mk",
    countryName: { en: "North Macedonia", sk: "Severné Macedónsko" },
    flag: "🇲🇰",
    continent: "europe",
    role: {
      en: "Humanitarian & Nobel Peace laureate",
      sk: "Humanitárna pracovníčka a nositeľka Nobelovej ceny",
    },
    quote: {
      en: "Not all of us can do great things. But we can do small things with great love.",
      sk: "Nie všetci môžeme robiť veľké veci. Ale môžeme robiť malé veci s veľkou láskou.",
    },
    adversity: {
      en: "Born in Skopje, walked into the poorest slums of Calcutta with no money to care for the dying and abandoned.",
      sk: "Odišla do najchudobnejších slumov Kalkaty bez peňazí a prostriedkov slúžiť umierajúcim a opusteným.",
    },
    transformation: {
      en: "Established hospices and orphanages worldwide, showing that every human being deserves to die feeling loved.",
      sk: "Vybudovala celosvetovú sieť hospicov a domovov a vrátila ľudskú dôstojnosť tým najzraniteľnejším.",
    },
    takeaway: {
      en: "Small acts of gentleness and presence can save a person from the darkness of loneliness.",
      sk: "Malé skutky nezištnej lásky a ľudská prítomnosť dokážu zachrániť človeka z temnoty osamelosti.",
    },
  },
  {
    id: "arvo-part",
    name: "Arvo Pärt",
    countryCode: "ee",
    countryName: { en: "Estonia", sk: "Estónsko" },
    flag: "🇪🇪",
    continent: "europe",
    role: {
      en: "Composer & master of tintinnabuli",
      sk: "Skladateľ a majster meditatívnej hudby",
    },
    quote: {
      en: "Silence is the pause that allows us to hear the truth within.",
      sk: "Ticho je priestor, ktorý nám umožňuje počuť pravdu v našom vnútri.",
    },
    adversity: {
      en: "Faced years of creative paralysis, severe censorship by Soviet authorities, and forced emigration.",
      sk: "Prežil roky tvorivého ticha, cenzúru sovietskeho režimu a nútenú emigráciu z vlasti.",
    },
    transformation: {
      en: "Created tintinnabuli—a deeply peaceful, minimalist musical language that acts as an acoustic balm for stressed minds worldwide.",
      sk: "Vynašiel štýl 'tintinnabuli' – hlbokú minimalistickú hudbu, ktorá dnes prináša pokoj a duševnú úľavu miliónom ľudí.",
    },
    takeaway: {
      en: "In moments of internal chaos, stripping away the noise and returning to simplicity restores the soul.",
      sk: "V chvíľach vnútorného chaosu pomáha stíšiť hluk a vrátiť sa k jednoduchej podstate.",
    },
  },
];
