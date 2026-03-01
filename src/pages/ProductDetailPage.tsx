
import React from 'react';
import { ArrowLeft, CheckCircle2, Download, FlaskConical, Sprout, Timer, Activity, Microscope } from 'lucide-react';
import { PRODUCTS, DetailedProduct } from '../constants';

interface Props {
  productId: string;
}

const ProductDetailPage: React.FC<Props> = ({ productId }) => {
  const product = PRODUCTS.find(p => p.id === productId) as DetailedProduct;

  if (!product) {
    return <div className="pt-32 text-center">Product not found.</div>;
  }

  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-white">
      {/* Product Hero */}
      <section className="bg-stone-50 pb-20 pt-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <a href="#products" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-emerald-700 transition-colors mb-12">
            <ArrowLeft size={14} /> Back to Catalog
          </a>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">{product.tagline}</span>
              <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 leading-[0.9]">
                {product.name}<sup className="text-2xl text-stone-400 ml-1">TM</sup>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-8 font-light">
                {product.fullDescription}
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-emerald-900 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition-colors">
                  Inquire for Bulk Order
                </a>
                <button className="border border-stone-300 text-stone-900 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-stone-100 transition-colors flex items-center gap-2">
                  <Download size={16} /> MSDS
                </button>
              </div>
            </div>
            <div className="relative h-[500px] w-full bg-white rounded-sm overflow-hidden shadow-2xl border border-stone-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain p-12" />
              <div className="absolute inset-0 pointer-events-none border border-stone-100/50"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-stone-900/80 to-transparent">
                <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                  {product.keyMetrics.map((metric, idx) => (
                    <div key={idx}>
                      <span className="block text-3xl font-bold text-white mb-1">
                        {metric.value}<span className="text-sm font-normal text-emerald-300">{metric.unit}</span>
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-emerald-100 opacity-80">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Mechanism (Why It Works) */}
      <section className="py-24 bg-white relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <div className="sticky top-32">
                 <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2">
                   <Microscope size={16} /> Mechanism of Action
                 </h4>
                 <h2 className="text-3xl font-serif text-stone-900 mb-6">{product.science.heading}</h2>
                 <p className="text-stone-600 leading-relaxed text-sm">
                   {product.science.content}
                 </p>
               </div>
            </div>
            <div className="lg:col-span-8 bg-stone-50 p-10 border border-stone-100 rounded-sm">
               <h3 className="text-xl font-serif mb-8 text-stone-900 italic">How It Works: Step-by-Step</h3>
               <div className="space-y-12 relative before:absolute before:left-4 before:top-4 before:h-full before:w-px before:bg-stone-200">
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">1</div>
                    <h5 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-2">Inoculation</h5>
                    <p className="text-stone-600">{product.howItWorks.step1}</p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">2</div>
                    <h5 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-2">Activation</h5>
                    <p className="text-stone-600">{product.howItWorks.step2}</p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">3</div>
                    <h5 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-2">Result</h5>
                    <p className="text-stone-600">{product.howItWorks.step3}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Metrics Grid */}
      <section className="py-24 bg-stone-900 text-white reveal">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-serif mb-4">Measured Impact</h2>
             <p className="text-stone-400">Validated metrics from our controlled field trials specific to {product.name}.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {product.keyMetrics.map((metric, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
                 <div className="flex justify-between items-start mb-6">
                    <Activity className="text-emerald-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] bg-emerald-900 text-emerald-300 px-2 py-1 rounded-sm uppercase tracking-wider">{product.tagline.split(' ')[0]} Metric</span>
                 </div>
                 <h4 className="text-5xl font-bold font-serif mb-2">{metric.value}<span className="text-2xl text-emerald-500">{metric.unit}</span></h4>
                 <h5 className="font-bold uppercase tracking-widest text-xs text-stone-300 mb-2">{metric.label}</h5>
                 <p className="text-stone-500 text-xs">{metric.context}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Application Protocols */}
      <section className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Application Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {product.application.map((app, idx) => (
               <div key={idx} className="border border-stone-200 p-8 flex items-start gap-6 hover:shadow-lg transition-shadow bg-stone-50">
                  <div className="bg-emerald-100 text-emerald-800 p-4 rounded-full">
                    <FlaskConical size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-2">{app.method}</h4>
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 text-sm text-stone-600">
                          <span className="font-bold text-stone-400 uppercase text-[10px] tracking-widest w-20">Dosage:</span>
                          {app.dosage}
                       </div>
                       <div className="flex items-center gap-2 text-sm text-stone-600">
                          <span className="font-bold text-stone-400 uppercase text-[10px] tracking-widest w-20">Frequency:</span>
                          {app.frequency}
                       </div>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
