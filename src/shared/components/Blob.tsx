interface BlobProps {
  color?: string
  width?: string
  height?: string
  shape?: string // the border-radius string
  className?: string
}

export const Blob = ({
  color = 'bg-blue-200',
  width = 'w-64',
  height = 'h-64',
  shape = '30% 70% 70% 30% / 30% 30% 70% 70%', // default irregular shape
  className = '',
}: BlobProps) => {
  return (
    <div
      className={`${width} ${height} ${color} ${className} transition-all duration-500 ease-in-out`}
      style={{
        borderRadius: shape,
      }}
    />
  )
}
