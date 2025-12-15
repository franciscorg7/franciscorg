import { AboutMeTranslationKey } from '../../config/translation-keys'
import type { CompetenceItem } from './types'

const CompetenceItemId = {
  FRONTEND: 'frontend',
  TEAM_MENTORING: 'team-mentoring',
  DELIVERY_OWNERSHIP: 'delivery-ownership',
} as const

export const competences: CompetenceItem[] = [
  {
    id: CompetenceItemId.FRONTEND,
    translationKey: AboutMeTranslationKey.COMPETENCES_FRONTEND,
    className: 'bg-blue-200 text-blue-800',
  },
  {
    id: CompetenceItemId.TEAM_MENTORING,
    translationKey: AboutMeTranslationKey.COMPETENCES_TEAM_MENTORING,
    className: 'bg-green-200 text-green-800',
  },
  {
    id: CompetenceItemId.DELIVERY_OWNERSHIP,
    translationKey: AboutMeTranslationKey.COMPETENCES_DELIVERY_OWNERSHIP,
    className: 'bg-yellow-200 text-yellow-800',
  },
]

export const NAME_LABEL = 'Francisco Gonçalves'
