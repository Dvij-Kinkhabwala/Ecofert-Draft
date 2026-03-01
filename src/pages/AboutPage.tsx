
import React from 'react';
import AboutUs from '../components/AboutUs';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <section className="max-w-7xl mx-auto px-6 mb-32 reveal">
        <div className="max-w-4xl">
          <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-6">Our Mission</h4>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-10 leading-[1.1]">Regenerating soils,<br /><span className="italic">Sustaining lives.</span></h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-light">
            We regenerate soil health for farmers and agricultural partners worldwide with accessible, science backed Bio-solutions that restore soil health, improve yields, reduce reliance on chemical inputs, increase soil organic carbon, and strengthen food security, livelihoods, and climate resilience.
          </p>
        </div>
      </section>

      <AboutUs />

      <section className="py-32 bg-stone-900 text-white reveal overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="flex flex-col justify-center h-full">
               <h4 className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">The Global Context</h4>
               <h2 className="text-4xl md:text-5xl font-serif mb-10 italic leading-tight">The Soil Crisis</h2>
               <p className="text-stone-400 text-lg leading-relaxed mb-8 font-light">
                 Decades of chemical intensive farming have degraded soils and reduced yield resilience. These practices deliver short term gains while steadily eroding the soil ecosystem agriculture depends on to thrive.
               </p>
               <p className="text-stone-400 text-lg leading-relaxed font-light">
                 EcoFertile aims to address this crisis by rebuilding soil ecosystem with accessible, science backed bio solutions that restore resilience, productivity, and long term soil health.
               </p>
             </div>
             <div className="relative">
               <div className="aspect-square bg-emerald-950 flex items-center justify-center p-12 overflow-hidden group shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1599923208221-a178e2285189?auto=format&fit=crop&q=80&w=1200" 
                    className="opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 w-full h-full object-cover" 
                    alt="Cracked earth healing" 
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 border border-white/10 m-8">
                     <h3 className="text-3xl md:text-4xl font-serif font-bold italic leading-tight mb-6">Biological restoration <br />is the only path <br />to resilience.</h3>
                     <div className="w-12 h-px bg-emerald-500"></div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
