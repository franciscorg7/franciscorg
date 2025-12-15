export const RootTranslationKey = {
  COMMON: 'common',
  HERO: 'hero',
  ABOUT_ME: 'about-me',
  WORK_EXP: 'work-exp',
  SKILLS: 'skills',
  EDUCATION: 'education',
  PROJECTS: 'projects',
} as const

export const HeroTranslationKey = {
  LOGO: 'logo',
  TITLE: 'title',
} as const

export const AboutMeTranslationKey = {
  TITLE: 'title',
  DESCRIPTION: 'description',
} as const

export const WorkExperienceTranslationKey = {
  TITLE: 'title',

  // Experience list
  VETBIZZ: 'vetbizz',
  VETBIZZ_DURATION: 'vetbizz.duration',
  VETBIZZ_DESCRIPTION: 'vetbizz.description',

  OPTIONQ: 'optionq',
  OPTIONQ_DURATION: 'optionq.duration',
  OPTIONQ_DESCRIPTION: 'optionq.description',

  INOVA: 'inova',
  INOVA_DURATION: 'inova.duration',
  INOVA_DESCRIPTION: 'inova.description',

  DEVOTEAM: 'devoteam',
  DEVOTEAM_DURATION: 'devoteam.duration',
  DEVOTEAM_DESCRIPTION: 'devoteam.description',

  THELOOP: 'theloop',
  THELOOP_DURATION: 'theloop.duration',
  THELOOP_DESCRIPTION: 'theloop.description',
} as const

export const SkillsTranslationKey = {
  TITLE: 'title',
  FRONTEND: 'frontend',
  FRONTEND_ANGULAR: 'frontend.angular',
  FRONTEND_REACT: 'frontend.react',
  FRONTEND_STATE_MANAGEMENT: 'frontend.state_management',

  TOOLING_BUILD: 'tooling_build',
  ARCHITECTURE: 'architecture',
  TESTING_QA: 'testing_qa',
  DEVOPS: 'devops',
  MANAGEMENT: 'management',
} as const

export const EducationTranslationKey = {
  TITLE: 'title',
  DEGREE: 'degree',
  MASTERS: 'masters',
} as const

export const ProjectsTranslationKey = {
  TITLE: 'title',

  // Project details
  DETAILS: 'details',
  DETAILS_BACK: 'details.back',
  DETAILS_STACK: 'details.stack',

  // Project data
  PROJECT: 'project',
  PROJECT_BIOMA_DESCRIPTION: 'project.bioma.description',
  PROJECT_POS_DESCRIPTION: 'project.pos.description',
  PROJECT_PEMP_DESCRIPTION: 'project.pemp.description',
} as const
