
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookieSettingsPage from './pages/CookieSettingsPage';
import SitemapPage from './pages/SitemapPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle Hash Routing and Intercept Clicks
  useEffect(() => {
    // Function to handle route changes based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    // Global click interceptor for safe navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const page = href.replace('#', '');
          // Update hash only if it's different to avoid redundant history entries
          if (window.location.hash !== href) {
             window.location.hash = page; 
          } else {
             // If clicking same link (e.g. to scroll top or just refresh view), handle manually
             handleHashChange();
          }
        }
      }
    };

    // Attach listeners
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick);
    
    // Initial check
    handleHashChange();
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Animation Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-group');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const renderPage = () => {
    // Dynamic Product Route Handler
    if (currentPage.startsWith('product-')) {
      const productId = currentPage.replace('product-', '');
      return <ProductDetailPage productId={productId} />;
    }

    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'products': return <ProductsPage />;
      case 'case-studies': return <CaseStudiesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'privacy-policy': return <PrivacyPolicyPage />;
      case 'cookie-settings': return <CookieSettingsPage />;
      case 'sitemap': return <SitemapPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="relative selection:bg-emerald-200 selection:text-emerald-900 flex flex-col min-h-screen">
      <Header currentPage={currentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
