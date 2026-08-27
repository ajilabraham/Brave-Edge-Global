import React, { useEffect } from 'react';
import {
  Network,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ArrowLeft,
  Workflow,
  Zap
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface ConnectedEcosystemsPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
  onNavigatePillar?: (pillar: 'intelligent-websites' | 'contextual-ai' | 'connected-ecosystems') => void;
}

export const ConnectedEcosystemsPage: React.FC<ConnectedEcosystemsPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigateSolutions,
  onNavigateUseCases,
  onNavigatePillar
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-sky-100 selection:text-sky-900 pt-24 pb-0">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION & BREADCRUMBS                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        
        {/* Back navigation breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/80 shadow-2xs hover:shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-medium text-neutral-600">Core Pillars</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-[#45769B]">Connected Ecosystems</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50/90 border border-sky-200/80 text-[#45769B] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
            <Network className="w-3.5 h-3.5" />
            <span>PILLAR 03 — SYSTEM ORCHESTRATION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.12]">
            Connecting frontend intelligence to your <span className="text-[#45769B]">living enterprise mesh</span>.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Your website should never operate as an isolated silo. Brave Edge connects your customer-facing digital presence with your ERP, CRM, warehouse inventory, logistics APIs, and communication hubs into an event-driven, real-time nervous system.
          </p>

          {/* Explore Pillars Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Explore Pillars:</span>
            <button
              onClick={() => onNavigatePillar ? onNavigatePillar('intelligent-websites') : onNavigateServices && onNavigateServices()}
              className="px-3 py-1 rounded-full bg-white/80 hover:bg-neutral-100 text-neutral-600 text-xs font-semibold border border-neutral-200/80 transition-colors cursor-pointer"
            >
              1. Intelligent Websites
            </button>
            <button
              onClick={() => onNavigatePillar ? onNavigatePillar('contextual-ai') : onNavigateSolutions && onNavigateSolutions()}
              className="px-3 py-1 rounded-full bg-white/80 hover:bg-neutral-100 text-neutral-600 text-xs font-semibold border border-neutral-200/80 transition-colors cursor-pointer"
            >
              2. Contextual AI
            </button>
            <button
              className="px-3 py-1 rounded-full bg-sky-100/80 text-[#45769B] text-xs font-bold border border-sky-300 shadow-2xs cursor-default"
            >
              3. Connected Ecosystems
            </button>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. THE 3 CORE CAPABILITY CARDS                                */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        
        {/* Capability 01: Data & System Integration */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-[#45769B] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>CAPABILITY 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Data & System Integration
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Eliminate manual copy-pasting between disconnected tools. We deploy robust, sub-100ms API connectors that sync your website in real-time with Salesforce, HubSpot, SAP, custom SQL/PostgreSQL databases, and third-party logistics or financial gateways.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Bi-directional real-time data sync with sub-100ms latency</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Standardized connectors for CRM, ERP, billing, and logistics platforms</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Automated error detection, retry queues, and deterministic rollback logging</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-500/10 via-teal-500/5 to-white p-6 rounded-2xl border border-sky-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability is implemented in our solutions:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('system-connectors')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-sky-50/50 border border-neutral-200/80 hover:border-sky-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                    System Connectors
                  </div>
                  <div className="text-[11px] text-neutral-500">APIs, Webhooks & Data Pipelines</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateUseCases && onNavigateUseCases('crossborder-logistics-maritime')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-sky-50/50 border border-neutral-200/80 hover:border-sky-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                    Logistics & Maritime Use Case
                  </div>
                  <div className="text-[11px] text-neutral-500">Port & freight systems sync in Gulf of Finland</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Capability 02: Connected Workflows */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-[#45769B] text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>CAPABILITY 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Connected Workflows
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              When a visitor initiates an inquiry, trigger multi-step autonomous chains across your organization. Check real-time production capacity in your factory ERP, calculate delivery windows from your freight carrier, generate a signed PDF quote, and notify the designated account executive in Slack or Microsoft Teams.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Instantaneous event routing from web micro-actions to back-office teams</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Automated multi-system reconciliation without human intervention</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Real-time webhook notifications for Slack, Teams, and email</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-500/10 via-teal-500/5 to-white p-6 rounded-2xl border border-sky-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability connects to our solutions:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('ai-operations-automation')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-sky-50/50 border border-neutral-200/80 hover:border-sky-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                    AI Operations & Automation
                  </div>
                  <div className="text-[11px] text-neutral-500">Autonomous workflow orchestration</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateServices && onNavigateServices('web-applications')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-sky-50/50 border border-neutral-200/80 hover:border-sky-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                    Web Applications
                  </div>
                  <div className="text-[11px] text-neutral-500">Custom portals & operational dashboards</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Capability 03: Intelligent Business Layer */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-[#45769B] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPABILITY 03</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Intelligent Business Layer
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Instead of fragile point-to-point scripts that break every time an API updates, Brave Edge establishes an unified enterprise abstraction layer. Your public website, partner portal, vendor dashboard, and internal tooling all tap into one cohesive data layer with universal security policies.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Single source of truth across customer portals and internal tools</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Role-based access control (RBAC) with European data residency</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0" />
                <span>Future-proof architecture allowing new SaaS tools to plug in instantly</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-500/10 via-teal-500/5 to-white p-6 rounded-2xl border border-sky-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability connects to our services:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateServices && onNavigateServices('security-privacy')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-sky-50/50 border border-neutral-200/80 hover:border-sky-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                    Security & Privacy
                  </div>
                  <div className="text-[11px] text-neutral-500">Sovereign enterprise infrastructure</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('knowledge-consolidation')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-sky-50/50 border border-neutral-200/80 hover:border-sky-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors">
                    Knowledge Consolidation
                  </div>
                  <div className="text-[11px] text-neutral-500">Unified data lake & knowledge graphs</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. BOTTOM CALL TO ACTION BANNER                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#3A6B88] to-[#2B4F66] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Unify your business operations.
            </h3>
            <p className="text-sm text-sky-100 leading-relaxed font-normal">
              Discover how Connected Ecosystems eliminate operational silos and orchestrate continuous business growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigateSolutions && onNavigateSolutions('system-connectors')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-[#3A6B88] hover:bg-sky-50 text-xs font-bold shadow-md transition-all text-center cursor-pointer"
            >
              Explore System Connectors
            </button>
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/30 text-white text-xs font-bold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Return Home</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. INTEGRATED FOOTER                                          */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full">
        <WebsiteFooterBar
          onNavigate={(view) => {
            if (view === 'home') onNavigateHome();
            else if (view === 'about' && onNavigateAbout) onNavigateAbout();
            else if (view === 'services' && onNavigateServices) onNavigateServices();
            else if (view === 'solutions' && onNavigateSolutions) onNavigateSolutions();
            else if (view === 'use-cases' && onNavigateUseCases) onNavigateUseCases();
          }}
        />
      </div>

    </div>
  );
};

export default ConnectedEcosystemsPage;
