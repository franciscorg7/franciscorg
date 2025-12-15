import { formatNewLines } from '../../utils/formatNewLines'

export interface ExperienceItemDetails {
  id: string
  title: string
  role: string
  duration: string
  description?: string
}

interface ExperienceDetailsProps {
  details: ExperienceItemDetails
}

export const ExperienceDetails = ({ details }: ExperienceDetailsProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <span className="tracking-wide text-xl">
        <b>{details.title}</b> | {details.role}
      </span>
      <span>({details.duration})</span>
      {details.description && <span>{formatNewLines(details.description)}</span>}
    </div>
  )
}
