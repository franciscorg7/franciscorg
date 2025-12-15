import { EducationTranslationKey } from '../../config/translation-keys'
import type { ExperienceItem } from '../../shared/components/ExperienceList'

export const academicExperiences: ExperienceItem[] = [
  {
    id: 'degree',
    entity: EducationTranslationKey.DEGREE,
    year: '2020',
  },
  { id: 'masters', entity: EducationTranslationKey.MASTERS, year: '2022' },
]
