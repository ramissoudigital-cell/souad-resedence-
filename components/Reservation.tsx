
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';

interface ReservationProps {
  onBack: () => void;
  onProceedToPayment: (room: any, dates: {checkIn: string, checkOut: string}) => void;
  selectedId?: string;
  isNightMode?: boolean;
}

const Reservation: React.FC<ReservationProps> = ({ onBack, onProceedToPayment, selectedId, isNightMode }) => {
  const [formData, setFormData] = useState({
    suiteId: selectedId || PRODUCTS[0].id,
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: ''
  });

  const selectedRoom = useMemo(() => 
    PRODUCTS.find(p => p.id === formData.suiteId) || PRODUCTS[0]
  , [formData.suiteId]);

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
  };

  const nights = calculateNights();
  const totalPrice = nights * selectedRoom.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nights <= 0) {
      alert("Veuillez choisir une date de départ postérieure à la date d'arrivée.");
      return;
    }
    
    // On passe un objet modifié avec le prix total calculé pour le séjour
    const stayInfo = {
      ...selectedRoom,
      name: `${selectedRoom.name} (${nights} nuits)`,
      price: totalPrice
    };

    onProceedToPayment(stayInfo, { checkIn: formData.checkIn, checkOut: formData.checkOut });
  };

  return (
    <div className={`min-h-screen pt-32 pb-24 transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-[#F8FBFF]'}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16 animate-reveal-up">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400 mb-4 block">Réservation Immédiate</span>
          <h1 className={`text-4xl md:text-6xl font-serif mb-4 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Votre séjour chez <span className="italic text-blue-400">Souad</span></h1>
          <p className={`font-light tracking-wide transition-colors duration-1000 ${isNightMode ? 'text-blue-300' : 'text-blue-600/70'}`}>Réservez, payez et recevez votre confirmation instantanément.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-8">
            <div className={`p-8 md:p-12 rounded-[2.5rem] shadow-2xl border transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900/50 shadow-black/50' : 'bg-white border-blue-50 shadow-blue-100/50'}`}>
              <h2 className={`text-2xl font-serif mb-8 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Détails du <span className="italic text-blue-400">Séjour</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Choisir votre Résidence *</label>
                  <select 
                    value={formData.suiteId}
                    onChange={e => setFormData({...formData, suiteId: e.target.value})}
                    className={`w-full p-5 rounded-2xl border outline-none transition-all appearance-none ${isNightMode ? 'bg-[#1E293B] border-blue-900 text-white focus:border-blue-400' : 'bg-blue-50/30 border-blue-50 text-blue-900 focus:border-blue-400'}`}
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.name} — {p.price}€/nuit</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Arrivée *</label>
                    <input type="date" required className={`w-full p-5 rounded-2xl border outline-none ${isNightMode ? 'bg-[#1E293B] border-blue-900 text-white' : 'bg-blue-50/30 text-blue-900 border-blue-50'}`} value={formData.checkIn} onChange={e => setFormData({...formData, checkIn: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Départ *</label>
                    <input type="date" required className={`w-full p-5 rounded-2xl border outline-none ${isNightMode ? 'bg-[#1E293B] border-blue-900 text-white' : 'bg-blue-50/30 text-blue-900 border-blue-50'}`} value={formData.checkOut} onChange={e => setFormData({...formData, checkOut: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Nombre de Voyageurs</label>
                  <select className={`w-full p-5 rounded-2xl border outline-none appearance-none ${isNightMode ? 'bg-[#1E293B] border-blue-900 text-white' : 'bg-blue-50/30 text-blue-900 border-blue-50'}`} value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})}>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Adulte{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>

                <div className={`mt-10 p-8 rounded-3xl border border-dashed flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 ${isNightMode ? 'bg-blue-400/5 border-blue-400/30' : 'bg-blue-50 border-blue-200'}`}>
                   <div>
                     <p className={`text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>Estimation du séjour</p>
                     <p className={`text-sm transition-colors duration-1000 ${isNightMode ? 'text-blue-200/50' : 'text-slate-500'}`}>{nights > 0 ? `${nights} nuit(s) à ${selectedRoom.price}€` : 'Sélectionnez vos dates'}</p>
                   </div>
                   <div className="text-right">
                      <span className={`text-3xl font-serif transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>{totalPrice}€</span>
                   </div>
                </div>

                <button type="submit" className={`w-full py-6 rounded-2xl font-bold tracking-[0.2em] text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 ${isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-blue-900 text-white hover:bg-blue-800'}`}>
                   <span>Payer et Confirmer la Réservation</span>
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className={`p-10 rounded-[2.5rem] shadow-xl space-y-8 transition-colors duration-1000 ${isNightMode ? 'bg-blue-400 text-blue-950' : 'bg-blue-900 text-white'}`}>
              <h3 className="text-2xl font-serif">Paiement <span className="italic opacity-70">Direct</span></h3>
              <p className="text-sm font-light leading-relaxed">Réservez en toute sécurité avec nos partenaires de confiance. Recevez votre bon de séjour par email immédiatement après confirmation.</p>
              <ul className="space-y-6">
                {["Confirmation instantanée", "Paiement local (Wave, Orange)", "Accès prioritaire à la lagune"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${isNightMode ? 'bg-blue-950' : 'bg-blue-300'}`}></div>
                    <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
