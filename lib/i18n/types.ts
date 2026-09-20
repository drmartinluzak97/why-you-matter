export type Locale =
  | "en"
  | "sk"
  | "cs"
  | "de"
  | "es"
  | "fr"
  | "uk"
  | "pl"
  | "it"
  | "ja";

export interface LanguageInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  globeLabel: string;
  region: string;
}

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    tagline: string;
    changeLanguage: string;
    selectLanguageTitle: string;
    searchPlaceholder: string;
    close: string;
    panicButton: string;
    exitQuickly: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    affirmationBadge: string;
    affirmations: string[];
    readMore: string;
    collapse: string;
    reasonsTitle: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
  crisis: {
    badge: string;
    title: string;
    subtitle: string;
    emergencyWarning: string;
    selectCountryLabel: string;
    searchCountryPlaceholder: string;
    allRegions: string;
    noResults: string;
    helpline: string;
    emergency: string;
    smsChat: string;
    website: string;
    available247: string;
    tollFree: string;
    copyNumber: string;
    copied: string;
    disclaimer: string;
  };
  relief: {
    badge: string;
    title: string;
    subtitle: string;
    tools: {
      breathing: {
        title: string;
        desc: string;
        badge: string;
        inhale: string;
        hold: string;
        exhale: string;
        cyclesCompleted: string;
        start: string;
        pause: string;
        reset: string;
      };
      grounding: {
        title: string;
        desc: string;
        badge: string;
        stepTitle: string;
        steps: {
          number: number;
          sense: string;
          instruction: string;
        }[];
        nextStep: string;
        prevStep: string;
        restart: string;
        completed: string;
      };
      nature: {
        title: string;
        desc: string;
        badge: string;
        volume: string;
        muteAll: string;
        sounds: {
          rain: string;
          forest: string;
          waves: string;
          fireplace: string;
          night: string;
          wind: string;
        };
      };
      kittens: {
        title: string;
        desc: string;
        badge: string;
        anotherCat: string;
        loading: string;
        purr: string;
      };
      sublimation: {
        title: string;
        desc: string;
        badge: string;
        nextCard: string;
      };
    };
  };
  thoughtRelease: {
    badge: string;
    title: string;
    subtitle: string;
    placeholder: string;
    releaseButton: string;
    burning: string;
    releasedMessage: string;
    releaseAnother: string;
    privacyNote: string;
  };
  footer: {
    copyright: string;
    sanctuaryNotice: string;
    emergencyReminder: string;
    createdWithLove: string;
    privacyPolicy: string;
    terms: string;
    crisisDirectory: string;
    motivationHub: string;
    reportButton: string;
  };
  reportModal: {
    title: string;
    subtitle: string;
    categoryLabel: string;
    categoryOutdated: string;
    categoryOutdatedDesc: string;
    categoryFeedback: string;
    categoryFeedbackDesc: string;
    countryLabel: string;
    countryPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    optional: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    sending: string;
    cancel: string;
    successTitle: string;
    successDesc: string;
    close: string;
    openEmailApp: string;
    footerNotice: string;
  };
}
