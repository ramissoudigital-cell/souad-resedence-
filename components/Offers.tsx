
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const OFFERS = [
  {
    title: "Évasion Romantique",
    desc: "Champagne à l'arrivée, dîner privé sur la terrasse et départ tardif.",
    price: "Inclus pour les séjours de 2+ nuits",
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Détente Tropicale",
    desc: "Accès illimité au Spa, jus de Bissap frais quotidien et massage au Karité pour deux.",
    price: "À partir de $1200 / nuit",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Séjour Longue Durée",
    desc: "Restez 5 nuits ou plus et bénéficiez de 20% de réduction sur votre résidence.",
    price: "-20% sur le tarif flexible",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1000"
  }
];

const Offers: React.FC<{ onBack: () => void, onBook: () => void }> = ({ onBack, onBook }) => {
  return (
    <div className="min-h-screen pt-32 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <header className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A8A29E] mb-6 block">Exclusivité Souad</span>
          <h1 className="text-5xl md:text-8xl font-serif text-[#2C2A26] mb-8">Nos Offres</h1>
          <p className="max-w-xl mx-auto text-[#5D5A53] font-light text-lg">
            Des expériences curées pour sublimer votre séjour à Abidjan.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {OFFERS.map((offer, idx) => (
             <div key={idx} className="group cursor-pointer" onClick={onBook}>
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 relative">
                   <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-[#2C2A26]/10 group-hover:bg-[#2C2A26]/0 transition-colors"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-[#2C2A26]">
                        {offer.price}
                      </span>
                   </div>
                </div>
                <h3 className="text-2xl font-serif text-[#2C2A26] mb-3 group-hover:underline underline-offset-4 decoration-1">{offer.title}</h3>
                <p className="text-[#5D5A53] font-light leading-relaxed">{offer.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
