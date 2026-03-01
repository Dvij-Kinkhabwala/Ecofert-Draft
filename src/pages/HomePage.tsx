
import React from 'react';
import Hero from '../components/Hero';
import PillarGrid from '../components/PillarGrid';
import ProductSection from '../components/ProductSection';
import CaseStudies from '../components/CaseStudies';
import { ArrowRight, BarChart3, Globe2, LeafyGreen } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      
      {/* Leadership Summary Section */}
      <section className="py-32 bg-white reveal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-6">Market Leadership</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-10 leading-[1.1]">
              Science-Driven <br /><span className="italic">Regenerative Impact.</span>
            </h2>
            <p className="text-stone-600 text-xl mb-12 leading-relaxed font-light">
              EcoFertile develops soil-first Bio-solutions that restore soil ecosystem & improve nutrient efficiency to support earthworm activity and stable crop performance across diverse farming systems.
            </p>
         
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-50 rounded-sm -z-10 group-hover:inset-0 transition-all duration-700"></div>
            <div className="bg-white p-2 shadow-2xl overflow-hidden">
               <div className="aspect-[4/3] bg-stone-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1595009552535-be753447727e?auto=format&fit=crop&q=80&w=1200" 
                    alt="Microbial Visualization" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
               </div>
            </div>
            <div className="mt-8 flex items-center gap-4 text-stone-400">
              <div className="w-12 h-px bg-stone-200"></div>
              <p className="text-xs italic font-medium">Verified field trial visualization, Q4 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <div className="bg-emerald-900 py-20 text-white border-y border-emerald-800 overflow-hidden relative reveal">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center text-center md:text-left">
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <div className="p-4 bg-white/5 rounded-full text-emerald-400">
                <Globe2 size={32} strokeWidth={1} />
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold">5+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold">International Hubs</span>
              </div>
            </div>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <div className="p-4 bg-white/5 rounded-full text-emerald-400">
                <LeafyGreen size={32} strokeWidth={1} />
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold">45k+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold">Hectares Validated</span>
              </div>
            </div>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <div className="p-4 bg-white/5 rounded-full text-emerald-400">
                <BarChart3 size={32} strokeWidth={1} />
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold">40%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold">Chemical Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PillarGrid />

      {/* Case Studies Restored to Home */}
      <div className="reveal">
        <CaseStudies />
      </div>



      {/* Product Highlight Section */}
      <div className="reveal">
        <ProductSection />
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-emerald-950 text-white relative overflow-hidden reveal">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic leading-tight">Unlock the Hidden Potential of Your Soil</h2>
          <p className="text-emerald-200/60 max-w-3xl mx-auto mb-12 text-xl leading-relaxed font-light">
            Our bio-solutions integrate effortlessly into existing agricultural practices, enabling sustainable farming through soil regeneration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#products" className="inline-flex items-center gap-4 bg-white text-emerald-950 px-12 py-6 font-bold uppercase tracking-[0.2em] text-xs hover:bg-emerald-400 transition-all shadow-2xl">
              View Product Systems <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-4 border border-white/20 text-white px-12 py-6 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all">
              Request Strategy Brief
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
