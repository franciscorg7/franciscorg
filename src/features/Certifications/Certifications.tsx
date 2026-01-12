import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { Section } from '../../layout/Section'
import { CertificationCard } from '../../shared/components/CertificationCard'

export const Certifications = () => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  // 1. Container Variants: Staggers the appearance of the children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card
        delayChildren: 0.2, // Initial delay before the first card starts
      },
    },
  }

  // 2. Card Variants: High-quality Spring physics
  const cardVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 70, // Lower stiffness for a "softer" feel
        damping: 15, // Prevents excessive bouncing
        mass: 1, // Physical weight of the element
      },
    },
  }

  return (
    <Section contentClass="py-20 flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-12 w-full max-w-5xl px-4 mx-auto">
        {/* Title: Simple fade and slight slide up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full text-center"
        >
          <h2 className="font-title text-7xl md:text-11xl text-primary-900 uppercase tracking-tighter leading-none">
            {t(EducationTranslationKey.CERTIFICATIONS_TITLE)}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the grid is visible
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          <CertificationCard
            variants={cardVariants}
            variantColor="blue"
            badge="C1"
            category="Language Proficiency"
            title="English C1"
            description="Cambridge Assessment English: Advanced (CAE)"
            tags={['Native-like', 'Academic Writing']}
          />

          <CertificationCard
            variants={cardVariants}
            variantColor="orange"
            badge={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            }
            category="Cloud Computing"
            title="AWS Cloud Practitioner"
            description="Foundational knowledge of AWS Cloud platform and infrastructure."
            tags={['Infrastructure', 'Serverless']}
          />
        </motion.div>
      </div>
    </Section>
  )
}
