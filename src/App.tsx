import { HeaderWithMegaMenu } from './components/HeaderWithMegaMenu';
import { CharacterExperience } from './components/CharacterExperience';
import { HeroOverlay } from './components/HeroOverlay';
import { Section2ScrollNarrative } from './components/Section2ScrollNarrative';

export function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans antialiased">
      {/* Mega Menu Navigation Bar with Aesthetic 30% Larger BraveEdgeLogo.svg */}
      <HeaderWithMegaMenu />

      {/* Main Interactive Character Experience with Section 1 Hero & Section 2 Stepper Narrative */}
      <main className="w-full min-h-screen">
        <CharacterExperience
          renderOverlay={(scrollProgress) => {
            // Section 1 Hero Overlay Opacity (fades off smoothly as user scrolls into Section 2)
            const heroOpacity = Math.max(0, Math.min(1, (0.12 - scrollProgress) / 0.10));
            const isHeroVisible = scrollProgress < 0.15;

            // Section 2 Scroll Narrative Visibility (initiates as character turns in State 2)
            const isSection2Visible = scrollProgress >= 0.08;

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
                  <Section2ScrollNarrative scrollProgress={scrollProgress} />
                )}
              </>
            );
          }}
        />
      </main>
    </div>
  );
}

export default App;
