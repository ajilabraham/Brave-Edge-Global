import React, { useEffect, useRef, useState } from 'react';
import { AssetLoader } from './AssetLoader';
import type { PreloadedAssets } from './AssetLoader';

const TOTAL_IDLE_FRAMES = 52;
const TOTAL_SCRUB_FRAMES = 241;
const TOTAL_TURN_FRAMES = 121;
const IDLE_FPS = 24;

// Exact background hex colors matching frame assets
const STATE1_BG_COLOR = { r: 246, g: 245, b: 248 }; // #f6f5f8 matching idle-loop character background
const STATE2_BG_COLOR = { r: 255, g: 255, b: 255 }; // #ffffff matching scroll-turn character background

// Internal system state machine
type InternalSystemOwner =
  | 'IDLE'
  | 'MOUSE_GAZE'
  | 'TOUCH_GAZE'
  | 'HANDOFF'
  | 'SCROLL_TURN';

// Visually calibrated anchor keyframes for 241-frame mouse-scrub sequence
const ANCHOR_POINTS: [number, number][] = [
  [-180, 45],   // Screen Left Central (pure horizontal left)
  [-135, 65],   // Screen Top-Left
  [-90,  90],   // Screen Top
  [-45,  112],  // Screen Top-Right
  [0,    125],  // Screen Right Central (pure horizontal right)
  [45,   145],  // Screen Down-Right
  [135,  185],  // Screen Down-Left
  [180,  45]    // Screen Left Central (wrap)
];

interface CharacterExperienceProps {
  renderOverlay?: (scrollProgress: number) => React.ReactNode;
}

export const CharacterExperience: React.FC<CharacterExperienceProps> = ({ renderOverlay }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const stickyStageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Asset Loader & Preloaded Arrays
  const assetsRef = useRef<PreloadedAssets | null>(null);
  const [loadState, setLoadState] = useState({
    loadedTotal: 0,
    totalCount: 414,
    isIdleReady: false
  });

  // Central System Owner State machine
  const systemOwnerRef = useRef<InternalSystemOwner>('IDLE');

  // Background Color Lerp State
  const currentBgColorRef = useRef<{ r: number; g: number; b: number }>({ ...STATE1_BG_COLOR });

  // Pointer & Touch Interaction State
  const hasUserMovedMouseRef = useRef<boolean>(false);
  const initialMousePosRef = useRef<{ x: number; y: number } | null>(null);
  const lastInteractionTimeRef = useRef<number>(0);
  const mousePixelPosRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });

  // State 1 Mouse/Touch Scrub animation lerp state
  const currentScrubFrameRef = useRef<number>(0);
  const targetScrubFrameRef = useRef<number>(0);

  // State 2 Scroll Turn animation lerp state
  const [scrollProgressState, setScrollProgressState] = useState<number>(0);
  const scrollProgressRef = useRef<number>(0);
  const currentTurnFrameRef = useRef<number>(0);
  const targetTurnFrameRef = useRef<number>(0);

  // Handoff state (State 1 -> State 2 smooth 250ms lerp)
  const handoffStartTimeRef = useRef<number>(0);

  // Idle Loop timestamp
  const idleStartTimeRef = useRef<number>(performance.now());

  // 1. Progressive Asset Preloader Initialization
  useEffect(() => {
    const loader = new AssetLoader((loaded, total, readyStates) => {
      assetsRef.current = loader.getAssets();
      setLoadState({
        loadedTotal: loaded,
        totalCount: total,
        isIdleReady: readyStates.idle
      });
    });

    loader.startLoading();
  }, []);

  // 2. Helper: Calculate target frame for 241-frame mouse/touch scrub sequence
  const calculateTargetScrubFrame = (pixelX: number, pixelY: number): number => {
    const eyePixelX = window.innerWidth / 2;
    const eyePixelY = window.innerHeight * 0.42;

    const dx = pixelX - eyePixelX;
    const dy = pixelY - eyePixelY;
    const distancePixels = Math.sqrt(dx * dx + dy * dy);

    if (distancePixels < 8) return 0;

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    while (angle < -180) angle += 360;
    while (angle >= 180) angle -= 360;

    let directionalFrame = 45;

    for (let i = 0; i < ANCHOR_POINTS.length - 1; i++) {
      const [a1, f1] = ANCHOR_POINTS[i];
      const [a2, f2] = ANCHOR_POINTS[i + 1];

      if (angle >= a1 && angle <= a2) {
        const t = (angle - a1) / (a2 - a1);
        directionalFrame = f1 + t * (f2 - f1);
        break;
      }
    }

    const maxRadius = Math.min(window.innerWidth, window.innerHeight) * 0.22;
    const intensity = Math.min(1.0, distancePixels / maxRadius);
    return directionalFrame * intensity;
  };

  // 3. Scroll Progress Solver & State 1 -> State 2 Handoff Controller
  useEffect(() => {
    if (!loadState.isIdleReady) return;

    const calculateScrollAndHandoff = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      const maxScrollable = containerHeight - windowHeight;

      if (maxScrollable <= 0) {
        scrollProgressRef.current = 0;
        targetTurnFrameRef.current = 0;
        setScrollProgressState(0);
        return;
      }

      const scrolledDistance = -rect.top;
      const progress = Math.min(1.0, Math.max(0.0, scrolledDistance / maxScrollable));
      scrollProgressRef.current = progress;
      setScrollProgressState(progress);

      // Target frame in 121-frame scroll-turn sequence
      targetTurnFrameRef.current = Math.min(120, Math.max(0, Math.round(progress * 120)));

      // STATE 1 -> STATE 2 HANDOFF CONTROLLER
      if (scrolledDistance > 8) {
        if (
          systemOwnerRef.current === 'IDLE' ||
          systemOwnerRef.current === 'MOUSE_GAZE' ||
          systemOwnerRef.current === 'TOUCH_GAZE'
        ) {
          systemOwnerRef.current = 'HANDOFF';
          handoffStartTimeRef.current = performance.now();
        }
      } else if (progress <= 0.002) {
        if (systemOwnerRef.current === 'SCROLL_TURN' || systemOwnerRef.current === 'HANDOFF') {
          systemOwnerRef.current = 'IDLE';
          idleStartTimeRef.current = performance.now();
        }
      }
    };

    window.addEventListener('scroll', calculateScrollAndHandoff, { passive: true });
    document.addEventListener('scroll', calculateScrollAndHandoff, { passive: true });
    window.addEventListener('resize', calculateScrollAndHandoff, { passive: true });

    const timerId = setInterval(calculateScrollAndHandoff, 40);
    calculateScrollAndHandoff();

    return () => {
      window.removeEventListener('scroll', calculateScrollAndHandoff);
      document.removeEventListener('scroll', calculateScrollAndHandoff);
      window.removeEventListener('resize', calculateScrollAndHandoff);
      clearInterval(timerId);
    };
  }, [loadState.isIdleReady]);

  // 4. Pointer & Touch Event Listeners (Desktop Mouse & Mobile Touch Gaze)
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (
        systemOwnerRef.current === 'SCROLL_TURN' ||
        systemOwnerRef.current === 'HANDOFF'
      ) {
        return;
      }

      let clientX = 0;
      let clientY = 0;
      let isTouch = false;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        isTouch = true;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      if (!isTouch && !hasUserMovedMouseRef.current) {
        if (!initialMousePosRef.current) {
          initialMousePosRef.current = { x: clientX, y: clientY };
          return;
        }
        const dist = Math.hypot(
          clientX - initialMousePosRef.current.x,
          clientY - initialMousePosRef.current.y
        );
        if (dist < 5) return;
        hasUserMovedMouseRef.current = true;
        currentScrubFrameRef.current = 0;
      }

      mousePixelPosRef.current = { x: clientX, y: clientY };
      systemOwnerRef.current = isTouch ? 'TOUCH_GAZE' : 'MOUSE_GAZE';
      lastInteractionTimeRef.current = performance.now();
    };

    const handleTouchEnd = () => {
      if (systemOwnerRef.current === 'TOUCH_GAZE') {
        lastInteractionTimeRef.current = performance.now() - 3000;
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // 5. Main Unified Rendering Engine & Background Color Lerper (requestAnimationFrame)
  useEffect(() => {
    if (!loadState.isIdleReady) return;

    let animationFrameId: number;

    const render = () => {
      const now = performance.now();
      const assets = assetsRef.current;
      if (!assets) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const timeSinceInteraction = now - lastInteractionTimeRef.current;
      if (
        (systemOwnerRef.current === 'MOUSE_GAZE' || systemOwnerRef.current === 'TOUCH_GAZE') &&
        timeSinceInteraction > 3000
      ) {
        targetScrubFrameRef.current = 0;
        if (Math.abs(currentScrubFrameRef.current) < 1.0) {
          systemOwnerRef.current = 'IDLE';
          idleStartTimeRef.current = now;
        }
      }

      let activeImage: HTMLImageElement | null = null;
      let targetBg = STATE1_BG_COLOR;

      if (systemOwnerRef.current === 'HANDOFF') {
        targetBg = STATE2_BG_COLOR;
        const elapsedHandoff = now - handoffStartTimeRef.current;
        const progressT = Math.min(1.0, elapsedHandoff / 250);

        currentScrubFrameRef.current += (0 - currentScrubFrameRef.current) * 0.25;

        if (progressT >= 1.0 || Math.abs(currentScrubFrameRef.current) < 0.8) {
          systemOwnerRef.current = 'SCROLL_TURN';
          currentTurnFrameRef.current = 0;
        }

        if (assets.isScrubReady && assets.scrubImages.length > 0) {
          const scrubIdx = Math.min(
            TOTAL_SCRUB_FRAMES - 1,
            Math.max(0, Math.round(currentScrubFrameRef.current))
          );
          activeImage = assets.scrubImages[scrubIdx];
        } else {
          activeImage = assets.idleImages[0];
        }
      } else if (systemOwnerRef.current === 'SCROLL_TURN') {
        targetBg = STATE2_BG_COLOR;
        const targetTurn = targetTurnFrameRef.current;
        currentTurnFrameRef.current += (targetTurn - currentTurnFrameRef.current) * 0.30;

        const turnIdx = Math.min(
          TOTAL_TURN_FRAMES - 1,
          Math.max(0, Math.round(currentTurnFrameRef.current))
        );

        if (assets.isTurnReady && assets.turnImages.length > 0) {
          activeImage = assets.turnImages[turnIdx];
        } else {
          activeImage = assets.idleImages[0];
        }
      } else if (
        systemOwnerRef.current === 'MOUSE_GAZE' ||
        systemOwnerRef.current === 'TOUCH_GAZE'
      ) {
        targetBg = STATE1_BG_COLOR;
        if (assets.isScrubReady && assets.scrubImages.length > 0) {
          targetScrubFrameRef.current = calculateTargetScrubFrame(
            mousePixelPosRef.current.x,
            mousePixelPosRef.current.y
          );

          let target = targetScrubFrameRef.current;
          let current = currentScrubFrameRef.current;

          let diff = target - current;
          if (diff > TOTAL_SCRUB_FRAMES / 2) target -= TOTAL_SCRUB_FRAMES;
          else if (diff < -TOTAL_SCRUB_FRAMES / 2) target += TOTAL_SCRUB_FRAMES;

          current += (target - current) * 0.12;
          currentScrubFrameRef.current = (current + TOTAL_SCRUB_FRAMES) % TOTAL_SCRUB_FRAMES;

          const scrubIdx = Math.min(
            TOTAL_SCRUB_FRAMES - 1,
            Math.max(0, Math.round(currentScrubFrameRef.current))
          );
          activeImage = assets.scrubImages[scrubIdx];
        } else {
          const elapsedIdleSec = (now - idleStartTimeRef.current) / 1000;
          const idleFrameIdx = Math.floor(elapsedIdleSec * IDLE_FPS) % TOTAL_IDLE_FRAMES;
          activeImage = assets.idleImages[idleFrameIdx];
        }
      } else {
        targetBg = STATE1_BG_COLOR;
        const elapsedIdleSec = (now - idleStartTimeRef.current) / 1000;
        const idleFrameIdx = Math.floor(elapsedIdleSec * IDLE_FPS) % TOTAL_IDLE_FRAMES;
        activeImage = assets.idleImages[idleFrameIdx] || assets.idleImages[0];
      }

      // Smoothly lerp active background RGB values
      const curBg = currentBgColorRef.current;
      curBg.r += (targetBg.r - curBg.r) * 0.12;
      curBg.g += (targetBg.g - curBg.g) * 0.12;
      curBg.b += (targetBg.b - curBg.b) * 0.12;

      const bgR = Math.round(curBg.r);
      const bgG = Math.round(curBg.g);
      const bgB = Math.round(curBg.b);
      const currentBgHex = `rgb(${bgR}, ${bgG}, ${bgB})`;

      if (containerRef.current) {
        containerRef.current.style.backgroundColor = currentBgHex;
      }
      if (stickyStageRef.current) {
        stickyStageRef.current.style.backgroundColor = currentBgHex;
      }

      // Render active frame to Canvas with exact background fill & responsive scale
      const canvas = canvasRef.current;
      if (canvas && activeImage && activeImage.complete) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const dpr = window.devicePixelRatio || 1;
          const displayWidth = canvas.clientWidth;
          const displayHeight = canvas.clientHeight;

          if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
          }

          ctx.save();
          ctx.scale(dpr, dpr);
          
          ctx.fillStyle = currentBgHex;
          ctx.fillRect(0, 0, displayWidth, displayHeight);

          // Aspect-ratio contain centering
          const imgAspect = activeImage.naturalWidth / activeImage.naturalHeight || 4 / 3;
          const canvasAspect = displayWidth / displayHeight;

          let drawWidth = displayWidth;
          let drawHeight = displayHeight;

          if (canvasAspect > imgAspect) {
            drawWidth = displayHeight * imgAspect;
            drawHeight = displayHeight;
          } else {
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgAspect;
          }

          // Desktop Hero Mode: Scale character slightly (0.80 -> 1.0) so mascot head stays strictly within the 33%-40% center zone
          let scaleFactor = 1.0;
          if (displayWidth >= 1024) {
            const heroProgress = Math.min(1.0, scrollProgressRef.current / 0.12);
            scaleFactor = 0.80 + heroProgress * 0.20;
          }

          drawWidth *= scaleFactor;
          drawHeight *= scaleFactor;

          const offsetX = (displayWidth - drawWidth) / 2;
          const offsetY = (displayHeight - drawHeight) / 2;

          ctx.drawImage(activeImage, offsetX, offsetY, drawWidth, drawHeight);
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [loadState.isIdleReady]);

  // Loading Screen
  if (!loadState.isIdleReady) {
    const progressPercent = Math.round((loadState.loadedTotal / 52) * 100);
    return (
      <div className="fixed inset-0 bg-[#f6f5f8] flex flex-col items-center justify-center text-neutral-900 select-none z-50">
        <div className="w-12 h-12 border-4 border-neutral-300 border-t-neutral-800 rounded-full animate-spin mb-4" />
        <h2 className="text-lg font-medium tracking-tight mb-1 text-neutral-800">
          Loading Experience
        </h2>
        <p className="text-xs text-neutral-500 font-mono mb-3">
          {progressPercent}%
        </p>
        <div className="w-48 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-neutral-900 transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#f6f5f8] select-none transition-colors duration-200">
      {/* Sticky Viewport Stage: Pinned to top:0 during 300vh scroll */}
      <div ref={stickyStageRef} className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#f6f5f8]">
        {/* Fullscreen Canvas Render Surface */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Render Overlay (Hero Left Content & Section 2 Scroll Narrative) */}
        {renderOverlay && renderOverlay(scrollProgressState)}
      </div>
    </section>
  );
};
