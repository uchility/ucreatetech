
import React from 'react';
import { PRODUCTS } from '../constants.ts';

const ProductShowcase: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="group relative bg-[#0a0a0a] border border-[#1a1a1a] p-8 transition-all duration-500 hover:border-[#44d62c]/50">
          <div className="relative overflow-hidden mb-8 aspect-video">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#44d62c] text-black text-[10px] font-black uppercase tracking-tighter">
                {product.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron font-bold group-hover:text-[#44d62c] transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm italic">"{product.tagline}"</p>
            
            <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-[#1a1a1a]">
              <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">CPU</div>
              <div className="text-xs font-semibold">{product.specs.cpu}</div>
              <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">GPU</div>
              <div className="text-xs font-semibold">{product.specs.gpu}</div>
              <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">RAM</div>
              <div className="text-xs font-semibold">{product.specs.ram}</div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <span className="text-2xl font-orbitron font-bold text-[#44d62c] tracking-tighter">
                ${product.price.toLocaleString()}
              </span>
              <button className="px-6 py-2 border border-gray-700 hover:border-[#44d62c] hover:bg-[#44d62c] hover:text-black transition-all duration-300 font-bold text-sm uppercase tracking-widest">
                Configure
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
