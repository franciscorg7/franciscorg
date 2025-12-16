export interface ExperienceItem {
  id: string
  entity: string
  entityUrl?: string
  year: string
}

interface ExperienceListProps {
  experiences: ExperienceItem[]
  selectedExperience?: string | null
  color?: string
  hover?: boolean
  onSelectExperience?: (url: string) => void
}

export const ExperienceList = ({
  experiences,
  selectedExperience,
  color = 'gray',
  hover = false,
  onSelectExperience,
}: ExperienceListProps) => {
  return (
    <div className="w-full mx-auto">
      <div
        className={`flex flex-col border-y-2 border-${color}-800 divide-y-2 divide-${color}-800`}
      >
        {experiences?.map(exp => (
          <div
            key={exp.id}
            className={`flex justify-between items-center gap-4 py-3 group ${hover ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={() => onSelectExperience?.(exp.id || '')}
          >
            <span
              className={`font-bold text-lg uppercase tracking-wide transition-colors duration-300 
                ${hover ? 'group-hover:text-white' : ''} 
                ${exp.id === selectedExperience ? 'text-white' : `text-${color}-900`}`}
            >
              {exp.entity}
            </span>
            <span className={`font-medium text-lg text-${color}-900`}>{exp.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
