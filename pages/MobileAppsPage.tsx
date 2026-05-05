import React from 'react';

const MobileAppsPage: React.FC = () => {
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
            Desarrollo de <span className="text-primary">App Móviles</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Creamos experiencias móviles de primer nivel para todos los dispositivos, iOS y Android. Aplicaciones conectadas que se sincronizan con tus servicios web y bases de datos en tiempo real.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-background-dark border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">iOS (iPhone & iPad)</h3>
            <p className="text-gray-400 leading-relaxed">
              Desarrollamos aplicaciones optimizadas para el ecosistema Apple, respetando las guías de diseño de iOS. Ofrecemos experiencias fluidas y atractivas que enamoran a tus usuarios.
            </p>
          </div>

          <div className="p-8 bg-background-dark border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Android</h3>
            <p className="text-gray-400 leading-relaxed">
              Llega a la mayor parte del mercado móvil con aplicaciones robustas en Android. Las diseñamos para ser ágiles y compatibles con la multitud de dispositivos y resoluciones disponibles.
            </p>
          </div>

          <div className="p-8 bg-background-dark border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Sincronización Web & DB</h3>
            <p className="text-gray-400 leading-relaxed">
              Las aplicaciones móviles nunca están solas. Conectamos fuertemente tus apps con infraestructuras web (APIs) y bases de datos unificadas, garantizando consistencia en todo tu negocio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Banner */}
      <section className="bg-black/40 py-16 border-y border-white/5 text-center">
        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6">Tecnologías de Desarrollo</p>
        <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold text-gray-400">
          <span className="hover:text-white transition-all cursor-default">React Native</span>
          <span className="text-primary">•</span>
          <span className="hover:text-white transition-all cursor-default">Flutter</span>
          <span className="text-primary">•</span>
          <span className="hover:text-white transition-all cursor-default">Swift</span>
          <span className="text-primary">•</span>
          <span className="hover:text-white transition-all cursor-default">Kotlin</span>
        </div>
      </section>
    </div>
  );
};

export default MobileAppsPage;
