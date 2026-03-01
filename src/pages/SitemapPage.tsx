
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sections = [
    {
      title: 'Main',
      links: [
        { label: 'Home', url: '#home' },
        { label: 'About Us', url: '#about' },
        { label: 'Contact', url: '#contact' },
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Product Catalog', url: '#products' },
        { label: 'Dr. Soil', url: '#product-dr-soil' },
        { label: 'Dr. Leaf', url: '#product-dr-leaf' },
        { label: 'Dr. Seed', url: '#product-dr-seed' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', url: '#case-studies' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '#privacy-policy' },
        { label: 'Cookie Settings', url: '#cookie-settings' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-16">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {sections.map((section) => (
                <div key={section.title} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100">
                    <h2 className="text-emerald-800 font-bold uppercase tracking-widest text-xs mb-6 border-b border-stone-100 pb-4">{section.title}</h2>
                    <ul className="space-y-4">
                        {section.links.map((link) => (
                            <li key={link.url}>
                                <a href={link.url} className="text-stone-600 hover:text-emerald-700 transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="text-stone-300 group-hover:text-emerald-500" />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
