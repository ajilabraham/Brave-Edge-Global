import React, { useEffect } from 'react';
import {
  Database,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Bot,
  ArrowLeft,
  Workflow
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface ContextualAiPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
  onNavigatePillar?: (pillar: 'intelligent-websites' | 'contextual-ai' | 'connected-ecosystems') => void;
  onNavigateContact?: () => void;
}

export const ContextualAiPage: React.FC<ContextualAiPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigateSolutions,
  onNavigateUseCases,
  onNavigatePillar,
  onNavigateContact
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-purple-100 selection:text-purple-900 pt-24 pb-0">
      
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
          <span className="text-xs font-bold text-[#58548C]">Contextual AI</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 text-[#58548C] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
            <Database className="w-3.5 h-3.5" />
            <span>PILLAR 02 — COGNITIVE ENTERPRISE CORE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.12]">
            Grounding AI in your <span className="text-[#58548C]">institutional memory</span> and certified facts.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Public LLMs hallucinate because they don't know your products, pricing models, internal policies, or regulatory constraints. Brave Edge ingests and structures your private enterprise documentation into a deterministic, sovereign intelligence layer that answers with 100% accuracy.
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
              className="px-3 py-1 rounded-full bg-purple-100/80 text-[#58548C] text-xs font-bold border border-purple-300 shadow-2xs cursor-default"
            >
              2. Contextual AI
            </button>
            <button
              onClick={() => onNavigatePillar ? onNavigatePillar('connected-ecosystems') : onNavigateSolutions && onNavigateSolutions('system-connectors')}
              className="px-3 py-1 rounded-full bg-white/80 hover:bg-neutral-100 text-neutral-600 text-xs font-semibold border border-neutral-200/80 transition-colors cursor-pointer"
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
        
        {/* Capability 01: Business Knowledge AI */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 text-[#58548C] text-xs font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              <span>CAPABILITY 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Business Knowledge AI
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Every company has decades of tacit knowledge trapped in scattered PDFs, Confluence workspaces, Notion databases, ERP schemas, and product manuals. We ingest and normalize this unstructured data into high-dimensional vector spaces and knowledge graphs, enabling instant factual retrieval with exact source attribution.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Multi-format ingestion: PDFs, spreadsheets, CAD notes, internal wikis</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Deterministic citations: every AI answer links directly to verified source files</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Automatic re-indexing as documents are updated or revised</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-white p-6 rounded-2xl border border-purple-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability is implemented in our solutions:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('knowledge-consolidation')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-purple-50/50 border border-neutral-200/80 hover:border-purple-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                    Knowledge Consolidation
                  </div>
                  <div className="text-[11px] text-neutral-500">Unify enterprise docs & databases</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateUseCases && onNavigateUseCases('professional-financial-services')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-purple-50/50 border border-neutral-200/80 hover:border-purple-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                    Professional Advisory Use Case
                  </div>
                  <div className="text-[11px] text-neutral-500">Sovereign intake in Helsinki & Tallinn</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Capability 02: AI Agents & Assistants */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 text-[#58548C] text-xs font-bold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" />
              <span>CAPABILITY 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              AI Agents & Assistants
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Rather than generic chatbots with empty pleasantries, we engineer domain-specialized autonomous agents. These agents act as digital subject-matter experts—guiding technical buyers through complex engineering specs, performing initial legal intake, and verifying compliance credentials without human latency.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Strict system boundaries preventing off-topic or hallucinated answers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Human-in-the-loop escalation triggers for high-stakes decision points</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Full audit logging satisfying GDPR and FIN-FSA European privacy laws</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-white p-6 rounded-2xl border border-purple-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability connects to our services:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateServices && onNavigateServices('ai-agent-integration')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-purple-50/50 border border-neutral-200/80 hover:border-purple-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                    AI Agent Integration
                  </div>
                  <div className="text-[11px] text-neutral-500">Autonomous conversational agents</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('contextual-ai-training')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-purple-50/50 border border-neutral-200/80 hover:border-purple-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                    Contextual AI Training
                  </div>
                  <div className="text-[11px] text-neutral-500">Enterprise fine-tuning & prompt graphs</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Capability 03: Knowledge-Driven Automation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 text-[#58548C] text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>CAPABILITY 03</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Knowledge-Driven Automation
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Conversation without action is useless. Knowledge-Driven Automation bridges intelligence with execution: when a customer specifies their parameters, the AI extracts certified facts, generates customized proposals, triggers compliance screening, and passes validated records into your ERP or CRM.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Automated RFQ generation from natural language chat inputs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Instant contract validation & standard NDA drafting</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0" />
                <span>Continuous feedback loops improving accuracy over time</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-white p-6 rounded-2xl border border-purple-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability connects to our solutions:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('ai-operations-automation')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-purple-50/50 border border-neutral-200/80 hover:border-purple-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                    AI Operations & Automation
                  </div>
                  <div className="text-[11px] text-neutral-500">Autonomous workflow orchestration</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('system-connectors')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-purple-50/50 border border-neutral-200/80 hover:border-purple-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors">
                    System Connectors
                  </div>
                  <div className="text-[11px] text-neutral-500">Fast ERP & CRM integrations</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. BOTTOM CALL TO ACTION BANNER                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#58548C] to-[#433E75] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Unlock your enterprise knowledge.
            </h3>
            <p className="text-sm text-purple-100 leading-relaxed font-normal">
              Schedule an architecture discovery session to see how Contextual AI can turn your scattered documentation into certified, revenue-driving intelligence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigateSolutions && onNavigateSolutions()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-[#58548C] hover:bg-purple-50 text-xs font-bold shadow-md transition-all text-center cursor-pointer"
            >
              Explore All Solutions
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
            else if (view === 'contact' && onNavigateContact) onNavigateContact();
          }}
        />
      </div>

    </div>
  );
};

export default ContextualAiPage;
