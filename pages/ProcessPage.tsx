
import React from 'react';

const ProcessPage: React.FC = () => {
  const steps = [
    { title: "Discovery", icon: "search", desc: "Consultoría inicial y levantamiento de requerimientos detallados para alinear objetivos." },
    { title: "Design & Prototyping", icon: "draw", desc: "Creamos experiencias UX/UI intuitivas y definimos arquitectura técnica escalable." },
    { title: "Agile Development", icon: "code", desc: "Ejecución en sprints de desarrollo iterativo con entregas constantes de software funcional." },
    { title: "Quality Assurance", icon: "verified", desc: "Pruebas exhaustivas y testing riguroso para garantizar un producto libre de errores." },
    { title: "Deployment & Launch", icon: "rocket_launch", desc: "Lanzamiento controlado y configuración de infraestructura cloud para tráfico real." },
    { title: "Evolution", icon: "auto_awesome", desc: "Soporte continuo y mejoras constantes basadas en métricas de uso reales." }
  ];

  return (
    <div className="animate-in slide-in-from-right-10 duration-700">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
           Metodología de Éxito
        </div>
        <h1 className="text-5xl lg:text-7xl font-black mb-6">Nuestro Proceso de Trabajo:<br/><span className="text-primary">De la Idea a la Realidad</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Transformamos visiones complejas en soluciones digitales robustas a través de una metodología estructurada y transparente.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

        <div className="space-y-24">
          {steps.map((s, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-center md:text-right">
                <div className={`p-8 bg-surface-dark border border-white/10 rounded-2xl hover:border-primary/30 transition-all ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-primary/20 text-6xl font-black block mb-4">0{i+1}</span>
                  <h3 className="text-xl font-black mb-4">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>

              <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black border-4 border-background-dark shadow-[0_0_20px_rgba(255,217,0,0.5)]">
                 <span className="font-bold text-lg">{i+1}</span>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-dark border-y border-white/5 py-32 px-6 mt-20 overflow-hidden relative">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8">¿Listo para dar el siguiente paso?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Nuestro equipo está listo para convertir tu idea en un producto digital de alto impacto. Construyamos algo increíble juntos.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-5 bg-primary text-black font-black rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all">Inicia tu proyecto hoy</button>
            <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5">Ver portafolio</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
