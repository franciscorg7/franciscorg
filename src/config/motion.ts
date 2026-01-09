import type { MotionProps } from 'framer-motion'

export const MotionElement = {
  ABOUT_ME_TITLE: 'about-me-title',
  ABOUT_ME_TEXT: 'about-me-text',
  ABOUT_ME_KEYWORDS: 'about-me-keywords',
  ABOUT_ME_IMAGE: 'about-me-image',

  EDUCATION_TITLE: 'education-title',
  EDUCATION_TEXT: 'education-text',
  EDUCATION_LIST: 'education-list',

  WORK_EXPERIENCE_TITLE: 'work-experience-title',
  WORK_EXPERIENCE_LIST: 'work-experience-list',
  WORK_EXPERIENCE_TEXT: 'work-experience-text',

  PROJECTS_TITLE: 'projects-title',
  PROJECTS_WINDOW: 'projects-window',
} as const

export type MotionElementType = (typeof MotionElement)[keyof typeof MotionElement]

export const motionsConfig: Record<MotionElementType, MotionProps> = {
  [MotionElement.ABOUT_ME_TITLE]: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: false, amount: 0.3 },
    variants: {
      hidden: {
        opacity: 0.3,
        scale: 0.9,
        y: 20,
        transition: { duration: 0.5, ease: 'easeIn' },
      },
      visible: {
        opacity: 0.8,
        scale: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      },
    },
  },
  [MotionElement.ABOUT_ME_TEXT]: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: false, amount: 0.4 },
    variants: {
      hidden: {
        opacity: 0.3,
        scale: 0.9,
        y: 20,
        transition: { duration: 1, ease: 'easeIn' },
      },
      visible: {
        opacity: 0.8,
        scale: 1,
        y: 0,
        transition: {
          duration: 1.5,
          ease: 'easeOut',
        },
      },
    },
  },
  [MotionElement.ABOUT_ME_KEYWORDS]: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: false, amount: 0.4 },
    variants: {
      hidden: {
        opacity: 0.3,
        scale: 0.9,
        y: 20,
        transition: { duration: 1, ease: 'easeIn' },
      },
      visible: {
        opacity: 0.8,
        scale: 1,
        y: 0,
        transition: {
          duration: 1.5,
          ease: 'easeOut',
        },
      },
    },
  },
  [MotionElement.ABOUT_ME_IMAGE]: {
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
  [MotionElement.EDUCATION_TITLE]: {
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
  [MotionElement.EDUCATION_TEXT]: {
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
  [MotionElement.EDUCATION_LIST]: {
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
  [MotionElement.WORK_EXPERIENCE_TITLE]: {
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
  [MotionElement.WORK_EXPERIENCE_TEXT]: {
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
  [MotionElement.WORK_EXPERIENCE_LIST]: {
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
