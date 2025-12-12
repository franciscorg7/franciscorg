import type { HeroProps } from '../../types/hero'
import { Section } from '../../layout/Section'
import { Navbar } from '../../layout/Navbar'
import { useTranslation } from 'react-i18next'
import { HeroTranslationKey, RootTranslationKey } from '../../config/translation-keys'

export const Hero = ({ id }: HeroProps) => {
  const { t } = useTranslation(RootTranslationKey.HERO)
  return (
    <Section id={id} contentClass="bg-primary-600 h-screen flex flex-col justify-between">
      <Navbar
        logoText={t(HeroTranslationKey.LOGO)}
        month={new Date().getMonth()}
        year={new Date().getFullYear()}
      />
      <div className="flex justify-left items-end grow">
        <span className="font-title text-white text-12xl w-1/2">{t(HeroTranslationKey.TITLE)}</span>
      </div>
    </Section>
  )
}
