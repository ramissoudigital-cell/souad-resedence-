
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

const ContactPage: React.FC<{ onBack: () => void; onOpenAssistant: () => void; isNightMode?: boolean }> = ({ onBack, onOpenAssistant, isNightMode }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const hours = [
    { day: 'Lundi', time: '10h00 - 22h00' },
    { day: 'Mardi', time: '10h00 - 22h00' },
    { day: 'Mercredi', time: '10h00 - 22h00' },
    { day: 'Jeudi', time: '10h00 - 23h00' },
    { day: 'Vendredi', time: '10h00 - 00h00' },
    { day: 'Samedi', time: '09h00 - 01h00' },
    { day: 'Dimanche', time: '09h00 - 22h00' },
  ];

  return (
    <div className={`min-h-screen pt-32 transition-colors duration-1000 ${isNightMode ? 'bg-[#020617]' : 'bg-[#F8FBFF]'}`}>
      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-reveal-up">
          <h1 className={`text-4xl md:text-6xl font-serif mb-4 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
            Venez nous <span className="italic text-blue-400">voir</span>
          </h1>
          <p className={`max-w-2xl mx-auto font-light transition-colors duration-1000 ${isNightMode ? 'text-blue-200/60' : 'text-blue-600/70'}`}>
            Situé au bord de la lagune à Yopougon, Souad Residences vous accueille dans un cadre d'exception.
          </p>
          <div className={`w-16 h-[2px] mx-auto mt-6 ${isNightMode ? 'bg-blue-900' : 'bg-blue-200'}`}></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Adresse", value: "Azito Lagunaire", sub: "Yopougon, Abidjan", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
            { label: "Téléphone", value: "+225 01 02 03 04 05", sub: "Disponibilité 24h/24", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
            { label: "Email", value: "bonjour@souad-abidjan.ci", sub: "Réponse prioritaire", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
            { label: "Check-in", value: "À partir de 14h", sub: "Accueil personnalisé", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-3xl shadow-sm border flex flex-col items-center text-center group hover:border-blue-400 transition-all duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-50'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all ${isNightMode ? 'bg-blue-900 text-blue-400 group-hover:bg-blue-400 group-hover:text-blue-950' : 'bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={item.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
              </div>
              <span className={`text-[10px] uppercase tracking-widest font-bold mb-2 transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-300'}`}>{item.label}</span>
              <h4 className={`font-serif mb-1 transition-colors duration-1000 ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>{item.value}</h4>
              <p className={`text-xs font-light transition-colors duration-1000 ${isNightMode ? 'text-blue-200/40' : 'text-slate-400'}`}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className={`p-8 md:p-12 rounded-[2.5rem] shadow-2xl border animate-reveal-left transition-all duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900 shadow-blue-950/50' : 'bg-white border-blue-50 shadow-blue-100/50'}`}>
            <h2 className={`text-3xl font-serif mb-8 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
              Envoyez-nous un <span className="italic text-blue-400 font-light">message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-medium ml-1 transition-colors duration-1000 ${isNightMode ? 'text-blue-300' : 'text-slate-500'}`}>Votre nom *</label>
                  <input type="text" placeholder="Jean Dupont" required className={`w-full px-6 py-4 rounded-2xl outline-none transition-all placeholder-blue-300/50 ${isNightMode ? 'bg-[#1E293B] border border-blue-900 text-white focus:border-blue-400' : 'bg-blue-50/30 border border-blue-50 text-blue-900 focus:border-blue-300'}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ml-1 transition-colors duration-1000 ${isNightMode ? 'text-blue-300' : 'text-slate-500'}`}>Email *</label>
                  <input type="email" placeholder="jean@exemple.fr" required className={`w-full px-6 py-4 rounded-2xl outline-none transition-all placeholder-blue-300/50 ${isNightMode ? 'bg-[#1E293B] border border-blue-900 text-white focus:border-blue-400' : 'bg-blue-50/30 border border-blue-50 text-blue-900 focus:border-blue-300'}`} />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-medium ml-1 transition-colors duration-1000 ${isNightMode ? 'text-blue-300' : 'text-slate-500'}`}>Message *</label>
                <textarea placeholder="Comment pouvons-nous vous aider ?" rows={5} required className={`w-full px-6 py-4 rounded-2xl outline-none transition-all placeholder-blue-300/50 resize-none ${isNightMode ? 'bg-[#1E293B] border border-blue-900 text-white focus:border-blue-400' : 'bg-blue-50/30 border border-blue-50 text-blue-900 focus:border-blue-300'}`}></textarea>
              </div>

              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl ${
                  formStatus === 'sent' ? 'bg-green-600 text-white' : (isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-blue-900 text-white hover:bg-blue-800')
                }`}
              >
                {formStatus === 'idle' && "Envoyer le message"}
                {formStatus === 'sending' && "Envoi en cours..."}
                {formStatus === 'sent' && "Message envoyé ✓"}
              </button>
            </form>
          </div>

          <div className="space-y-8 animate-reveal-right">
            <div className={`p-4 rounded-[2.5rem] shadow-xl border overflow-hidden transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-50'}`}>
              <div className="h-[350px] w-full rounded-[2rem] overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.358245842816!2d-4.081561730078125!3d5.303166599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebb70a6c6c7f%3A0x6b4c10a30000000!2sAzito%2C%20Yopougon%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1710000000000!5m2!1sfr!2sci"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Plan d'accès"
                ></iframe>
              </div>
            </div>

            <div className={`p-10 md:p-12 rounded-[2.5rem] shadow-xl border transition-colors duration-1000 ${isNightMode ? 'bg-[#0F172A] border-blue-900' : 'bg-white border-blue-50'}`}>
              <h3 className={`text-2xl font-serif mb-8 transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-blue-900'}`}>
                Horaires <span className="italic text-blue-400 font-light">d'ouverture</span>
              </h3>
              <div className="space-y-4">
                {hours.map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center py-3 border-b last:border-0 transition-colors duration-1000 ${isNightMode ? 'border-blue-900/40 text-blue-200/60' : 'border-blue-50 text-slate-600'}`}>
                    <span className="text-sm font-medium">{item.day}</span>
                    <span className={`text-sm font-bold transition-colors duration-1000 ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
