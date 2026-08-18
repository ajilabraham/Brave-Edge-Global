import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  ShieldCheck,
  Cpu,
  Box,
  Mail
} from 'lucide-react';

export const HeroOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-full pt-12 lg:pt-20 pb-2 flex flex-col justify-between pointer-events-none z-10 select-none">
      
      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (>= 1024px) — 100% PRESERVED, UNTOUCHED & LOCKED           */}
      {/* ========================================================================= */}
      <div className="hidden lg:grid max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 w-full h-full grid-cols-12 gap-8 lg:gap-10 items-center my-auto">
        
        {/* LEFT HERO SECTION (Cols 1-5) */}
        <div className="lg:col-span-5 xl:col-span-5 space-y-6 pointer-events-auto text-left z-20 max-w-xl">
          {/* Micro Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0ecfc] text-[#58548C] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F27C23]" />
            <span>AI-FIRST. CONTEXT DRIVEN. PRIVACY BY DESIGN</span>
          </div>

          {/* Grand Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-neutral-900 tracking-tight leading-[1.05]">
            Own your
            <span className="block bg-gradient-to-r from-[#F27C23] via-[#E75038] via-[#7B4699] to-[#453E85] bg-clip-text text-transparent font-black mt-1">
              Intelligence.
            </span>
          </h1>

          {/* Supporting Copy */}
          <div className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed space-y-1 max-w-md">
            <p>Modernise your digital presence.</p>
            <p>Connect your knowledge.</p>
            <p>Build AI around your context.</p>
          </div>

          {/* 2 Horizontal Side-by-Side Value Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-md">
            {/* Item 1 */}
            <div className="flex items-start gap-2.5">
              <div className="p-0.5 text-[#F27C23] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  Your data stays yours
                </h4>
                <p className="text-xs text-neutral-500 leading-tight mt-0.5">
                  Private & secure under control.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-2.5">
              <div className="p-0.5 text-[#58548C] shrink-0 mt-0.5">
                <Cpu className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  AI that understands
                </h4>
                <p className="text-xs text-neutral-500 leading-tight mt-0.5">
                  Context-aware business agents.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#F27C23] hover:bg-[#E06B12] text-white px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all duration-200 group"
            >
              <span>Explore how it works</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#use-cases"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-purple-50/60 border-2 border-[#58548C]/30 text-[#58548C] px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 group shadow-2xs"
            >
              <Play className="w-4 h-4 fill-[#58548C] text-[#58548C]" />
              <span>See real use cases</span>
            </a>
          </div>
        </div>

        {/* CENTER COLUMN: Protected Empty Visual Zone for Character Mascot (Cols 6-8) */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-3 h-full pointer-events-none" />

        {/* RIGHT COLUMN: 3 Stacked Action Blurb Cards (Cols 9-12) */}
        <div className="lg:col-span-4 xl:col-span-4 space-y-4 pointer-events-auto z-20 max-w-sm lg:ml-auto w-full">
          
          {/* Card 1: Modern Websites */}
          <a
            href="#websites"
            className="group p-5 rounded-2xl bg-white border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-4 block"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#F27C23] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors leading-snug">
                  Modern Websites
                </h3>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  High-performance corporate websites that convert.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-1 transition-all shrink-0" />
          </a>

          {/* Card 2: AI & Solutions */}
          <a
            href="#solutions"
            className="group p-5 rounded-2xl bg-white border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-4 block"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#58548C] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform">
                <Box className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors leading-snug">
                  AI & Solutions
                </h3>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Contextual AI solutions built around your business.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-1 transition-all shrink-0" />
          </a>

          {/* Card 3: Talk to an Expert */}
          <a
            href="#contact"
            className="group p-5 rounded-2xl bg-white border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-4 block"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-[#F27C23] text-[#F27C23] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors leading-snug">
                  Talk to an Expert
                </h3>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Let's discuss your goals and opportunities.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-1 transition-all shrink-0" />
          </a>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE PORTRAIT LAYOUT (< 1024px) — CARDS PLACED DIRECTLY BELOW HERO ZONE */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full flex flex-col justify-start px-3.5 sm:px-6 pt-12 pointer-events-auto z-20 space-y-2">
        
        {/* Mobile Top Hero Zone */}
        <div className="space-y-1.5 text-left w-full">
          {/* Micro Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f0ecfc] text-[#58548C] text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F27C23]" />
            <span>AI-FIRST. CONTEXT DRIVEN. PRIVACY BY DESIGN</span>
          </div>

          {/* 2-Column Mobile Grid: Left Headline & Subtext | Right CTAs */}
          <div className="grid grid-cols-12 gap-2 items-start">
            
            {/* Left Column (Cols 1-7): Punchy Headline & Subtext */}
            <div className="col-span-7 space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-[1.05]">
                Own your
                <span className="block bg-gradient-to-r from-[#F27C23] via-[#E75038] to-[#58548C] bg-clip-text text-transparent font-black mt-0.5">
                  Intelligence.
                </span>
              </h1>
              <div className="text-[11px] sm:text-xs text-neutral-600 font-normal leading-tight space-y-0.5">
                <p>Modernise your digital presence.</p>
                <p>Connect your knowledge.</p>
                <p>Build AI around your context.</p>
              </div>
            </div>

            {/* Right Column (Cols 8-12): Compact Action CTAs */}
            <div className="col-span-5 flex flex-col gap-1.5 pt-0.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1 bg-[#F27C23] text-white px-2.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-bold shadow-md text-center leading-tight"
              >
                <span>Explore how it works</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </a>

              <a
                href="#use-cases"
                className="inline-flex items-center justify-center gap-1 bg-white/95 border border-[#58548C]/30 text-[#58548C] px-2.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-bold shadow-2xs text-center leading-tight"
              >
                <Play className="w-2.5 h-2.5 fill-[#58548C] text-[#58548C] shrink-0" />
                <span>See real use cases</span>
              </a>
            </div>

          </div>

          {/* 2 Value Items */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="flex items-start gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F27C23] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-neutral-900 leading-snug">Your data stays yours</h4>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-tight">Private & secure.</p>
              </div>
            </div>

            <div className="flex items-start gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#58548C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-neutral-900 leading-snug">AI that understands</h4>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-tight">Context-aware agents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Services & Solutions Cards Container — PLACED DIRECTLY BELOW HERO ZONE AT Y ~ 240px */}
        <div className="w-full pt-1.5">
          <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-neutral-600 mb-1 text-left flex items-center gap-1">
            <span>Services & Solutions</span>
            <ArrowRight className="w-3 h-3 text-[#F27C23]" />
          </p>
          <div className="flex overflow-x-auto gap-2 pb-1 snap-x scrollbar-none">
            
            {/* Card 1: Modern Websites */}
            <a
              href="#websites"
              className="snap-start shrink-0 w-[205px] p-2.5 rounded-xl bg-white/95 border border-neutral-200/90 shadow-md flex items-center gap-2.5"
            >
              <div className="w-7.5 h-7.5 rounded-full bg-[#F27C23] text-white flex items-center justify-center shrink-0 shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-[11px] sm:text-xs font-bold text-neutral-900">Modern Websites</h3>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 truncate">Corporate sites that convert.</p>
              </div>
            </a>

            {/* Card 2: AI & Solutions */}
            <a
              href="#solutions"
              className="snap-start shrink-0 w-[205px] p-2.5 rounded-xl bg-white/95 border border-neutral-200/90 shadow-md flex items-center gap-2.5"
            >
              <div className="w-7.5 h-7.5 rounded-full bg-[#58548C] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Box className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h3 className="text-[11px] sm:text-xs font-bold text-neutral-900">AI & Solutions</h3>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 truncate">Contextual AI for business.</p>
              </div>
            </a>

            {/* Card 3: Talk to an Expert */}
            <a
              href="#contact"
              className="snap-start shrink-0 w-[205px] p-2.5 rounded-xl bg-white/95 border border-neutral-200/90 shadow-md flex items-center gap-2.5"
            >
              <div className="w-7.5 h-7.5 rounded-full bg-white border-2 border-[#F27C23] text-[#F27C23] flex items-center justify-center shrink-0 shadow-xs">
                <Mail className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h3 className="text-[11px] sm:text-xs font-bold text-neutral-900">Talk to an Expert</h3>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 truncate">Discuss your AI goals.</p>
              </div>
            </a>

          </div>
        </div>

      </div>

    </div>
  );
};
