import { formatNewLines } from '../../utils/formatNewLines'

interface ExperienceKeyword {
  text: string
  shape: string
  className: string
}

export interface ExperienceItemDetails {
  id: string
  title: string
  role: string
  duration: string
  description?: string
  keywords?: ExperienceKeyword[]
}

interface ExperienceDetailsProps {
  details: ExperienceItemDetails | null
}

export const ExperienceDetails = ({ details }: ExperienceDetailsProps) => {
  return details ? (
    <div className="flex flex-col gap-2">
      <span className="tracking-wide text-xl">
        <b>{details.title}</b> | {details.role}
      </span>
      <span className="text-lg">({details.duration})</span>
      {details.description && (
        <span className="text-lg">{formatNewLines(details.description)}</span>
      )}
    </div>
  ) : null
}
