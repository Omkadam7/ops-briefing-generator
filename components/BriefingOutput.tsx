import { Briefing } from '@/types/briefing'
import {
  TrendingUp,
  AlertTriangle,
  Users,
  CheckCircle,
} from 'lucide-react'

interface BriefingOutputProps {
  briefing: Briefing
}

const sections = [
  {
    key: 'keyNumbers' as const,
    icon: TrendingUp,
    label: 'KEY NUMBERS',
    accent: 'border-blue-500/40',
    iconColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
    glow: 'shadow-blue-400/10',
  },
  {
    key: 'alerts' as const,
    icon: AlertTriangle,
    label: 'ALERTS & ISSUES',
    accent: 'border-amber-500/40',
    iconColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
    glow: 'shadow-amber-400/10',
  },
  {
    key: 'staffing' as const,
    icon: Users,
    label: 'STAFFING',
    accent: 'border-purple-500/40',
    iconColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    glow: 'shadow-purple-400/10',
  },
  {
    key: 'recommendedActions' as const,
    icon: CheckCircle,
    label: 'RECOMMENDED ACTIONS',
    accent: 'border-emerald-500/40',
    iconColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    glow: 'shadow-emerald-400/10',
  },
]

export default function BriefingOutput({ briefing }: BriefingOutputProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Briefing header */}
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-500 tracking-widest uppercase">
              Daily Operations Briefing
            </span>
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            {briefing.hotelName}
          </h1>
          <p className="text-slate-400 text-sm mt-1">{briefing.date}</p>
        </div>
      </div>

      {/* Sections */}
      {sections.map(({ key, icon: Icon, label, accent, iconColor, dotColor, glow }) => (
        <div
          key={key}
          className={`rounded-xl border ${accent} bg-slate-900/50 p-5 shadow-lg ${glow}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
            <Icon className={`w-4 h-4 ${iconColor}`} />
            <span className={`text-xs font-semibold ${iconColor} tracking-widest`}>
              {label}
            </span>
          </div>

          {/* Items */}
          <ul className="flex flex-col gap-2.5">
            {briefing[key].items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-slate-600 text-xs mt-0.5 font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 pb-1">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-xs text-slate-600 tracking-wide">
            GENERATED SUCCESSFULLY
          </span>
        </div>
        <span className="text-xs text-slate-600 font-mono">
          {new Date().toLocaleTimeString('en-AU')} AEST
        </span>
      </div>
    </div>
  )
}