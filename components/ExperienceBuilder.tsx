
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

const SCENTS = [
  { name: 'Vétiver', desc: 'Boisé, terreux, sacré.', icon: '🌿' },
  { name: 'Cacao', desc: 'Chaud, gourmand, enveloppant.', icon: '🍫' },
  { name: 'Citronnelle', desc: 'Agrumes frais, énergisant.', icon: '🍋' }
];

const SOUNDSCAPES = [
  { name: 'Pluie Tropicale', desc: 'Averse chaude sur les feuilles.' },
  { name: 'Lagune Ébrié', desc: 'Clapotis doucement rythmé.' },
  { name: 'Silence Absolu', desc: 'Isolation phonique totale.' }
];

interface ExperienceBuilderProps {
  isNightMode?: boolean;
}

const ExperienceBuilder: React.FC<ExperienceBuilderProps> = ({ isNightMode }) => {
  const [selectedScent, setSelectedScent] = useState(SCENTS[0].name);
  const [selectedSound, setSelectedSound] = useState(SOUNDSCAPES[0].name);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className={`py-24 px-6 md:px-12 transition-colors duration-1000 border-y ${isNightMode ? 'bg-[#020617] border-blue-900/30' : 'bg-white border-blue-50'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400 mb-4 block">Services Sur Mesure</span>
          <h2 className={`text-4xl md:text-6xl font-serif transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Configurez votre Arrivée</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h3 className={`text-xl font-serif mb-6 flex items-center gap-3 transition-colors duration-1000 ${isNightMode ? 'text-blue-200' : 'text-blue-900'}`}>
                <span className={`w-8 h-[1px] ${isNightMode ? 'bg-blue-400' : 'bg-blue-900'}`}></span> Signature Olfactive
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SCENTS.map(scent => (
                  <button 
                    key={scent.name}
                    onClick={() => setSelectedScent(scent.name)}
                    className={`p-6 text-left rounded-2xl border transition-all duration-500 ${
                      selectedScent === scent.name 
                        ? (isNightMode ? 'bg-blue-400 text-blue-950 border-blue-400 shadow-xl' : 'bg-blue-900 text-white border-blue-900 shadow-xl') 
                        : (isNightMode ? 'bg-[#0F172A] border-blue-900/50 text-blue-300 hover:border-blue-400' : 'bg-blue-50/30 border-blue-100 text-blue-900/70 hover:bg-white hover:border-blue-400')
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{scent.icon}</span>
                    <span className="block font-bold text-xs uppercase tracking-widest mb-1">{scent.name}</span>
                    <span className="text-[10px] opacity-70 leading-tight block">{scent.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-serif mb-6 flex items-center gap-3 transition-colors duration-1000 ${isNightMode ? 'text-blue-200' : 'text-blue-900'}`}>
                <span className={`w-8 h-[1px] ${isNightMode ? 'bg-blue-400' : 'bg-blue-900'}`}></span> Ambiance Sonore
              </h3>
              <div className="flex flex-wrap gap-4">
                {SOUNDSCAPES.map(sound => (
                  <button 
                    key={sound.name}
                    onClick={() => setSelectedSound(sound.name)}
                    className={`px-8 py-3 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
                      selectedSound === sound.name 
                        ? (isNightMode ? 'bg-blue-400 text-blue-950 border-blue-400' : 'bg-blue-100 text-blue-900 border-blue-100') 
                        : (isNightMode ? 'bg-transparent border-blue-800 text-blue-400 hover:border-blue-400 hover:text-white' : 'bg-transparent border-blue-200 text-blue-400 hover:border-blue-900 hover:text-blue-900')
                    }`}
                  >
                    {sound.name}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => { setIsSaved(true); setTimeout(() => setIsSaved(false), 3000); }}
              className={`px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl transition-all ${
                isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-blue-900 text-white hover:bg-blue-800'
              }`}
            >
              {isSaved ? 'Préférences Enregistrées ✓' : 'Enregistrer pour mon séjour'}
            </button>
          </div>

          <div className={`relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl group border transition-all duration-1000 ${isNightMode ? 'border-blue-900/50' : 'border-blue-100'}`}>
             <img src="/images/experience.jpeg" alt="Atmosphère chambre" className={`w-full h-full object-cover transition-all duration-[10s] group-hover:scale-110 ${isNightMode ? 'brightness-50 grayscale' : ''}`} />
             <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
             <div className="absolute bottom-10 left-10 text-white">
                <span className={`text-[10px] uppercase tracking-widest block mb-2 font-bold ${isNightMode ? 'text-blue-400' : 'text-white/70'}`}>Aperçu en temps réel</span>
                <p className="font-serif italic text-2xl">"{selectedScent} & {selectedSound}"</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBuilder;
