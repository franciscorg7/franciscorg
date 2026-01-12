export const AsteriskNote = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button
    onClick={() => onClick()}
    className="group relative flex items-center h-16 w-16 hover:w-70 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer outline-none ml-2 mt-[-0.2em]"
    aria-label="Open Certifications"
  >
    <div className="absolute inset-0 bg-white/0 backdrop-blur-0 border border-white/0 rounded-full transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-xl group-hover:border-white/20 group-hover:shadow-2xl" />
    <div className="relative z-10 flex items-center justify-between w-full px-2 overflow-hidden">
      <span className="font-title text-6xl md:text-8xl text-white/60 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
        *
      </span>
      <div className="flex items-center gap-3 p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-x-10 group-hover:translate-x-0">
        <span className="whitespace-nowrap font-body font-bold uppercase tracking-wide text-sm md:text-base text-white">
          {label}
        </span>
      </div>
    </div>
  </button>
)
