import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { academicExperiences } from '../../features/Education/data'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { FadeUp } from '../../shared/components/FadeUp'
import fcup from '../../assets/fcup.png'

export const Education = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const imgX = useTransform(scrollYProgress, [0, 0.25], [-800, 0])

  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  return (
    <div className="absolute h-full w-full px-12 pt-8 pb-24 flex flex-col items-center justify-center bg-primary-900 text-white z-0">
      <span className={`font-title mb-12 w-full text-right text-white text-12xl`}>
        <FadeUp delay={0.1}>{t(EducationTranslationKey.TITLE)}</FadeUp>
      </span>
      <div className="relative flex grow w-full gap-16 z-10">
        <div className="flex flex-1 items-center justify-center lg:flex">
          <motion.img
            src={fcup}
            alt="Education illustration"
            className="w-full max-w-lg object-cover rounded-3xl shadow-xl"
            style={{ x: imgX }}
          />
        </div>
        <div className="flex flex-1 flex-col gap-12 justify-center">
          <span className="text-lg">{t(EducationTranslationKey.DESCRIPTION)}</span>
          <ExperienceList experiences={experiences} color="white"></ExperienceList>
        </div>
      </div>
    </div>
  )
}
