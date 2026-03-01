
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { LogoSymbol, LogoWordmark } from './Logos';

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'About Us', id: 'about' },
  ];

  const isLightMode = isScrolled || currentPage !== 'home';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isLightMode ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-4 group">
          <LogoSymbol 
            colorMode={isLightMode ? 'original' : 'white'} 
            className="h-10 w-auto group-hover:rotate-12 transition-transform duration-500 drop-shadow-lg" 
          />
          <LogoWordmark 
             colorMode={isLightMode ? 'original' : 'white'} 
             className="h-8 w-auto transition-colors duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-1 flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-600 after:transition-all ${currentPage === item.id ? 'text-emerald-600 after:w-full' : 'after:w-0 hover:after:w-full'} ${isLightMode ? 'text-stone-600' : 'text-stone-200'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-emerald-700 text-white px-8 py-3 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10"
          >
            Partnerships
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`${isLightMode ? 'text-emerald-950' : 'text-white'} md:hidden p-2`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-8 gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xl font-bold font-serif flex items-center gap-3 ${currentPage === item.id ? 'text-emerald-600' : 'text-stone-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-700 text-white p-5 text-center font-bold uppercase tracking-widest text-sm shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
