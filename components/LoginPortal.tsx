import React, { useState } from 'react';

interface LoginPortalProps {
  onClose: () => void;
  onLogin: (name: string) => void;
}

const LoginPortal: React.FC<LoginPortalProps> = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate login
      onLogin(email.split('@')[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#0a0a0a] border border-[#1a1a1a] p-10 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-[#44d62c] rounded-sm flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-black text-xl">U</span>
          </div>
          <h2 className="text-3xl font-orbitron font-bold tracking-tighter uppercase">Ucreation ID</h2>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 font-bold">Access your elite workstation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#44d62c] transition-colors"
              placeholder="agent@ucreationtech.pro"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Access Key</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#44d62c] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#44d62c]" />
              Remember Me
            </label>
            <a href="#" className="hover:text-[#44d62c] transition-colors">Forgot Key?</a>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#44d62c] text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors mt-4"
          >
            Initialize Session
          </button>
        </form>

        <div className="mt-10 text-center text-[10px] uppercase tracking-widest font-bold text-gray-600">
          New to the Ucreation? <a href="#" className="text-[#44d62c] hover:underline">Register Device</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPortal;