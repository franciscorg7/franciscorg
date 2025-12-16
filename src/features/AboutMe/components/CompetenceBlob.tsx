import { useMemo } from 'react'
import { Blob } from '../../../shared/components/Blob'
import { blobShapes } from '../../../config/blob-shape'

interface CompetenceTagProps {
  label: string
  className?: string
  index?: number // index to force a specific shape from the list
}

export const CompetenceBlob = ({ label, className = '', index }: CompetenceTagProps) => {
  const shape = useMemo(() => {
    const shapes = Object.values(blobShapes)

    if (typeof index === 'number') {
      return shapes[index % shapes.length]
    }

    const charCodeSum = label.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

    return shapes[charCodeSum % shapes.length]
  }, [label, index])

  return (
    <Blob
      shape={shape}
      className={` 
        text-lg font-bold 
        h-fit w-fit
        ${className}
      `}
    >
      {label}
    </Blob>
  )
}
