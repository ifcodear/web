import React from 'react';
import { Page } from '../../types';

const PortfolioRealEstate: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen font-sans">
      <button onClick={() => setCurrentPage(Page.Portfolio)} className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur shadow-sm px-4 py-2 text-xs uppercase tracking-widest font-bold">← Portfolio</button>
      <section className="h-screen flex flex-col md:flex-row">
        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center relative">
          <div className="absolute top-12 left-12 md:top-24 md:left-24">
            <div className="text-2xl font-black tracking-tighter">LUMIÈRE</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Estates</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mt-20 mb-8">
            Modern<br/>Living.
          </h1>
          <p className="text-gray-500 max-w-md mb-12 text-lg">
            Curated architectural masterpieces in the world's most exclusive locations. Discover homes that redefine luxury.
          </p>
          <button className="bg-[#1a1a1a] text-white self-start px-8 py-4 uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
            View Properties
          </button>
        </div>
        <div className="flex-1 relative">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Luxury Home" className="w-full h-full object-cover" />
          <div className="absolute bottom-12 right-12 bg-white p-6 shadow-2xl max-w-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Featured Listing</div>
            <div className="text-2xl font-light mb-1">The Glass House</div>
            <div className="text-xl font-bold mb-4">$14,500,000</div>
            <div className="flex gap-4 text-sm text-gray-500 border-t pt-4">
              <span>5 Beds</span>
              <span>6 Baths</span>
              <span>8,200 sqft</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PortfolioRealEstate;
