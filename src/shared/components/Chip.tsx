interface ChipProps {
  label: string
  className?: string
}

export const Chip = ({ label, className = '' }: ChipProps) => {
  return (
    <div
      className={`inline-flex items-center border-transparent justify-center px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 cursor-default select-none ${className}`}
    >
      {label}
    </div>
  )
}
