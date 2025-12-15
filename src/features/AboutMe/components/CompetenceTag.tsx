import { useMemo } from 'react'

interface CompetenceTagProps {
  label: string
  className?: string
  index?: number // index to force a specific shape from the list
}

const organicShapes = [
  '60% 40% 30% 70% / 60% 30% 70% 40%',
  '40% 60% 70% 30% / 40% 50% 60% 50%',
  '30% 70% 70% 30% / 30% 30% 70% 70%',
  '63% 37% 37% 63% / 45% 45% 55% 55%',
  '50% 50% 20% 80% / 25% 80% 20% 75%',
  '70% 30% 30% 70% / 60% 40% 60% 40%',
]

export const CompetenceTag = ({ label, className = '', index }: CompetenceTagProps) => {
  const shape = useMemo(() => {
    // Pick a shape deterministically from that specific list
    if (typeof index === 'number') {
      return organicShapes[index % organicShapes.length]
    }

    const charCodeSum = label.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return organicShapes[charCodeSum % organicShapes.length]
  }, [label, index])

  return (
    <div
      style={{ borderRadius: shape }}
      className={`
        inline-flex items-center justify-center 
        px-8 py-4 text-lg font-bold w-fit text-center
        cursor-default 
        ${className}
      `}
    >
      {label}
    </div>
  )
}
