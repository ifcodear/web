
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-background-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo.jpg"
              alt="ifcodear logo"
              className="h-10 w-auto min-w-[40px] max-w-[120px] rounded-lg object-contain mix-blend-screen bg-transparent"
            />
            <span className="text-xl font-black text-white">ifcodear</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Construyendo el software que define el mañana. Líderes en transformación digital para empresas modernas.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all cursor-pointer">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all cursor-pointer">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Servicios</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Services)}>Web Full-Stack</li>
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Services)}>Mobile Development</li>
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Services)}>Cloud Solutions</li>
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Services)}>AI & Data</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Compañía</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Process)}>Nuestro Proceso</li>
            <li className="text-gray-600 cursor-not-allowed">Blog de Ingeniería</li>
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Portfolio)}>Casos de Éxito</li>
            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => {
              setCurrentPage(Page.Home);
              setTimeout(() => {
                window.location.hash = 'home';
                setTimeout(() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }, 100);
            }}>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              ifcodear@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +54 351 3038923
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <a
                href="https://wa.me/5493513038923?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Contactar por WhatsApp al +54 351 3038923"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Tandil, Argentina
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 ifcodear Inc. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setCurrentPage(Page.Sitemap)}>Sitemap</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setCurrentPage(Page.Sitemap)}>Aviso Legal</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setCurrentPage(Page.Sitemap)}>Privacidad</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setCurrentPage(Page.Sitemap)}>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
