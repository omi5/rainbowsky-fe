import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Define your translation interface
interface ITranslationResources {
  navbar: {
    home: string;
    about: string;
    contact: string;
    careers: string;
    gallery: string;
    login: string;
    signup: string;
    profile: string;
    logout: string;
  };
  // Add other namespaces as needed
}

// Import translations with type assertions
import enTranslations from "../public/locales/en/translation.json";
import bnTranslations from "../public/locales/bn/translation.json";
import arTranslations from "../public/locales/ar/translation.json";

const resources = {
  en: {
    translation: enTranslations as ITranslationResources,
  },
  bn: {
    translation: bnTranslations as ITranslationResources,
  },
  ar: {
    translation: arTranslations as ITranslationResources,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
