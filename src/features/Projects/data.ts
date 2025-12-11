import { ProjectsTranslationKey } from '../../config/translation-keys'
import { ProjectStack, type ProjectType } from './types'

export const PROJECTS_TITLE = 'PROJECTS'
export const PROJECTS_WINDOW_TITLE = 'projects'

export const projects: ProjectType[] = [
  {
    id: 'pop',
    title: 'Private Banking',
    description: 'Internal module for operations mangamenet within contracting system.',
    company: 'Santander',
    stack: [ProjectStack.ANGULAR],
    date: 'apr 2025 - dez 2025',
  },
  {
    id: 'pemp',
    title: 'PEMP',
    description: ProjectsTranslationKey.PROJECTS_PROJECT_PEMP_DESCRIPTION,
    company: 'Caixa Geral de Depósitos',
    stack: [ProjectStack.ANGULAR],
    date: 'apr 2023 - fev 2025',
  },
  {
    id: 'pos',
    title: 'Point of Sale',
    description: ProjectsTranslationKey.PROJECTS_PROJECT_POS_DESCRIPTION,
    company: 'Ticketline',
    stack: [ProjectStack.REACT],
    date: 'apr 2025 - dez 2025',
  },
  {
    id: 'scdt',
    title: 'SCDT',
    description: 'Internal module for operations mangamenet within contracting system',
    company: 'Theia Technologies',
    stack: [ProjectStack.ANGULAR, ProjectStack.NODEJS, ProjectStack.DOCKER],
    date: 'apr 2025 - dez 2025',
  },
  {
    id: 'bioma',
    title: 'BIOMA',
    description: ProjectsTranslationKey.PROJECTS_PROJECT_BIOMA_DESCRIPTION,
    company: 'Inova+',
    stack: [ProjectStack.ANGULAR, ProjectStack.NODEJS],
    date: 'apr 2025 - dez 2025',
  },
  {
    id: 'city-catalyst',
    title: 'City Catalyst',
    description: 'Internal module for operations mangamenet within contracting system',
    company: 'Inova+',
    stack: [ProjectStack.ANGULAR, ProjectStack.NODEJS],
    date: 'apr 2025 - dez 2025',
  },
]
