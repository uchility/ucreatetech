
import React, { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'store' | 'repair' | 'support' | 'community') => void;
  onLoginClick: () => void;
  onLogout: () => void;
  user: { name: string } | null;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onLoginClick, onLogout, user, activePage }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'store', label: 'Store' },
    { id: 'repair', label: 'Repair' },
    { id: 'support', label: 'Support' },
    { id: 'community', label: 'Community' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-[#44d62c] rounded-sm flex items-center justify-center">
              <span className="text-black font-black">U</span>
            </div>
            <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">Ucreationtech <span className="text-[#44d62c]">pro</span></span>
          </button>
          
          <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest font-semibold text-gray-400">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={`hover:text-white transition-colors relative pb-1 ${activePage === item.id ? 'text-white' : ''}`}
              >
                {item.label}
                {activePage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#44d62c]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 group focus:outline-none"
              >
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#44d62c] group-hover:text-white transition-colors">
                    {user.name}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-tighter text-gray-500">
                    Elite Agent
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full bg-[#1a1a1a] border transition-all duration-300 flex items-center justify-center ${
                  isProfileOpen ? 'border-[#44d62c] shadow-[0_0_10px_rgba(68,214,44,0.3)]' : 'border-gray-800'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${isProfileOpen ? 'text-[#44d62c]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 bg-[#111] border-b border-[#1a1a1a]">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Authenticated As</div>
                    <div className="text-sm font-bold text-white uppercase tracking-tighter">{user.name}</div>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#44d62c] hover:bg-[#111] transition-all flex items-center justify-between group">
                      Account Profile
                      <span className="opacity-0 group-hover:opacity-100 text-[#44d62c] transition-opacity">→</span>
                    </button>
                    <button className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#44d62c] hover:bg-[#111] transition-all flex items-center justify-between group">
                      Registered Devices
                      <span className="px-2 py-0.5 bg-[#44d62c] text-black text-[9px]">2</span>
                    </button>
                    <button className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#44d62c] hover:bg-[#111] transition-all flex items-center justify-between group">
                      Repair Status
                      <span className="text-[9px] text-[#44d62c]">READY</span>
                    </button>
                  </div>

                  <div className="border-t border-[#1a1a1a] py-2 bg-[#050505]">
                    <button 
                      onClick={() => {
                        setIsProfileOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Initialize Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={onLoginClick}
              className="px-4 py-1.5 border border-gray-700 hover:border-[#44d62c] hover:text-[#44d62c] transition-all text-xs font-bold uppercase tracking-widest"
            >
              Login
            </button>
          )}
          <button className="p-2 hover:text-[#44d62c] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
