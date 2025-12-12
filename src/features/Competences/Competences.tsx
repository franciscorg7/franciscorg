import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { COMPETENCES_TITLE } from '../../data/competences'

export interface CompetencesProps {
  id: string
  page: number
}

export const Competences = ({ id, page }: CompetencesProps) => (
  <Section
    id={id}
    title={COMPETENCES_TITLE}
    titleClass="text-right text-primary-700 text-9xl"
    contentClass="bg-secondary-100 justify-between"
  >
    <PageFooter currentPage={page} position="bottom-0 right-0"></PageFooter>
  </Section>
)
