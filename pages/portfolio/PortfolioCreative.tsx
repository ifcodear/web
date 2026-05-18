import React, { useEffect } from 'react';
import { Page } from '../../types';

const PortfolioCreative: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-[#f2f2f2] min-h-screen font-sans selection:bg-[#f2f2f2] selection:text-[#0f0f0f] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-between items-start mix-blend-difference">
        <div className="text-xl md:text-2xl font-medium tracking-tight leading-none">
          STUDIO<br/>
          <span className="text-gray-500">INDIGO</span>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
          <button className="hover:text-white transition-colors">Work</button>
          <button className="hover:text-white transition-colors">About</button>
          <button className="hover:text-white transition-colors">Contact</button>
        </div>
      </nav>

      {/* Back Button */}
      <button 
        onClick={() => setCurrentPage(Page.Portfolio)} 
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 w-16 h-16 rounded-full border border-white/20 bg-[#0f0f0f]/80 backdrop-blur flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-110 group"
        aria-label="Back to Portfolio"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
      </button>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-40 px-6 md:px-12 pb-24 flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80" 
            alt="Abstract Architecture" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="overflow-hidden mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-medium leading-[0.85] tracking-tighter mix-blend-lighten">
              Designing<br/>
              Tomorrow.
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 md:mt-32">
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We are an independent design consultancy blending strategic thinking with uncompromised aesthetic precision. We build brands that define categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Grid */}
      <section className="py-24 px-6 md:px-12 relative z-10 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Selected Work</h2>
            <span className="text-gray-500 uppercase tracking-widest text-sm">2024—2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {[
              { title: 'Aura Skincare', category: 'Brand Identity & E-Commerce', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', aspect: 'aspect-[3/4]' },
              { title: 'Nexus Mobility', category: 'App Design & Strategy', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', aspect: 'aspect-square md:mt-32' },
              { title: 'Obscura', category: 'Editorial & Print', img: 'https://images.unsplash.com/photo-1544411047-c45ba52e2264?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', aspect: 'aspect-video' },
              { title: 'Maison', category: 'Art Direction', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', aspect: 'aspect-[4/5] md:mt-[-8rem]' }
            ].map((work, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`w-full ${work.aspect} overflow-hidden mb-6 bg-white/5`}>
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-medium tracking-tight">{work.title}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.1em]">{work.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto / Approach */}
      <section className="py-32 px-6 md:px-12 bg-[#f2f2f2] text-[#0f0f0f] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-12">
              Complexity<br/>Distilled.
            </h2>
            <p className="text-xl md:text-2xl font-light leading-snug text-gray-600">
              Our approach is rooted in reduction. We strip away the unnecessary to reveal the core truth of a brand, creating systems that are both highly functional and deeply emotive.
            </p>
          </div>
          <div className="space-y-12 border-t border-black/10 pt-12 md:border-none md:pt-0">
            {[
              { n: '01', title: 'Research & Strategy', desc: 'Understanding the context, defining the architecture, and discovering the unique proposition.' },
              { n: '02', title: 'Design & Prototyping', desc: 'Translating strategy into visual language. Creating robust, scalable design systems.' },
              { n: '03', title: 'Development & Launch', desc: 'Bringing the vision to life with pixel-perfect implementation and seamless interactions.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-10">
                <span className="text-sm font-medium text-gray-400">{step.n}</span>
                <div>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 bg-[#0f0f0f] border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10vw] md:text-[180px] font-medium leading-[0.8] tracking-tighter opacity-10 mb-24">
            INDIGO
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <p className="text-gray-500 mb-6">Let's create something extraordinary.</p>
              <a href="mailto:hello@studioindigo.com" className="text-3xl md:text-5xl font-medium hover:text-gray-400 transition-colors">
                hello@studioindigo.com
              </a>
            </div>
            <div className="flex gap-12 text-sm uppercase tracking-widest text-gray-500 font-medium">
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-4">
                <span>Buenos Aires</span>
                <span>London</span>
                <span>New York</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioCreative;
