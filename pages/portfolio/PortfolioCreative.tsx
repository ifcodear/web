import React from 'react';
import { Page } from '../../types';

const PortfolioCreative: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="bg-[#e4ff00] text-black min-h-screen font-sans selection:bg-black selection:text-[#e4ff00] overflow-hidden">
      <button onClick={() => setCurrentPage(Page.Portfolio)} className="absolute top-6 left-6 z-50 border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_0_#000] transition-all">← Back</button>
      
      <div className="absolute inset-0 mix-blend-multiply opacity-50 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover blur-3xl scale-110" alt="" />
      </div>

      <header className="relative z-10 p-6 flex justify-between items-center border-b-2 border-black">
        <div className="text-3xl font-black tracking-tighter uppercase">Studio X</div>
        <div className="text-2xl font-black uppercase hover:italic cursor-pointer">Menu (04)</div>
      </header>
      
      <section className="relative z-10 min-h-[80vh] flex flex-col justify-center p-6 md:p-12">
        <h1 className="text-[12vw] leading-[0.8] font-black uppercase mix-blend-exclusion text-white">
          We break<br/>the rules.
        </h1>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <p className="text-xl md:text-3xl font-bold max-w-xl leading-tight">
            A digital playground for brands that want to stand out, not fit in.
          </p>
          <button className="bg-black text-[#e4ff00] text-2xl font-black uppercase px-8 py-6 rounded-full hover:scale-105 transition-transform rotate-[-5deg] hover:rotate-0">
            Let's Talk!
          </button>
        </div>
      </section>
      
      <div className="w-full border-y-2 border-black bg-white p-4 flex gap-8 whitespace-nowrap overflow-hidden relative z-10">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl font-black uppercase">🔥 Digital Rebels 🔥</span>
        ))}
      </div>
    </div>
  );
};
export default PortfolioCreative;
