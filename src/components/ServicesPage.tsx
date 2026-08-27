import React, { useEffect } from 'react';
import {
  Globe,
  Cpu,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Layers,
  Zap,
  Bot,
  Database,
  Workflow,
  Eye,
  Sliders,
  Server,
  FileCode,
  Gauge,
  KeyRound,
  Network
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
  activeBookmark?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateSolutions,
  onNavigateUseCases,
  activeBookmark
}) => {
  // Handle smooth scrolling to bookmarks on mount or hash change
  useEffect(() => {
    const handleScrollToBookmark = () => {
      const hash = activeBookmark || window.location.hash.replace('#', '');
      if (hash && hash !== 'services' && hash !== 'about') {
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
      {/* 1. HERO HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-orange-200/40 via-purple-200/30 to-sky-200/30 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-xs font-bold uppercase tracking-wider text-[#58548C] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#F27C23] animate-pulse" />
            <span>Brave Edge Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
            Engineering the next generation of{' '}
            <span className="bg-gradient-to-r from-[#F27C23] via-[#E75038] via-[#7B4699] to-[#453E85] bg-clip-text text-transparent">
              Intelligent Digital Systems
            </span>
            .
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto">
            From high-converting corporate flagships and complex enterprise applications to embedded conversational AI avatars and sovereign security, our services turn your web presence into an active intelligence engine.
          </p>

          {/* QUICK-JUMP STICKY-FRIENDLY BOOKMARK BAR */}
          <div className="pt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Explore Our 4 Core Capabilities
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
              {/* Pill 1 */}
              <button
                onClick={() => scrollToSection('modern-corporate-websites')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-orange-50 border border-neutral-200 hover:border-orange-300 text-xs font-bold text-neutral-800 hover:text-[#F27C23] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F27C23] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-3 h-3" />
                </div>
                <span>Modern Corporate Websites</span>
              </button>

              {/* Pill 2 */}
              <button
                onClick={() => scrollToSection('web-applications')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-purple-50 border border-neutral-200 hover:border-purple-300 text-xs font-bold text-neutral-800 hover:text-[#58548C] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#58548C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-3 h-3" />
                </div>
                <span>Web Applications</span>
              </button>

              {/* Pill 3 */}
              <button
                onClick={() => scrollToSection('ai-agent-integration')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-sky-50 border border-neutral-200 hover:border-sky-300 text-xs font-bold text-neutral-800 hover:text-[#45769B] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-sky-100 text-[#45769B] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span>AI Agent Integration</span>
              </button>

              {/* Pill 4 */}
              <button
                onClick={() => scrollToSection('security-privacy')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-rose-50 border border-neutral-200 hover:border-rose-300 text-xs font-bold text-neutral-800 hover:text-[#D2574C] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-rose-100 text-[#D2574C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span>Security & Privacy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. DETAILED SERVICE SECTIONS                                  */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-16 lg:space-y-24 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">

        {/* ============================================================= */}
        {/* SERVICE 1: MODERN CORPORATE WEBSITES                          */}
        {/* ============================================================= */}
        <section
          id="modern-corporate-websites"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Orange Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shadow-lg shadow-orange-500/25 shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F27C23] uppercase">
                  Service 01 • Digital Flagships
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Modern Corporate Websites
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  World-class editorial typography, dynamic micro-interactions, and high-converting responsive layouts.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F27C23] hover:bg-[#E06B12] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Build Corporate Website</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                Beyond Static Brochures: Editorial Craft Meets Conversion Architecture
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Corporate websites are often plagued by bland templates, rigid stock photography, and monotonous layouts. We treat your digital surface as an editorial masterpiece: combining refined typography, bespoke aesthetic grids, and silky 60fps micro-interactions with deep technical optimization.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every page is engineered for rapid time-to-value, establishing immediate brand prestige while intelligently guiding high-intent visitors toward conversion pathways.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <Eye className="w-4 h-4" />
                    <span>Editorial Typography</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Bespoke typographic hierarchies and responsive proportions that command authority.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <Zap className="w-4 h-4" />
                    <span>60fps Micro-Interactions</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Tactile hover states, physics-based scroll transitions, and fluid dynamic animations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <Gauge className="w-4 h-4" />
                    <span>Core Web Vitals 100</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Sub-second load times, CLS 0, and edge-cached CDN asset delivery worldwide.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F27C23]">
                    <Sliders className="w-4 h-4" />
                    <span>Adaptive Personalization</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Dynamic headline variations and case studies matched to visitor industry context.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix (Cols 8-12) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-orange-300 uppercase tracking-wider">
                  Deliverables & Technology
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Full-Cycle
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Custom Figma Design System & Tokens</strong>
                    <span className="text-neutral-400">Atomic component library, iconography & design tokens.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Headless CMS Integration</strong>
                    <span className="text-neutral-400">Sanity, Strapi, or custom markdown content authoring.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Enterprise SEO & Schema Engine</strong>
                    <span className="text-neutral-400">OpenGraph tags, JSON-LD schemas, and dynamic sitemaps.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Global Edge CDN Architecture</strong>
                    <span className="text-neutral-400">Automated CI/CD with Cloudflare / Vercel Edge compute.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Typical Delivery: 3–6 Weeks</span>
                <span className="text-orange-400 font-bold">100% Bespoke</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================= */}
        {/* SERVICE 2: WEB APPLICATIONS                                  */}
        {/* ============================================================= */}
        <section
          id="web-applications"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Purple Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
                <Cpu className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#58548C] uppercase">
                  Service 02 • Enterprise Systems
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Web Applications
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  High-performance enterprise portals, customer dashboards, and real-time interactive systems.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#58548C] hover:bg-[#474378] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-purple-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Build Web Application</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                Consumer-Grade Polish Paired with Mission-Critical Concurrency
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Enterprise software is notorious for clunky interfaces and slow render cycles. We engineer web applications with reactive client-side state architectures, optimistic UI patterns, and WebSocket streaming that make complex operations feel instant.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Whether you need a multi-tenant client portal, a real-time data visualization suite, or a custom internal operating system, we build robust applications that scale effortlessly to millions of requests.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <Layers className="w-4 h-4" />
                    <span>Client Portals & Hubs</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Self-service dashboards, document management, and client collaboration portals.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <Network className="w-4 h-4" />
                    <span>Real-Time WebSockets</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Live data streams, collaborative canvases, and sub-50ms synchronized updates.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <KeyRound className="w-4 h-4" />
                    <span>Enterprise Auth & SSO</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    SAML 2.0, OAuth2, multi-factor authentication, and granular RBAC permissions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#58548C]">
                    <Server className="w-4 h-4" />
                    <span>Scalable Micro-Frontends</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Modular codebases designed for parallel engineering team development.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                  Deliverables & Technology
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Full-Stack
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Reactive TypeScript Frontends</strong>
                    <span className="text-neutral-400">React 19, Next.js App Router, Vite, TanStack Query.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Resilient API & Database Layer</strong>
                    <span className="text-neutral-400">Node, Python FastAPI, PostgreSQL, Redis caches, GraphQL.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Automated Test Suites</strong>
                    <span className="text-neutral-400">Unit, integration, and Playwright end-to-end regression tests.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Containerized Cloud Deployment</strong>
                    <span className="text-neutral-400">Docker, Kubernetes, AWS ECS, or Serverless Edge setups.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Enterprise SLA Guaranteed</span>
                <span className="text-purple-400 font-bold">High Concurrency</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================= */}
        {/* SERVICE 3: AI AGENT INTEGRATION                              */}
        {/* ============================================================= */}
        <section
          id="ai-agent-integration"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Sky Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#5693B0] text-white flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#45769B] uppercase">
                  Service 03 • Autonomous Intelligence
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  AI Agent Integration
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  Embedded conversational assistants and neural knowledge search engines tailored to your data.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#45769B] hover:bg-[#386282] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Deploy AI Agents</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                Grounding Frontier AI in Your Proprietary Company Truth
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Generic chatbots hallucinate and disappoint users. We build custom Retrieval-Augmented Generation (RAG) vector pipelines that ingest your technical whitepapers, product catalogs, pricing sheets, and historical CRM interactions into a unified knowledge repository.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our multi-modal agents (featuring conversational avatars like Leo) interact dynamically with visitors, answer technical inquiries with precision citations, qualify sales leads in real time, and trigger backend workflows.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <Database className="w-4 h-4" />
                    <span>Grounded Neural RAG</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Vector embeddings grounded in your documents with 100% factual accuracy and zero hallucination.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <Bot className="w-4 h-4" />
                    <span>Conversational Avatars</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Interactive voice, video, and text digital agents (like Leo) embedded on your web surface.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <Workflow className="w-4 h-4" />
                    <span>Tool-Calling & Workflows</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Autonomous agents capable of looking up inventory, generating proposals, and booking calls.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#45769B]">
                    <Sliders className="w-4 h-4" />
                    <span>Real-Time Lead Triage</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Instant buyer intent scoring and routing directly into your sales pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider">
                  Deliverables & Technology
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  AI-Native
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Custom Vector Knowledge Pipeline</strong>
                    <span className="text-neutral-400">Automated ingestion from Notion, Drive, PDFs, APIs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Anam AI Widget Orchestration</strong>
                    <span className="text-neutral-400">Bespoke voice/avatar frontend tailored to brand voice.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Bidirectional CRM Sync</strong>
                    <span className="text-neutral-400">Live webhook integration with Salesforce, HubSpot, Slack.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Evaluation & Hallucination Guardrails</strong>
                    <span className="text-neutral-400">Automated LLM validation checks and boundary enforcement.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Continuous Knowledge Sync</span>
                <span className="text-sky-400 font-bold">Zero Hallucinations</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================= */}
        {/* SERVICE 4: SECURITY & PRIVACY                                */}
        {/* ============================================================= */}
        <section
          id="security-privacy"
          className="scroll-mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-xl shadow-neutral-200/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Subtle Rose Gradient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#BC5E69] to-[#D2574C] text-white flex items-center justify-center shadow-lg shadow-rose-500/25 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#D2574C] uppercase">
                  Service 04 • Sovereign Protection
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Security & Privacy
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-600">
                  On-premise execution, zero data leaks, and compliance-ready security architecture.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#D2574C] hover:bg-[#BD493E] text-white px-5 py-3 rounded-2xl text-xs font-bold tracking-wide shadow-md shadow-rose-500/20 hover:shadow-lg transition-all duration-200 group shrink-0 self-start lg:self-center"
            >
              <span>Review Security Specs</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Deep Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left Description & Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h3 className="text-lg font-bold text-neutral-900">
                Absolute Data Sovereignty for Regulated Enterprises
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Adopting frontier AI and modern web architecture cannot come at the expense of client confidentiality. We engineer isolated environments that satisfy the most stringent compliance standards in finance, healthcare, and enterprise tech.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Your knowledge embeddings, client conversations, and internal API traffic remain strictly isolated within your sovereign perimeter, backed by rigorous encryption and automated compliance reporting.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D2574C]">
                    <Lock className="w-4 h-4" />
                    <span>Zero Data Leakage</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Strict isolation agreements ensuring data is never used to train public LLMs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D2574C]">
                    <Server className="w-4 h-4" />
                    <span>Private VPC & On-Prem</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Deployable inside your own AWS, Azure, GCP tenant or sovereign cloud data center.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D2574C]">
                    <FileCode className="w-4 h-4" />
                    <span>SOC2 & GDPR Compliance</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Audit-ready logging, data residency guarantees, and right-to-be-forgotten controls.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D2574C]">
                    <KeyRound className="w-4 h-4" />
                    <span>End-to-End Encryption</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    AES-256 encryption at rest, TLS 1.3 in transit, and secret management vaults.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider">
                  Deliverables & Technology
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  Sovereign Tier
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2574C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Dedicated Isolated VPC Tenants</strong>
                    <span className="text-neutral-400">Zero multi-tenant cross-contamination of vector data.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2574C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Penetration Testing & Hardening</strong>
                    <span className="text-neutral-400">Third-party vulnerability audits and security reports.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2574C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Automated Secret Vaults</strong>
                    <span className="text-neutral-400">HashiCorp Vault / AWS KMS encryption key rotation.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2574C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Audit Logs & SIEM Export</strong>
                    <span className="text-neutral-400">Immutable audit trails ready for Datadog or Splunk.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>100% Data Sovereignty</span>
                <span className="text-rose-400 font-bold">Enterprise Grade</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. SYNTHESIS: THE UNIFIED BRAVE EDGE ADVANTAGE                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1320px] mx-auto py-16">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-850 to-[#58548C] text-white shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Workflow className="w-4 h-4 text-[#F27C23]" />
              Four Disciplines • One Intelligence System
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              A complete digital ecosystem built to compound your enterprise value.
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              When high-craft editorial design, robust web application architectures, grounded AI agents, and sovereign security converge, your website stops being a passive brochure and becomes your most valuable strategic asset.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F27C23] via-[#EB893D] to-[#58548C] hover:opacity-95 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-orange-500/20 transition-all duration-300 group"
              >
                <span>Initiate a Strategy Consultation</span>
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
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. INTEGRATED WEBSITE FOOTER BAR                              */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full">
        <WebsiteFooterBar onNavigate={(view) => {
          if (view === 'home') onNavigateHome();
          else if (view === 'about' && onNavigateAbout) onNavigateAbout();
          else if (view === 'solutions' && onNavigateSolutions) onNavigateSolutions();
          else if (view === 'use-cases' && onNavigateUseCases) onNavigateUseCases();
        }} />
      </div>

    </div>
  );
};

export default ServicesPage;
