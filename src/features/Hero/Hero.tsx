import type { HeroProps } from '../../types/hero'
import { Section } from '../../layout/Section'
import { Navbar } from '../../layout/Navbar'
import { PORTFOLIO_LABEL } from '../../data/hero'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../config/translation-keys'

export const Hero = ({ id }: HeroProps) => {
  const { t } = useTranslation(TranslationKey.HERO)
  return (
    <Section id={id} contentClass="bg-primary-600 h-screen flex flex-col justify-between">
      <Navbar
        logoText={t(TranslationKey.HERO_LOGO)}
        month={new Date().getMonth()}
        year={new Date().getFullYear()}
      />
      {/* <img src={profile} alt="profile picture" className="grayscale shadow-lg" /> */}
      <div className="flex justify-center items-center flex-grow">
        <span className="font-title text-white text-9xl">{t(TranslationKey.HERO_TITLE)}</span>
      </div>
    </Section>
  )
}
