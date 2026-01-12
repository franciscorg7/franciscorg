import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { academicExperiences } from '../../features/Education/data'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { MotionElement, motionsConfig } from '../../config/motion'
import { Emerging } from '../../shared/motions/Emerging'
import { Section } from '../../layout/Section'
import { GlassCard } from '../../shared/components/GlassCard'
import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Drawer } from '../../shared/components/Drawer'
import { Certifications } from '../Certifications/Certifications'

export const Education = () => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
    <Section
      ref={containerRef}
      contentClass="section-2 py-20 flex justify-center items-center overflow-x-hidden"
    >
      <div className="flex flex-col gap-6 w-full max-w-7xl px-4 mx-auto">
        <motion.div style={{ y: smoothYTitle }} className="relative">
          <Emerging
            {...titleMotion}
            className="p-10 md:p-16 flex items-center justify-center overflow-hidden w-full"
          >
            <h2 className="font-title text-7xl md:text-11xl text-white text-center uppercase wrap-break-word w-full flex items-start justify-center">
              {t(EducationTranslationKey.TITLE)}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="group relative flex items-center h-16 w-16 hover:w-70 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer outline-none ml-2 mt-[-0.2em]"
                aria-label="Open Certifications"
              >
                <div className="absolute inset-0 bg-white/0 backdrop-blur-0 border border-white/0 rounded-full transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-xl group-hover:border-white/20 group-hover:shadow-2xl" />
                <div className="relative z-10 flex items-center justify-between w-full px-2 overflow-hidden">
                  <span className="font-title text-6xl md:text-8xl text-white/60 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    *
                  </span>
                  <div className="flex items-center gap-3 p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-x-10 group-hover:translate-x-0">
                    <span className="whitespace-nowrap font-body font-bold uppercase tracking-wide text-sm md:text-base text-white">
                      {t(EducationTranslationKey.VIEW_CERTIFICATIONS)}
                    </span>
                  </div>
                </div>
              </button>
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
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Certifications></Certifications>
      </Drawer>
    </Section>
  )
}
