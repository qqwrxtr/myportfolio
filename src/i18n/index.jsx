import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from './../language/en/translation.json';
import translationsInRomanian from './../language/ro/translation.json';
import translationsInRussian from './../language/ru/translation.json';

const resources = {
  en: {
    translation: translationsInEng
  },
  ro: {
    translation: translationsInRomanian
  },
  ru: {
    translation: translationsInRussian
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ro",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;