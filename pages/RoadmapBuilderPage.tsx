import React, { useState } from 'react';

const RoadmapBuilderPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    currentState: '',
    objectives: [] as string[],
    budget: '',
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  // Math CAPTCHA state
  const [mathA] = useState(Math.floor(Math.random() * 10) + 1);
  const [mathB] = useState(Math.floor(Math.random() * 10) + 1);
  const [mathAnswer, setMathAnswer] = useState<string>('');

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 6));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleObjective = (obj: string) => {
    setFormData((prev) => {
      const exists = prev.objectives.includes(obj);
      if (exists) {
        return { ...prev, objectives: prev.objectives.filter(o => o !== obj) };
      } else {
        return { ...prev, objectives: [...prev.objectives, obj] };
      }
    });
  };

  const generateWhatsAppMessage = () => {
    const text = `*Nuevo Requerimiento de Proyecto - ifcodear* 🚀
    
*1. Tipo de Proyecto:* ${formData.projectType}
*2. Estado Actual:* ${formData.currentState}
*3. Objetivos:* ${formData.objectives.join(', ')}
*4. Presupuesto / Urgencia:* ${formData.budget}

*Datos de Contacto:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

*Detalles Adicionales:*
${formData.details || 'Ninguno'}`;

    return `https://wa.me/5493513038923?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-background-dark text-white pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* ── Progress Bar ────────────────────────────────────────────────────── */}
        <div className="mb-12">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 px-1">
            <span>Paso {step} de 6</span>
            <span>{Math.round((step / 6) * 100)}% Completado</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* ── Steps Container ─────────────────────────────────────────────────── */}
        <div className="bg-surface-dark border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[400px]">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black mb-2">¿Qué tipo de proyecto tenés en mente?</h2>
              <p className="text-gray-400 mb-8">Seleccioná la opción que mejor describa lo que querés construir.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Aplicación Móvil (iOS/Android)', 'Plataforma SaaS / Dashboard', 'E-commerce Avanzado', 'Web Corporativa / Landing', 'Sistema Interno / CRM', 'Aún no lo tengo claro'].map(type => (
                  <button
                    key={type}
                    onClick={() => { setFormData({...formData, projectType: type}); handleNext(); }}
                    className={`p-4 rounded-xl border text-left transition-all ${formData.projectType === type ? 'border-primary bg-primary/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400 hover:text-white'}`}
                  >
                    <div className="font-bold">{type}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black mb-2">¿En qué etapa te encontrás?</h2>
              <p className="text-gray-400 mb-8">Nos ayuda a saber desde dónde partimos.</p>
              
              <div className="space-y-4">
                {[
                  { title: 'Solo tengo la idea', desc: 'Necesito ayuda para definir el alcance y la arquitectura.' },
                  { title: 'Tengo diseños / wireframes', desc: 'Ya tengo la parte visual o los requerimientos muy claros.' },
                  { title: 'Producto en marcha', desc: 'Tengo algo funcionando pero necesito mejorarlo, refactorizar o escalar.' }
                ].map(state => (
                  <button
                    key={state.title}
                    onClick={() => { setFormData({...formData, currentState: state.title}); handleNext(); }}
                    className={`w-full p-5 rounded-xl border text-left transition-all ${formData.currentState === state.title ? 'border-primary bg-primary/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400 hover:text-white'}`}
                  >
                    <div className="font-bold text-lg mb-1">{state.title}</div>
                    <div className="text-sm opacity-70">{state.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black mb-2">¿Cuáles son tus objetivos principales?</h2>
              <p className="text-gray-400 mb-8">Podés seleccionar más de uno.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Validar mercado (MVP)', 
                  'Aumentar ventas/conversión', 
                  'Automatizar procesos internos', 
                  'Atraer inversores', 
                  'Escalar a miles de usuarios', 
                  'Renovar tecnología obsoleta'
                ].map(obj => (
                  <button
                    key={obj}
                    onClick={() => toggleObjective(obj)}
                    className={`p-4 rounded-xl border text-left transition-all flex justify-between items-center ${formData.objectives.includes(obj) ? 'border-primary bg-primary/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400 hover:text-white'}`}
                  >
                    <span className="font-bold">{obj}</span>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.objectives.includes(obj) ? 'bg-primary border-primary text-black' : 'border-gray-600'}`}>
                      {formData.objectives.includes(obj) && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </button>
                ))}
              </div>
              <button 
                onClick={handleNext}
                disabled={formData.objectives.length === 0}
                className="w-full py-4 bg-primary text-black font-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                Continuar
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black mb-2">Estimación de Inversión</h2>
              <p className="text-gray-400 mb-8">¿Qué presupuesto tenés estimado para la primera fase?</p>
              
              <div className="space-y-4">
                {[
                  '< $5,000 USD (MVP rápido)',
                  '$5,000 - $15,000 USD (Producto sólido)',
                  '$15,000 - $50,000 USD (Escala Empresarial)',
                  'Más de $50,000 USD / Retainer Mensual'
                ].map(budget => (
                  <button
                    key={budget}
                    onClick={() => { setFormData({...formData, budget}); handleNext(); }}
                    className={`w-full p-5 rounded-xl border text-left transition-all ${formData.budget === budget ? 'border-primary bg-primary/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400 hover:text-white'}`}
                  >
                    <div className="font-bold text-lg">{budget}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black mb-2">Tus Datos</h2>
              <p className="text-gray-400 mb-8">Dejanos tu información para que podamos enviarte la propuesta.</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Nombre completo *</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-background-dark border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" placeholder="Ej: Elon Musk" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Email *</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-background-dark border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" placeholder="elon@tesla.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Teléfono / Celular *</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-background-dark border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" placeholder="+54 9 11 1234 5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Detalles adicionales (Opcional)</label>
                  <textarea value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} rows={3} className="w-full bg-background-dark border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors resize-none" placeholder="Cualquier otra cosa que quieras contarnos..." />
                </div>
              </div>
              
              <button 
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="w-full py-4 bg-primary text-black font-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                Generar Propuesta
              </button>
            </div>
          )}

          {step === 6 && (
            <div className="animate-in zoom-in-95 duration-500 text-center py-10">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-black mb-4">¡Roadmap Generado!</h2>
              <p className="text-gray-400 mb-10 max-w-lg mx-auto">Ya tenemos estructurados los datos de tu proyecto. Elegí cómo preferís enviarnos esta información para que empecemos a trabajar.</p>
              
              <div className="space-y-4 max-w-sm mx-auto">
                <a 
                  href={generateWhatsAppMessage()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-black rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Enviar por WhatsApp
                </a>
                
                <form action="https://api.web3forms.com/submit" method="POST" target="_blank" className="space-y-4">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "c7c25ac7-501a-4b8d-a5d2-8550c9e394c9"} />
                  <input type="hidden" name="subject" value="Nuevo Proyecto Roadmap - ifcodear" />
                  <input type="hidden" name="Tipo Proyecto" value={formData.projectType} />
                  <input type="hidden" name="Estado Actual" value={formData.currentState} />
                  <input type="hidden" name="Objetivos" value={formData.objectives.join(', ')} />
                  <input type="hidden" name="Presupuesto" value={formData.budget} />
                  <input type="hidden" name="Nombre" value={formData.name} />
                  <input type="hidden" name="Email" value={formData.email} />
                  <input type="hidden" name="Celular" value={formData.phone} />
                  <input type="hidden" name="Detalles" value={formData.details} />
                  
                  <div className="text-left mt-6">
                    <label className="block text-sm font-bold text-gray-400 mb-2">Verificación: ¿Cuánto es {mathA} + {mathB}?</label>
                    <input
                      required
                      type="number"
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      placeholder="Respuesta..."
                      className="w-full bg-background-dark border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={parseInt(mathAnswer) !== mathA + mathB}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Enviar por Email
                  </button>
                </form>
              </div>
            </div>
          )}

          {step > 1 && step < 6 && (
             <button onClick={handlePrev} className="absolute top-6 left-6 text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-sm font-bold">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               Atrás
             </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default RoadmapBuilderPage;
