import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { academicExperiences } from '../../features/Education/data'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { MotionElement, motionsConfig } from '../../config/motion'
import { Emerging } from '../../shared/motions/Emerging'
import { Section } from '../../layout/Section'
import { GlassCard } from '../../shared/components/GlassCard'

export const Education = () => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  // Mapping experiences for translation
  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  // Motion configurations for each subsection
  const titleMotion = motionsConfig[MotionElement.EDUCATION_TITLE]
  const textMotion = motionsConfig[MotionElement.EDUCATION_TEXT]
  const listMotion = motionsConfig[MotionElement.EDUCATION_LIST]

  return (
    <Section id="education" contentClass="section-2 py-20 flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-7xl px-4 mx-auto">
        <Emerging
          {...titleMotion}
          className="p-10 md:p-16 flex items-center justify-center overflow-hidden w-full"
        >
          <h2 className="font-title text-7xl md:text-11xl text-white text-center uppercase tracking-tighter wrap-break-word leading-none w-full">
            {t(EducationTranslationKey.TITLE)}
          </h2>
        </Emerging>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <Emerging {...textMotion} className="lg:col-span-2">
            <GlassCard className="p-8 flex flex-col justify-center h-full">
              <p className="font-body text-xl text-white/80 leading-relaxed">
                {t(EducationTranslationKey.DESCRIPTION)}
              </p>
            </GlassCard>
          </Emerging>

          <Emerging {...listMotion} className="lg:col-span-1">
            <GlassCard className="p-10 h-full">
              <ExperienceList experiences={experiences} color="white/80" />
            </GlassCard>
          </Emerging>
        </div>
      </div>
    </Section>
  )
}
