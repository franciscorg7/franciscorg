import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import type { AboutMeProps } from '../../types/about-me'
import profile from '../../assets/profile.jpg'
import { AboutMeTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { useTranslation } from 'react-i18next'
import { CompetenceBlob } from './components/CompetenceBlob'
import { competences, NAME_LABEL } from './data'
import { Blob } from '../../shared/components/Blob'

export const AboutMe = ({ id }: AboutMeProps) => {
  const { t } = useTranslation(RootTranslationKey.ABOUT_ME)

  return (
    <Section id={id} contentClass="bg-secondary-50 justify-between">
      <div className="flex grow h-full gap-4">
        <div className="flex flex-col flex-1">
          <span className="font-title text-primary-700 text-9xl">
            {t(AboutMeTranslationKey.TITLE)}
          </span>
          <span className="font-body text-lg pt-10">{t(AboutMeTranslationKey.DESCRIPTION)}</span>
          <div className="flex gap-3 mt-8 flex-wrap">
            {competences.map(competence => (
              <CompetenceBlob
                key={competence.id}
                label={t(competence.translationKey)}
                className={competence.className}
              ></CompetenceBlob>
            ))}
          </div>
        </div>
        <div className="flex flex-2 justify-center items-center">
          <div className="relative w-fit">
            <Blob
              color="bg-accent-500"
              className="absolute z-10 bottom-8 right-4 w-fit h-fit py-12 px-8 text-white font-bold uppercase text-2xl"
            >
              {NAME_LABEL}
            </Blob>
            <img
              src={profile}
              alt="profile picture"
              className="grayscale rounded-full aspect-square object-cover h-200"
            />
          </div>
        </div>
      </div>
      <PageFooter currentPage={2} position="bottom-0 right-0"></PageFooter>
    </Section>
  )
}
