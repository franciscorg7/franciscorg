import React from 'react'

interface BlobProps {
  color?: string
  width?: string // Expecting Tailwind values like '64', '96' or 'full'
  height?: string
  shape?: string
  className?: string
  children?: React.ReactNode // Added to support text or other elements
}

export const Blob = ({
  color = 'bg-blue-200',
  width = '64',
  height = '64',
  shape = '30% 70% 70% 30% / 30% 30% 70% 70%',
  className = '',
  children,
}: BlobProps) => {
  return (
    <div
      className={`
        w-${width} h-${height} 
        ${color} 
        ${className} 
        transition-all duration-500 ease-in-out
        flex items-center justify-center 
        cursor-default text-center py-8 px-6
      `}
      style={{
        borderRadius: shape,
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
