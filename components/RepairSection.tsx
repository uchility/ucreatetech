
import React from 'react';
import { REPAIRS } from '../constants.ts';

const RepairSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {REPAIRS.map((repair) => (
        <div key={repair.id} className="p-8 bg-black border border-[#1a1a1a] hover:border-l-[#44d62c] hover:border-l-4 transition-all duration-200">
          <div className="w-12 h-12 mb-6 text-[#44d62c]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={repair.icon} />
            </svg>
          </div>
          <h4 className="text-xl font-orbitron font-bold mb-4">{repair.title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {repair.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Starts at</span>
            <span className="text-xl font-orbitron font-bold text-[#44d62c]">${repair.priceStart}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepairSection;
