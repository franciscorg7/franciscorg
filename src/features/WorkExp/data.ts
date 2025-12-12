import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'THELOOP CO.',
    companyUrl: 'https://www.theloop.pt/',
    year: new Date().getFullYear().toString(),
  },
  { id: 2, company: 'DEVOTEAM', companyUrl: 'https://www.devoteam.com/', year: '2022' },
  { id: 3, company: 'INOVA+', companyUrl: 'https://inova.business/', year: '2021' },
  { id: 4, company: 'OPTIONQ', companyUrl: 'https://optionq.pt/', year: '2020' },
  { id: 5, company: 'VETBIZZ CONSULTING', companyUrl: 'https://vetbizz.pt/', year: '2019' },
]
