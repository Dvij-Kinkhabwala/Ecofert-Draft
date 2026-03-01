
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Privacy Policy</h1>
        <p className="text-stone-500 mb-12 text-sm">Last Updated: October 2025</p>
        
        <div className="prose prose-stone max-w-none">
          <p className="text-lg text-stone-700 mb-8">
            EcoFertile is committed to protecting the privacy and security of your data. This Privacy Policy describes how we collect, use, and share information when you use our platform and services.
          </p>

          <h3 className="text-2xl font-serif text-stone-900 mb-4 mt-8">1. Information Collection</h3>
          <p className="text-stone-600 mb-4">
            We collect information necessary to provide our regenerative agriculture services, including:
          </p>
          <ul className="list-disc pl-6 text-stone-600 mb-6 space-y-2">
            <li>Farm metrics and soil data uploaded to our calculator tools.</li>
            <li>Contact information provided via inquiry forms.</li>
            <li>Usage data to improve our digital platform experience.</li>
          </ul>

          <h3 className="text-2xl font-serif text-stone-900 mb-4 mt-8">2. Data Usage</h3>
          <p className="text-stone-600 mb-6">
            Your data is used solely for:
            <br/>- Generating agronomic recommendations.
            <br/>- Processing orders and partnership inquiries.
            <br/>- Improving our microbial product efficacy through aggregated, anonymized analysis.
          </p>

          <h3 className="text-2xl font-serif text-stone-900 mb-4 mt-8">3. Data Protection</h3>
          <p className="text-stone-600 mb-6">
            We implement enterprise-grade security measures to protect your agricultural data. We do not sell farm-specific data to third parties.
          </p>
          
          <h3 className="text-2xl font-serif text-stone-900 mb-4 mt-8">4. Contact Us</h3>
          <p className="text-stone-600 mb-6">
            For privacy-related inquiries, please contact legal@ecofertile.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
