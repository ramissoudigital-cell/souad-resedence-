
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Meetings: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#EBE7DE] animate-fade-in-up">
       <div className="w-full h-[60vh] relative overflow-hidden">
          <img 
             src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=2000" 
             alt="Salle de réception élégante" 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
             <div>
                <span className="text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Événements & Célébrations</span>
                <h1 className="text-5xl md:text-7xl font-serif text-white">L'Art de Recevoir</h1>
             </div>
          </div>
       </div>

       <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
             <div className="space-y-8">
                <h2 className="text-3xl font-serif text-[#2C2A26]">Mariages Intimes</h2>
                <p className="text-[#5D5A53] font-light leading-loose">
                   Célébrez votre union dans le calme de notre jardin secret ou avec une vue imprenable depuis le Penthouse Zénith. Nos planificateurs dédiés s'occupent de chaque détail, des fleurs ikebana à la gastronomie kaiseki.
                </p>
                <button className="text-xs uppercase tracking-widest border-b border-[#2C2A26] pb-1 hover:opacity-60 transition-opacity">Télécharger la brochure mariage</button>
             </div>
             <div className="aspect-square overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" alt="Détail mariage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
             <div className="order-2 md:order-1 aspect-video overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1505373877841-8d43f703fb8f?auto=format&fit=crop&q=80&w=1000" alt="Réunion d'affaires" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </div>
             <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-3xl font-serif text-[#2C2A26]">Retraites Exécutives</h2>
                <p className="text-[#5D5A53] font-light leading-loose">
                   Pour les décisions qui comptent, choisissez un environnement qui favorise la clarté. Nos salles de conseil sont équipées des dernières technologies tout en conservant une esthétique organique et apaisante.
                </p>
                <button className="text-xs uppercase tracking-widest border-b border-[#2C2A26] pb-1 hover:opacity-60 transition-opacity">Demander un devis</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Meetings;
