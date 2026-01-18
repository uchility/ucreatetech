
import React from 'react';

interface CommunitySectionProps {
  onJoinDiscord: () => void;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ onJoinDiscord }) => {
  const news = [
    { 
      title: 'Ucreation Vesper 16: The Future of Thermals', 
      date: 'Oct 24, 2024', 
      tag: 'Tech Deep Dive',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800&h=450',
      description: 'An inside look at our revolutionary vapor chamber technology and liquid metal application process.'
    },
    { 
      title: 'Global Esports Partnership Announced', 
      date: 'Oct 20, 2024', 
      tag: 'News',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450',
      description: 'Ucreationtech becomes the official hardware partner for the upcoming World Championship Series.'
    },
    { 
      title: 'Community Spotlight: Creative Workflows', 
      date: 'Oct 15, 2024', 
      tag: 'Spotlight',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450',
      description: 'How top-tier digital artists are utilizing the Slate Pro workstation to push the boundaries of 3D rendering.'
    },
  ];

  return (
    <div className="py-20 px-4 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-orbitron font-bold tracking-tighter mb-4 uppercase">Ucreation Community</h2>
          <p className="text-gray-400">Stay synchronized with the latest from Ucreationtech and our global user base.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-[#0a0a0a] border border-[#1a1a1a] mb-6 overflow-hidden relative">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="px-2 py-0.5 bg-[#44d62c] text-black text-[9px] font-black uppercase tracking-tighter">{item.tag}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">{item.date}</p>
              <h3 className="text-xl font-orbitron font-bold group-hover:text-[#44d62c] transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-[#0a0a0a] to-[#050505] border border-[#1a1a1a] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#44d62c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-3xl font-orbitron font-bold mb-4 tracking-tighter relative z-10 uppercase">Join the Neural Network</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10">Participate in hardware discussions, beta tests, and community-exclusive events.</p>
            <button 
              onClick={onJoinDiscord}
              className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#44d62c] transition-all duration-300 relative z-10"
            >
              Enter Discord Portal
            </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
