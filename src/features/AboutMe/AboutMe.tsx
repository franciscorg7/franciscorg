import { Section } from '../../layout/Section'
import profile from '../../assets/profile.jpg'
import { AboutMeTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { useTranslation } from 'react-i18next'
import { competences, NAME_LABEL } from './data'
import { MotionElement, motionsConfig } from '../../config/motion'
import { Emerging } from '../../shared/motions/Emerging'
import { SkillBadge } from '../../shared/components/SkillBadge'

interface AboutMeProps {
  id: string
}

export const AboutMe = ({ id }: AboutMeProps) => {
  const { t } = useTranslation(RootTranslationKey.ABOUT_ME)

  const titleMotionConfig = motionsConfig[MotionElement.ABOUT_ME_TITLE]
  const keywordsMotionConfig = motionsConfig[MotionElement.ABOUT_ME_KEYWORDS]
  const imgMotionConfig = motionsConfig[MotionElement.ABOUT_ME_IMAGE]

  return (
    <Section id={id} contentClass="section-1 py-20 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        <Emerging
          {...titleMotionConfig}
          className="glassy-card lg:col-span-2 p-10 flex flex-col justify-end min-h-[400px]"
        >
          <span className="font-title text-7xl md:text-9xl text-white mb-6">
            {t(AboutMeTranslationKey.TITLE)}
          </span>
          <span className="font-body text-lg text-white/70 max-w-xl">
            {t(AboutMeTranslationKey.DESCRIPTION)}
          </span>
        </Emerging>
        <Emerging
          {...imgMotionConfig}
          className="glassy-card lg:row-span-2 relative group overflow-hidden"
        >
          <img
            src={profile}
            alt="profile picture"
            className="grayscale w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 bg-white/60 px-6 py-3 rounded-lg shadow-xl">
            <span className="text-primary-950 font-bold uppercase tracking-widest text-sm">
              {NAME_LABEL}
            </span>
          </div>
        </Emerging>
        <Emerging {...keywordsMotionConfig} className="glassy-card lg:col-span-2 p-8">
          <div className="flex gap-3 flex-wrap">
            {competences.map(competence => (
              <SkillBadge key={competence.id} label={t(competence.translationKey)} />
            ))}
          </div>
        </Emerging>
      </div>
    </Section>
  )
}
