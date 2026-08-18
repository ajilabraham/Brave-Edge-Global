import React from 'react';
import { ArrowRight, Play, ShieldCheck, Cpu, ArrowDown } from 'lucide-react';

export const HeroLeftOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-full pt-28 pb-8 flex flex-col justify-between pointer-events-none z-10">
      {/* 2-Zone Grid Container (Left Content Column | Protected Character Zone) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* LEFT COLUMN: Reference Title, Copy, 2 Value Items & CTAs (Cols 1-6) */}
        <div className="lg:col-span-6 space-y-6 pointer-events-auto text-left z-20">
          {/* Micro Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0ecfc] text-[#58548C] text-[11px] font-extrabold tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F27C23]" />
            <span>AI-FIRST. CONTEXT DRIVEN. PRIVACY BY DESIGN</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tight leading-[1.05]">
            Own your
            <span className="block bg-gradient-to-r from-[#F27C23] via-[#E75038] via-[#7B4699] to-[#453E85] bg-clip-text text-transparent font-black mt-1">
              Intelligence.
            </span>
          </h1>

          {/* 3-Line Supporting Copy */}
          <div className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed space-y-1 max-w-md">
            <p>Modernise your digital presence.</p>
            <p>Connect your knowledge.</p>
            <p>Build AI around your context.</p>
          </div>

          {/* 2 Horizontal Side-by-Side Value Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 max-w-lg">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <div className="p-1 text-[#F27C23] shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                  Your data stays yours
                </h4>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Private, secure and under your control.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <div className="p-1 text-[#58548C] shrink-0 mt-0.5">
                <Cpu className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                  AI that understands
                </h4>
                <p className="text-xs text-neutral-500 leading-normal mt-0.5">
                  Context-aware agents built for your business.
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
              className="inline-flex items-center gap-2.5 bg-white hover:bg-purple-50/50 border-2 border-[#58548C]/30 text-[#58548C] px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 group shadow-2xs"
            >
              <Play className="w-4 h-4 fill-[#58548C] text-[#58548C]" />
              <span>See real use cases</span>
            </a>
          </div>
        </div>

        {/* RIGHT ZONE: Protected Empty Visual Zone for Character (Cols 7-12) */}
        <div className="hidden lg:block lg:col-span-6 h-full pointer-events-none" />
      </div>

      {/* Scroll Cue at Bottom Center */}
      <div className="w-full flex flex-col items-center justify-center pt-6 pointer-events-auto">
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
