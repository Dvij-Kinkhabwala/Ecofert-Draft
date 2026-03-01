
import React from 'react';
import { Globe, Database, Sprout, Droplets, Leaf } from 'lucide-react';
import { PILLARS } from '../constants';

// Custom Earthworm SVG from user request
const EarthwormIcon = ({ size = 24, ...props }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 481.8 481.8" 
    fill="currentColor"
    {...props}
  >
    <path d="M440.597,152.893c-54.493,0-81.934,38.523-100.094,64.061c-0.006,0.008-0.012,0.016-0.017,0.025
	c-0.01,0.014-0.021,0.029-0.031,0.044c-17.24,24.245-23.097,29.479-32.985,29.479c-9.89,0-15.748-5.234-32.989-29.48
	c-0.007-0.009-0.014-0.019-0.02-0.029c-0.007-0.01-0.014-0.02-0.021-0.03c-18.16-25.537-45.603-64.07-100.104-64.07
	c-54.542,0-81.985,38.592-100.145,64.129c-17.242,24.245-23.1,29.479-32.989,29.479C18.483,246.501,0,264.985,0,287.704
	c0,22.72,18.483,41.203,41.203,41.203c54.541,0,81.984-38.591,100.145-64.129c17.241-24.245,23.099-29.479,32.988-29.479
	c9.89,0,15.748,5.234,32.989,29.48c18.16,25.537,45.603,64.128,100.145,64.128c54.541,0,81.983-38.592,100.143-64.129
	c17.24-24.245,23.097-29.479,32.985-29.479c22.719,0,41.203-18.483,41.203-41.202C481.8,171.376,463.316,152.893,440.597,152.893z
	 M174.336,215.298c-20.699,0-31.975,13.646-47.969,36.041l-18.579-15.388c-4.254-3.523-10.558-2.933-14.08,1.322
	c-3.523,4.253-2.931,10.558,1.322,14.08l19.529,16.176c-16.173,20.97-37.415,41.378-73.357,41.378
	c-11.691,0-21.203-9.512-21.203-21.203c0-11.69,9.512-21.202,21.203-21.202c21.264,0,32.582-14.397,49.288-37.89
	c17.653-24.824,39.623-55.719,83.846-55.719c39.974,0,61.764,25.242,78.621,48.427l-31.877,28.309
	C205.726,228.254,194.503,215.298,174.336,215.298z M307.47,308.907c-36.87,0-58.267-21.475-74.595-43.003l31.833-28.27
	c13.425,18.098,24.377,28.867,42.762,28.867c18.38,0,29.33-10.764,42.75-28.854l31.796,28.318
	C365.694,287.472,344.304,308.907,307.47,308.907z M440.597,215.298c-20.184,0-31.409,12.98-46.785,34.391l-31.841-28.359
	c16.857-23.188,38.647-48.438,78.626-48.438c11.691,0,21.203,9.512,21.203,21.203C461.8,205.787,452.288,215.298,440.597,215.298z" />
  </svg>
);

const iconMap: Record<string, any> = {
  Globe,
  Database,
  Sprout,
  Droplets,
  Leaf,
  Earthworm: EarthwormIcon
};

const PillarGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4">Core Competencies</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Our Strategic Pillars</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Our Products are built to solve global agricultural crises through five specialized vectors of soil regeneration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200 border border-stone-200 overflow-hidden rounded-lg shadow-2xl reveal-group">
          {PILLARS.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon];
            return (
              <div 
                key={pillar.id} 
                className="bg-white p-8 group hover:bg-emerald-900 transition-all duration-500 cursor-default flex flex-col h-full"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-8 text-emerald-600 group-hover:text-emerald-400 transition-colors">
                  <IconComponent size={40} strokeWidth={1.2} />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-white mb-4 leading-tight transition-colors min-h-[3.5rem]">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 group-hover:text-stone-300 text-sm mb-8 leading-relaxed transition-colors min-h-[5rem]">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-stone-100 group-hover:border-emerald-800 transition-colors mt-auto">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 group-hover:text-emerald-300">
                    {pillar.metric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarGrid;
