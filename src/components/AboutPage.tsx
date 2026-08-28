import React, { useEffect } from 'react';
import {
  Compass,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Cpu,
  Lock,
  ArrowUpRight,
  Eye,
  Workflow,
  Globe2,
  MessageSquareQuote
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
  onNavigateContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onNavigateSolutions,
  onNavigateUseCases,
  onNavigateContact
}) => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-orange-100 selection:text-orange-900 pt-24 pb-0">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO / STORY HOOK                                          */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-200/40 via-purple-200/30 to-sky-200/30 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-xs font-bold uppercase tracking-wider text-[#58548C] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#F27C23] animate-pulse" />
            <span>The Brave Edge Story</span>
          </div>

          {/* Provocative Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
            For 30 years, websites were built to{' '}
            <span className="bg-gradient-to-r from-[#F27C23] via-[#E75038] to-[#58548C] bg-clip-text text-transparent">
              broadcast
            </span>
            . <br className="hidden sm:inline" />
            We build websites that{' '}
            <span className="underline decoration-[#F27C23]/40 decoration-wavy underline-offset-8">
              think
            </span>
            .
          </h1>

          {/* Storyteller Subhead */}
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto pt-2">
            Most companies treat their website as digital real estate — a polished brochure that sits passively on the internet. 
            Brave Edge was founded on a simple realization: your website shouldn't just show what you do; it should be the smartest representative of your business.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://www.braveedge.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#F27C23] hover:bg-[#E06B12] text-white px-7 py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <span>Partner with Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 border border-neutral-200 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 shadow-2xs cursor-pointer"
            >
              <span>Back to Home Experience</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. THE GENESIS: THE PROBLEM WITH THE CONVENTIONAL WEB         */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="bg-white/85 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-xl shadow-neutral-200/50 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F27C23] uppercase">
                <Compass className="w-4 h-4" />
                Chapter 01: The Silent Chasm
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Why your company's greatest knowledge never reaches your front door.
              </h2>

              <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Inside every business lies an extraordinary wealth of intelligence: founder vision, technical depth, product nuance, customer case histories, and pricing strategies scattered across Notion, Slack, CRM notes, and the minds of your leadership team.
                </p>
                <p>
                  Yet, when you hire a conventional design agency, that intelligence gets compressed into eight static pages of marketing jargon, three stock photos, and a generic <span className="font-semibold text-neutral-800">"Contact Us"</span> form that sends customer intent into an email void.
                </p>
                <p className="border-l-2 border-[#F27C23] pl-4 text-neutral-800 font-medium italic">
                  "Visitors don't want to navigate static directories and wait 48 hours for an email reply. They want immediate understanding, precision answers, and tailored outcomes the moment they arrive."
                </p>
              </div>
            </div>

            {/* Right Visual Story Card (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-850 to-[#58548C] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange-400">
                    <MessageSquareQuote className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-orange-300 block">The Core Belief</span>
                    <h3 className="text-sm font-bold text-white">The Web Needs a Brain, Not Just a Facade</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  We started Brave Edge because we refused to accept that in the era of artificial intelligence, websites should remain as dumb as they were in 1998.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Founded by Systems & AI Engineers</span>
                  <span className="text-[#F27C23] font-bold">Brave Edge Global</span>
                </div>
              </div>

              {/* Stat highlight pill */}
              <div className="p-5 rounded-2xl bg-[#58548C]/5 border border-[#58548C]/15 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#58548C] text-white flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase">94% of Web Visitors Bounce</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Because static copy fails to address their specific situational questions.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. THE RADICAL CONTRAST: TRADITIONAL AGENCY VS BRAVE EDGE     */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#58548C] uppercase">
            <Layers className="w-4 h-4" />
            Chapter 02: The Fundamental Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            How Brave Edge departs from conventional web agencies
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            A traditional web shop designs pictures of pages. We engineer dynamic intelligence ecosystems.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: Conventional Web & App Design Agencies */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/70 border border-neutral-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
                <XCircle className="w-3.5 h-3.5" />
                <span>The Conventional Agency Model</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Static Assets & Linear Hand-offs
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                Traditional agencies build monolithic websites designed like magazine spreads. They look attractive on day one, but remain completely disconnected from your internal business operations.
              </p>

              {/* List of Conventional Flaws */}
              <div className="space-y-3.5 pt-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-neutral-900 block">Dumb, Static Text Blocks</strong>
                    <span className="text-xs text-neutral-500">Every visitor sees identical generic marketing slogans regardless of who they are or what problem they have.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-neutral-900 block">Siloed from Your Actual Data</strong>
                    <span className="text-xs text-neutral-500">Knowledge sits locked inside your ERP, Notion, and databases while the website remains an isolated island.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-neutral-900 block">Dead-End Contact Forms</strong>
                    <span className="text-xs text-neutral-500">Visitor intent is throttled into email inboxes that take hours or days to respond, losing high-intent deals.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-neutral-900 block">Instant Decay Post-Launch</strong>
                    <span className="text-xs text-neutral-500">The moment your product evolves or you write new docs, the website becomes outdated and stale.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-100/80 text-neutral-600 text-xs font-medium border border-neutral-200">
              Result: High agency fees for a static digital billboard that fails to generate active business leverage.
            </div>
          </div>

          {/* RIGHT: The Brave Edge Paradigm */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white/95 to-orange-50/40 border-2 border-[#F27C23]/40 shadow-xl shadow-orange-500/10 flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27C23]/10 rounded-full blur-2xl" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-[#F27C23]/30 text-[#F27C23] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>The Brave Edge Standard</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Cognitive Systems & Living Ecosystems
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We combine frontier web engineering, editorial-grade visual craft, and proprietary contextual AI into an active digital intelligence engine that works for your business 24/7.
              </p>

              {/* List of Brave Edge Capabilities */}
              <div className="space-y-3.5 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-neutral-900 block">Real-Time Intent Recognition</strong>
                    <span className="text-xs text-neutral-600">The site understands why a specific prospect arrived and dynamically tailors content and dialogue to their context.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-neutral-900 block">Live Institutional Memory Integration</strong>
                    <span className="text-xs text-neutral-600">Securely indexes your technical docs, case studies, and internal knowledge so the site answers deep, complex questions instantly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-neutral-900 block">Embedded Autonomous Agents (Like Leo)</strong>
                    <span className="text-xs text-neutral-600">Live conversational intelligence that qualifies leads, explains complex offerings, and schedules meetings in real time.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-neutral-900 block">Bidirectional Workflow Automation</strong>
                    <span className="text-xs text-neutral-600">Directly syncs visitor interactions into your CRM, Slack channels, analytics, and internal fulfillment pipelines.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-500/10 text-neutral-900 text-xs font-bold border border-orange-500/20">
              Result: An intelligent operational asset that continuously learns, converts high-value opportunities, and scales your founders' time.
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. OUR THREE CORE ARCHITECTURAL PILLARS                        */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F27C23] uppercase">
            <BrainCircuit className="w-4 h-4" />
            Chapter 03: The Architecture of Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            How we engineer living digital intelligence
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            True digital intelligence is not a chatbot slapped onto WordPress. It is a tri-part architectural philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-white/80 border border-white/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#F27C23] uppercase tracking-wider block">Dimension 01</span>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                The Active Web Surface
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We craft fluid, responsive web interfaces with editorial-grade typography, dynamic micro-interactions, and 60fps physics that immediately convey uncompromising quality and prestige.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500">
              Active UX • Dynamic Content • Zero Friction
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-white/80 border border-white/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#58548C] uppercase tracking-wider block">Dimension 02</span>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                The Context Engine
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We organize your unstructured enterprise knowledge, contracts, workflows, and pitch decks into a high-dimensional neural vector space that grounds every AI interaction in ground truth.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500">
              Vector Stores • Grounded Retrieval • Zero Hallucinations
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-white/80 border border-white/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#5693B0] text-white flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                <Workflow className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#45769B] uppercase tracking-wider block">Dimension 03</span>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                Connected Business Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                When a visitor requests a demo or asks for technical spec sheets, our ecosystem executes actions directly inside your Salesforce, HubSpot, Slack, or database with zero human delay.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500">
              API Mesh • CRM Webhooks • Automated Orchestration
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. OUR UNCOMPROMISING PRINCIPLES (PRIVACY & SOVEREIGNTY)       */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#58548C] text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient light */}
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#F27C23]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-[#F27C23]" />
              Chapter 04: The Sovereign Mandate
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Your proprietary intelligence is your greatest competitive moat. We keep it 100% sovereign.
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              In an age where public AI companies consume customer data to train public models, Brave Edge guarantees absolute isolation. We deploy on-premise or isolated dedicated virtual private clouds with zero third-party data leakage, rigorous role-based access control, and complete data sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Lock className="w-5 h-5 text-orange-400 mb-2" />
                <h4 className="text-xs font-bold text-white uppercase">Zero Data Leakage</h4>
                <p className="text-[11px] text-neutral-400 mt-1">Your business data is never used to train public third-party foundational models.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Cpu className="w-5 h-5 text-purple-400 mb-2" />
                <h4 className="text-xs font-bold text-white uppercase">On-Premise Ready</h4>
                <p className="text-[11px] text-neutral-400 mt-1">Deployable within your own AWS, Azure, GCP, or private sovereign cloud infrastructure.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold text-white uppercase">Audit-Proof Security</h4>
                <p className="text-[11px] text-neutral-400 mt-1">Built to satisfy enterprise SOC2, GDPR, and strict financial compliance standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. CALL TO ACTION: THE FUTURE STARTS TODAY                    */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#F27C23] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Join the Next Era of the Web
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Stop building static pages. <br className="hidden sm:inline" />
            Start building your{' '}
            <span className="bg-gradient-to-r from-[#F27C23] via-[#E75038] to-[#58548C] bg-clip-text text-transparent">
              Intelligence Moat
            </span>
            .
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Whether you are preparing for a total enterprise digital transformation or want to bring your company's tacit knowledge to your existing web surface, Brave Edge is ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateContact) onNavigateContact();
                else window.location.hash = '#contact';
              }}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F27C23] via-[#EB893D] to-[#58548C] hover:opacity-95 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-orange-500/20 transition-all duration-300 group cursor-pointer"
            >
              <span>Schedule an Intelligence Briefing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 border border-neutral-300 px-6 py-4 rounded-2xl text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>Explore Interactive Home</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. INTEGRATED WEBSITE FOOTER BAR                              */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full">
        <WebsiteFooterBar
          onNavigate={(view) => {
            if (view === 'home') onNavigateHome();
            else if (view === 'services' && onNavigateServices) onNavigateServices();
            else if (view === 'solutions' && onNavigateSolutions) onNavigateSolutions();
            else if (view === 'use-cases' && onNavigateUseCases) onNavigateUseCases();
          }}
        />
      </div>

    </div>
  );
};

export default AboutPage;
