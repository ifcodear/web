import React from 'react';
import { Page } from '../types';

interface SitemapPageProps {
  setCurrentPage: (page: Page) => void;
}

const SitemapPage: React.FC<SitemapPageProps> = ({ setCurrentPage }) => {
  
  const siteStructure = [
    {
      category: "Páginas Principales",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      links: [
        { label: "Inicio (Home)", value: Page.Home },
        { label: "Servicios Core", value: Page.Services },
        { label: "Nuestro Proceso", value: Page.Process },
      ]
    },
    {
      category: "Planificación y Ventas",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      links: [
        { label: "Roadmap del Proyecto", value: Page.Roadmap },
        { label: "Armar Proyecto (Wizard)", value: Page.RoadmapBuilder },
        { label: "Modelos y Presupuestos", value: Page.Pricing },
        { label: "Agendar Consultoría", value: Page.Checkout },
      ]
    },
    {
      category: "Especializaciones",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      links: [
        { label: "Desarrollo Full-Stack", value: Page.FullStack },
        { label: "Desarrollo Mobile (Apps)", value: Page.MobileApps },
        { label: "Ingeniería de Software", value: Page.Engineering },
        { label: "Consultoría Estratégica", value: Page.Consulting },
      ]
    },
    {
      category: "Portafolio y Casos de Éxito",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      links: [
        { label: "Directorio de Portafolio", value: Page.Portfolio },
        { label: "Demo: E-commerce Premium", value: Page.PortfolioECommerce },
        { label: "Demo: SaaS Dashboard", value: Page.PortfolioSaaS },
        { label: "Demo: Real Estate Luxury", value: Page.PortfolioRealEstate },
        { label: "Demo: Agencia Creativa", value: Page.PortfolioCreative },
      ]
    }
  ];

  const navigateToContact = () => {
    setCurrentPage(Page.Home);
    setTimeout(() => {
      window.location.hash = 'home';
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background-dark text-white pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
            Índice del Sitio
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            Mapa del <span className="text-primary">Sitio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora la estructura completa de ifcodear. Accede rápidamente a cualquier recurso, servicio o demostración de nuestro portafolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteStructure.map((group, index) => (
            <div key={index} className="bg-surface-dark border border-white/10 p-8 rounded-3xl hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={group.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white">{group.category}</h3>
              </div>
              <ul className="space-y-4">
                {group.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <button
                      onClick={() => setCurrentPage(link.value)}
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-full text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors shrink-0" />
                      <span className="font-medium text-lg">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal / Contacto Directo */}
          <div className="bg-surface-dark border border-white/10 p-8 rounded-3xl hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white">Legal y Contacto</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <button onClick={navigateToContact} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-full text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors shrink-0" />
                  <span className="font-medium text-lg">Formulario de Contacto</span>
                </button>
              </li>
              <li>
                <button disabled className="group flex items-center gap-3 text-gray-600 cursor-not-allowed w-full text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
                  <span className="font-medium text-lg">Aviso Legal (Próximamente)</span>
                </button>
              </li>
              <li>
                <button disabled className="group flex items-center gap-3 text-gray-600 cursor-not-allowed w-full text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
                  <span className="font-medium text-lg">Privacidad (Próximamente)</span>
                </button>
              </li>
              <li>
                <button disabled className="group flex items-center gap-3 text-gray-600 cursor-not-allowed w-full text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
                  <span className="font-medium text-lg">Cookies (Próximamente)</span>
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
