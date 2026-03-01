
import React from 'react';
import { LogoWordmark } from './Logos';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="mb-6">
               <LogoWordmark colorMode="white" className="h-5 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Leading the global transformation of agriculture through soil-first Bio-solution innovation. Regenerating the foundation of life, one field at a time.
            </p>
          </div>

          <div>
             <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigation</h6>
             <ul className="space-y-4 text-sm">
                <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-emerald-500 transition-colors">Products</a></li>
                <li><a href="#case-studies" className="hover:text-emerald-500 transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
             </ul>
          </div>

          <div>
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal & Transparency</h6>
            <ul className="space-y-4 text-sm">
              <li><a href="#privacy-policy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#cookie-settings" className="hover:text-emerald-500 transition-colors">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Lab Certifications</a></li>
              <li><a href="#sitemap" className="hover:text-emerald-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 EcoFertile Agrotech Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
