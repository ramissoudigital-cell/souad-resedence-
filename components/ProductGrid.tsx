
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  isNightMode?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, isNightMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className={`py-32 px-6 md:px-12 overflow-hidden transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-24 space-y-8 animate-reveal-right">
          <h2 className={`text-4xl md:text-6xl font-serif transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Nos Résidences</h2>
          <div className={`w-24 h-[1px] animate-line-grow ${isNightMode ? 'bg-blue-600/30' : 'bg-blue-100'}`}></div>
          <p className={`max-w-xl font-light transition-colors duration-1000 ${isNightMode ? 'text-blue-200/50' : 'text-blue-400'}`}>Chaque résidence est conçue pour offrir un environnement méditatif et une intimité totale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`animate-reveal-right`} style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <ProductCard product={product} onClick={onProductClick} isNightMode={isNightMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
