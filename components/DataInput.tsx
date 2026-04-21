'use client'

import { sampleData } from '@/lib/sampleData'

interface DataInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isLoading: boolean
}

export default function DataInput({
  value,
  onChange,
  onSubmit,
  isLoading,
}: DataInputProps) {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/* Panel header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
          <div>
            <h2 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              Raw Operations Data
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Paste bookings, revenue, staff and incident data
            </p>
          </div>
        </div>
        <button
          onClick={() => onChange(sampleData)}
          className="text-xs text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-400/50 px-3 py-1.5 rounded-lg transition-all duration-200 tracking-wide"
        >
          Load sample data
        </button>
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your daily operations data here..."
        className="flex-1 w-full min-h-[460px] p-4 text-xs text-slate-300 bg-black/30 border border-white/5 rounded-xl resize-none focus:outline-none focus:border-blue-500/40 focus:bg-black/50 font-mono leading-relaxed placeholder:text-slate-600 transition-all duration-200"
      />

      {/* Generate button */}
      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-200 tracking-wide shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
            Generating briefing...
          </span>
        ) : (
          'Generate Briefing →'
        )}
      </button>

      <p className="text-xs text-slate-600 text-center tracking-wide">
        POWERED BY CLAUDE AI · ZENITH HOTELS GROUP
      </p>
    </div>
  )
}