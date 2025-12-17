import { AboutMeTranslationKey } from '../../config/translation-keys'
import type { CompetenceItem } from './types'

const CompetenceItemId = {
  FRONTEND: 'frontend',
  TECH_STRATEGY: 'technical-strategy',
  DESIGN_SYSTEMS: 'design-systems',
  MENTORSHIP: 'mentorship-leadership',
  PRODUCT_DELIVERY: 'product-delivery',
  PROBLEM_SOLVING: 'problem-solving',
} as const

export const competences: CompetenceItem[] = [
  {
    id: CompetenceItemId.FRONTEND,
    translationKey: AboutMeTranslationKey.COMPETENCES_FRONTEND,
    className: 'bg-indigo-600 text-white',
  },
  {
    id: CompetenceItemId.DESIGN_SYSTEMS,
    translationKey: AboutMeTranslationKey.COMPETENCES_DESIGN_SYSTEMS,
    className: 'bg-fuchsia-600 text-white',
  },
  {
    id: CompetenceItemId.TECH_STRATEGY,
    translationKey: AboutMeTranslationKey.COMPETENCES_TECH_STRATEGY,
    className: 'bg-slate-600 text-white',
  },
  {
    id: CompetenceItemId.MENTORSHIP,
    translationKey: AboutMeTranslationKey.COMPETENCES_MENTORSHIP,
    className: 'bg-teal-600 text-white',
  },

  {
    id: CompetenceItemId.PRODUCT_DELIVERY,
    translationKey: AboutMeTranslationKey.COMPETENCES_PRODUCT_DELIVERY,
    className: 'bg-rose-600 text-white',
  },
  {
    id: CompetenceItemId.PROBLEM_SOLVING,
    translationKey: AboutMeTranslationKey.COMPETENCES_PROBLEM_SOLVING,
    className: 'bg-yellow-600 text-white',
  },
]

export const NAME_LABEL = 'Francisco Gonçalves'
