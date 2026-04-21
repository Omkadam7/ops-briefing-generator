export default function LoadingState() {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border border-blue-500/20" />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-t border-blue-400 animate-spin" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-slate-200 font-medium tracking-wide">
            Analysing operations data
          </p>
          <p className="text-slate-500 text-sm">
            Generating executive briefing...
          </p>
        </div>
        <div className="flex gap-1.5 mt-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    )
  }