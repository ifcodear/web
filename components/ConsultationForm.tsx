import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    // Web3Forms customization options
    formData.append("subject", "Nueva consulta desde la web de ifcodear");
    formData.append("from_name", "IfCodear");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error sending email", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Request failed", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div id="contact-form" className="w-full max-w-2xl mx-auto p-8 bg-surface-dark border border-white/10 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-black mb-2">Cuéntanos tu proyecto</h2>
      <p className="text-gray-400 mb-8">Nuestro equipo de expertos te responderá en menos de 24 horas.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam field */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400">Nombre Completo</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Juan Pérez"
              className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400">Correo Electrónico</label>
            <input
              required
              name="email"
              type="email"
              placeholder="juan@empresa.com"
              className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400">Tipo de Servicio</label>
          <select name="service" className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all">
            <option value="Desarrollo Web Full-Stack">Desarrollo Web Full-Stack</option>
            <option value="Aplicaciones Móviles">Aplicaciones Móviles</option>
            <option value="IA & Automatización">IA & Automatización</option>
            <option value="Consultoría Técnica">Consultoría Técnica</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400">Mensaje / Requerimientos</label>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Describe brevemente tu idea..."
            className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all resize-none"
          ></textarea>
        </div>

        <button
          disabled={status === 'sending' || status === 'success'}
          type="submit"
          className="w-full py-4 bg-primary text-black font-black rounded-xl hover:shadow-[0_0_20px_rgba(255,217,0,0.4)] disabled:opacity-50 disabled:hover:shadow-none transition-all flex items-center justify-center gap-3"
        >
          {status === 'sending' ? (
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          ) : status === 'success' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Mensaje Enviado Exitosamente
            </>
          ) : status === 'error' ? (
            'Ocurrió un error. Intenta nuevamente.'
          ) : (
            'Enviar Consulta Gratis'
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
