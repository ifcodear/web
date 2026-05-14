import React, { useEffect } from 'react';
import { Page } from '../../types';

interface PortfolioMotorcyclesProps {
  setCurrentPage: (page: Page) => void;
}

const PortfolioMotorcycles: React.FC<PortfolioMotorcyclesProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation (Mock) */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
          <span className="text-red-600">Apex</span> Motors
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Modelos</a>
          <a href="#" className="hover:text-white transition-colors">Inventario</a>
          <a href="#" className="hover:text-white transition-colors">Servicio</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <button className="px-6 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors rounded-none shadow-[0_0_20px_rgba(220,38,38,0.3)]">
          Test Drive
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Motorcycle Hero" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Nueva Colección 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
              DOMINÁ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">LA CALLE.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
              Experimentá la adrenalina pura con nuestra nueva línea de motocicletas de alto rendimiento. Diseño agresivo, tecnología de punta y potencia inigualable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-3 group">
                Ver Catálogo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                Cotizar
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-end h-full pb-12">
            <div className="flex gap-8 text-right">
              <div>
                <div className="text-4xl font-black text-white">998<span className="text-red-500 text-2xl">cc</span></div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Cilindrada</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">200<span className="text-red-500 text-2xl">cv</span></div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Potencia</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">189<span className="text-red-500 text-2xl">kg</span></div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Peso en seco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 px-6 md:px-12 bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Modelos <span className="text-red-600">Destacados</span></h2>
              <p className="text-gray-400 mt-4 max-w-lg">Descubrí las máquinas que están redefiniendo los límites de la velocidad y el diseño.</p>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest text-red-500 hover:text-red-400 flex items-center gap-2">
              Ver todos los modelos <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'NIGHTHAWK R1', price: '$24,500', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', type: 'Sport' },
              { name: 'STREET BRAWLER', price: '$18,900', img: 'https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', type: 'Naked' },
              { name: 'DESERT STORM', price: '$21,200', img: 'https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', type: 'Adventure' }
            ].map((bike, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5 mb-6">
                  <img src={bike.img} alt={bike.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {bike.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <button className="w-full py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Configurar
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-red-500 transition-colors">{bike.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Desde {bike.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0c]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Engine details" 
              className="relative z-10 border border-white/10 shadow-2xl grayscale-[0.3]"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-red-600 z-0 flex items-center justify-center p-6 text-center">
              <div>
                <div className="text-4xl font-black">5<span className="text-lg">AÑOS</span></div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1">Garantía<br/>Extendida</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Ingeniería sin <span className="text-red-600">Concesiones</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cada componente ha sido diseñado, probado y refinado hasta la perfección. No construimos simples motocicletas, forjamos instrumentos de precisión para los puristas del asfalto.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Chasis Ultraligero', desc: 'Aleación aeroespacial para una relación peso-potencia inigualable.' },
                { title: 'Electrónica Avanzada', desc: 'Sistemas de control de tracción y anti-wheelie de última generación.' },
                { title: 'Frenos de Competición', desc: 'Pinzas monobloque con discos flotantes para detener el tiempo.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide">{feature.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Mock */}
      <footer className="bg-black py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black tracking-tighter uppercase mb-6 flex items-center gap-2">
              <span className="text-red-600">Apex</span> Motors
            </div>
            <p className="text-gray-500 max-w-sm">Revolucionando la forma en que experimentás el camino. Máquinas excepcionales para pilotos excepcionales.</p>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-white mb-6">Modelos</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors">Sport</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Naked</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Adventure</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Cruiser</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-white mb-6">Compañía</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Concesionarios</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Prensa</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
          <p>© 2026 Apex Motors. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Back to main portfolio button (Floating) */}
      <button 
        onClick={() => setCurrentPage(Page.Portfolio)}
        className="fixed bottom-6 right-6 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors z-50 rounded-full shadow-2xl flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Volver a IfCodear
      </button>
    </div>
  );
};

export default PortfolioMotorcycles;
