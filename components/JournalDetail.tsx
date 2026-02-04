
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
  isNightMode?: boolean;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack, isNightMode }) => {
  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-blue-50'} animate-fade-in-up`}>
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             className={`w-full h-full object-cover transition-all duration-1000 ${isNightMode ? 'brightness-50 grayscale' : ''}`}
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
       </div>

       <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
          <div className={`p-8 md:p-16 shadow-2xl rounded-3xl border transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-100'}`}>
             <div className={`flex justify-between items-center mb-12 border-b pb-8 transition-colors duration-1000 ${isNightMode ? 'border-blue-900/50' : 'border-blue-50'}`}>
                <button 
                  onClick={onBack}
                  className={`group flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-colors ${isNightMode ? 'text-blue-400 hover:text-white' : 'text-blue-400 hover:text-blue-900'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Retour à la Revue
                </button>
                <span className={`text-xs font-medium uppercase tracking-widest transition-colors duration-1000 ${isNightMode ? 'text-blue-400/50' : 'text-blue-300'}`}>{article.date}</span>
             </div>

             <h1 className={`text-4xl md:text-6xl font-serif mb-12 leading-tight text-center transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
               {article.title}
             </h1>

             <div className={`prose prose-lg mx-auto font-light leading-loose transition-colors duration-1000 ${isNightMode ? 'text-blue-200/70 prose-invert' : 'text-slate-600 prose-blue'}`}>
               {article.content}
             </div>
             
             <div className={`mt-16 pt-12 border-t flex justify-center transition-colors duration-1000 ${isNightMode ? 'border-blue-900/50 text-blue-400' : 'border-blue-50 text-blue-900'}`}>
                 <span className="text-2xl font-serif italic">Souad</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
