
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import ProductShowcase from './components/ProductShowcase.tsx';
import RepairSection from './components/RepairSection.tsx';
import GeminiAssistant from './components/GeminiAssistant.tsx';
import Footer from './components/Footer.tsx';
import LoginPortal from './components/LoginPortal.tsx';
import SupportSection from './components/SupportSection.tsx';
import CommunitySection from './components/CommunitySection.tsx';
import DiscordPortal from './components/DiscordPortal.tsx';

type Page = 'home' | 'store' | 'repair' | 'support' | 'community' | 'discord';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (name: string) => {
    setUser({ name });
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    navigateTo('home');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onRepairClick={() => navigateTo('repair')} />
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center tracking-tighter">
                  FEATURED <span className="text-[#44d62c]">GEAR</span>
                </h2>
                <ProductShowcase />
              </div>
            </section>
            <Features />
          </>
        );
      case 'store':
        return (
          <section className="py-20 px-4 min-h-[70vh]">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl font-orbitron font-bold tracking-tighter mb-4 uppercase">UCREATION STORE</h2>
                <p className="text-gray-400">Premium high-performance hardware, configured by experts.</p>
              </div>
              <ProductShowcase />
            </div>
          </section>
        );
      case 'repair':
        return (
          <section className="py-20 px-4 min-h-[70vh]">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl font-orbitron font-bold tracking-tighter mb-4">REPAIR LAB</h2>
                <p className="text-gray-400">State-of-the-art diagnostic and restoration services.</p>
              </div>
              <RepairSection />
              <div className="mt-16 p-8 border border-[#1a1a1a] bg-[#050505]">
                <h3 className="text-2xl font-orbitron font-bold mb-4 uppercase">SCHEDULE A DROP-OFF</h3>
                <p className="text-gray-400 mb-6">Our technicians are ready to restore your machine to peak performance.</p>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="px-8 py-3 bg-[#44d62c] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Start AI Diagnostic
                </button>
              </div>
            </div>
          </section>
        );
      case 'support':
        return <SupportSection />;
      case 'community':
        return <CommunitySection onJoinDiscord={() => navigateTo('discord')} />;
      case 'discord':
        return <DiscordPortal onBack={() => navigateTo('community')} />;
      default:
        return <Hero onRepairClick={() => navigateTo('repair')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#44d62c] selection:text-black">
      <Navbar 
        onNavigate={(p) => navigateTo(p as Page)} 
        onLoginClick={() => setIsLoginOpen(true)} 
        onLogout={handleLogout}
        user={user}
        activePage={currentPage}
      />
      
      <main>
        {renderContent()}
      </main>

      {currentPage !== 'discord' && <Footer />}

      {/* Floating AI Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#44d62c] text-black rounded-full shadow-[0_0_20px_rgba(68,214,44,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 15L17.5 17.625 14.875 18.375 17.5 19.125 18.25 21.75 19 19.125 21.625 18.375 19 17.625 18.25 15z" />
        </svg>
      </button>

      {/* Overlays */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh]">
            <button 
              onClick={() => setIsChatOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#44d62c] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <GeminiAssistant onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}

      {isLoginOpen && (
        <LoginPortal 
          onClose={() => setIsLoginOpen(false)} 
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default App;
