import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { WorkExperience } from '../features/WorkExperience/WorkExperience'
import { Certifications } from '../features/Certifications/Certifications'
import { FadeUp } from '../shared/components/FadeUp'
import { ExperienceList } from '../shared/components/ExperienceList'
import { EducationTranslationKey, RootTranslationKey } from '../config/translation-keys'
import fcup from '../assets/fcup.png'
import { academicExperiences } from '../features/Education/data'
import { useTranslation } from 'react-i18next'

export const CurtainReveal = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation(RootTranslationKey.EDUCATION)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const imgX = useTransform(scrollYProgress, [0, 0.25], [-800, 0])

  const slide2X = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9], ['100%', '0%', '0%', '100%'])
  const slide3Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])

  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  return (
    <section>
      <div ref={targetRef} className="relative h-[450vh] bg-neutral-900 font-body">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
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
          <motion.div
            style={{ opacity: slide3Opacity }}
            className="absolute inset-0 h-full w-full px-12 pt-8 pb-24 flex flex-col items-center justify-center bg-primary-900 text-white z-10"
          >
            <WorkExperience></WorkExperience>
          </motion.div>
          <motion.div
            style={{ x: slide2X }}
            className="absolute inset-0 h-full w-full px-12 pt-8 pb-24 flex flex-col items-center justify-center bg-white text-primary-900 z-20 shadow-2xl"
          >
            <Certifications></Certifications>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
