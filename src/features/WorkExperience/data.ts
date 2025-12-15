import { WorkExperienceTranslationKey } from '../../config/translation-keys'
import type { ExperienceItemDetails } from '../../shared/components/ExperienceDetails'
import type { ExperienceItem } from '../../shared/components/ExperienceList'

const ExperienceItemId = {
  VETBIZZ: 'vetbizz',
  OPTIONQ: 'optionq',
  INOVA: 'inova',
  DEVOTEAM: 'devoteam',
  THELOOP: 'theloop',
} as const

const ExperienceItemTitle = {
  VETBIZZ: 'VETBIZZ CONSULTING',
  OPTIONQ: 'OPTIONQ',
  INOVA: 'INOVA+',
  DEVOTEAM: 'DEVOTEAM',
  THELOOP: 'THELOOP CO.',
} as const

export const experiences: ExperienceItem[] = [
  {
    id: ExperienceItemId.VETBIZZ,
    entity: ExperienceItemTitle.VETBIZZ,
    entityUrl: 'https://vetbizz.pt/',
    year: '2019',
  },
  {
    id: ExperienceItemId.OPTIONQ,
    entity: ExperienceItemTitle.OPTIONQ,
    entityUrl: 'https://optionq.pt/',
    year: '2020',
  },
  {
    id: ExperienceItemId.INOVA,
    entity: ExperienceItemTitle.INOVA,
    entityUrl: 'https://inova.business/',
    year: '2021',
  },
  {
    id: ExperienceItemId.DEVOTEAM,
    entity: ExperienceItemTitle.DEVOTEAM,
    entityUrl: 'https://www.devoteam.com/',
    year: '2022',
  },
  {
    id: ExperienceItemId.THELOOP,
    entity: ExperienceItemTitle.THELOOP,
    entityUrl: 'https://www.theloop.pt/',
    year: new Date().getFullYear().toString(),
  },
]

export const experienceDetails: ExperienceItemDetails[] = [
  {
    id: ExperienceItemId.VETBIZZ,
    title: ExperienceItemTitle.VETBIZZ,
    role: 'Software Engineer',
    duration: WorkExperienceTranslationKey.VETBIZZ_DURATION,
    description: WorkExperienceTranslationKey.VETBIZZ_DESCRIPTION,
  },
  {
    id: ExperienceItemId.OPTIONQ,
    title: ExperienceItemTitle.OPTIONQ,
    role: 'Frontend Developer',
    duration: WorkExperienceTranslationKey.OPTIONQ_DURATION,
    description: WorkExperienceTranslationKey.OPTIONQ_DESCRIPTION,
  },
  {
    id: ExperienceItemId.INOVA,
    title: ExperienceItemTitle.INOVA,
    role: 'Full Stack Developer',
    duration: WorkExperienceTranslationKey.INOVA_DURATION,
    description: WorkExperienceTranslationKey.INOVA_DESCRIPTION,
  },
  {
    id: ExperienceItemId.DEVOTEAM,
    title: ExperienceItemTitle.DEVOTEAM,
    role: 'Senior Software Engineer',
    duration: WorkExperienceTranslationKey.DEVOTEAM_DURATION,
    description: WorkExperienceTranslationKey.DEVOTEAM_DESCRIPTION,
  },
  {
    id: ExperienceItemId.THELOOP,
    title: ExperienceItemTitle.THELOOP,
    role: 'Lead Developer',
    duration: WorkExperienceTranslationKey.THELOOP_DURATION,
    description: WorkExperienceTranslationKey.THELOOP_DESCRIPTION,
  },
]
