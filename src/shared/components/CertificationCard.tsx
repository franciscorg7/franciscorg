import { motion, type Variants } from 'framer-motion'
import { GlassCard } from '../../shared/components/GlassCard'
import type { ReactNode } from 'react'

interface CertificationCardProps {
  badge: ReactNode
  category: string
  title: string
  description: string
  tags: string[]
  variantColor: 'blue' | 'orange'
  variants?: Variants
}

export const CertificationCard = ({
  badge,
  category,
  title,
  description,
  tags,
  variantColor,
  variants,
}: CertificationCardProps) => {
  const styles = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-100/50',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      tagBg: 'bg-blue-50',
      tagText: 'text-blue-700',
    },
    orange: {
      border: 'border-orange-500',
      bg: 'bg-orange-100/50',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-600',
      tagBg: 'bg-orange-50',
      tagText: 'text-orange-700',
    },
  }[variantColor]

  return (
    <motion.div variants={variants} className="h-full">
      <GlassCard className={`p-10 flex flex-col h-full border-t-4 ${styles.bg} ${styles.border}`}>
        <div className="flex justify-between items-start mb-6">
          <div
            className={`p-3 ${styles.badgeBg} ${styles.badgeText} rounded-xl font-bold text-2xl`}
          >
            {badge}
          </div>
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
            {category}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-primary-900 mb-2">{title}</h3>
        <p className="text-primary-600 mb-8">{description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className={`px-3 py-1 ${styles.tagBg} ${styles.tagText} rounded-full text-sm font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}
