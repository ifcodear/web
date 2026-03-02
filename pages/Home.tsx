
import React from 'react';
import { Page } from '../types';
import ConsultationForm from '../components/ConsultationForm';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Software de próxima generación
          </div>
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
            Soluciones de Software <span className="text-primary">a Tu Medida</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Transformamos tus ideas en herramientas digitales robustas y escalables. Expertos en ingeniería de software para empresas de alto crecimiento.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setCurrentPage(Page.Checkout)}
              className="px-8 py-4 bg-primary text-black font-black rounded-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Solicitar Presupuesto
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentPage(Page.Services)}
              className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
            >
              Ver Proyectos
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-dark p-6">
            <img 
              src="https://picsum.photos/seed/tech/800/600" 
              alt="Plataforma tech" 
              className="rounded-lg shadow-inner grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
            />
            <div className="absolute bottom-10 right-10 bg-background-dark/80 backdrop-blur-md p-4 rounded-xl border border-white/10 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Eficiencia</div>
                  <div className="text-sm font-black text-white">+240% Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By (Logos) */}
      <section className="bg-black/40 py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-gray-500 uppercase tracking-widest mb-10">Empresas que confían en nosotros</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 opacity-40 grayscale transition-all hover:grayscale-0">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="flex items-center justify-center">
                 <img src={`https://picsum.photos/seed/logo${i}/200/80?grayscale`} alt="Client" className="h-8 md:h-12 object-contain" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-black uppercase tracking-widest">Especialidades</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4">Nuestros Servicios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Full-Stack', icon: 'code', desc: 'Soluciones web de extremo a extremo.' },
            { title: 'App Móviles', icon: 'smartphone', desc: 'Apps nativas para iOS y Android.' },
            { title: 'Cloud & DevOps', icon: 'cloud', desc: 'Infraestructura segura en la nube.' },
            { title: 'Inteligencia Artificial', icon: 'bolt', desc: 'Automatización inteligente de procesos.' }
          ].map((s, idx) => (
            <div key={idx} className="p-8 bg-surface-dark border border-white/10 rounded-2xl group hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                {idx === 0 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>}
                {idx === 1 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>}
                {idx === 2 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>}
                {idx === 3 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-dark/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Carlos Rodríguez', role: 'CTO @ Fintech', text: 'La migración a la nube fue impecable. Logramos reducir costos operativos un 40%.' },
              { name: 'Elena Martínez', role: 'CEO @ HealthPath', text: 'Su capacidad para entender procesos de negocio y convertirlos en App es asombrosa.' },
              { name: 'Juan Pérez', role: 'Director @ Logistics', text: 'La solución de IA nos permitió automatizar el 70% de nuestras consultas.' }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-background-dark border border-white/10 rounded-2xl relative">
                <div className="absolute top-8 right-8 text-primary opacity-20">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/p${idx}/60/60`} className="w-12 h-12 rounded-full border border-primary" alt={t.name} />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-gray-500 font-bold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Form */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <ConsultationForm />
      </section>
    </div>
  );
};

export default Home;
