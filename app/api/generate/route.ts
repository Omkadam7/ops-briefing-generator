import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { systemPrompt, buildUserMessage } from '@/lib/prompt'
import { Briefing, ApiResponse } from '@/types/briefing'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    // Get the raw data from the request body
    const { rawData } = await request.json()

    // Validate that data was actually sent
    if (!rawData || rawData.trim() === '') {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'No data provided' },
        { status: 400 }
      )
    }

    // Call the Claude API
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: buildUserMessage(rawData),
        },
      ],
      system: systemPrompt,
    })

   // Extract the text response from Claude
const responseText = message.content[0].type === 'text'
? message.content[0].text
: ''

// Strip markdown code blocks if Claude wrapped the JSON
const cleanedResponse = responseText
.replace(/```json\n?/g, '')
.replace(/```\n?/g, '')
.trim()

// Parse the JSON response from Claude
const briefing: Briefing = JSON.parse(cleanedResponse)

    return NextResponse.json<ApiResponse>({
      success: true,
      briefing,
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Failed to generate briefing' },
      { status: 500 }
    )
  }
}