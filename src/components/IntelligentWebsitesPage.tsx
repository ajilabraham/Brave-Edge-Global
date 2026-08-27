import React, { useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  SlidersHorizontal,
  Bot,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface IntelligentWebsitesPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
  onNavigatePillar?: (pillar: 'intelligent-websites' | 'contextual-ai' | 'connected-ecosystems') => void;
  onNavigateContact?: () => void;
}

export const IntelligentWebsitesPage: React.FC<IntelligentWebsitesPageProps> = ({
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
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-orange-100 selection:text-orange-900 pt-24 pb-0">
      
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
          <span className="text-xs font-bold text-[#F27C23]">Intelligent Websites</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/80 text-[#F27C23] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PILLAR 01 — FRONTEND INTELLIGENCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.12]">
            Websites that <span className="text-[#F27C23]">perceive</span>, adapt, and converse in real time.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Conventional websites are static brochures—frozen PDFs on a screen that deliver the exact same generic text to everyone. Brave Edge builds living web applications that understand visitor intent, personalize journeys dynamically, and convert passive clicks into high-conviction business conversations.
          </p>

          {/* Explore Pillars Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Explore Pillars:</span>
            <button
              className="px-3 py-1 rounded-full bg-orange-100/80 text-[#F27C23] text-xs font-bold border border-orange-300 shadow-2xs cursor-default"
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
        
        {/* Capability 01: AI-Driven Personalisation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#F27C23] text-xs font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>CAPABILITY 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              AI-Driven Personalisation
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              When an enterprise buyer visits your site, they shouldn't have to wade through irrelevant consumer marketing. Our intelligence layer evaluates real-time intent cues—such as referral context, industry search queries, and reading depth—to dynamically tailor case studies, metrics, and value propositions to their sector.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Sector-aware hero messaging matching visitor industry</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Dynamic case study prioritization based on procurement intent</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Zero third-party cookies or intrusive tracking pixels</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-white p-6 rounded-2xl border border-orange-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability is implemented in our services & solutions:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateServices && onNavigateServices('modern-corporate-websites')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-orange-50/50 border border-neutral-200/80 hover:border-orange-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                    Modern Corporate Websites
                  </div>
                  <div className="text-[11px] text-neutral-500">Fast, SEO-optimised web presence</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateUseCases && onNavigateUseCases('industrial-cleantech-manufacturing')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-orange-50/50 border border-neutral-200/80 hover:border-orange-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                    CleanTech & Manufacturing Use Case
                  </div>
                  <div className="text-[11px] text-neutral-500">Real-world ROI in Finland & Estonia</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Capability 02: Intelligent Interactions */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#F27C23] text-xs font-bold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" />
              <span>CAPABILITY 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Intelligent Interactions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Instead of forcing visitors to fill out a 10-field contact form and wait 48 hours for a reply, Brave Edge embeds conversational AI agents directly into the interface. Visitors can ask technical specification questions, compare product tiers, configure 3D assets, and receive instantaneous, certified answers.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Sub-second responses to complex product & service queries</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Interactive 3D configurators with real-time price estimation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Seamless handoff to human sales reps when high intent is detected</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-white p-6 rounded-2xl border border-orange-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability connects to our services:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateServices && onNavigateServices('ai-agent-integration')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-orange-50/50 border border-neutral-200/80 hover:border-orange-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                    AI Agent Integration
                  </div>
                  <div className="text-[11px] text-neutral-500">Autonomous website assistants</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('ai-operations-automation')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-orange-50/50 border border-neutral-200/80 hover:border-orange-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                    AI Operations & Automation
                  </div>
                  <div className="text-[11px] text-neutral-500">Autonomous workflow orchestration</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Capability 03: Adaptive Content */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#F27C23] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPABILITY 03</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Adaptive Content
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              A CTO researching security compliance needs architecture diagrams and audit badges. A CFO reviewing budgeting needs clear ROI calculations. Adaptive Content reorganizes layout hierarchy and depth of explanation dynamically so every stakeholder gets precisely what they need without cognitive clutter.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Multi-persona information layering for technical and business readers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Contextual call-to-actions tailored to the visitor's buying stage</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0" />
                <span>Multi-lingual fluency across Finnish, Estonian, Swedish, and English</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-white p-6 rounded-2xl border border-orange-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">DEEP DIVE LINKS</h4>
            <p className="text-xs text-neutral-600">Explore how this capability connects to our solutions:</p>
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateSolutions && onNavigateSolutions('contextual-ai-training')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-orange-50/50 border border-neutral-200/80 hover:border-orange-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                    Contextual AI Training
                  </div>
                  <div className="text-[11px] text-neutral-500">Fine-tuned domain knowledge</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
              <button
                onClick={() => onNavigateServices && onNavigateServices('security-privacy')}
                className="w-full p-3.5 rounded-xl bg-white hover:bg-orange-50/50 border border-neutral-200/80 hover:border-orange-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors">
                    Security & Privacy
                  </div>
                  <div className="text-[11px] text-neutral-500">GDPR & EU AI Act compliance</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. BOTTOM CALL TO ACTION BANNER                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#F27C23] to-[#E06B12] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to modernize your digital presence?
            </h3>
            <p className="text-sm text-orange-100 leading-relaxed font-normal">
              Talk to our technical architects to discover how an intelligent website can elevate your brand and capture qualified global pipeline.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigateServices && onNavigateServices()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-[#F27C23] hover:bg-orange-50 text-xs font-bold shadow-md transition-all text-center cursor-pointer"
            >
              Explore All Services
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

export default IntelligentWebsitesPage;
