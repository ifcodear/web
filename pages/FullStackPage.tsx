import React from 'react';

const FullStackPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-surface-dark py-20 lg:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Servicio Destacado
          </div>
          <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-6">
            Soluciones <span className="text-primary">Full-Stack</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desarrollo web de extremo a extremo. Arquitecturas robustas, interfaces modernas y bases de datos escalables para hacer realidad tus ideas de negocio con las últimas tecnologías.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-background-dark border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Frontend</h3>
            <p className="text-gray-400 leading-relaxed">
              Interfaces de usuario (UI) atractivas y experiencia de usuario (UX) fluida. Usamos frameworks modernos como React y Vue para crear sitios web rápidos y accesibles que cautivan a tus usuarios.
            </p>
          </div>

          <div className="p-8 bg-background-dark border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Backend</h3>
            <p className="text-gray-400 leading-relaxed">
              El motor que impulsa tu aplicación. Desarrollamos APIs seguras, lógica de negocio compleja y microservicios escalables utilizando tecnologías como Node.js, Python o Go.
            </p>
          </div>

          <div className="p-8 bg-background-dark border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Base de Datos</h3>
            <p className="text-gray-400 leading-relaxed">
              Almacenamiento y estructuración de datos óptimos. Diseñamos arquitecturas de datos confiables en SQL (PostgreSQL, MySQL) o NoSQL (MongoDB, Redis) para asegurar la integridad de la información.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Banner */}
      <section className="bg-black/40 py-16 border-y border-white/5 text-center">
        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6">Tecnologías Principales</p>
        <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold text-gray-400">
          <span className="hover:text-white transition-all cursor-default">React Next.js</span>
          <span className="text-primary">•</span>
          <span className="hover:text-white transition-all cursor-default">Node.js Express</span>
          <span className="text-primary">•</span>
          <span className="hover:text-white transition-all cursor-default">PostgreSQL MongoDB</span>
          <span className="text-primary">•</span>
          <span className="hover:text-white transition-all cursor-default">Tailwind CSS</span>
        </div>
      </section>
    </div>
  );
};

export default FullStackPage;
