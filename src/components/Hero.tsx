
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          alt="Regenerative Soil"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950"></div>
        
        {/* Animated Motifs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 pulse-overlay bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
          Leader in Regenerative Agriculture
        </div>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[0.95] tracking-tight drop-shadow-2xl">
          Rewriting Soil-Biology<br />
          <span className="text-emerald-400 italic"></span>
        </h1>
        <p className="text-lg md:text-2xl text-stone-300/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Precision Bio-Solutions designed to regenerate Soil-biology, optimize nutrient uptake, and secure Superior Quality & Quantity of Yield.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#products" className="w-full sm:w-auto bg-white text-emerald-950 px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-emerald-400 hover:text-emerald-950 hover:translate-y-[-4px] shadow-2xl">
            Explore Science
          </a>
          <a href="#contact" className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm">
            Partner Inquiry
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-stone-500/50">
        <ChevronDown size={32} strokeWidth={1} />
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-40 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
