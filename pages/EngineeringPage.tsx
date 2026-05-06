import React, { useEffect, useRef, useState } from 'react';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconSearch = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
  </svg>
);

const IconLayers = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const IconCode = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconWhatsApp = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const IconArrow = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

// ─── useInView hook for scroll animations ─────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Focus card data ──────────────────────────────────────────────────────────
const focusItems = [
  {
    icon: <IconSearch />,
    title: 'Análisis Profundo',
    description: 'Entendemos tu negocio antes de tocar una línea de código. Mapeamos procesos, identificamos cuellos de botella y definimos métricas de éxito reales.',
    accent: 'from-yellow-400/20 to-transparent',
  },
  {
    icon: <IconLayers />,
    title: 'Arquitectura Escalable',
    description: 'Diseñamos software que crece contigo. Microservicios, cloud-native y patrones probados para que tu plataforma soporte 10x más usuarios mañana.',
    accent: 'from-yellow-400/20 to-transparent',
  },
  {
    icon: <IconCode />,
    title: 'Código Limpio',
    description: 'Garantía de mantenibilidad a largo plazo. Revisiones de código rigurosas, cobertura de tests y documentación viva que evita la deuda técnica.',
    accent: 'from-yellow-400/20 to-transparent',
  },
];

// ─── Portfolio data ────────────────────────────────────────────────────────────
const portfolioCases = [
  {
    image: '/case_erp.png',
    alt: 'Dashboard ERP empresarial con KPIs financieros, gráficos de rendimiento por región y estado de proyectos en tiempo real',
    tag: 'ERP Empresarial',
    title: 'Sistema ERP a Medida',
    description: 'Plataforma integral de gestión empresarial para empresa manufacturera: finanzas, RRHH, operaciones y cadena de suministro en un solo ecosistema.',
    metric: '+40% eficiencia operativa',
  },
  {
    image: '/case_logistics.png',
    alt: 'Plataforma de logística con mapa de rutas en tiempo real, estado de flota y KPIs de entregas para gestión empresarial de transporte',
    tag: 'Logística & Fleet',
    title: 'Control de Flota en Tiempo Real',
    description: 'Solución de tracking y optimización de rutas para empresa de distribución. Integración con sensores IoT, APIs de mapas y alertas predictivas.',
    metric: '98.6% entregas a tiempo',
  },
  {
    image: '/case_fintech.png',
    alt: 'Aplicación fintech de portfolio financiero para web y móvil con gráficos de rendimiento, historial de transacciones y resumen de cuentas',
    tag: 'Fintech',
    title: 'Plataforma de Inversiones',
    description: 'App web y móvil para gestión de portfolios financieros con análisis en tiempo real, reportes regulatorios automatizados y pasarelas de pago seguras.',
    metric: '$145M+ gestionados',
  },
];

// ─── WHATSAPP LINK ─────────────────────────────────────────────────────────────
const WHATSAPP_URL =
  'https://wa.me/5493513038923?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20un%20consultor%20t%C3%A9cnico.';

// ─── Main Component ────────────────────────────────────────────────────────────
const EngineeringPage: React.FC = () => {
  const focusSection = useInView(0.1);
  const portfolioSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div className="animate-in fade-in duration-700">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        aria-label="Ingeniería de software a medida"
      >
        {/* Background image */}
        <img
          src="/hero_engineering.png"
          alt="Representación visual de circuitos dorados sobre fondo oscuro, simbolizando arquitectura de software avanzada"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/85 to-[#0d1117]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117]/60" />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" aria-hidden="true" />
              Ingeniería de Software
            </div>

            {/* H1 */}
            <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
              Ingeniería de Software{' '}
              <span className="text-primary">diseñada para tus retos</span>{' '}
              específicos.
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              No vendemos plantillas. Construimos soluciones que entienden tu industria,
              escalan con tu crecimiento y se mantienen con el paso del tiempo.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-black rounded-xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                aria-label="Hablar con un consultor técnico por WhatsApp"
              >
                <IconWhatsApp />
                Hablar con un consultor técnico
              </a>
              <a
                href="#casos-de-exito"
                id="hero-cta-portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
              >
                Ver casos de éxito
                <IconArrow />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { label: 'Proyectos entregados', value: '50+' },
                { label: 'Años de experiencia', value: '8+' },
                { label: 'Clientes satisfechos', value: '40+' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOCUS GRID ───────────────────────────────────────────────────────── */}
      <section
        ref={focusSection.ref}
        className="max-w-7xl mx-auto px-6 py-24 lg:py-32"
        aria-labelledby="enfoque-heading"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-black uppercase tracking-widest">Nuestro Método</span>
          <h2
            id="enfoque-heading"
            className="text-4xl lg:text-5xl font-black mt-4 text-white"
          >
            Cómo construimos{' '}
            <span className="text-primary">software que funciona</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Un proceso riguroso que elimina la ambigüedad y maximiza el valor entregado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusItems.map((item, idx) => (
            <div
              key={item.title}
              className={`
                group relative p-8 bg-surface-dark border border-white/10 rounded-2xl
                hover:border-primary/50 hover:-translate-y-1
                transition-all duration-300 overflow-hidden
                ${focusSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Glow accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden="true"
              />

              {/* Step number */}
              <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.04] select-none" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6
                group-hover:bg-primary group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────────── */}
      <div className="bg-black/40 border-y border-white/5 py-14" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
          {['React · Next.js', 'Node.js · Python', 'AWS · GCP · Azure', 'PostgreSQL · MongoDB', 'Docker · Kubernetes'].map((t) => (
            <span key={t} className="hover:text-primary transition-colors cursor-default">{t}</span>
          ))}
        </div>
      </div>

      {/* ── PORTFOLIO / CASOS DE ÉXITO ────────────────────────────────────── */}
      <section
        id="casos-de-exito"
        ref={portfolioSection.ref}
        className="max-w-7xl mx-auto px-6 py-24 lg:py-32"
        aria-labelledby="portfolio-heading"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-black uppercase tracking-widest">Resultados Reales</span>
          <h2
            id="portfolio-heading"
            className="text-4xl lg:text-5xl font-black mt-4 text-white"
          >
            Casos de <span className="text-primary">Éxito</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Software empresarial que transformó operaciones y generó resultados medibles.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioCases.map((c, idx) => (
            <article
              key={c.title}
              className={`
                group bg-surface-dark border border-white/10 rounded-2xl overflow-hidden
                hover:border-primary/40 hover:-translate-y-1 transition-all duration-300
                ${portfolioSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="w-full h-full object-cover object-center
                    grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105
                    transition-all duration-500"
                  loading="lazy"
                />
                {/* Tag badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm
                  border border-primary/30 text-primary text-xs font-black rounded-full uppercase tracking-wider">
                  {c.tag}
                </span>
                {/* Metric chip */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm
                  text-black text-xs font-black rounded-lg">
                  {c.metric}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section
        ref={ctaSection.ref}
        className="relative py-24 lg:py-32 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* Glow background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div
          className={`
            relative z-10 max-w-4xl mx-auto px-6 text-center
            transition-all duration-700
            ${ctaSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" aria-hidden="true" />
            Hablemos de tu proyecto
          </div>

          <h2
            id="cta-heading"
            className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            ¿Listo para transformar{' '}
            <span className="text-primary">tu negocio con software</span>?
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Un consultor técnico senior analizará tu caso, sin compromiso, y te propondrá
            el camino más eficiente hacia tu objetivo.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-button"
            className="
              inline-flex items-center gap-3
              px-10 py-5 bg-primary text-black font-black text-lg rounded-2xl
              shadow-2xl shadow-primary/30
              hover:scale-105 hover:shadow-primary/50
              active:scale-95
              transition-all duration-200
            "
            aria-label="Abrir chat de WhatsApp para hablar con un consultor técnico de ifcodear"
          >
            <IconWhatsApp />
            Hablar con un consultor técnico
            <IconArrow />
          </a>

          <p className="text-gray-600 text-sm mt-5">
            Respuesta en menos de 24 hs · Sin compromiso
          </p>
        </div>
      </section>
    </div>
  );
};

export default EngineeringPage;
