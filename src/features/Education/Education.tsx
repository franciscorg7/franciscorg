import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { academicExperiences } from '../../features/Education/data'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { MotionElement, motionsConfig } from '../../config/motion'
import { Emerging } from '../../shared/motions/Emerging'
import { Section } from '../../layout/Section'

export const Education = () => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  // Mapping experiences for translation
  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  // Reusing motion configs if they exist, otherwise fallback to defaults
  const titleMotion = motionsConfig[MotionElement.EDUCATION_TITLE]
  const textMotion = motionsConfig[MotionElement.EDUCATION_TEXT]

  return (
    <Section id="education" contentClass="section-2 py-20 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 mx-auto">
        <Emerging
          {...titleMotion}
          className="lg:col-span-1 glassy-card p-6 md:p-10 flex items-center justify-center lg:min-h-[600px] overflow-hidden"
        >
          <h2 className="font-title text-5xl md:text-7xl xl:text-8xl text-white text-center uppercase tracking-tighter wrap-break-word leading-none w-full">
            {t(EducationTranslationKey.TITLE)}
          </h2>
        </Emerging>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <Emerging {...textMotion} className="glassy-card p-8">
            <p className="font-body text-xl text-white/80 leading-relaxed">
              {t(EducationTranslationKey.DESCRIPTION)}
            </p>
          </Emerging>

          <Emerging className="glassy-card p-10 grow">
            <ExperienceList experiences={experiences} color="white/80" />
          </Emerging>
        </div>
      </div>
    </Section>
  )
}
