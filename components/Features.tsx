import React from 'react';

const Features: React.FC = () => {
  const stats = [
    { label: 'Repairs Completed', value: '12K+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Response Time', value: '24HR' },
    { label: 'Customer Rating', value: '4.9/5' }
  ];

  return (
    <section className="py-24 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 group-hover:text-[#44d62c] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#0a0a0a] border border-[#1a1a1a] p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#44d62c]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10 md:flex items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-orbitron font-bold mb-4 tracking-tighter">THE UCREATION GUARANTEE</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Every machine that leaves our facility, whether brand new or meticulously restored, undergoes a rigorous 50-point stress test and quality check. We don't just fix computers; we engineer reliability.
                </p>
                <ul className="space-y-3">
                    {['12-Month Hardware Warranty', 'Certified OEM Parts Only', 'Priority Dispatch for Gamers', 'Global Support Network'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-semibold uppercase tracking-wider">
                            <svg className="w-4 h-4 text-[#44d62c]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 14.14l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
              </div>
              <div className="hidden md:block md:w-1/3">
                  <div className="aspect-square bg-[#111] border border-[#222] flex items-center justify-center p-8">
                      <div className="text-center">
                          <div className="w-24 h-24 border-2 border-[#44d62c] rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                              <span className="text-[#44d62c] font-black text-2xl">A+</span>
                          </div>
                          <p className="text-[#44d62c] font-orbitron font-bold uppercase tracking-widest text-sm">Certified Repair Hub</p>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;