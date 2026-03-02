
import React from 'react';

const ServicesPage: React.FC = () => {
  const capabilities = [
    {
      title: "Desarrollo de Software a Medida",
      desc: "Creamos aplicaciones robustas y escalables desde cero. Nuestra metodología ágil nos permite adaptarnos a sus procesos de negocio únicos.",
      tag: "100% Adaptabilidad",
      points: ["Análisis profundo de requerimientos", "Arquitectura escalable y segura"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
      )
    },
    {
      title: "Modernización de Sistemas",
      desc: "Actualizamos sus sistemas legacy para que operen en entornos modernos de nube. Reducimos la deuda técnica y mejoramos el rendimiento.",
      tag: "Eficiencia Operativa",
      points: ["Migración a la nube (AWS/Azure)", "Refactorización de código crítico"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
      )
    },
    {
      title: "Consultoría Estratégica",
      desc: "Ayudamos a las empresas a definir un roadmap tecnológico claro. Evaluamos su stack actual y proponemos soluciones rentables.",
      tag: "Visión de Futuro",
      points: ["Selección de stack tecnológico", "Auditorías de seguridad y calidad"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"/></svg>
      )
    },
    {
      title: "Mantenimiento y Soporte",
      desc: "Ofrecemos soporte preventivo y correctivo las 24 horas. Nos encargamos de que su plataforma esté siempre actualizada y segura.",
      tag: "Tranquilidad Total",
      points: ["Monitoreo proactivo 24/7", "Parches de seguridad inmediatos"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      )
    }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-10 duration-700">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
          Nuestras Capacidades
        </div>
        <h1 className="text-5xl lg:text-7xl font-black mb-6">Nuestras Soluciones <br/>Tecnológicas</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Impulsamos su negocio con software diseñado a la medida de sus necesidades, utilizando las tecnologías más avanzadas del mercado.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <div key={i} className="group p-10 bg-surface-dark border border-white/10 rounded-3xl hover:border-primary/50 transition-all shadow-xl">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  {c.icon}
                </div>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase text-gray-500 tracking-wider">
                  {c.tag}
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{c.desc}</p>
              <ul className="space-y-3">
                {c.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5">
                <button className="flex items-center gap-2 text-primary font-black text-sm group-hover:gap-4 transition-all">
                  Explorar enfoque
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-primary/10 py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
             <h2 className="text-3xl font-black mb-4">¿Listo para transformar su empresa?</h2>
             <p className="text-gray-400">Hablemos sobre cómo nuestras soluciones pueden impactar positivamente en sus objetivos de negocio.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-primary text-black font-black rounded-xl hover:shadow-[0_0_20px_rgba(255,217,0,0.5)] transition-all">Contactar ahora</button>
            <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5">Ver Portafolio</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
