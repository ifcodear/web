import React from 'react';

const WHATSAPP_URL = 'https://wa.me/5493513038923?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20un%20presupuesto%20para%20mi%20proyecto.';

const IconCheck = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const PricingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      
      {/* ── Header ────────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
          Modelos de Contratación
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
          Inversión clara y <span className="text-primary">sin sorpresas</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Elegí la modalidad que mejor se adapte a la etapa de tu negocio. 
          Ya sea que necesites un producto cerrado o un equipo de ingeniería dedicado.
        </p>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Pago por Proyecto */}
          <div className="bg-surface-dark border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col shadow-2xl hover:border-white/20 transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white mb-2">Proyecto Cerrado</h3>
              <p className="text-gray-400 text-sm">Ideal para MVPs, migraciones o entregables con un alcance fijo y bien definido.</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-white/10">
              <span className="text-4xl font-black text-white">A Medida</span>
              <span className="text-gray-400 text-sm ml-2">/ Presupuestado</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Análisis de requerimientos detallado</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Diseño UI/UX de alta fidelidad</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Entregas predecibles por hitos (Milestones)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Pruebas de calidad (QA) y despliegue a producción</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Garantía de código libre de bugs críticos</span>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black rounded-xl transition-all text-center"
            >
              Cotizar Proyecto
            </a>
          </div>

          {/* Card 2: Retainer / Monthly (Destacado) */}
          <div className="bg-background-dark border-2 border-primary rounded-3xl p-8 lg:p-10 flex flex-col shadow-[0_0_50px_rgba(255,217,0,0.15)] relative transform md:-translate-y-4">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              Recomendado
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-black text-white mb-2">Team as a Service (Mensual)</h3>
              <p className="text-gray-400 text-sm">Ingeniería continua. Ideal para startups en crecimiento y mantenimiento evolutivo constante.</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-white/10">
              <span className="text-4xl font-black text-white">Suscripción</span>
              <span className="text-gray-400 text-sm ml-2">/ Mes</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-white font-medium">
                <IconCheck />
                <span>Equipo senior asignado a tu producto</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Prioridad máxima en tiempos de respuesta</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Desarrollo de nuevas funcionalidades y mejoras continuas</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Mantenimiento de servidores y base de datos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IconCheck />
                <span>Reuniones estratégicas quincenales (Agile)</span>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all text-center shadow-xl shadow-primary/20"
            >
              Consultar Disponibilidad
            </a>
          </div>

        </div>

        {/* ── FAQ or Trust Section below cards ───────────────────────────────── */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm">
            Todas nuestras contrataciones incluyen un Acuerdo de Confidencialidad (NDA) firmado.
            Protegemos la propiedad intelectual de tu software y aseguramos estándares empresariales
            de seguridad en cada línea de código escrita.
          </p>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
