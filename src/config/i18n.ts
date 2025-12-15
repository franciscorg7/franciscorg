import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { RootTranslationKey } from './translation-keys'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    backend: {
      // {{lng}} will be replaced by 'en', 'pt', etc.
      // {{ns}} will be replaced by 'hero', 'projects', etc.
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: [
      RootTranslationKey.COMMON,
      RootTranslationKey.HERO,
      RootTranslationKey.ABOUT_ME,
      RootTranslationKey.WORK_EXP,
      RootTranslationKey.PROJECTS,
    ],
    defaultNS: RootTranslationKey.COMMON,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
