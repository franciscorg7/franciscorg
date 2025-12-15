interface SkillGroupProps {
  title: string
  skills: string[]
}

export const SkillGroup = ({ title, skills }: SkillGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span>{title}</span>
      <div className="flex flex-col flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
