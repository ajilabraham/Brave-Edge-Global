import { useEffect, useRef, useState } from 'react';
import { MousePointer, Sparkles, Eye } from 'lucide-react';

const TOTAL_SCRUB_FRAMES = 241;
const TOTAL_IDLE_FRAMES = 52;
const IDLE_FPS = 24;

// Visually calibrated anchor keyframes for all 8 cardinal & intercardinal directions in mouse-scrub sequence
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

type AppAnimState = 'idle' | 'tracking' | 'returning';

export const MouseScrubPrototype: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Preloaded image refs
  const idleImagesRef = useRef<HTMLImageElement[]>([]);
  const scrubImagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // State machine ref: 'idle' | 'tracking' | 'returning'
  const animStateRef = useRef<AppAnimState>('idle');
  const hasUserMovedMouseRef = useRef<boolean>(false);
  const initialMousePosRef = useRef<{ x: number; y: number } | null>(null);

  const lastMouseTimeRef = useRef<number>(0);
  const mousePixelPosRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });

  // Mouse Scrub animation Lerp state
  const currentScrubFrameRef = useRef<number>(0);
  const targetScrubFrameRef = useRef<number>(0);

  // Dedicated 52-frame Idle sequence playback state (24 FPS continuous ping-pong loop)
  const idleStartTimeRef = useRef<number>(performance.now());

  // Mode Selection
  const [mode, setMode] = useState<'spatial' | 'linear'>('spatial');
  const modeRef = useRef<'spatial' | 'linear'>('spatial');
  modeRef.current = mode;

  // Debug Stats state for UI overlay
  const [hudStats, setHudStats] = useState({
    activeFrameText: '#000 / 051 (Idle)',
    fps: 60,
    animState: 'idle',
    mouseCoords: '0, 0'
  });

  // 1. Preload both Asset Sets (52 Idle frames + 241 Mouse Scrub frames = 293 total)
  useEffect(() => {
    let isMounted = true;
    const totalAssets = TOTAL_IDLE_FRAMES + TOTAL_SCRUB_FRAMES;
    let count = 0;

    const checkComplete = () => {
      if (!isMounted) return;
      count++;
      setLoadedCount(count);
      if (count === totalAssets) {
        setIsLoaded(true);
      }
    };

    // Load 52 dedicated Idle frames from public/images/idle-loop/
    const idleImages: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_IDLE_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/images/idle-loop/frame-${paddedIndex}.webp`;
      img.onload = checkComplete;
      img.onerror = checkComplete;
      idleImages.push(img);
    }
    idleImagesRef.current = idleImages;

    // Load 241 Mouse Scrub frames from public/images/mouse-scrub/
    const scrubImages: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_SCRUB_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/images/mouse-scrub/frame-${paddedIndex}.webp`;
      img.onload = checkComplete;
      img.onerror = checkComplete;
      scrubImages.push(img);
    }
    scrubImagesRef.current = scrubImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Helper: Calculate target frame based on 1:1 pixel vector for 241-frame mouse scrub sequence
  const calculateTargetScrubFrame = (pixelX: number, pixelY: number): number => {
    if (modeRef.current === 'linear') {
      const normX = Math.min(1, Math.max(0, pixelX / window.innerWidth));
      return Math.min(TOTAL_SCRUB_FRAMES - 1, Math.max(0, Math.round(normX * (TOTAL_SCRUB_FRAMES - 1))));
    }

    // Exact screen pixel coordinates of character eyes
    const eyePixelX = window.innerWidth / 2;
    const eyePixelY = window.innerHeight * 0.42;

    const dx = pixelX - eyePixelX;
    const dy = pixelY - eyePixelY;
    const distancePixels = Math.sqrt(dx * dx + dy * dy);

    if (distancePixels < 8) {
      return 0;
    }

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
    const neutralCenter = 0;

    return neutralCenter + (directionalFrame - neutralCenter) * intensity;
  };

  // 3. Main Animation Loop (requestAnimationFrame)
  useEffect(() => {
    if (!isLoaded) return;

    let animationFrameId: number;
    let frameCounter = 0;
    let fpsTimer = performance.now();
    idleStartTimeRef.current = performance.now();

    const render = () => {
      const now = performance.now();
      frameCounter++;

      // Check interaction timeout (3.0s of inactivity -> begin smooth return to neutral before resuming idle)
      const timeSinceLastMove = now - lastMouseTimeRef.current;
      if (hasUserMovedMouseRef.current && animStateRef.current === 'tracking' && timeSinceLastMove > 3000) {
        animStateRef.current = 'returning';
      }

      let activeImage: HTMLImageElement | null = null;
      let activeFrameDisplay = '';

      if (animStateRef.current === 'idle') {
        // STATE 1: IDLE LOOP (Always starts here on page load)
        // Plays 52-frame sequence sequentially at 24 FPS continuously
        const elapsedIdleSec = (now - idleStartTimeRef.current) / 1000;
        const idleFrameIndex = Math.floor(elapsedIdleSec * IDLE_FPS) % TOTAL_IDLE_FRAMES;

        activeImage = idleImagesRef.current[idleFrameIndex] || null;
        activeFrameDisplay = `#${String(idleFrameIndex).padStart(3, '0')} / 051 (Idle)`;
      } else if (animStateRef.current === 'tracking') {
        // STATE 2: ACTIVE MOUSE TRACKING
        targetScrubFrameRef.current = calculateTargetScrubFrame(
          mousePixelPosRef.current.x,
          mousePixelPosRef.current.y
        );

        // Shortest-Path Circular Lerp towards target gaze frame
        let target = targetScrubFrameRef.current;
        let current = currentScrubFrameRef.current;

        let diff = target - current;
        if (diff > TOTAL_SCRUB_FRAMES / 2) {
          target -= TOTAL_SCRUB_FRAMES;
        } else if (diff < -TOTAL_SCRUB_FRAMES / 2) {
          target += TOTAL_SCRUB_FRAMES;
        }

        current += (target - current) * 0.12;
        currentScrubFrameRef.current = (current + TOTAL_SCRUB_FRAMES) % TOTAL_SCRUB_FRAMES;

        const scrubIdx = Math.min(
          TOTAL_SCRUB_FRAMES - 1,
          Math.max(0, Math.round(currentScrubFrameRef.current))
        );
        activeImage = scrubImagesRef.current[scrubIdx] || null;
        activeFrameDisplay = `#${String(scrubIdx).padStart(3, '0')} / 240 (Scrub)`;
      } else if (animStateRef.current === 'returning') {
        // STATE 3: SMOOTH RETURN TO NEUTRAL FORWARD-FACING BEFORE RESUMING IDLE
        // Target scrub frame is set to 0 (neutral front)
        targetScrubFrameRef.current = 0;

        let target = 0;
        let current = currentScrubFrameRef.current;

        let diff = target - current;
        if (diff > TOTAL_SCRUB_FRAMES / 2) {
          target -= TOTAL_SCRUB_FRAMES;
        } else if (diff < -TOTAL_SCRUB_FRAMES / 2) {
          target += TOTAL_SCRUB_FRAMES;
        }

        current += (target - current) * 0.08;
        currentScrubFrameRef.current = (current + TOTAL_SCRUB_FRAMES) % TOTAL_SCRUB_FRAMES;

        const scrubIdx = Math.min(
          TOTAL_SCRUB_FRAMES - 1,
          Math.max(0, Math.round(currentScrubFrameRef.current))
        );

        // Once character has smoothly returned to neutral front (frame < 0.8), switch to IDLE loop seamlessly
        if (Math.abs(currentScrubFrameRef.current) < 0.8 || Math.abs(currentScrubFrameRef.current - TOTAL_SCRUB_FRAMES) < 0.8) {
          animStateRef.current = 'idle';
          idleStartTimeRef.current = now;
          currentScrubFrameRef.current = 0;
        }

        activeImage = scrubImagesRef.current[scrubIdx] || null;
        activeFrameDisplay = `#${String(scrubIdx).padStart(3, '0')} / 240 (Returning)`;
      }

      // Update FPS & Debug Stats overlay
      if (now - fpsTimer >= 500) {
        const calculatedFps = Math.round((frameCounter * 1000) / (now - fpsTimer));
        setHudStats({
          activeFrameText: activeFrameDisplay,
          fps: calculatedFps,
          animState: animStateRef.current,
          mouseCoords: `${Math.round(mousePixelPosRef.current.x)}, ${Math.round(mousePixelPosRef.current.y)}`
        });
        frameCounter = 0;
        fpsTimer = now;
      }

      // Render active image to HTML5 canvas
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
          ctx.clearRect(0, 0, displayWidth, displayHeight);

          // Object-fit contain rendering algorithm
          const imgAspect = activeImage.naturalWidth / activeImage.naturalHeight || 4 / 3;
          const canvasAspect = displayWidth / displayHeight;

          let drawWidth = displayWidth;
          let drawHeight = displayHeight;
          let offsetX = 0;
          let offsetY = 0;

          if (canvasAspect > imgAspect) {
            drawWidth = displayHeight * imgAspect;
            drawHeight = displayHeight;
            offsetX = (displayWidth - drawWidth) / 2;
          } else {
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgAspect;
            offsetY = (displayHeight - drawHeight) / 2;
          }

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
  }, [isLoaded]);

  // 4. Pointer / Mouse Movement Handlers
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      // Ignore initial browser position events at load time until real cursor movement occurs
      if (!hasUserMovedMouseRef.current) {
        if (!initialMousePosRef.current) {
          initialMousePosRef.current = { x: clientX, y: clientY };
          return;
        }
        // Require at least 5px of movement to confirm intentional user pointer movement
        const dist = Math.hypot(
          clientX - initialMousePosRef.current.x,
          clientY - initialMousePosRef.current.y
        );
        if (dist < 5) return;

        // First real pointer movement detected!
        hasUserMovedMouseRef.current = true;
        // Seamless transition from Idle to Scrub: initialize scrub frame at 0 (neutral front)
        currentScrubFrameRef.current = 0;
      }

      mousePixelPosRef.current = { x: clientX, y: clientY };

      // Transition to active tracking state
      animStateRef.current = 'tracking';
      lastMouseTimeRef.current = performance.now();
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  // Loading Screen (Preloads all 293 frames)
  if (!isLoaded) {
    const totalAssets = TOTAL_IDLE_FRAMES + TOTAL_SCRUB_FRAMES;
    const progressPercent = Math.round((loadedCount / totalAssets) * 100);
    return (
      <div className="fixed inset-0 bg-[#0d0e12] flex flex-col items-center justify-center text-white select-none z-50">
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
          <Eye className="absolute text-emerald-400 w-6 h-6 animate-pulse" />
        </div>
        <h2 className="text-xl font-medium tracking-tight mb-2">Loading Character Sequences</h2>
        <p className="text-sm text-neutral-400 font-mono mb-4">
          Preloading Idle & Scrub WebP frames ({loadedCount} / {totalAssets})
        </p>
        <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-[#0d0e12] overflow-hidden select-none cursor-crosshair">
      {/* Fullscreen Canvas Render Surface */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating HUD & Debug Controller */}
      <div className="absolute top-6 left-6 z-20 pointer-events-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white font-sans max-w-xs shadow-2xl transition-all">
        <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Mouse Scrub Prototype
            </span>
          </div>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase ${
              hudStats.animState === 'tracking'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : hudStats.animState === 'returning'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
            }`}
          >
            {hudStats.animState === 'tracking'
              ? 'Tracking Mouse'
              : hudStats.animState === 'returning'
              ? 'Returning to Neutral'
              : 'Neutral Idle Loop'}
          </span>
        </div>

        {/* Realtime Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-neutral-400 block text-[10px]">ACTIVE FRAME</span>
            <span className="text-emerald-400 font-bold text-xs truncate block">
              {hudStats.activeFrameText}
            </span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-neutral-400 block text-[10px]">PERFORMANCE</span>
            <span className="text-white font-bold text-sm">{hudStats.fps} FPS</span>
            <span className="text-neutral-500 text-[10px]"> (rAF)</span>
          </div>
        </div>

        {/* Mode Selector Toggle */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider block">
            Interaction Mode
          </span>
          <div className="grid grid-cols-2 gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setMode('spatial')}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                mode === 'spatial'
                  ? 'bg-emerald-500 text-neutral-950 shadow-md font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              2D Gaze
            </button>
            <button
              onClick={() => setMode('linear')}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                mode === 'linear'
                  ? 'bg-emerald-500 text-neutral-950 shadow-md font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <MousePointer className="w-3.5 h-3.5" />
              Horizontal
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Hint Badge on Center Bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 bg-neutral-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-neutral-300 shadow-xl">
        <MousePointer className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
        <span>Move mouse to scrub character gaze • Starts in neutral idle until first move</span>
      </div>
    </div>
  );
};
