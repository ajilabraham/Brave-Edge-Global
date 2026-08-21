import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const WebsiteFooterBar: React.FC = () => {
  return (
    <div className="w-full bg-white/90 hover:bg-white/95 backdrop-blur-xl border-t border-neutral-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-6 sm:py-7 lg:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium text-neutral-600 min-h-[88px] sm:min-h-[96px]">
        
        {/* LEFT: Brand Info & Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-neutral-900 tracking-tight text-sm sm:text-base">
            Brave Edge<span className="text-[#F27C23]">™</span>
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500 text-xs sm:text-[13px]">
            © {new Date().getFullYear()} Brave Edge Global. All rights reserved.
          </span>
        </div>

        {/* CENTER: Clean Minimalist Nav Links */}
        <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-[13px]">
          <a
            href="#services"
            className="hover:text-[#F27C23] transition-colors font-semibold text-neutral-700 hover:scale-105 transform duration-200"
          >
            Services
          </a>
          <a
            href="#solutions"
            className="hover:text-[#58548C] transition-colors font-semibold text-neutral-700 hover:scale-105 transform duration-200"
          >
            Solutions
          </a>
          <a
            href="#use-cases"
            className="hover:text-[#F27C23] transition-colors font-semibold text-neutral-700 hover:scale-105 transform duration-200"
          >
            Use Cases
          </a>
          <a
            href="#resources"
            className="hover:text-[#58548C] transition-colors font-semibold text-neutral-700 hover:scale-105 transform duration-200"
          >
            Resources
          </a>
          <a
            href="#privacy"
            className="hover:text-neutral-900 transition-colors text-neutral-500 hover:scale-105 transform duration-200"
          >
            Privacy
          </a>
        </div>

        {/* RIGHT: Live System Indicator & Fast Contact */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 bg-neutral-100/90 px-3 py-1.5 rounded-full border border-neutral-200/70 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Contextual AI Live
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F27C23]/10 hover:bg-[#F27C23] text-[#F27C23] hover:text-white text-xs sm:text-[13px] font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs"
          >
            <span>Talk to an Expert</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};
