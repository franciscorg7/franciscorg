import { useMemo } from 'react'
import { blobShapes } from '../config'
import { Blob } from '../../../shared/components/Blob'

interface CompetenceTagProps {
  label: string
  className?: string
  index?: number // index to force a specific shape from the list
}

export const CompetenceBlob = ({ label, className = '', index }: CompetenceTagProps) => {
  const shape = useMemo(() => {
    // Pick a shape deterministically from that specific list
    if (typeof index === 'number') {
      return blobShapes[index % blobShapes.length]
    }

    const charCodeSum = label.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

    return blobShapes[charCodeSum % blobShapes.length]
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
