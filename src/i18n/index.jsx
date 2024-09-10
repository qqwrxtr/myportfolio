import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationsInEng from './../language/en/translation.json';
import translationsInRomanian from './../language/ro/translation.json';
import translationsInRussian from './../language/ru/translation.json';

const resources = {
  en: {
    translation: translationsInEng,
  },
  ro: {
    translation: translationsInRomanian,
  },
  ru: {
    translation: translationsInRussian,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    ns: "translation",
    defaultNS: "translation",
  });

export default i18n;
