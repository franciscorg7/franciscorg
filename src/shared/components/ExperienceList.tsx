export interface ExperienceItem {
  id: string
  entity: string
  entityUrl?: string
  year: string
}

interface ExperienceListProps {
  experiences: ExperienceItem[]
  selectedExperience?: string | null
  onSelectExperience?: (url: string) => void
}

export const ExperienceList = ({
  experiences,
  selectedExperience,
  onSelectExperience,
}: ExperienceListProps) => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="flex flex-col border-y-2 border-gray-800 divide-y-2 divide-gray-800">
        {experiences?.map(exp => (
          <div
            key={exp.id}
            className="flex justify-between items-center gap-4 py-3 group cursor-pointer"
            onClick={() => onSelectExperience?.(exp.id || '')}
          >
            <span
              className={`font-bold text-lg uppercase tracking-wide transition-colors duration-300 group-hover:text-white ${
                exp.id === selectedExperience ? 'text-white' : 'text-gray-900'
              }`}
            >
              {exp.entity}
            </span>
            <span className="font-medium text-lg text-gray-900">{exp.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
