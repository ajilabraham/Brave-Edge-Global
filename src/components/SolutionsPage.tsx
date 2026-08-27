import React, { useEffect } from 'react';
import {
  Bot,
  Database,
  Workflow,
  Zap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Cpu,
  RefreshCw,
  FileText,
  Sliders,
  Share2,
  TrendingUp,
  BrainCircuit,
  MessageSquare,
  ShieldCheck,
  Search,
  Binary
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface SolutionsPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
  activeBookmark?: string;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigateUseCases,
  activeBookmark
}) => {
  // Handle smooth scrolling to bookmarks on mount or hash change
  useEffect(() => {
    const handleScrollToBookmark = () => {
      const hash = activeBookmark || window.location.hash.replace('#', '');
      if (hash && hash !== 'solutions' && hash !== 'about') {
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
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-purple-100 selection:text-purple-900 pt-24 pb-0">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-purple-200/40 via-orange-200/30 to-indigo-200/30 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-xs font-bold uppercase tracking-wider text-[#58548C] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#58548C] animate-pulse" />
            <span>Enterprise Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
            Transform scattered company intelligence into an{' '}
            <span className="bg-gradient-to-r from-[#58548C] via-[#7B4699] via-[#E75038] to-[#F27C23] bg-clip-text text-transparent">
              Autonomous Operating Engine
            </span>
            .
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Break down departmental silos, capture institutional memory, connect disconnected APIs, and train your workforce on domain-specific AI models tailored to your exact business context.
          </p>

          {/* QUICK-JUMP STICKY-FRIENDLY BOOKMARK BAR */}
          <div className="pt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Explore Our 4 Core Solutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
              {/* Pill 1 */}
              <button
                onClick={() => scrollToSection('ai-operations-automation')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-purple-50 border border-neutral-200 hover:border-purple-300 text-xs font-bold text-neutral-800 hover:text-[#58548C] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#58548C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-3 h-3" />
                </div>
                <span>AI Operations & Automation</span>
              </button>

              {/* Pill 2 */}
              <button
                onClick={() => scrollToSection('knowledge-consolidation')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-orange-50 border border-neutral-200 hover:border-orange-300 text-xs font-bold text-neutral-800 hover:text-[#F27C23] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F27C23] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-3 h-3" />
                </div>
                <span>Knowledge Consolidation</span>
              </button>

              {/* Pill 3 */}
              <button
                onClick={() => scrollToSection('system-connectors')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-sky-50 border border-neutral-200 hover:border-sky-300 text-xs font-bold text-neutral-800 hover:text-[#45769B] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-sky-100 text-[#45769B] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Workflow className="w-3 h-3" />
                </div>
                <span>System Connectors</span>
              </button>

              {/* Pill 4 */}
              <button
                onClick={() => scrollToSection('contextual-ai-training')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-amber-50 border border-neutral-200 hover:border-amber-300 text-xs font-bold text-neutral-800 hover:text-[#F19638] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-amber-100 text-[#F19638] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-3 h-3" />
                </div>
                <span>Contextual AI Training</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. DETAILED SOLUTION SECTIONS                                 */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-16 lg:space-y-24 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">

        {/* ============================================================= */}
        {/* SOLUTION 1: AI OPERATIONS & AUTOMATION                        */}
        {/* ============================================================= */}
        <section
          id="ai-operations-automation"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Purple Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
                <Bot className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#58548C] uppercase">
                  Solution 01 • Autonomous Operations
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  AI Operations & Automation
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Autonomous agents that handle briefings, updates, triage, and daily operational busywork.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#58548C] hover:bg-[#474378] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-purple-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Automate Operations</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                Eliminate Operational Toil with Context-Aware Multi-Agent Loops
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Knowledge workers spend up to 40% of their week compiling repetitive status updates, triaging incoming requests across Slack and email, and manually reconciling data between disparate tools.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We build autonomous multi-agent pipelines that continuously monitor operational state, generate contextual executive briefings, route urgent exceptions to human stakeholders, and execute multi-step workflows without supervision.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <FileText className="w-4 h-4" />
                    <span>Automated Executive Briefings</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Synthesizes cross-departmental metrics, Jira tickets, and CRM updates into morning summaries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <RefreshCw className="w-4 h-4" />
                    <span>Multi-Agent Triage Loops</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Autonomous agents classify customer inquiries, draft responses, and trigger fulfillment tickets.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <Sliders className="w-4 h-4" />
                    <span>Exception Handling & Alerts</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Detects SLA breaches and anomalies, escalating critical issues to engineers via Slack/PagerDuty.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <TrendingUp className="w-4 h-4" />
                    <span>Autonomous Repetitive Tasks</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Invoice matching, vendor verification, contract checks, and routine database updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix (Cols 8-12) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                  Operational Impact & Tech
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Agentic Loops
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Autonomous LangGraph Orchestration</strong>
                    <span className="text-neutral-400">Stateful multi-agent DAGs with human-in-the-loop gates.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Proactive Daily Intelligence Digests</strong>
                    <span className="text-neutral-400">Custom Slack bots & email summaries delivered on schedule.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Audit Logs & Replay Debugging</strong>
                    <span className="text-neutral-400">Step-by-step reasoning traces for full accountability.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Instant Escalation Webhooks</strong>
                    <span className="text-neutral-400">PagerDuty, OpsGenie, Jira Service Management connectors.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Time Saved: 15+ Hours/Emp/Wk</span>
                <span className="text-purple-400 font-bold">Autonomous ROI</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================= */}
        {/* SOLUTION 2: KNOWLEDGE CONSOLIDATION                           */}
        {/* ============================================================= */}
        <section
          id="knowledge-consolidation"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Orange Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shadow-lg shadow-orange-500/25 shrink-0">
                <Database className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F27C23] uppercase">
                  Solution 02 • Institutional Memory
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Knowledge Consolidation
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Capture institutional memory, expertise, documents, and historical decisions into one store.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F27C23] hover:bg-[#E06B12] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Consolidate Knowledge</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                Turn Fragmented Docs into a Living High-Dimensional Knowledge Graph
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                When key founders or executives leave a company, critical institutional knowledge evaporates with them. Documents scatter across Google Drive folders, Notion workspaces, Confluence pages, and forgotten email threads.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We ingest, parse, and semantically index your company's entire historical knowledge base into an enterprise vector graph that understands acronyms, tacit decisions, engineering specifications, and organizational context.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <Search className="w-4 h-4" />
                    <span>Cross-Silo Neural Search</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Natural language querying across PDFs, Slack archives, Google Docs, Notion, and codebases.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <Binary className="w-4 h-4" />
                    <span>Living Knowledge Graph</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Maps relationships between projects, clients, architecture decisions, and teams.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Role-Based Data Partitioning</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Ensures employees only query documents matching their security clearance level.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <RefreshCw className="w-4 h-4" />
                    <span>Automated Continuous Sync</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Real-time webhooks update embeddings the instant a new document is written or edited.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-orange-300 uppercase tracking-wider">
                  Architecture & Ingestion
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Vector Stores
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Multi-Format Document Parsing Pipeline</strong>
                    <span className="text-neutral-400">PDF, DOCX, Markdown, OCR scanned files, and video transcripts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Semantic Chunking & Metadata Tagging</strong>
                    <span className="text-neutral-400">Preserves tables, hierarchy, dates, and author attribution.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Enterprise Vector Indexing</strong>
                    <span className="text-neutral-400">Pinecone, Qdrant, or pgvector hosted in your cloud tenant.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Interactive Knowledge Explorer UI</strong>
                    <span className="text-neutral-400">Clean web interface for instant cross-company Q&A.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Ingestion Rate: 100k+ Pages/Hr</span>
                <span className="text-orange-400 font-bold">100% Grounded</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================= */}
        {/* SOLUTION 3: SYSTEM CONNECTORS                                 */}
        {/* ============================================================= */}
        <section
          id="system-connectors"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Sky Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#5693B0] text-white flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0">
                <Workflow className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#45769B] uppercase">
                  Solution 03 • Universal Integration
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  System Connectors
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Connect Slack, Email, Notion, CRM, databases, and custom APIs into one active context engine.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#45769B] hover:bg-[#386282] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Connect Systems</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                A Unified Event Mesh for Bi-Directional Corporate Data Flow
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Most companies operate in software silos: sales lives in Salesforce, support in Zendesk, engineering in GitHub, and internal chats in Slack. Data rarely moves between them without brittle Zapier hacks or manual data entry.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our System Connectors provide an enterprise-grade middleware fabric that unifies events across your tech stack. When an event happens in one system, our context engine automatically triggers state updates, document generation, and AI actions across all others.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <Share2 className="w-4 h-4" />
                    <span>Bi-Directional API Mesh</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Two-way synchronization between CRMs, ERPs, databases, and custom REST/GraphQL endpoints.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <MessageSquare className="w-4 h-4" />
                    <span>Slack & Teams Hub</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Execute complex database lookups and approvals directly within chat channels.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <Cpu className="w-4 h-4" />
                    <span>Event-Driven Webhooks</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Sub-100ms event processing with automatic retry queues and dead-letter handling.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Secret & Token Rotation</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Automated OAuth token refresh and zero hard-coded credential architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider">
                  Supported Ecosystems
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Pre-Built
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Productivity & Docs</strong>
                    <span className="text-neutral-400">Slack, Microsoft Teams, Notion, Google Workspace, Confluence.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">CRM & Revenue Operations</strong>
                    <span className="text-neutral-400">Salesforce, HubSpot, Stripe, QuickBooks, NetSuite.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Databases & Warehouses</strong>
                    <span className="text-neutral-400">PostgreSQL, Snowflake, BigQuery, MongoDB, Redis.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Custom Enterprise Adapters</strong>
                    <span className="text-neutral-400">Bespoke gRPC/REST connectors for legacy on-prem systems.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Zero-Data Loss Architecture</span>
                <span className="text-sky-400 font-bold">100+ Connectors</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================= */}
        {/* SOLUTION 4: CONTEXTUAL AI TRAINING                            */}
        {/* ============================================================= */}
        <section
          id="contextual-ai-training"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Amber Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F19638] to-[#EB893D] text-white flex items-center justify-center shadow-lg shadow-amber-500/25 shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F19638] uppercase">
                  Solution 04 • Workforce Enablement
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Contextual AI Training
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Train team workflows on frontier AI models tailored specifically to your company context.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F19638] hover:bg-[#E08628] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-amber-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Train Your Workforce</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                From Generic Prompting to High-Leverage Domain-Specific Workflows
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Giving employees access to generic ChatGPT without domain context produces shallow results, hallucinations, and wasted hours. Real enterprise leverage happens when frontier models are tailored to your company's tone of voice, terminology, and standard operating procedures.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We design custom prompt engineering frameworks, configure low-rank adaptations (LoRA), and provide hands-on workshops that elevate your sales, legal, engineering, and support teams into high-velocity AI practitioners.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F19638]">
                    <BrainCircuit className="w-4 h-4" />
                    <span>Domain-Specific Fine-Tuning</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Fine-tune model weights on your technical specifications, legal language, and brand style.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F19638]">
                    <FileText className="w-4 h-4" />
                    <span>Custom System Prompts</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Curated prompt libraries tailored to each department's daily operational deliverables.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F19638]">
                    <UsersIcon className="w-4 h-4" />
                    <span>Team Enablement Workshops</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Live interactive training sessions for executives, product managers, and operations staff.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F19638]">
                    <TrendingUp className="w-4 h-4" />
                    <span>Productivity Metric Tracking</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Measure workflow throughput increases, response time drops, and output quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                  Deliverables & Program
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Enterprise-Wide
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F19638] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Custom Corporate AI Playbook</strong>
                    <span className="text-neutral-400">Step-by-step SOPs, prompt templates, and best practices.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F19638] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Department-by-Department Bootcamps</strong>
                    <span className="text-neutral-400">Tailored workshops for Sales, Eng, Legal, and HR.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F19638] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Continuous Evaluation Guardrails</strong>
                    <span className="text-neutral-400">Quality scorecards to audit accuracy and prevent hallucinations.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F19638] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Quarterly Model Refresh</strong>
                    <span className="text-neutral-400">Continuous updating as frontier foundation models advance.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Program Duration: 2–4 Weeks</span>
                <span className="text-amber-400 font-bold">100% Custom Tailored</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. THE 3-STEP EXECUTION MODEL: CAPTURE → CONNECT → ACTIVATE    */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-850 to-[#58548C] text-white shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Layers className="w-4 h-4 text-purple-300" />
              The Architecture Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Capture → Connect → Activate
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              How we construct a unified, resilient intelligence layer around your existing business tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Capture */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#F27C23] text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Capture</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Consolidate scattered documents, tacit leadership expertise, pitch decks, and internal notes into a secure neural knowledge graph.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#F27C23] font-bold">
                Knowledge Consolidation
              </div>
            </div>

            {/* Step 2: Connect */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#45769B] text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Connect</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Deploy bidirectional API mesh connectors between Slack, Email, CRM, ERP, and databases for real-time context streaming.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#45769B] font-bold">
                System Connectors
              </div>
            </div>

            {/* Step 3: Activate */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#58548C] text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Activate</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Launch autonomous operational agents, multi-agent triage loops, and train your workforce on domain-tailored workflows.
              </p>
              <div className="pt-2 text-[11px] font-mono text-purple-300 font-bold">
                AI Ops & Training
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F27C23] via-[#EB893D] to-[#58548C] hover:opacity-95 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-orange-500/20 transition-all duration-300 group"
            >
              <span>Request Architecture Blueprint</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-2xl text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>Return to Home Experience</span>
              <ArrowUpRight className="w-4 h-4 text-orange-300" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. INTEGRATED WEBSITE FOOTER BAR                              */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full">
        <WebsiteFooterBar
          onNavigate={(view) => {
            if (view === 'home') onNavigateHome();
            else if (view === 'about' && onNavigateAbout) onNavigateAbout();
            else if (view === 'services' && onNavigateServices) onNavigateServices();
            else if (view === 'use-cases' && onNavigateUseCases) onNavigateUseCases();
          }}
        />
      </div>

    </div>
  );
};

// Helper icon component for Users icon
const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default SolutionsPage;
