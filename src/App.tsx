import { useState } from 'react';
import { HeaderWithMegaMenu } from './components/HeaderWithMegaMenu';
import { CharacterExperience } from './components/CharacterExperience';
import { HeroOverlay } from './components/HeroOverlay';
import { Section2ScrollNarrative } from './components/Section2ScrollNarrative';

export function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Section 2 fade-out begins at scrollProgress >= 0.75
  const isAtFadeOutLocation = scrollProgress >= 0.75;

  return (
    <div className="relative w-full min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans antialiased">
      {/* Mega Menu Navigation Bar with Aesthetic 30% Larger BraveEdgeLogo.svg */}
      <HeaderWithMegaMenu />

      {/* Main Interactive Character Experience with Section 1 Hero & Section 2 Stepper Narrative */}
      <main className="w-full min-h-screen">
        <CharacterExperience
          onScrollProgress={setScrollProgress}
          renderOverlay={(progress) => {
            // Section 1 Hero Overlay Opacity (fades off smoothly as user scrolls into Section 2)
            const heroOpacity = Math.max(0, Math.min(1, (0.12 - progress) / 0.10));
            const isHeroVisible = progress < 0.15;

            // Section 2 Scroll Narrative Visibility (initiates as character turns in State 2)
            const isSection2Visible = progress >= 0.08;

            return (
              <>
                {/* State 1: Hero Composition (Title, Copy, 2 Value Badges, Dual CTAs & 3 Right Cards) */}
                {isHeroVisible && (
                  <div
                    className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
                    style={{ opacity: heroOpacity }}
                  >
                    <HeroOverlay />
                  </div>
                )}

                {/* State 2: Scroll Narrative Stepper (Staggered 01, 02, 03 reveal synced with scroll turn) */}
                {isSection2Visible && (
                  <Section2ScrollNarrative scrollProgress={progress} />
                )}
              </>
            );
          }}
        />
      </main>

      {/* Anam AI Agent Floating Widget: Activated smoothly AT the Section 2 fade-out location */}
      <div
        className={`transition-all duration-700 ease-out ${
          isAtFadeOutLocation
            ? 'opacity-100 pointer-events-auto scale-100 translate-y-0'
            : 'opacity-0 pointer-events-none scale-90 translate-y-8'
        }`}
      >
        <anam-agent
          agent-id="4739925f-7639-5e7f-b491-afda3624f215"
          layout="floating"
          position="bottom-right"
          initial-state="minimized"
        ></anam-agent>
      </div>
    </div>
  );
}

export default App;
