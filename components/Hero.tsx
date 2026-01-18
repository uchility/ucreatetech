import React from 'react';

interface HeroProps {
  onRepairClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRepairClick }) => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with abstract tech patterns */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/tech/1920/1080?grayscale" 
          alt="Technical Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-orbitron font-bold tracking-tighter mb-6">
          THE <span className="text-[#44d62c] glow-green">ELITE</span> CHOICE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide max-w-2xl mx-auto uppercase">
          World-class laptop sales and specialized repair lab for high-performance machines.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
            className="w-full sm:w-auto px-12 py-4 bg-[#44d62c] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Shop Ucreation Vesper
          </button>
          <button 
            onClick={onRepairClick}
            className="w-full sm:w-auto px-12 py-4 border-2 border-[#44d62c] text-[#44d62c] font-bold uppercase tracking-widest hover:bg-[#44d62c]/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Help Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#44d62c]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;