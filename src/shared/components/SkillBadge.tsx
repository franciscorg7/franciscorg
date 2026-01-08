interface SkillBadgeProps {
  label: string
}

export const SkillBadge = ({ label }: SkillBadgeProps) => {
  return (
    <div
      className="
      group relative px-4 py-2 
      bg-white/3 border border-white/10 
      rounded-lg overflow-hidden transition-all duration-300 
      hover:border-white/30 hover:bg-white/8 hover:-translate-y-0.5
      cursor-default
    "
    >
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <span className="relative z-10 text-sm font-medium tracking-wide text-slate-300 group-hover:text-white">
        {label}
      </span>
    </div>
  )
}
