import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import type { AboutMeProps } from '../../types/about-me'
import profile from '../../assets/profile.jpg'
import { AboutMeTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { useTranslation } from 'react-i18next'

export const AboutMe = ({ id }: AboutMeProps) => {
  const { t } = useTranslation(RootTranslationKey.ABOUT_ME)

  return (
    <Section id={id} contentClass="bg-secondary-50 justify-between">
      <div className="flex grow h-full gap-4">
        <div className="flex flex-col flex-1">
          <span className="font-title text-primary-700 text-9xl">
            {t(AboutMeTranslationKey.TITLE)}
          </span>
          <span className="font-body text-xl pt-10">{t(AboutMeTranslationKey.DESCRIPTION)}</span>
        </div>
        <div className="flex flex-2 justify-center items-center">
          <img
            src={profile}
            alt="profile picture"
            className="grayscale rounded-full aspect-square object-cover h-200"
          />
        </div>
      </div>
      <PageFooter currentPage={2} position="bottom-0 right-0"></PageFooter>
    </Section>
  )
}
