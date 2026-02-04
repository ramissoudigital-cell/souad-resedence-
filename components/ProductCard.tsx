
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  isNightMode?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isNightMode }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer" onClick={() => onClick(product)}>
      <div className={`relative w-full aspect-[4/5] overflow-hidden rounded-xl border transition-all duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900/30' : 'bg-blue-50 border-blue-50'}`}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 ${isNightMode ? 'brightness-75 grayscale group-hover:grayscale-0' : ''}`}
        />
        
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl transition-colors duration-500 ${isNightMode ? 'bg-blue-400 text-blue-950' : 'bg-white text-blue-900'}`}>
                    Voir les détails
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className={`text-2xl font-serif font-medium mb-1 group-hover:text-blue-600 transition-colors duration-1000 ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>{product.name}</h3>
        <p className={`text-sm font-light mb-3 tracking-wide transition-colors duration-1000 ${isNightMode ? 'text-blue-400/60' : 'text-blue-400'}`}>{product.category}</p>
        <span className={`text-sm font-bold block transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>{product.price}€</span>
      </div>
    </div>
  );
};

export default ProductCard;
