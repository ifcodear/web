import React from 'react';
import { Page } from '../../types';

const PortfolioECommerce: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="bg-[#fcfaf8] text-[#2c2c2c] min-h-screen font-serif relative">
      <button onClick={() => setCurrentPage(Page.Portfolio)} className="absolute top-6 left-6 z-50 bg-black text-white px-4 py-2 text-xs uppercase tracking-widest font-sans">← Volver al Portfolio</button>
      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="font-bold text-xl tracking-[0.2em] uppercase">Maison</div>
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-sans">
          <span>Collections</span>
          <span>Editorials</span>
          <span>Boutiques</span>
        </nav>
      </header>
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img src="/port_ecom_hero.png" alt="Fashion" className="w-full h-full object-cover object-[70%_30%]" />
        </div>
        <div className="relative z-10 p-12 md:p-24 max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-sans text-[#2c2c2c]">S/S Collection 2026</p>
          <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-[#2c2c2c]">Elevated<br/>Elegance</h1>
          <button className="border-b border-[#2c2c2c] pb-1 text-sm uppercase tracking-widest font-sans hover:text-gray-500 hover:border-gray-500 transition-colors">
            Discover the Campaign
          </button>
        </div>
      </section>
    </div>
  );
};
export default PortfolioECommerce;
