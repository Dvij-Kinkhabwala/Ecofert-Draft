
import React from 'react';
import { PRODUCTS } from '../constants';
import { CheckCircle2, Droplets, Zap, Shield, ArrowRight } from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <section className="max-w-7xl mx-auto px-6 mb-24 reveal">
        <div className="max-w-3xl">
          <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Catalog</h4>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">Biological Stacks for Modern Agriculture.</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Our bio-solutions integrate effortlessly into existing agricultural practices, enabling sustainable farming through soil regeneration.
          </p>
        </div>
      </section>

      {PRODUCTS.map((product, index) => (
        <section key={product.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'} reveal`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-sm shadow-2xl" />
                  <div className="absolute inset-0 border-[20px] border-emerald-900/5 group-hover:border-emerald-900/10 transition-all pointer-events-none"></div>
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase mb-4 block">{product.tagline}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
                  {product.name}<sup className="text-lg text-stone-400 ml-1">TM</sup>
                </h2>
                <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-stone-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`#product-${product.id}`} className="bg-stone-900 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-3">
                    View Technical Datasheet <ArrowRight size={16} />
                  </a>
                  <a href="#contact" className="border border-stone-300 text-stone-600 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:border-emerald-700 hover:text-emerald-700 transition-all flex items-center justify-center">
                    Request Protocols
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Shared Application Logic Section */}
      <section className="py-24 bg-emerald-950 text-white reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 italic">Integrated Delivery Systems</h2>
            <p className="text-emerald-300 max-w-xl mx-auto">EcoFertile solutions are engineered for compatibility with standard equipment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-white/10 hover:bg-white/5 transition-colors group">
              <Droplets size={48} className="mx-auto mb-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-4">Drip & Fertigation</h4>
              <p className="text-emerald-100/60 text-sm">Fine-filtered Biological spores that prevent clogging in precision irrigation lines.</p>
            </div>
            <div className="p-8 border border-white/10 hover:bg-white/5 transition-colors group">
              <Zap size={48} className="mx-auto mb-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-4">Seed Encapsulation</h4>
              <p className="text-emerald-100/60 text-sm">Direct-contact bacterial coatings that activate upon initial root emergence.</p>
            </div>
            <div className="p-8 border border-white/10 hover:bg-white/5 transition-colors group">
              <Shield size={48} className="mx-auto mb-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-4">Foliar Absorption</h4>
              <p className="text-emerald-100/60 text-sm">Enhanced surfactants for rapid stomatal uptake without leaf-surface burn.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
