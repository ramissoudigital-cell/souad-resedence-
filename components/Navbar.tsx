
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  currentView: string;
  onOpenAssistant: () => void;
  isNightMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart, currentView, onOpenAssistant, isNightMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentView === 'home' && !scrolled;
  
  const navBackground = scrolled || mobileMenuOpen 
    ? (isNightMode ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-blue-900/50' : 'bg-white/70 backdrop-blur-xl border-b border-blue-100') 
    : 'bg-transparent';
  
  const textColor = (scrolled || mobileMenuOpen || currentView !== 'home') 
    ? (isNightMode ? 'text-blue-100' : 'text-[#1E3A8A]') 
    : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out py-4 md:py-6 ${navBackground}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => onNavClick(e, '')}
            className={`text-2xl md:text-3xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500 ${textColor}`}
          >
            {BRAND_NAME}
          </a>
          
          <div className={`hidden xl:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${textColor}`}>
            <a href="#products" onClick={(e) => onNavClick(e, 'products')} className="hover:text-blue-500 transition-colors">Résidences</a>
            <a href="#restaurant" onClick={(e) => onNavClick(e, 'restaurant')} className="hover:text-blue-500 transition-colors">Restaurant</a>
            <a href="#gallery" onClick={(e) => onNavClick(e, 'gallery')} className="hover:text-blue-500 transition-colors">Galerie</a>
            <a href="#journal" onClick={(e) => onNavClick(e, 'journal')} className="hover:text-blue-500 transition-colors">Revue</a>
            <a href="#contact" onClick={(e) => onNavClick(e, 'contact')} className="hover:text-blue-500 transition-colors">Contact</a>
            
            <button 
              onClick={onOpenAssistant} 
              className="hover:text-blue-500 transition-colors flex items-center gap-2 border-l border-current pl-6 ml-2"
            >
              <span>Aide IA</span>
            </button>
          </div>

          <div className={`flex items-center gap-4 md:gap-8 z-50 relative transition-colors duration-500 ${textColor}`}>
            <a 
              href="#reservation" 
              onClick={(e) => onNavClick(e, 'reservation')}
              className={`hidden sm:block px-6 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ${
                isHome ? 'border-white/40 bg-white/10 hover:bg-white hover:text-[#1E3A8A]' : 
                (isNightMode ? 'border-blue-400/20 bg-blue-900/40 hover:bg-blue-400 hover:text-blue-900' : 'border-blue-900/20 bg-blue-50 hover:bg-blue-900 hover:text-white')
              } backdrop-blur-md`}
            >
              Réserver
            </a>
            
            <button 
              onClick={onOpenCart}
              className="relative group p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="block xl:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isNightMode ? 'bg-[#020617]/95 text-blue-100' : 'bg-white/95 text-[#1E3A8A]'
      } backdrop-blur-2xl ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-serif w-full px-6 text-center">
            <a href="#products" onClick={(e) => { setMobileMenuOpen(false); onNavClick(e, 'products'); }} className="hover:text-blue-500 transition-colors">Résidences</a>
            <a href="#restaurant" onClick={(e) => { setMobileMenuOpen(false); onNavClick(e, 'restaurant'); }} className="hover:text-blue-500 transition-colors">Restaurant</a>
            <a href="#gallery" onClick={(e) => { setMobileMenuOpen(false); onNavClick(e, 'gallery'); }} className="hover:text-blue-500 transition-colors">Galerie</a>
            <a href="#journal" onClick={(e) => { setMobileMenuOpen(false); onNavClick(e, 'journal'); }} className="hover:text-blue-500 transition-colors">Revue</a>
            <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); onNavClick(e, 'contact'); }} className="hover:text-blue-500 transition-colors">Contact</a>
            
            <div className={`w-12 h-[1px] my-2 ${isNightMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAssistant(); }} 
              className="text-base italic text-blue-400 font-serif hover:text-blue-600 transition-colors"
            >
              Majordome Souad
            </button>

            <a href="#reservation" onClick={(e) => { setMobileMenuOpen(false); onNavClick(e, 'reservation'); }} className={`${isNightMode ? 'bg-blue-400 text-blue-950' : 'bg-blue-900 text-white'} px-10 py-4 rounded-full text-base uppercase tracking-widest font-sans font-bold mt-4`}>Réserver</a>
          </div>
      </div>
    </>
  );
};

export default Navbar;
