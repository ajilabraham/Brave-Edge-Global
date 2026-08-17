import { useEffect, useRef, useState } from 'react';
import { Sparkles, Eye, MoveVertical } from 'lucide-react';

const TOTAL_SCROLL_FRAMES = 121;

export const ScrollTurnPrototype: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Preloaded images array ref
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Scroll & Animation frame state
  const scrollProgressRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const isStickyActiveRef = useRef<boolean>(false);

  // Diagnostic panel stats state for UI overlay
  const [hudStats, setHudStats] = useState({
    activeFrameText: '#000 / 120',
    scrollPercent: '0.0%',
    isStickyActive: 'FALSE',
    fps: 60
  });

  // 1. Preload all 121 scroll-turn WebP frames from public/images/scroll-turn/
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_SCROLL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/images/scroll-turn/frame-${paddedIndex}.webp`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_SCROLL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_SCROLL_FRAMES) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Section-Relative Scroll Progress Solver (0.0 -> 1.0) & Sticky State Tracker
  useEffect(() => {
    if (!isLoaded) return;

    const calculateScrollState = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      const maxScrollable = containerHeight - windowHeight;

      if (maxScrollable <= 0) {
        scrollProgressRef.current = 0;
        targetFrameRef.current = 0;
        isStickyActiveRef.current = false;
        return;
      }

      // Check if sticky stage is currently pinned in viewport
      const isSticky = rect.top <= 0 && rect.bottom >= windowHeight;
      isStickyActiveRef.current = isSticky;

      // Section-relative scroll progress (0.0 at top of section, 1.0 at bottom)
      const scrolledDistance = -rect.top;
      const progress = Math.min(1.0, Math.max(0.0, scrolledDistance / maxScrollable));

      scrollProgressRef.current = progress;
      // Direct exact mapping: frameIndex = Math.round(scrollProgress * 120)
      targetFrameRef.current = Math.min(120, Math.max(0, Math.round(progress * 120)));
    };

    // Attach passive listeners to window and document
    window.addEventListener('scroll', calculateScrollState, { passive: true });
    document.addEventListener('scroll', calculateScrollState, { passive: true });
    window.addEventListener('resize', calculateScrollState, { passive: true });

    // Backup polling timer (every 50ms) to ensure stats are 100% up-to-date
    const timerId = setInterval(calculateScrollState, 50);

    // Initial calculation
    calculateScrollState();

    return () => {
      window.removeEventListener('scroll', calculateScrollState);
      document.removeEventListener('scroll', calculateScrollState);
      window.removeEventListener('resize', calculateScrollState);
      clearInterval(timerId);
    };
  }, [isLoaded]);

  // 3. Main Animation Loop (requestAnimationFrame)
  useEffect(() => {
    if (!isLoaded) return;

    let animationFrameId: number;
    let frameCounter = 0;
    let fpsTimer = performance.now();

    const render = () => {
      const now = performance.now();
      frameCounter++;

      // Exact nearest target frame mapping
      const activeFrameIdx = targetFrameRef.current;

      // Update Diagnostic Panel Stats every 80ms
      if (now - fpsTimer >= 80) {
        const calculatedFps = Math.round((frameCounter * 1000) / (now - fpsTimer));
        setHudStats({
          activeFrameText: `#${String(activeFrameIdx).padStart(3, '0')} / 120`,
          scrollPercent: `${(scrollProgressRef.current * 100).toFixed(1)}%`,
          isStickyActive: isStickyActiveRef.current ? 'TRUE' : 'FALSE',
          fps: calculatedFps
        });
        frameCounter = 0;
        fpsTimer = now;
      }

      // Draw active frame on stationary canvas
      const canvas = canvasRef.current;
      const activeImage = imagesRef.current[activeFrameIdx];

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

          // Object-fit contain rendering algorithm - Keeps character in exact same screen position
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

  // Loading Screen (Preloads all 121 frames before allowing interaction)
  if (!isLoaded) {
    const progressPercent = Math.round((loadedCount / TOTAL_SCROLL_FRAMES) * 100);
    return (
      <div className="fixed inset-0 bg-[#0d0e12] flex flex-col items-center justify-center text-white select-none z-50">
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
          <Eye className="absolute text-emerald-400 w-6 h-6 animate-pulse" />
        </div>
        <h2 className="text-xl font-medium tracking-tight mb-2">Loading Scroll Turn Sequence</h2>
        <p className="text-sm text-neutral-400 font-mono mb-4">
          Preloading 121 WebP frames ({loadedCount} / {TOTAL_SCROLL_FRAMES})
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
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#0d0e12] select-none">
      {/* True Sticky Stage: Remains visually pinned to top:0 of viewport during 300vh scroll */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Fullscreen Canvas Render Surface (Stationary viewport position) */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Floating Diagnostic Panel */}
        <div className="absolute top-6 left-6 z-20 pointer-events-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white font-sans max-w-xs shadow-2xl transition-all">
          <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                State 2: Scroll Turn
              </span>
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase ${
                hudStats.isStickyActive === 'TRUE'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}
            >
              {hudStats.isStickyActive === 'TRUE' ? 'Sticky Pinned' : 'Unpinned'}
            </span>
          </div>

          {/* Diagnostic Panel Stats */}
          <div className="space-y-2 text-xs font-mono">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <span className="text-neutral-400 block text-[10px]">SCROLL PROGRESS</span>
                <span className="text-emerald-400 font-bold text-sm block">
                  {hudStats.scrollPercent}
                </span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <span className="text-neutral-400 block text-[10px]">ACTIVE FRAME</span>
                <span className="text-white font-bold text-xs block">
                  {hudStats.activeFrameText}
                </span>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between">
              <span className="text-neutral-400 text-[10px]">STICKY ACTIVE</span>
              <span
                className={`font-bold text-xs ${
                  hudStats.isStickyActive === 'TRUE' ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {hudStats.isStickyActive}
              </span>
            </div>
          </div>
        </div>

        {/* Floating Scroll Cue Badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 bg-neutral-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-neutral-300 shadow-xl">
          <MoveVertical className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
          <span>Scroll down to turn character • Scroll up to reverse turn</span>
        </div>
      </div>
    </section>
  );
};
