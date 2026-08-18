import React, { useState, useRef } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Globe,
  Cpu,
  ShieldCheck,
  Zap,
  Bot,
  Database,
  Workflow,
  Sparkles,
  Building2,
  Rocket,
  Scale,
  Menu,
  X,
  ExternalLink,
  Layers,
  Activity
} from 'lucide-react';

type MegaMenuKey = 'services' | 'solutions' | 'use-cases' | null;

export const HeaderWithMegaMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menuKey: MegaMenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-2xl border-b border-white/60 shadow-xs transition-all duration-300 select-none"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo (30% larger size: h-[52px] sm:h-[58px]) */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none z-10">
          <img
            src="/images/brand/BraveEdgeLogo.svg"
            alt="BraveEdge™"
            className="h-[52px] sm:h-[58px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links — 100% Consistent Title Case & Elegant Pill Hover */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-neutral-600 tracking-wide">
          
          {/* Services Nav Trigger */}
          <div
            className="relative py-5"
            onMouseEnter={() => handleMouseEnter('services')}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeMenu === 'services'
                  ? 'bg-orange-50/90 backdrop-blur-md text-[#F27C23] font-bold shadow-2xs'
                  : 'hover:text-neutral-900 hover:bg-neutral-100/60 backdrop-blur-sm'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeMenu === 'services' ? 'rotate-180 text-[#F27C23]' : 'text-neutral-400'
                }`}
              />
            </button>
          </div>

          {/* Solutions Nav Trigger */}
          <div
            className="relative py-5"
            onMouseEnter={() => handleMouseEnter('solutions')}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeMenu === 'solutions'
                  ? 'bg-purple-50/90 backdrop-blur-md text-[#58548C] font-bold shadow-2xs'
                  : 'hover:text-neutral-900 hover:bg-neutral-100/60 backdrop-blur-sm'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeMenu === 'solutions' ? 'rotate-180 text-[#58548C]' : 'text-neutral-400'
                }`}
              />
            </button>
          </div>

          {/* Use Cases Nav Trigger */}
          <div
            className="relative py-5"
            onMouseEnter={() => handleMouseEnter('use-cases')}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeMenu === 'use-cases'
                  ? 'bg-sky-50/90 backdrop-blur-md text-[#45769B] font-bold shadow-2xs'
                  : 'hover:text-neutral-900 hover:bg-neutral-100/60 backdrop-blur-sm'
              }`}
            >
              <span>Use Cases</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeMenu === 'use-cases' ? 'rotate-180 text-[#45769B]' : 'text-neutral-400'
                }`}
              />
            </button>
          </div>

          {/* Direct Nav Links */}
          <a
            href="#resources"
            className="px-4 py-2 rounded-full hover:text-neutral-900 hover:bg-neutral-100/60 backdrop-blur-sm transition-all duration-200"
          >
            Resources
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-full hover:text-neutral-900 hover:bg-neutral-100/60 backdrop-blur-sm transition-all duration-200"
          >
            About
          </a>
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F27C23] via-[#EB893D] to-[#58548C] hover:opacity-95 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* FROSTED GLASSY MEGA MENU DROPDOWN PANELS */}
      {activeMenu && (
        <div
          className="absolute top-20 left-0 right-0 bg-white/75 backdrop-blur-3xl border-b border-white/70 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 animate-in fade-in slide-in-from-top-2"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            
            {/* 1. SERVICES MEGA MENU */}
            {activeMenu === 'services' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 3 Columns Grid (Cols 1-9) */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Item 1 */}
                  <a
                    href="#services"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-orange-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors mb-1 flex items-center gap-1.5">
                        Modern Corporate Websites
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        World-class editorial typography, dynamic micro-interactions, and high-converting responsive layouts.
                      </p>
                    </div>
                  </a>

                  {/* Item 2 */}
                  <a
                    href="#services"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-purple-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-md shadow-purple-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors mb-1 flex items-center gap-1.5">
                        Web Applications
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        High-performance enterprise portals, customer dashboards, and real-time interactive systems.
                      </p>
                    </div>
                  </a>

                  {/* Item 3 */}
                  <a
                    href="#services"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-sky-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#5693B0] text-white flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors mb-1 flex items-center gap-1.5">
                        AI Agent Integration
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Embedded conversational assistants and neural knowledge search engines tailored to your data.
                      </p>
                    </div>
                  </a>

                  {/* Item 4 */}
                  <a
                    href="#services"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-rose-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#BC5E69] to-[#D2574C] text-white flex items-center justify-center shadow-md shadow-rose-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#D2574C] transition-colors mb-1 flex items-center gap-1.5">
                        Security & Privacy
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        On-premise execution, zero data leaks, and compliance-ready security architecture.
                      </p>
                    </div>
                  </a>
                </div>

                {/* Right Feature Callout Panel (Cols 10-12) */}
                <div className="lg:col-span-3 bg-gradient-to-br from-neutral-900/90 via-neutral-800/90 to-[#58548C]/90 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl space-y-4 border border-white/10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-orange-300 backdrop-blur-sm">
                    <Activity className="w-3 h-3 text-[#F27C23]" />
                    Featured Service
                  </div>
                  <h4 className="text-base font-extrabold tracking-tight text-white leading-snug">
                    AI-First Corporate Redesign
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    Transform your legacy corporate website into an active, context-aware digital intelligence hub.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F27C23] hover:text-white transition-colors"
                  >
                    <span>Request Strategy Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )}

            {/* 2. SOLUTIONS MEGA MENU */}
            {activeMenu === 'solutions' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 3 Columns Grid */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Item 1 */}
                  <a
                    href="#solutions"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-purple-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-md shadow-purple-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors mb-1 flex items-center gap-1.5">
                        AI Operations & Automation
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Autonomous agents that handle briefings, updates, triage, and daily operational busywork.
                      </p>
                    </div>
                  </a>

                  {/* Item 2 */}
                  <a
                    href="#solutions"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-orange-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors mb-1 flex items-center gap-1.5">
                        Knowledge Consolidation
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Capture institutional memory, expertise, documents, and historical decisions into one store.
                      </p>
                    </div>
                  </a>

                  {/* Item 3 */}
                  <a
                    href="#solutions"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-sky-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#45769B] to-[#5693B0] text-white flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors mb-1 flex items-center gap-1.5">
                        System Connectors
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Connect Slack, Email, Notion, CRM, databases, and custom APIs into one active context engine.
                      </p>
                    </div>
                  </a>

                  {/* Item 4 */}
                  <a
                    href="#solutions"
                    className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-amber-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F19638] to-[#EB893D] text-white flex items-center justify-center shadow-md shadow-amber-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#F19638] transition-colors mb-1 flex items-center gap-1.5">
                        Contextual AI Training
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Train team workflows on frontier AI models tailored specifically to your company context.
                      </p>
                    </div>
                  </a>
                </div>

                {/* Right Feature Callout Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-purple-900/90 via-[#58548C]/90 to-indigo-900/90 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl space-y-4 border border-white/10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                    <Layers className="w-3 h-3 text-purple-300" />
                    Architecture Highlight
                  </div>
                  <h4 className="text-base font-extrabold tracking-tight text-white leading-snug">
                    Capture → Connect → Activate
                  </h4>
                  <p className="text-xs text-neutral-200 leading-relaxed font-normal">
                    Build a resilient organizational intelligence layer around your existing business tools.
                  </p>
                  <a
                    href="#solutions"
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-white transition-colors"
                  >
                    <span>View Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )}

            {/* 3. USE CASES MEGA MENU */}
            {activeMenu === 'use-cases' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Use Case 1 */}
                  <a
                    href="#use-cases"
                    className="group p-5 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-orange-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shadow-md shadow-orange-500/20 mb-4 group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors mb-1.5 flex items-center justify-between">
                      <span>Enterprise Knowledge</span>
                      <ChevronDown className="w-4 h-4 text-neutral-400 -rotate-90 group-hover:translate-x-0.5 group-hover:text-[#F27C23] transition-all" />
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Consolidate fragmented department data and institutional memory into a single source of truth.
                    </p>
                  </a>

                  {/* Use Case 2 */}
                  <a
                    href="#use-cases"
                    className="group p-5 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-purple-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#58548C] to-[#4F46E5] text-white flex items-center justify-center shadow-md shadow-purple-500/20 mb-4 group-hover:scale-110 transition-transform">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors mb-1.5 flex items-center justify-between">
                      <span>High-Growth Tech</span>
                      <ChevronDown className="w-4 h-4 text-neutral-400 -rotate-90 group-hover:translate-x-0.5 group-hover:text-[#58548C] transition-all" />
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Launch high-converting digital presences equipped with live AI customer assistance.
                    </p>
                  </a>

                  {/* Use Case 3 */}
                  <a
                    href="#use-cases"
                    className="group p-5 rounded-2xl bg-white/70 backdrop-blur-md hover:bg-white/90 border border-white/80 hover:border-rose-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#BC5E69] to-[#D2574C] text-white flex items-center justify-center shadow-md shadow-rose-500/20 mb-4 group-hover:scale-110 transition-transform">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#D2574C] transition-colors mb-1.5 flex items-center justify-between">
                      <span>Legal & Finance</span>
                      <ChevronDown className="w-4 h-4 text-neutral-400 -rotate-90 group-hover:translate-x-0.5 group-hover:text-[#D2574C] transition-all" />
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Deploy privacy-first AI models that search contracts and financial archives securely on-premise.
                    </p>
                  </a>
                </div>

                {/* Right Feature Callout Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-orange-950/90 via-[#F27C23]/90 to-[#EB893D]/90 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl space-y-4 border border-white/10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    Case Study
                  </div>
                  <h4 className="text-base font-extrabold tracking-tight text-white leading-snug">
                    100% Data Privacy Guaranteed
                  </h4>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    See how enterprise clients deploy context-aware AI while keeping 100% of data internal.
                  </p>
                  <a
                    href="#use-cases"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-orange-200 transition-colors"
                  >
                    <span>Read Enterprise Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 p-6 space-y-4">
          <div className="space-y-3 text-sm font-semibold text-neutral-700">
            <a href="#services" className="block py-2 border-b border-neutral-100 hover:text-[#F27C23]">
              Services
            </a>
            <a href="#solutions" className="block py-2 border-b border-neutral-100 hover:text-[#58548C]">
              Solutions
            </a>
            <a href="#use-cases" className="block py-2 border-b border-neutral-100 hover:text-[#45769B]">
              Use Cases
            </a>
            <a href="#resources" className="block py-2 border-b border-neutral-100">
              Resources
            </a>
            <a href="#about" className="block py-2">
              About
            </a>
          </div>
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F27C23] to-[#58548C] text-white px-5 py-3 rounded-full text-xs font-bold shadow-md"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
