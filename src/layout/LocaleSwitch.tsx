import { faGlobeAmericas, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LanguageToggleProps {
  currentLocale: string
  onChange: (newLocale: string) => void
}

export const LocaleSwitcher = ({ currentLocale, onChange }: LanguageToggleProps) => {
  const isPortuguese = currentLocale == 'pt'

  const toggleLanguage = () => {
    const nextLocale = isPortuguese ? 'en' : 'pt'
    onChange(nextLocale)
  }

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="
        group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
        border border-gray-200 bg-white
        hover:bg-gray-50 hover:border-primary-300 hover:shadow-sm
        transition-all duration-300 ease-in-out
      "
    >
      <FontAwesomeIcon
        icon={isPortuguese ? faGlobeEurope : faGlobeAmericas}
        className={`text-xl transition-colors duration-300 ${isPortuguese ? 'text-green-600' : 'text-blue-600'}`}
      />
      <span className="font-bold text-sm text-gray-700 group-hover:text-primary-700">
        {isPortuguese ? 'PT' : 'EN'}
      </span>
    </button>
  )
}
