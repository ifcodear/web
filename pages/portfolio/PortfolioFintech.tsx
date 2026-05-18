import React, { useEffect } from 'react';
import { Page } from '../../types';

interface PortfolioFintechProps {
  setCurrentPage: (page: Page) => void;
}

const PortfolioFintech: React.FC<PortfolioFintechProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080B12] min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 border-b border-white/5 bg-[#080B12]/80 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-500 to-cyan-500"></div>
          <span className="text-xl font-bold tracking-tight">VaultPay</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Business</a>
          <a href="#" className="hover:text-white transition-colors">Developers</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </div>
        <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors">
          Open Account
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              The New Standard
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Global Finance.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Simplified.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Move money across borders instantly, automate corporate spend, and scale your business globally with our unified financial API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Start for free
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Abstract Dashboard Graphic */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            {/* Main Card */}
            <div className="absolute top-10 right-10 w-[90%] h-[80%] bg-[#0B101A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-gray-400 text-sm font-medium">Total Balance</div>
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full">+14.5%</div>
              </div>
              <div className="text-4xl font-bold mb-8">$2,459,104.00</div>
              
              {/* Fake Chart */}
              <div className="w-full h-32 flex items-end gap-2">
                {[40, 70, 45, 90, 65, 85, 100, 60, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>

              {/* Transactions */}
              <div className="mt-8 space-y-4">
                {[
                  { name: 'Stripe Payout', amount: '+$45,200.00', date: 'Today, 2:45 PM', color: 'text-emerald-400' },
                  { name: 'AWS Cloud', amount: '-$12,450.00', date: 'Yesterday', color: 'text-white' }
                ].map((tx, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{tx.name}</div>
                        <div className="text-xs text-gray-500">{tx.date}</div>
                      </div>
                    </div>
                    <div className={`font-bold ${tx.color}`}>{tx.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Element 1 */}
            <div className="absolute -left-6 top-1/3 w-64 p-5 bg-[#121A27] border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[bounce_4s_ease-in-out_infinite_alternate]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
                <div className="font-bold text-sm">International Wire</div>
              </div>
              <div className="text-2xl font-bold">€125,000.00</div>
              <div className="text-xs text-emerald-400 mt-1">Processed instantly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#0B101A] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for scale.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Everything you need to manage your company's finances, all in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Global Accounts', desc: 'Hold, receive, and exchange money in over 50 currencies with zero hidden fees.' },
              { title: 'Corporate Cards', desc: 'Issue physical and virtual cards instantly. Set limits and control spend programmatically.' },
              { title: 'Automated Accounting', desc: 'Sync your data with Xero, Quickbooks, or Netsuite in real-time. No manual entry.' }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-[#080B12] border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <button 
        onClick={() => setCurrentPage(Page.Portfolio)}
        className="fixed bottom-6 right-6 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-colors z-50 shadow-2xl flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Portfolio
      </button>
    </div>
  );
};

export default PortfolioFintech;
