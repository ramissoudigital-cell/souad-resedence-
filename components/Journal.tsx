
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  isNightMode?: boolean;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, isNightMode }) => {
  return (
    <section id="journal" className={`py-32 px-6 md:px-12 transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-blue-50'}`}>
      <div className="max-w-[1800px] mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b transition-colors duration-1000 ${isNightMode ? 'border-blue-900/30' : 'border-blue-100'}`}>
            <div>
                <span className={`block text-xs font-bold uppercase tracking-[0.2em] mb-4 ${isNightMode ? 'text-blue-500' : 'text-blue-400'}`}>Editorial</span>
                <h2 className={`text-4xl md:text-6xl font-serif transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>The Journal</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {JOURNAL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                    <div className={`w-full aspect-[4/3] overflow-hidden mb-8 rounded-lg shadow-sm transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border border-blue-900/20' : 'bg-white'}`}>
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${isNightMode ? 'brightness-50 grayscale' : ''}`}
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                        <span className={`text-xs font-medium uppercase tracking-widest mb-3 ${isNightMode ? 'text-blue-500' : 'text-blue-400'}`}>{article.date}</span>
                        <h3 className={`text-2xl font-serif mb-4 leading-tight transition-colors duration-500 ${isNightMode ? 'text-blue-100 group-hover:text-blue-400' : 'text-blue-900 group-hover:text-blue-600'}`}>{article.title}</h3>
                        <p className={`font-light leading-relaxed transition-colors duration-1000 ${isNightMode ? 'text-blue-200/40' : 'text-slate-600'}`}>{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
