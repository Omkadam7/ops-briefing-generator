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
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Raw Operations Data</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Paste bookings, revenue, staff and incident data below
          </p>
        </div>
        <button
          onClick={() => onChange(sampleData)}
          className="text-sm text-blue-600 hover:text-blue-700 underline underline-offset-2"
        >
          Load sample data
        </button>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your daily operations data here..."
        className="w-full h-[520px] p-4 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
      />

      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200"
      >
        {isLoading ? 'Generating...' : 'Generate Briefing'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Powered by Claude AI · Zenith Hotels Group
      </p>
    </div>
  )
}