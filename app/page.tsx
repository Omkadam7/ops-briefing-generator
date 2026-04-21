'use client'

import { useState } from 'react'
import DataInput from '@/components/DataInput'
import BriefingOutput from '@/components/BriefingOutput'
import LoadingState from '@/components/LoadingState'
import { Briefing } from '@/types/briefing'

export default function Home() {
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

    } catch (err) {
      setError('Failed to connect to the server. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0f] overflow-hidden">

      {/* Top nav — fixed height */}
      <nav className="shrink-0 border-b border-white/5 bg-black/40 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="text-white text-sm font-bold">Z</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-200 tracking-wide">
                Zenith Hotels Group
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-xs text-slate-500 tracking-wide">
                Operations Intelligence Platform
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-500 tracking-wide">SYSTEM ONLINE</span>
          </div>
        </div>
      </nav>

      {/* Page header — fixed height */}
      <div className="shrink-0 max-w-7xl w-full mx-auto px-6 pt-6 pb-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-blue-400 tracking-widest uppercase mb-1.5">
              Executive Dashboard
            </p>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Daily Briefing Generator
            </h1>
            <p className="text-slate-500 text-xs mt-1">
              Paste raw operational data to generate an AI-powered management briefing
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-slate-600 font-mono">
            <span>
              {new Date().toLocaleDateString('en-AU', {
                weekday: 'long',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <span className="text-slate-700">NSW, AUSTRALIA</span>
          </div>
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Main grid — takes remaining height, no overflow on page */}
      <div className="flex-1 min-h-0 max-w-7xl w-full mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">

          {/* Left panel — input, fixed, no scroll */}
          <div className="rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm p-6 flex flex-col overflow-hidden">
            <DataInput
              value={rawData}
              onChange={setRawData}
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />
          </div>

          {/* Right panel — output, only this scrolls */}
          <div className="rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm p-6 overflow-y-auto">

            {isLoading && <LoadingState />}

            {error && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 text-lg">!</span>
                  </div>
                  <p className="text-red-400 font-medium text-sm">{error}</p>
                  <p className="text-slate-600 text-xs">Check your data and try again</p>
                </div>
              </div>
            )}

            {briefing && !isLoading && (
              <BriefingOutput briefing={briefing} />
            )}

            {!briefing && !isLoading && !error && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl border border-white/5 bg-slate-800/50 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-[#0a0a0f] bg-slate-700" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-slate-400 font-medium text-sm">
                    Awaiting operational data
                  </p>
                  <p className="text-slate-600 text-xs max-w-xs leading-relaxed">
                    Load sample data or paste your venue data on the left, then click Generate Briefing
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-700 font-mono tracking-wide">
                  <span>READY</span>
                  <span>·</span>
                  <span>AI MODEL LOADED</span>
                  <span>·</span>
                  <span>SECURE</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}