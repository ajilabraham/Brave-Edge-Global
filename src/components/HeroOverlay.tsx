import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  ShieldCheck,
  Cpu,
  ArrowDown,
  Box,
  Mail
} from 'lucide-react';

export const HeroOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-full pt-24 pb-6 flex flex-col justify-between pointer-events-none z-10 select-none">
      
      {/* 3-Column Hero Layout (Prominent Grand Left Hero Section | Protected Mascot Zone | Right Action Cards) */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto">
        
        {/* LEFT HERO SECTION: Prominent Grand Typography, Copy, Value Badges & Side-by-Side CTAs (Cols 1-5) */}
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

          {/* Action CTAs (Side-by-Side Horizontal Buttons positioned cleanly) */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {/* Button 1: Explore how it works */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#F27C23] hover:bg-[#E06B12] text-white px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all duration-200 group"
            >
              <span>Explore how it works</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Button 2: See real use cases (Placed directly side-by-side where cursor indicated) */}
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

      {/* Scroll Cue at Bottom Center */}
      <div className="w-full flex flex-col items-center justify-center pt-2 pointer-events-auto">
        <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-2xs flex items-center justify-center text-neutral-600 animate-bounce mb-1">
          <ArrowDown className="w-3.5 h-3.5 text-[#F27C23]" />
        </div>
        <span className="text-[11px] font-medium text-neutral-400">
          Scroll to explore
        </span>
      </div>

    </div>
  );
};
