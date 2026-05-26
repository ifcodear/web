import React from 'react';

const WHATSAPP_URL = 'https://wa.me/5493513038923?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20sobre%20Soporte%20IT%20e%20Infraestructura.';
const EMAIL = 'ifcodear@gmail.com';

const ITSupportPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-background-dark text-white min-h-screen">

      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Infraestructura Corporativa
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Soporte Integral e <br /><span className="text-primary">Infraestructura IT</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            Garantizamos la operatividad continua de tu empresa. Desde el diseño y asesoramiento de redes corporativas planes de mantenimiento de PCs y sistemas de videovigilancia. Nos encargamos de la tecnología para que tú te enfoques en tu negocio.
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
              Cotizar Servicio
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Solicito acesoramiento`}
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">¿En qué te podemos ayudar?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Cubrimos todas las aristas tecnológicas de tu espacio de trabajo físico y digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Redes y Conectividad Corporativa",
              desc: "Diseñamos y asesoramos en redes cableadas (LAN) y sistemas Wi-Fi de alta densidad. Configuramos routers, switches, firewalls y VPNs para asegurar que tu equipo trabaje rápido y sin caídas.",
              icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
            },
            {
              title: "Cámaras y Seguridad (CCTV)",
              desc: "Asesoramiento en sistemas de videovigilancia de alta definición, con monitoreo remoto en tiempo real, configuración de NVR/DVR y sistemas de control de acceso para proteger tus instalaciones.",
              icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            },
            {
              title: "Mantenimiento de PCs y Servidores",
              desc: "Soporte técnico preventivo y correctivo para estaciones de trabajo. Formateos, limpiezas de virus, upgrades de hardware (SSDs, RAM) y administración de servidores locales o en la nube.",
              icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            },
            {
              title: "Asesoramiento IT y Licencias",
              desc: "Te guiamos en la compra de equipamiento, gestión de licencias (Microsoft 365, Google Workspace), implementación de sistemas de backup automatizados y ciberseguridad básica corporativa.",
              icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-dark border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Retainers vs Projects ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-dark/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Modalidades de Trabajo</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Entendemos que cada empresa es diferente. Por eso ofrecemos flexibilidad para adaptarnos a tu estructura financiera y operativa.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-black/40 border border-white/10 rounded-2xl border-l-4 border-l-primary">
                  <h4 className="text-xl font-bold text-white mb-2">Abono Mensual (Mantenimiento Continuo)</h4>
                  <p className="text-gray-400">Ideal para empresas que requieren soporte 24/7 o una bolsa de horas fijas al mes. Incluye monitoreo proactivo, visitas presenciales de rutina y prioridad alta ante urgencias técnicas.</p>
                </div>

                <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
                  <h4 className="text-xl font-bold text-white mb-2">Proyectos o Incidencias Puntuales</h4>
                  <p className="text-gray-400">Perfecto para instalaciones nuevas (ej: "Necesito cablear mi nueva oficina y poner 8 cámaras") o reparaciones específicas. Cotizamos por proyecto con tiempos de entrega claros.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[50px]"></div>
              <h3 className="text-2xl font-black mb-6">Proceso de Onboarding</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <strong className="block text-white mb-1">Relevamiento Gratuito</strong>
                    <span className="text-gray-400 text-sm">Visitamos tus oficinas o nos reunimos por videollamada para entender el estado de tu infraestructura.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <strong className="block text-white mb-1">Propuesta Técnica</strong>
                    <span className="text-gray-400 text-sm">Te entregamos un presupuesto detallado con los equipos necesarios y nuestras horas de trabajo, ya sea abono o proyecto.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <strong className="block text-white mb-1">Ejecución y Documentación</strong>
                    <span className="text-gray-400 text-sm">Realizamos el trabajo y te dejamos contraseñas, planos de red y garantías todo documentado a nombre de tu empresa.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ITSupportPage;
