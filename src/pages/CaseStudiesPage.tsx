
import React, { useState, useMemo } from 'react';
import { CASE_STUDIES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';
import { Filter, ChevronDown, ChevronUp, FileText, TrendingUp, Droplet, Leaf, LayoutGrid, Shield, Activity, Sun } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [filterCrop, setFilterCrop] = useState('All Crops');
  const [filterRegion, setFilterRegion] = useState('All Regions');
  const [sortBy, setSortBy] = useState('yield');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const crops = useMemo(() => ['All Crops', ...new Set(CASE_STUDIES.map(s => s.crop))], []);
  const regions = useMemo(() => ['All Regions', ...new Set(CASE_STUDIES.map(s => s.region))], []);

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES
      .filter(s => (filterCrop === 'All Crops' || s.crop === filterCrop))
      .filter(s => (filterRegion === 'All Regions' || s.region === filterRegion))
      .sort((a, b) => {
        if (sortBy === 'yield') return b.yieldIncrease - a.yieldIncrease;
        if (sortBy === 'input') return b.inputReduction - a.inputReduction;
        return b.profitImprovement - a.profitImprovement;
      });
  }, [filterCrop, filterRegion, sortBy]);

  // Mock detailed data for expanded view
  const getExtendedData = (id: string) => [
    { month: 'Month 1', organicMatter: 1.2, moisture: 15 },
    { month: 'Month 2', organicMatter: 1.4, moisture: 18 },
    { month: 'Month 3', organicMatter: 1.8, moisture: 22 },
    { month: 'Month 4', organicMatter: 2.1, moisture: 25 },
    { month: 'Month 5', organicMatter: 2.5, moisture: 28 },
    { month: 'Month 6', organicMatter: 2.8, moisture: 30 },
  ];

  // Specific observations for each case study
  const STUDY_DETAILS: Record<string, {
    observations: { icon: React.ElementType, title: string, desc: string, colorClass: string }[];
    note: string;
  }> = {
    'cs-1': { // Sugarcane
      observations: [
        { icon: LayoutGrid, title: 'Soil Compaction', desc: 'Penetrometer readings improved by 35%, indicating reduced hardpan and better aeration.', colorClass: 'bg-amber-100 text-amber-800' },
        { icon: Leaf, title: 'Ratoon Vigor', desc: 'White root proliferation observed in top 30cm, ensuring higher survival rate for ratoon crops.', colorClass: 'bg-emerald-100 text-emerald-800' }
      ],
      note: '"The rapid breakdown of trash mulch into organic carbon was the most significant visual change, occurring twice as fast as control."'
    },
    'cs-2': { // Maize
      observations: [
        { icon: Droplet, title: 'Drought Resilience', desc: 'Crop sustained turgidity during critical tasseling stage despite a 14-day dry spell.', colorClass: 'bg-blue-100 text-blue-800' },
        { icon: TrendingUp, title: 'Cob Filling', desc: '15% reduction in tip void with uniform grain size distribution across the field.', colorClass: 'bg-emerald-100 text-emerald-800' }
      ],
      note: '"Stalk thickness increased significantly, reducing lodging incidents during late-season winds by over 60%."'
    },
    'cs-3': { // Leafy Veg
      observations: [
        { icon: Shield, title: 'Pest Resistance', desc: 'Thicker cell walls reduced sucking pest damage by 40%, lowering pesticide needs.', colorClass: 'bg-rose-100 text-rose-800' },
        { icon: TrendingUp, title: 'Harvest Cycle', desc: 'Market-ready maturity reached 4 days earlier than standard practice.', colorClass: 'bg-emerald-100 text-emerald-800' }
      ],
      note: '"Nitrate residues in leaf tissue were significantly lower, ensuring compliance with strict export safety standards."'
    },
    'cs-4': { // Tomato
      observations: [
        { icon: Leaf, title: 'Nutrient Mobility', desc: 'Blossom end rot incidence reduced to near zero due to unlocked soil Calcium.', colorClass: 'bg-emerald-100 text-emerald-800' },
        { icon: TrendingUp, title: 'Grade A Output', desc: '90% of harvest graded Class A versus 65% in the control group.', colorClass: 'bg-amber-100 text-amber-800' }
      ],
      note: '"Brix levels consistently measured 1.5 points higher in treated plots, fetching a premium price in the market."'
    },
    'cs-5': { // Coffee
      observations: [
        { icon: Droplet, title: 'Berry Retention', desc: 'Premature berry drop reduced by 60% during the monsoon phase.', colorClass: 'bg-blue-100 text-blue-800' },
        { icon: Shield, title: 'Rust Defense', desc: 'New flush leaves showed higher systemic resistance to leaf rust.', colorClass: 'bg-emerald-100 text-emerald-800' }
      ],
      note: '"Feeder root density doubled within 6 months, critical for nutrient uptake in these acidic hill soils."'
    },
    'cs-6': { // Carrot
      observations: [
        { icon: LayoutGrid, title: 'Root Structure', desc: 'Reduced root cracking, forking, and deformities leading to uniform shape.', colorClass: 'bg-amber-100 text-amber-800' },
        { icon: TrendingUp, title: 'Market Grade', desc: 'Significant increase in marketable A-grade carrots with better color development.', colorClass: 'bg-emerald-100 text-emerald-800' }
      ],
      note: '"Observed strong and uniform plant growth with healthy, dark green tops and improved soil looseness for easier harvesting."'
    },
    'cs-7': { // Banana
      observations: [
        { icon: Activity, title: 'Synchronized Flowering', desc: 'Uniform flowering and bunch emergence across the field, optimizing harvest labor.', colorClass: 'bg-blue-100 text-blue-800' },
        { icon: Shield, title: 'Stress Tolerance', desc: 'Reduced physiological disorders such as finger choking and uneven fruit size.', colorClass: 'bg-emerald-100 text-emerald-800' }
      ],
      note: '"Improved soil moisture retention reduced moisture stress during dry periods, resulting in higher fruit set and well-filled hands."'
    },
    'cs-8': { // Capsicum
      observations: [
        { icon: Leaf, title: 'Canopy Density', desc: 'Excellent plant vigor with thick stems and dense, healthy green canopy.', colorClass: 'bg-emerald-100 text-emerald-800' },
        { icon: Shield, title: 'Disease Reduction', desc: 'Significant reduction in blossom-end rot and fruit shriveling compared to control.', colorClass: 'bg-rose-100 text-rose-800' }
      ],
      note: '"Higher fruit retention was observed especially during the critical reproductive phase (90-100 days), leading to peak yield advantages."'
    }
  };

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16 reveal">
        <div className="max-w-4xl">
          <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-6">Evidence of Performance</h4>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-10 leading-[1.1]">Real-World Results <br /><span className="italic text-emerald-600">Across Global Biomes.</span></h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-light">
            Our multi-year field trials demonstrate consistent productivity gains. Sort through our validated data to see EcoFertile in action.
          </p>
        </div>
      </section>

      {/* Interactive Controls */}
      <section className="max-w-7xl mx-auto px-6 mb-12 reveal">
        <div className="bg-white border border-stone-200 p-6 shadow-sm flex flex-col lg:flex-row gap-8 items-center justify-between rounded-sm">
          <div className="flex flex-wrap gap-6 items-center w-full lg:w-auto">
            <div className="flex items-center gap-3 text-stone-400">
              <Filter size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Filters:</span>
            </div>
            <select 
              value={filterCrop} 
              onChange={(e) => setFilterCrop(e.target.value)}
              className="bg-stone-50 border border-stone-200 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-600 focus:outline-none focus:border-emerald-500 rounded-sm"
            >
              {crops.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select 
              value={filterRegion} 
              onChange={(e) => setFilterRegion(e.target.value)}
              className="bg-stone-50 border border-stone-200 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-600 focus:outline-none focus:border-emerald-500 rounded-sm"
            >
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0">
            <div className="flex items-center gap-3 text-stone-400">
              <LayoutGrid size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Sort By Impact:</span>
            </div>
            <div className="flex bg-stone-100 p-1 rounded-sm">
              <button 
                onClick={() => setSortBy('yield')}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${sortBy === 'yield' ? 'bg-white shadow-sm text-emerald-700' : 'text-stone-500 hover:text-stone-800'}`}
              >
                Yield
              </button>
              <button 
                onClick={() => setSortBy('input')}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${sortBy === 'input' ? 'bg-white shadow-sm text-emerald-700' : 'text-stone-500 hover:text-stone-800'}`}
              >
                Input Reduc.
              </button>
              <button 
                onClick={() => setSortBy('profit')}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${sortBy === 'profit' ? 'bg-white shadow-sm text-emerald-700' : 'text-stone-500 hover:text-stone-800'}`}
              >
                Profit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Feed */}
      <section className="max-w-7xl mx-auto px-6 mb-24 reveal-group">
        <div className="grid grid-cols-1 gap-8">
          {filteredStudies.map((study, index) => {
             const details = STUDY_DETAILS[study.id] || STUDY_DETAILS['cs-1'];
             
             return (
              <div 
                key={study.id} 
                className={`bg-white border border-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl ${expandedId === study.id ? 'ring-2 ring-emerald-500 ring-offset-4' : ''}`}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">Validated Trial</span>
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{study.region}</span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-stone-900">{study.crop} Restoration</h3>
                      <p className="text-stone-500 mt-2 font-light">{study.problem}</p>
                    </div>
                    <div className="flex gap-12">
                      <div className="text-center">
                        <span className="block text-4xl font-serif font-bold text-emerald-600">+{study.yieldIncrease}%</span>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Yield Increase</span>
                      </div>
                      <div className="text-center">
                        <span className="block text-4xl font-serif font-bold text-emerald-600">-{study.inputReduction}%</span>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Chemical Use</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                      className={`flex-grow md:flex-none px-8 py-4 font-bold uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 transition-all ${expandedId === study.id ? 'bg-emerald-950 text-white' : 'bg-stone-50 text-stone-900 border border-stone-200 hover:bg-stone-100'}`}
                    >
                      <FileText size={16} />
                      {expandedId === study.id ? 'Close Full Report' : 'View Full Report'}
                      {expandedId === study.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <a href="#contact" className="px-8 py-4 font-bold uppercase text-[11px] tracking-widest border border-stone-200 text-stone-600 flex items-center justify-center gap-3 hover:text-emerald-700 hover:border-emerald-700 transition-all">
                      Request Lab Data Room
                    </a>
                  </div>
                </div>

                {/* Expanded Detailed View */}
                {expandedId === study.id && (
                  <div className="border-t border-stone-100 bg-stone-50/50 p-8 md:p-12 animate-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                      <div>
                        <h4 className="text-xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-4">
                          <TrendingUp className="text-emerald-600" />
                          Soil Health Recovery Timeline
                        </h4>
                        <div className="h-[300px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={getExtendedData(study.id)}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                              <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                              <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                              />
                              <Legend verticalAlign="top" height={36} iconType="circle" />
                              <Line type="monotone" dataKey="organicMatter" stroke="#059669" strokeWidth={3} dot={{ r: 4, fill: '#059669' }} name="Organic Matter %" />
                              <Line type="monotone" dataKey="moisture" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6' }} name="Moisture Retention %" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div>
                          <h4 className="text-xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-4">
                              <Leaf className="text-emerald-600" />
                              Field Observations
                          </h4>
                          <ul className="space-y-6">
                            {details.observations.map((obs, idx) => (
                              <li key={idx} className="flex gap-4">
                                  <div className={`${obs.colorClass} p-2 rounded-full h-fit mt-1`}>
                                    {React.createElement(obs.icon, { size: 16 })}
                                  </div>
                                  <div>
                                      <h5 className="font-bold text-stone-900 text-sm">{obs.title}</h5>
                                      <p className="text-stone-500 text-xs mt-1">{obs.desc}</p>
                                  </div>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-10 p-6 bg-white border border-stone-200 rounded-sm shadow-sm">
                              <p className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">Agronomist Note</p>
                              <p className="text-stone-600 italic text-sm">{details.note}</p>
                          </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
             );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
