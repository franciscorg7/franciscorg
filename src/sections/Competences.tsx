import { PageFooter } from '../components/layout/PageFooter'
import { Section } from '../components/layout/Section'
import { COMPETENCES_TITLE } from '../data/competences'
import type { CompetencesProps } from '../types/competences'

export const Competences = ({ id }: CompetencesProps) => (
  <Section
    id={id}
    title={COMPETENCES_TITLE}
    titleClass="text-right"
    contentClass="bg-primary-200 justify-between"
  >
    <PageFooter currentPage={3}></PageFooter>
  </Section>
)
