import { useState, useEffect } from 'react';
import { HeaderWithMegaMenu } from './components/HeaderWithMegaMenu';
import { CharacterExperience } from './components/CharacterExperience';
import { HeroOverlay } from './components/HeroOverlay';
import { Section2ScrollNarrative } from './components/Section2ScrollNarrative';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { SolutionsPage } from './components/SolutionsPage';
import { UseCasesPage } from './components/UseCasesPage';
import { IntelligentWebsitesPage } from './components/IntelligentWebsitesPage';
import { ContextualAiPage } from './components/ContextualAiPage';
import { ConnectedEcosystemsPage } from './components/ConnectedEcosystemsPage';

export type AppView =
  | 'home'
  | 'about'
  | 'services'
  | 'solutions'
  | 'use-cases'
  | 'intelligent-websites'
  | 'contextual-ai'
  | 'connected-ecosystems';

export function App() {
  const getViewFromHash = (): AppView => {
    const hash = window.location.hash;
    if (hash === '#about') return 'about';
    if (
      hash === '#services' ||
      hash === '#modern-corporate-websites' ||
      hash === '#web-applications' ||
      hash === '#ai-agent-integration' ||
      hash === '#security-privacy'
    ) {
      return 'services';
    }
    if (
      hash === '#solutions' ||
      hash === '#ai-operations-automation' ||
      hash === '#knowledge-consolidation' ||
      hash === '#system-connectors' ||
      hash === '#contextual-ai-training'
    ) {
      return 'solutions';
    }
    if (
      hash === '#use-cases' ||
      hash === '#industrial-cleantech-manufacturing' ||
      hash === '#professional-financial-services' ||
      hash === '#crossborder-logistics-maritime'
    ) {
      return 'use-cases';
    }
    if (hash === '#intelligent-websites' || hash === '#websites') {
      return 'intelligent-websites';
    }
    if (hash === '#contextual-ai') {
      return 'contextual-ai';
    }
    if (hash === '#connected-ecosystems') {
      return 'connected-ecosystems';
    }
    return 'home';
  };

  const [currentView, setCurrentView] = useState<AppView>(() => {
    return getViewFromHash();
  });
  const [activeBookmark, setActiveBookmark] = useState<string | undefined>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || undefined;
  });
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Sync state with browser URL hash and history navigation
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getViewFromHash());
      setActiveBookmark(window.location.hash.replace('#', '') || undefined);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: AppView, bookmark?: string) => {
    setCurrentView(view);
    setActiveBookmark(bookmark);
    if (view === 'about') {
      window.location.hash = '#about';
    } else if (view === 'services') {
      window.location.hash = bookmark ? `#${bookmark}` : '#services';
    } else if (view === 'solutions') {
      window.location.hash = bookmark ? `#${bookmark}` : '#solutions';
    } else if (view === 'use-cases') {
      window.location.hash = bookmark ? `#${bookmark}` : '#use-cases';
    } else if (view === 'intelligent-websites') {
      window.location.hash = '#intelligent-websites';
    } else if (view === 'contextual-ai') {
      window.location.hash = '#contextual-ai';
    } else if (view === 'connected-ecosystems') {
      window.location.hash = '#connected-ecosystems';
    } else {
      window.location.hash = bookmark ? `#${bookmark}` : '';
    }
  };

  // Section 2 fade-out begins at scrollProgress >= 0.75 on Home page
  const isAtFadeOutLocation = scrollProgress >= 0.75;

  return (
    <div className="relative w-full min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans antialiased">
      {/* Mega Menu Navigation Bar with Active Highlighting */}
      <HeaderWithMegaMenu currentView={currentView} onNavigate={handleNavigate} />

      {/* VIEW SWITCHER */}
      {currentView === 'connected-ecosystems' ? (
        /* Dedicated Connected Ecosystems Pillar Page */
        <main className="w-full min-h-screen">
          <ConnectedEcosystemsPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateServices={(bookmark) => handleNavigate('services', bookmark)}
            onNavigateSolutions={(bookmark) => handleNavigate('solutions', bookmark)}
            onNavigateUseCases={(bookmark) => handleNavigate('use-cases', bookmark)}
            onNavigatePillar={(pillar) => handleNavigate(pillar)}
          />
        </main>
      ) : currentView === 'contextual-ai' ? (
        /* Dedicated Contextual AI Pillar Page */
        <main className="w-full min-h-screen">
          <ContextualAiPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateServices={(bookmark) => handleNavigate('services', bookmark)}
            onNavigateSolutions={(bookmark) => handleNavigate('solutions', bookmark)}
            onNavigateUseCases={(bookmark) => handleNavigate('use-cases', bookmark)}
            onNavigatePillar={(pillar) => handleNavigate(pillar)}
          />
        </main>
      ) : currentView === 'intelligent-websites' ? (
        /* Dedicated Intelligent Websites Pillar Page */
        <main className="w-full min-h-screen">
          <IntelligentWebsitesPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateServices={(bookmark) => handleNavigate('services', bookmark)}
            onNavigateSolutions={(bookmark) => handleNavigate('solutions', bookmark)}
            onNavigateUseCases={(bookmark) => handleNavigate('use-cases', bookmark)}
            onNavigatePillar={(pillar) => handleNavigate(pillar)}
          />
        </main>
      ) : currentView === 'use-cases' ? (
        /* Dedicated Use Cases Page with Nordic SME industry deep dives */
        <main className="w-full min-h-screen">
          <UseCasesPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateServices={(bookmark) => handleNavigate('services', bookmark)}
            onNavigateSolutions={(bookmark) => handleNavigate('solutions', bookmark)}
            activeBookmark={activeBookmark}
          />
        </main>
      ) : currentView === 'solutions' ? (
        /* Dedicated Solutions Page with deep section detailing */
        <main className="w-full min-h-screen">
          <SolutionsPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateServices={(bookmark) => handleNavigate('services', bookmark)}
            onNavigateUseCases={(bookmark) => handleNavigate('use-cases', bookmark)}
            activeBookmark={activeBookmark}
          />
        </main>
      ) : currentView === 'services' ? (
        /* Dedicated Services Page with deep section detailing */
        <main className="w-full min-h-screen">
          <ServicesPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateSolutions={(bookmark) => handleNavigate('solutions', bookmark)}
            onNavigateUseCases={(bookmark) => handleNavigate('use-cases', bookmark)}
            activeBookmark={activeBookmark}
          />
        </main>
      ) : currentView === 'about' ? (
        /* Dedicated Storytelling About Page (Clean, fast, No 3D character) */
        <main className="w-full min-h-screen">
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateServices={(bookmark) => handleNavigate('services', bookmark)}
            onNavigateSolutions={(bookmark) => handleNavigate('solutions', bookmark)}
            onNavigateUseCases={(bookmark) => handleNavigate('use-cases', bookmark)}
          />
        </main>
      ) : (
        /* Main Interactive Character Experience with Section 1 Hero & Section 2 Stepper Narrative */
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
                      <HeroOverlay onNavigate={handleNavigate} />
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
      )}

      {/* Anam AI Agent Floating Widget */}
      <div
        className={`transition-all duration-700 ease-out z-40 ${
          currentView !== 'home' || isAtFadeOutLocation
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
