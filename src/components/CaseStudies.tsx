
import React, { useMemo } from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  // Select top 6 case studies based on yield increase for the home page showcase
  const showcasedStudies = useMemo(() => {
    return [...CASE_STUDIES]
      .sort((a, b) => b.yieldIncrease - a.yieldIncrease)
      .slice(0, 6);
  }, []);

  return (
    <section id="case-studies" className="py-20 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Proven in Fields. <br /><span className="text-emerald-400">Ready for Scale.</span></h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            We move beyond anecdotal evidence. Our global field trials demonstrate consistent agronomic and economic improvements across diverse soil profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {showcasedStudies.map((study) => (
            <div key={study.id} className="border-l-4 border-emerald-600 pl-6 py-5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group rounded-r-sm flex flex-col justify-center">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold group-hover:text-emerald-400 transition-colors font-serif">{study.crop}</h4>
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest bg-stone-950 px-2 py-0.5 rounded-full border border-stone-800">{study.region}</span>
              </div>
              <p className="text-sm text-stone-400 mb-4 font-light min-h-[2.5rem] leading-snug">{study.problem}</p>
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                <div>
                  <span className="block text-2xl font-bold text-emerald-500">+{study.yieldIncrease}%</span>
                  <span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider">Yield</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-emerald-500">-{study.inputReduction}%</span>
                  <span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider">Inputs</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-emerald-500">+{study.profitImprovement}%</span>
                  <span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider">Profit</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a href="#case-studies" onClick={(e) => { e.preventDefault(); window.location.hash = 'case-studies'; }} className="inline-block border-b border-emerald-500 text-emerald-400 pb-1 text-xs font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                View All Case Studies
             </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
