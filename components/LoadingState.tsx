export default function LoadingState() {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
        <div className="text-center">
          <p className="text-gray-700 font-medium">Generating your briefing...</p>
          <p className="text-gray-400 text-sm mt-1">Analysing operational data</p>
        </div>
      </div>
    )
  }