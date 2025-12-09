import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { TranslationKey } from './translation-keys'

const namespaces = Object.keys(TranslationKey)

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      allowMultiLoading: true,
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    },
    react: {
      useSuspense: false,
    },
    ns: namespaces,
    defaultNS: namespaces[0],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
