export const RootTranslationKey = {
  COMMON: 'common',
  HERO: 'hero',
  ABOUTME: 'aboutMe',
  PROJECTS: 'projects',
} as const

export const HeroTranslationKey = {
  LOGO: 'logo',
  TITLE: 'title',
} as const

export const ProjectsTranslationKey = {
  TITLE: 'title',
  // Project details
  DETAILS: 'details',
  DETAILS_BACK: 'details.back',
  DETAILS_STACK: 'details.stack',

  // Project data
  PROJECTS_PROJECT: 'project',
  PROJECTS_PROJECT_BIOMA_DESCRIPTION: 'project.bioma.description',
  PROJECTS_PROJECT_POS_DESCRIPTION: 'project.pos.description',
  PROJECTS_PROJECT_PEMP_DESCRIPTION: 'project.pemp.description',
} as const
