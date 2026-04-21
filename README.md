# Zenithh Ops AI — Daily Operations Briefing Generator

> AI-powered daily briefing tool for multi-venue hospitality operations. Built with Next.js, TypeScript and the Anthropic Claude API.

**Live Demo:** https://ops-briefing-generator.vercel.app

---

## What it does

Hotel and venue operations managers spend 30–45 minutes every morning manually reading across multiple systems — PMS, POS, rostering, finance — and writing a summary for their director or management team.

This tool eliminates that entirely. Paste raw operational data from any system, click Generate, and receive a structured executive briefing in under 10 seconds covering:

- **Key Numbers** — revenue vs target, occupancy rates, POS transaction volumes
- **Alerts & Issues** — cost variances, overdue invoices, compliance risks
- **Staffing Summary** — attendance, open shifts, roster gaps
- **Recommended Actions** — specific, time-sensitive actions for the management team

---

## Live Demo

Visit **https://ops-briefing-generator.vercel.app** — click **Launch App**, then **Load Sample Data**, then **Generate Briefing** to see a real AI-generated briefing for a multi-venue hospitality group.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 + TypeScript |
| Styling | Tailwind CSS |
| AI Engine | Anthropic Claude API |
| Model | claude-sonnet-4-6 |
| Deployment | Vercel |

---

## Features

- **Multi-venue support** — analyses data across an entire venue portfolio in one briefing
- **Any format input** — accepts raw exports from PMS, POS, rostering or finance systems
- **Cost control alerts** — automatically flags food cost, labour and budget variances
- **Staffing analysis** — identifies open shifts, absences and roster risks
- **Finance reconciliation** — surfaces overdue invoices and MYOB sync status
- **Recommended actions** — AI generates specific, actionable items for the management team

---

---

## Project Structure

```
ops-briefing-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts     ← Claude API route (server-side)
│   ├── app/
│   │   └── page.tsx         ← Terminal-style briefing tool
│   └── page.tsx             ← Landing page
├── components/
│   ├── BriefingOutput.tsx   ← Formatted briefing display
│   ├── DataInput.tsx        ← Data input panel
│   └── LoadingState.tsx     ← Loading animation
├── lib/
│   ├── prompt.ts            ← Claude system prompt
│   └── sampleData.ts        ← Hospitality demo data
└── types/
    └── briefing.ts          ← TypeScript interfaces
```
## Getting Started

1. Clone the repo

```bash
git clone https://github.com/Omkadam7/ops-briefing-generator.git
cd ops-briefing-generator
```

2. Install dependencies

```bash
npm install
```

3. Add your Anthropic API key

```bash
# Create .env.local and add:
ANTHROPIC_API_KEY=your_key_here
```

4. Run locally

```bash
npm run dev
```

Open http://localhost:3000

---

## How It Works

1. User pastes raw operational data into the input panel
2. The frontend sends the data to a Next.js API route
3. The API route calls the Anthropic Claude API with a hospitality-specific system prompt
4. Claude analyses the data and returns a structured JSON briefing
5. The frontend renders the briefing in a clean, readable format

The API key is stored server-side and never exposed to the browser.

---

## Built By

**Om Kadam** — Masters in Artificial Intelligence

Built to demonstrate how AI can eliminate manual reporting work in hospitality operations — turning raw system exports into executive-ready briefings in seconds.




