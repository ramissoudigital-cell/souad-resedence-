
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
  isNightMode?: boolean;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, isNightMode }) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const delivery = 3.00;
  const total = subtotal + delivery;

  const handlePay = () => {
    if (!selectedMethod) return;
    setPaymentStatus('processing');
    setTimeout(() => setPaymentStatus('success'), 2000);
  };

  if (paymentStatus === 'success') {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 text-center animate-fade-in-up transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-[#F8FBFF]'}`}>
        <div className={`p-12 rounded-[3rem] shadow-2xl max-w-md border transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-50'}`}>
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/></svg>
          </div>
          <h2 className={`text-3xl font-serif mb-4 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Paiement Réussi !</h2>
          <p className={`font-light mb-8 transition-colors duration-1000 ${isNightMode ? 'text-blue-200/60' : 'text-slate-500'}`}>Votre commande est en cours de préparation. Le Majordome Souad vous informera dès qu'elle sera prête.</p>
          <button onClick={onBack} className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-colors ${isNightMode ? 'bg-blue-400 text-blue-950' : 'bg-blue-900 text-white'}`}>Retour au menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-12 pb-24 px-6 animate-fade-in-up transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-[#F8FBFF]'}`}>
      <div className="max-w-6xl mx-auto">
        
        <button 
          onClick={onBack}
          className={`group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors mb-12 ${isNightMode ? 'text-blue-400 hover:text-white' : 'text-blue-400 hover:text-blue-900'}`}
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          Retour au menu
        </button>

        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400 mb-4 block">PAIEMENT SÉCURISÉ</span>
          <h1 className={`text-5xl md:text-7xl font-serif transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
            Finaliser votre <span className="italic text-blue-400 font-light">commande</span>
          </h1>
          <div className={`w-24 h-[2px] mx-auto mt-8 ${isNightMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className={`lg:col-span-7 p-10 md:p-14 rounded-[2.5rem] shadow-xl border transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-50'}`}>
            <h2 className={`text-2xl font-serif mb-10 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
              Choisissez votre <span className="italic text-blue-400 font-light">moyen de paiement</span>
            </h2>

            <div className="space-y-6">
              {['wave', 'om', 'card'].map((method) => (
                <button 
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`w-full p-6 rounded-3xl border-2 flex items-center gap-6 transition-all group ${
                    selectedMethod === method 
                      ? (isNightMode ? 'border-blue-400 bg-blue-900/30' : 'border-blue-600 bg-blue-50/30') 
                      : (isNightMode ? 'border-blue-900 bg-transparent' : 'border-slate-50 bg-slate-50/30 hover:border-blue-200')
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center p-2 overflow-hidden ${isNightMode ? 'bg-[#1E293B]' : 'bg-white'}`}>
                    <span className="text-xl font-bold uppercase text-blue-400">{method}</span>
                  </div>
                  <div className="text-left">
                    <h4 className={`text-lg font-bold mb-1 transition-colors ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>{method === 'wave' ? 'Wave' : method === 'om' ? 'Orange Money' : 'Carte Bancaire'}</h4>
                    <p className={`text-xs transition-colors ${isNightMode ? 'text-blue-400/50' : 'text-slate-400'}`}>Sécurisé & Rapide</p>
                  </div>
                </button>
              ))}
            </div>

            <button 
              disabled={!selectedMethod || paymentStatus === 'processing'}
              onClick={handlePay}
              className={`w-full py-6 mt-12 rounded-3xl text-sm font-bold uppercase tracking-widest transition-all shadow-xl ${
                !selectedMethod 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : (isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-blue-900 text-white hover:bg-blue-800 active:scale-95')
              }`}
            >
              {paymentStatus === 'processing' ? 'Traitement...' : `Payer ${total.toFixed(2)}€`}
            </button>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className={`p-10 md:p-12 rounded-[2.5rem] shadow-xl border transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-50'}`}>
              <h2 className={`text-2xl font-serif mb-10 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>Récapitulatif</h2>
              
              <div className="space-y-6 mb-10">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className={`text-sm transition-colors ${isNightMode ? 'text-blue-200/70' : 'text-slate-600'}`}>{item.name}</span>
                    <span className={`text-sm font-bold transition-colors ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>{item.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>

              <div className={`space-y-4 pt-10 border-t transition-colors duration-1000 ${isNightMode ? 'border-blue-900' : 'border-slate-50'}`}>
                <div className="flex justify-between items-center pt-6 mt-4">
                   <span className={`text-xl font-serif transition-colors ${isNightMode ? 'text-blue-300' : 'text-blue-900'}`}>Total</span>
                   <span className="text-2xl font-bold text-blue-400">{total.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
