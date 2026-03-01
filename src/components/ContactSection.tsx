
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Globe } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [partnerType, setPartnerType] = useState('Distribution');

  return (
    <section id="contact" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Abstract Soil Pattern background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-950/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Ready to Restore?</h2>
            <p className="text-stone-600 text-lg mb-12">
              Whether you represent a large-scale plantation, a global NGO, or a regional distribution network, EcoFertile is ready to architect your soil transition strategy.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="text-emerald-700 bg-emerald-100 p-3 rounded-sm"><MapPin size={24} /></div>
                <div>
                  <h5 className="font-bold text-stone-900">Headquarters</h5>
                  <p className="text-stone-500">Bengaluru, KA, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-emerald-700 bg-emerald-100 p-3 rounded-sm"><Globe size={24} /></div>
                <div>
                  <h5 className="font-bold text-stone-900">International Operations</h5>
                  <p className="text-stone-500">Kenya • Philippines • Cambodia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-emerald-700 bg-emerald-100 p-3 rounded-sm"><Mail size={24} /></div>
                <div>
                  <h5 className="font-bold text-stone-900">Inquiries</h5>
                  <p className="text-stone-500">partnerships@ecofertile.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-emerald-700">
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {['Distribution', 'Growers', 'ESG / Carbon', 'NGOs'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPartnerType(type)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${partnerType === type ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Organization</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="AgriCorp Int." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Inquiry Focus ({partnerType})</label>
                <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Tell us about your soil health objectives..."></textarea>
              </div>
              <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-5 flex justify-center items-center gap-2 transition-all group">
                Submit Strategy Inquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
