
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Loyalty: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 pb-24 text-center">
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Accor_Live_Limitless_logo.svg/2560px-Accor_Live_Limitless_logo.svg.png" alt="Accor Live Limitless" className="h-16 mx-auto mb-12 opacity-80" />

        <h1 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-8">Votre Fidélité Récompensée</h1>
        <p className="text-xl text-[#5D5A53] font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          Souad Residences est fier de faire partie de la collection exclusive Accor. Vos séjours chez nous vous permettent de gagner des points et de bénéficier de privilèges dans plus de 5 000 hôtels à travers le monde.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
           <div className="bg-white p-8 rounded-xl shadow-sm border border-[#D6D1C7]/50">
              <span className="text-sm font-bold uppercase tracking-widest text-[#A8A29E] mb-4 block">Silver</span>
              <h3 className="text-2xl font-serif mb-4">Priorité</h3>
              <p className="text-[#5D5A53] text-sm leading-relaxed">Accueil prioritaire, verre de bienvenue et départ tardif selon disponibilité.</p>
           </div>
           <div className="bg-[#2C2A26] text-[#F5F2EB] p-8 rounded-xl shadow-xl transform scale-105 border border-[#2C2A26]">
              <span className="text-sm font-bold uppercase tracking-widest text-[#A8A29E] mb-4 block">Gold</span>
              <h3 className="text-2xl font-serif mb-4">Surclassement</h3>
              <p className="text-[#F5F2EB]/80 text-sm leading-relaxed">Surclassement de chambre garanti, arrivée matinale et cadeau de bienvenue local.</p>
           </div>
           <div className="bg-white p-8 rounded-xl shadow-sm border border-[#D6D1C7]/50">
              <span className="text-sm font-bold uppercase tracking-widest text-[#A8A29E] mb-4 block">Platinum</span>
              <h3 className="text-2xl font-serif mb-4">Excellence</h3>
              <p className="text-[#5D5A53] text-sm leading-relaxed">Accès au Lounge exécutif, petit-déjeuner offert le week-end et Suite Night Upgrades.</p>
           </div>
        </div>

        <a 
          href="https://all.accor.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 bg-[#2C2A26] text-white rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#444] transition-colors"
        >
           Rejoindre le programme
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
           </svg>
        </a>
      </div>
    </div>
  );
};

export default Loyalty;
