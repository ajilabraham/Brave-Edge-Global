import React from 'react';
import { Database, Layers, Workflow, Sparkles, ArrowRight } from 'lucide-react';

interface Section2ScrollNarrativeProps {
  scrollProgress: number; // Overall scroll progress (0.0 to 1.0)
}

export const Section2ScrollNarrative: React.FC<Section2ScrollNarrativeProps> = ({ scrollProgress }) => {
  // Normalize progress for Section 2 (from scrollProgress ~0.12 to 0.85)
  const normProgress = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.12) / 0.73));

  // Exit fade-out calculation upon further scroll past final state (scrollProgress 0.85 to 0.98)
  const fadeOutProgress = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.85) / 0.13));
  const exitOpacity = 1 - fadeOutProgress;

  // Determine active step index for the moving flashing pulse indicator
  // 1: Step 01 active (0.0 to 0.33)
  // 2: Step 02 active (0.33 to 0.66)
  // 3: Step 03 active (0.66 to 1.0)
  const activeStep = normProgress < 0.33 ? 1 : normProgress < 0.66 ? 2 : 3;

  // Node 1 Step (Fades in & slides up from 0.02 to 0.22)
  const step1T = Math.min(1.0, Math.max(0.0, (normProgress - 0.02) / 0.22));
  const step1Opacity = step1T * exitOpacity;
  const step1Y = (1 - step1T) * 20;

  // Node 2 Step (Fades in & slides up from 0.28 to 0.48)
  const step2T = Math.min(1.0, Math.max(0.0, (normProgress - 0.28) / 0.22));
  const step2Opacity = step2T * exitOpacity;
  const step2Y = (1 - step2T) * 20;

  // Node 3 Step (Fades in & slides up from 0.54 to 0.76)
  const step3T = Math.min(1.0, Math.max(0.0, (normProgress - 0.54) / 0.22));
  const step3Opacity = step3T * exitOpacity;
  const step3Y = (1 - step3T) * 20;

  // Talk to Leo Button Visibility (Appears ONLY after 3rd point is visible towards end of scroll)
  const leoT = Math.min(1.0, Math.max(0.0, (normProgress - 0.62) / 0.20));
  const leoOpacity = leoT * exitOpacity;
  const leoScale = 0.9 + leoT * 0.1;
  const leoY = (1 - leoT) * 12;

  // Vertical connecting line fill percentage
  const lineFillPercent = Math.min(100, Math.max(0, normProgress * 100));

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none flex items-center justify-start select-none transition-opacity duration-150 ease-out"
      style={{ opacity: exitOpacity }}
    >
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative h-full flex items-center">
        
        {/* LEFT COLUMN: Stepper Narrative Container */}
        {/* Mobile: max-w-[58vw] left-1 (never overlays mascot) | Desktop: max-w-[460px] preserved */}
        <div className="relative max-w-[58vw] sm:max-w-[340px] lg:max-w-[460px] space-y-8 sm:space-y-12 pl-9 sm:pl-14">
          
          {/* Vertical Stepper Background Track */}
          <div className="absolute top-4 bottom-4 left-3 sm:left-5 w-0.5 bg-neutral-200/70 rounded-full" />
          
          {/* Active Gradient Line Fill */}
          <div
            className="absolute top-4 left-3 sm:left-5 w-0.5 bg-gradient-to-b from-[#F27C23] via-[#58548C] to-[#F27C23] rounded-full transition-all duration-150 ease-out"
            style={{ height: `${lineFillPercent}%` }}
          />

          {/* STEP 01 NODE */}
          <div
            className="relative flex items-start gap-3 sm:gap-4 transition-all duration-300 ease-out"
            style={{
              opacity: step1Opacity,
              transform: `translateY(${step1Y}px)`
            }}
          >
            {/* Step 1 Circle Icon Badge */}
            <div
              className={`absolute -left-[38px] sm:-left-[50px] top-0.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 transition-all duration-300 flex items-center justify-center shrink-0 z-10 ${
                activeStep === 1
                  ? 'border-[#F27C23] text-[#F27C23] shadow-lg shadow-orange-500/30 ring-4 ring-orange-500/20 scale-110'
                  : 'border-neutral-200 text-neutral-400 opacity-80'
              }`}
            >
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
              {activeStep === 1 && (
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F27C23] animate-ping" />
              )}
            </div>

            {/* Step 1 Text Content */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[10px] sm:text-sm font-extrabold tracking-wider text-[#F27C23] uppercase block">
                01
              </span>
              <h3 className="text-base sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                Your intelligence{' '}
                <span className="text-[#F27C23]">is already there</span>.
              </h3>
            </div>
          </div>

          {/* STEP 02 NODE */}
          <div
            className="relative flex items-start gap-3 sm:gap-4 transition-all duration-300 ease-out"
            style={{
              opacity: step2Opacity,
              transform: `translateY(${step2Y}px)`
            }}
          >
            {/* Step 2 Circle Icon Badge */}
            <div
              className={`absolute -left-[38px] sm:-left-[50px] top-0.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 transition-all duration-300 flex items-center justify-center shrink-0 z-10 ${
                activeStep === 2
                  ? 'border-[#58548C] text-[#58548C] shadow-lg shadow-purple-500/30 ring-4 ring-purple-500/20 scale-110'
                  : 'border-neutral-200 text-neutral-400 opacity-80'
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
              {activeStep === 2 && (
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#58548C] animate-ping" />
              )}
            </div>

            {/* Step 2 Text Content */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[10px] sm:text-sm font-extrabold tracking-wider text-[#58548C] uppercase block">
                02
              </span>
              <h3 className="text-base sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                It's <span className="text-[#58548C]">scattered</span> across your people, processes, data and tools.
              </h3>
            </div>
          </div>

          {/* STEP 03 NODE */}
          <div
            className="relative flex items-start gap-3 sm:gap-4 transition-all duration-300 ease-out"
            style={{
              opacity: step3Opacity,
              transform: `translateY(${step3Y}px)`
            }}
          >
            {/* Step 3 Circle Icon Badge */}
            <div
              className={`absolute -left-[38px] sm:-left-[50px] top-0.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 transition-all duration-300 flex items-center justify-center shrink-0 z-10 ${
                activeStep === 3
                  ? 'border-[#F27C23] text-[#F27C23] shadow-lg shadow-orange-500/30 ring-4 ring-orange-500/20 scale-110'
                  : 'border-neutral-200 text-neutral-400 opacity-80'
              }`}
            >
              <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
              {activeStep === 3 && (
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F27C23] animate-ping" />
              )}
            </div>

            {/* Step 3 Text Content */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[10px] sm:text-sm font-extrabold tracking-wider text-[#F27C23] uppercase block">
                03
              </span>
              <h3 className="text-base sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                We bring it together. Then make it{' '}
                <span className="text-[#F27C23]">work for you</span>.
              </h3>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Cute, Modern, Compact Floating Glass Pill for "Talk to Leo" */}
        {/* Desktop (>= 1024px): Positioned beside gaze | Mobile (< 1024px): Positioned bottom-right out of face */}
        {leoT > 0.02 && (
          <div
            className="absolute right-3 sm:right-6 lg:right-16 xl:right-24 bottom-6 sm:bottom-10 lg:top-[54%] lg:-translate-y-1/2 z-30 pointer-events-auto transition-all duration-500 ease-out"
            style={{
              opacity: leoOpacity,
              transform: `translateY(${leoY}px) scale(${leoScale})`
            }}
          >
            <a
              href="#chat-leo"
              className="group relative inline-flex items-center gap-2 sm:gap-2.5 bg-white/95 hover:bg-white backdrop-blur-xl text-neutral-900 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg shadow-orange-500/15 hover:shadow-xl hover:shadow-orange-500/25 border border-orange-200/90 hover:border-[#F27C23] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
            >
              {/* Cute Orange AI Avatar Node with Pulse Dot */}
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 border border-white animate-pulse" />
              </div>

              {/* Cute Single-Line Label */}
              <span className="text-[11px] sm:text-sm font-bold text-neutral-800 group-hover:text-[#F27C23] transition-colors tracking-wide">
                Talk to Leo
              </span>

              {/* Small Subtle Arrow */}
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F27C23] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
