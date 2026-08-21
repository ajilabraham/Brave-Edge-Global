import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const WebsiteFooterBar: React.FC = () => {
  return (
    <div className="w-full bg-white/90 hover:bg-white/95 backdrop-blur-xl border-t border-neutral-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-2.5 sm:py-3 lg:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-medium text-neutral-600 min-h-[44px] sm:min-h-[48px]">
        
        {/* LEFT: Brand Info & Copyright */}
        <div className="flex items-center gap-2.5">
          <span className="font-extrabold text-neutral-900 tracking-tight text-xs sm:text-sm">
            Brave Edge<span className="text-[#F27C23]">™</span>
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500 text-[10px] sm:text-[11px]">
            © {new Date().getFullYear()} Brave Edge Global. All rights reserved.
          </span>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <a
            href="#contact"
            className="hover:text-[#F27C23] transition-colors font-semibold text-neutral-700 hover:scale-105 transform duration-200"
          >
            Contact Us
          </a>
          <a
            href="#vendor-signup"
            className="hover:text-[#58548C] transition-colors font-semibold text-neutral-700 hover:scale-105 transform duration-200"
          >
            Signup as a Brave Edge Vendor
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

        {/* RIGHT: Talk to Leo Badge */}
        <div className="flex items-center">
          <a
            href="#chat-leo"
            className="group inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-white/95 hover:bg-white border border-orange-200/90 hover:border-[#F27C23] text-neutral-800 hover:text-[#F27C23] transition-all duration-300 shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
          >
            <div className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-[#F27C23] to-[#EB893D] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Sparkles className="w-2.5 h-2.5 fill-white text-white group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 border border-white animate-pulse" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold tracking-wide">
              Talk to Leo
            </span>
            <ArrowRight className="w-3 h-3 text-[#F27C23] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};
