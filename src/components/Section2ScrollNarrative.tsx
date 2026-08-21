import React from 'react';
import { Database, Layers, Workflow, Sparkles, Network } from 'lucide-react';

interface Section2ScrollNarrativeProps {
  scrollProgress: number; // Overall scroll progress (0.0 to 1.0)
}

export const Section2ScrollNarrative: React.FC<Section2ScrollNarrativeProps> = ({ scrollProgress }) => {
  // Normalize progress for Section 2 stepper reveal (from scrollProgress ~0.12 to 0.75)
  const normProgress = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.12) / 0.63));

  // Exit fade-out calculation upon further scroll past final state (scrollProgress 0.75 to 0.95)
  const fadeOutProgress = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.75) / 0.20));
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

  // Right Stacked Cards Reveal (Staggered animation across scroll progress)
  const card1T = Math.min(1.0, Math.max(0.0, (normProgress - 0.35) / 0.22));
  const card1Opacity = card1T * exitOpacity;
  const card1Y = (1 - card1T) * 16;

  const card2T = Math.min(1.0, Math.max(0.0, (normProgress - 0.48) / 0.22));
  const card2Opacity = card2T * exitOpacity;
  const card2Y = (1 - card2T) * 16;

  const card3T = Math.min(1.0, Math.max(0.0, (normProgress - 0.60) / 0.22));
  const card3Opacity = card3T * exitOpacity;
  const card3Y = (1 - card3T) * 16;

  // Vertical connecting line fill percentage
  const lineFillPercent = Math.min(100, Math.max(0, normProgress * 100));

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none flex items-center justify-start select-none transition-opacity duration-150 ease-out"
      style={{ opacity: exitOpacity }}
    >
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative h-full flex items-center justify-between">
        
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

        {/* RIGHT COLUMN: Animated Stacked Cards strictly within the red rectangle area */}
        <div className="absolute right-3 sm:right-6 lg:right-10 xl:right-14 top-1/2 -translate-y-1/2 z-30 pointer-events-auto max-w-[290px] sm:max-w-[340px] lg:max-w-[370px] xl:max-w-[390px] w-full space-y-3 sm:space-y-3.5">
          
          {/* CARD 1: INTELLIGENT WEBSITES */}
          {card1T > 0.02 && (
            <div
              className="p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                opacity: card1Opacity,
                transform: `translateY(${card1Y}px)`
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F27C23]/10 text-[#F27C23] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-neutral-900 uppercase tracking-wider">
                  INTELLIGENT WEBSITES
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mb-2 pl-0.5">
                How we make your website intelligent
              </p>
              <div className="space-y-0.5 pl-0.5 border-t border-neutral-100/80 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#F27C23] font-bold">→</span>
                  <span>AI-Driven Personalisation</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#F27C23] font-bold">→</span>
                  <span>Intelligent Interactions</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#F27C23] font-bold">→</span>
                  <span>Adaptive Content</span>
                </div>
              </div>
            </div>
          )}

          {/* CARD 2: CONTEXTUAL AI */}
          {card2T > 0.02 && (
            <div
              className="p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                opacity: card2Opacity,
                transform: `translateY(${card2Y}px)`
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#58548C]/10 text-[#58548C] flex items-center justify-center shrink-0">
                  <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-neutral-900 uppercase tracking-wider">
                  CONTEXTUAL AI
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mb-2 pl-0.5">
                How we make AI understand your business
              </p>
              <div className="space-y-0.5 pl-0.5 border-t border-neutral-100/80 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#58548C] font-bold">→</span>
                  <span>Business Knowledge AI</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#58548C] font-bold">→</span>
                  <span>AI Agents & Assistants</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#58548C] font-bold">→</span>
                  <span>Knowledge-Driven Automation</span>
                </div>
              </div>
            </div>
          )}

          {/* CARD 3: CONNECTED ECOSYSTEMS */}
          {card3T > 0.02 && (
            <div
              className="p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-100/90 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                opacity: card3Opacity,
                transform: `translateY(${card3Y}px)`
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F27C23]/10 text-[#F27C23] flex items-center justify-center shrink-0">
                  <Network className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-neutral-900 uppercase tracking-wider">
                  CONNECTED ECOSYSTEMS
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mb-2 pl-0.5">
                How we connect intelligence to your business
              </p>
              <div className="space-y-0.5 pl-0.5 border-t border-neutral-100/80 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#F27C23] font-bold">→</span>
                  <span>Data & System Integration</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#F27C23] font-bold">→</span>
                  <span>Connected Workflows</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700">
                  <span className="text-[#F27C23] font-bold">→</span>
                  <span>Intelligent Business Layer</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
