
import React from 'react';
import { Target, ShieldCheck, Heart, Users, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    { icon: Zap, label: 'Innovation', desc: 'Advancing Bio-Solutions through practical research.' },
    { icon: Target, label: 'Regeneration', desc: 'Restoring soil ecosystems for climate resilience.' },
    { icon: ShieldCheck, label: 'Integrity', desc: 'Honest, transparent science farmers can trust.' },
    { icon: Heart, label: 'Empowerment', desc: 'Empowering farmers with affordable, regenerative bio solutions.' },
    { icon: Users, label: 'Collaboration', desc: 'Growing impact with global farming communities.' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-24">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="relative group rounded-sm overflow-hidden min-h-[400px]">      
              
              {/* Green Text Block: Sits on top of the white mask */}
               <div className="absolute top-14 left-0 bg-emerald-800 text-white p-10 max-w-xs hidden md:block shadow-3xl">
                <span className="text-3xl font-serif font-bold italic mb-2 block leading-tight">"The soil is ready to awaken."</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4">The Foundation</h4>
            <h2 className="text-4xl md:text-4xl font-serif text-stone-900 mb-8 leading-tight">Ancient Wisdom & Science.</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              EcoFertile was born from an unshakable belief: healthy soil is not a resource to be mined; it is a living partner to be revived.
            </p>
            <p className="text-stone-600 mb-10 leading-relaxed">
              We stand at the crossing of timeless truth and cutting-edge biotechnology. Our bio-solutions don't just feed plants, they create an ecosystem for them to thrive.
            </p>
            
            <div className="grid grid-cols-2 gap-12 border-t border-stone-100 pt-8">
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-emerald-800">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Chemical Free</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-emerald-800">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">pH Stabilization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 p-12 md:p-20 rounded-sm reveal mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-stone-900 italic">Our Guiding Principles</h3>
            <div className="w-16 h-0.5 bg-emerald-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {values.map((v) => (
              <div key={v.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-emerald-700 mb-6 shadow-sm border border-stone-200 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                  <v.icon size={28} />
                </div>
                <h5 className="font-bold text-stone-900 mb-3 uppercase tracking-wider text-xs">{v.label}</h5>
                <p className="text-stone-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regenerative Mandate Section - Visual Flow */}
        <div className="bg-emerald-950 text-white rounded-sm overflow-hidden reveal relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">

            {/* 1. Header */}
            <div className="text-center mb-20">
              <h4 className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">The Manifesto</h4>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                This is not just a company.<br />
                <span className="italic text-emerald-200">It is a movement.</span>
              </h2>
            </div>

            {/* 2. The Movement Pillars (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-b border-emerald-900 pb-20">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-lg font-light text-emerald-100/90 leading-relaxed">
                  A movement of <strong className="text-white font-serif">farmers</strong> who refuse to accept declining yields as fate.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-lg font-light text-emerald-100/90 leading-relaxed">
                  A movement of <strong className="text-white font-serif">agronomists</strong> who believe Biological Solutions can out-perform chemicals.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-lg font-light text-emerald-100/90 leading-relaxed">
                  A movement of <strong className="text-white font-serif">dreamers</strong> who see barren land and envision green abundance.
                </p>
              </div>
            </div>

            {/* 3. The Core Belief (Centered) */}
            <div className="max-w-3xl mx-auto text-center mb-24">
              <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                "A movement rooted in the understanding that when we heal the soil, we heal ourselves, our families, our food, and our future."
              </p>
            </div>

            {/* 4. The Promise (Stepped Layout) */}
            <div className="space-y-12 mb-24 relative">
              {/* Vertical Line for connection on desktop */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-emerald-800"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative z-10">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center text-emerald-400 font-serif text-xl flex-shrink-0 shadow-xl">1</div>
                <p className="text-xl text-emerald-100/80 font-light">Every drop of our bio-inputs carries that promise.</p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative z-10">
                 <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center text-emerald-400 font-serif text-xl flex-shrink-0 shadow-xl">2</div>
                <p className="text-xl text-emerald-100/80 font-light">Every field we help revive becomes proof.</p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative z-10">
                 <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center text-emerald-400 font-serif text-xl flex-shrink-0 shadow-xl">3</div>
                <p className="text-xl text-emerald-100/80 font-light">Every farmer who experiences stronger roots, greener leaves, heavier fruit, and lighter costs becomes part of the story.</p>
              </div>
            </div>

            {/* 5. The Invitation (Card) */}
            <div className="bg-emerald-900/30 p-10 md:p-16 rounded-sm border-l-4 border-emerald-500 mb-24 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">We invite you to join us.</h3>
              <p className="text-lg text-emerald-100 leading-relaxed mb-0">
                Whether you farm one acre or thousands, whether your soil is tired or nearly lost, whether you are just beginning or have farmed for decades—Ecofertile is here for you.
              </p>
            </div>

            {/* 6. The Collective Action (Centered Stack) */}
            <div className="grid grid-cols-1 gap-12 text-center mb-24">
              <div className="pb-8 border-b border-emerald-900/50">
                <p className="text-2xl md:text-3xl font-serif text-emerald-200">Together, we turn waste into wealth.</p>
              </div>
              <div className="pb-8 border-b border-emerald-900/50">
                <p className="text-2xl md:text-3xl font-serif text-emerald-200">Together, we silence the burn of crop residue and let the earth sing again.</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif text-emerald-200 leading-relaxed">
                  Together, we prove that the oldest wisdom and the newest science can meet to create something extraordinary: a world where agriculture regenerates the planet instead of depleting it.
                </p>
              </div>
            </div>

            {/* 7. The Call & Welcome (Final Block) */}
            <div className="text-center pt-16 border-t border-emerald-800">
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-sm font-bold uppercase tracking-widest text-emerald-500 mb-12">
                <span>The soil is ready to awaken.</span>
                <span className="hidden md:inline text-emerald-800">•</span>
                <span>The Earth is waiting.</span>
                <span className="hidden md:inline text-emerald-800">•</span>
                <span>The future is calling.</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif text-white mb-16">Will you answer?</h2>

              <div className="inline-block p-8 border border-emerald-800 bg-emerald-900/20 rounded-sm">
                <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-4 text-lg">Welcome to Ecofertile.</h4>
                <p className="text-emerald-400 font-serif italic text-2xl">Let’s regenerate the earth—one living field at a time.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
