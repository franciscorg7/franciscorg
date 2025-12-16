import { blobShapes } from '../../config/blob-shape'
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
    keywords: [
      { text: 'php', shape: blobShapes.B, className: 'bg-indigo-200 text-indigo-800' },
      { text: 'jQuery', shape: blobShapes.C, className: 'bg-green-200 text-green-800' },
      { text: 'automation', shape: blobShapes.D, className: 'bg-cyan-200 text-cyan-800' },
    ],
  },
  {
    id: ExperienceItemId.OPTIONQ,
    title: ExperienceItemTitle.OPTIONQ,
    role: 'Frontend Developer',
    duration: WorkExperienceTranslationKey.OPTIONQ_DURATION,
    description: WorkExperienceTranslationKey.OPTIONQ_DESCRIPTION,
    keywords: [
      { text: 'react', shape: blobShapes.E, className: 'bg-cyan-200 text-cyan-800' },
      { text: 'ui/ux', shape: blobShapes.F, className: 'bg-emerald-200 text-emerald-800' },
      { text: 'agile', shape: blobShapes.A, className: 'bg-gray-200 text-gray-800' },
      { text: 'figma', shape: blobShapes.B, className: 'bg-pink-200 text-pink-800' },
    ],
  },
  {
    id: ExperienceItemId.INOVA,
    title: ExperienceItemTitle.INOVA,
    role: 'Full Stack Developer',
    duration: WorkExperienceTranslationKey.INOVA_DURATION,
    description: WorkExperienceTranslationKey.INOVA_DESCRIPTION,
    keywords: [
      { text: 'fullstack', shape: blobShapes.C, className: 'bg-gray-200 text-gray-800' },
      { text: 'angular', shape: blobShapes.D, className: 'bg-red-200 text-red-800' },
      { text: 'nodeJS', shape: blobShapes.E, className: 'bg-green-200 text-green-800' },
      { text: 'smart-cities', shape: blobShapes.F, className: 'bg-yellow-200 text-yellow-800' },
    ],
  },
  {
    id: ExperienceItemId.DEVOTEAM,
    title: ExperienceItemTitle.DEVOTEAM,
    role: 'Software Engineer',
    duration: WorkExperienceTranslationKey.DEVOTEAM_DURATION,
    description: WorkExperienceTranslationKey.DEVOTEAM_DESCRIPTION,
    keywords: [
      { text: 'cloud', shape: blobShapes.A, className: 'bg-violet-200 text-violet-800' },
      { text: 'aws', shape: blobShapes.B, className: 'bg-orange-200 text-orange-800' },
      { text: 'angular', shape: blobShapes.C, className: 'bg-red-200 text-red-800' },
    ],
  },
  {
    id: ExperienceItemId.THELOOP,
    title: ExperienceItemTitle.THELOOP,
    role: 'Lead Developer',
    duration: WorkExperienceTranslationKey.THELOOP_DURATION,
    description: WorkExperienceTranslationKey.THELOOP_DESCRIPTION,
    keywords: [
      { text: 'fintech', shape: blobShapes.E, className: 'bg-yellow-200 text-yellow-800' },
      { text: 'tech lead', shape: blobShapes.F, className: 'bg-zinc-200 text-zinc-800' },
      { text: 'google cloud', shape: blobShapes.A, className: 'bg-green-200 text-green-800' },
      { text: 'devops', shape: blobShapes.B, className: 'bg-purple-200 text-purple-800' },
      { text: 'angular', shape: blobShapes.C, className: 'bg-red-200 text-red-800' },
    ],
  },
]
