import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ar, de, en, es, fr} from './localization/index';
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr,
  },
  es: {
    translation: es,
  },
  de: {
    translation: de,
  },
};
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
