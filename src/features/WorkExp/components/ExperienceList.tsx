import { experiences } from '../data'

interface ExperienceListProps {
  onSelectExperience?: (url: string) => void
}

export const ExperienceList = ({ onSelectExperience }: ExperienceListProps) => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="flex flex-col border-y-2 border-gray-800 divide-y-2 divide-gray-800">
        {experiences.map(exp => (
          <div
            key={exp.id}
            className="flex justify-between items-center py-3 group cursor-pointer"
            onClick={() => onSelectExperience?.(exp.companyUrl || '')}
          >
            <span className="font-bold text-lg uppercase tracking-wide text-gray-900 group-hover:text-white transition-colors duration-300">
              {exp.company}
            </span>
            <span className="font-medium text-lg text-gray-900">{exp.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
