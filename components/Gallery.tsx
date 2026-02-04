
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200', title: 'Le Grand Salon', desc: 'Silence et lumière au cœur d\'Abidjan.' },
  { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200', title: 'Détails Tactiles', desc: 'Bois précieux et artisanat local.' },
  { url: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=1200', title: 'Le Lotus Blanc', desc: 'Gastronomie fine ivoirienne.' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', title: 'Sérénité Lagunaire', desc: 'La brise du soir sur la terrasse.' },
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200', title: 'Minimalisme Tropical', desc: 'Un sanctuaire pour le repos.' },
  { url: 'https://images.unsplash.com/photo-1507652313519-d4511f7ca4ad?auto=format&fit=crop&q=80&w=1200', title: 'Architecture du Vide', desc: 'Le luxe de l\'espace à Yopougon.' }
];

const Gallery: React.FC<{ onBack: () => void, isNightMode?: boolean }> = ({ onBack, isNightMode }) => {
  return (
    <div className={`min-h-screen pt-32 transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-blue-50'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        <header className="flex flex-col items-center text-center mb-24 animate-reveal-up">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400 mb-6 block">L'Univers Souad</span>
          <h1 className={`text-5xl md:text-8xl font-serif mb-8 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Galerie Visuelle</h1>
          <div className={`w-24 h-[1px] mx-auto mb-10 ${isNightMode ? 'bg-blue-900' : 'bg-blue-200'}`}></div>
          <p className={`max-w-2xl mx-auto font-light text-xl leading-relaxed transition-colors duration-1000 ${isNightMode ? 'text-blue-200/60' : 'text-blue-600/70'}`}>
            Explorez l'harmonie entre architecture contemporaine et luxe tropical à travers notre regard photographique.
          </p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
           {GALLERY_IMAGES.map((img, idx) => (
             <div key={idx} className={`break-inside-avoid group relative overflow-hidden rounded-3xl shadow-lg animate-reveal-right transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A]' : 'bg-white'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className={`w-full h-auto object-cover transition-all duration-[2s] group-hover:scale-105 ${isNightMode ? 'brightness-75' : 'grayscale group-hover:grayscale-0'}`}
                />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                   <h3 className="text-white text-3xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{img.title}</h3>
                   <p className="text-blue-200 text-sm font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">{img.desc}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-32 text-center">
           <button 
             onClick={onBack}
             className={`px-12 py-5 border rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
               isNightMode ? 'border-blue-900 text-blue-300 hover:bg-blue-900 hover:text-white' : 'border-blue-900/20 text-blue-900 hover:bg-blue-900 hover:text-white'
             }`}
           >
             Retour à l'accueil
           </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
