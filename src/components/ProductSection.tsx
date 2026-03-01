
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductSection: React.FC = () => {
  return (
    <section id="products-section" className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4">Precision Biologicals</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">Bio-fertilizer Systems for Living Soil</h2>
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              Not just fertilizers, but bio-solutions that restore and enhance physical, biological and chemical soil properties.
            </p>
          </div>
          <a href="#products" className="text-emerald-700 font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:gap-5 transition-all group pb-2 border-b-2 border-emerald-700/20 hover:border-emerald-700">
            View Full Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch reveal-group">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-sm overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full transform ${index === 1 ? 'lg:-translate-y-8' : index === 2 ? 'lg:translate-y-4' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-72 relative overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">{product.tagline}</span>
                <h3 className="text-2xl font-bold text-stone-900 mb-6 font-serif h-16">{product.name}</h3>
                <p className="text-stone-600 mb-8 text-sm leading-relaxed min-h-[5rem]">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <div className="space-y-4 mb-10 border-t border-stone-50 pt-6">
                    {product.benefits.slice(0, 3).map((benefit) => (
                      <div key={benefit} className="flex items-center gap-4 text-xs font-semibold text-stone-800">
                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <a href="#products" className="block w-full py-5 bg-stone-50 border border-stone-200 text-stone-900 text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 hover:text-white hover:border-emerald-800 transition-all text-center">
                    Technical Overview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
