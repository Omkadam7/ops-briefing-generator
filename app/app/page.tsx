'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Briefing } from '@/types/briefing'
import { sampleData } from '@/lib/sampleData'

export default function AppPage() {
  const [rawData, setRawData] = useState('')
  const [briefing, setBriefing] = useState<Briefing | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    setIsLoading(true)
    setError(null)
    setBriefing(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawData }),
      })
      const data = await response.json()
      if (!data.success) {
        setError(data.error || 'Something went wrong')
        return
      }
      setBriefing(data.briefing)
    } catch {
      setError('Failed to connect to server. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#080810] overflow-hidden font-mono">

      {/* Terminal nav */}
      <nav className="shrink-0 border-b border-white/5 bg-black/60 px-6 py-2.5">
        <div className="max-w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-xs text-slate-600 tracking-widest uppercase">
              zenithh_ops_briefing_system · v1.0.0
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-500 tracking-widest">
                SYSTEM ONLINE
              </span>
            </div>
            <Link
              href="/"
              className="text-xs text-slate-600 hover:text-slate-400 tracking-widest transition-colors"
            >
              ← BACK
            </Link>
          </div>
        </div>
      </nav>

      {/* Status bar */}
      <div className="shrink-0 border-b border-white/5 bg-black/40 px-6 py-1.5">
        <div className="flex items-center gap-6 text-xs text-slate-600 tracking-widest">
          <span>ZENITHH HOTELS GROUP</span>
          <span className="text-slate-700">·</span>
          <span>OPERATIONS INTELLIGENCE PLATFORM</span>
          <span className="text-slate-700">·</span>
          <span>
            {new Date().toLocaleDateString('en-AU', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).toUpperCase()}
          </span>
          <span className="text-slate-700">·</span>
          <span>NSW AUSTRALIA</span>
        </div>
      </div>

      {/* Main grid */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[45%_55%]">

        {/* Left — input terminal */}
        <div className="flex flex-col border-r border-white/5 overflow-hidden">

          {/* Panel header */}
          <div className="shrink-0 flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/30">
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-400 tracking-widest">
                ▸ INPUT_STREAM
              </span>
            </div>
            <button
              onClick={() => setRawData(sampleData)}
              className="text-xs text-slate-600 hover:text-blue-400 tracking-widest transition-colors"
            >
              [LOAD_SAMPLE_DATA]
            </button>
          </div>

          {/* Textarea */}
          <div className="flex-1 relative min-h-0">
            <textarea
              value={rawData}
              onChange={(e) => setRawData(e.target.value)}
              placeholder={`> paste raw operations data here...\n> accepts any format — PMS, POS, roster, finance\n> or click [LOAD_SAMPLE_DATA] above`}
              className="absolute inset-0 w-full h-full p-4 text-xs text-slate-300 bg-transparent resize-none focus:outline-none font-mono leading-relaxed placeholder:text-slate-700"
            />
          </div>

          {/* Bottom bar */}
          <div className="shrink-0 border-t border-white/5 bg-black/30 p-3">
            <button
              onClick={handleGenerate}
              disabled={isLoading || !rawData.trim()}
              className="w-full py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded border disabled:border-slate-800 disabled:text-slate-700 disabled:cursor-not-allowed border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
            >
              {isLoading
                ? '> ANALYSING_DATA... PLEASE WAIT'
                : '> EXECUTE: GENERATE_BRIEFING'}
            </button>
            <p className="text-center text-xs text-slate-700 mt-2 tracking-widest">
              POWERED BY CLAUDE AI
            </p>
          </div>
        </div>

        {/* Right — output terminal */}
        <div className="flex flex-col overflow-hidden">

          {/* Panel header */}
          <div className="shrink-0 flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/30">
            <span className="text-xs text-emerald-400 tracking-widest">
              ▸ OUTPUT_STREAM
            </span>
            {briefing && (
              <span className="text-xs text-slate-600 tracking-widest">
                BRIEFING_GENERATED ·{' '}
                {new Date().toLocaleTimeString('en-AU')} AEST
              </span>
            )}
          </div>

          {/* Output content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">

            {/* Idle state */}
            {!briefing && !isLoading && !error && (
              <div className="h-full flex flex-col justify-center items-center gap-4 text-center">
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs tracking-widest">
                    AWAITING INPUT_STREAM
                  </p>
                  <p className="text-slate-800 text-xs tracking-widest">
                    ────────────────────
                  </p>
                  <p className="text-slate-700 text-xs tracking-widest">
                    LOAD SAMPLE DATA → EXECUTE → VIEW BRIEFING
                  </p>
                </div>
                <div className="flex gap-1 mt-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-slate-700 animate-pulse"
                      style={{ animationDelay: `${i * 300}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Loading */}
            {isLoading && (
              <div className="space-y-2 pt-4">
                {[
                  'CONNECTING TO AI ENGINE...',
                  'PARSING INPUT_STREAM DATA...',
                  'ANALYSING VENUE PORTFOLIO...',
                  'CALCULATING COST VARIANCES...',
                  'CROSS-REFERENCING ROSTER DATA...',
                  'GENERATING EXECUTIVE BRIEFING...',
                ].map((line, i) => (
                  <p
                    key={i}
                    className="text-xs text-slate-500 tracking-widest animate-pulse"
                    style={{ animationDelay: `${i * 400}ms` }}
                  >
                    {'>'} {line}
                  </p>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="pt-4 space-y-2">
                <p className="text-xs text-red-400 tracking-widest">
                  {'>'} ERROR: {error.toUpperCase()}
                </p>
                <p className="text-xs text-slate-600 tracking-widest">
                  {'>'} CHECK INPUT DATA AND RETRY
                </p>
              </div>
            )}

            {/* Briefing output */}
            {briefing && !isLoading && (
              <div className="space-y-4">

                {/* Header */}
                <div className="border border-blue-500/20 rounded bg-blue-500/5 p-4">
                  <p className="text-xs text-blue-400 tracking-widest mb-1">
                    ▸ DAILY_OPERATIONS_BRIEFING · GENERATED
                  </p>
                  <p className="text-lg font-bold text-white tracking-wide">
                    {briefing.hotelName}
                  </p>
                  <p className="text-xs text-slate-500 tracking-widest mt-1">
                    {briefing.date}
                  </p>
                </div>

                {/* Sections */}
                {[
                  {
                    key: 'keyNumbers' as const,
                    label: 'KEY_NUMBERS',
                    color: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
                  },
                  {
                    key: 'alerts' as const,
                    label: 'ALERTS_AND_ISSUES',
                    color: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
                  },
                  {
                    key: 'staffing' as const,
                    label: 'STAFFING_SUMMARY',
                    color: 'border-purple-500/20 text-purple-400 bg-purple-500/5',
                  },
                  {
                    key: 'recommendedActions' as const,
                    label: 'RECOMMENDED_ACTIONS',
                    color: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5',
                  },
                ].map(({ key, label, color }) => {
                  const [borderColor, textColor, bgColor] = color.split(' ')
                  return (
                    <div
                      key={key}
                      className={`border ${borderColor} ${bgColor} rounded p-4`}
                    >
                      <p className={`text-xs ${textColor} tracking-widest mb-3`}>
                        ▸ {label}
                      </p>
                      <div className="space-y-2">
                        {briefing[key].items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-slate-600 text-xs font-mono shrink-0 mt-0.5">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-slate-300 text-xs leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}

                {/* Footer */}
                <p className="text-xs text-slate-700 tracking-widest text-center pb-2">
                  END_OF_BRIEFING · ZENITHH OPS AI · CLAUDE
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}