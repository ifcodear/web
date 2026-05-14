import React from 'react';
import { Page } from '../types';

interface RoadmapPageProps {
  setCurrentPage: (page: Page) => void;
}

const RoadmapPage: React.FC<RoadmapPageProps> = ({ setCurrentPage }) => {
  const phases = [
    {
      id: 'Q1',
      title: 'Fase 1: Fundación y Setup',
      timeframe: 'Semanas 1-4',
      description: 'Establecimiento de la arquitectura base, configuración de entornos y diseño de sistemas core.',
      status: 'completed',
      tasks: [
        { name: 'Auditoría Técnica y Discovery', status: 'completed' },
        { name: 'Diseño de Arquitectura Cloud', status: 'completed' },
        { name: 'Setup de Entornos (Dev/Staging/Prod)', status: 'completed' },
        { name: 'Diseño UX/UI (Wireframes Base)', status: 'completed' }
      ]
    },
    {
      id: 'Q2',
      title: 'Fase 2: Desarrollo del MVP Core',
      timeframe: 'Semanas 5-12',
      description: 'Implementación de las funcionalidades críticas del negocio para salir al mercado rápidamente.',
      status: 'in-progress',
      tasks: [
        { name: 'Desarrollo de Backend y APIs', status: 'completed' },
        { name: 'Implementación Frontend (Web/Mobile)', status: 'in-progress' },
        { name: 'Integración de Pasarelas de Pago', status: 'in-progress' },
        { name: 'Testing Automatizado (QA)', status: 'planned' }
      ]
    },
    {
      id: 'Q3',
      title: 'Fase 3: Optimización y Escalamiento',
      timeframe: 'Semanas 13-20',
      description: 'Ajustes basados en feedback real de usuarios y preparación para alto volumen de tráfico.',
      status: 'planned',
      tasks: [
        { name: 'Pruebas de Carga y Estrés', status: 'planned' },
        { name: 'Optimización de Consultas DB', status: 'planned' },
        { name: 'Desarrollo de Features Secundarios', status: 'planned' },
        { name: 'Lanzamiento V2.0', status: 'planned' }
      ]
    },
    {
      id: 'Q4',
      title: 'Fase 4: Mantenimiento Inteligente',
      timeframe: 'Continuo',
      description: 'Soporte técnico, actualizaciones de seguridad y evolución del producto bajo modelo Team as a Service.',
      status: 'planned',
      tasks: [
        { name: 'Monitoreo 24/7 y Alertas', status: 'planned' },
        { name: 'Actualizaciones de Seguridad', status: 'planned' },
        { name: 'Sesiones de Consultoría Mensuales', status: 'planned' },
        { name: 'Integración de IA (Opcional)', status: 'planned' }
      ]
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'in-progress': return 'bg-primary/10 text-primary border-primary/20 animate-pulse';
      case 'planned': return 'bg-white/5 text-gray-400 border-white/10';
      default: return 'bg-white/5 text-gray-400 border-white/10';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En Progreso';
      case 'planned': return 'Planificado';
      default: return 'Planificado';
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white animate-in fade-in duration-700">
      
      {/* ── Header ────────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-black uppercase tracking-widest mb-6">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Planificación Estratégica
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Roadmap de <span className="text-primary">Ejecución</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Una visión clara de cómo construimos productos digitales exitosos. Desde la idea hasta el escalamiento continuo, nuestro mapa de ruta garantiza transparencia total.
          </p>
        </div>
      </section>

      {/* ── Timeline / Roadmap Layout ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-16 py-8">
          
          {phases.map((phase, index) => (
            <div key={phase.id} className="relative pl-10 md:pl-16">
              
              {/* Timeline Dot */}
              <div className={`absolute left-[-11px] top-2 w-5 h-5 rounded-full border-4 border-background-dark ${
                  phase.status === 'completed' ? 'bg-green-500' :
                  phase.status === 'in-progress' ? 'bg-primary shadow-[0_0_15px_rgba(255,217,0,0.5)]' :
                  'bg-gray-600'
                }`} 
              />
              
              <div className="bg-surface-dark border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl hover:border-white/20 transition-colors">
                
                {/* Card Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-8 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-primary font-black text-xl">{phase.id}</span>
                      <h2 className="text-2xl md:text-3xl font-bold">{phase.title}</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl">{phase.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-sm font-medium text-gray-300">
                      {phase.timeframe}
                    </span>
                    <span className={`px-3 py-1 border rounded-lg text-xs font-bold uppercase tracking-wider ${getStatusStyle(phase.status)}`}>
                      {getStatusLabel(phase.status)}
                    </span>
                  </div>
                </div>

                {/* Tasks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.tasks.map((task, tIndex) => (
                    <div key={tIndex} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${getStatusStyle(task.status)}`}>
                        {task.status === 'completed' ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        ) : task.status === 'in-progress' ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                        )}
                      </div>
                      <span className={`text-sm md:text-base font-medium ${task.status === 'planned' ? 'text-gray-500' : 'text-gray-200'}`}>
                        {task.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
          
        </div>
      </section>
      
      {/* ── Call to Action ────────────────────────────────────────────────────── */}
      <section className="bg-primary text-black py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-6">¿Quieres un Roadmap a medida para tu idea?</h2>
          <p className="text-black/70 text-lg mb-10 font-medium">Agenda una consultoría estratégica y diseñemos la arquitectura, los hitos y los costos de tu próximo gran producto digital.</p>
          <button 
            onClick={() => setCurrentPage(Page.Consulting)}
            className="px-8 py-4 bg-black text-white font-black rounded-xl hover:scale-105 transition-transform shadow-2xl shadow-black/20"
          >
            Saber más sobre Consultoría
          </button>
        </div>
      </section>

    </div>
  );
};

export default RoadmapPage;
