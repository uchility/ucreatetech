import React from 'react';

const SupportSection: React.FC = () => {
  const faqs = [
    { q: 'How long does a typical repair take?', a: 'Standard diagnostics take 24 hours. Most repairs are completed within 3-5 business days depending on part availability.' },
    { q: 'What is covered under the Ucreation Guarantee?', a: 'We provide a 12-month hardware warranty on all OEM parts and labor for repair services.' },
    { q: 'Do you offer international shipping?', a: 'Yes, we ship Ucreation Vesper machines worldwide with priority customs clearance.' },
  ];

  return (
    <div className="py-20 px-4 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-orbitron font-bold tracking-tighter mb-4 uppercase">Ucreation Support</h2>
          <p className="text-gray-400">Your portal for technical assistance and device management.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-[#44d62c] uppercase tracking-tighter">Frequent Inquiries</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-[#0a0a0a] border border-[#1a1a1a]">
                  <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-[#0a0a0a] border border-[#1a1a1a] border-t-[#44d62c] border-t-2">
              <h3 className="text-xl font-orbitron font-bold mb-4 uppercase tracking-tighter">Contact Tech</h3>
              <p className="text-gray-400 text-sm mb-6">Immediate assistance for critical system failures.</p>
              <button className="w-full py-3 border border-[#44d62c] text-[#44d62c] font-bold uppercase tracking-widest hover:bg-[#44d62c]/10 transition-colors mb-4">
                Open Ticket
              </button>
              <button className="w-full py-3 bg-[#44d62c] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Live Chat
              </button>
            </div>

            <div className="p-8 bg-[#0a0a0a] border border-[#1a1a1a]">
              <h3 className="text-xl font-orbitron font-bold mb-4 uppercase tracking-tighter">Driver Lab</h3>
              <p className="text-gray-400 text-sm mb-6">Latest firmware and system optimizations for Ucreation hardware.</p>
              <a href="#" className="text-[#44d62c] font-bold text-xs uppercase tracking-widest hover:underline">Visit Download Center →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;