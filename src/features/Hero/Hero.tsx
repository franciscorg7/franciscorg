import type { HeroProps } from '../../types/hero'
import { Section } from '../../layout/Section'
import { Navbar } from '../../layout/Navbar'
import { useTranslation } from 'react-i18next'
import { HeroTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import waves from '../../assets/waves-blue.svg'

export const Hero = ({ id }: HeroProps) => {
  const { t } = useTranslation(RootTranslationKey.HERO)
  return (
    <Section id={id} contentClass="relative bg-primary-600 h-screen flex flex-col justify-between">
      <img src={waves} className="absolute inset-0 w-full h-full object-cover z-10" alt="waves" />
      <Navbar
        logoText={t(HeroTranslationKey.LOGO)}
        month={new Date().getMonth()}
        year={new Date().getFullYear()}
      />
      <div className="relative flex justify-left items-end grow z-10">
        <span className="font-title text-white text-12xl w-1/2">{t(HeroTranslationKey.TITLE)}</span>
      </div>
    </Section>
  )
}
