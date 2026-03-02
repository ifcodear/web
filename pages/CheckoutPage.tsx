
import React, { useState, useEffect } from 'react';

const CheckoutPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simulated Mercado Pago Checkout
  const handlePayment = () => {
    setLoading(true);
    // In a real scenario, you'd call your backend to create a preferenceId
    // and then use the MP SDK: mp.checkout({ preference: { id: preferenceId } }).open();
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-40 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-4xl font-black mb-4 text-white">¡Pago Confirmado!</h1>
        <p className="text-gray-400 mb-10 leading-relaxed">Hemos recibido tu reserva para la consultoría técnica. Un experto de ifcodear se pondrá en contacto contigo en los próximos 15 minutos.</p>
        <button 
          onClick={() => window.location.hash = 'home'}
          className="px-10 py-4 bg-primary text-black font-black rounded-xl hover:scale-105 transition-all"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
      <div className="flex-1">
        <h1 className="text-4xl font-black mb-6">Agenda tu Consultoría</h1>
        <p className="text-gray-400 mb-12">Inicia tu transformación digital con una sesión intensiva de 60 minutos con nuestros arquitectos de software senior.</p>
        
        <div className="space-y-8">
          <div className="p-6 bg-surface-dark border border-white/10 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Sesión de Estrategia</h3>
              <p className="text-gray-400 text-sm">Definición de roadmap, stack tecnológico y estimación de costos.</p>
            </div>
          </div>
          
          <div className="p-6 bg-surface-dark border border-white/10 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Acuerdo de Confidencialidad</h3>
              <p className="text-gray-400 text-sm">Tu idea está segura con nosotros bajo estricto contrato legal.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[400px]">
        <div className="p-8 bg-surface-dark border-2 border-primary/20 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-black mb-8">Resumen de Reserva</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Consultoría Técnica</span>
              <span className="text-white font-bold">$150.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Impuestos (IVA)</span>
              <span className="text-white font-bold">$31.50</span>
            </div>
            <div className="h-px bg-white/10 my-4" />
            <div className="flex justify-between text-lg font-black">
              <span className="text-primary">Total</span>
              <span className="text-white">$181.50</span>
            </div>
          </div>

          <button 
            onClick={handlePayment}
            disabled={loading}
            className="w-full py-4 bg-[#009ee3] text-white font-black rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo-0.png" className="h-5 brightness-0 invert" alt="MP" />
                Pagar con Mercado Pago
              </>
            )}
          </button>
          
          <p className="text-[10px] text-gray-500 text-center mt-6 uppercase tracking-widest">
            Transacción 100% segura procesada por Mercado Pago
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
