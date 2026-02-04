
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';
import { MENU_ITEMS } from '../constants';

interface RestaurantPageProps {
  onAddToCart: (product: Product) => void;
  onGoToCheckout?: () => void;
  isNightMode?: boolean;
}

const CATEGORIES = [
  { name: 'Plats Africains', icon: '🍴' },
  { name: 'Grillades', icon: '🍗' },
  { name: 'Glaces', icon: '🍦' },
  { name: 'Sorbets', icon: '✨' },
  { name: 'Coupes Glacées', icon: '🍧' },
  { name: 'Boissons', icon: '☕' }
];

const RestaurantPage: React.FC<RestaurantPageProps> = ({ onAddToCart, onGoToCheckout, isNightMode }) => {
  const [activeCategory, setActiveCategory] = useState('Plats Africains');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [bookingData, setBookingData] = useState({ date: '', time: '', guests: '2' });
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const currentItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className={`min-h-screen pt-32 transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-[#F8FBFF]'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] rounded-3xl overflow-hidden mb-24 shadow-2xl animate-reveal-right">
          <img 
            src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=2000" 
            alt="Ambiance Restaurant" 
            className={`w-full h-full object-cover grayscale transition-all duration-1000 ${isNightMode ? 'brightness-50' : 'brightness-75'}`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-blue-900/40">
            <span className="text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 animate-reveal-up delay-200">Gastronomie Fine</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 animate-reveal-up delay-400">Le Lotus Blanc</h1>
            <p className="max-w-xl text-white/70 font-light text-lg animate-reveal-up delay-600">
              Une cuisine de l'instant, où chaque plat raconte la richesse du terroir ivoirien et l'élégance internationale.
            </p>
          </div>
        </section>

        {/* Menu Title Section */}
        <section className="text-center mb-16 animate-reveal-up">
           <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 block">Notre Carte</span>
           <h2 className={`text-5xl md:text-7xl font-serif mb-6 ${isNightMode ? 'text-white' : 'text-slate-800'}`}>
             Saveurs <span className="text-blue-400 italic font-light">Authentiques</span>
           </h2>
           <p className={`max-w-2xl mx-auto font-light text-lg mb-8 ${isNightMode ? 'text-blue-200/70' : 'text-slate-500'}`}>
             De la cuisine africaine traditionnelle aux délices glacés, découvrez notre carte variée
           </p>
           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-900 mx-auto rounded-full mb-12"></div>
        </section>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-reveal-up delay-200">
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 shadow-sm border ${
                activeCategory === cat.name 
                ? (isNightMode ? 'bg-blue-400 text-blue-950 border-blue-400' : 'bg-blue-900 text-white border-blue-900') 
                : (isNightMode ? 'bg-[#0F172A] text-blue-300 border-blue-900/50 hover:border-blue-400' : 'bg-white text-slate-600 border-slate-100 hover:border-blue-300')
              } scale-105`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-sm font-medium tracking-wide">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {currentItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`rounded-3xl overflow-hidden shadow-xl flex flex-col animate-reveal-up transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border border-blue-900/50' : 'bg-white border border-blue-50'}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isNightMode ? 'brightness-75' : ''}`}
                />
                {item.badge && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                   <h3 className={`text-lg font-serif font-bold ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>{item.name}</h3>
                   <span className="text-lg font-bold text-blue-400">{item.price.toFixed(2)}€</span>
                </div>
                <p className={`text-sm font-light mb-6 flex-1 ${isNightMode ? 'text-blue-200/50' : 'text-slate-400'}`}>{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-4 p-2 rounded-2xl border ${isNightMode ? 'bg-blue-900/20 border-blue-800/50' : 'bg-blue-50 border-blue-100/50'}`}>
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors ${isNightMode ? 'bg-blue-900 text-blue-100' : 'bg-white text-blue-400'}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                    </button>
                    <span className={`font-bold w-4 text-center ${isNightMode ? 'text-white' : 'text-blue-900'}`}>{quantities[item.id] || 0}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart Button */}
        {(Object.values(quantities) as number[]).some((q: number) => q > 0) && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
            <div className={`backdrop-blur-xl border p-4 rounded-3xl shadow-2xl flex items-center justify-between animate-reveal-up ${isNightMode ? 'bg-[#020617]/90 border-blue-400/30' : 'bg-white/95 border-blue-100'}`}>
               <div className="flex items-center gap-6">
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isNightMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-50 text-blue-900'}`}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
                 </div>
                 <div>
                    <p className={`text-xs font-bold ${isNightMode ? 'text-blue-300' : 'text-slate-500'}`}>
                      {(Object.values(quantities) as number[]).reduce((a: number, b: number) => a + b, 0)} article(s)
                    </p>
                    <p className={`text-lg font-bold ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
                      {(Object.entries(quantities) as [string, number][]).reduce((acc: number, [id, q]: [string, number]) => {
                        const item = MENU_ITEMS.find(m => m.id === id);
                        return acc + (item ? item.price * q : 0);
                      }, 0).toFixed(2)}€
                    </p>
                 </div>
               </div>
               <button 
                 onClick={() => {
                   (Object.entries(quantities) as [string, number][]).forEach(([id, q]: [string, number]) => {
                     if (q > 0) {
                       const item = MENU_ITEMS.find(m => m.id === id);
                       if (item) {
                         for(let i=0; i<q; i++) onAddToCart(item);
                       }
                     }
                   });
                   setQuantities({});
                   if (onGoToCheckout) onGoToCheckout();
                 }}
                 className={`${isNightMode ? 'bg-blue-400 text-blue-950' : 'bg-blue-900 text-white'} px-10 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95`}
               >
                 Acheter
               </button>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <section className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32 p-12 md:p-24 rounded-3xl overflow-hidden relative transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A]' : 'bg-slate-900 text-white'}`}>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Restaurant Interior" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 animate-reveal-left">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400 mb-6 block">Table de l'Hôtel</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-white">Réserver une Table</h2>
          </div>

          <form onSubmit={handleBooking} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-blue-300">Date</label>
                  <input type="date" required className="bg-white/10 border border-white/20 p-4 rounded-lg outline-none focus:border-blue-400 transition-colors text-white" value={bookingData.date} onChange={e => setBookingData({...bookingData, date: e.target.value})} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-blue-300">Heure</label>
                  <input type="time" required className="bg-white/10 border border-white/20 p-4 rounded-lg outline-none focus:border-blue-400 transition-colors text-white" value={bookingData.time} onChange={e => setBookingData({...bookingData, time: e.target.value})} />
                </div>
                <button type="submit" className="md:col-span-2 py-5 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl mt-4">Confirmer la Réservation</button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
};

export default RestaurantPage;
