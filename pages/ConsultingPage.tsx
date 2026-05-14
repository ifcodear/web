import React from 'react';

const WHATSAPP_URL = 'https://wa.me/5493513038923?text=Hola%2C%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20para%20una%20consultor%C3%ADa%20estrat%C3%A9gica.';
const EMAIL = 'ifcodear@gmail.com';

const ConsultingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-background-dark text-white min-h-screen">
      
      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Servicios Expertos
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Consultoría Estratégica <span className="text-primary">Tecnológica</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            Auditamos tu arquitectura actual, identificamos cuellos de botella y trazamos un roadmap escalable. 
            Alineamos tu tecnología con tus objetivos de negocio para garantizar un crecimiento sostenible sin deuda técnica.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-3"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Agendar vía WhatsApp
            </a>
            <a 
              href={`mailto:${EMAIL}?subject=Consulta Estratégica`} 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* ── Pillars Section ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-dark border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4">Auditoría de Arquitectura</h3>
            <p className="text-gray-400 leading-relaxed">
              Analizamos tu stack tecnológico actual, la infraestructura en la nube y el código fuente.
              Identificamos riesgos de seguridad, cuellos de botella de rendimiento y deuda técnica crítica.
            </p>
          </div>
          
          <div className="bg-surface-dark border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4">Roadmap Escalonado</h3>
            <p className="text-gray-400 leading-relaxed">
              Diseñamos un plan de acción priorizado. Desde victorias tempranas (Quick Wins) hasta cambios arquitectónicos profundos a largo plazo para preparar tu empresa para el siguiente nivel de escala.
            </p>
          </div>

          <div className="bg-surface-dark border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4">Optimización de Equipos</h3>
            <p className="text-gray-400 leading-relaxed">
              La tecnología la hacen personas. Evaluamos las metodologías ágiles de tu equipo, los flujos de CI/CD y recomendamos mejores prácticas para multiplicar la velocidad de despliegue.
            </p>
          </div>
        </div>
      </section>

      {/* ── Steps Section ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-dark/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">Nuestra Metodología</h2>
          <div className="space-y-12">
            {[
              { num: '01', title: 'Discovery & Onboarding', desc: 'Reunión inicial para entender el contexto comercial, dolor actual y objetivos financieros o de producto.' },
              { num: '02', title: 'Inmersión Técnica', desc: 'Acceso a repositorios, infraestructura cloud y documentación. Revisión exhaustiva con herramientas de análisis estático.' },
              { num: '03', title: 'Diseño de Solución', desc: 'Elaboración de alternativas arquitectónicas evaluando costo, tiempo de implementación y escalabilidad futura.' },
              { num: '04', title: 'Presentación del Roadmap', desc: 'Entrega de un documento ejecutivo y técnico detallado, con presupuestos asociados y pasos a seguir claros.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-10">
                <div className="text-4xl md:text-6xl font-black text-primary/20 shrink-0">{step.num}</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConsultingPage;
