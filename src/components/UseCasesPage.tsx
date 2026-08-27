import React, { useEffect } from 'react';
import {
  Factory,
  Briefcase,
  Ship,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Globe2,
  Shield,
  Bot,
  Database,
  Workflow,
  Lock,
  MapPin,
  Cpu,
  Scale
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface UseCasesPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  activeBookmark?: string;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigateSolutions,
  activeBookmark
}) => {
  // Handle smooth scrolling to bookmarks on mount or hash change with scrollIntoView
  useEffect(() => {
    const handleScrollToBookmark = () => {
      const hash = activeBookmark || window.location.hash.replace('#', '');
      if (hash && hash !== 'use-cases' && hash !== 'about') {
        let attempts = 0;
        const tryScroll = () => {
          const targetEl = document.getElementById(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else if (attempts < 20) {
            attempts++;
            setTimeout(tryScroll, 40);
          }
        };
        setTimeout(tryScroll, 20);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleScrollToBookmark();
    window.addEventListener('hashchange', handleScrollToBookmark);
    return () => window.removeEventListener('hashchange', handleScrollToBookmark);
  }, [activeBookmark]);

  const scrollToSection = (id: string) => {
    window.location.hash = `#${id}`;
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-orange-100 selection:text-orange-900 pt-24 pb-0">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER: NORDIC FOCUS                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-sky-200/40 via-purple-200/30 to-orange-200/30 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-xs font-bold uppercase tracking-wider text-[#45769B] backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#F27C23]" />
            <span>Nordic & Baltic SME Transformation • Finland & Estonia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
            Empowering Nordic SMEs with{' '}
            <span className="bg-gradient-to-r from-[#45769B] via-[#58548C] via-[#E06B12] to-[#F27C23] bg-clip-text text-transparent">
              Sovereign, AI-Native Advantage
            </span>
            .
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Small and medium enterprises in Finland and Estonia build world-class products and services. We replace their legacy static brochure websites with intelligent, context-aware web ecosystems that convert global buyers and automate operational busywork.
          </p>

          {/* QUICK-JUMP STICKY-FRIENDLY BOOKMARK BAR */}
          <div className="pt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Explore Industry Use Cases
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
              {/* Pill 1 */}
              <button
                onClick={() => scrollToSection('industrial-cleantech-manufacturing')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 text-xs font-bold text-neutral-800 hover:text-emerald-700 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Factory className="w-3 h-3" />
                </div>
                <span>CleanTech & Industrial Manufacturing</span>
              </button>

              {/* Pill 2 */}
              <button
                onClick={() => scrollToSection('professional-financial-services')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-purple-50 border border-neutral-200 hover:border-purple-300 text-xs font-bold text-neutral-800 hover:text-[#58548C] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#58548C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-3 h-3" />
                </div>
                <span>Professional & Financial Advisory</span>
              </button>

              {/* Pill 3 */}
              <button
                onClick={() => scrollToSection('crossborder-logistics-maritime')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-sky-50 border border-neutral-200 hover:border-sky-300 text-xs font-bold text-neutral-800 hover:text-[#45769B] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-sky-100 text-[#45769B] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Ship className="w-3 h-3" />
                </div>
                <span>Cross-Border Logistics & Maritime</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. REGIONAL CONTEXT BANNER: FINLAND & ESTONIA FOCUS           */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-white/80 shadow-md backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#58548C] text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              🇫🇮 🇪🇪
            </div>
            <div>
              <h3 className="text-base font-extrabold text-neutral-900">
                The Nordic-Baltic Digital Transformation Challenge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                While Finland and Estonia are renowned for tech innovation, hundreds of mid-market B2B companies still rely on 5-to-10-year-old WordPress sites with dead-end contact forms and manual email workflows.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-mono font-bold text-[#F27C23] block">100% Sovereign</span>
              <span className="text-[11px] text-neutral-500">EU AI Act & GDPR Ready</span>
            </div>
            <div className="w-px h-8 bg-neutral-200 hidden sm:block" />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-all"
            >
              <span>Nordic Audit</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. DETAILED INDUSTRY USE CASE SECTIONS                        */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-16 lg:space-y-24 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">

        {/* ============================================================= */}
        {/* USE CASE 1: CLEANTECH & INDUSTRIAL MANUFACTURING SMES        */}
        {/* ============================================================= */}
        <section
          id="industrial-cleantech-manufacturing"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 shrink-0">
                <Factory className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase">
                  Use Case 01 • Nordic Engineering & Green Tech
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  CleanTech & Industrial Manufacturing SMEs
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Targeting precision machinery, forestry automation, energy storage, and industrial IoT firms across Tampere, Oulu, Tallinn, and Tartu.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Modernize Manufacturing Web</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Core Story & Transformation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            
            {/* Left Narrative (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                The Dilemma: World-Class Engineering Trapped in Static 2016 Brochure Sites
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Finnish and Estonian industrial manufacturers export specialized machinery, high-voltage battery modules, and precision sensors globally. Yet their web footprint often consists of static product tables, clunky 50-page downloadable PDF manuals, and generic "Contact Sales" forms that take days to receive a response.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                International buyers in Germany, Japan, and the US expect instant answers on dimensions, compliance certificates (CE, ISO, RoHS), power ratings, and distributor pricing. When your website cannot answer in seconds, deals slip to competitors.
              </p>

              {/* Before vs. After Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Legacy Web */}
                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                    <XCircle className="w-4 h-4" />
                    <span>Conventional Agency Site</span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                    <li>Static PDF spec sheets buried in submenus</li>
                    <li>Manual email quoting taking 48–72 hours</li>
                    <li>Single language or clunky Google Translate</li>
                    <li>Zero buyer intent detection or CRM syncing</li>
                  </ul>
                </div>

                {/* Brave Edge Web */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Brave Edge AI-Native Experience</span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                    <li>Interactive 3D product view & customizer</li>
                    <li>24/7 Multilingual AI Sales Agent (FI, EE, EN, DE)</li>
                    <li>Instant spec querying & automated RFQ generation</li>
                    <li>Bidirectional CRM sync with HubSpot & Salesforce</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Architecture & Solution Bundle (Cols 8-12) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-5 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Brave Edge Solutions Bundle
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Industrial Package
                </span>
              </div>

              {/* Solution Mapping */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Globe2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Modern Corporate Web Redesign</strong>
                    <span className="text-neutral-400">Tactile 60fps physics, interactive product configurator, sub-second LCP.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Bot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Conversational AI Technical Sales Agent</strong>
                    <span className="text-neutral-400">Ingests CAD specs, PDFs, and ISO certifications with zero hallucinations.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Workflow className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">System Connectors for ERP & CRM</strong>
                    <span className="text-neutral-400">Instant routing of qualified distributor RFQs directly to regional sales leads.</span>
                  </div>
                </div>
              </div>

              {/* Measurable ROI */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-lg font-black text-emerald-400 block">+48%</span>
                  <span className="text-[10px] text-neutral-400">Global RFQ Inquiries</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-lg font-black text-emerald-400 block">&lt; 30s</span>
                  <span className="text-[10px] text-neutral-400">Lead Response Time</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ============================================================= */}
        {/* USE CASE 2: PROFESSIONAL & FINANCIAL ADVISORY SMES            */}
        {/* ============================================================= */}
        <section
          id="professional-financial-services"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
                <Briefcase className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#58548C] uppercase">
                  Use Case 02 • High-Value Advisory & Fintech
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Professional & Financial Advisory SMEs
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Targeting boutique legal practices, wealth managers, M&A advisors, and tech scaleup consulting firms in Helsinki and Tallinn.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#58548C] hover:bg-[#484478] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-purple-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Elevate Advisory Brand</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Core Story & Transformation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                The Dilemma: Premium Retainers Demanded on Cookie-Cutter Agency Portals
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Nordic legal and financial boutique firms charge top-tier advisory fees. Yet their client intake process is burdened with friction: endless email back-and-forth, manual NDA exchanges, disjointed document requests, and generic website layouts that look identical to a hundred other law firms.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Furthermore, financial and legal clients demand absolute confidentiality. Public SaaS AI tools that leak data to third-party model trainers are an immediate compliance violation under strict Finnish Financial Supervisory Authority (FIN-FSA) and Estonian regulations.
              </p>

              {/* Before vs. After Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Legacy Web */}
                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                    <XCircle className="w-4 h-4" />
                    <span>Traditional Firm Presence</span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                    <li>Static partner bios with generic email links</li>
                    <li>Manual intake questionnaires taking hours</li>
                    <li>Fragmented internal precedents and case archives</li>
                    <li>Third-party data leakage risks with public AI</li>
                  </ul>
                </div>

                {/* Brave Edge Web */}
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Brave Edge Sovereign Portal</span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                    <li>Editorial typography & frosted glass aesthetic</li>
                    <li>Context-aware AI intake agent pre-qualifying briefs</li>
                    <li>Sovereign client document vault (100% GDPR compliant)</li>
                    <li>Knowledge Consolidation indexing historical case lore</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Architecture & Solution Bundle */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-5 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                  Brave Edge Solutions Bundle
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Advisory Package
                </span>
              </div>

              {/* Solution Mapping */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Sovereign Data & Privacy Architecture</strong>
                    <span className="text-neutral-400">Zero data retention by third parties; dedicated VPC or on-prem deployment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Knowledge Consolidation Engine</strong>
                    <span className="text-neutral-400">Indexes historical memos, precedent filings, and tax rulings into secure graph.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Bot className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Intelligent Client Onboarding Agent</strong>
                    <span className="text-neutral-400">Pre-screens high-net-worth inquiries and prepares partner briefing dossiers.</span>
                  </div>
                </div>
              </div>

              {/* Measurable ROI */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-lg font-black text-purple-300 block">-70%</span>
                  <span className="text-[10px] text-neutral-400">Intake Processing Time</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-lg font-black text-purple-300 block">100%</span>
                  <span className="text-[10px] text-neutral-400">Data Sovereignty</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ============================================================= */}
        {/* USE CASE 3: CROSS-BORDER LOGISTICS & MARITIME SMES            */}
        {/* ============================================================= */}
        <section
          id="crossborder-logistics-maritime"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#5693B0] text-white flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0">
                <Ship className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#45769B] uppercase">
                  Use Case 03 • Baltic Trade & Supply Chain
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Cross-Border Logistics & Maritime SMEs
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Targeting Gulf of Finland freight forwarders, port logistics operators, cold-chain couriers, and Baltic e-commerce distribution hubs.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#45769B] hover:bg-[#386282] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Automate Logistics Web</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Core Story & Transformation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                The Dilemma: 24/7 Cross-Border Freight Inquiries Handled by Overworked Dispatchers
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The Helsinki–Tallinn maritime corridor is among the densest logistics arteries in Northern Europe. Mid-market freight operators manage complex intermodal routes across Finland, Estonia, Sweden, and Poland.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Their customer service desks are constantly bombarded with repetitive inquiries: "Where is container #4829?", "What is the customs clearance fee?", "Can you quote 12 pallets of refrigerated goods from Turku to Tallinn?" Dispatchers spend hours manually checking ERPs and typing emails instead of growing the business.
              </p>

              {/* Before vs. After Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Legacy Web */}
                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                    <XCircle className="w-4 h-4" />
                    <span>Legacy Logistics Portal</span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                    <li>Slow, outdated container tracking lookup pages</li>
                    <li>Phone and email quoting causing hours of delay</li>
                    <li>Disconnected warehouse and fleet management ERPs</li>
                    <li>Limited weekend dispatch support causing missed shipments</li>
                  </ul>
                </div>

                {/* Brave Edge Web */}
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Brave Edge High-Concurrency Engine</span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                    <li>Real-time WebSocket shipment tracking dashboard</li>
                    <li>Instant AI route calculation & automated quoting</li>
                    <li>System Connectors syncing customs & ERP databases</li>
                    <li>24/7 Multilingual Dispatch Bot in Finnish, Estonian, English</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Architecture & Solution Bundle */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-5 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider">
                  Brave Edge Solutions Bundle
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Logistics Package
                </span>
              </div>

              {/* Solution Mapping */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Workflow className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Web Application & Tracking Dashboard</strong>
                    <span className="text-neutral-400">High-concurrency React 19 portal with real-time GPS and manifest updates.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">System Connectors (ERP & Port APIs)</strong>
                    <span className="text-neutral-400">Sub-100ms sync with Port of Helsinki/Tallinn customs and cargo databases.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Bot className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Autonomous Operations Agent</strong>
                    <span className="text-neutral-400">Handles 80% of routine status checks, customs questions, and RFQ triage.</span>
                  </div>
                </div>
              </div>

              {/* Measurable ROI */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-lg font-black text-sky-300 block">-82%</span>
                  <span className="text-[10px] text-neutral-400">Support Ticket Load</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-lg font-black text-sky-300 block">24/7</span>
                  <span className="text-[10px] text-neutral-400">Instant Quoting</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. SOVEREIGN NORDIC BLUEPRINT SECTION                         */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-850 to-[#45769B] text-white shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Scale className="w-4 h-4 text-sky-300" />
              Sovereignty Guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Built for EU AI Act & Nordic Privacy Mandates
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Every Brave Edge solution deployed for Finnish and Estonian SMEs is engineered with sovereign compliance by default.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Lock className="w-5 h-5 text-orange-400 mb-1" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Zero Model Training</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Your proprietary engineering files, customer quotes, and legal drafts are never used to train public models.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <MapPin className="w-5 h-5 text-sky-300 mb-1" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Local EU Data Residency</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                All data, vector embeddings, and compute are hosted within Frankfurt, Helsinki, or Tallinn European data centers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Shield className="w-5 h-5 text-emerald-400 mb-1" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Audit-Proof Transparency</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Full deterministic execution logs satisfying Finnish Tietosuojavaltuutettu and Estonian AKI standards.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F27C23] via-[#EB893D] to-[#45769B] hover:opacity-95 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-orange-500/20 transition-all duration-300 group"
            >
              <span>Schedule a Nordic SME Assessment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-2xl text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>Return to Interactive Home</span>
              <ArrowUpRight className="w-4 h-4 text-sky-300" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. INTEGRATED WEBSITE FOOTER BAR                              */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full">
        <WebsiteFooterBar
          onNavigate={(view) => {
            if (view === 'home') onNavigateHome();
            else if (view === 'about' && onNavigateAbout) onNavigateAbout();
            else if (view === 'services' && onNavigateServices) onNavigateServices();
            else if (view === 'solutions' && onNavigateSolutions) onNavigateSolutions();
          }}
        />
      </div>

    </div>
  );
};

export default UseCasesPage;
