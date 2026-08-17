import React from 'react';
import { Sparkles, Layers, MoveVertical, Eye } from 'lucide-react';

export type SystemOwner =
  | 'IDLE'
  | 'MOUSE_GAZE'
  | 'TOUCH_GAZE'
  | 'HANDOFF'
  | 'SCROLL_TURN';

interface DiagnosticPanelProps {
  systemOwner: SystemOwner;
  activeFrameText: string;
  scrollPercent: string;
  isStickyActive: boolean;
  loadedCount: number;
  totalCount: number;
  fps: number;
}

export const DiagnosticPanel: React.FC<DiagnosticPanelProps> = ({
  systemOwner,
  activeFrameText,
  scrollPercent,
  isStickyActive,
  loadedCount,
  totalCount,
  fps
}) => {
  const getOwnerBadgeStyle = () => {
    switch (systemOwner) {
      case 'IDLE':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'MOUSE_GAZE':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'TOUCH_GAZE':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'HANDOFF':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30 animate-pulse';
      case 'SCROLL_TURN':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getOwnerLabel = () => {
    switch (systemOwner) {
      case 'IDLE':
        return 'State 1: Idle Loop';
      case 'MOUSE_GAZE':
        return 'State 1: Mouse Gaze';
      case 'TOUCH_GAZE':
        return 'State 1: Touch Gaze';
      case 'HANDOFF':
        return 'Handoff Active';
      case 'SCROLL_TURN':
        return 'State 2: Scroll Turn';
    }
  };

  const loadPercent = Math.round((loadedCount / totalCount) * 100);

  return (
    <div className="absolute top-6 left-6 z-30 pointer-events-auto bg-neutral-900/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white font-sans max-w-xs shadow-2xl transition-all select-none">
      {/* Header Badge */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Character Controller
          </span>
        </div>
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase border ${getOwnerBadgeStyle()}`}
        >
          {getOwnerLabel()}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="space-y-2 text-xs font-mono">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-neutral-400 block text-[10px] flex items-center gap-1">
              <Layers className="w-3 h-3 text-neutral-400" /> ACTIVE FRAME
            </span>
            <span className="text-emerald-400 font-bold text-xs truncate block mt-0.5">
              {activeFrameText}
            </span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-neutral-400 block text-[10px] flex items-center gap-1">
              <MoveVertical className="w-3 h-3 text-neutral-400" /> SCROLL PROGRESS
            </span>
            <span className="text-white font-bold text-xs block mt-0.5">{scrollPercent}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between">
            <span className="text-neutral-400 text-[10px]">STICKY</span>
            <span
              className={`font-bold text-xs ${
                isStickyActive ? 'text-emerald-400' : 'text-amber-400'
              }`}
            >
              {isStickyActive ? 'TRUE' : 'FALSE'}
            </span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between">
            <span className="text-neutral-400 text-[10px]">PERF</span>
            <span className="text-white font-bold text-xs">{fps} FPS</span>
          </div>
        </div>

        {/* Assets Preload Progress */}
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-neutral-400 flex items-center gap-1">
              <Eye className="w-3 h-3 text-emerald-400" /> PRELOADED FRAMES
            </span>
            <span className="text-neutral-300 font-bold">
              {loadedCount} / {totalCount} ({loadPercent}%)
            </span>
          </div>
          <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-200"
              style={{ width: `${loadPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
