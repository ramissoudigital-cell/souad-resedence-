
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { BOUTIQUE_PRODUCTS } from '../constants';

interface BoutiqueProps {
  onAddToCart: (product: Product) => void;
}

const Boutique: React.FC<BoutiqueProps> = ({ onAddToCart }) => {
  return (
    <div className="min-h-screen pt-32 bg-[#F5F2EB] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#D6D1C7] pb-8 animate-reveal-right">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C2A26] mb-4">La Boutique</h1>
            <p className="text-[#5D5A53] font-light text-lg max-w-md">
              Emportez un fragment de l'atmosphère Souad chez vous.
            </p>
          </div>
          <div className="hidden md:block text-right delay-200 animate-reveal-up">
             <span className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2">Collection</span>
             <span className="block font-serif text-xl">Automne / Hiver 2025</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {BOUTIQUE_PRODUCTS.map((product, index) => (
             <div key={product.id} 
                  className="group animate-reveal-right"
                  style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
                <div className="aspect-square bg-[#EBE7DE] mb-6 relative overflow-hidden">
                   <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                   <button 
                     onClick={() => onAddToCart(product)}
                     className="absolute bottom-4 right-4 bg-[#2C2A26] text-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-xl"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg>
                   </button>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-xl font-serif text-[#2C2A26] mb-1">{product.name}</h3>
                      <p className="text-sm text-[#A8A29E] mb-2">{product.category}</p>
                   </div>
                   <span className="font-medium text-[#2C2A26]">${product.price}</span>
                </div>
                <p className="text-sm text-[#5D5A53] font-light leading-relaxed line-clamp-2 mb-4">{product.description}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
