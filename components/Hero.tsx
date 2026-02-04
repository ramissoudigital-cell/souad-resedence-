
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface HeroProps {
  onBookNow: () => void;
  isNightMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, isNightMode }) => {
  return (
    <section className={`relative w-full h-screen min-h-[700px] md:min-h-[800px] overflow-hidden transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-blue-900'}`}>
      <div className="absolute inset-0 w-full h-full animate-zoom-slow">
        <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
            alt="Souad Residences Abidjan" 
            className={`w-full h-full object-cover grayscale transition-all duration-[2000ms] ${isNightMode ? 'brightness-[0.2] contrast-125' : 'contrast-[0.8] brightness-[0.9]'}`}
        />
        <div className={`absolute inset-0 mix-blend-multiply transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]/80' : 'bg-blue-900/40'}`}></div>
      </div>

      {/* Atmospheric Widget */}
      <div className="absolute top-20 md:top-32 left-6 md:left-16 z-20 flex flex-col items-start animate-reveal-left text-white pointer-events-none">
        <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-2">
            <span className={`text-3xl md:text-6xl font-serif transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-white'}`}>28°</span>
            <div className="flex flex-col text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-left">
                <span>Abidjan, Côte d'Ivoire</span>
                <span className="opacity-70">En ce moment</span>
            </div>
        </div>
        <div className={`h-[1px] w-12 md:w-24 mb-2 md:mb-3 animate-line-grow transition-colors duration-1000 ${isNightMode ? 'bg-blue-400' : 'bg-white/50'}`}></div>
        <p className={`font-serif italic text-[10px] md:text-base opacity-80 text-left max-w-[150px] md:max-w-none leading-tight transition-colors duration-1000 ${isNightMode ? 'text-blue-200' : 'text-white'}`}>
            "{isNightMode ? "Le silence descend sur la lagune." : "Brise légère sur la lagune Ébrié."}"
        </p>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-32 md:pt-0">
        <div className="animate-reveal-up w-full">
          <span className={`inline-block text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8 backdrop-blur-md border px-4 md:px-6 py-2 rounded-full animate-reveal-up delay-200 transition-all duration-1000 ${
            isNightMode ? 'bg-blue-400/10 border-blue-400/30 text-blue-400' : 'bg-white/10 border-white/20 text-white/90'
          }`}>
            Héritage d'Abidjan • Luxe Lagunaire
          </span>
          <h1 className="text-5xl md:text-[9rem] font-serif font-normal text-white tracking-tight mb-8 md:mb-10 leading-none animate-reveal-up delay-400">
            Soyez chez <span className={`italic font-light transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-100'}`}>vous.</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-xl text-white/80 font-light leading-relaxed mb-12 md:px-0 px-4 md:mb-16 animate-reveal-up delay-600">
            Un sanctuaire à Yopougon pour ceux qui chérissent l'élégance, <br className="hidden md:block"/>
            les matières nobles et l'énergie d'une ville qui ne dort jamais.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-reveal-up delay-800">
            <button 
                onClick={onBookNow}
                className={`w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] transition-all transform hover:scale-105 shadow-2xl ${
                  isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
            >
              Réserver votre séjour
            </button>
            <a 
              href="#products" 
              className={`w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border rounded-full text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm transition-all ${
                isNightMode ? 'border-blue-400/30 text-blue-400 hover:bg-blue-400 hover:text-blue-950' : 'border-white/30 text-white hover:bg-white hover:text-blue-900'
              }`}
            >
              Découvrir les Suites
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
