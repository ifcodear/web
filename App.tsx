
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import CheckoutPage from './pages/CheckoutPage';
import { Page, User } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [user, setUser] = useState<User | null>(null);

  // Simple hash-based routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage(Page.Home);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Services:
        return <ServicesPage />;
      case Page.Process:
        return <ProcessPage />;
      case Page.Checkout:
        return <CheckoutPage />;
      case Page.Home:
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-dark">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        user={user} 
        onLogin={handleLogin}
        onLogout={() => setUser(null)}
      />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
