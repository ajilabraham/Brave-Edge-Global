export interface PreloadedAssets {
  idleImages: HTMLImageElement[];
  scrubImages: HTMLImageElement[];
  turnImages: HTMLImageElement[];
  isIdleReady: boolean;
  isScrubReady: boolean;
  isTurnReady: boolean;
  loadedTotal: number;
  totalCount: number;
}

const TOTAL_IDLE_FRAMES = 52;
const TOTAL_SCRUB_FRAMES = 241;
const TOTAL_TURN_FRAMES = 121;
export const TOTAL_ASSETS = TOTAL_IDLE_FRAMES + TOTAL_SCRUB_FRAMES + TOTAL_TURN_FRAMES; // 414 frames

export class AssetLoader {
  private idleImages: HTMLImageElement[] = [];
  private scrubImages: HTMLImageElement[] = [];
  private turnImages: HTMLImageElement[] = [];

  private isIdleReady = false;
  private isScrubReady = false;
  private isTurnReady = false;
  private loadedTotal = 0;

  private onProgressCallback?: (loaded: number, total: number, readyStates: { idle: boolean; turn: boolean; scrub: boolean }) => void;

  constructor(onProgress?: (loaded: number, total: number, readyStates: { idle: boolean; turn: boolean; scrub: boolean }) => void) {
    this.onProgressCallback = onProgress;
  }

  public startLoading(): void {
    let idleCount = 0;
    let turnCount = 0;
    let scrubCount = 0;

    const notify = () => {
      if (this.onProgressCallback) {
        this.onProgressCallback(this.loadedTotal, TOTAL_ASSETS, {
          idle: this.isIdleReady,
          turn: this.isTurnReady,
          scrub: this.isScrubReady
        });
      }
    };

    // PHASE 1: Load 52 Idle frames first (Highest priority for instant initial render)
    for (let i = 0; i < TOTAL_IDLE_FRAMES; i++) {
      const img = new Image();
      const pad = String(i).padStart(3, '0');
      img.src = `/images/idle-loop/frame-${pad}.webp`;

      const checkIdle = () => {
        idleCount++;
        this.loadedTotal++;
        if (idleCount === TOTAL_IDLE_FRAMES) {
          this.isIdleReady = true;
        }
        notify();
      };

      img.onload = checkIdle;
      img.onerror = checkIdle;
      this.idleImages.push(img);
    }

    // PHASE 2: Load 121 Scroll-Turn frames (High priority for scroll readiness)
    for (let i = 0; i < TOTAL_TURN_FRAMES; i++) {
      const img = new Image();
      const pad = String(i).padStart(3, '0');
      img.src = `/images/scroll-turn/frame-${pad}.webp`;

      const checkTurn = () => {
        turnCount++;
        this.loadedTotal++;
        if (turnCount === TOTAL_TURN_FRAMES) {
          this.isTurnReady = true;
        }
        notify();
      };

      img.onload = checkTurn;
      img.onerror = checkTurn;
      this.turnImages.push(img);
    }

    // PHASE 3: Load 241 Mouse/Touch Scrub frames (Progressive background loading)
    for (let i = 0; i < TOTAL_SCRUB_FRAMES; i++) {
      const img = new Image();
      const pad = String(i).padStart(3, '0');
      img.src = `/images/mouse-scrub/frame-${pad}.webp`;

      const checkScrub = () => {
        scrubCount++;
        this.loadedTotal++;
        if (scrubCount === TOTAL_SCRUB_FRAMES) {
          this.isScrubReady = true;
        }
        notify();
      };

      img.onload = checkScrub;
      img.onerror = checkScrub;
      this.scrubImages.push(img);
    }
  }

  public getAssets(): PreloadedAssets {
    return {
      idleImages: this.idleImages,
      scrubImages: this.scrubImages,
      turnImages: this.turnImages,
      isIdleReady: this.isIdleReady,
      isScrubReady: this.isScrubReady,
      isTurnReady: this.isTurnReady,
      loadedTotal: this.loadedTotal,
      totalCount: TOTAL_ASSETS
    };
  }
}
