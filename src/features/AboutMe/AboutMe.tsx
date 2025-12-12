import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import type { AboutMeProps } from '../../types/about-me'
import profile from '../../assets/profile.jpg'
import { AboutMeTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { useTranslation } from 'react-i18next'

export const AboutMe = ({ id }: AboutMeProps) => {
  const { t } = useTranslation(RootTranslationKey.ABOUT_ME)

  return (
    <Section
      id={id}
      title={t(AboutMeTranslationKey.TITLE)}
      contentClass="bg-secondary-100 justify-between"
    >
      <div className="flex grow h-full">
        <div className="flex flex-1 justify-center">
          <span className="pt-12">{t(AboutMeTranslationKey.DESCRIPTION)}</span>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src={profile}
            alt="profile picture"
            className="grayscale rounded-full aspect-square object-cover h-120"
          />
        </div>
      </div>
      <PageFooter currentPage={2}></PageFooter>
    </Section>
  )
}
