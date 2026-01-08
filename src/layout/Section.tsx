import { motion } from 'framer-motion'
import type { SectionProps } from '../types/layout'

export const Section = ({
  id,
  title,
  titleClass = 'text-9xl text-white',
  contentClass,
  style,
  motionProps,
  children,
}: SectionProps) => {
  const { initial, whileInView, viewport, variants, className } = { ...motionProps }

  return (
    <section
      key={id}
      className={`relative font-body min-h-screen flex flex-col px-12 pt-8 pb-24 ${contentClass}`}
      style={style}
    >
      {title && (
        <span className={`font-title mb-12 z-20 ${titleClass}`}>
          {motionProps ? (
            <motion.div
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              variants={variants}
              className={className}
            >
              {title}
            </motion.div>
          ) : (
            title
          )}
        </span>
      )}

      {children}
    </section>
  )
}
