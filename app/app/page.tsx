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

      {/* Nav */}
      <nav className="shrink-0 border-b border-white/5 bg-black/60 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
            </div>
            <Link href="/" className="text-xs text-white hover:text-slate-300 tracking-widest transition-colors" style={{ marginRight: '2rem' }}>
              &#8592; BACK
            </Link>
          </div>
        </div>
      </nav>

      {/* Status bar */}
      <div className="shrink-0 border-b border-white/5 bg-black/40 px-6 py-2">
        <div className="flex items-center justify-center gap-4 text-xs text-slate-600 tracking-widest">
          <span>ZENITHH HOTELS GROUP</span>
          <span>·</span>
          <span>OPERATIONS INTELLIGENCE PLATFORM</span>
          <span>·</span>
          <span>{new Date().toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase()}</span>
          <span>·</span>
          <span>NSW AUSTRALIA</span>
        </div>
      </div>

      {/* Panel headers */}
      <div className="shrink-0 border-b border-white/5" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa' }} />
            <span style={{ fontSize: '11px', color: '#60a5fa', letterSpacing: '0.1em' }}>INPUT_STREAM</span>
          </div>
          <button
            onClick={() => setRawData(sampleData)}
            style={{ fontSize: '11px', background: '#2563eb', color: 'white', padding: '4px 12px', borderRadius: '6px', letterSpacing: '0.05em', border: 'none', cursor: 'pointer' }}
          >
            LOAD SAMPLE DATA
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
            <span style={{ fontSize: '11px', color: '#34d399', letterSpacing: '0.1em' }}>OUTPUT_STREAM</span>
          </div>
          {briefing && (
            <span style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.05em' }}>
              {new Date().toLocaleTimeString('en-AU')} AEST
            </span>
          )}
        </div>
      </div>

      {/* Main grid */}
      <div className="flex-1 min-h-0" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* Left panel */}
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.05)' }}>

          {/* Textarea */}
          <div style={{ flex: 1, position: 'relative', padding: '1rem' }}>
            <textarea
              value={rawData}
              onChange={(e) => setRawData(e.target.value)}
              placeholder={`> paste raw operations data here...\n> accepts any format — PMS, POS, roster, finance\n> or click LOAD SAMPLE DATA above`}
              style={{
                position: 'absolute',
                inset: '1rem',
                width: 'calc(100% - 2rem)',
                height: 'calc(100% - 2rem)',
                padding: '1rem',
                fontSize: '12px',
                color: '#cbd5e1',
                background: 'rgba(15,23,42,0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                resize: 'none',
                outline: 'none',
                fontFamily: 'monospace',
                lineHeight: '1.6',
              }}
            />
          </div>

          {/* Generate button */}
          <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
            <button
              onClick={handleGenerate}
              disabled={isLoading || !rawData.trim()}
              className="w-full text-sm font-bold tracking-widest uppercase transition-all duration-200 rounded-xl disabled:cursor-not-allowed text-white"
              style={{
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                background: isLoading || !rawData.trim() ? '#1e293b' : '#2563eb',
                color: isLoading || !rawData.trim() ? '#475569' : 'white',
                border: 'none',
                cursor: isLoading || !rawData.trim() ? 'not-allowed' : 'pointer',
                letterSpacing: '0.1em',
              }}
            >
              {isLoading ? '⟳ ANALYSING DATA... PLEASE WAIT' : '⚡ EXECUTE: GENERATE BRIEFING'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '11px', color: '#334155', marginTop: '0.5rem', letterSpacing: '0.1em' }}>
              POWERED BY CLAUDE AI · ZENITHH OPS
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

            {/* Idle */}
            {!briefing && !isLoading && !error && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15,23,42,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '24px' }}>📋</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '11px', letterSpacing: '0.1em' }}>AWAITING INPUT_STREAM</p>
                <p style={{ color: '#334155', fontSize: '11px', letterSpacing: '0.1em' }}>LOAD SAMPLE DATA &#8594; EXECUTE &#8594; VIEW BRIEFING</p>
              </div>
            )}

            {/* Loading */}
            {isLoading && (
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'CONNECTING TO AI ENGINE...',
                  'PARSING INPUT_STREAM DATA...',
                  'ANALYSING VENUE PORTFOLIO...',
                  'CALCULATING COST VARIANCES...',
                  'CROSS-REFERENCING ROSTER DATA...',
                  'GENERATING EXECUTIVE BRIEFING...',
                ].map((line, i) => (
                  <p key={i} style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.1em', animationDelay: `${i * 400}ms` }} className="animate-pulse">
                    &#8594; {line}
                  </p>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ fontSize: '11px', color: '#f87171', letterSpacing: '0.1em' }}>&#8594; ERROR: {error.toUpperCase()}</p>
                <p style={{ fontSize: '11px', color: '#334155', letterSpacing: '0.1em' }}>&#8594; CHECK INPUT DATA AND RETRY</p>
              </div>
            )}

            {/* Briefing */}
            {briefing && !isLoading && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                {/* Header */}
                <div style={{ border: '1px solid rgba(96,165,250,0.2)', borderRadius: '12px', background: 'rgba(96,165,250,0.05)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '11px', color: '#60a5fa', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>&#8594; DAILY_OPERATIONS_BRIEFING · GENERATED</p>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', letterSpacing: '0.05em' }}>{briefing.hotelName}</p>
                  <p style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{briefing.date}</p>
                </div>

                {/* Sections */}
                {[
                  { key: 'keyNumbers' as const, label: 'KEY_NUMBERS', borderColor: 'rgba(96,165,250,0.2)', bgColor: 'rgba(96,165,250,0.05)', textColor: '#60a5fa' },
                  { key: 'alerts' as const, label: 'ALERTS_AND_ISSUES', borderColor: 'rgba(251,191,36,0.2)', bgColor: 'rgba(251,191,36,0.05)', textColor: '#fbbf24' },
                  { key: 'staffing' as const, label: 'STAFFING_SUMMARY', borderColor: 'rgba(167,139,250,0.2)', bgColor: 'rgba(167,139,250,0.05)', textColor: '#a78bfa' },
                  { key: 'recommendedActions' as const, label: 'RECOMMENDED_ACTIONS', borderColor: 'rgba(52,211,153,0.2)', bgColor: 'rgba(52,211,153,0.05)', textColor: '#34d399' },
                ].map(({ key, label, borderColor, bgColor, textColor }) => (
                  <div key={key} style={{ border: `1px solid ${borderColor}`, borderRadius: '12px', background: bgColor, padding: '1.5rem' }}>
                    <p style={{ fontSize: '11px', color: textColor, letterSpacing: '0.1em', marginBottom: '1.25rem' }}>&#8594; {label}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {briefing[key].items.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <span style={{ color: '#475569', fontSize: '11px', fontFamily: 'monospace', flexShrink: 0, marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
                          <span style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: '1.7' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <p style={{ fontSize: '11px', color: '#334155', letterSpacing: '0.1em', textAlign: 'center', paddingBottom: '0.5rem' }}>
                  END_OF_BRIEFING · ZENITHH OPS AI
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}