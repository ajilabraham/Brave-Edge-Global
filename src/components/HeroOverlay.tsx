import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  ArrowDown,
  Box,
  Network,
  Sparkles
} from 'lucide-react';

interface HeroOverlayProps {
  onNavigate?: (
    view:
      | 'home'
      | 'about'
      | 'services'
      | 'solutions'
      | 'use-cases'
      | 'intelligent-websites'
      | 'contextual-ai'
      | 'connected-ecosystems'
      | 'contact',
    bookmark?: string
  ) => void;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-full pt-20 lg:pt-28 pb-2 flex flex-col justify-between pointer-events-none z-10 select-none">
      
      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (>= 1024px) — 100% PRESERVED, UNTOUCHED & LOCKED           */}
      {/* ========================================================================= */}
      <div className="hidden lg:grid max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 w-full h-full grid-cols-12 gap-8 lg:gap-10 items-center my-auto">
        
        {/* LEFT HERO SECTION (Cols 1-5) */}
        <div className="lg:col-span-5 xl:col-span-5 space-y-7 lg:space-y-8 pt-4 lg:pt-8 pointer-events-auto text-left z-20 max-w-xl">
          {/* Micro Tag Pill */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#f0ecfc] text-[#58548C] text-xs sm:text-[13px] font-extrabold tracking-wider uppercase shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F27C23]" />
            <span>YOU VISITED. WE NOTICED. NOW IT'S YOUR TURN</span>
          </div>

          {/* Grand Main Headline (+10% Font Size) */}
          <h1 className="text-[38px] sm:text-[50px] lg:text-[62px] xl:text-[74px] 2xl:text-[80px] font-black text-neutral-900 tracking-tight leading-[1.06]">
            Own and<br />
            control your
            <span className="block bg-gradient-to-r from-[#F27C23] via-[#E75038] via-[#7B4699] to-[#453E85] bg-clip-text text-transparent font-black mt-1">
              Intelligence
            </span>
          </h1>

          {/* Supporting Copy (+10% Font Size & Optimal Spacing) */}
          <div className="text-[17.5px] sm:text-[20px] text-neutral-600 font-normal leading-relaxed max-w-lg">
            <p>Turn your website into an intelligent digital experience built around your business, your knowledge and your audience.</p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 lg:pt-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('services');
              }}
              className="inline-flex items-center gap-3 bg-[#F27C23] hover:bg-[#E06B12] text-white px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all duration-200 group cursor-pointer"
            >
              <span>Explore how it works</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#use-cases"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('use-cases');
              }}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-purple-50/60 border-2 border-[#58548C]/30 text-[#58548C] px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 group shadow-2xs cursor-pointer"
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
          
          {/* Card 1: Intelligent Websites */}
          <a
            href="#intelligent-websites"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('intelligent-websites');
              else window.location.hash = '#intelligent-websites';
            }}
            className="group p-5 rounded-2xl bg-white border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-4 block cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#F27C23] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#F27C23] transition-colors leading-snug uppercase tracking-wide">
                  Intelligent Websites
                </h3>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Websites that can understand who is here and what they need.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F27C23] group-hover:translate-x-1 transition-all shrink-0" />
          </a>

          {/* Card 2: Contextual AI */}
          <a
            href="#contextual-ai"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('contextual-ai');
              else window.location.hash = '#contextual-ai';
            }}
            className="group p-5 rounded-2xl bg-white border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-4 block cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#58548C] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform">
                <Box className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#58548C] transition-colors leading-snug uppercase tracking-wide">
                  Contextual AI
                </h3>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Turns your business knowledge into useful AI for your website.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#58548C] group-hover:translate-x-1 transition-all shrink-0" />
          </a>

          {/* Card 3: Connected Ecosystems */}
          <a
            href="#connected-ecosystems"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('connected-ecosystems');
              else window.location.hash = '#connected-ecosystems';
            }}
            className="group p-5 rounded-2xl bg-white border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-sky-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-4 block cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-[#45769B] text-[#45769B] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Network className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#45769B] transition-colors leading-snug uppercase tracking-wide">
                  Connected Ecosystems
                </h3>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Connects your website to the systems behind your business.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#45769B] group-hover:translate-x-1 transition-all shrink-0" />
          </a>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE PORTRAIT LAYOUT (< 1024px)                                         */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full flex flex-col justify-start px-4 sm:px-6 pt-16 pointer-events-auto z-20 space-y-3">
        
        {/* Mobile Top Hero Zone */}
        <div className="space-y-2 text-left w-full">
          {/* Micro Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0ecfc] text-[#58548C] text-[10px] sm:text-xs font-extrabold tracking-wider uppercase shadow-2xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#F27C23]" />
            <span>YOU VISITED. WE NOTICED. NOW IT'S YOUR TURN</span>
          </div>

          {/* 2-Column Mobile Grid: Left Headline & Subtext | Right CTAs */}
          <div className="grid grid-cols-12 gap-2.5 items-start">
            
            {/* Left Column (Cols 1-7): Punchy Headline & Subtext */}
            <div className="col-span-7 space-y-2">
              <h1 className="text-[24px] sm:text-[28px] font-black text-neutral-900 tracking-tight leading-[1.06]">
                Own and<br />
                control your
                <span className="block bg-gradient-to-r from-[#F27C23] via-[#E75038] to-[#58548C] bg-clip-text text-transparent font-black mt-0.5">
                  Intelligence
                </span>
              </h1>
              <div className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-snug">
                <p>Turn your website into an intelligent digital experience built around your business, your knowledge and your audience.</p>
              </div>
            </div>

            {/* Right Column (Cols 8-12): Compact Action CTAs */}
            <div className="col-span-5 flex flex-col gap-2 pt-0.5">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('services');
                }}
                className="inline-flex items-center justify-center gap-1 bg-[#F27C23] text-white px-2.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold shadow-md text-center leading-tight cursor-pointer"
              >
                <span>Explore how it works</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </a>

              <a
                href="#use-cases"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('use-cases');
                }}
                className="inline-flex items-center justify-center gap-1 bg-white/95 border border-[#58548C]/30 text-[#58548C] px-2.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold shadow-2xs text-center leading-tight cursor-pointer"
              >
                <Play className="w-2.5 h-2.5 fill-[#58548C] text-[#58548C] shrink-0" />
                <span>See real use cases</span>
              </a>
            </div>

          </div>
        </div>

        {/* Mobile Services & Solutions Cards Container */}
        <div className="w-full pt-3">
          <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-neutral-600 mb-2 text-left flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#F27C23]" />
            <span>Services & Solutions</span>
            <ArrowRight className="w-3 h-3 text-[#F27C23]" />
          </p>
          <div className="flex overflow-x-auto gap-3 pb-2 pt-0.5 snap-x scrollbar-none">
            
            {/* Card 1: Intelligent Websites */}
            <a
              href="#intelligent-websites"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('intelligent-websites');
                else window.location.hash = '#intelligent-websites';
              }}
              className="snap-start shrink-0 w-[270px] sm:w-[290px] p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-md hover:shadow-lg transition-all duration-200 flex items-start gap-3 cursor-pointer text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F27C23] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-black text-neutral-900 uppercase tracking-tight group-hover:text-[#F27C23] transition-colors">
                  Intelligent Websites
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-600 font-normal leading-snug">
                  Websites that can understand who is here and what they need.
                </p>
              </div>
            </a>

            {/* Card 2: Contextual AI */}
            <a
              href="#contextual-ai"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('contextual-ai');
                else window.location.hash = '#contextual-ai';
              }}
              className="snap-start shrink-0 w-[270px] sm:w-[290px] p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-md hover:shadow-lg transition-all duration-200 flex items-start gap-3 cursor-pointer text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#58548C] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <Box className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-black text-neutral-900 uppercase tracking-tight group-hover:text-[#58548C] transition-colors">
                  Contextual AI
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-600 font-normal leading-snug">
                  Turns your business knowledge into useful AI for your website.
                </p>
              </div>
            </a>

            {/* Card 3: Connected Ecosystems */}
            <a
              href="#connected-ecosystems"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('connected-ecosystems');
                else window.location.hash = '#connected-ecosystems';
              }}
              className="snap-start shrink-0 w-[270px] sm:w-[290px] p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-md hover:shadow-lg transition-all duration-200 flex items-start gap-3 cursor-pointer text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#45769B] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <Network className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-black text-neutral-900 uppercase tracking-tight group-hover:text-[#45769B] transition-colors">
                  Connected Ecosystems
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-600 font-normal leading-snug">
                  Connects your website to the systems behind your business.
                </p>
              </div>
            </a>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* DESKTOP CENTRALISED SCROLL PROMPT ICON-ONLY BADGE BELOW CHARACTER          */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex w-full flex-col items-center justify-center pt-2 pb-3 pointer-events-auto">
        <div className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md flex items-center justify-center text-[#F27C23] animate-bounce hover:border-[#F27C23] transition-colors">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

    </div>
  );
};
