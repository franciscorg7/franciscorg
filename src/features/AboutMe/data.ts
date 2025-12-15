import { AboutMeTranslationKey } from '../../config/translation-keys'
import type { CompetenceItem } from './types'

export const competences: CompetenceItem[] = [
  {
    id: 'frontend',
    translationKey: AboutMeTranslationKey.COMPETENCES_FRONTEND,
    className: 'bg-blue-200 text-blue-800',
  },
  {
    id: 'team-mentoring',
    translationKey: AboutMeTranslationKey.COMPETENCES_TEAM_MENTORING,
    className: 'bg-green-200 text-green-800',
  },
  {
    id: 'delivery-ownership',
    translationKey: AboutMeTranslationKey.COMPETENCES_DELIVERY_OWNERSHIP,
    className: 'bg-yellow-200 text-yellow-800',
  },
]
