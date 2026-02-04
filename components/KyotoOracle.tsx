
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { generateAbidjanItinerary } from '../services/geminiService';

const MOODS = ['Festif', 'Solaire', 'Méditatif', 'Urbain'];
const DURATIONS = ['Un Après-midi', 'Une Soirée', 'Tout le Weekend'];

interface AbidjanOracleProps {
  isNightMode?: boolean;
}

const AbidjanOracle: React.FC<AbidjanOracleProps> = ({ isNightMode }) => {
  const [selectedMood, setSelectedMood] = useState(MOODS[1]);
  const [selectedDuration, setSelectedDuration] = useState(DURATIONS[0]);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConsult = async () => {
    setIsLoading(true);
    setResult(null);
    try {
      const text = await generateAbidjanItinerary(selectedMood, selectedDuration);
      setResult(text);
    } catch (e) {
      setResult("Impossible de contacter l'Oracle.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`py-32 px-6 md:px-12 relative overflow-hidden transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-blue-950'} text-white`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] transition-colors duration-1000 ${isNightMode ? 'bg-blue-900/40' : 'bg-blue-400'}`}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className={`text-xs font-bold uppercase tracking-[0.4em] mb-6 block animate-pulse transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-300'}`}>Curation Abidjanaise</span>
        <h2 className={`text-4xl md:text-7xl font-serif mb-12 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-white'}`}>L'Oracle d'Abidjan</h2>
        
        <p className={`max-w-xl mx-auto font-light mb-16 text-lg transition-colors duration-1000 ${isNightMode ? 'text-blue-200/50' : 'text-blue-100/70'}`}>
          Laissez-nous guider vos pas dans la perle des lagunes. Une recommandation unique, générée par IA pour découvrir les secrets d'Abidjan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <label className={`text-xs uppercase tracking-widest text-left transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-300'}`}>Votre État d'Esprit</label>
            <div className="flex flex-wrap gap-3">
              {MOODS.map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedMood(m)}
                  className={`px-6 py-3 rounded-full border text-xs uppercase tracking-widest transition-all ${
                    selectedMood === m 
                      ? (isNightMode ? 'bg-blue-400 text-blue-950 border-blue-400' : 'bg-white text-blue-900 border-white') 
                      : (isNightMode ? 'border-blue-900 text-blue-400/40 hover:border-blue-400 hover:text-white' : 'border-blue-800 text-blue-300 hover:border-white hover:text-white')
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className={`text-xs uppercase tracking-widest text-left transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-300'}`}>Temps Disponible</label>
            <div className="flex flex-wrap gap-3">
              {DURATIONS.map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDuration(d)}
                  className={`px-6 py-3 rounded-full border text-xs uppercase tracking-widest transition-all ${
                    selectedDuration === d 
                      ? (isNightMode ? 'bg-blue-400 text-blue-950 border-blue-400' : 'bg-white text-blue-900 border-white') 
                      : (isNightMode ? 'border-blue-900 text-blue-400/40 hover:border-blue-400 hover:text-white' : 'border-blue-800 text-blue-300 hover:border-white hover:text-white')
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={handleConsult}
          disabled={isLoading}
          className={`group relative inline-flex items-center gap-4 px-12 py-6 border rounded-full overflow-hidden transition-all disabled:opacity-50 ${
            isNightMode ? 'border-blue-400 hover:bg-blue-400' : 'border-white hover:bg-white'
          }`}
        >
          <span className={`relative z-10 text-xs font-bold uppercase tracking-[0.3em] transition-colors ${
            isNightMode ? 'text-blue-400 group-hover:text-blue-950' : 'text-white group-hover:text-blue-900'
          }`}>
            {isLoading ? 'Consultation...' : 'Révéler mon Chemin'}
          </span>
        </button>

        {result && (
          <div className={`mt-20 max-w-2xl mx-auto text-left animate-fade-in-up p-8 md:p-12 rounded-2xl border backdrop-blur-md transition-all duration-1000 ${
            isNightMode ? 'bg-[#0F172A]/50 border-blue-900/50 shadow-2xl shadow-black' : 'bg-white/5 border-white/10'
          }`}>
            <div className={`flex items-center gap-3 mb-8 pb-4 border-b transition-colors duration-1000 ${isNightMode ? 'border-blue-900/50' : 'border-white/10'}`}>
                <span className="text-3xl">🌴</span>
                <h3 className="text-xl font-serif italic text-white">Votre parcours abidjanais</h3>
            </div>
            <div className="prose prose-invert">
                <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AbidjanOracle;
