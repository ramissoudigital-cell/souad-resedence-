
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const InfoPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <header className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A8A29E] mb-6 block">L'Expérience Souad</span>
          <h1 className="text-5xl md:text-8xl font-serif text-[#2C2A26] mb-8">Au-delà de l'Hospitalité</h1>
          <div className="w-24 h-[1px] bg-[#D6D1C7] mx-auto mb-12"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2A26]">Bien-être Holistique</h2>
            <p className="text-[#5D5A53] font-light leading-loose text-lg">
              Notre spa n'est pas seulement un lieu de soins ; c'est un sanctuaire de recalibrage. Utilisant des beurres de karité et huiles biologiques locales, nous nous concentrons sur la restauration sensorielle.
            </p>
            <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-[#2C2A26]">
              <li>• Hammam Privé</li>
              <li>• Chambres de Méditation</li>
              <li>• Soins au Cacao Ivoirien</li>
            </ul>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
             <img src="https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?auto=format&fit=crop&q=80&w=1200" alt="Spa bien-être" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 md:order-1 aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
             <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" alt="Expérience gastronomique" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2A26]">Gastronomie Consciente</h2>
            <p className="text-[#5D5A53] font-light leading-loose text-lg">
              La nourriture est le carburant de l'âme. Notre cuisine met en valeur l'essence pure des ingrédients ivoiriens de saison. 
            </p>
            <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-[#2C2A26]">
              <li>• Table du Chef</li>
              <li>• Dégustation de Cafés Rares</li>
              <li>• Dîner Privé sur la Lagune</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#D6D1C7] p-12 md:p-24 text-center rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h3 className="text-3xl md:text-5xl font-serif text-[#2C2A26] mb-8 relative z-10">Notre Philosophie</h3>
            <p className="max-w-3xl mx-auto text-[#5D5A53] text-xl font-light leading-relaxed relative z-10">
              "Le luxe le plus profond est le silence et l'authenticité. Nous fournissons l'architecture, les textures et le soin. Vous apportez la présence."
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
