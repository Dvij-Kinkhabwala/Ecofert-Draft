
import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <section className="max-w-7xl mx-auto px-6 mb-16 reveal">
        <div className="max-w-3xl">
          <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4">Partner With Us</h4>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">Scale Your Impact.</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            We are actively expanding our global distribution network and establishing large-scale reclamation projects. Select your path below to begin the dialogue.
          </p>
        </div>
      </section>

      <ContactSection />
      
      <section className="py-24 bg-white border-t border-stone-100 reveal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h5 className="font-bold text-emerald-900 mb-4 uppercase tracking-widest text-xs">For Investors</h5>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">Seeking information regarding our Series A expansion and global IP portfolio?</p>
            <a href="mailto:invest@ecofertile.com" className="text-emerald-600 font-bold text-sm underline decoration-emerald-200 hover:decoration-emerald-600 transition-all">invest@ecofertile.com</a>
          </div>
          <div>
            <h5 className="font-bold text-emerald-900 mb-4 uppercase tracking-widest text-xs">Technical Support</h5>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">Existing partners requiring application protocols or lab reports?</p>
            <a href="mailto:support@ecofertile.com" className="text-emerald-600 font-bold text-sm underline decoration-emerald-200 hover:decoration-emerald-600 transition-all">support@ecofertile.com</a>
          </div>
          <div>
            <h5 className="font-bold text-emerald-900 mb-4 uppercase tracking-widest text-xs">Media & ESG</h5>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">Inquiries regarding our carbon sequestration data or regenerative impact reporting?</p>
            <a href="mailto:impact@ecofertile.com" className="text-emerald-600 font-bold text-sm underline decoration-emerald-200 hover:decoration-emerald-600 transition-all">impact@ecofertile.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
