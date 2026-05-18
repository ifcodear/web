import React from 'react';
import { Page } from '../types';

interface PortfolioPageProps {
  setCurrentPage: (page: Page) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ setCurrentPage }) => {
  const portfolios = [
    {
      title: 'E-commerce Premium',
      tag: 'Moda & Retail',
      img: '/port_ecom_hero.png',
      route: Page.PortfolioECommerce,
    },
    {
      title: 'Plataforma Fintech Global',
      tag: 'Finanzas & B2B',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      route: Page.PortfolioFintech,
    },
    {
      title: 'Real Estate Luxury',
      tag: 'Bienes Raíces',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      route: Page.PortfolioRealEstate,
    },
    {
      title: 'Agencia Creativa',
      tag: 'Diseño Disruptivo',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      route: Page.PortfolioCreative,
    },
    {
      title: 'Concesionario Premium',
      tag: 'Automotive',
      img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      route: Page.PortfolioMotorcycles,
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 min-h-screen">
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          Muestras de Diseño
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
          Explorá nuestro <span className="text-primary">Portafolio</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Una selección de landing pages construidas para demostrar nuestra capacidad de adaptarnos a múltiples industrias y estéticas visuales.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolios.map((p) => (
            <div 
              key={p.route}
              onClick={() => setCurrentPage(p.route)}
              className="group cursor-pointer bg-surface-dark rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(255,217,0,0.1)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-black uppercase text-white tracking-wider mb-3 inline-block">
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{p.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
