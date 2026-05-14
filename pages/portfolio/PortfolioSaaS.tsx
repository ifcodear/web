import React from 'react';
import { Page } from '../../types';

const PortfolioSaaS: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="bg-[#0b0c10] text-white min-h-screen font-sans relative overflow-hidden">
      <button onClick={() => setCurrentPage(Page.Portfolio)} className="absolute top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-widest rounded-lg">← Portfolio</button>
      <header className="p-6 flex justify-between items-center relative z-20">
        <div className="font-black text-xl flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#00f2fe] to-[#4facfe]" /> DataFlow
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
          <span className="text-white">Product</span>
          <span>Solutions</span>
          <span>Pricing</span>
        </nav>
        <button className="bg-white text-black px-5 py-2 rounded-lg text-sm font-bold">Start Free</button>
      </header>
      <section className="relative pt-20 pb-32 flex flex-col items-center text-center px-6 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#4facfe]/20 blur-[120px] rounded-full pointer-events-none" />
        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-[#4facfe] mb-8">v2.0 is live now</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl">
          Understand your data.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">Predict the future.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          The only analytics platform that combines real-time event streaming with AI-powered forecasting.
        </p>
        <div className="w-full max-w-5xl aspect-video rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-2xl relative">
          <img src="/port_saas_hero.png" alt="Dashboard UI" className="w-full h-full object-cover rounded-xl" />
        </div>
      </section>
    </div>
  );
};
export default PortfolioSaaS;
