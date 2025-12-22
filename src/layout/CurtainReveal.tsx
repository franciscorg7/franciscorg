import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Certifications } from '../features/Certifications/Certifications'
import { FadeUp } from '../shared/components/FadeUp'
import { ExperienceList } from '../shared/components/ExperienceList'
import { EducationTranslationKey, RootTranslationKey } from '../config/translation-keys'
import { academicExperiences } from '../features/Education/data'
import { useTranslation } from 'react-i18next'

export const CurtainReveal = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  // Create a smooth version (physics-based inertia) of scrollYProgress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  })

  const slide2X = useTransform(
    smoothScroll,
    [0, 0.01, 0.5, 0.99, 1],
    ['100%', '100%', '0%', '100%', '100%']
  )

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
              <div className="flex flex-1 items-center justify-center lg:flex"></div>
              <div className="flex flex-1 flex-col gap-12 justify-center">
                <span className="text-lg">{t(EducationTranslationKey.DESCRIPTION)}</span>
                <ExperienceList experiences={experiences} color="white"></ExperienceList>
              </div>
            </div>
          </div>
          <motion.div className="absolute h-full w-full px-12 pt-8 pb-24 flex flex-col items-center justify-center bg-primary-900 text-white z-10">
            <span className={`font-title mb-12 w-full text-right text-white text-12xl`}>
              <FadeUp delay={0.1}>{t(EducationTranslationKey.TITLE)}</FadeUp>
            </span>
            <div className="relative flex grow w-full gap-16 z-10">
              <div className="flex flex-1 items-center justify-center lg:flex"></div>
              <div className="flex flex-1 flex-col gap-12 justify-center">
                <span className="text-lg">{t(EducationTranslationKey.DESCRIPTION)}</span>
                <ExperienceList experiences={experiences} color="white"></ExperienceList>
              </div>
            </div>
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
