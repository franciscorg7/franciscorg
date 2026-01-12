interface SkillBadgeProps {
  label: string
}

export const SkillBadge = ({ label }: SkillBadgeProps) => {
  return (
    <div
      className="
      group relative px-4 py-2 
      bg-white/5 border border-white/10 
      rounded-lg overflow-hidden
      transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
      hover:border-white/40 hover:bg-white/10 hover:-translate-y-1 will-change-transform
      cursor-default
    "
    >
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative z-10 text-sm font-medium tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
    </div>
  )
}
