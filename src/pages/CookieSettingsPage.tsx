
import React from 'react';

const CookieSettingsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Cookie Policy & Settings</h1>
        
        <div className="space-y-8">
            <p className="text-lg text-stone-700">
                EcoFertile uses cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            </p>

            <div className="border border-stone-200 p-8 rounded-sm bg-stone-50">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-stone-900">Strictly Necessary Cookies</h3>
                        <p className="text-sm text-stone-500 mt-1">Required for the website to function (e.g., page navigation, secure areas).</p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Always Active</span>
                    </div>
                </div>
            </div>

            <div className="border border-stone-200 p-8 rounded-sm">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-stone-900">Analytics Cookies</h3>
                        <p className="text-sm text-stone-500 mt-1">Help us understand how visitors interact with the website.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                </div>
            </div>

            <div className="border border-stone-200 p-8 rounded-sm">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-stone-900">Marketing Cookies</h3>
                        <p className="text-sm text-stone-500 mt-1">Used to track visitors across websites to display relevant ads.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                </div>
            </div>

            <button className="bg-emerald-900 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition-colors mt-8">
                Save Preferences
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsPage;
