
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onBook: () => void;
  isNightMode?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart, onBook, isNightMode }) => {
  return (
    <div className={`pt-24 min-h-screen transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-blue-50'} animate-fade-in-up`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        <button 
          onClick={onBack}
          className={`group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors mb-12 ${isNightMode ? 'text-blue-400 hover:text-white' : 'text-blue-400 hover:text-blue-900'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Retour aux Résidences
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <div className="flex flex-col gap-4">
            <div className={`w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border transition-all duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-100'}`}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className={`w-full h-full object-cover animate-fade-in-up transition-all duration-1000 ${isNightMode ? 'brightness-75 grayscale' : ''}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">La Sélection Souad</span>
             <h1 className={`text-5xl md:text-7xl font-serif mb-6 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>{product.name}</h1>
             <span className={`text-3xl font-light mb-10 transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-600'}`}>${product.price} <span className="text-sm opacity-50 uppercase">/ nuit</span></span>
             
             <p className={`leading-loose font-light text-xl mb-12 border-b transition-colors duration-1000 pb-12 ${isNightMode ? 'text-blue-200/60 border-blue-900/50' : 'text-slate-600 border-blue-100'}`}>
               {product.longDescription || product.description}
             </p>

             <div className="flex flex-col gap-6">
               <button 
                 onClick={onBook}
                 className={`w-full py-6 rounded-2xl uppercase tracking-[0.25em] text-[10px] font-bold transition-all transform hover:scale-[1.01] shadow-xl ${
                   isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-blue-900 text-white hover:bg-blue-800'
                 }`}
               >
                 Réserver cette Résidence
               </button>
               <button 
                 onClick={() => onAddToCart(product)}
                 className={`w-full py-6 border rounded-2xl uppercase tracking-[0.25em] text-[10px] font-bold transition-all ${
                   isNightMode ? 'border-blue-900 text-blue-400 hover:bg-[#0F172A]' : 'border-blue-200 text-blue-900 hover:bg-white'
                 }`}
               >
                 Ajouter à ma sélection
               </button>
               
               <div className="mt-12 grid grid-cols-2 gap-y-6">
                 {product.features.map((feature, idx) => (
                   <div key={idx} className={`flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-400'}`}>
                     <div className={`w-1.5 h-1.5 rounded-full ${isNightMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                     {feature}
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
