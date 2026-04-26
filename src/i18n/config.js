import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import Arabic
import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';
import arAbout from './locales/ar/about.json';
import arProjects from './locales/ar/projects.json';

// Import English
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enProjects from './locales/en/projects.json';

// Import German
import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';
import deAbout from './locales/de/about.json';
import deProjects from './locales/de/projects.json';

// Import French
import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frAbout from './locales/fr/about.json';
import frProjects from './locales/fr/projects.json';

// Import Spanish
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esAbout from './locales/es/about.json';
import esProjects from './locales/es/projects.json';

// Import Indonesian
import idCommon from './locales/id/common.json';
import idHome from './locales/id/home.json';
import idAbout from './locales/id/about.json';
import idProjects from './locales/id/projects.json';

const resources = {
  ar: {
    common: arCommon,
    home: arHome,
    about: arAbout,
    projects: arProjects
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    projects: enProjects
  },
  de: {
    common: deCommon,
    home: deHome,
    about: deAbout,
    projects: deProjects
  },
  fr: {
    common: frCommon,
    home: frHome,
    about: frAbout,
    projects: frProjects
  },
  es: {
    common: esCommon,
    home: esHome,
    about: esAbout,
    projects: esProjects
  },
  id: {
    common: idCommon,
    home: idHome,
    about: idAbout,
    projects: idProjects
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'ar',
    ns: ['common', 'home', 'about', 'projects'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
