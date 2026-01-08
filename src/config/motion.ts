import type { MotionProps } from 'framer-motion'

export const MotionElement = {
  PROJECTS_TITLE: 'projects-title',
  PROJECTS_WINDOW: 'projects-window',
} as const

export type MotionElementType = (typeof MotionElement)[keyof typeof MotionElement]

export const motionsConfig: Record<MotionElementType, MotionProps> = {
  [MotionElement.PROJECTS_TITLE]: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: false, amount: 0.3 },
    variants: {
      hidden: {
        opacity: 0.3,
        scale: 0.8,
        y: 20,
        transition: { duration: 2, ease: 'easeIn' },
      },
      visible: {
        opacity: 0.8,
        scale: 1,
        y: 0,
        transition: {
          duration: 2.5,
          ease: 'easeOut',
        },
      },
    },
  },
  [MotionElement.PROJECTS_WINDOW]: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: false, amount: 0.3 },
    variants: {
      hidden: { opacity: 0.3, scale: 0.9, transition: { duration: 2, ease: 'easeIn' } },
      visible: { opacity: 0.9, scale: 1, transition: { duration: 3.5, ease: 'easeOut' } },
    },
  },
}
