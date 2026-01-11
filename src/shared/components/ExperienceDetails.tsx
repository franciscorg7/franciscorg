import { motion, type Variants } from 'framer-motion'
import { formatNewLines } from '../../utils/formatNewLines'

interface ExperienceKeyword {
  text: string
  shape: string
  className: string
}

export interface ExperienceItemDetails {
  id: string
  title: string
  role: string
  duration: string
  description?: string
  keywords?: ExperienceKeyword[]
}

interface ExperienceDetailsProps {
  details: ExperienceItemDetails | null
}

export const ExperienceDetails = ({ details }: ExperienceDetailsProps) => {
  if (!details) return null

  // Defines the orchestration (parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  // Defines the individual element motion (child)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-2 text-secondary-200"
    >
      <motion.span variants={itemVariants} className="block tracking-wide text-xl">
        <b>{details.title}</b> | {details.role}
      </motion.span>

      <motion.span variants={itemVariants} className="block text-lg">
        ({details.duration})
      </motion.span>

      {details.description && (
        <motion.span variants={itemVariants} className="block text-lg">
          {formatNewLines(details.description)}
        </motion.span>
      )}
    </motion.div>
  )
}
