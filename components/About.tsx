
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface AboutProps {
  isNightMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isNightMode }) => {
  return (
    <section id="about" className={`transition-colors duration-[1000ms] ${isNightMode ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className={`text-4xl md:text-6xl font-serif leading-tight transition-colors duration-[1000ms] ${isNightMode ? 'text-blue-50' : 'text-blue-900'}`}>
            Un sanctuaire <br/> lagunaire.
          </h2>
        </div>
        <div className={`md:w-2/3 max-w-2xl transition-colors duration-[1000ms] ${isNightMode ? 'text-blue-200/50' : 'text-slate-600'}`}>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
            Souad Residences est né d'une volonté de sublimer l'hospitalité ivoirienne. Nous pensons que séjourner quelque part doit être une expérience sensorielle complète, ancrée dans le lieu.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
            À Yopougon, nous avons créé un havre de paix où le bois d'ébène, le grès et les textiles naturels se marient à la lumière changeante de la lagune Ébrié.
          </p>
          <img 
            src="/images/about.jpeg" 
            alt="Intérieur luxe Abidjan" 
            className={`w-full h-[400px] object-cover mt-12 rounded-2xl shadow-lg transition-all duration-[1000ms] ${isNightMode ? 'grayscale brightness-[0.25] opacity-70' : 'grayscale brightness-110'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
