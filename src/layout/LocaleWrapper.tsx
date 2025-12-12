import { useEffect } from 'react'
import { useParams, Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SUPPORTED_LOCALES = ['en', 'pt']
const DEFAULT_LOCALE = 'en'

export default function LocaleWrapper() {
  const { lang } = useParams() // capture the :lang param
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    // If locale is not supported or missing, redirect to default locale
    if (!lang || !SUPPORTED_LOCALES.includes(lang)) {
      navigate(`/${DEFAULT_LOCALE}`, { replace: true })
      return
    }

    // If locale is different from current locale, sync them
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n, navigate])

  return <Outlet />
}
