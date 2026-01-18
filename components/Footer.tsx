import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#44d62c] rounded-sm flex items-center justify-center">
                <span className="text-black font-black">U</span>
              </div>
              <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">Ucreationtech <span className="text-[#44d62c]">pro</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 uppercase font-semibold tracking-tighter">
              The pinnacle of high-performance mobile computing. sales, service, and elite restoration.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:border-[#44d62c] cursor-pointer group transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-3 h-3 bg-gray-600 group-hover:bg-[#44d62c] transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-orbitron font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#44d62c]">Shop</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Vesper Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Slate Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Air X Ultrabooks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refurbished Units</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-orbitron font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#44d62c]">Service</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Repair Lab</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Your Device</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-orbitron font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#44d62c]">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>0100 Ucreation Drive</li>
              <li>Silicon Valley, CA</li>
              <li>support@ucreationtech.pro</li>
              <li className="text-[#44d62c] font-bold">+1-800-UCRE-ELITE</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-bold tracking-widest uppercase">
          <div>&copy; 2024 UCREATIONTECH PRO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#44d62c]">Privacy Policy</a>
            <a href="#" className="hover:text-[#44d62c]">Cookie Settings</a>
            <a href="#" className="hover:text-[#44d62c]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;