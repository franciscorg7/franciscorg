import { useTranslation } from 'react-i18next'
import { RootTranslationKey, WorkExperienceTranslationKey } from '../../config/translation-keys'
import { Section } from '../../layout/Section'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { experienceDetails, experiences } from './data'
import {
  ExperienceDetails,
  type ExperienceItemDetails,
} from '../../shared/components/ExperienceDetails'
import { useWorkExperience } from './context'
import { useEffect, useMemo, useRef } from 'react'
import { Chip } from '../../shared/components/Chip'
import { Emerging } from '../../shared/motions/Emerging'
import { GlassCard } from '../../shared/components/GlassCard'
import { MotionElement, motionsConfig } from '../../config/motion'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'

export const WorkExperience = () => {
  const { t } = useTranslation(RootTranslationKey.WORK_EXP)
  const { selectedExperienceId, setSelectedExperience } = useWorkExperience()

  useEffect(() => {
    // Set initial selected experience
    if (!selectedExperienceId && experiences.length > 0) {
      setSelectedExperience(experiences[0].id)
    }
  }, [selectedExperienceId, setSelectedExperience])

  const translatedDetails = useMemo(
    () =>
      experienceDetails.map(detail => ({
        ...detail,
        title: t(detail.title),
        duration: t(detail.duration),
        description: detail.description ? t(detail.description) : null,
      })) as ExperienceItemDetails[],
    [t]
  )

  const details = translatedDetails.find(d => d.id === selectedExperienceId) || null

  /**
   * Handles the selection of an experience by setting the id into state.
   *
   * @param id - the selected experience id.
   */
  const handleSelectExperience = (id: string) => {
    setSelectedExperience(id)
  }

  // Motion configurations for each subsection
  const titleMotion = motionsConfig[MotionElement.WORK_EXPERIENCE_TITLE]
  const textMotion = motionsConfig[MotionElement.WORK_EXPERIENCE_TEXT]
  const listMotion = motionsConfig[MotionElement.WORK_EXPERIENCE_LIST]

  const containerRef = useRef(null)

  // Keep track of scroll progress within the Work Experience section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Title moves down (background layer feel)
  const yTitle = useTransform(scrollYProgress, [0, 1], [-80, 80])

  // Cards move up (foreground layer feel)
  const yCards = useTransform(scrollYProgress, [0, 1], [120, -120])

  // Smooth out the motion so it doesn't feel sitff
  const smoothYTitle = useSpring(yTitle, { stiffness: 100, damping: 30 })
  const smoothYCards = useSpring(yCards, { stiffness: 100, damping: 30 })

  return (
    <Section
      ref={containerRef}
      contentClass="section-3 py-48 md:py-64 flex flex-col justify-center overflow-hidden"
    >
      <div className="flex flex-col gap-6 w-full max-w-7xl px-4 mx-auto">
        <motion.div style={{ y: smoothYTitle }}>
          <Emerging
            {...titleMotion}
            className="w-full p-10 md:p-16 flex items-center justify-center overflow-hidden"
          >
            <h2 className="font-title text-7xl md:text-11xl text-secondary-200 text-center uppercase tracking-tighter wrap-break-word leading-none">
              {t(WorkExperienceTranslationKey.TITLE)}
            </h2>
          </Emerging>
        </motion.div>
        <motion.div
          style={{ y: smoothYCards }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          <Emerging {...listMotion}>
            <GlassCard className="p-8 flex flex-1 flex-col h-full">
              <ExperienceList
                experiences={experiences}
                selectedExperience={selectedExperienceId}
                onSelectExperience={handleSelectExperience}
                color="secondary"
                hover
              />
            </GlassCard>
          </Emerging>
          <Emerging {...textMotion}>
            <GlassCard className="p-10 flex flex-col h-full min-h-[400px] overflow-hidden">
              <motion.div
                layout
                transition={{
                  layout: { type: 'spring', stiffness: 200, damping: 30 },
                }}
                className="flex flex-col h-full"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedExperienceId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExperienceDetails details={details} />
                    <motion.div layout className="flex flex-wrap gap-2 mt-auto pt-8">
                      {details?.keywords?.map((keyword, idx) => (
                        <motion.div
                          key={`${selectedExperienceId}-${idx}`}
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: idx * 0.15,
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                          }}
                        >
                          <Chip className={keyword.className} label={keyword.text} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </GlassCard>
          </Emerging>
        </motion.div>
      </div>
    </Section>
  )
}
