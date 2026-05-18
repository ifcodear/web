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
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfaf8] via-[#fcfaf8]/90 to-transparent w-full md:w-2/3 lg:w-1/2"></div>
        </div>
        <div className="relative z-10 p-12 md:p-24 max-w-2xl mt-16 md:mt-0">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-sans text-[#2c2c2c]">S/S Collection 2026</p>
          <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-[#2c2c2c]">Elevated<br/>Elegance</h1>
          <button className="border-b border-[#2c2c2c] pb-1 text-sm uppercase tracking-widest font-sans hover:text-gray-500 hover:border-gray-500 transition-colors">
            Discover the Campaign
          </button>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-light">New Arrivals</h2>
          <button className="hidden md:block border-b border-[#2c2c2c] pb-1 text-xs uppercase tracking-widest font-sans hover:text-gray-500 hover:border-gray-500 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {[
            { name: 'Silk Draped Gown', price: '$1,250', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { name: 'Leather Structured Tote', price: '$890', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { name: 'Sculptural Heel Sandal', price: '$620', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { name: 'Cashmere Overcoat', price: '$2,100', img: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
          ].map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f0eee9] mb-6">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest font-sans opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 w-[80%] hover:bg-black hover:text-white">
                  Add to Bag
                </button>
              </div>
              <div className="text-center font-sans">
                <h3 className="text-sm tracking-widest uppercase mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Mock */}
      <footer className="border-t border-[#e5e5e5] mt-20 py-20 px-6 md:px-12 text-center font-sans">
        <div className="font-serif font-bold text-2xl tracking-[0.2em] uppercase mb-12">Maison</div>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-xs tracking-widest uppercase text-gray-500 mb-12">
          <a href="#" className="hover:text-black transition-colors">Shipping</a>
          <a href="#" className="hover:text-black transition-colors">Returns</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
        </div>
        <p className="text-[10px] text-gray-400 tracking-widest uppercase">© 2026 Maison. Crafted with IfCodear.</p>
      </footer>
    </div>
  );
};
export default PortfolioECommerce;
