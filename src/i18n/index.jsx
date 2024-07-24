import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from './../language/en/translation.json';
import translationsInRomanian from './../language/ro/translation.json';
import translationsInRussian from './../language/ru/translation.json';

// the translations
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
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "ro", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "en", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;