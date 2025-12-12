import { useTranslation } from 'react-i18next'
import { MonthYearDisplay } from '../shared/components/MonthYear'
import type { NavbarProps } from '../types/hero'
import { LocaleSwitcher } from './LocaleSwitch'

export const Navbar = ({ logoText, month, year }: NavbarProps) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const handleLocaleChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale)
  }

  return (
    <nav className="flex justify-between items-center w-full">
      <div className="text-white text-xl font-bold">{logoText}</div>
      <MonthYearDisplay
        className="text-white text-md opacity-75"
        month={month}
        year={year}
      ></MonthYearDisplay>
      <LocaleSwitcher currentLocale={currentLang} onChange={handleLocaleChange}></LocaleSwitcher>
    </nav>
  )
}
