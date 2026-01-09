import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { academicExperiences } from '../../features/Education/data'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { MotionElement, motionsConfig } from '../../config/motion'
import { Emerging } from '../../shared/motions/Emerging'
import { Section } from '../../layout/Section'
import { GlassCard } from '../../shared/components/GlassCard'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

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

  const containerRef = useRef(null)

  // Keep track of scroll progress within the Education section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // The title will move slightly up as we scroll down
  const yTitle = useTransform(scrollYProgress, [0, 1], [-50, 50])

  // The cards move up faster than the title, creating a separation gap
  const yCards = useTransform(scrollYProgress, [0, 1], [120, -120])

  // Smooth out the motion so it doesn't feel sitff
  const smoothYTitle = useSpring(yTitle, { stiffness: 100, damping: 30 })
  const smoothYCards = useSpring(yCards, { stiffness: 100, damping: 30 })

  return (
    <Section ref={containerRef} contentClass="section-2 py-20 flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-7xl px-4 mx-auto">
        <motion.div style={{ y: smoothYTitle }}>
          <Emerging
            {...titleMotion}
            className="p-10 md:p-16 flex items-center justify-center overflow-hidden w-full"
          >
            <h2 className="font-title text-7xl md:text-11xl text-white text-center uppercase tracking-tighter wrap-break-word leading-none w-full">
              {t(EducationTranslationKey.TITLE)}
            </h2>
          </Emerging>
        </motion.div>
        <motion.div
          style={{ y: smoothYCards }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
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
        </motion.div>
      </div>
    </Section>
  )
}
