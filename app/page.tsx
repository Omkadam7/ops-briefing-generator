import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08080f] overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#08080f]/90 backdrop-blur-md">
        <div className="page-container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">Z</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Zenithh Ops AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How it works</a>
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
          </div>
          <Link href="/app" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm" style={{ padding: '0.20rem 0.5rem' }}>
                Launch the App &#8594;
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="page-container">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wide">
                Live · Powered by Claude AI · Built for Hospitality
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
              Turn raw ops data<br />
              into executive<br />
              <span className="text-blue-400">briefings.</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Paste messy exports from your PMS, POS, roster and finance systems.
              Get a clean, structured management briefing in under 10 seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="/app" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm" style={{ padding: '0.15rem 0.5rem' }}>
                Try the live demo &#8594;
              </Link>
              <a href="#how-it-works" className="text-slate-400 hover:text-white text-sm transition-colors">
                See how it works &#8595;
              </a>
            </div>

            {/* Stats */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
              <div>
                <p className="text-3xl font-bold text-white">10s</p>
                <p className="text-sm text-slate-500 mt-1">Briefing generation time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4+</p>
                <p className="text-sm text-slate-500 mt-1">Venue types supported</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-500 mt-1">AI powered analysis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Free</p>
                <p className="text-sm text-slate-500 mt-1">To try right now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal preview */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="page-container">
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 overflow-hidden">

            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-black/40">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-4 text-xs text-slate-600 font-mono tracking-widest">
                ZENITHH_OPS · BRIEFING_SYSTEM · v1.0.0
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-500 font-mono tracking-widest">LIVE</span>
              </div>
            </div>

            <div className="p-8 font-mono">
              <div className="text-xs space-y-1.5 mb-8">
                <p className="text-slate-600">$ zenithh-ops generate --venue all --date today</p>
                <p className="text-slate-600">&#8594; Connecting to AI engine...</p>
                <p className="text-slate-600">&#8594; Parsing 4 venues · POS · Roster · Finance · MYOB...</p>
                <p className="text-emerald-400">&#10003; Briefing generated in 8.3s</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-blue-400 text-xs tracking-widest">KEY NUMBERS</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-xs leading-relaxed">01 · Group revenue $59,740 vs $62,000 target</p>
                    <p className="text-slate-300 text-xs leading-relaxed">02 · Portfolio occupancy 86.2% avg across venues</p>
                    <p className="text-slate-300 text-xs leading-relaxed">03 · 847 POS transactions · avg $42.30</p>
                  </div>
                </div>
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-amber-400 text-xs tracking-widest">ALERTS</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-xs leading-relaxed">01 · Food cost 31.2% vs 28% target</p>
                    <p className="text-slate-300 text-xs leading-relaxed">02 · Labour cost 38.4% vs 35% target</p>
                    <p className="text-slate-300 text-xs leading-relaxed">03 · Linen invoice $2,200 overdue 14 days</p>
                  </div>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-purple-400 text-xs tracking-widest">STAFFING</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-xs leading-relaxed">01 · 64 of 68 staff present · 4 sick absences</p>
                    <p className="text-slate-300 text-xs leading-relaxed">02 · 2 unfilled shifts — bar evening, housekeeping</p>
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 text-xs tracking-widest">RECOMMENDED ACTIONS</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-xs leading-relaxed">01 · Brief kitchen manager on food cost variance</p>
                    <p className="text-slate-300 text-xs leading-relaxed">02 · Call casual pool to cover 2 unfilled shifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="page-container">
          <div style={{ marginBottom: '4rem' }}>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">How it works</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Three steps. Ten seconds.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <span className="text-blue-400 font-bold text-lg">01</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Paste your data</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Copy raw exports from your PMS, POS, rostering or finance system. Any format works.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-8">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <span className="text-purple-400 font-bold text-lg">02</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">AI analyses it</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Claude AI reads across all your data simultaneously, identifies KPIs and flags anomalies.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <span className="text-emerald-400 font-bold text-lg">03</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Get your briefing</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Receive a structured executive briefing with KPIs, alerts, staffing and recommended actions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="page-container">
          <div style={{ marginBottom: '4rem' }}>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Features</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Built for hospitality operations</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <h3 className="text-white font-semibold">Multi-venue support</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Analyse your entire venue portfolio in a single briefing with per-venue breakdowns.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                <h3 className="text-white font-semibold">POS integration ready</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Accepts raw exports from any point-of-sale system — no reformatting required.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <h3 className="text-white font-semibold">Cost control alerts</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Automatically flags food cost, labour and budget variances against your targets.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <h3 className="text-white font-semibold">Staffing analysis</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Identifies open shifts, sick absences and roster risks before they become problems.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <h3 className="text-white font-semibold">Finance reconciliation</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Surfaces overdue invoices, MYOB sync status and cost variances instantly.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                <h3 className="text-white font-semibold">Recommended actions</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">AI generates specific time-sensitive actions your team can act on today.</p>
            </div>
          </div>  
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="page-container">
          <div style={{ border: '1px solid rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)', borderRadius: '1rem', padding: '6rem', textAlign: 'center' }}>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Ready to try it?</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">See your briefing in 10 seconds</h2>
            <p className="text-slate-400 mb-10 leading-relaxed" style={{ maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
              Load the sample data, click generate, and see exactly what your morning briefing could look like.
            </p>
            <Link href="/app" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm" style={{ padding: '0.20rem 0.5rem' }}>
                Launch the App &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="page-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">About</p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-6">Built by Om Kadam</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Masters in Artificial Intelligence. This tool was built to demonstrate how AI can eliminate
                manual reporting work in hospitality operations - turning raw system exports into
                executive-ready briefings in seconds.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Built with Next.js, TypeScript, Tailwind CSS and the Anthropic Claude API.
                Designed for multi-venue hospitality groups across NSW, Australia.
              </p>

            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-8 font-mono">
              <p className="text-xs text-slate-600 tracking-widest mb-6">TECH STACK</p>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-slate-600 text-xs">Framework</span>
                <span className="text-slate-300 text-xs">Next.js 15 + TypeScript</span>
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-slate-600 text-xs">Styling</span>
                <span className="text-slate-300 text-xs">Tailwind CSS</span>
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-slate-600 text-xs">AI Engine</span>
                <span className="text-slate-300 text-xs">Anthropic Claude API</span>
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-slate-600 text-xs">Model</span>
                <span className="text-slate-300 text-xs">claude-sonnet-4-6</span>
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-slate-600 text-xs">Deployment</span>
                <span className="text-slate-300 text-xs">Vercel</span>
              </div>
              <div style={{ padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-slate-600 text-xs">Domain</span>
                <span className="text-slate-300 text-xs">Hospitality · NSW AU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Z</span>
            </div>
            <span className="text-slate-400 font-medium">Zenithh Ops AI</span>
          </div>
          <p className="text-slate-600 text-sm">Built by Om Kadam · Masters in AI · Powered by Claude</p>
          <Link href="/app" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Launch App &#8594;
          </Link>
        </div>
      </footer>

    </div>
  )
}