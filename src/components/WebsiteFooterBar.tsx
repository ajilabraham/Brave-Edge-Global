import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const WebsiteFooterBar: React.FC = () => {
  return (
    <div className="w-full bg-white/90 hover:bg-white/95 backdrop-blur-xl border-t border-neutral-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-4 sm:py-4.5 lg:py-5 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 text-xs font-medium text-neutral-600 min-h-[60px] sm:min-h-[64px]">
        
        {/* LEFT: Brand Info & Copyright */}
        <div className="flex items-center gap-2.5">
          <span className="font-extrabold text-neutral-900 tracking-tight">
            Brave Edge<span className="text-[#F27C23]">™</span>
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Brave Edge Global. All rights reserved.
          </span>
        </div>

        {/* CENTER: Clean Minimalist Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <a
            href="#services"
            className="hover:text-[#F27C23] transition-colors font-semibold text-neutral-700"
          >
            Services
          </a>
          <a
            href="#solutions"
            className="hover:text-[#58548C] transition-colors font-semibold text-neutral-700"
          >
            Solutions
          </a>
          <a
            href="#use-cases"
            className="hover:text-[#F27C23] transition-colors font-semibold text-neutral-700"
          >
            Use Cases
          </a>
          <a
            href="#resources"
            className="hover:text-[#58548C] transition-colors font-semibold text-neutral-700"
          >
            Resources
          </a>
          <a
            href="#privacy"
            className="hover:text-neutral-900 transition-colors text-neutral-500"
          >
            Privacy
          </a>
        </div>

        {/* RIGHT: Live System Indicator & Fast Contact */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-neutral-100/80 px-2.5 py-1 rounded-full border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold text-neutral-700 uppercase tracking-wider">
              Contextual AI Live
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#F27C23] hover:text-[#e06b15] transition-colors"
          >
            <span>Talk to an Expert</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};
