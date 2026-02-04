
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  isNightMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, isNightMode }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className={`pt-24 pb-12 px-6 transition-colors duration-1000 ${isNightMode ? 'bg-[#020617] text-blue-200/50' : 'bg-blue-50 text-blue-900/70'}`}>
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className={`text-2xl font-serif mb-6 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Souad Residences</h4>
          <p className="max-w-xs font-light leading-relaxed">
            Hôtellerie résidentielle de luxe à Abidjan. 
            L'élégance du bleu, la pureté du blanc.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className={`font-medium mb-6 tracking-wide text-sm uppercase transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Navigation</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-500 transition-colors">Résidences</a></li>
            <li><a href="#restaurant" onClick={(e) => onLinkClick(e, 'restaurant')} className="hover:text-blue-500 transition-colors">Restaurant</a></li>
            <li><a href="#gallery" onClick={(e) => onLinkClick(e, 'gallery')} className="hover:text-blue-500 transition-colors">Galerie</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className={`font-medium mb-6 tracking-wide text-sm uppercase transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Société</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-blue-500 transition-colors">Notre Histoire</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-blue-500 transition-colors">La Revue</a></li>
            <li><a href="#contact" onClick={(e) => onLinkClick(e, 'contact')} className="hover:text-blue-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className={`font-medium mb-6 tracking-wide text-sm uppercase transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Newsletter</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-transparent border-b py-2 outline-none transition-colors placeholder-blue-300 ${isNightMode ? 'border-blue-900 focus:border-blue-400 text-white' : 'border-blue-200 focus:border-blue-900 text-blue-900'}`} 
            />
            <button 
              onClick={handleSubscribe}
              className={`self-start text-xs font-bold uppercase tracking-widest mt-2 transition-colors ${isNightMode ? 'text-blue-400 hover:text-white' : 'hover:text-blue-900'}`}
            >
              {subscribeStatus === 'idle' && 'S\'abonner'}
              {subscribeStatus === 'loading' && 'Traitement...'}
              {subscribeStatus === 'success' && 'Inscrit ✓'}
            </button>
          </div>
        </div>
      </div>

      <div className={`max-w-[1800px] mx-auto mt-20 pt-8 border-t flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40 transition-colors duration-1000 ${isNightMode ? 'border-blue-900/50' : 'border-blue-100'}`}>
        <p>© 2025 Souad Residences Abidjan • Un sanctuaire de sérénité.</p>
      </div>
    </footer>
  );
};

export default Footer;
