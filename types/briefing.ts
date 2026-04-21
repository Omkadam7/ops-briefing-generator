export interface BriefingInput {
    rawData: string
  }
  
  export interface BriefingSection {
    title: string
    items: string[]
  }
  
  export interface Briefing {
    hotelName: string
    date: string
    keyNumbers: BriefingSection
    alerts: BriefingSection
    staffing: BriefingSection
    recommendedActions: BriefingSection
  }
  
  export interface ApiResponse {
    success: boolean
    briefing?: Briefing
    error?: string
  }