
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import CheckoutPage from './pages/CheckoutPage';
import FullStackPage from './pages/FullStackPage';
import MobileAppsPage from './pages/MobileAppsPage';
import EngineeringPage from './pages/EngineeringPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioECommerce from './pages/portfolio/PortfolioECommerce';
import PortfolioFintech from './pages/portfolio/PortfolioFintech';
import PortfolioRealEstate from './pages/portfolio/PortfolioRealEstate';
import PortfolioCreative from './pages/portfolio/PortfolioCreative';
import PortfolioMotorcycles from './pages/portfolio/PortfolioMotorcycles';
import ConsultingPage from './pages/ConsultingPage';
import ITSupportPage from './pages/ITSupportPage';
import RoadmapPage from './pages/RoadmapPage';
import RoadmapBuilderPage from './pages/RoadmapBuilderPage';
import SitemapPage from './pages/SitemapPage';
import { Page, User } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [user, setUser] = useState<User | null>(null);

  // Hash-based routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.Home);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll to top on every page change (hash routing + direct setCurrentPage calls)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Track page views in Google Ads on page change
  useEffect(() => {
    const pagePath = window.location.hash || '#/';
    const pageTitle = `ifcodear | ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'AW-18175127365', {
        page_path: pagePath,
        page_title: pageTitle,
      });
      
      (window as any).gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
        send_to: 'AW-18175127365'
      });
    }
  }, [currentPage]);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Services:
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case Page.Process:
        return <ProcessPage />;
      case Page.Checkout:
        return <CheckoutPage />;
      case Page.FullStack:
        return <FullStackPage />;
      case Page.MobileApps:
        return <MobileAppsPage />;
      case Page.Engineering:
        return <EngineeringPage />;
      case Page.Pricing:
        return <PricingPage />;
      case Page.Portfolio:
        return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case Page.PortfolioECommerce:
        return <PortfolioECommerce setCurrentPage={setCurrentPage} />;
      case Page.PortfolioFintech:
        return <PortfolioFintech setCurrentPage={setCurrentPage} />;
      case Page.PortfolioRealEstate:
        return <PortfolioRealEstate setCurrentPage={setCurrentPage} />;
      case Page.PortfolioCreative:
        return <PortfolioCreative setCurrentPage={setCurrentPage} />;
      case Page.PortfolioMotorcycles:
        return <PortfolioMotorcycles setCurrentPage={setCurrentPage} />;
      case Page.Consulting:
        return <ConsultingPage />;
      case Page.ITSupport:
        return <ITSupportPage />;
      case Page.Roadmap:
        return <RoadmapPage setCurrentPage={setCurrentPage} />;
      case Page.RoadmapBuilder:
        return <RoadmapBuilderPage />;
      case Page.Sitemap:
        return <SitemapPage setCurrentPage={setCurrentPage} />;
      case Page.Home:
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-dark">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        user={user} 
        onLogin={handleLogin}
        onLogout={() => setUser(null)}
      />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
